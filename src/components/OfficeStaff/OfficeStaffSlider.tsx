"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../Practitioners/Practitioners.module.css";
import { StaffMember } from "./OfficeStaff";

const GAP = 24;

interface OfficeStaffSliderProps {
  staff: StaffMember[];
}

export default function OfficeStaffSlider({ staff }: OfficeStaffSliderProps) {
  const [items, setItems] = useState<StaffMember[]>(staff);
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(staff.length);
  const [cardWidth, setCardWidth] = useState(280);
  const [enableTransition, setEnableTransition] = useState(true);

  useEffect(() => {
    setItems(staff);
    setCurrentIndex(staff.length);
  }, [staff]);

  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const handleImgError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef<number>(0);

  // Triple the list to create a seamless infinite loop
  const loopedStaff = items.length > 0 ? [...items, ...items, ...items] : [];

  // Dynamic card dimension calculation based on container width
  const updateDimensions = useCallback(() => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;
    let count = 4;
    if (containerWidth < 540) {
      count = 1;
    } else if (containerWidth < 780) {
      count = 2;
    } else if (containerWidth < 1100) {
      count = 3;
    } else {
      count = 4;
    }

    if (count === 1) {
      setCardWidth(Math.round(containerWidth * 0.82));
    } else {
      setCardWidth(Math.round((containerWidth - (count - 1) * GAP) / count));
    }
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [updateDimensions]);

  // Navigate to Next
  const next = useCallback(() => {
    setEnableTransition(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  // Navigate to Previous
  const prev = useCallback(() => {
    setEnableTransition(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // Auto-slide every 4 seconds, pausing when hovered or touched
  useEffect(() => {
    if (isHovered || items.length <= 1) return;

    const interval = setInterval(() => {
      next();
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered, next, items.length]);

  // Seamless infinite loop boundary wrap
  const handleTransitionEnd = () => {
    if (items.length === 0) return;
    if (currentIndex >= items.length * 2) {
      setEnableTransition(false);
      setCurrentIndex(currentIndex - items.length);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      });
    } else if (currentIndex < items.length) {
      setEnableTransition(false);
      setCurrentIndex(currentIndex + items.length);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      });
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsHovered(true);
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current !== null) {
      touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
    }
  };

  const handleTouchEnd = () => {
    if (Math.abs(touchDeltaX.current) > 40) {
      if (touchDeltaX.current > 0) {
        prev();
      } else {
        next();
      }
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
    setTimeout(() => setIsHovered(false), 2000);
  };

  if (items.length === 0) {
    return null;
  }

  // When staff count is small (e.g. 1 to 3 items), center them cleanly rather than looping duplicates
  if (items.length <= 3) {
    return (
      <div className={styles.sliderRoot}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "stretch",
            gap: `${GAP}px`,
            flexWrap: "wrap",
            margin: "20px auto 40px",
          }}
        >
          {items.map((p) => {
            const hasValidImg = Boolean(p.img) && !imgErrors[p.id] && !p.img.includes("invalid-image");

            return (
              <div
                key={p.id}
                style={{
                  width: `${cardWidth}px`,
                  minWidth: "260px",
                  maxWidth: "320px",
                }}
              >
                <div className={styles.card} style={{ cursor: "default", height: "100%" }}>
                  <div className={styles.imgWrap}>
                    {hasValidImg ? (
                      <img
                        src={p.img}
                        alt={p.name}
                        className={styles.img}
                        onError={() => handleImgError(p.id)}
                        loading="lazy"
                      />
                    ) : (
                      <div className={styles.avatarWrap} aria-label={p.name}>
                        <div className={styles.avatarCircle}>
                          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className={styles.info}>
                    <h3 className={styles.name}>{p.name}</h3>
                    <span className={styles.role}>{p.role}</span>
                    {p.desc && <p className={styles.desc}>{p.desc}</p>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  const translateX = -(currentIndex * (cardWidth + GAP));
  const activeDotIndex = ((currentIndex % items.length) + items.length) % items.length;

  return (
    <div className={styles.sliderRoot}>
      {/* Carousel Viewport Container */}
      <div
        className={styles.carouselContainer}
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={styles.track}
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(${translateX}px)`,
            transition: enableTransition ? "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)" : "none",
            gap: `${GAP}px`,
          }}
        >
          {loopedStaff.map((p, idx) => {
            const hasValidImg = Boolean(p.img) && !imgErrors[p.id] && !p.img.includes("invalid-image");

            return (
              <div
                key={`${p.id}-${idx}`}
                className={styles.cardSlide}
                style={{
                  width: `${cardWidth}px`,
                  minWidth: `${cardWidth}px`,
                  maxWidth: `${cardWidth}px`,
                }}
              >
                <div className={styles.card} style={{ cursor: "default" }}>
                  <div className={styles.imgWrap}>
                    {hasValidImg ? (
                      <img
                        src={p.img}
                        alt={p.name}
                        className={styles.img}
                        onError={() => handleImgError(p.id)}
                        loading="lazy"
                      />
                    ) : (
                      <div className={styles.avatarWrap} aria-label={p.name}>
                        <div className={styles.avatarCircle}>
                          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className={styles.info}>
                    <h3 className={styles.name}>{p.name}</h3>
                    <span className={styles.role}>{p.role}</span>
                    {p.desc && <p className={styles.desc}>{p.desc}</p>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Row: Position Dots */}
      <div className={styles.bottomRow}>
        <div className={styles.dots} aria-hidden="true">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`${styles.dot} ${i === activeDotIndex ? styles.dotActive : ""}`}
              onClick={() => {
                setEnableTransition(true);
                setCurrentIndex(items.length + i);
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
