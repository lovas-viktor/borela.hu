"use client";

import { useState } from "react";
import { CONTACT } from "@/data/site";

interface ContactFormProps {
  dict: Record<string, string>;
}

export default function ContactForm({ dict }: ContactFormProps) {
  const t = (k: string) => dict[k] ?? k;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Stub — backend integration pending
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 border border-border bg-surface text-center">
        <p className="font-semibold text-ink mb-2">{t("contactForm.success.heading")}</p>
        <p className="text-[14px] text-ink-secondary">{t("contactForm.success.body")}</p>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit} aria-label={t("contactForm.aria.label")}>
      <div>
        <label htmlFor="c-name" className="block font-mono text-[11px] tracking-[0.08em] uppercase text-ink-secondary mb-1.5">
          {t("contactForm.name.label")} <span className="text-red-500">*</span>
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
          {t("contactForm.email.label")} <span className="text-red-500">*</span>
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
          {t("contactForm.message.label")} <span className="text-red-500">*</span>
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
        {t("contactForm.submit")}
      </button>
      <p className="text-[12px] text-ink-tertiary">
        {t("contactForm.emailFallback")}{" "}
        <a href={`mailto:${CONTACT.email}`} className="underline">{CONTACT.email}</a> {t("contactForm.emailFallback.suffix")}
      </p>
    </form>
  );
}
