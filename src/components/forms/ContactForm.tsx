'use client';

import { useState, type FormEvent, type ReactNode } from 'react';
import { AlertCircle, Check } from 'lucide-react';
import { cn } from '@/lib/cn';
import { Button } from '@/components/ui/Button';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const roles = ['EPCC company', 'Developer', 'Asset owner', 'End user'];
const solarOptions = ['Yes', 'No', 'Not sure'];

const fieldBase =
  'w-full rounded-xl border bg-paper px-4 py-2.5 text-sm text-ink transition-colors placeholder:text-muted/50 focus:border-accent-2 focus:outline-none focus:ring-2 focus:ring-accent-2/25';

function Label({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-ink">
      {children}
      {required && (
        <span className="text-accent" aria-hidden="true">
          {' '}
          *
        </span>
      )}
    </label>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
      <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      {message}
    </p>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) ?? '').trim();

    const next: Record<string, string> = {};
    if (!value('name')) next.name = 'Please enter your name.';
    if (!value('company')) next.company = 'Please enter your company.';
    const email = value('email');
    if (!email) next.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Please enter a valid email address.';
    if (!value('message')) next.message = 'Please tell us about your project.';

    setErrors(next);
    if (Object.keys(next).length > 0) {
      const firstKey = Object.keys(next)[0];
      form.querySelector<HTMLElement>(`[name="${firstKey}"]`)?.focus();
      return;
    }

    setStatus('submitting');
    setErrorMessage('');
    try {
      const payload = Object.fromEntries(data.entries());
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error ?? 'Something went wrong. Please try again.');
      }
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-accent-2/30 bg-accent-2/5 p-8">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent-2/15 text-accent-2">
          <Check className="h-6 w-6" strokeWidth={2.5} aria-hidden="true" />
        </span>
        <div>
          <h2 className="font-display text-xl font-semibold text-ink">Thank you — message received.</h2>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
            Your project details are on their way to the Solunar team. We&rsquo;ll be in touch to
            discuss the right BESS technology and integration approach for your project.
          </p>
        </div>
        <Button variant="outline" onClick={() => setStatus('idle')}>
          Submit another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-line bg-paper p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name" required>
            Name
          </Label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={cn(fieldBase, errors.name ? 'border-red-500' : 'border-line')}
          />
          <FieldError id="name-error" message={errors.name} />
        </div>

        <div>
          <Label htmlFor="company" required>
            Company
          </Label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            aria-invalid={errors.company ? true : undefined}
            aria-describedby={errors.company ? 'company-error' : undefined}
            className={cn(fieldBase, errors.company ? 'border-red-500' : 'border-line')}
          />
          <FieldError id="company-error" message={errors.company} />
        </div>

        <div>
          <Label htmlFor="email" required>
            Email
          </Label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={cn(fieldBase, errors.email ? 'border-red-500' : 'border-line')}
          />
          <FieldError id="email-error" message={errors.email} />
        </div>

        <div>
          <Label htmlFor="phone">Phone</Label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={cn(fieldBase, 'border-line')} />
        </div>

        <div>
          <Label htmlFor="role">Role</Label>
          <select id="role" name="role" defaultValue="" className={cn(fieldBase, 'border-line')}>
            <option value="" disabled>
              Select your role
            </option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label htmlFor="projectLocation">Project location</Label>
          <input
            id="projectLocation"
            name="projectLocation"
            type="text"
            placeholder="e.g. Selangor, Malaysia"
            className={cn(fieldBase, 'border-line')}
          />
        </div>

        <div>
          <Label htmlFor="projectType">Project type</Label>
          <input
            id="projectType"
            name="projectType"
            type="text"
            placeholder="e.g. C&I peak shaving, utility-scale ESS"
            className={cn(fieldBase, 'border-line')}
          />
        </div>

        <div>
          <Label htmlFor="projectSize">Estimated project size</Label>
          <input
            id="projectSize"
            name="projectSize"
            type="text"
            placeholder="e.g. 500 kW / 1 MWh"
            className={cn(fieldBase, 'border-line')}
          />
        </div>

        <div>
          <Label htmlFor="existingSolar">Existing solar system</Label>
          <select id="existingSolar" name="existingSolar" defaultValue="" className={cn(fieldBase, 'border-line')}>
            <option value="" disabled>
              If any
            </option>
            {solarOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label htmlFor="bessCapacity">Required BESS capacity</Label>
          <input
            id="bessCapacity"
            name="bessCapacity"
            type="text"
            placeholder="If known"
            className={cn(fieldBase, 'border-line')}
          />
        </div>

        <div>
          <Label htmlFor="maxDemand">Maximum demand</Label>
          <input
            id="maxDemand"
            name="maxDemand"
            type="text"
            placeholder="If known (kW)"
            className={cn(fieldBase, 'border-line')}
          />
        </div>

        <div>
          <Label htmlFor="monthlyBill">Monthly electricity bill</Label>
          <input
            id="monthlyBill"
            name="monthlyBill"
            type="text"
            placeholder="If available (RM)"
            className={cn(fieldBase, 'border-line')}
          />
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="message" required>
            Message
          </Label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell us about your Solar + BESS project, timeline and what support you need."
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className={cn(fieldBase, 'resize-y', errors.message ? 'border-red-500' : 'border-line')}
          />
          <FieldError id="message-error" message={errors.message} />
        </div>
      </div>

      {status === 'error' && (
        <p
          role="alert"
          className="mt-5 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          {errorMessage}
        </p>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={status === 'submitting'} withArrow={status !== 'submitting'}>
          {status === 'submitting' ? 'Submitting…' : 'Submit Project Requirements'}
        </Button>
        <p className="text-xs text-muted">
          Fields marked <span className="text-accent">*</span> are required.
        </p>
      </div>
    </form>
  );
}
