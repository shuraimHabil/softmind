import { Metadata } from "next";
import Link from "next/link";
import JsonLd, { generateBreadcrumbsLd } from "@/components/SEO/JsonLd";
import CareerApplicationForm from "./CareerApplicationForm";
import styles from "./careers.module.css";

export const metadata: Metadata = {
  title: "Careers at Softmind | Grow with purpose. Work with understanding.",
  description:
    "Explore career opportunities for clinical psychologists, psychiatrists, researchers, interns, and healthcare coordinators at Softmind Wellness in Kerala.",
  alternates: {
    canonical: "https://www.softmindindia.com/careers",
  },
  openGraph: {
    title: "Careers at Softmind | Work with Us",
    description:
      "At Softmind, we welcome professionals who value psychological science, ethical practice and human understanding across our centres in Kerala.",
    url: "https://www.softmindindia.com/careers",
  },
};

const whyJoinPillars = [
  {
    title: "Meaningful Work",
    tagline: "Person-centred psychological care",
    desc: "Contribute to psychological care that considers the person beyond symptoms and diagnostic labels.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
  },
  {
    title: "Professional Growth",
    tagline: "Learning and skill development",
    desc: "Be part of an environment that encourages continuous learning and the development of clinical and organisational skills.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <path d="M8 7h8" />
        <path d="M8 11h6" />
      </svg>
    ),
  },
  {
    title: "Collaboration",
    tagline: "Working across disciplines",
    desc: "Work alongside professionals from different disciplines who share a commitment to thoughtful, evidence-informed care.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Research & Innovation",
    tagline: "Psychological science & new approaches",
    desc: "Opportunities to explore psychological research, neuroscience and technology-assisted approaches, depending on your expertise and interests.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      </svg>
    ),
  },
];

const careerCategories = [
  {
    title: "Psychological & Psychiatric Care",
    desc: "Psychologists, psychotherapists, psychiatrists and allied professionals.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
        <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
        <path d="M12 5v13" />
      </svg>
    ),
  },
  {
    title: "Research & Training",
    desc: "Research associates, programme coordinators and academic collaborators.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "Internships & Learning",
    desc: "Psychology students and early-career professionals.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    title: "Operations & Administration",
    desc: "Human resources, finance, administration and centre management.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: "Client Care & Coordination",
    desc: "Client care, front desk and centre coordination.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const valuesList = [
  {
    name: "Scientific thinking",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7Z" />
        <path d="M9 21h6" />
      </svg>
    ),
  },
  {
    name: "Professional integrity",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    name: "Human understanding",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    name: "Collaboration",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    name: "Continuous learning",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

export default function CareersPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.softmindindia.com" },
    { name: "Careers", url: "https://www.softmindindia.com/careers" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <JsonLd data={generateBreadcrumbsLd(breadcrumbs)} />

      {/* ── 1. Hero Section ── */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link>
            <span className={styles.breadcrumbDivider}>/</span>
            <span>Careers</span>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <h1 className={styles.h1}>Careers at Softmind</h1>
              <h2 className={styles.heroSubtitle}>Grow with purpose. Work with understanding.</h2>
              <div className={styles.heroDescGroup}>
                <p className={styles.heroParagraph}>
                  At Softmind, we welcome professionals who value psychological science, ethical practice and human understanding.
                </p>
                <p className={styles.heroParagraph}>
                  We encourage continuous learning, multidisciplinary collaboration and evidence-informed psychological care.
                </p>
              </div>
              <div className={styles.heroCtaRow}>
                <a href="#apply" className={styles.heroApplyBtn}>
                  Apply Now →
                </a>
              </div>
            </div>

            <div className={styles.heroBadgeCol}>
              <div className={styles.heroEditorialCard}>
                <span className={styles.editorialTag}>People</span>
                <span className={styles.editorialTag}>Science</span>
                <span className={styles.editorialTag}>Possibilities</span>
                <div className={styles.editorialLine} />
                <p className={styles.editorialSub}>
                  Interdisciplinary mental healthcare rooted in ethical commitment, clinical autonomy and scientific rigor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Why Join Softmind? ── */}
      <section className={styles.whySection}>
        <div className={styles.container}>
          <div className={styles.whyHeader}>
            <span className={styles.eyebrow}>WHY JOIN SOFTMIND?</span>
            <h2 className={styles.sectionTitle}>A place for meaningful work</h2>
          </div>

          <div className={styles.whyGrid}>
            {whyJoinPillars.map((item, idx) => (
              <div key={idx} className={styles.whyCard}>
                <div className={styles.whyIconWrap}>{item.icon}</div>
                <h3 className={styles.whyCardTitle}>{item.title}</h3>
                <p className={styles.whyCardTagline}>{item.tagline}</p>
                <p className={styles.whyCardDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Career Opportunities ── */}
      <section className={styles.opportunitiesSection}>
        <div className={styles.container}>
          <div className={styles.opportunitiesHeader}>
            <span className={styles.eyebrow}>CAREER OPPORTUNITIES</span>
            <h2 className={styles.sectionTitle}>Explore opportunities at Softmind</h2>
            <p className={styles.sectionSubtitle}>
              We welcome applications across the following areas. Opportunities are subject to availability, relevant qualifications and organisational requirements.
            </p>
          </div>

          <div className={styles.opportunitiesGrid}>
            {careerCategories.map((cat, idx) => (
              <div key={idx} className={styles.opportunityCard}>
                <div className={styles.oppIconWrap}>{cat.icon}</div>
                <h3 className={styles.oppTitle}>{cat.title}</h3>
                <p className={styles.oppDesc}>{cat.desc}</p>
              </div>
            ))}
          </div>

          <p className={styles.opportunitiesNotice}>
            Opportunities depend on current requirements and relevant qualifications.
          </p>
        </div>
      </section>

      {/* ── 4. What We Value (From reference) ── */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={styles.valuesGrid}>
            <div className={styles.valuesHeader}>
              <span className={styles.eyebrow}>WHAT WE VALUE</span>
              <h2 className={styles.sectionTitle}>Shared values, stronger impact</h2>
            </div>

            <div className={styles.valuesBadgesRow}>
              {valuesList.map((val, idx) => (
                <div key={idx} className={styles.valueBadge}>
                  <div className={styles.valueIcon}>{val.icon}</div>
                  <span className={styles.valueText}>{val.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Join Our Team & Application Form ── */}
      <section id="apply" className={styles.applySection}>
        <div className={styles.container}>
          <div className={styles.applyLayoutGrid}>
            {/* Left Context Column */}
            <div className={styles.applyContextCol}>
              <span className={styles.eyebrow}>JOIN OUR TEAM</span>
              <h2 className={styles.applyLeadTitle}>
                Your work can contribute to a deeper understanding of people.
              </h2>
              <p className={styles.applyLeadDesc}>
                Interested in working with Softmind? Submit your application and our team will contact you if a suitable opportunity is available.
              </p>

              <div className={styles.perksList}>
                <div className={styles.perkItem}>
                  <div className={styles.perkIcon}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>Multidisciplinary peer supervision &amp; case reviews</span>
                </div>
                <div className={styles.perkItem}>
                  <div className={styles.perkIcon}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>Evidence-informed clinical autonomy &amp; ethical care</span>
                </div>
                <div className={styles.perkItem}>
                  <div className={styles.perkIcon}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>Dedicated, soundproof modern consultation rooms</span>
                </div>
              </div>

              <div className={styles.locationsCard}>
                <div className={styles.locationsCardHeader}>
                  <span className={styles.locationPinIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <span>Centres Across Kerala</span>
                </div>
                <p className={styles.locationsPills}>
                  Panampilly Nagar &middot; Kakkanad &middot; Aroor &middot; Thrissur
                </p>
              </div>

              <div className={styles.directEmailCard}>
                <span>Prefer to write to our recruitment committee directly?</span>
                <div>
                  <a href="mailto:careers@softmindindia.com" className={styles.directEmailLink}>
                    careers@softmindindia.com &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Right Application Form Column */}
            <div className={styles.applyFormCol}>
              <CareerApplicationForm />
            </div>
          </div>

          <p className={styles.bottomDisclaimer}>
            Clinical roles require appropriate qualifications and professional registration where applicable. Applications do not guarantee employment.
          </p>
        </div>
      </section>
    </main>
  );
}
