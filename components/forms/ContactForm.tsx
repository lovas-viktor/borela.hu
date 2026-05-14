"use client";

import { useState } from "react";
import { CONTACT } from "@/data/site";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Stub — backend integration pending
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 border border-border bg-surface text-center">
        <p className="font-semibold text-ink mb-2">Message received</p>
        <p className="text-[14px] text-ink-secondary">We&apos;ll reply within 2 business days.</p>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit} aria-label="Contact form">
      <div>
        <label htmlFor="c-name" className="block font-mono text-[11px] tracking-[0.08em] uppercase text-ink-secondary mb-1.5">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="c-name"
          type="text"
          required
          className="w-full border border-border px-3.5 py-2.5 font-sans text-[14px] text-ink bg-background focus:outline-none focus:border-primary transition-colors"
        />
      </div>
      <div>
        <label htmlFor="c-email" className="block font-mono text-[11px] tracking-[0.08em] uppercase text-ink-secondary mb-1.5">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="c-email"
          type="email"
          required
          className="w-full border border-border px-3.5 py-2.5 font-sans text-[14px] text-ink bg-background focus:outline-none focus:border-primary transition-colors"
        />
      </div>
      <div>
        <label htmlFor="c-msg" className="block font-mono text-[11px] tracking-[0.08em] uppercase text-ink-secondary mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="c-msg"
          rows={5}
          required
          className="w-full border border-border px-3.5 py-2.5 font-sans text-[14px] text-ink bg-background focus:outline-none focus:border-primary transition-colors resize-y"
        />
      </div>
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center px-[22px] py-3 font-sans font-bold text-[11px] tracking-[0.16em] uppercase bg-primary text-on-primary hover:bg-primary-hover transition-colors"
      >
        Send message
      </button>
      <p className="text-[12px] text-ink-tertiary">
        Backend integration pending. For immediate response, email{" "}
        <a href={`mailto:${CONTACT.email}`} className="underline">{CONTACT.email}</a> directly.
      </p>
    </form>
  );
}
