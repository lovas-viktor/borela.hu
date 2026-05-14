"use client";

import { useState, useRef, DragEvent, ChangeEvent } from "react";
import clsx from "clsx";
import Link from "next/link";
import Button from "@/components/primitives/Button";

const EU_COUNTRIES = [
  "Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic",
  "Denmark", "Estonia", "Finland", "France", "Germany", "Greece",
  "Hungary", "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg",
  "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Slovakia",
  "Slovenia", "Spain", "Sweden",
];

const OTHER_COUNTRIES = [
  "Switzerland", "United Kingdom", "Norway", "United States", "Canada",
  "Japan", "South Korea", "China", "India", "Australia", "Other",
];

const INDUSTRIES = [
  "Automotive (passenger vehicles)",
  "Commercial vehicles & trailers",
  "Power tools & industrial equipment",
  "Sealing technology & fluid control",
  "General engineering / manufacturing",
  "Other",
];

const BATCH_SIZES = [
  { value: "prototype", label: "Prototype / sample only" },
  { value: "500-5k", label: "500 – 5,000 pcs" },
  { value: "5k-25k", label: "5,000 – 25,000 pcs" },
  { value: "25k-100k", label: "25,000 – 100,000 pcs" },
  { value: "100k+", label: "> 100,000 pcs" },
];

const SERVICES = [
  { value: "cnc-turning", label: "CNC turning" },
  { value: "cnc-milling", label: "CNC milling" },
  { value: "press-work", label: "Press work" },
  { value: "heat-treatment", label: "Heat treatment", note: "(coordinated via partner)" },
  { value: "assembly", label: "Assembly" },
  { value: "3d-measurement", label: "3D measurement & QC" },
  { value: "welding-tig", label: "Welding (TIG)" },
];

interface FormData {
  name: string;
  company: string;
  country: string;
  countryOther: string;
  email: string;
  phone: string;
  part: string;
  industry: string;
  batch: string;
  annualVolume: string;
  targetDate: string;
  services: string[];
  nda: boolean;
  message: string;
  consent: boolean;
}

type FieldErrors = Partial<Record<keyof FormData, string>>;

interface FileItem {
  file: File;
  id: string;
}

function generateRef() {
  return "RFQ-" + Math.floor(1000 + Math.random() * 9000);
}

export default function RfqForm() {
  const [form, setForm] = useState<FormData>({
    name: "", company: "", country: "", countryOther: "",
    email: "", phone: "", part: "", industry: "",
    batch: "", annualVolume: "", targetDate: "",
    services: [], nda: false, message: "", consent: false,
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [files, setFiles] = useState<FileItem[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [rfqRef] = useState(generateRef);
  const fileInputRef = useRef<HTMLInputElement>(null);
  // Honeypot
  const [honeypot, setHoneypot] = useState("");

  const set = (field: keyof FormData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const toggleService = (value: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(value)
        ? prev.services.filter((s) => s !== value)
        : [...prev.services, value],
    }));
    setErrors((prev) => ({ ...prev, services: undefined }));
  };

  const addFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;
    const allowed = [".step", ".stp", ".iges", ".igs", ".pdf", ".zip"];
    Array.from(newFiles).forEach((file) => {
      const ext = "." + file.name.split(".").pop()?.toLowerCase();
      if (allowed.includes(ext) && file.size <= 50 * 1024 * 1024) {
        setFiles((prev) => [...prev, { file, id: crypto.randomUUID() }]);
      }
    });
  };

  const onDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragOver(false);
    addFiles(e.dataTransfer.files);
  };

  const validate = (): boolean => {
    const errs: FieldErrors = {};
    if (!form.name.trim()) errs.name = "Please enter your full name.";
    if (!form.company.trim()) errs.company = "Please enter your company name.";
    if (!form.country) errs.country = "Please select a country.";
    if (!form.email.trim() || !/^[^@]+@[^@]+\.[^@]+$/.test(form.email))
      errs.email = "Please enter a valid business email.";
    if (!form.part.trim()) errs.part = "Please enter a part name or project reference.";
    if (!form.batch) errs.batch = "Please choose a batch size.";
    if (form.services.length === 0) errs.services = "Please select at least one service.";
    if (!form.consent) errs.consent = "Please accept the privacy notice to continue.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = () => {
    if (honeypot) return; // spam bot
    if (!validate()) return;
    // Stub — log payload, no backend yet
    console.log("RFQ payload:", { ...form, files: files.map((f) => f.file.name) });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-24 px-7 text-center">
        <svg className="w-14 h-14 text-primary mb-6" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
          <circle cx="28" cy="28" r="24"/>
          <path d="M16 28l8 8 16-18"/>
        </svg>
        <h3 className="font-extrabold text-2xl tracking-[-0.02em] uppercase text-ink mb-3">Request received</h3>
        <p className="text-ink-secondary text-[15px] leading-relaxed max-w-md mb-6">
          Thanks — your request is logged. An engineer from our sales team will reply within{" "}
          <strong>2 business days</strong>. Keep this reference for your records:
        </p>
        <div className="font-mono text-xl tracking-[0.1em] text-ink border border-border px-6 py-3 bg-surface">
          {rfqRef}
        </div>
      </div>
    );
  }

  const inputCls = (field: keyof FormData) =>
    clsx(
      "w-full border px-3.5 py-2.5 font-sans text-[14px] text-ink bg-background placeholder:text-ink-tertiary focus:outline-none focus:border-primary transition-colors",
      errors[field] ? "border-red-500" : "border-border"
    );

  return (
    <div className="grid lg:grid-cols-[1fr_400px] gap-8 items-start max-w-[1180px] mx-auto px-7 py-16">
      {/* ── LEFT: Form ── */}
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

        {/* Block 01 — Contact */}
        <fieldset className="border-0 p-0 mb-10">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
            <span className="font-mono text-[11px] tracking-[0.1em] text-ink-tertiary">01</span>
            <legend className="font-sans font-bold text-[17px] tracking-[-0.01em] text-ink">Contact</legend>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="f-name" className="block font-mono text-[11px] tracking-[0.08em] uppercase text-ink-secondary mb-1.5">
                Full name <span className="text-red-500" aria-label="required">*</span>
              </label>
              <input id="f-name" type="text" name="name" required autoComplete="name" className={inputCls("name")} value={form.name} onChange={set("name")} />
              {errors.name && <p className="mt-1 text-[11px] text-red-500">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="f-company" className="block font-mono text-[11px] tracking-[0.08em] uppercase text-ink-secondary mb-1.5">
                Company name <span className="text-red-500" aria-label="required">*</span>
              </label>
              <input id="f-company" type="text" name="company" required autoComplete="organization" className={inputCls("company")} value={form.company} onChange={set("company")} />
              {errors.company && <p className="mt-1 text-[11px] text-red-500">{errors.company}</p>}
            </div>
            <div>
              <label htmlFor="f-country" className="block font-mono text-[11px] tracking-[0.08em] uppercase text-ink-secondary mb-1.5">
                Country <span className="text-red-500" aria-label="required">*</span>
              </label>
              <select id="f-country" name="country" required className={clsx(inputCls("country"), "appearance-none")} value={form.country} onChange={set("country")}>
                <option value="">Select…</option>
                <optgroup label="European Union">
                  {EU_COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </optgroup>
                <optgroup label="Other">
                  {OTHER_COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </optgroup>
              </select>
              {errors.country && <p className="mt-1 text-[11px] text-red-500">{errors.country}</p>}
            </div>
            {form.country === "Other" && (
              <div>
                <label htmlFor="f-country-other" className="block font-mono text-[11px] tracking-[0.08em] uppercase text-ink-secondary mb-1.5">
                  Country (specify)
                </label>
                <input id="f-country-other" type="text" name="country_other" placeholder="Type country name" className={inputCls("countryOther")} value={form.countryOther} onChange={set("countryOther")} />
              </div>
            )}
            <div>
              <label htmlFor="f-email" className="block font-mono text-[11px] tracking-[0.08em] uppercase text-ink-secondary mb-1.5">
                Business email <span className="text-red-500" aria-label="required">*</span>
              </label>
              <input id="f-email" type="email" name="email" required autoComplete="email" className={inputCls("email")} value={form.email} onChange={set("email")} />
              <p className="mt-1 text-[11px] text-ink-tertiary">Please use your work email so we can verify your company.</p>
              {errors.email && <p className="mt-0.5 text-[11px] text-red-500">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="f-phone" className="block font-mono text-[11px] tracking-[0.08em] uppercase text-ink-secondary mb-1.5">
                Phone number
              </label>
              <input id="f-phone" type="tel" name="phone" autoComplete="tel" className={inputCls("phone")} value={form.phone} onChange={set("phone")} />
            </div>
          </div>
        </fieldset>

        {/* Block 02 — Project */}
        <fieldset className="border-0 p-0 mb-10">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
            <span className="font-mono text-[11px] tracking-[0.1em] text-ink-tertiary">02</span>
            <legend className="font-sans font-bold text-[17px] tracking-[-0.01em] text-ink">Your project</legend>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="sm:col-span-2">
              <label htmlFor="f-part" className="block font-mono text-[11px] tracking-[0.08em] uppercase text-ink-secondary mb-1.5">
                Part name or project reference <span className="text-red-500" aria-label="required">*</span>
              </label>
              <input id="f-part" type="text" name="part" required className={inputCls("part")} value={form.part} onChange={set("part")} />
              {errors.part && <p className="mt-1 text-[11px] text-red-500">{errors.part}</p>}
            </div>
            <div>
              <label htmlFor="f-industry" className="block font-mono text-[11px] tracking-[0.08em] uppercase text-ink-secondary mb-1.5">
                Industry
              </label>
              <select id="f-industry" name="industry" className={clsx(inputCls("industry"), "appearance-none")} value={form.industry} onChange={set("industry")}>
                <option value="">Select…</option>
                {INDUSTRIES.map((ind) => <option key={ind} value={ind}>{ind}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="f-batch" className="block font-mono text-[11px] tracking-[0.08em] uppercase text-ink-secondary mb-1.5">
                Batch size per release <span className="text-red-500" aria-label="required">*</span>
              </label>
              <select id="f-batch" name="batch" required className={clsx(inputCls("batch"), "appearance-none")} value={form.batch} onChange={set("batch")}>
                <option value="">Select…</option>
                {BATCH_SIZES.map((b) => <option key={b.value} value={b.value}>{b.label}</option>)}
              </select>
              {errors.batch && <p className="mt-1 text-[11px] text-red-500">{errors.batch}</p>}
            </div>
            <div>
              <label htmlFor="f-annual" className="block font-mono text-[11px] tracking-[0.08em] uppercase text-ink-secondary mb-1.5">
                Estimated annual volume
              </label>
              <input id="f-annual" type="number" min="0" name="annual_volume" placeholder="e.g. 60000" className={inputCls("annualVolume")} value={form.annualVolume} onChange={set("annualVolume")} />
            </div>
            <div>
              <label htmlFor="f-date" className="block font-mono text-[11px] tracking-[0.08em] uppercase text-ink-secondary mb-1.5">
                Target date for first delivery
              </label>
              <input id="f-date" type="date" name="target_date" className={inputCls("targetDate")} value={form.targetDate} onChange={set("targetDate")} />
            </div>
            <div className="sm:col-span-2">
              <span className="block font-mono text-[11px] tracking-[0.08em] uppercase text-ink-secondary mb-2">
                Services required <span className="text-red-500" aria-label="required">*</span>
              </span>
              <div className="grid sm:grid-cols-2 gap-2">
                {SERVICES.map((svc) => (
                  <label key={svc.value} className="flex items-start gap-2.5 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="service"
                      value={svc.value}
                      checked={form.services.includes(svc.value)}
                      onChange={() => toggleService(svc.value)}
                      className="mt-0.5 w-4 h-4 border border-border accent-ink shrink-0"
                    />
                    <span className="text-[13px] text-ink group-hover:text-primary transition-colors">
                      {svc.label}
                      {svc.note && <em className="not-italic text-ink-tertiary"> {svc.note}</em>}
                    </span>
                  </label>
                ))}
              </div>
              {errors.services && <p className="mt-2 text-[11px] text-red-500">{errors.services}</p>}
              {form.services.includes("heat-treatment") && (
                <div className="mt-3 p-3.5 border border-border bg-surface text-[13px] text-ink-secondary leading-relaxed">
                  <strong className="text-ink text-[11px] font-mono tracking-[0.06em] uppercase">Heads-up:</strong>{" "}
                  Heat treatment is coordinated via a certified partner near our facility. This adds approximately 1–2 weeks to the standard lead time, but it is included in your quote as a fully managed service.
                </div>
              )}
            </div>
          </div>
        </fieldset>

        {/* Block 03 — Drawing */}
        <fieldset className="border-0 p-0 mb-10">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
            <span className="font-mono text-[11px] tracking-[0.1em] text-ink-tertiary">03</span>
            <legend className="font-sans font-bold text-[17px] tracking-[-0.01em] text-ink">Drawing & technical files</legend>
          </div>

          {form.nda && (
            <div className="mb-4 p-3.5 border border-border bg-surface text-[13px] text-ink-secondary leading-relaxed">
              <strong className="text-ink text-[11px] font-mono tracking-[0.06em] uppercase">NDA workflow:</strong>{" "}
              We&apos;ll email you a mutual NDA first. You can submit this request now without files — we&apos;ll request the drawings once the NDA is signed. You may still attach non-confidential files below.
            </div>
          )}

          {/* Dropzone */}
          <label
            htmlFor="f-files"
            className={clsx(
              "flex flex-col items-center justify-center gap-3 py-10 px-6 border border-dashed text-center cursor-pointer transition-colors",
              dragOver ? "border-primary bg-primary-light" : "border-border bg-surface hover:bg-surface-alt"
            )}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={onDrop}
          >
            <svg className="w-9 h-9 text-ink-tertiary" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
              <path d="M6 26v4h24v-4"/><path d="M18 6v18"/><path d="M10 14l8-8 8 8"/>
            </svg>
            <div className="text-[14px] text-ink">
              <strong>Drag & drop your files here</strong>, or{" "}
              <span className="text-primary border-b border-primary">browse</span>
            </div>
            <div className="font-mono text-[11px] tracking-[0.06em] text-ink-tertiary uppercase">
              STEP · IGES · PDF · ZIP — up to 50 MB
            </div>
            <input
              ref={fileInputRef}
              id="f-files"
              type="file"
              name="files"
              multiple
              accept=".step,.stp,.iges,.igs,.pdf,.zip"
              className="sr-only"
              onChange={(e) => addFiles(e.target.files)}
            />
          </label>

          {/* File list */}
          {files.length > 0 && (
            <ul className="mt-3 space-y-1.5">
              {files.map(({ file, id }) => (
                <li key={id} className="flex items-center gap-3 p-2.5 border border-border bg-surface text-[13px]">
                  <svg className="w-5 h-5 text-ink-tertiary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" aria-hidden="true">
                    <path d="M5 3h10l4 4v14H5z"/><path d="M15 3v4h4"/>
                  </svg>
                  <span className="flex-1 truncate text-ink">{file.name}</span>
                  <span className="text-ink-tertiary font-mono text-[10px]">{(file.size / 1024 / 1024).toFixed(1)} MB</span>
                  <button
                    type="button"
                    className="p-1 text-ink-tertiary hover:text-ink transition-colors"
                    aria-label={`Remove ${file.name}`}
                    onClick={() => setFiles((prev) => prev.filter((f) => f.id !== id))}
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" aria-hidden="true">
                      <path d="M4 4l12 12M16 4L4 16"/>
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}

          {/* Mobile note */}
          <p className="mt-4 text-[12px] text-ink-tertiary leading-relaxed md:hidden">
            <strong className="text-ink-secondary">Using a phone?</strong> Uploading CAD files works best from a desktop. You can submit this request now — we&apos;ll reply with a secure upload link, or email drawings to{" "}
            <a href="mailto:rfq@borela.eu" className="text-ink underline">rfq@borela.eu</a>.
          </p>

          {/* NDA checkbox */}
          <label className="flex items-start gap-3 mt-5 cursor-pointer">
            <input
              type="checkbox"
              id="f-nda"
              name="nda"
              checked={form.nda}
              onChange={(e) => setForm((prev) => ({ ...prev, nda: e.target.checked }))}
              className="mt-0.5 w-4 h-4 border border-border accent-primary shrink-0"
            />
            <span className="text-[13px] text-ink-secondary leading-relaxed">
              <strong className="text-ink">Please send me a mutual NDA before I upload any drawings.</strong> We&apos;ll email a mutual non-disclosure agreement first — no files need to leave your network before it&apos;s signed.
            </span>
          </label>
        </fieldset>

        {/* Block 04 — Anything else */}
        <fieldset className="border-0 p-0 mb-8">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
            <span className="font-mono text-[11px] tracking-[0.1em] text-ink-tertiary">04</span>
            <legend className="font-sans font-bold text-[17px] tracking-[-0.01em] text-ink">Anything else</legend>
          </div>
          <div>
            <label htmlFor="f-msg" className="block font-mono text-[11px] tracking-[0.08em] uppercase text-ink-secondary mb-1.5">
              Message / notes
            </label>
            <textarea
              id="f-msg"
              name="message"
              rows={4}
              placeholder="Surface treatment, special inspection, packaging, target price…"
              className={clsx(inputCls("message"), "resize-y")}
              value={form.message}
              onChange={set("message")}
            />
            <p className="mt-1 text-[11px] text-ink-tertiary">Anything else we should know — surface treatment, special inspection, packaging, target price.</p>
          </div>

          <label className="flex items-start gap-3 mt-5 cursor-pointer">
            <input
              type="checkbox"
              id="f-consent"
              name="consent"
              required
              checked={form.consent}
              onChange={(e) => setForm((prev) => ({ ...prev, consent: e.target.checked }))}
              className="mt-0.5 w-4 h-4 border border-border accent-ink shrink-0"
            />
            <span className="text-[13px] text-ink-secondary leading-relaxed">
              I agree that Borela BT. may store and process my data to handle this request.{" "}
              <Link href="/legal/privacy-policy/" className="underline text-ink hover:text-primary transition-colors">
                See our privacy notice.
              </Link>{" "}
              <span className="text-red-500" aria-label="required">*</span>
            </span>
          </label>
          {errors.consent && <p className="mt-1 text-[11px] text-red-500">{errors.consent}</p>}
        </fieldset>

        <Button type="button" onClick={handleSubmit} className="w-full justify-center py-4">
          Request a Quote
        </Button>
        <p className="mt-3 text-[12px] text-ink-tertiary text-center">
          You&apos;ll get an automatic confirmation, then an engineer&apos;s reply within 2 business days.
        </p>
      </div>

      {/* ── RIGHT: Dark panel ── */}
      <aside className="bg-surface-dark text-on-surface-dark p-8 self-start sticky top-[88px]" aria-label="What happens next">
        {/* Process */}
        <div className="mb-8">
          <div className="font-mono text-[10px] tracking-[0.12em] text-on-surface-dark/50 uppercase mb-4">
            [ — What happens next ]
          </div>
          <h3 className="font-extrabold text-[17px] tracking-[-0.01em] uppercase mb-5">
            From upload to first delivery
          </h3>
          <ol className="space-y-5">
            {[
              { n: "01", title: "Receipt confirmed", desc: "An automatic email with your reference number lands immediately." },
              { n: "02", title: "Engineering review", desc: "A real engineer checks feasibility and replies within 2 business days." },
              { n: "03", title: "Quote prepared", desc: "A detailed offer follows; parts needing heat treatment include partner coordination." },
              { n: "04", title: "Sample, then series", desc: "First article inspection, then series production of 500–100,000 pieces." },
            ].map((step) => (
              <li key={step.n} className="flex items-start gap-3">
                <span className="font-mono text-[11px] tracking-[0.1em] text-on-surface-dark/40 shrink-0 mt-0.5">{step.n}</span>
                <div>
                  <p className="font-semibold text-[14px] mb-0.5">{step.title}</p>
                  <p className="text-[13px] text-on-surface-dark/70 leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Response time */}
        <div className="border-t border-border-dark pt-6 mb-6">
          <div className="font-mono text-[10px] tracking-[0.12em] text-on-surface-dark/50 uppercase mb-3">
            [ — Response time ]
          </div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="font-extrabold text-[48px] leading-none">2</span>
            <span className="font-mono text-[12px] tracking-[0.06em] uppercase text-on-surface-dark/60">business days</span>
          </div>
          <p className="text-[13px] text-on-surface-dark/70 leading-relaxed">
            …is our target for <strong className="text-on-surface-dark">a real engineer&apos;s reply</strong> — not an auto-responder.
          </p>
        </div>

        {/* Data safety */}
        <div className="border-t border-border-dark pt-6">
          <div className="font-mono text-[10px] tracking-[0.12em] text-on-surface-dark/50 uppercase mb-3">
            [ — Your data is safe ]
          </div>
          <h4 className="font-bold text-[14px] tracking-[0.04em] uppercase mb-4">Three commitments</h4>
          <ul className="space-y-4">
            {[
              {
                title: "NDA on request.",
                desc: "Tick the NDA box and we send a mutual agreement before you upload anything.",
                icon: <path d="M12 3 4 6v6c0 4 3 7 8 9 5-2 8-5 8-9V6z"/>,
              },
              {
                title: "Encrypted transfer.",
                desc: "All files transit over HTTPS and are stored on EU servers only.",
                icon: <><rect x="5" y="11" width="14" height="10"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></>,
              },
              {
                title: "GDPR compliant.",
                desc: "Your data is processed under EU law. Request deletion at any time.",
                icon: <path d="M12 2L4 6v6c0 5.4 3.4 10.4 8 12 4.6-1.6 8-6.6 8-12V6L12 2z"/>,
              },
            ].map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-on-surface-dark/50 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" aria-hidden="true">
                  {item.icon}
                </svg>
                <div>
                  <p className="font-semibold text-[13px] mb-0.5">{item.title}</p>
                  <p className="text-[12px] text-on-surface-dark/70 leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-4 border-t border-border-dark text-[12px] text-on-surface-dark/60 leading-relaxed">
            Prefer direct contact?{" "}
            <a href="mailto:rfq@borela.eu" className="text-on-surface-dark underline hover:text-on-surface-dark/80 transition-colors">rfq@borela.eu</a>
            {" "}or{" "}
            <a href="tel:+3676569122" className="text-on-surface-dark underline hover:text-on-surface-dark/80 transition-colors">+36 76 569 122</a>
          </div>
        </div>
      </aside>
    </div>
  );
}
