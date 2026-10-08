import { Metadata } from "next";
import Link from "next/link";
import JsonLd, {
  generateBreadcrumbsLd,
  generateFaqLd,
} from "@/components/SEO/JsonLd";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import styles from "./faq.module.css";
import axios from "axios";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Softmind Wellness",
  description:
    "Find answers to common questions about therapy sessions, confidentiality, psychiatric care, online sessions, and booking at Softmind Wellness.",
  alternates: {
    canonical: "https://www.softmindindia.com/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions | Softmind Wellness",
    description:
      "Helpful answers about therapy, sessions, confidentiality, and our clinical approach across Kerala and online.",
    url: "https://www.softmindindia.com/faq",
  },
};

const BASE_URL = (process.env.NEXT_PUBLIC_BASE_URL || "https://devsoftminderp.m.frappe.cloud").replace(/\/+$/, "");

async function getFaqs() {
  try {
    const res = await axios.get(
      `${BASE_URL}/api/method/softmind_custom.cms_api.faq_api.get_faqs`,
      { headers: { "Cache-Control": "no-cache" }, timeout: 10000 }
    );
    const json = res.data;
    const items = json.message?.data || json.message || (Array.isArray(json.data) ? json.data : []);
    
    if (Array.isArray(items) && items.length > 0) {
      return items.map((item: any) => ({
        question: item.question || "",
        answer: item.answer || "",
      }));
    }
  } catch (err) {
    console.error("fetchFaqs error:", err);
  }
  return [];
}

export default async function FaqPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.softmindindia.com" },
    { name: "FAQ", url: "https://www.softmindindia.com/faq" },
  ];

  const faqs = await getFaqs();
  const breadcrumbsLd = generateBreadcrumbsLd(breadcrumbs);
  const faqLd = generateFaqLd(faqs);

  return (
    <>
      <JsonLd data={breadcrumbsLd} />
      {faqLd && <JsonLd data={faqLd} />}

      <div className={styles.container}>
        <header className={styles.hero}>
          <h1 className={styles.h1}>Frequently Asked Questions</h1>
          <p className={styles.intro}>
            Everything you need to know about our services, booking process, confidentiality,
            and clinical care.
          </p>
        </header>

        <div className={styles.faqList}>
          {faqs.map((faq, idx) => (
            <div key={idx} className={styles.faqCard}>
              <h2 className={styles.question}>{faq.question}</h2>
              <p className={styles.answer}>{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaBox}>
          <h2 className={styles.ctaHeading}>When You're Ready We're Here.</h2>
          <p className={styles.ctaText}>
            We believe the first step toward healing. With compassionate care and evidence-based
            approaches, we're here to help you move forward, one step at a time.
          </p>
          <div className={styles.ctaRow}>
            <Link href="tel:+919061818732" className={styles.primaryBtn}>
              <Phone size={18} /> Call Us <ArrowRight size={18} />
            </Link>
            <Link href="https://wa.me/919061818732" className={styles.secondaryBtn} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} /> WhatsApp <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
