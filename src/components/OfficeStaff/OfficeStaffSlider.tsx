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

  const translateX = -(currentIndex * (cardWidth + GAP));
  const activeDotIndex = ((currentIndex % items.length) + items.length) % items.length;

  return (
    <div className={styles.sliderRoot}>
      {/* Controls row (Prev / Next Arrows) */}
      <div className={styles.controlsRow}>
        <div className={styles.navBtns}>
          <button
            type="button"
            onClick={prev}
            className={styles.navBtn}
            title="Previous staff"
            aria-label="Previous staff"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            className={styles.navBtn}
            title="Next staff"
            aria-label="Next staff"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>

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
          {loopedStaff.map((p, idx) => (
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
                  <Image
                    src={p.img || "/assets/practitioner_1.jpg"}
                    alt={p.name}
                    fill
                    className={styles.img}
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 25vw"
                  />
                </div>
                <div className={styles.info}>
                  <h3 className={styles.name}>{p.name}</h3>
                  <span className={styles.role}>{p.role}</span>
                  <p className={styles.desc}>{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
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
