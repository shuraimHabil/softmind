import { Metadata } from "next";
import Link from "next/link";
import JsonLd, {
  generateBreadcrumbsLd,
  generateFaqLd,
} from "@/components/SEO/JsonLd";
import styles from "./faq.module.css";

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

const faqs = [
  {
    question: "Do I need a doctor's referral to see a Softmind psychologist?",
    answer:
      "No. You do not need a referral. You can book directly by phone, WhatsApp, or through our online booking form.",
  },
  {
    question: "Is what I discuss in therapy kept confidential?",
    answer:
      "Yes. All consultations and therapy sessions are strictly confidential. We only share information with your written consent, or where the law strictly requires it to ensure physical safety.",
  },
  {
    question: "What happens during the first consultation?",
    answer:
      "Your psychologist listens to what brings you in, reviews relevant personal and medical background, and discusses your goals. By the end of the session, you will have a clear, collaborative understanding of recommended next steps.",
  },
  {
    question: "How long does a consultation session last?",
    answer:
      "Standard therapy sessions typically run between 45 to 60 minutes. Certain comprehensive diagnostic or neuropsychological assessments can take up to 90 minutes.",
  },
  {
    question: "Do you provide online therapy sessions?",
    answer:
      "Yes. We offer encrypted, secure video sessions in both Malayalam and English for clients living in Kerala, across other Indian states, and abroad.",
  },
  {
    question: "Will I be prescribed medication?",
    answer:
      "Only a licensed psychiatrist can prescribe psychiatric medication, and only if clinically indicated. Many emotional concerns improve significantly with psychological therapy alone.",
  },
  {
    question: "What languages do Softmind clinicians speak?",
    answer:
      "Our clinicians consult fluently in Malayalam and English. Several team members also consult in Hindi and Tamil.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can request an appointment online via our Book a Session page, call +91 90618 18732, or message our intake team on WhatsApp.",
  },
  {
    question: "What should I do if I am in crisis or have an emergency?",
    answer:
      "Softmind operates planned outpatient clinics. If you are experiencing an acute crisis or having thoughts of self-harm, call the national Tele-MANAS helpline on 14416 (free, 24/7) or go directly to the nearest hospital emergency department.",
  },
];

export default function FaqPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.softmindindia.com" },
    { name: "FAQ", url: "https://www.softmindindia.com/faq" },
  ];

  const breadcrumbsLd = generateBreadcrumbsLd(breadcrumbs);
  const faqLd = generateFaqLd(faqs);

  return (
    <>
      <JsonLd data={breadcrumbsLd} />
      {faqLd && <JsonLd data={faqLd} />}

      <div className={styles.container}>
        <nav aria-label="Breadcrumbs" className={styles.breadcrumbs}>
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <span className={styles.divider}>/</span>
            <li aria-current="page">FAQ</li>
          </ol>
        </nav>

        <header className={styles.hero}>
          <p className={styles.eyebrow}>HELP & INFORMATION</p>
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
          <h2 className={styles.ctaHeading}>Have a question not answered here?</h2>
          <p className={styles.ctaText}>
            Our client care team is here to assist you with any questions about therapy,
            intake, or centre visits.
          </p>
          <div className={styles.ctaRow}>
            <Link href="/contact" className={styles.primaryBtn}>
              Contact Us
            </Link>
            <Link href="/book" className={styles.secondaryBtn}>
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
