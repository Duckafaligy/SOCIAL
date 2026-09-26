import type { Metadata, Viewport } from "next";
import { profile } from "@/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: profile.name,
  description: `Get in touch with ${profile.name}.`,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0c" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
