import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jojobanks.net"),

  title: {
    default:
      "Jojo Banks | Designer",
    template: "%s | Jojo Banks",
  },

  description:
    "Portfolio of Jojo Banks, a multidisciplinary designer and creative technologist based in Tokyo. Explore branding, digital product design, UX/UI, visual identity systems, creative technology and 3D projects.",

  keywords: [
    "Jojo Banks",
    "Product Designer",
    "UX Designer",
    "UI Designer",
    "Brand Designer",
    "Creative Technologist",
    "Digital Product Design",
    "Visual Identity Design",
    "Brand Identity",
    "Interaction Design",
    "Creative Direction",
    "3D Design",
    "Tokyo Designer",
    "Tokyo Product Designer",
    "Design Portfolio",
  ],

  authors: [
    {
      name: "Jojo Banks",
      url: "https://www.jojobanks.net",
    },
  ],

  creator: "Jojo Banks",
  publisher: "Jojo Banks",

  alternates: {
    canonical: "https://www.jojobanks.net",
  },

  openGraph: {
    type: "website",
    url: "https://www.jojobanks.net",
    siteName: "Jojo Banks",

    title:
      "Jojo Banks | Product Designer",

    description:
      "Portfolio of Jojo Banks, a multidisciplinary designer and creative technologist based in Tokyo. Featuring branding, digital products, UX/UI design, creative technology and 3D work.",

    images: [
      {
        url: "/images/jojo-banks-portfolio.png",
        width: 1200,
        height: 630,
        alt: "Selected branding, product design, UX and creative technology work by Jojo Banks",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Jojo Banks | Product Designer, Brand Designer & Creative Technologist",
    description:
      "Branding, digital products, UX/UI, creative technology and 3D work by Jojo Banks.",
    images: ["/images/jojo-banks-portfolio.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jojo Banks",
    url: "https://www.jojobanks.net",
    jobTitle: "Product Designer",
    sameAs: [
      "https://www.instagram.com/jojobanksi",
      "https://soundcloud.com/notsomeatyjo",
      "https://www.linkedin.com/in/jojobanks/",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="i1nzlJtW1KgddWbZIPWo6cfi0JMniBXPjmLtMTMiVXw"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}