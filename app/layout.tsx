// The real <html>/<body> shell lives in app/[lang]/layout.tsx (per-locale).
// This root layout is a required passthrough.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
