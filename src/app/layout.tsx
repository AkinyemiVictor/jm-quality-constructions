import type { Metadata } from "next";
import { Bebas_Neue, Inter, Roboto } from "next/font/google";
import "./globals.css";

const displayFont = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const bodyFont = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

const linkFont = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-link",
});
export const metadata: Metadata = {
  title: "JM Quality Construction",
  description:
    "Modular installation, framing, and transportation services built with quality and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${linkFont.variable} ${displayFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
