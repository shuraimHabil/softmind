"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./CentreDetailView.module.css";
import { Centre } from "@/lib/centres";
import { clinicians } from "@/lib/clinicians";
import { useBookingModal } from "@/components/BookingModal/BookingModalContext";

interface CentreDetailViewProps {
  centre: Centre;
  allCentres: Centre[];
}

export default function CentreDetailView({ centre, allCentres }: CentreDetailViewProps) {
  const { openModal } = useBookingModal();

  // Get clinicians for this centre
  const centreClinicians = clinicians.filter((c) =>
    centre.clinicianIds.includes(c.id)
  );

  // Other centres for the bottom section
  const otherCentres = allCentres.filter((c) => c.slug !== centre.slug);

  return (
    <div className={styles.wrapper}>
      {/* ── 1. Centre Overview & Gallery ── */}
      <section className={styles.overviewSection}>
        <div className={styles.container}>
          <div className={styles.overviewGrid}>
            {/* Left Info Column */}
            <div className={styles.infoCol}>
              <h2 className={styles.centreTitle}>{centre.shortName}</h2>
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
                  src={centre.gallery.main}
                  alt={`${centre.name} Main Lounge`}
                  fill
                  className={styles.galleryImg}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className={styles.gallerySubCol}>
                <div className={styles.gallerySub}>
                  <Image
                    src={centre.gallery.sub1}
                    alt={`${centre.name} Therapy Room`}
                    fill
                    className={styles.galleryImg}
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className={styles.gallerySub}>
                  <Image
                    src={centre.gallery.sub2}
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
      <section className={styles.middleSection}>
        <div className={styles.container}>
          <div className={styles.twoColGrid}>
            {/* Facilities Column */}
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

            {/* Clinicians Column */}
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
                      <Image
                        src={clinician.img}
                        alt={clinician.name}
                        fill
                        className={styles.avatarImg}
                        sizes="60px"
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
          </div>
        </div>
      </section>

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
                  href={`https://www.google.com/maps/search/?api=1&query=Softmind+${encodeURIComponent(centre.name)}+${encodeURIComponent(centre.address)}`}
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
                    src={c.thumbnail}
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
                  <div className={styles.otherDivider} />
                  <span className={styles.otherLink}>
                    View Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
