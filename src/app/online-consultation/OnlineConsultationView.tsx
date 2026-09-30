"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./online-consultation.module.css";
import { useBookingModal } from "@/components/BookingModal/BookingModalContext";
import { Clinician } from "@/lib/clinicians";
import CliniciansCTA from "@/components/Clinicians/CliniciansCTA";

interface OnlineConsultationViewProps {
  clinicians: Clinician[];
}

const column1Items = [
  { label: "Anxiety & Stress", href: "/conditions/anxiety" },
  { label: "Fear & Panic", href: "/conditions/panic-attacks" },
  { label: "Low Mood & Emotional Difficulties", href: "/conditions/depression" },
];

const column2Items = [
  { label: "Recurring Thoughts & Behaviours", href: "/conditions/ocd" },
  { label: "Relationship Difficulties", href: "/conditions/relationship-issues" },
  { label: "Life Changes & Personal Challenges", href: "/conditions/stress-management" },
];

export default function OnlineConsultationView({ clinicians }: OnlineConsultationViewProps) {
  const { openModal } = useBookingModal();
  const [imgErrors, setImgErrors] = useState<Record<string | number, boolean>>({});

  const handleImgError = (id: string | number) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const displayedClinicians = (clinicians || []).slice(0, 4);

  return (
    <div className={styles.pageWrapper}>
      {/* 1. HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.bgWrap}>
          <img
            src="/assets/therapy_session.jpg"
            alt="Therapy session consultation"
            className={styles.bgImg}
          />
          <div className={styles.bgOverlay} />
        </div>

        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>SOFTMIND ONLINE</span>
            <h1 className={styles.heroTitle}>
              Online Psychological<br />
              Consultation
            </h1>
            <p className={styles.heroSubtitle}>
              A conversation is a place to begin understanding.
            </p>
            <p className={styles.heroDesc}>
              Professional psychological care, wherever you are.
            </p>
          </div>
        </div>
      </section>

      {/* 2. WHAT BRINGS YOU HERE SECTION */}
      <section className={styles.bringsSection}>
        <div className={styles.container}>
          <h2 className={styles.bringsTitle}>What brings you here?</h2>
          <div className={styles.concernsGrid}>
            <div className={styles.concernCol}>
              {column1Items.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => openModal("online")}
                  className={styles.concernItem}
                >
                  <span>{item.label}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              ))}
            </div>

            <div className={styles.concernCol}>
              {column2Items.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => openModal("online")}
                  className={styles.concernItem}
                >
                  <span>{item.label}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE SOFTMIND APPROACH SECTION */}
      <section className={styles.approachSection}>
        <div className={styles.container}>
          <h2 className={styles.approachTitle}>The Softmind Approach</h2>
          <h3 className={styles.approachSubtitle}>The person comes before the method.</h3>

          <div className={styles.approachContentGrid}>
            <p className={styles.approachDesc}>
              Similar difficulties can arise from very different experiences. We begin by
              understanding you, your experience and its context, and shape the therapeutic
              work accordingly.
            </p>

            <div className={styles.stepsRow}>
              <div className={styles.stepItem}>
                <div className={styles.stepIconCircle}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <span className={styles.stepLabel}>
                  Understand<br />your experience
                </span>
              </div>

              <div className={styles.stepArrow}>&rarr;</div>

              <div className={styles.stepItem}>
                <div className={styles.stepIconCircle}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <span className={styles.stepLabel}>
                  Work<br />together
                </span>
              </div>

              <div className={styles.stepArrow}>&rarr;</div>

              <div className={styles.stepItem}>
                <div className={styles.stepIconCircle}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
                    <path d="M12 10v12" />
                  </svg>
                </div>
                <span className={styles.stepLabel}>
                  Review<br />and adapt
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MEET OUR ONLINE PROFESSIONALS SECTION */}
      <section className={styles.cliniciansSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderRow}>
            <h2 className={styles.sectionTitle}>Meet Our Online Professionals</h2>
            <Link href="/clinicians" className={styles.viewAllLink}>
              View all online professionals &rarr;
            </Link>
          </div>

          <div className={styles.cliniciansGrid}>
            {displayedClinicians && displayedClinicians.length > 0 ? (
              displayedClinicians.map((clinician) => {
                const hasImg =
                  clinician.img &&
                  !imgErrors[clinician.id] &&
                  !clinician.img.includes("invalid-image") &&
                  !clinician.img.includes("broken-image");

                const focusAreas =
                  clinician.categories && clinician.categories.length > 0 && clinician.categories[0] !== "All"
                    ? clinician.categories.slice(0, 3).join(" · ")
                    : "Clinical Psychology · Psychotherapy · Human Behaviour";

                return (
                  <div key={clinician.id} className={styles.clinicianCard}>
                    <div className={styles.cardImgWrap}>
                      {hasImg ? (
                        <img
                          src={clinician.img}
                          alt={clinician.name}
                          className={styles.cardImg}
                          onError={() => handleImgError(clinician.id)}
                        />
                      ) : (
                        <div className={styles.cardBlankImg}>
                          <div className={styles.cardAvatarCircle}>
                            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                              <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className={styles.cardBody}>
                      <h3 className={styles.cardName}>{clinician.name}</h3>
                      <span className={styles.cardRole}>{clinician.role || "Mental Health Professional"}</span>
                      <p className={styles.cardFocus}>{focusAreas}</p>

                      <div className={styles.cardBtnRow}>
                        <Link
                          href={`/clinicians/${clinician.slug || clinician.id}`}
                          className={styles.cardProfileBtn}
                        >
                          View Profile
                        </Link>
                        <button
                          type="button"
                          onClick={() => openModal("online")}
                          className={styles.cardBookBtn}
                        >
                          Book Online
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div style={{ gridColumn: "1 / -1", padding: "32px 0", color: "#64748b" }}>
                <p>Clinicians are available for online consultation. Please click below to view all team members or book a session.</p>
                <Link href="/clinicians" className={styles.viewAllLink} style={{ marginTop: "12px" }}>
                  View All Clinicians &rarr;
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. ORIGINAL BOTTOM CTA SECTION */}
      <CliniciansCTA />
    </div>
  );
}
