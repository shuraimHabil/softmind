"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./OnlineConsultationCareSection.module.css";

const careAreas = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: "Emotional Well-being",
    desc: "Anxiety, stress, low mood, self-esteem and more"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Relationships & Couples",
    desc: "Communication, conflicts, intimacy and connection"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="9" cy="7" r="3"/>
        <circle cx="17" cy="9" r="2.5"/>
        <path d="M4 21v-2a4 4 0 0 1 4-4h2"/>
        <path d="M14 21v-1.5a3 3 0 0 1 3-3h1"/>
      </svg>
    ),
    title: "Children & Adolescents*",
    desc: "Behavioural concerns, emotional difficulties, academic stress and more",
    note: "*Where clinically appropriate and as per professional judgment"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>
      </svg>
    ),
    title: "Personal & Life Challenges",
    desc: "Life transitions, motivation, decisions and growth"
  }
];

const careLibraryMedia = [
  {
    id: 1,
    title: "Grounding in the Present",
    subtitle: "Settle & Ground",
    duration: "4:12",
    img: "/assets/care_library_grounding.jpg"
  },
  {
    id: 2,
    title: "Body Scan Practice",
    subtitle: "Body Awareness",
    duration: "8:45",
    img: "/assets/care_library_bodyscan.jpg"
  },
  {
    id: 3,
    title: "Preparing for Sleep",
    subtitle: "Sleep & Recovery",
    duration: "7:15",
    img: "/assets/care_library_sleep.jpg"
  },
  {
    id: 4,
    title: "Before a Difficult Conversation",
    subtitle: "Everyday Functioning",
    duration: "5:20",
    img: "/assets/care_library_conversation.jpg"
  }
];

export default function OnlineConsultationCareSection() {
  const [activeTab, setActiveTab] = useState("Audios");

  return (
    <section className={styles.section} id="care-library">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column: Who Online Consultation Can Help */}
          <div className={styles.leftCol}>
            <h2 className={styles.sectionTitle}>
              Who Online Consultation<br />Can Help
            </h2>

            <div className={styles.helpList}>
              {careAreas.map((item, idx) => (
                <div key={idx} className={styles.helpItem}>
                  <div className={styles.helpIcon}>{item.icon}</div>
                  <div>
                    <h3 className={styles.helpTitle}>{item.title}</h3>
                    <p className={styles.helpDesc}>{item.desc}</p>
                    {item.note && <span className={styles.helpNote}>{item.note}</span>}
                  </div>
                </div>
              ))}
            </div>

            <Link href="/our-care" className={styles.viewAreasLink}>
              View all areas of care →
            </Link>
          </div>

          {/* Right Column: A glimpse of the Softmind Care Library */}
          <div className={styles.rightCol}>
            <div className={styles.libraryHeader}>
              <h2 className={styles.libraryTitle}>
                A glimpse of the Softmind Care Library
              </h2>

              <div className={styles.tabsRow}>
                <div className={styles.tabsList}>
                  {["Audios", "Practice Cards", "Reflection Tools", "Guides & PDFs", "Topics"].map((tab) => (
                    <button
                      key={tab}
                      className={`${styles.tabBtn} ${activeTab === tab ? styles.tabBtnActive : ""}`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <Link href="/knowledge-centre" className={styles.viewAllLink}>
                  View All →
                </Link>
              </div>
            </div>

            {/* Media Cards Grid */}
            <div className={styles.mediaGrid}>
              {careLibraryMedia.map((media) => (
                <div key={media.id} className={styles.mediaCard}>
                  <div className={styles.thumbnailWrap}>
                    <img src={media.img} alt={media.title} className={styles.thumbnail} />
                    <div className={styles.playOverlay}>
                      <div className={styles.playButton}>
                        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                    </div>
                    <span className={styles.durationTag}>{media.duration}</span>
                  </div>

                  <div className={styles.mediaMeta}>
                    <h4 className={styles.mediaTitle}>{media.title}</h4>
                    <span className={styles.mediaSubtitle}>{media.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Personal Space Banner */}
            <div className={styles.personalSpaceCard}>
              <div className={styles.appMockupCol}>
                <div className={styles.phoneGraphic}>
                  <div className={styles.phoneScreen}>
                    <div className={styles.appHeader}>
                      <span className={styles.appDot}></span>
                      <span>Softmind Wellness</span>
                    </div>
                    <div className={styles.appItem}>
                      <span>Grounding Audio</span>
                      <small>Completed</small>
                    </div>
                    <div className={styles.appItem}>
                      <span>Daily Reflection</span>
                      <small>Saved</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.appTextCol}>
                <h3 className={styles.appTitle}>
                  Your personal space for growth and wellbeing
                </h3>
                <p className={styles.appSubtitle}>
                  Access your resources, track your reflections and stay connected with your clinician.
                </p>

                <div className={styles.appFeaturesRow}>
                  <div className={styles.appFeature}>
                    <div className={styles.appFeatureIcon}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>
                    </div>
                    <div>
                      <h5 className={styles.appFeatureTitle}>Your Resources</h5>
                      <p className={styles.appFeatureDesc}>All your audios, cards and guides in one place</p>
                    </div>
                  </div>

                  <div className={styles.appFeature}>
                    <div className={styles.appFeatureIcon}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                    </div>
                    <div>
                      <h5 className={styles.appFeatureTitle}>Track & Reflect</h5>
                      <p className={styles.appFeatureDesc}>Observe your patterns and progress over time</p>
                    </div>
                  </div>

                  <div className={styles.appFeature}>
                    <div className={styles.appFeatureIcon}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h5 className={styles.appFeatureTitle}>Stay Connected</h5>
                      <p className={styles.appFeatureDesc}>Messages and updates from your clinician</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
