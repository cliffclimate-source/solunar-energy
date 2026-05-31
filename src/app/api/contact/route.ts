import { NextResponse } from 'next/server';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FIELDS: [label: string, key: string][] = [
  ['Name', 'name'],
  ['Company', 'company'],
  ['Email', 'email'],
  ['Phone', 'phone'],
  ['Role', 'role'],
  ['Project location', 'projectLocation'],
  ['Project type', 'projectType'],
  ['Estimated project size', 'projectSize'],
  ['Existing solar system', 'existingSolar'],
  ['Required BESS capacity', 'bessCapacity'],
  ['Maximum demand', 'maxDemand'],
  ['Monthly electricity bill', 'monthlyBill'],
  ['Message', 'message'],
];

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Plain-text version (fallback for clients that don't render HTML). */
function formatText(data: Record<string, unknown>): string {
  return FIELDS.map(([label, key]) => {
    const raw = String(data[key] ?? '').trim();
    return `${label}: ${raw || '—'}`;
  }).join('\n');
}

/** Readable HTML email so enquiries are easy to scan in the inbox. */
function formatHtml(data: Record<string, unknown>): string {
  const rows = FIELDS.map(([label, key]) => {
    const raw = String(data[key] ?? '').trim();
    const val = raw ? escapeHtml(raw).replace(/\n/g, '<br>') : '—';
    return `<tr>
      <td style="padding:8px 14px;background:#f5f5f7;font-size:13px;color:#6e6e73;white-space:nowrap;vertical-align:top;border-bottom:1px solid #eee;">${label}</td>
      <td style="padding:8px 14px;font-size:14px;color:#1d1d1f;border-bottom:1px solid #eee;">${val}</td>
    </tr>`;
  }).join('');

  return `<!doctype html><html><body style="margin:0;background:#f5f5f7;padding:24px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e8e8ed;">
      <tr><td style="padding:22px 24px;background:#0A1A2F;color:#ffffff;">
        <div style="font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#14B8A6;">New Solar + BESS enquiry</div>
        <div style="font-size:20px;font-weight:600;margin-top:4px;">Solunar Energy — website contact form</div>
      </td></tr>
      <tr><td style="padding:8px 0;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}</table>
      </td></tr>
      <tr><td style="padding:16px 24px;font-size:12px;color:#9a9aa0;">
        Sent automatically from solunar.my. Reply directly to respond to the sender.
      </td></tr>
    </table>
  </body></html>`;
}

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields; humans never see them. Silently accept
  // (return success) so the bot doesn't retry, but don't send the email.
  const trap = String(data.website ?? data.company_url ?? '').trim();
  if (trap) {
    return NextResponse.json({ ok: true, delivered: false });
  }

  const name = String(data.name ?? '').trim();
  const company = String(data.company ?? '').trim();
  const email = String(data.email ?? '').trim();
  const message = String(data.message ?? '').trim();

  if (!name || !company || !message || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Please complete the required fields.' }, { status: 422 });
  }

  // --- Email delivery (Resend) ---
  // Configure via environment variables (no secrets in code):
  //   RESEND_API_KEY = API key from https://resend.com
  //   CONTACT_EMAIL  = inbox that receives enquiries (default: jimmy@solunar.my)
  //   CONTACT_FROM   = verified sender on your domain, e.g.
  //                    "Solunar Website <noreply@solunar.my>"
  // Until RESEND_API_KEY is set, submissions are logged server-side and the
  // form still returns success so the UX flow keeps working.
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL || 'jimmy@solunar.my';
  // Falls back to Resend's shared test sender until your domain is verified.
  const from = process.env.CONTACT_FROM || 'Solunar Website <onboarding@resend.dev>';
  const text = formatText(data);

  if (!apiKey) {
    console.warn('[contact] RESEND_API_KEY not set — submission logged only, not emailed.');
    console.info('[contact] new enquiry:\n' + text);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10_000);
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New Solar + BESS enquiry — ${company}`,
        text,
        html: formatHtml(data),
      }),
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (!res.ok) {
      const detail = await res.text().catch(() => '');
      console.error(`[contact] Resend responded ${res.status}: ${detail}`);
      throw new Error(`Email provider responded ${res.status}`);
    }
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error('[contact] email send failed:', err);
    return NextResponse.json(
      { error: 'We could not send your message right now. Please email us directly.' },
      { status: 502 },
    );
  }
}
