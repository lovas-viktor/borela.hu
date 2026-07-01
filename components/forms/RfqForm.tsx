"use client";

import { useState, useRef, DragEvent, ChangeEvent } from "react";
import clsx from "clsx";
import Link from "next/link";
import Button from "@/components/primitives/Button";

const EU_COUNTRY_VALUES = [
  "Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic",
  "Denmark", "Estonia", "Finland", "France", "Germany", "Greece",
  "Hungary", "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg",
  "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Slovakia",
  "Slovenia", "Spain", "Sweden",
];

const OTHER_COUNTRY_VALUES = [
  "Switzerland", "United Kingdom", "Norway", "United States", "Canada",
  "Japan", "South Korea", "China", "India", "Australia", "Other",
];

const INDUSTRY_VALUES = [
  "Automotive (passenger vehicles)",
  "Commercial vehicles & trailers",
  "Power tools & industrial equipment",
  "Sealing technology & fluid control",
  "General engineering / manufacturing",
  "Other",
];

const BATCH_VALUES = ["prototype", "500-5k", "5k-25k", "25k-100k", "100k+"];

const SERVICE_VALUES = [
  "cnc-turning", "cnc-milling", "press-work", "heat-treatment",
  "assembly", "3d-measurement", "welding-tig",
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
  spokenLanguages: string[];
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

interface RfqFormProps {
  dict: Record<string, string>;
}

export default function RfqForm({ dict }: RfqFormProps) {
  const t = (k: string) => dict[k] ?? k;
  const [form, setForm] = useState<FormData>({
    name: "", company: "", country: "", countryOther: "",
    email: "", phone: "", part: "", industry: "",
    batch: "", annualVolume: "", targetDate: "",
    services: [], spokenLanguages: [], nda: false, message: "", consent: false,
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

  const toggleLanguage = (value: string) => {
    setForm((prev) => ({
      ...prev,
      spokenLanguages: prev.spokenLanguages.includes(value)
        ? prev.spokenLanguages.filter((l) => l !== value)
        : [...prev.spokenLanguages, value],
    }));
    setErrors((prev) => ({ ...prev, spokenLanguages: undefined }));
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
    if (!form.name.trim()) errs.name = t("form.name.error");
    if (!form.company.trim()) errs.company = t("form.company.error");
    if (!form.country) errs.country = t("form.country.error");
    if (!form.email.trim() || !/^[^@]+@[^@]+\.[^@]+$/.test(form.email))
      errs.email = t("form.email.error");
    if (!form.part.trim()) errs.part = t("form.part.error");
    if (!form.batch) errs.batch = t("form.batch.error");
    if (form.services.length === 0) errs.services = t("form.services.error");
    if (form.spokenLanguages.length === 0) errs.spokenLanguages = t("form.languages.error");
    if (!form.consent) errs.consent = t("form.consent.error");
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
        <h3 className="font-extrabold text-2xl tracking-[-0.02em] uppercase text-ink mb-3">{t("form.success.heading")}</h3>
        <p className="text-ink-secondary text-[15px] leading-relaxed max-w-md mb-6">
          {t("form.success.body")}
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
            <legend className="font-sans font-bold text-[17px] tracking-[-0.01em] text-ink">{t("form.block.01.legend")}</legend>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="f-name" className="block font-mono text-[11px] tracking-[0.08em] uppercase text-ink-secondary mb-1.5">
                {t("form.name.label")} <span className="text-red-500" aria-label={t("form.required.aria")}>*</span>
              </label>
              <input id="f-name" type="text" name="name" required autoComplete="name" className={inputCls("name")} value={form.name} onChange={set("name")} />
              {errors.name && <p className="mt-1 text-[11px] text-red-500">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="f-company" className="block font-mono text-[11px] tracking-[0.08em] uppercase text-ink-secondary mb-1.5">
                {t("form.company.label")} <span className="text-red-500" aria-label={t("form.required.aria")}>*</span>
              </label>
              <input id="f-company" type="text" name="company" required autoComplete="organization" className={inputCls("company")} value={form.company} onChange={set("company")} />
              {errors.company && <p className="mt-1 text-[11px] text-red-500">{errors.company}</p>}
            </div>
            <div>
              <label htmlFor="f-country" className="block font-mono text-[11px] tracking-[0.08em] uppercase text-ink-secondary mb-1.5">
                {t("form.country.label")} <span className="text-red-500" aria-label={t("form.required.aria")}>*</span>
              </label>
              <select id="f-country" name="country" required className={clsx(inputCls("country"), "appearance-none")} value={form.country} onChange={set("country")}>
                <option value="">{t("form.select.placeholder")}</option>
                <optgroup label={t("form.country.optgroup.eu")}>
                  {EU_COUNTRY_VALUES.map((c, i) => <option key={c} value={c}>{t(`form.country.eu.${i}`)}</option>)}
                </optgroup>
                <optgroup label={t("form.country.optgroup.other")}>
                  {OTHER_COUNTRY_VALUES.map((c, i) => <option key={c} value={c}>{t(`form.country.other.${i}`)}</option>)}
                </optgroup>
              </select>
              {errors.country && <p className="mt-1 text-[11px] text-red-500">{errors.country}</p>}
            </div>
            {form.country === "Other" && (
              <div>
                <label htmlFor="f-country-other" className="block font-mono text-[11px] tracking-[0.08em] uppercase text-ink-secondary mb-1.5">
                  {t("form.countryOther.label")}
                </label>
                <input id="f-country-other" type="text" name="country_other" placeholder={t("form.countryOther.placeholder")} className={inputCls("countryOther")} value={form.countryOther} onChange={set("countryOther")} />
              </div>
            )}
            <div>
              <label htmlFor="f-email" className="block font-mono text-[11px] tracking-[0.08em] uppercase text-ink-secondary mb-1.5">
                {t("form.email.label")} <span className="text-red-500" aria-label={t("form.required.aria")}>*</span>
              </label>
              <input id="f-email" type="email" name="email" required autoComplete="email" className={inputCls("email")} value={form.email} onChange={set("email")} />
              <p className="mt-1 text-[11px] text-ink-tertiary">{t("form.email.help")}</p>
              {errors.email && <p className="mt-0.5 text-[11px] text-red-500">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="f-phone" className="block font-mono text-[11px] tracking-[0.08em] uppercase text-ink-secondary mb-1.5">
                {t("form.phone.label")}
              </label>
              <input id="f-phone" type="tel" name="phone" autoComplete="tel" className={inputCls("phone")} value={form.phone} onChange={set("phone")} />
            </div>
            <div>
              <span className="block font-mono text-[11px] tracking-[0.08em] uppercase text-ink-secondary mb-1.5">
                {t("form.languages.label")} <span className="text-red-500" aria-label={t("form.required.aria")}>*</span>
              </span>
              <div className="flex gap-2">
                {[{ v: "en", l: "EN" }, { v: "de", l: "DE" }, { v: "hu", l: "HU" }].map((lng) => (
                  <button
                    key={lng.v}
                    type="button"
                    onClick={() => toggleLanguage(lng.v)}
                    aria-pressed={form.spokenLanguages.includes(lng.v)}
                    className={clsx(
                      "px-4 py-2.5 border font-mono text-[12px] tracking-[0.08em] uppercase transition-colors",
                      form.spokenLanguages.includes(lng.v)
                        ? "border-primary bg-primary text-on-primary"
                        : "border-border text-ink-secondary hover:border-primary"
                    )}
                  >
                    {lng.l}
                  </button>
                ))}
              </div>
              {errors.spokenLanguages && <p className="mt-1 text-[11px] text-red-500">{errors.spokenLanguages}</p>}
            </div>
          </div>
        </fieldset>

        {/* Block 02 — Project */}
        <fieldset className="border-0 p-0 mb-10">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
            <span className="font-mono text-[11px] tracking-[0.1em] text-ink-tertiary">02</span>
            <legend className="font-sans font-bold text-[17px] tracking-[-0.01em] text-ink">{t("form.block.02.legend")}</legend>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="sm:col-span-2">
              <label htmlFor="f-part" className="block font-mono text-[11px] tracking-[0.08em] uppercase text-ink-secondary mb-1.5">
                {t("form.part.label")} <span className="text-red-500" aria-label={t("form.required.aria")}>*</span>
              </label>
              <input id="f-part" type="text" name="part" required className={inputCls("part")} value={form.part} onChange={set("part")} />
              {errors.part && <p className="mt-1 text-[11px] text-red-500">{errors.part}</p>}
            </div>
            <div>
              <label htmlFor="f-industry" className="block font-mono text-[11px] tracking-[0.08em] uppercase text-ink-secondary mb-1.5">
                {t("form.industry.label")}
              </label>
              <select id="f-industry" name="industry" className={clsx(inputCls("industry"), "appearance-none")} value={form.industry} onChange={set("industry")}>
                <option value="">{t("form.select.placeholder")}</option>
                {INDUSTRY_VALUES.map((ind, i) => <option key={ind} value={ind}>{t(`form.industry.${i}`)}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="f-batch" className="block font-mono text-[11px] tracking-[0.08em] uppercase text-ink-secondary mb-1.5">
                {t("form.batch.label")} <span className="text-red-500" aria-label={t("form.required.aria")}>*</span>
              </label>
              <select id="f-batch" name="batch" required className={clsx(inputCls("batch"), "appearance-none")} value={form.batch} onChange={set("batch")}>
                <option value="">{t("form.select.placeholder")}</option>
                {BATCH_VALUES.map((b, i) => <option key={b} value={b}>{t(`form.batch.${i}`)}</option>)}
              </select>
              {errors.batch && <p className="mt-1 text-[11px] text-red-500">{errors.batch}</p>}
            </div>
            <div>
              <label htmlFor="f-annual" className="block font-mono text-[11px] tracking-[0.08em] uppercase text-ink-secondary mb-1.5">
                {t("form.annualVolume.label")}
              </label>
              <input id="f-annual" type="number" min="0" name="annual_volume" placeholder={t("form.annualVolume.placeholder")} className={inputCls("annualVolume")} value={form.annualVolume} onChange={set("annualVolume")} />
            </div>
            <div>
              <label htmlFor="f-date" className="block font-mono text-[11px] tracking-[0.08em] uppercase text-ink-secondary mb-1.5">
                {t("form.targetDate.label")}
              </label>
              <input id="f-date" type="date" name="target_date" className={inputCls("targetDate")} value={form.targetDate} onChange={set("targetDate")} />
            </div>
            <div className="sm:col-span-2">
              <span className="block font-mono text-[11px] tracking-[0.08em] uppercase text-ink-secondary mb-2">
                {t("form.services.label")} <span className="text-red-500" aria-label={t("form.required.aria")}>*</span>
              </span>
              <div className="grid sm:grid-cols-2 gap-2">
                {SERVICE_VALUES.map((value, i) => (
                  <label key={value} className="flex items-start gap-2.5 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="service"
                      value={value}
                      checked={form.services.includes(value)}
                      onChange={() => toggleService(value)}
                      className="mt-0.5 w-4 h-4 border border-border accent-ink shrink-0"
                    />
                    <span className="text-[13px] text-ink group-hover:text-primary transition-colors">
                      {t(`form.service.${i}`)}
                      {value === "heat-treatment" && <em className="not-italic text-ink-tertiary"> {t("form.service.3.note")}</em>}
                    </span>
                  </label>
                ))}
              </div>
              {errors.services && <p className="mt-2 text-[11px] text-red-500">{errors.services}</p>}
              {form.services.includes("heat-treatment") && (
                <div className="mt-3 p-3.5 border border-border bg-surface text-[13px] text-ink-secondary leading-relaxed">
                  <strong className="text-ink text-[11px] font-mono tracking-[0.06em] uppercase">{t("form.heatTreatment.notice.label")}</strong>{" "}
                  {t("form.heatTreatment.notice.body")}
                </div>
              )}
            </div>
          </div>
        </fieldset>

        {/* Block 03 — Drawing */}
        <fieldset className="border-0 p-0 mb-10">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
            <span className="font-mono text-[11px] tracking-[0.1em] text-ink-tertiary">03</span>
            <legend className="font-sans font-bold text-[17px] tracking-[-0.01em] text-ink">{t("form.block.03.legend")}</legend>
          </div>

          {form.nda && (
            <div className="mb-4 p-3.5 border border-border bg-surface text-[13px] text-ink-secondary leading-relaxed">
              <strong className="text-ink text-[11px] font-mono tracking-[0.06em] uppercase">{t("form.nda.notice.label")}</strong>{" "}
              {t("form.nda.notice.body")}
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
              <strong>{t("form.dropzone.main")}</strong>{t("form.dropzone.or")}{" "}
              <span className="text-primary border-b border-primary">{t("form.dropzone.browse")}</span>
            </div>
            <div className="font-mono text-[11px] tracking-[0.06em] text-ink-tertiary uppercase">
              {t("form.dropzone.formats")}
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
                    aria-label={t("form.file.remove.aria").replace("{file}", file.name)}
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
            <strong className="text-ink-secondary">{t("form.mobileNote.label")}</strong> {t("form.mobileNote.body")}{" "}
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
              <strong className="text-ink">{t("form.nda.checkbox.label")}</strong> {t("form.nda.checkbox.body")}
            </span>
          </label>
        </fieldset>

        {/* Block 04 — Anything else */}
        <fieldset className="border-0 p-0 mb-8">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
            <span className="font-mono text-[11px] tracking-[0.1em] text-ink-tertiary">04</span>
            <legend className="font-sans font-bold text-[17px] tracking-[-0.01em] text-ink">{t("form.block.04.legend")}</legend>
          </div>
          <div>
            <label htmlFor="f-msg" className="block font-mono text-[11px] tracking-[0.08em] uppercase text-ink-secondary mb-1.5">
              {t("form.message.label")}
            </label>
            <textarea
              id="f-msg"
              name="message"
              rows={4}
              placeholder={t("form.message.placeholder")}
              className={clsx(inputCls("message"), "resize-y")}
              value={form.message}
              onChange={set("message")}
            />
            <p className="mt-1 text-[11px] text-ink-tertiary">{t("form.message.help")}</p>
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
              {t("form.consent.body")}{" "}
              <Link href="/legal/privacy-policy/" className="underline text-ink hover:text-primary transition-colors">
                {t("form.consent.link")}
              </Link>{" "}
              <span className="text-red-500" aria-label={t("form.required.aria")}>*</span>
            </span>
          </label>
          {errors.consent && <p className="mt-1 text-[11px] text-red-500">{errors.consent}</p>}
        </fieldset>

        <Button type="button" onClick={handleSubmit} className="w-full justify-center py-4">
          {t("form.submit")}
        </Button>
        <p className="mt-3 text-[12px] text-ink-tertiary text-center">
          {t("form.submit.note")}
        </p>
      </div>

      {/* ── RIGHT: Dark panel ── */}
      <aside className="bg-surface-dark text-on-surface-dark p-8 self-start sticky top-[88px]" aria-label={t("panel.aria")}>
        {/* Process */}
        <div className="mb-8">
          <div className="font-mono text-[10px] tracking-[0.12em] text-on-surface-dark/50 uppercase mb-4">
            {t("panel.process.label")}
          </div>
          <h3 className="font-extrabold text-[17px] tracking-[-0.01em] uppercase mb-5">
            {t("panel.process.heading")}
          </h3>
          <ol className="space-y-5">
            {[
              { n: "01", title: t("panel.process.0.title"), desc: t("panel.process.0.desc") },
              { n: "02", title: t("panel.process.1.title"), desc: t("panel.process.1.desc") },
              { n: "03", title: t("panel.process.2.title"), desc: t("panel.process.2.desc") },
              { n: "04", title: t("panel.process.3.title"), desc: t("panel.process.3.desc") },
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
            {t("panel.response.label")}
          </div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="font-extrabold text-[48px] leading-none">2</span>
            <span className="font-mono text-[12px] tracking-[0.06em] uppercase text-on-surface-dark/60">{t("panel.response.unit")}</span>
          </div>
          <p className="text-[13px] text-on-surface-dark/70 leading-relaxed">
            {t("panel.response.body")}
          </p>
        </div>

        {/* Data safety */}
        <div className="border-t border-border-dark pt-6">
          <div className="font-mono text-[10px] tracking-[0.12em] text-on-surface-dark/50 uppercase mb-3">
            {t("panel.data.label")}
          </div>
          <h4 className="font-bold text-[14px] tracking-[0.04em] uppercase mb-4">{t("panel.data.heading")}</h4>
          <ul className="space-y-4">
            {[
              {
                title: t("panel.data.0.title"),
                desc: t("panel.data.0.desc"),
                icon: <path d="M12 3 4 6v6c0 4 3 7 8 9 5-2 8-5 8-9V6z"/>,
              },
              {
                title: t("panel.data.1.title"),
                desc: t("panel.data.1.desc"),
                icon: <><rect x="5" y="11" width="14" height="10"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></>,
              },
              {
                title: t("panel.data.2.title"),
                desc: t("panel.data.2.desc"),
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
            {t("panel.contact.prefix")}{" "}
            <a href="mailto:rfq@borela.eu" className="text-on-surface-dark underline hover:text-on-surface-dark/80 transition-colors">rfq@borela.eu</a>
            {" "}{t("panel.contact.or")}{" "}
            <a href="tel:+3676569122" className="text-on-surface-dark underline hover:text-on-surface-dark/80 transition-colors">+36 76 569 122</a>
          </div>
        </div>
      </aside>
    </div>
  );
}
