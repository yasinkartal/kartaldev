
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.kartal.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  alternates: {
    canonical: siteUrl,
  },

  title: "Yasin Kartal | SAP, ERP & AI Solutions",

  description:
    "SAP, ERP, enterprise AI, automation, and agentic solutions " +
    "by Yasin Kartal. Projects, technical insights, and real-world " +
    "enterprise use cases.",

  openGraph: {
    type: "website",
    siteName: "Yasin Kartal",
    title: "Yasin Kartal | SAP, ERP & AI Solutions",
    description:
      "SAP ERP, enterprise AI, automation and agentic solutions.",
    url: siteUrl,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Yasin Kartal",
  url: siteUrl,

  sameAs: [
    "https://tr.linkedin.com/in/yasinkartal",
  ],

  description:
    "SAP ERP and enterprise AI professional specializing in " +
    "business process automation and agentic AI systems.",

  knowsAbout: [
    "SAP ERP",
    "SAP S/4HANA",
    "Enterprise Artificial Intelligence",
    "Agentic AI",
    "Business Process Automation",
  ],
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        {children}
      </body>
    </html>
  );
}
