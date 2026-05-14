import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-[880px] mx-auto px-7 text-center">
        <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-tertiary mb-4">Error 404</div>
        <h1 className="text-[clamp(36px,5vw,60px)] font-extrabold tracking-[-0.02em] uppercase text-ink mb-6">
          Page not found
        </h1>
        <p className="text-[17px] text-ink-secondary leading-relaxed max-w-md mx-auto mb-8">
          This page doesn&apos;t exist or has moved. Use the navigation to find what you need.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center px-[22px] py-3 font-sans font-bold text-[11px] tracking-[0.16em] uppercase bg-primary text-on-primary hover:bg-primary-hover transition-colors"
          >
            Back to home
          </Link>
          <Link
            href="/rfq/"
            className="inline-flex items-center px-[22px] py-3 font-sans font-bold text-[11px] tracking-[0.16em] uppercase border border-ink text-ink hover:bg-ink hover:text-on-primary transition-colors"
          >
            Request a quote
          </Link>
        </div>
      </div>
    </section>
  );
}
