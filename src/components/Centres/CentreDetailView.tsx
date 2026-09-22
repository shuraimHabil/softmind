"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./CentreDetailView.module.css";
import { Centre } from "@/lib/centres";
import { Clinician } from "@/lib/clinicians";
import { useBookingModal } from "@/components/BookingModal/BookingModalContext";

interface CentreDetailViewProps {
  centre: Centre;
  allCentres: Centre[];
  clinicians?: Clinician[];
}

export default function CentreDetailView({ centre, allCentres = [], clinicians = [] }: CentreDetailViewProps) {
  const { openModal } = useBookingModal();

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

  const mainGalleryImg = centre.gallery?.main || centre.thumbnail || "/assets/panampilly-nagar.webp";
  const sub1GalleryImg = centre.gallery?.sub1 || "/assets/therapy_session.jpg";
  const sub2GalleryImg = centre.gallery?.sub2 || "/assets/hero_therapy.jpg";

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
            <div className={styles.galleryGrid}>
              <div className={styles.galleryMain}>
                <Image
                  src={mainGalleryImg}
                  alt={`${centre.name} Main Lounge`}
                  fill
                  className={styles.galleryImg}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className={styles.gallerySubCol}>
                <div className={styles.gallerySub}>
                  <Image
                    src={sub1GalleryImg}
                    alt={`${centre.name} Therapy Room`}
                    fill
                    className={styles.galleryImg}
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className={styles.gallerySub}>
                  <Image
                    src={sub2GalleryImg}
                    alt={`${centre.name} Consultation Space`}
                    fill
                    className={styles.galleryImg}
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <h3 className={styles.sectionHeading}>Find Us</h3>
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
              </div>
            </div>

            {/* Right Map Visual */}
            <div className={styles.mapWrap}>
              <iframe
                title={`Map of ${centre.name}`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(centre.name + " " + centre.fullAddress)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
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
                Discover our other wellness centres across Kerala.
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
