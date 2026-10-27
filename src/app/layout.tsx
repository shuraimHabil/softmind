import type { Metadata, Viewport } from "next";
import { Anek_Latin } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { BookingModalProvider } from "@/components/BookingModal/BookingModalContext";
import BookingModal from "@/components/BookingModal/BookingModal";
import ChatBot from "@/components/ChatBot/ChatBot";

import { getSiteUrl } from "@/lib/siteUrl";

const anekLatin = Anek_Latin({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-anek-latin",
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Softmind - Evidence-Based & Personalized Psychological Care",
  description:
    "Softmind is a pioneer in evidence based and personalized mental healthcare, offering psychiatric services, psychological therapy and wellness programs in Kochi and online.",
  openGraph: {
    siteName: "Softmind Wellness",
    locale: "en_IN",
    type: "website",
    title: "Softmind - Evidence-Based & Personalized Psychological Care",
    description:
      "Softmind is a pioneer in evidence based and personalized mental healthcare, offering psychiatric services, psychological therapy and wellness programs in Kochi and online.",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/assets/softmind_india.jpg`,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Softmind - Evidence-Based & Personalized Psychological Care",
      },
      {
        url: `${siteUrl}/og/default.jpg`,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Softmind - Evidence-Based & Personalized Psychological Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Softmind - Evidence-Based & Personalized Psychological Care",
    description:
      "Softmind is a pioneer in evidence based and personalized mental healthcare, offering psychiatric services, psychological therapy and wellness programs in Kochi and online.",
    images: [`${siteUrl}/assets/softmind_india.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1F3A",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={anekLatin.variable}
    >
      <head>
        <link rel="image_src" href={`${siteUrl}/assets/softmind_india.jpg`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anek+Latin:wght@100..800&family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Noto+Sans+Malayalam:wght@100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <BookingModalProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <BookingModal />
          <ChatBot />
        </BookingModalProvider>
      </body>
    </html>
  );
}
