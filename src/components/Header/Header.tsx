"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";
import { useBookingModal } from "@/components/BookingModal/BookingModalContext";

type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  {
    label: "Explore Softmind",
    href: "/",
  },
  {
    label: "Our Care",
    href: "/our-care",
  },
  {
    label: "Articles",
    href: "/articles",
  },
  {
    label: "Clinicians",
    href: "/clinicians",
  },
  {
    label: "Knowledge Centre",
    href: "#",
  },
  {
    label: "Centres",
    href: "#",
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { openModal } = useBookingModal();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.sticky : ""}`}>
      <div className={`${styles.topBar} ${isScrolled ? styles.topBarHidden : ""}`}>
        <div className={styles.topBarLeft}>
          <span className={styles.followUs}>Follow Us:</span>
          <a href="#" className={styles.socialIcon}><svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
          <a href="#" className={styles.socialIcon}><svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></a>
          <a href="#" className={styles.socialIcon}><svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
          <a href="#" className={styles.socialIcon}><svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
        </div>
        <div className={styles.topBarRight}>
          <a href="tel:+917736484813" className={styles.topBarLink}>
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            +917736484813
          </a>
          <span className={styles.topBarDivider}>|</span>
          <a href="mailto:info@softmindindia.com" className={styles.topBarLink}>
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            info@softmindindia.com
          </a>
        </div>
      </div>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo} id="siteLogo">
          {!logoError ? (
            <Image
              src="/assets/logo.png"
              alt="Softmind"
              width={140}
              height={44}
              className={styles.logoImg}
              onError={() => setLogoError(true)}
              priority
            />
          ) : (
            <span className={styles.logoFallback}>
              <svg viewBox="0 0 40 40" className={styles.logoSvg}>
                <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <path d="M20 6 C24 14, 20 22, 20 34" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M20 12 C28 16, 28 24, 20 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M20 14 C12 18, 12 24, 20 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className={styles.logoText}>soft<span>mind</span></span>
            </span>
          )}
        </Link>

        {/* Desktop Nav */}
        <nav className={`${styles.nav} ${mobileOpen ? styles.navOpen : ""}`} id="navMenu">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className={styles.navItem}
              onMouseEnter={() => handleMouseEnter(link.label)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={link.href}
                className={`${styles.navLink} ${openDropdown === link.label ? styles.navLinkActive : ""}`}
                id={`nav-${link.label.replace(/\s+/g, "-").toLowerCase()}`}
              >
                {link.label}
                {link.dropdown && (
                  <svg
                    className={`${styles.chevron} ${openDropdown === link.label ? styles.chevronOpen : ""}`}
                    viewBox="0 0 12 8"
                    fill="none"
                  >
                    <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}
              </Link>

              {/* Dropdown */}
              {link.dropdown && (
                <div
                  className={`${styles.dropdown} ${openDropdown === link.label ? styles.dropdownOpen : ""}`}
                  onMouseEnter={() => handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={styles.dropdownItem}
                      id={`dd-${item.label.replace(/\s+/g, "-").toLowerCase()}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className={styles.actions}>

          <button
            onClick={openModal}
            className={styles.btnAppointment}
            id="btn-book-session"
          >
            Book a Session
            <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Mobile toggle */}
          <button
            className={styles.mobileToggle}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
              {mobileOpen ? (
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
