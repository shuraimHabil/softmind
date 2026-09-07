"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import styles from "./Testimonials.module.css";

const stories = [
  {
    id: 1,
    author: "Meera James",
    role: "Teacher",
    quote:
      "“The therapy was highly structural, clear, thoughtful, and deeply insightful. I finally understood my patterns.”",
  },
  {
    id: 2,
    author: "Dr. Arun K.",
    role: "Medical Practitioner",
    quote:
      "“An exceptionally thoughtful, evidence-led therapeutic experience. It gave me practical tools grounded in modern behavioral science.”",
  },
  {
    id: 3,
    author: "Sarah Thomas",
    role: "Product Designer",
    quote:
      "“The structured sessions helped me navigate intense burnout and establish healthy emotional boundaries that transformed my life.”",
  },
  {
    id: 4,
    author: "Naveen Raj",
    role: "Software Architect",
    quote:
      "“Having a clinician who understood neurodiversity and high-stress environments made a world of difference in my daily life.”",
  },
  {
    id: 5,
    author: "Priya Menon",
    role: "Entrepreneur",
    quote:
      "“The evidence-based CBT exercises helped me regain confidence and clarity during a pivotal career transition.”",
  },
];

// Tripled array for smooth, infinite bidirectional horizontal scrolling
const loopedStories = [...stories, ...stories, ...stories];
const GAP = 24;

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  // Start at index stories.length + 1 so Dr. Arun K. is the initial highlighted center card
  const [currentIndex, setCurrentIndex] = useState(stories.length + 1);
  const [isHovered, setIsHovered] = useState(false);
  const [cardWidth, setCardWidth] = useState(380);
  const [enableTransition, setEnableTransition] = useState(true);

  // Measure container and calculate dynamic card width
  const updateDimensions = useCallback(() => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;
    if (containerWidth < 640) {
      // Mobile: single card visible
      setCardWidth(containerWidth - 32);
    } else if (containerWidth < 960) {
      // Tablet: 1.5 cards visible
      setCardWidth(containerWidth * 0.6);
    } else {
      // Desktop: exactly 3 cards side-by-side with GAP
      setCardWidth((containerWidth - 2 * GAP) / 3);
    }
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [updateDimensions]);

  // Navigate to Next card
  const next = useCallback(() => {
    setEnableTransition(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  // Navigate to Previous card
  const prev = useCallback(() => {
    setEnableTransition(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // Auto-scroll every 3 seconds; stops completely on hover
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      next();
    }, 3000); // 3 seconds hold on the highlighted card

    return () => clearInterval(interval);
  }, [isHovered, next]);

  // Infinite loop boundary reset without visual glitch
  const handleTransitionEnd = () => {
    if (currentIndex >= stories.length * 2) {
      setEnableTransition(false);
      setCurrentIndex(currentIndex - stories.length);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      });
    } else if (currentIndex < stories.length) {
      setEnableTransition(false);
      setCurrentIndex(currentIndex + stories.length);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      });
    }
  };

  // Calculate track translateX to keep currentIndex exactly in the center
  const containerWidth = containerRef.current?.offsetWidth || 1192;
  const cardStep = cardWidth + GAP;
  const translateX = containerWidth / 2 - (currentIndex * cardStep + cardWidth / 2);

  return (
    <section className={styles.section} id="testimonials-section">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>In Their Own Words</h2>
          <p className={styles.subtitle}>Stories Of Transformation</p>
        </div>

        {/* Carousel Container (detects hover to pause/resume) */}
        <div
          className={styles.carouselContainer}
          ref={containerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          {/* Horizontally sliding track */}
          <div
            className={`${styles.track} ${!enableTransition ? styles.noTransition : ""}`}
            style={{
              transform: `translate3d(${translateX}px, 0, 0)`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {loopedStories.map((item, idx) => {
              const isCenter = idx === currentIndex;

              return (
                <div
                  key={`${item.id}-${idx}`}
                  className={`${styles.card} ${
                    isCenter ? styles.centerCard : styles.sideCard
                  }`}
                  style={{ width: `${cardWidth}px` }}
                  onClick={() => {
                    if (!isCenter) {
                      setEnableTransition(true);
                      setCurrentIndex(idx);
                    }
                  }}
                >
                  {/* Author & Role */}
                  <div className={styles.cardHeader}>
                    <p className={styles.authorInfo}>
                      {item.author} <span className={styles.dash}>-</span> {item.role}
                    </p>
                    <div className={styles.dividerLine} />
                  </div>

                  {/* Quote */}
                  <p className={styles.quoteText}>{item.quote}</p>

                  {/* Left/Right arrow navigation buttons on the highlighted center card */}
                  {isCenter && (
                    <>
                      <button
                        className={`${styles.navBtn} ${styles.prevBtn}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          prev();
                        }}
                        aria-label="Previous story"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                      </button>
                      <button
                        className={`${styles.navBtn} ${styles.nextBtn}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          next();
                        }}
                        aria-label="Next story"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </button>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
