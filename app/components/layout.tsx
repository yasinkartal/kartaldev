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

export const metadata: Metadata = {
  title: "KARTAL.DEV | ERP, Data, Context & Agents",
  description:
    "ERP, data, context engineering, enterprise AI ve agents üzerine yazılar, deneyler ve teknik araştırmalar. Yasin Kartal'ın bağımsız teknoloji laboratuvarı.",
  keywords: [
    "ERP",
    "Data",
    "Context Engineering",
    "Enterprise AI",
    "Agents",
    "SAP",
    "ABAP",
    "MCP",
    "Yasin Kartal",
  ],
  authors: [{ name: "Yasin Kartal" }],
  openGraph: {
    title: "KARTAL.DEV | ERP, Data, Context & Agents",
    description:
      "Kurumsal sistemlerin veriden bağlama, bağlamdan zekâya dönüşümünü araştıran bağımsız teknoloji laboratuvarı.",
    url: "https://kartal.dev",
    siteName: "KARTAL.DEV",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KARTAL.DEV | ERP, Data, Context & Agents",
    description:
      "Kurumsal sistemlerin veriden bağlama, bağlamdan zekâya dönüşümünü araştıran bağımsız teknoloji laboratuvarı.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#03050c] text-slate-100">
        {children}
      </body>
    </html>
  );
}