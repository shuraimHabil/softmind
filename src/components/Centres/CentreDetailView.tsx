"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./CentreDetailView.module.css";
import { Centre } from "@/lib/centres";
import { Clinician } from "@/lib/clinicians";
import { useBookingModal } from "@/components/BookingModal/BookingModalContext";
import CentreStaticCareServices from "./CentreStaticCareServices";

interface CentreDetailViewProps {
  centre: Centre;
  allCentres: Centre[];
  clinicians?: Clinician[];
}

export default function CentreDetailView({ centre, allCentres = [], clinicians = [] }: CentreDetailViewProps) {
  const { openModal } = useBookingModal();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  if (!centre) {
    return null;
  }

  // Get clinicians for this centre using real API clinicians if provided, or matching fetched clinicians
  const centreClinicians = Array.isArray(centre.clinicians)
    ? centre.clinicians
    : (centre.clinicianIds && centre.clinicianIds.length > 0
        ? (clinicians || []).filter((c) =>
            centre.clinicianIds.includes(c.id as any) || centre.clinicianIds.includes(c.slug as any)
          )
        : []);

  // Other centres for the bottom section
  const otherCentres = (allCentres || []).filter((c) => c && c.slug !== centre.slug);

  const galleryImages = [
    {
      src: centre.gallery?.main || centre.thumbnail || "/assets/panampilly-nagar.webp",
      alt: `${centre.name} - Main Lounge`,
      title: "Main Lounge",
    },
    {
      src: centre.gallery?.sub1 || "/assets/therapy_session.jpg",
      alt: `${centre.name} - Therapy Room`,
      title: "Therapy Room",
    },
    {
      src: centre.gallery?.sub2 || "/assets/hero_therapy.jpg",
      alt: `${centre.name} - Consultation Space`,
      title: "Consultation Space",
    },
  ];

  // Handle keyboard events (Escape, Left, Right) when lightbox is open
  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImageIndex(null);
      } else if (e.key === "ArrowLeft") {
        setSelectedImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryImages.length - 1));
      } else if (e.key === "ArrowRight") {
        setSelectedImageIndex((prev) => (prev !== null && prev < galleryImages.length - 1 ? prev + 1 : 0));
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImageIndex, galleryImages.length]);

  return (
    <div className={styles.wrapper}>
      {/* ── 1. Centre Overview & Gallery ── */}
      <section className={styles.overviewSection}>
        <div className={styles.container}>
          <div className={styles.overviewGrid}>
            {/* Left Info Column */}
            <div className={styles.infoCol}>
              <h2 className={styles.centreTitle}>{centre.shortName || centre.name}</h2>
              <span className={styles.centreCity}>{centre.city}</span>
              <p className={styles.centreDesc}>{centre.tagline}</p>
              <div className={styles.ctaRow}>
                <button
                  type="button"
                  onClick={openModal}
                  className={styles.bookBtn}
                >
                  Book Now →
                </button>
              </div>
            </div>

            {/* Right Gallery Collage */}
            <div className={styles.galleryWrap}>
              <div className={styles.galleryGrid}>
                <div
                  className={styles.galleryMain}
                  onClick={() => setSelectedImageIndex(0)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setSelectedImageIndex(0)}
                  aria-label={`View ${galleryImages[0].title} in full screen`}
                >
                  <Image
                    src={galleryImages[0].src}
                    alt={galleryImages[0].alt}
                    fill
                    className={styles.galleryImg}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className={styles.galleryExpandBadge}>
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                    <span>Click to view</span>
                  </div>
                </div>

                <div className={styles.gallerySubCol}>
                  <div
                    className={styles.gallerySub}
                    onClick={() => setSelectedImageIndex(1)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && setSelectedImageIndex(1)}
                    aria-label={`View ${galleryImages[1].title} in full screen`}
                  >
                    <Image
                      src={galleryImages[1].src}
                      alt={galleryImages[1].alt}
                      fill
                      className={styles.galleryImg}
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className={styles.galleryExpandBadgeMini}>
                      <svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                      </svg>
                    </div>
                  </div>

                  <div
                    className={styles.gallerySub}
                    onClick={() => setSelectedImageIndex(2)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && setSelectedImageIndex(2)}
                    aria-label={`View ${galleryImages[2].title} in full screen`}
                  >
                    <Image
                      src={galleryImages[2].src}
                      alt={galleryImages[2].alt}
                      fill
                      className={styles.galleryImg}
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className={styles.galleryExpandBadgeMini}>
                      <svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {centre.googleReviewUrl && (
                <div className={styles.galleryActionRow}>
                  <a
                    href={centre.googleReviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.viewReviewBtn}
                  >
                    View Reviews ★
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Image Lightbox Popup Modal ── */}
      {selectedImageIndex !== null && (
        <div
          className={styles.lightboxOverlay}
          onClick={() => setSelectedImageIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery popup"
        >
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className={styles.lightboxHeader}>
              <div className={styles.lightboxTitleWrap}>
                <span className={styles.lightboxCounter}>
                  {selectedImageIndex + 1} / {galleryImages.length}
                </span>
                <span className={styles.lightboxTitle}>
                  {galleryImages[selectedImageIndex].title} · {centre.name}
                </span>
              </div>
              <button
                type="button"
                className={styles.lightboxCloseBtn}
                onClick={() => setSelectedImageIndex(null)}
                aria-label="Close image popup"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Main Image with Navigation Arrows */}
            <div className={styles.lightboxMainArea}>
              <button
                type="button"
                className={`${styles.lightboxArrow} ${styles.lightboxArrowPrev}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryImages.length - 1));
                }}
                aria-label="Previous image"
              >
                <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              <div className={styles.lightboxImageWrapper}>
                <Image
                  src={galleryImages[selectedImageIndex].src}
                  alt={galleryImages[selectedImageIndex].alt}
                  fill
                  className={styles.lightboxImage}
                  sizes="(max-width: 1024px) 95vw, 85vw"
                  priority
                />
              </div>

              <button
                type="button"
                className={`${styles.lightboxArrow} ${styles.lightboxArrowNext}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImageIndex((prev) => (prev !== null && prev < galleryImages.length - 1 ? prev + 1 : 0));
                }}
                aria-label="Next image"
              >
                <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>

            {/* Thumbnails row at bottom */}
            <div className={styles.lightboxThumbsRow}>
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`${styles.lightboxThumbBtn} ${idx === selectedImageIndex ? styles.lightboxThumbActive : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageIndex(idx);
                  }}
                  aria-label={`View ${img.title}`}
                >
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className={styles.lightboxThumbImg}
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
 
      {/* ── Static 'Our Care' Section (Above Facilities for all centres) ── */}
      <CentreStaticCareServices />

      {/* ── 2. Facilities & Clinicians at this Centre ── */}
      {((centre.facilities && centre.facilities.length > 0) || centreClinicians.length > 0) && (
        <section className={styles.middleSection}>
          <div className={styles.container}>
            <div className={styles.twoColGrid}>
              {/* Facilities Column */}
              {centre.facilities && centre.facilities.length > 0 && (
                <div className={styles.facilitiesCol}>
                  <h3 className={styles.sectionHeading}>Facilities</h3>
                  <ul className={styles.facilitiesList}>
                    {centre.facilities.map((facility, idx) => (
                      <li key={idx} className={styles.facilityItem}>
                        <span className={styles.checkIcon}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className={styles.facilityText}>{facility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Clinicians Column */}
              {centreClinicians.length > 0 && (
                <div className={styles.cliniciansCol}>
                  <h3 className={styles.sectionHeading}>Clinicians At This Centre</h3>
                  <div className={styles.cliniciansGrid}>
                    {centreClinicians.map((clinician) => (
                      <Link
                        key={clinician.id}
                        href={`/clinicians/${clinician.id}`}
                        className={styles.clinicianCard}
                      >
                        <div className={styles.avatarWrap}>
                          <img
                            src={clinician.img || "/broken-image.jpg"}
                            alt={clinician.name}
                            className={styles.avatarImg}
                          />
                        </div>
                        <div className={styles.clinicianInfo}>
                          <h4 className={styles.clinicianName}>{clinician.name}</h4>
                          <p className={styles.clinicianRole}>{clinician.role}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── 3. Find Us / Map Section ── */}
      <section className={styles.findUsSection}>
        <div className={styles.container}>
          <div className={styles.findUsCard}>
            {/* Left Info */}
            <div className={styles.findUsInfo}>
              <h3 className={styles.sectionHeading}>Find us</h3>
              <p className={styles.fullAddress}>{centre.fullAddress}</p>
              
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>Phone:</span>
                  <a href={`tel:${centre.phone.replace(/[^0-9+]/g, "")}`} className={styles.contactLink}>
                    {centre.phone}
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>Hours:</span>
                  <span className={styles.contactValue}>{centre.hours}</span>
                </div>
              </div>

              <div className={styles.findUsAction}>
                <a
                  href={centre.googleMapUrl || `https://www.google.com/maps/search/?api=1&query=Softmind+${encodeURIComponent(centre.name)}+${encodeURIComponent(centre.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.directionBtn}
                >
                  Get Direction →
                </a>
                {centre.googleReviewUrl && (
                  <a
                    href={centre.googleReviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.reviewBtn}
                  >
                    Leave a Review ★
                  </a>
                )}
              </div>
            </div>

            {/* Right Map Visual */}
            <div className={styles.mapWrap}>
              {centre.googleMapUrl && (
                <a
                  href={centre.googleMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapOverlay}
                  aria-label={`View ${centre.name} on Google Maps`}
                />
              )}
              <iframe
                title={`Map of ${centre.name}`}
                src={`https://maps.google.com/maps?q=${centre.mapQuery || encodeURIComponent(centre.name + " " + (centre.fullAddress || centre.city))}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                className={styles.mapIframe}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Other Locations Cards (Bottom Section) ── */}
      {otherCentres.length > 0 && (
        <section className={styles.otherCentresSection}>
          <div className={styles.container}>
            <div className={styles.otherCentresHeader}>
              <h3 className={styles.sectionHeading}>Explore Other Locations</h3>
              <p className={styles.otherCentresSub}>
                Discover our other Mental health care centres across Kerala.
              </p>
            </div>

            <div className={styles.otherGrid}>
              {otherCentres.map((c) => (
                <Link
                  key={c.id}
                  href={`/centres/${c.slug}`}
                  className={styles.otherCard}
                >
                  <div className={styles.otherImgWrap}>
                    <Image
                      src={c.thumbnail || "/invalid-image.jpg"}
                      alt={c.name}
                      fill
                      className={styles.otherImg}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className={styles.otherInfo}>
                    <h4 className={styles.otherName}>{c.name}</h4>
                    <p className={styles.otherAddress}>{c.address}</p>
                    <p className={styles.otherPhone}>{c.phone}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
