import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "مراد خضري — مطور واجهات فاخر | Murad Khudri — Crafted Premium Frontend",
  description: "مطور واجهات سعودي يبني مواقع لا تُنسى. أحوّل فكرتك إلى تجربة رقمية فاخرة تبيع قبل أن تتكلم. Crafted Premium Frontend Developer in Saudi Arabia.",
  keywords: ["مطور واجهات", "تصميم مواقع", "Next.js", "Frontend Developer", "Saudi Arabia", "Murad Khudri"],
  authors: [{ name: "مراد خضري", url: "https://murad.example.com" }],
  creator: "مراد خضري",
  openGraph: {
    title: "مراد خضري — مطور واجهات فاخر",
    description: "أبني مواقع تبيع. كل تفصيلة تهم.",
    type: "website",
    locale: "ar_SA",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "مراد خضري — مطور واجهات فاخر",
    description: "Crafted Premium Frontend",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,400;6..96,700;6..96,900&family=Archivo:wght@400;600;700&family=JetBrains+Mono:wght@400;500&family=Aref+Ruqaa:wght@400;700&family=Amiri:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          تخطي إلى المحتوى
        </a>
        {children}
      </body>
    </html>
  );
}
