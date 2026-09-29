import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./research.module.css";
import CollaborateForm from "./CollaborateForm";
import JsonLd, { generateBreadcrumbsLd } from "@/components/SEO/JsonLd";

export const metadata: Metadata = {
  title: "Research, Practice & Responsible Innovation | Softmind",
  description:
    "Softmind explores the intersection of psychological science, neuroscience, human behaviour and emerging technology through research and interdisciplinary collaboration.",
  alternates: {
    canonical: "https://www.softmindindia.com/research-and-collaboration",
  },
};

const collaborations = [
  {
    id: "meditech",
    name: "MediTECH Electronic GmbH",
    country: "Germany",
    focus: "HEG Neurofeedback & Biofeedback",
    desc: "Collaboration around the exploration and application of HEG neurofeedback and biofeedback technologies within psychological practice and research. MediTECH develops HEG neurofeedback and related biofeedback systems.",
    link: {
      label: "MediTECH Electronic GmbH",
      href: "https://www.meditech.de",
    },
    logo: (
      <div className={styles.meditechLogo}>
        <div className={styles.meditechBars}>
          <span style={{ height: "10px" }} />
          <span style={{ height: "14px" }} />
          <span style={{ height: "18px" }} />
          <span style={{ height: "22px" }} />
          <span style={{ height: "26px" }} />
          <span style={{ height: "28px" }} />
        </div>
        <div className={styles.meditechText}>
          <span className={styles.meditechName}>MediTECH</span>
          <span className={styles.meditechSub}>Electronic GmbH</span>
        </div>
      </div>
    ),
  },
  {
    id: "parasym",
    name: "Parasym",
    country: "United Kingdom",
    focus: "Non-invasive Neuromodulation",
    desc: "Research collaboration involving Nurosym and transcutaneous auricular vagus nerve stimulation (taVNS), with interest in psychological wellbeing and psychophysiological outcomes. Parasym identifies Nurosym as its non-invasive neuromodulation technology.",
    link: {
      label: "help.nurosym.com",
      href: "https://help.nurosym.com",
    },
    logo: (
      <div className={styles.parasymLogo}>
        <svg width="34" height="34" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="16" stroke="#06b6d4" strokeWidth="2.5" />
          <circle cx="18" cy="18" r="9" stroke="#06b6d4" strokeWidth="2" />
          <circle cx="18" cy="18" r="3" fill="#06b6d4" />
        </svg>
        <span className={styles.parasymText}>parasym</span>
      </div>
    ),
  },
  {
    id: "calmsync",
    name: "CalmSync / Basil Health",
    country: "USA",
    focus: "EEG, AI & Digital Mental Health",
    desc: "Collaboration exploring EEG-informed digital technology and AI-supported approaches to psychological wellbeing and mental-health innovation.",
    logo: (
      <div className={styles.calmsyncLogo}>
        <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="6" r="2.2" fill="#1e3a8a" />
          <circle cx="20" cy="34" r="2.2" fill="#1e3a8a" />
          <circle cx="6" cy="20" r="2.2" fill="#1e3a8a" />
          <circle cx="34" cy="20" r="2.2" fill="#1e3a8a" />
          <circle cx="10" cy="10" r="2" fill="#1e3a8a" />
          <circle cx="30" cy="10" r="2" fill="#1e3a8a" />
          <circle cx="10" cy="30" r="2" fill="#1e3a8a" />
          <circle cx="30" cy="30" r="2" fill="#1e3a8a" />
          <circle cx="20" cy="12" r="1.8" fill="#2563eb" />
          <circle cx="20" cy="28" r="1.8" fill="#2563eb" />
          <circle cx="12" cy="20" r="1.8" fill="#2563eb" />
          <circle cx="28" cy="20" r="1.8" fill="#2563eb" />
          <circle cx="14" cy="14" r="1.6" fill="#3b82f6" />
          <circle cx="26" cy="14" r="1.6" fill="#3b82f6" />
          <circle cx="14" cy="26" r="1.6" fill="#3b82f6" />
          <circle cx="26" cy="26" r="1.6" fill="#3b82f6" />
          <circle cx="20" cy="20" r="2.5" fill="#1d4ed8" />
        </svg>
        <div className={styles.calmsyncText}>
          <span className={styles.calmsyncName}>CalmSync</span>
          <span className={styles.calmsyncSub}>A Basil Health Company</span>
        </div>
      </div>
    ),
  },
];

const pillars = [
  {
    title: "Psychological Science",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
        <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
        <path d="M12 5v13" />
        <path d="M9.5 9.5a2 2 0 0 0 0 3" />
        <path d="M14.5 9.5a2 2 0 0 1 0 3" />
      </svg>
    ),
  },
  {
    title: "Affective Neuroscience",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <circle cx="19" cy="5" r="2" />
        <circle cx="5" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" />
        <line x1="7" y1="6.5" x2="10" y2="10" />
        <line x1="17" y1="6.5" x2="14" y2="10" />
        <line x1="7" y1="17.5" x2="10" y2="14" />
        <line x1="17" y1="17.5" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    title: "Brain–Body Research",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        <path d="M12 5v4" />
        <path d="M10 9h4" />
      </svg>
    ),
  },
  {
    title: "Neurotechnology",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "AI & Digital Mental Health",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="12" x="3" y="4" rx="2" />
        <line x1="2" y1="20" x2="22" y2="20" />
        <line x1="8" y1="16" x2="16" y2="16" />
      </svg>
    ),
  },
];

export default function ResearchAndCollaborationPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.softmindindia.com" },
    {
      name: "Research & Collaboration",
      url: "https://www.softmindindia.com/research-and-collaboration",
    },
  ];

  return (
    <div className={styles.pageWrapper}>
      <JsonLd data={generateBreadcrumbsLd(breadcrumbs)} />

      {/* 1. HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>RESEARCH & COLLABORATION</span>
              <h1 className={styles.heroTitle}>
                Research, practice<br />
                and responsible<br />
                innovation.
              </h1>
              <p className={styles.heroDesc}>
                Softmind explores the intersection of psychological science,
                neuroscience, human behaviour and emerging technology through
                research and interdisciplinary collaboration.
              </p>
              <a href="#collaborate" className={styles.heroBtn}>
                Collaborate With Us &rarr;
              </a>
            </div>

            <div className={styles.heroImageWrapper}>
              <Image
                src="/assets/research_hero.jpg"
                alt="Research, practice and responsible innovation - Neuroscience, Human Behaviour, Psychological Science, and Better Care"
                width={800}
                height={600}
                priority
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR COLLABORATIONS SECTION */}
      <section id="collaborations" className={styles.collabSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderRow}>
            <h2 className={styles.sectionTitle}>Our Collaborations</h2>
            <a href="#collaborate" className={styles.sectionHeaderLink}>
              Explore Collaborations &rarr;
            </a>
          </div>
          <p className={styles.collabSubtitle}>
            Working with trusted partners to explore psychological science,
            neurotechnology and digital innovation.
          </p>

          <div className={styles.collabGrid}>
            {collaborations.map((collab) => (
              <div key={collab.id} className={styles.collabCard}>
                <div className={styles.logoRow}>{collab.logo}</div>
                <h3 className={styles.partnerName}>{collab.name}</h3>
                <span className={styles.partnerCountry}>{collab.country}</span>
                <h4 className={styles.partnerFocus}>{collab.focus}</h4>
                <p className={styles.partnerDesc}>{collab.desc}</p>
                {collab.link && (
                  <a
                    href={collab.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.partnerLink}
                  >
                    {collab.link.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHAT WE EXPLORE SECTION */}
      <section id="explore" className={styles.exploreSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderRow}>
            <h2 className={styles.sectionTitle}>What We Explore</h2>
            <a href="#explore" className={styles.sectionHeaderLink}>
              Our Research Interests &rarr;
            </a>
          </div>

          <div className={styles.exploreContainer}>
            <div className={styles.explorePillars}>
              {pillars.map((pillar) => (
                <div key={pillar.title} className={styles.pillarItem}>
                  <div className={styles.pillarIconWrap}>{pillar.icon}</div>
                  <span className={styles.pillarLabel}>{pillar.title}</span>
                </div>
              ))}
            </div>

            <div className={styles.quoteBlock}>
              <blockquote className={styles.quoteText}>
                &ldquo;Science should deepen our understanding of people, not
                reduce people to science.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COLLABORATE WITH US SECTION */}
      <section id="collaborate" className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.formGrid}>
            <CollaborateForm />

            <div className={styles.visualCardCol}>
              <Image
                src="/assets/research_collab.jpg"
                alt="Mindful collaboration workspace"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className={styles.visualBgImage}
              />
              <div className={styles.visualOverlayCard}>
                <h3 className={styles.visualTitle}>
                  Better questions can lead to better understanding.
                </h3>
                <hr className={styles.visualDivider} />
                <p className={styles.visualTagline}>
                  Research &middot; Collaboration &middot; Responsible Innovation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
