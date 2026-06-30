"use client";

import { useState, useRef, useEffect, DragEvent, ChangeEvent } from "react";
import clsx from "clsx";
import Link from "next/link";
import Button from "@/components/primitives/Button";

interface CareersFormProps {
  positions: string[];
  /** When set (e.g. clicking "Apply" next to a role), preselects the position field. */
  presetPosition?: string;
  /** Bumped on every "Apply" click so re-selecting the same role still applies. */
  presetKey?: number;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  message: string;
  consent: boolean;
}

type FieldErrors = Partial<Record<keyof FormData | "cv", string>>;

export default function CareersForm({ positions, presetPosition, presetKey }: CareersFormProps) {
  const [form, setForm] = useState<FormData>({
    name: "", email: "", phone: "", position: "", message: "", consent: false,
  });

  // Preselect the position when an "Apply" button upstream sets it.
  // presetKey is in the dependency list so clicking the same role twice still applies.
  useEffect(() => {
    if (presetPosition) {
      setForm((prev) => ({ ...prev, position: presetPosition }));
      setErrors((prev) => ({ ...prev, position: undefined }));
    }
  }, [presetPosition, presetKey]);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [cv, setCv] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const set = (field: keyof FormData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const addFile = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const file = files[0];
    const allowed = [".pdf", ".doc", ".docx"];
    const ext = "." + file.name.split(".").pop()?.toLowerCase();
    if (allowed.includes(ext) && file.size <= 10 * 1024 * 1024) {
      setCv(file);
      setErrors((prev) => ({ ...prev, cv: undefined }));
    }
  };

  const onDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragOver(false);
    addFile(e.dataTransfer.files);
  };

  const validate = (): boolean => {
    const errs: FieldErrors = {};
    if (!form.name.trim()) errs.name = "Please enter your full name.";
    if (!form.email.trim() || !/^[^@]+@[^@]+\.[^@]+$/.test(form.email))
      errs.email = "Please enter a valid email address.";
    if (!form.position) errs.position = "Please choose a position.";
    if (!cv) errs.cv = "Please attach your CV.";
    if (!form.consent) errs.consent = "Please accept the privacy notice to continue.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = () => {
    if (honeypot) return; // spam bot
    if (!validate()) return;
    // Stub — log payload, no backend yet
    console.log("Careers application:", { ...form, cv: cv?.name });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-7 text-center border border-border bg-background">
        <svg className="w-14 h-14 text-primary mb-6" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
          <circle cx="28" cy="28" r="24" />
          <path d="M16 28l8 8 16-18" />
        </svg>
        <h3 className="font-extrabold text-2xl tracking-[-0.02em] uppercase text-ink mb-3">Application received</h3>
        <p className="text-ink-secondary text-[15px] leading-relaxed max-w-md">
          Thanks for applying. We review every application personally and will be in touch if your profile fits.
        </p>
      </div>
    );
  }

  const inputCls = (field: keyof FieldErrors) =>
    clsx(
      "w-full border px-3.5 py-2.5 font-sans text-[14px] text-ink bg-background placeholder:text-ink-tertiary focus:outline-none focus:border-primary transition-colors",
      errors[field] ? "border-red-500" : "border-border"
    );

  return (
    <div>
      {/* Honeypot — visually hidden */}
      <input
        tabIndex={-1}
        aria-hidden="true"
        className="absolute opacity-0 pointer-events-none h-0 w-0 overflow-hidden"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        autoComplete="off"
      />

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="c-name" className="block font-mono text-[11px] tracking-[0.08em] uppercase text-ink-secondary mb-1.5">
            Full name <span className="text-red-500" aria-label="required">*</span>
          </label>
          <input id="c-name" type="text" name="name" required autoComplete="name" className={inputCls("name")} value={form.name} onChange={set("name")} />
          {errors.name && <p className="mt-1 text-[11px] text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="c-email" className="block font-mono text-[11px] tracking-[0.08em] uppercase text-ink-secondary mb-1.5">
            Email <span className="text-red-500" aria-label="required">*</span>
          </label>
          <input id="c-email" type="email" name="email" required autoComplete="email" className={inputCls("email")} value={form.email} onChange={set("email")} />
          {errors.email && <p className="mt-1 text-[11px] text-red-500">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="c-phone" className="block font-mono text-[11px] tracking-[0.08em] uppercase text-ink-secondary mb-1.5">
            Phone number
          </label>
          <input id="c-phone" type="tel" name="phone" autoComplete="tel" className={inputCls("phone")} value={form.phone} onChange={set("phone")} />
        </div>
        <div>
          <label htmlFor="c-position" className="block font-mono text-[11px] tracking-[0.08em] uppercase text-ink-secondary mb-1.5">
            Position <span className="text-red-500" aria-label="required">*</span>
          </label>
          <select id="c-position" name="position" required className={clsx(inputCls("position"), "appearance-none")} value={form.position} onChange={set("position")}>
            <option value="">Select…</option>
            {positions.map((p) => <option key={p} value={p}>{p}</option>)}
            <option value="General / spontaneous application">General / spontaneous application</option>
          </select>
          {errors.position && <p className="mt-1 text-[11px] text-red-500">{errors.position}</p>}
        </div>
      </div>

      {/* CV upload */}
      <div className="mt-5">
        <span className="block font-mono text-[11px] tracking-[0.08em] uppercase text-ink-secondary mb-1.5">
          CV / Résumé <span className="text-red-500" aria-label="required">*</span>
        </span>
        {cv ? (
          <div className="flex items-center gap-3 p-3 border border-border bg-background text-[13px]">
            <svg className="w-5 h-5 text-ink-tertiary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" aria-hidden="true">
              <path d="M5 3h10l4 4v14H5z" /><path d="M15 3v4h4" />
            </svg>
            <span className="flex-1 truncate text-ink">{cv.name}</span>
            <span className="text-ink-tertiary font-mono text-[10px]">{(cv.size / 1024 / 1024).toFixed(1)} MB</span>
            <button
              type="button"
              className="p-1 text-ink-tertiary hover:text-ink transition-colors"
              aria-label={`Remove ${cv.name}`}
              onClick={() => { setCv(null); if (fileInputRef.current) fileInputRef.current.value = ""; }}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" aria-hidden="true">
                <path d="M4 4l12 12M16 4L4 16" />
              </svg>
            </button>
          </div>
        ) : (
          <label
            htmlFor="c-cv"
            className={clsx(
              "flex flex-col items-center justify-center gap-2 py-8 px-6 border border-dashed text-center cursor-pointer transition-colors",
              dragOver ? "border-primary bg-primary-light" : (errors.cv ? "border-red-500 bg-surface" : "border-border bg-background hover:bg-surface-alt")
            )}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={onDrop}
          >
            <svg className="w-8 h-8 text-ink-tertiary" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
              <path d="M6 26v4h24v-4" /><path d="M18 6v18" /><path d="M10 14l8-8 8 8" />
            </svg>
            <div className="text-[14px] text-ink">
              <strong>Drag & drop your CV</strong>, or <span className="text-primary border-b border-primary">browse</span>
            </div>
            <div className="font-mono text-[11px] tracking-[0.06em] text-ink-tertiary uppercase">PDF · DOC · DOCX — up to 10 MB</div>
            <input
              ref={fileInputRef}
              id="c-cv"
              type="file"
              name="cv"
              accept=".pdf,.doc,.docx"
              className="sr-only"
              onChange={(e) => addFile(e.target.files)}
            />
          </label>
        )}
        {errors.cv && <p className="mt-1 text-[11px] text-red-500">{errors.cv}</p>}
      </div>

      {/* Message */}
      <div className="mt-5">
        <label htmlFor="c-msg" className="block font-mono text-[11px] tracking-[0.08em] uppercase text-ink-secondary mb-1.5">
          Message
        </label>
        <textarea
          id="c-msg"
          name="message"
          rows={4}
          placeholder="Tell us briefly why you'd be a good fit."
          className={clsx(inputCls("message"), "resize-y")}
          value={form.message}
          onChange={set("message")}
        />
      </div>

      {/* Consent */}
      <label className="flex items-start gap-3 mt-5 cursor-pointer">
        <input
          type="checkbox"
          id="c-consent"
          name="consent"
          required
          checked={form.consent}
          onChange={(e) => setForm((prev) => ({ ...prev, consent: e.target.checked }))}
          className="mt-0.5 w-4 h-4 border border-border accent-ink shrink-0"
        />
        <span className="text-[13px] text-ink-secondary leading-relaxed">
          I agree that Borela BT. may store and process my data for this application.{" "}
          <Link href="/legal/privacy-policy/" className="underline text-ink hover:text-primary transition-colors">
            See our privacy notice.
          </Link>{" "}
          <span className="text-red-500" aria-label="required">*</span>
        </span>
      </label>
      {errors.consent && <p className="mt-1 text-[11px] text-red-500">{errors.consent}</p>}

      <Button type="button" onClick={handleSubmit} className="w-full justify-center py-4 mt-7">
        Submit application
      </Button>
    </div>
  );
}
