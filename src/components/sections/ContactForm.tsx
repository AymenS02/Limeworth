import { AnimatePresence, motion } from 'framer-motion';
import { useId, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { clinic, services } from '../../data/clinic';
import { cn } from '../../lib/cn';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { ease } from '../motion/variants';

// The site is static, so the form composes an email in the visitor's mail app.
// That also lets patients attach their requisition, which the clinic needs to book.

const topics = [
  ...services.filter((s) => s.booking === 'appointment').map((s) => `Book ${s.shortName.toLowerCase()} appointment`),
  'X-ray question',
  'General question',
];

type Field = 'name' | 'phone' | 'email' | 'topic' | 'preferred' | 'message';
type Values = Record<Field, string>;
type Errors = Partial<Record<Field, string>>;

const initial: Values = { name: '', phone: '', email: '', topic: '', preferred: '', message: '' };

function validate(v: Values): Errors {
  const errors: Errors = {};
  if (!v.name.trim()) errors.name = 'Please enter your name.';
  if (v.phone.replace(/\D/g, '').length < 10) errors.phone = 'Please enter a phone number we can reach you at.';
  if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim()))
    errors.email = 'Please enter a valid email address, or leave it blank.';
  if (!v.topic) errors.topic = 'Please choose what you need help with.';
  return errors;
}

function buildMailto(v: Values) {
  const lines = [`Name: ${v.name.trim()}`, `Phone: ${v.phone.trim()}`];
  if (v.email.trim()) lines.push(`Email: ${v.email.trim()}`);
  lines.push(`Request: ${v.topic}`);
  if (v.preferred.trim()) lines.push(`Preferred day/time: ${v.preferred.trim()}`);
  if (v.message.trim()) lines.push('', v.message.trim());
  if (v.topic.startsWith('Book')) lines.push('', "[Please attach a photo or scan of your doctor's requisition.]");

  const subject = `${v.topic} — ${v.name.trim()}`;
  return `${clinic.email.href}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
}

export function ContactForm() {
  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const set = (field: Field) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((err) => ({ ...err, [field]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const firstInvalid = (Object.keys(found) as Field[])[0];
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    window.location.href = buildMailto(values);
    setSent(true);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <AnimatePresence mode="wait" initial={false}>
        {sent ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.3, ease } }}
            exit={{ opacity: 0 }}
            role="status"
            className="py-6 text-center"
          >
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-700">
              <Icon name="check" className="h-6 w-6" strokeWidth={2.5} />
            </span>
            <h3 className="mt-5 text-xl font-semibold text-slate-900">Almost done — check your email app</h3>
            <p className="mx-auto mt-3 max-w-md text-pretty leading-relaxed text-slate-600">
              We’ve prepared your message. Attach your requisition if you have one, then press send. We’ll
              contact you to confirm your appointment.
            </p>
            <p className="mx-auto mt-4 max-w-md text-sm text-slate-500">
              Nothing opened? Email{' '}
              <a href={clinic.email.href} className="font-medium text-brand-700 underline underline-offset-2">
                {clinic.email.display}
              </a>{' '}
              or call{' '}
              <a href={clinic.phone.href} className="font-medium text-brand-700 underline underline-offset-2">
                {clinic.phone.display}
              </a>
              .
            </p>
            <Button variant="secondary" className="mt-6" onClick={() => setSent(false)}>
              Back to form
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            ref={formRef}
            noValidate
            onSubmit={onSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-labelledby="contact-form-title"
          >
            <h2 id="contact-form-title" className="text-xl font-semibold text-slate-900">
              Request an appointment
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              X-rays are walk-in — no booking needed. For ultrasound, mammogram or bone density, send us your
              details and we’ll contact you to book.
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <TextField label="Full name" name="name" autoComplete="name" value={values.name} onChange={set('name')} error={errors.name} required />
              <TextField label="Phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" value={values.phone} onChange={set('phone')} error={errors.phone} required />
              <TextField label="Email" name="email" type="email" autoComplete="email" spellCheck={false} value={values.email} onChange={set('email')} error={errors.email} hint="Optional" />
              <SelectField label="I need help with" name="topic" value={values.topic} onChange={set('topic')} error={errors.topic} options={topics} required />
              <TextField
                label="Preferred day or time"
                name="preferred"
                value={values.preferred}
                onChange={set('preferred')}
                hint="Optional — e.g. Saturday morning"
                className="sm:col-span-2"
              />
              <TextAreaField label="Message" name="message" value={values.message} onChange={set('message')} hint="Optional" className="sm:col-span-2" />
            </div>

            <div className="mt-6 flex gap-3 rounded-lg bg-accent-50 p-4 text-sm leading-relaxed text-accent-800">
              <Icon name="info" className="mt-0.5 h-5 w-5 shrink-0" />
              <p>
                This opens a pre-filled email in your mail app so you can attach your requisition. Please don’t
                include detailed medical information in your message.
              </p>
            </div>

            <Button type="submit" size="lg" iconRight="arrowRight" className="mt-6 w-full sm:w-auto">
              Continue to email
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------- Field primitives ---------- */

const control =
  'block w-full rounded-lg border bg-white px-3.5 py-2.5 text-base text-slate-900 shadow-sm transition-colors placeholder:text-slate-400 focus:outline-none focus:ring-2 sm:text-sm';
const controlState = (error?: string) =>
  error
    ? 'border-red-400 focus:border-red-500 focus:ring-red-500/30'
    : 'border-slate-300 hover:border-slate-400 focus:border-brand-700 focus:ring-brand-700/25';

interface FieldShellProps {
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  className?: string;
  children: (ids: { id: string; describedBy?: string }) => ReactNode;
}

function FieldShell({ label, error, hint, required, className, children }: FieldShellProps) {
  const id = useId();
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  const describedBy = [hint && hintId, error && errorId].filter(Boolean).join(' ') || undefined;

  return (
    <div className={className}>
      <div className="mb-1.5 flex items-baseline justify-between gap-2">
        <label htmlFor={id} className="text-sm font-medium text-slate-800">
          {label}
          {required && (
            <span className="text-red-600" aria-hidden="true">
              {' '}
              *
            </span>
          )}
        </label>
        {hint && (
          <span id={hintId} className="text-xs text-slate-500">
            {hint}
          </span>
        )}
      </div>
      {children({ id, describedBy })}
      {error && (
        <p id={errorId} className="mt-1.5 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'> & {
  label: string;
  name: Field;
  error?: string;
  hint?: string;
  className?: string;
};

function TextField({ label, error, hint, required, className, type = 'text', ...input }: InputProps) {
  return (
    <FieldShell label={label} error={error} hint={hint} required={required} className={className}>
      {({ id, describedBy }) => (
        <input
          id={id}
          type={type}
          aria-required={required || undefined}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={cn(control, controlState(error))}
          {...input}
        />
      )}
    </FieldShell>
  );
}

function SelectField({
  label,
  error,
  hint,
  required,
  className,
  options,
  ...select
}: Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'className'> & {
  label: string;
  name: Field;
  error?: string;
  hint?: string;
  className?: string;
  options: string[];
}) {
  return (
    <FieldShell label={label} error={error} hint={hint} required={required} className={className}>
      {({ id, describedBy }) => (
        <div className="relative">
          <select
            id={id}
            aria-required={required || undefined}
            aria-invalid={error ? true : undefined}
            aria-describedby={describedBy}
            className={cn(control, controlState(error), 'appearance-none pr-10', !select.value && 'text-slate-400')}
            {...select}
          >
            <option value="" disabled>
              Choose one…
            </option>
            {options.map((o) => (
              <option key={o} value={o} className="text-slate-900">
                {o}
              </option>
            ))}
          </select>
          <Icon
            name="chevronDown"
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
          />
        </div>
      )}
    </FieldShell>
  );
}

function TextAreaField({
  label,
  error,
  hint,
  className,
  ...textarea
}: Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'> & {
  label: string;
  name: Field;
  error?: string;
  hint?: string;
  className?: string;
}) {
  return (
    <FieldShell label={label} error={error} hint={hint} className={className}>
      {({ id, describedBy }) => (
        <textarea
          id={id}
          rows={4}
          aria-describedby={describedBy}
          className={cn(control, controlState(error), 'resize-y')}
          {...textarea}
        />
      )}
    </FieldShell>
  );
}
