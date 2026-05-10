import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://daryeel-climate.org"),
  title: "Daryeel Climate Organization | A Greener Today",
  description:
    "Daryeel Climate Organization is a youth-led climate initiative in Mogadishu improving tree survival, climate education, and resilient community practices.",
  keywords: [
    "Daryeel Climate Organization",
    "environmental organization",
    "climate action",
    "tree planting",
    "sustainability",
    "community resilience"
  ],
  openGraph: {
    title: "Daryeel Climate Organization",
    description: "A modern environmental platform for climate action and community stewardship.",
    type: "website",
    images: [{ url: "/images/daryeel-logo.png", width: 1200, height: 1200, alt: "Daryeel Climate Organization logo" }]
  },
  icons: {
    icon: "/images/daryeel-logo.png",
    apple: "/images/daryeel-logo.png"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf7ec" },
    { media: "(prefers-color-scheme: dark)", color: "#07150f" }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
