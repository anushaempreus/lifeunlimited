"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(
          json.error ?? "Something went wrong. Please try again or call us."
        );
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again or call us on 02 6248 5138.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-3xl border border-lime/40 bg-cream p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-lime/20 text-olive-deep">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="h-6 w-6" aria-hidden>
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Thank you — message sent</h3>
        <p>We’ll be in touch as soon as we can. For anything urgent, please call{" "}
          <a href="tel:0262485138" className="text-blue-dark underline underline-offset-4">02 6248 5138</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="block text-sm font-medium text-heading mb-1.5">
            Name <span className="text-blue-dark">*</span>
          </label>
          <input id="cf-name" name="name" type="text" required maxLength={120} autoComplete="name" className="field" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="cf-phone" className="block text-sm font-medium text-heading mb-1.5">
            Phone
          </label>
          <input id="cf-phone" name="phone" type="tel" maxLength={40} autoComplete="tel" className="field" placeholder="Optional" />
        </div>
      </div>

      <div>
        <label htmlFor="cf-email" className="block text-sm font-medium text-heading mb-1.5">
          Email <span className="text-blue-dark">*</span>
        </label>
        <input id="cf-email" name="email" type="email" required maxLength={200} autoComplete="email" className="field" placeholder="you@example.com" />
      </div>

      {/* Honeypot — hidden from humans, catches bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="cf-company">Company</label>
        <input id="cf-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="cf-message" className="block text-sm font-medium text-heading mb-1.5">
          How can we help? <span className="text-blue-dark">*</span>
        </label>
        <textarea id="cf-message" name="message" required rows={5} maxLength={4000} className="field resize-y" placeholder="Tell us a little about what you’re looking for…" />
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMsg}
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className="btn-blue !px-8 disabled:opacity-60 disabled:cursor-not-allowed">
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      <p className="text-xs text-body/70">
        Your enquiry goes directly to our team — we never share your details.
      </p>
    </form>
  );
}
