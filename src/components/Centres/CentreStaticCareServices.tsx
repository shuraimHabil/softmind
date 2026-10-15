"use client";

import { useState } from "react";
import styles from "./CentreStaticCareServices.module.css";

interface CareArea {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface Therapy {
  title: string;
  pill: string;
  desc: string;
}

interface TechCare {
  title: string;
  desc: string;
  callout?: string;
  icon: React.ReactNode;
}

const areasOfCare: CareArea[] = [
  {
    title: "Emotional Well-being",
    desc: "Space to understand your emotional experiences, explore recurring patterns and develop practical responses to everyday challenges.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7Z" />
        <path d="M9 21h6" />
      </svg>
    ),
  },
  {
    title: "Relationships & Family Life",
    desc: "Couples counselling and family sessions to explore communication, expectations and patterns of interaction, working towards agreed goals.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Children & Adolescents",
    desc: "Support considering the young person’s development, family relationships and educational setting, involving parents when appropriate.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
        <path d="M6 20.5v-1.75A4.75 4.75 0 0 1 10.75 14h2.5A4.75 4.75 0 0 1 18 18.75V20.5" />
      </svg>
    ),
  },
  {
    title: "Personal Development",
    desc: "Work on self-understanding, confidence, habits, decision-making and manageable personal goals tailored to your life circumstances.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h5l3 7 4-14 3 7h5" />
      </svg>
    ),
  },
  {
    title: "Work & Everyday Life",
    desc: "Guidance for navigating workplace demands, routine adjustments and communication to build sustainable ways forward.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="7" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
];

const psychologicalTherapies: Therapy[] = [
  {
    title: "Cognitive Behavioural Therapy",
    pill: "CBT",
    desc: "Explore connections between thoughts, feelings and behaviour with practical exercises for everyday life.",
  },
  {
    title: "Dialectical Behaviour Therapy",
    pill: "DBT Skills",
    desc: "Structured skills in mindfulness, emotional regulation, distress tolerance and interpersonal effectiveness.",
  },
  {
    title: "Solution-Focused Brief Therapy",
    pill: "SFBT",
    desc: "Identify personal strengths, clarify change goals and build manageable steps towards positive outcomes.",
  },
  {
    title: "Acceptance & Commitment Therapy",
    pill: "ACT",
    desc: "Learn flexible responses to difficult thoughts while taking action guided by what truly matters to you.",
  },
  {
    title: "Rational Emotive Behaviour Therapy",
    pill: "REBT",
    desc: "Examine core beliefs and expectations to develop more adaptive, helpful emotional and behavioural habits.",
  },
  {
    title: "Mindfulness-Based Approaches",
    pill: "Mindfulness",
    desc: "Practise observing thoughts, feelings and bodily sensations with greater grounded awareness.",
  },
  {
    title: "Behavioural Approaches",
    pill: "Behavioural",
    desc: "Structured routine planning, activity pacing and gradual exposure tailored to your everyday goals.",
  },
  {
    title: "Relaxation & Practical Skills",
    pill: "Skills",
    desc: "Guided breathing, progressive muscle relaxation and somatic regulation woven into therapy sessions.",
  },
];

const assessmentAndTech: TechCare[] = [
  {
    title: "Psychological Assessment",
    desc: "Clinical interviews and standardised tools to clarify concerns and outline clear, collaborative next steps.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: "qEEG & Brain Mapping",
    desc: "Quantitative EEG analyses electrical brain patterns, interpreted strictly alongside comprehensive consultation.",
    callout: "Recordings are always considered alongside personal context.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a9 9 0 0 1 9 9c0 3.2-1.7 6-4.2 7.6L16 21H8l-.8-2.4A9 9 0 0 1 3 11a9 9 0 0 1 9-9Z" />
        <path d="M9 10h.01M15 10h.01M9.5 15a3.5 3.5 0 0 0 5 0" />
      </svg>
    ),
  },
  {
    title: "Neurofeedback",
    desc: "Real-time brainwave feedback training to support self-regulation, discussed with full clinical review.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Biofeedback",
    desc: "Physiological feedback (heart rate, skin conductance) helping observe and regulate somatic responses.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Transcranial Direct Current Stimulation (tDCS)",
    desc: "A non-invasive neuromodulation technique that uses low-intensity electrical currents to influence brain activity. Offered under professional supervision following individual assessment, with attention to safety, suitability and current scientific evidence.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Audio-Visual Entrainment (AVE)",
    desc: "A technology-assisted approach using rhythmic light and sound stimulation to support guided relaxation and sensory experiences. Sessions are individually planned, with appropriate screening and professional supervision.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 10v3M6 6v11M10 3v18M14 8v7M18 5v13M22 10v3" />
      </svg>
    ),
  },
];

type TabKey = "areas" | "therapies" | "tech";

const tabs: { key: TabKey; label: string; desc: string }[] = [
  {
    key: "areas",
    label: "Areas of Care",
    desc: "Evidence-informed psychological support tailored to individuals, couples, children and families across our centres.",
  },
  {
    key: "therapies",
    label: "Psychological Therapies",
    desc: "The therapeutic approach is chosen collaboratively, considering your individual needs, preferences and agreed goals.",
  },
  {
    key: "tech",
    label: "Assessment & Technology",
    desc: "Standardised assessments and technology-assisted methods integrated into structured, personalized care plans.",
  },
];

export default function CentreStaticCareServices() {
  const [activeTab, setActiveTab] = useState<TabKey>("areas");
  const currentTabInfo = tabs.find((t) => t.key === activeTab) || tabs[0];

  return (
    <section className={styles.careSection} id="our-care">
      <div className={styles.container}>
        {/* Top Header Row with Title + Segmented Switcher */}
        <div className={styles.headerRow}>
          <div className={styles.titleCol}>
            <h2 className={styles.mainTitle}>Our Care</h2>
          </div>

          {/* Segmented Filter Pills */}
          <div className={styles.tabsWrap} role="tablist" aria-label="Our Care Categories">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.key)}
                  className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ""}`}
                >
                  <span className={styles.tabLabel}>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Category Subtitle */}
        <p className={styles.activeDesc}>{currentTabInfo.desc}</p>

        {/* Tab 1: Areas of Care (5 cards) */}
        {activeTab === "areas" && (
          <div className={styles.tabContent} key="areas">
            <div className={styles.areasGrid}>
              {areasOfCare.map((item, idx) => (
                <div key={idx} className={styles.areaCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.cardIcon}>{item.icon}</div>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                  </div>
                  <p className={styles.cardText}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Psychological Therapies (8 cards) */}
        {activeTab === "therapies" && (
          <div className={styles.tabContent} key="therapies">
            <div className={styles.therapiesGrid}>
              {psychologicalTherapies.map((item, idx) => (
                <div key={idx} className={styles.therapyCard}>
                  <div className={styles.therapyBadgeRow}>
                    <span className={styles.therapyPill}>{item.pill}</span>
                  </div>
                  <h3 className={styles.therapyTitle}>{item.title}</h3>
                  <p className={styles.therapyText}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Assessment & Technology-Assisted Care (6 cards) */}
        {activeTab === "tech" && (
          <div className={styles.tabContent} key="tech">
            <div className={styles.techGrid}>
              {assessmentAndTech.map((item, idx) => (
                <div key={idx} className={styles.techCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.cardIcon}>{item.icon}</div>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                  </div>
                  <p className={styles.cardText}>{item.desc}</p>
                  {item.callout && (
                    <div className={styles.techCallout}>
                      <em>{item.callout}</em>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className={styles.availabilityBanner}>
              <span className={styles.availabilityIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </span>
              <p className={styles.availabilityText}>
                Availability depends on clinical suitability, equipment and appointment schedules.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
