import { Metadata } from "next";
import Link from "next/link";
import JsonLd, { generateBreadcrumbsLd } from "@/components/SEO/JsonLd";
import styles from "./book.module.css";

export const metadata: Metadata = {
  title: "Book a Session | Softmind Wellness",
  description:
    "Schedule a confidential psychological therapy or psychiatric consultation at Softmind Wellness centres in Kochi, Thrissur, Aroor, or online.",
  alternates: {
    canonical: "https://www.softmindindia.com/book",
  },
  openGraph: {
    title: "Book a Session | Softmind Wellness",
    description:
      "Schedule a consultation with our experienced psychologists and psychiatrists in Kerala and online.",
    url: "https://www.softmindindia.com/book",
  },
};

export default function BookSessionPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.softmindindia.com" },
    { name: "Book a Session", url: "https://www.softmindindia.com/book" },
  ];

  return (
    <>
      <JsonLd data={generateBreadcrumbsLd(breadcrumbs)} />
      <div className={styles.container}>
        <nav aria-label="Breadcrumbs" className={styles.breadcrumbs}>
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <span className={styles.divider}>/</span>
            <li aria-current="page">Book a Session</li>
          </ol>
        </nav>

        <header className={styles.hero}>
          <p className={styles.eyebrow}>APPOINTMENTS</p>
          <h1 className={styles.h1}>Start a Conversation</h1>
          <p className={styles.intro}>
            Tell us a little about what you need. Our clinical coordinator will call you back
            to understand your situation and match you with the right clinician for an in-person or online session.
          </p>
        </header>

        <div className={styles.card}>
          <form className={styles.form} onSubmit={undefined}>
            <div className={styles.formGroup}>
              <label htmlFor="fullName" className={styles.label}>
                Full Name *
              </label>
              <input
                id="fullName"
                type="text"
                required
                placeholder="Enter your name"
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.label}>
                Phone Number (WhatsApp preferred) *
              </label>
              <input
                id="phone"
                type="tel"
                required
                placeholder="+91 90618 18732"
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="centreSelect" className={styles.label}>
                Preferred Centre / Mode *
              </label>
              <select id="centreSelect" required className={styles.select}>
                <option value="">Select location or online</option>
                <option value="panampilly">Panampilly Nagar, Kochi</option>
                <option value="kakkanad">Kakkanad, Kochi</option>
                <option value="thrissur">Thrissur</option>
                <option value="aroor">Aroor (Lakshmi Hospital)</option>
                <option value="online">Online Video Session (Malayalam / English)</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="concernSelect" className={styles.label}>
                Primary Concern
              </label>
              <select id="concernSelect" className={styles.select}>
                <option value="">Select an area (optional)</option>
                <option value="anxiety">Anxiety, stress or panic</option>
                <option value="depression">Low mood or depression</option>
                <option value="relationships">Couples, relationships or family</option>
                <option value="child">Child or teenager concerns</option>
                <option value="trauma">Trauma or grief</option>
                <option value="sexual">Sexual health and therapy</option>
                <option value="ocd">OCD or repetitive thoughts</option>
                <option value="other">Something else</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="notes" className={styles.label}>
                Any specific note or preferred timings?
              </label>
              <textarea
                id="notes"
                rows={3}
                placeholder="Let us know if you prefer a morning or evening slot, or a specific language..."
                className={styles.textarea}
              ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Request Appointment Callback
            </button>

            <p className={styles.privacyNote}>
              <strong>Privacy Assurance:</strong> We use these details solely to arrange your appointment.
              All submissions remain strictly confidential.
            </p>
          </form>
        </div>

        <aside className={styles.crisisCallout}>
          <p>
            <strong>Crisis Note:</strong> If you are in immediate emotional crisis or thinking about self-harm,
            please call Tele-MANAS on <strong>14416</strong> (free, 24/7) or visit your nearest hospital emergency room.
          </p>
        </aside>
      </div>
    </>
  );
}
