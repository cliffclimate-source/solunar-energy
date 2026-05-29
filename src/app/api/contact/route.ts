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

function formatSubmission(data: Record<string, unknown>): string {
  return FIELDS.map(([label, key]) => {
    const raw = String(data[key] ?? '').trim();
    return `${label}: ${raw || '—'}`;
  }).join('\n');
}

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const name = String(data.name ?? '').trim();
  const company = String(data.company ?? '').trim();
  const email = String(data.email ?? '').trim();
  const message = String(data.message ?? '').trim();

  if (!name || !company || !message || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Please complete the required fields.' }, { status: 422 });
  }

  // --- Email delivery ---
  // TODO (before launch): configure an email provider via environment variables.
  //   CONTACT_EMAIL   = inbox that should receive enquiries
  //   RESEND_API_KEY  = API key for Resend (https://resend.com) — or swap for your provider
  // No secrets are hardcoded. Until configured, submissions are logged server-side
  // and the form still returns success so the UX flow is testable.
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;
  const submission = formatSubmission(data);

  if (!apiKey || !to) {
    console.warn(
      '[contact] RESEND_API_KEY / CONTACT_EMAIL not set — submission logged only, not emailed.',
    );
    console.info('[contact] new enquiry:\n' + submission);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // TODO: replace with a verified sender on your own domain.
        from: 'Solunar Website <onboarding@resend.dev>',
        to: [to],
        reply_to: email,
        subject: `New Solar + BESS enquiry — ${company}`,
        text: submission,
      }),
    });
    if (!res.ok) throw new Error(`Email provider responded ${res.status}`);
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error('[contact] email send failed:', err);
    return NextResponse.json(
      { error: 'We could not send your message right now. Please email us directly.' },
      { status: 502 },
    );
  }
}
