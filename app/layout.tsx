import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jojo Banks | Product Designer, Brand Designer & Creative Technologist",
  description:
    "Portfolio of Jojo Banks, a multidisciplinary designer based in Tokyo. Explore branding, digital product design, creative technology, UX/UI, visual identity systems, and 3D projects.",
  openGraph: {
    title: "Jojo Banks | Product Designer, Brand Designer & Creative Technologist",
    description:
      "Portfolio of Jojo Banks, a multidisciplinary designer based in Tokyo. Featuring branding, digital products, UX/UI design, creative technology, and 3D work.",
    images: [
      {
        url: "/images/jojo-banks-portfolio.png",
        width: 1200,
        height: 630,
        alt: "Portfolio of Jojo Banks",
      },
    ],
  },
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
