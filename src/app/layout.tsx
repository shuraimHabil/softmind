import type { Metadata } from "next";
import { Fraunces, Anek_Latin, Anek_Malayalam } from "next/font/google";
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

const anekMalayalam = Anek_Malayalam({
  subsets: ["latin", "malayalam"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-anek-malayalam",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Softmind - Evidence-Based & Personalized Psychological Care",
  description:
    "Softmind is a pioneer in evidence-based and personalized mental healthcare, offering psychiatric services, psychological therapy, child counseling, and online consultations.",
  keywords: ["mental health", "psychology", "therapy", "psychiatry", "Kerala", "Softmind"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${anekLatin.variable} ${anekMalayalam.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anek+Latin:wght@100..800&family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&display=swap"
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
