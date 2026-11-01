import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";

const dmSans = localFont({
  src: "../public/assets/dm-sans-latin.woff2",
  weight: "400 700",
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://artway-offert-drab.vercel.app"),
  title: "Flytthjälp i Helsingborg & Skåne – Få fri offert | Artway AB",
  description:
    "En trygg flytt börjar med rätt hjälp. Artway hjälper dig med flytt, packning, montering och flyttstädning. Få en kostnadsfri offert utan bindande bokning.",
  robots: { index: false, follow: false },
  icons: { icon: { url: "/assets/favicon.png", type: "image/png" } },
  openGraph: {
    title: "Ny adress. En trygg start. | Artway AB",
    description:
      "Flytt, packning och flyttstädning. Ett team hela vägen. Få en kostnadsfri offert för din flytt.",
    type: "website",
    locale: "sv_SE",
    images: [{ url: "/assets/hero-trucks.webp", width: 1200, height: 554 }],
  },
};

export const viewport: Viewport = { themeColor: "#123c31" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sv" className={dmSans.variable}>
      <body>{children}</body>
    </html>
  );
}
