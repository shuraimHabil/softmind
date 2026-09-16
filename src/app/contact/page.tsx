import { Metadata } from "next";
import Link from "next/link";
import { centres } from "@/lib/centres";
import JsonLd, { generateBreadcrumbsLd } from "@/components/SEO/JsonLd";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact & Centre Locations | Softmind Wellness",
  description:
    "Get in touch with Softmind Wellness centres in Panampilly Nagar, Kakkanad, Thrissur, and Aroor. Phone numbers, addresses, opening hours, and appointment booking.",
  alternates: {
    canonical: "https://www.softmindindia.com/contact",
  },
  openGraph: {
    title: "Contact & Centre Locations | Softmind Wellness",
    description:
      "Connect with our clinical team across Kochi, Thrissur, Aroor, or book an online consultation in Malayalam and English.",
    url: "https://www.softmindindia.com/contact",
  },
};

export default function ContactPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.softmindindia.com" },
    { name: "Contact", url: "https://www.softmindindia.com/contact" },
  ];

  const activeCentres = centres.filter((c) => c.id !== "trivandrum");

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
            <li aria-current="page">Contact</li>
          </ol>
        </nav>

        <header className={styles.hero}>
          <p className={styles.eyebrow}>GET IN TOUCH</p>
          <h1 className={styles.h1}>Contact Softmind Wellness</h1>
          <p className={styles.intro}>
            We welcome your questions. Contact our team to book an appointment, inquire about
            psychological services, or speak with our client care executive.
          </p>
        </header>

        {/* Quick Contact Bar */}
        <div className={styles.quickBar}>
          <div className={styles.quickItem}>
            <span className={styles.quickLabel}>Central Appointments / WhatsApp</span>
            <a href="tel:+919061818732" className={styles.quickValue}>
              +91 90618 18732
            </a>
          </div>
          <div className={styles.quickItem}>
            <span className={styles.quickLabel}>General Email</span>
            <a href="mailto:info@softmindindia.com" className={styles.quickValue}>
              info@softmindindia.com
            </a>
          </div>
          <div className={styles.quickItem}>
            <span className={styles.quickLabel}>Consultation Hours</span>
            <span className={styles.quickValueText}>Mon – Sat: 9:00 AM – 7:00 PM</span>
          </div>
        </div>

        {/* Physical Centre Locations */}
        <section className={styles.centresSection}>
          <h2 className={styles.h2}>Our Centre Locations</h2>
          <div className={styles.centresGrid}>
            {activeCentres.map((centre) => (
              <div key={centre.id} className={styles.centreCard}>
                <h3 className={styles.centreName}>{centre.name}</h3>
                <p className={styles.centreAddress}>{centre.fullAddress}</p>
                <div className={styles.centreContactRow}>
                  <span><strong>Phone:</strong> {centre.phone}</span>
                  <span><strong>Email:</strong> {centre.email}</span>
                  <span><strong>Hours:</strong> {centre.hours}</span>
                </div>
                <div className={styles.cardActions}>
                  <Link href={`/centres/${centre.slug}`} className={styles.detailsBtn}>
                    View Centre Details &rarr;
                  </Link>
                  <Link href={`/book?centre=${centre.slug}`} className={styles.bookBtn}>
                    Book Session
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tele-MANAS Crisis Notice */}
        <aside className={styles.crisisCard}>
          <h3 className={styles.crisisHeading}>Emergency & Crisis Support</h3>
          <p className={styles.crisisText}>
            Softmind operates planned outpatient mental health centres. If you or someone you
            know is in acute emotional crisis, experiencing suicidal thoughts, or needs 24/7 urgent
            help, please contact the national helpline <strong>Tele-MANAS on 14416</strong> (free, toll-free)
            or visit your nearest hospital emergency department.
          </p>
        </aside>
      </div>
    </>
  );
}
