"use client";

import { useState } from "react";
import styles from "./Newsletter.module.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className={styles.section} id="appointment">
      <div className={styles.container}>
        <div className={styles.box}>
          <h2 className={styles.title}>Stay Informed, Stay Well</h2>
          <p className={styles.subtitle}>Monthly mental health tips, expert articles &amp; wellness resources — straight to your inbox.</p>
          {!submitted ? (
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                aria-label="Email address"
              />
              <button type="submit" className={styles.btn}>Subscribe</button>
            </form>
          ) : (
            <div className={styles.success}>
              ✅ Thank you! You&apos;ve successfully subscribed.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
