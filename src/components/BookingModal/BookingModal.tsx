"use client";

import { useEffect, useRef, useState } from "react";
import { useBookingModal } from "./BookingModalContext";
import styles from "./BookingModal.module.css";



const genderOptions = [
  "Female",
  "Male",
  "Other",
];

type Tab = "direct" | "online";

interface CentreOption {
  id: string;
  name: string;
}

/** Convert YYYY-MM-DD → DD-MM-YYYY for the API */
function formatDateForApi(isoDate: string): string {
  if (!isoDate) return "";
  const [y, m, d] = isoDate.split("-");
  return `${d}-${m}-${y}`;
}

export default function BookingModal() {
  const { isOpen, closeModal, activeTab } = useBookingModal();
  const [tab, setTab] = useState<Tab>(activeTab || "direct");
  const [name, setName] = useState("");
  const [contactValue, setContactValue] = useState("");
  const [useEmail, setUseEmail] = useState(false);
  const [centre, setCentre] = useState("");
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Centres fetched from API
  const [centreOptions, setCentreOptions] = useState<CentreOption[]>([]);
  const [centresLoading, setCentresLoading] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);

  // Fetch centres once on mount via internal API route (avoids CORS)
  useEffect(() => {
    setCentresLoading(true);
    fetch("/api/centres")
      .then((r) => r.json())
      .then((data: any[]) => {
        if (Array.isArray(data)) {
          setCentreOptions(
            data.map((c) => ({
              id: c.id || c.slug,
              name: c.name,
            }))
          );
        }
      })
      .catch(() => {
        // fallback — dropdown stays empty, user can proceed
      })
      .finally(() => setCentresLoading(false));
  }, []);

  // Lock body scroll and sync tab when open
  useEffect(() => {
    if (isOpen) {
      setTab(activeTab || "direct");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setTimeout(() => {
        setSubmitted(false);
        setSubmitError("");
        setName("");
        setContactValue("");
        setUseEmail(false);
        setCentre("");
        setGender("");
        setDate("");
        setMessage("");
      }, 300);
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen, activeTab]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, closeModal]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) closeModal();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: name,
          phone: contactValue,
          preferred_date: formatDateForApi(date),
          ...(centre && tab === "direct" ? { preferred_centre: centre } : {}),
          ...(gender ? { gender } : {}),
          ...(message ? { notes: message } : {}),
          appointment_type: tab === "direct" ? "Direct Visit" : "Online Appointment",
        }),
      });

      if (!res.ok) throw new Error(`Server error ${res.status}`);
      setSubmitted(true);
    } catch (err) {
      console.error("Booking submission failed:", err);
      setSubmitError("Something went wrong. Please call us or try again.");
    } finally {
      setSubmitting(false);
    }
  };


  // Today's date for min attribute
  const todayStr = new Date().toISOString().split("T")[0];

  return (
    <div
      ref={overlayRef}
      className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ""}`}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label="Book a session"
      id="booking-modal-overlay"
    >
      <div className={`${styles.modal} ${isOpen ? styles.modalVisible : ""}`}>
        {/* Close button */}
        <button
          className={styles.closeBtn}
          onClick={closeModal}
          aria-label="Close booking modal"
          id="booking-modal-close"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Decorative background blobs */}
        <div className={styles.blob1} aria-hidden="true" />
        <div className={styles.blob2} aria-hidden="true" />

        {submitted ? (
          /* ── Success State ── */
          <div className={styles.success} id="booking-success">
            <div className={styles.successIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h2 className={styles.successTitle}>We&apos;ve received your request!</h2>
            <p className={styles.successText}>
              Our team will reach out within 24 hours to confirm your{" "}
              {tab === "direct" ? "in-person" : "online"} appointment.
            </p>
            <button className={styles.successBtn} onClick={closeModal} id="booking-success-close">
              Done
            </button>
          </div>
        ) : (
          <>
            {/* ── Header ── */}
            <div className={styles.header}>
              <h2 className={styles.title}>Start a Conversation</h2>
              <p className={styles.subtitle}>
                Not sure where to begin? Share a few details and our team will help you find an appropriate next step.
              </p>
            </div>

            {/* ── Tab Toggle ── */}
            <div className={styles.tabs} role="tablist">
              <button
                role="tab"
                aria-selected={tab === "direct"}
                className={`${styles.tab} ${tab === "direct" ? styles.tabActive : ""}`}
                onClick={() => setTab("direct")}
                id="tab-direct-visit"
              >
                Direct Visit
              </button>
              <button
                role="tab"
                aria-selected={tab === "online"}
                className={`${styles.tab} ${tab === "online" ? styles.tabActive : ""}`}
                onClick={() => setTab("online")}
                id="tab-online-appointment"
              >
                Online Appointment
              </button>
            </div>

            {/* ── Form ── */}
            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <div className={styles.row}>
                {/* Name */}
                <div className={styles.field}>
                  <input
                    id="booking-name"
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className={styles.input}
                    autoComplete="name"
                    required
                  />
                </div>

                {/* Phone / Email */}
                <div className={styles.field}>
                  <input
                    id="booking-contact"
                    type={useEmail ? "email" : "tel"}
                    placeholder={useEmail ? "Email Address" : "Phone / WhatsApp"}
                    value={contactValue}
                    onChange={e => setContactValue(e.target.value)}
                    className={styles.input}
                    autoComplete={useEmail ? "email" : "tel"}
                    required
                  />
                  <button
                    type="button"
                    className={styles.switchContact}
                    onClick={() => { setUseEmail(!useEmail); setContactValue(""); }}
                    id="booking-switch-contact"
                  >
                    {useEmail ? "Use Phone" : "Use Email"}
                  </button>
                </div>
              </div>

              <div className={styles.row}>
                {/* Centre (only for direct visit) */}
                {tab === "direct" && (
                  <div className={styles.field}>
                    <select
                      id="booking-centre"
                      value={centre}
                      onChange={e => setCentre(e.target.value)}
                      className={`${styles.input} ${styles.select}`}
                      disabled={centresLoading}
                    >
                      <option value="">
                        {centresLoading ? "Loading centres…" : "Preferred Centre"}
                      </option>
                      {centreOptions.map(c => (
                        <option key={c.id} value={c.name}>{c.name}</option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Gender */}
                <div className={styles.field}>
                  <select
                    id="booking-gender"
                    value={gender}
                    onChange={e => setGender(e.target.value)}
                    className={`${styles.input} ${styles.select}`}
                  >
                    <option value="">Gender</option>
                    {genderOptions.map(g => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>

                {/* Date (for online appointment, paired with Gender) */}
                {tab === "online" && (
                  <div className={styles.field}>
                    <input
                      id="booking-date"
                      type="date"
                      value={date}
                      min={todayStr}
                      onChange={e => setDate(e.target.value)}
                      className={`${styles.input} ${styles.dateInput} ${!date ? styles.placeholder : ""}`}
                      required
                    />
                  </div>
                )}
              </div>

              {/* Date for direct visit */}
              {tab === "direct" && (
                <div className={styles.row}>
                  <div className={styles.field}>
                    <input
                      id="booking-date"
                      type="date"
                      value={date}
                      min={todayStr}
                      onChange={e => setDate(e.target.value)}
                      className={`${styles.input} ${styles.dateInput} ${!date ? styles.placeholder : ""}`}
                      required
                    />
                  </div>
                  <div className={styles.field} />
                </div>
              )}

              {/* Message */}
              <div className={styles.fieldFull}>
                <textarea
                  id="booking-message"
                  placeholder="Type Here…"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className={`${styles.input} ${styles.textarea}`}
                  rows={3}
                />
              </div>

              {/* Error message */}
              {submitError && (
                <p style={{ color: "red", fontSize: "0.85rem", marginTop: "-8px", marginBottom: "4px" }}>
                  {submitError}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                className={styles.confirmBtn}
                id="booking-confirm"
                disabled={submitting}
              >
                {submitting ? "Sending…" : "Confirm →"}
              </button>

              {/* Footer links */}
              <div className={styles.formFooter}>
                <a href="tel:+919496864960" className={styles.footerLink} id="booking-call-link">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
                  </svg>
                  Call Us →
                </a>
                <a href="https://wa.me/919496864960" className={styles.footerLink} id="booking-whatsapp-link" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp →
                </a>
                <a href="#" className={styles.helpLink} id="booking-help-link">
                  How Can We Help?
                </a>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
