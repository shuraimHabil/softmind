"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Practitioners.module.css";
import { Clinician, toTitleCase } from "@/lib/clinicians";

const GAP = 24;

interface PractitionersSliderProps {
  clinicians: Clinician[];
}

function shuffleArray(arr: Clinician[]): Clinician[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function PractitionersSlider({ clinicians }: PractitionersSliderProps) {
  const [items, setItems] = useState<Clinician[]>(clinicians);
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(clinicians.length);
  const [cardWidth, setCardWidth] = useState(280);
  const [enableTransition, setEnableTransition] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef<number>(0);

  // Triple the list to create a seamless infinite loop
  const loopedClinicians = items.length > 0 ? [...items, ...items, ...items] : [];

  // Shuffle on client mount to ensure dynamic order without SSR hydration mismatch
  useEffect(() => {
    if (clinicians.length > 1) {
      const shuffled = shuffleArray(clinicians);
      setItems(shuffled);
      setCurrentIndex(shuffled.length);
    }
  }, [clinicians]);

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
          {loopedClinicians.map((p, idx) => (
            <div
              key={`${p.id || p.slug || idx}-${idx}`}
              className={styles.cardSlide}
              style={{
                width: `${cardWidth}px`,
                minWidth: `${cardWidth}px`,
                maxWidth: `${cardWidth}px`,
              }}
            >
              <Link href={`/clinicians/${p.slug}`} className={styles.card}>
                <div className={styles.imgWrap}>
                  <Image
                    src={p.img || "/assets/practitioner_1.jpg"}
                    alt={toTitleCase(p.name)}
                    fill
                    className={styles.img}
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 25vw"
                  />
                </div>
                <div className={styles.info}>
                  <h3 className={styles.name}>{toTitleCase(p.name)}</h3>
                  <span className={styles.role}>{p.role}</span>
                  <p className={styles.desc}>{p.desc}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row: Position Dots + View All Button */}
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

        <Link href="/clinicians" className={styles.viewAllBtn}>
          View All Clinicians &rarr;
        </Link>
      </div>
    </div>
  );
}
