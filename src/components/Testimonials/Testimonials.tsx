"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import styles from "./Testimonials.module.css";

const GAP = 24;

interface Story {
  id: number;
  author: string;
  role: string;
  quote: string;
}

export default function Testimonials() {
  const [stories, setStories] = useState<Story[]>([]);
  const [loopedStories, setLoopedStories] = useState<Story[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('/api/testimonials')
      .then(res => res.json())
      .then(data => {
        if (data?.message?.success && Array.isArray(data.message.data) && data.message.data.length > 0) {
          const apiStories = data.message.data.map((item: any, idx: number) => ({
             id: idx + 1,
             author: item.patient_name || "Anonymous",
             role: item.occupation || "Patient",
             quote: item.review ? `“${item.review}”` : "“A great experience.”"
          }));
          setStories(apiStories);
          setLoopedStories([...apiStories, ...apiStories, ...apiStories]);
          const startIndex = apiStories.length > 1 ? apiStories.length + 1 : apiStories.length;
          setCurrentIndex(startIndex);
        }
      })
      .catch(err => console.error("Failed to fetch testimonials", err))
      .finally(() => setIsLoading(false));
  }, []);
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

  if (isLoading) {
    return (
      <section className={styles.section} id="testimonials-section">
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.title}>In Their Own Words</h2>
            <p className={styles.subtitle}>Loading stories...</p>
          </div>
        </div>
      </section>
    );
  }

  if (stories.length === 0) {
    return null;
  }

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
