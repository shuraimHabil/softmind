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
    label: "Our Care",
    href: "/our-care",
  },
  {
    label: "Conditions",
    href: "/conditions",
  },
  {
    label: "Clinicians",
    href: "/clinicians",
  },
  {
    label: "Online Consultation",
    href: "/online-consultation",
  },
  {
    label: "Centres",
    href: "/centres",
  },
  {
    label: "Articles",
    href: "/articles",
  },
  {
    label: "Knowledge Centre",
    href: "/knowledge-centre",
  },
  {
    label: "About",
    href: "/about",
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTopBarClosed, setIsTopBarClosed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { openModal } = useBookingModal();

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty("--header-height", `${height}px`);
      }
    };

    updateHeaderHeight();

    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateHeaderHeight);

    let animationFrameId: number;
    const observer = new ResizeObserver(() => {
      animationFrameId = requestAnimationFrame(updateHeaderHeight);
    });

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateHeaderHeight);
      observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isTopBarClosed, isScrolled]);

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  return (
    <header ref={headerRef} className={`${styles.header} ${isScrolled ? styles.sticky : ""}`}>
      <div className={`${styles.topBar} ${isScrolled || isTopBarClosed ? styles.topBarHidden : ""}`}>
        <div className={styles.topBarLeft}>
          <span className={styles.followUs}>Follow us:</span>
          <a href="#" className={styles.socialIcon}><svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
          <a href="#" className={styles.socialIcon}><svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></a>
          <a href="#" className={styles.socialIcon}><svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
          <a href="#" className={styles.socialIcon}><svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
        </div>
        <div className={styles.topBarRight}>
          <a href="tel:+917736484813" className={styles.topBarLink}>
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            +91 7736 484 813
          </a>
          <span className={styles.topBarDivider}>|</span>
          <a href="mailto:info@softmindindia.com" className={styles.topBarLink}>
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            info@softmindindia.com
          </a>
          <button
            type="button"
            className={styles.topBarCloseBtn}
            onClick={() => setIsTopBarClosed(true)}
            aria-label="Close top bar"
            title="Close"
          >
            <svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
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
            Book Now &rarr;
          </button>
          <a
            href="https://wa.me/917736484813"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.headerWhatsAppBtn}
            aria-label="Chat on WhatsApp"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.763.459 3.483 1.332 5.001l-1.417 5.176 5.297-1.389c1.463.798 3.111 1.218 4.774 1.218h.004c5.506 0 9.989-4.478 9.99-9.984 0-2.669-1.038-5.176-2.925-7.062a9.925 9.925 0 0 0-7.065-2.944zm5.71 14.162c-.237.667-1.383 1.272-1.905 1.342-.486.065-1.121.093-1.802-.125-.415-.133-.948-.308-1.636-.606-2.883-1.248-4.757-4.177-4.901-4.37-.142-.193-1.168-1.558-1.168-2.97 0-1.412.735-2.107 1.002-2.392.237-.253.52-.317.694-.317.174 0 .348.002.497.009.157.007.368-.06.577.441.213.511.724 1.77.787 1.899.063.129.105.28.021.448-.084.168-.126.272-.252.42-.126.148-.266.33-.38.442-.126.126-.258.263-.111.515.147.253.652 1.077 1.401 1.745.962.859 1.775 1.126 2.028 1.252.253.126.401.105.548-.063.147-.168.631-.737.8-.99.168-.253.337-.21.569-.126.232.084 1.474.695 1.727.821.253.126.421.189.484.295.063.105.063.61-.174 1.277z"/>
            </svg>
          </a>

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
