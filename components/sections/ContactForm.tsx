"use client";

import { useActionState, useEffect, useRef } from "react";
import { CircleAlert, CircleCheck, Loader2 } from "lucide-react";
import { submitContact } from "@/app/actions/contact";
import { budgetOptions, serviceOptions, type ContactField, type ContactState } from "@/lib/contact";
import { cn } from "@/lib/cn";

const initialState: ContactState = { status: "idle" };

const inputClass =
  "mt-2 block w-full rounded-lg border-0 bg-white px-3.5 py-2.5 text-ink shadow-[inset_0_1px_2px_rgb(17_20_57/0.06)] ring-1 ring-ink/15 transition placeholder:text-ink-muted/70 focus:ring-2 focus:ring-brand focus:outline-none aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-[#c81e3a]";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const statusRef = useRef<HTMLDivElement>(null);

  // Move focus to the outcome so screen-reader and keyboard users hear it.
  useEffect(() => {
    if (state.status !== "idle") statusRef.current?.focus();
  }, [state]);

  if (state.status === "success") {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        className="flex flex-col items-center rounded-2xl bg-white p-10 text-center shadow-soft ring-1 ring-ink/5"
      >
        <CircleCheck aria-hidden="true" className="size-12 text-[#15803d]" />
        <h3 className="mt-4 text-2xl font-bold text-ink">Message received</h3>
        <p className="mt-2 max-w-sm text-ink-soft">
          {state.message ?? "Thanks for getting in touch. We'll reply shortly."}
        </p>
      </div>
    );
  }

  const err = (field: ContactField) => state.fieldErrors?.[field];
  const v = (field: ContactField) => state.values?.[field] ?? "";
  const describedBy = (field: ContactField) => (err(field) ? `${field}-error` : undefined);

  return (
    <form
      action={formAction}
      noValidate
      className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-ink/5 sm:p-8"
      aria-describedby="form-note"
    >
      {state.status === "error" && state.message && (
        <div
          ref={statusRef}
          tabIndex={-1}
          role="alert"
          className="mb-6 flex items-start gap-3 rounded-lg bg-[#fdecef] p-4 text-sm font-medium text-[#8a1028]"
        >
          <CircleAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
          {state.message}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" error={err("name")} required>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            defaultValue={v("name")}
            aria-invalid={!!err("name")}
            aria-describedby={describedBy("name")}
            className={inputClass}
          />
        </Field>
        <Field label="Email" name="email" error={err("email")} required>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            defaultValue={v("email")}
            aria-invalid={!!err("email")}
            aria-describedby={describedBy("email")}
            className={inputClass}
          />
        </Field>
        <Field label="Phone" name="phone" error={err("phone")} hint="Optional">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            defaultValue={v("phone")}
            aria-invalid={!!err("phone")}
            aria-describedby={describedBy("phone")}
            className={inputClass}
          />
        </Field>
        <Field label="Service interest" name="service" error={err("service")} required>
          <select
            id="service"
            name="service"
            required
            defaultValue={v("service")}
            aria-invalid={!!err("service")}
            aria-describedby={describedBy("service")}
            className={cn(inputClass, "pr-9")}
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </Field>
        <Field
          label="Budget (AUD)"
          name="budget"
          error={err("budget")}
          required
          className="sm:col-span-2"
        >
          <select
            id="budget"
            name="budget"
            required
            defaultValue={v("budget")}
            aria-invalid={!!err("budget")}
            aria-describedby={describedBy("budget")}
            className={cn(inputClass, "pr-9")}
          >
            <option value="" disabled>
              Select a budget range
            </option>
            {budgetOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </Field>
        <Field
          label="Message"
          name="message"
          error={err("message")}
          required
          className="sm:col-span-2"
        >
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            defaultValue={v("message")}
            placeholder="Tell us about your business and what you'd like to build."
            aria-invalid={!!err("message")}
            aria-describedby={describedBy("message")}
            className={inputClass}
          />
        </Field>
      </div>

      {/* Honeypot: hidden from people and assistive tech; bots tend to fill it. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="company_website">Leave this field empty</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p id="form-note" className="text-sm text-ink-muted">
          Fields marked <span aria-hidden="true">*</span>
          <span className="sr-only">with an asterisk</span> are required. We never share your
          details.
        </p>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-ink px-6 font-semibold text-white shadow-soft transition hover:bg-[#262a5c] disabled:cursor-wait disabled:opacity-70"
        >
          {pending && <Loader2 aria-hidden="true" className="size-4 animate-spin" />}
          {pending ? "Sending…" : "Send enquiry"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  hint,
  required,
  className,
  children,
}: {
  label: string;
  name: ContactField;
  error?: string;
  hint?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="flex items-baseline justify-between text-sm font-semibold text-ink"
      >
        <span>
          {label}
          {required && (
            <span aria-hidden="true" className="text-[#c81e3a]">
              {" "}
              *
            </span>
          )}
        </span>
        {hint && <span className="text-xs font-normal text-ink-muted">{hint}</span>}
      </label>
      {children}
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-sm font-medium text-[#b0172f]">
          {error}
        </p>
      )}
    </div>
  );
}
