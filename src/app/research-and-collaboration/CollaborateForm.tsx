"use client";

import { useState } from "react";
import styles from "./research.module.css";
import Link from "next/link";

export default function CollaborateForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organisation: "",
    country: "",
    email: "",
    area: "",
    idea: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.idea) {
      alert("Please fill in all required fields (Name, Professional Email, and your idea).");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className={styles.formCol}>
      <h2 className={styles.formTitle}>Collaborate With Us</h2>
      <h3 className={styles.formSubtitle}>Have an idea worth exploring together?</h3>
      <p className={styles.formIntro}>
        We welcome collaboration with{" "}
        <strong>researchers, universities, clinicians and technology organisations</strong> working
        across psychological science, neuroscience and responsible technology.
      </p>

      {submitted ? (
        <div className={styles.successMessage}>
          <h4>Thank you for your proposal.</h4>
          <p>
            We have received your details. Our clinical and research partnerships team will review
            your message and reach out to {formData.email || "you"} shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formRow}>
            <input
              type="text"
              placeholder="Name *"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Organisation / Institution"
              value={formData.organisation}
              onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
              className={styles.input}
            />
          </div>

          <div className={styles.formRow}>
            <input
              type="text"
              placeholder="Country"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Professional Email *"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={styles.input}
            />
          </div>

          <div className={styles.selectWrap}>
            <select
              value={formData.area}
              onChange={(e) => setFormData({ ...formData, area: e.target.value })}
              className={styles.select}
              required
            >
              <option value="" disabled>
                Area of Collaboration *
              </option>
              <option value="heg-neurofeedback">HEG Neurofeedback & Biofeedback</option>
              <option value="tavns-neuromodulation">Nurosym & Non-invasive Neuromodulation (taVNS)</option>
              <option value="ai-digital-mental-health">EEG, AI & Digital Mental Health</option>
              <option value="psychological-science">Psychological Science & Human Behaviour</option>
              <option value="affective-neuroscience">Affective Neuroscience & Brain-Body Science</option>
              <option value="therapeutic-innovation">Therapeutic Innovation & Protocols</option>
              <option value="academic-partnership">Academic & Institutional Partnership</option>
            </select>
            <svg
              className={styles.selectArrow}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>

          <textarea
            placeholder="Brief Proposal *"
            required
            rows={4}
            value={formData.idea}
            onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
            className={styles.textarea}
          />

          <button type="submit" className={styles.submitBtn}>
            Submit Proposal &rarr;
          </button>

          <p className={styles.formFootnote}>
            For clinical appointments or personal mental-health information, please use our{" "}
            <Link href="/online-consultation">consultation page</Link>.
          </p>
        </form>
      )}
    </div>
  );
}
