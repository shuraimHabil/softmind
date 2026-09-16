import type { Metadata, Viewport } from "next";
import { Fraunces, Anek_Latin } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { BookingModalProvider } from "@/components/BookingModal/BookingModalContext";
import BookingModal from "@/components/BookingModal/BookingModal";
import ChatBot from "@/components/ChatBot/ChatBot";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const anekLatin = Anek_Latin({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-anek-latin",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.softmindindia.com"),
  title: "Softmind Wellness | Psychologists in Kochi, Thrissur & Across Kerala",
  description:
    "Softmind Wellness provides evidence-based psychological therapy, counselling, and psychiatric consultations across our centres in Panampilly Nagar, Kakkanad, Thrissur, Aroor, and online in Malayalam and English.",
  openGraph: {
    siteName: "Softmind Wellness",
    locale: "en_IN",
    type: "website",
    title: "Softmind Wellness | Psychological Care Across Kerala",
    description:
      "Evidence-based psychological therapy and psychiatric care across centres in Kochi, Thrissur, Aroor, and online.",
    url: "https://www.softmindindia.com",
    images: [
      {
        url: "https://www.softmindindia.com/og/default.jpg",
        width: 1200,
        height: 630,
        alt: "Softmind Wellness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Softmind Wellness | Psychological Care Across Kerala",
    description:
      "Evidence-based psychological therapy and psychiatric care across centres in Kochi, Thrissur, Aroor, and online.",
    images: ["https://www.softmindindia.com/og/default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  alternates: {
    canonical: "https://www.softmindindia.com",
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
      className={`${fraunces.variable} ${anekLatin.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anek+Latin:wght@100..800&family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Noto+Sans+Malayalam:wght@100..900&display=swap"
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
