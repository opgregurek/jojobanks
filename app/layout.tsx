import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JOJO BANKS",
  description: "Personal website and portfolio of Jojo Banks, a multidisciplinary designer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>{children}</body>
    </html>
  );
}
