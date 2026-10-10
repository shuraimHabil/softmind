"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./PerspectivesDetail.module.css";

interface TocItem {
  id: string;
  title: string;
}

const tocItems: TocItem[] = [
  { id: "understanding-begins-with-the-person", title: "Understanding Begins With the Person" },
  { id: "the-mind-is-not-separate-from-life", title: "The Mind Is Not Separate From Life" },
  { id: "beyond-diagnostic-labels", title: "Beyond Diagnostic Labels" },
  { id: "behaviour-has-a-history", title: "Behaviour Has a History" },
  { id: "emotion-is-more-than-a-feeling", title: "Emotion Is More Than a Feeling" },
  { id: "psychological-change-is-a-process-of-learning", title: "Psychological Change Is a Process of Learning" },
  { id: "technology-must-serve-understanding", title: "Technology Must Serve Understanding" },
  { id: "the-human-experience-cannot-be-separated-from-society", title: "The Human Experience Cannot Be Separated From Society" },
  { id: "scientific-humility-is-part-of-professional-responsibility", title: "Scientific Humility Is Part of Professional Responsibility" },
  { id: "the-person-remains-at-the-centre", title: "The Person Remains at the Centre" },
];

const morePerspectives = [
  {
    title: "Why Understanding a Person Requires More Than a Diagnosis",
    category: "HUMAN BEHAVIOUR",
    img: "/assets/perspectives/thumb_sunset.jpg",
    href: "/articles",
  },
  {
    title: "Why the Same Relationship Can Feel Safe and Threatening",
    category: "RELATIONSHIPS",
    img: "/assets/perspectives/thumb_chairs.jpg",
    href: "/articles",
  },
  {
    title: "What Happens When AI Becomes Our Everyday Thinking Partner?",
    category: "TECHNOLOGY & SOCIETY",
    img: "/assets/perspectives/thumb_phone.jpg",
    href: "/articles",
  },
];

const relatedPerspectives = [
  {
    title: "Human Behaviour in a Changing World",
    desc: "Exploring how environment, technology and relationships shape our psychological lives.",
    category: "SOCIETY & CULTURE",
    img: "/assets/perspectives/card_forest.jpg",
    href: "/articles",
  },
  {
    title: "Emotion, Uncertainty and Everyday Life",
    desc: "Why uncomfortable emotions are a natural part of being human.",
    category: "EMOTIONS",
    img: "/assets/perspectives/card_leaves.jpg",
    href: "/articles",
  },
  {
    title: "Psychological Change in a Complex World",
    desc: "What helps people adapt, grow and live with greater flexibility.",
    category: "PSYCHOTHERAPY & PRACTICE",
    img: "/assets/perspectives/card_beach.jpg",
    href: "/articles",
  },
];

export default function PerspectivesDetail() {
  const [activeId, setActiveId] = useState<string>(tocItems[0].id);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      const visible = entries.find((e) => e.isIntersecting);
      if (visible) {
        setActiveId(visible.target.id);
      }
    };

    const headerEl = document.querySelector("header");
    const headerH = headerEl ? headerEl.offsetHeight : 108;

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: `-${headerH + 20}px 0px -55% 0px`,
      threshold: [0, 0.2, 0.5],
    });

    tocItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const headerEl = document.querySelector("header");
      const headerH = headerEl ? headerEl.offsetHeight : 108;
      const topOffset = headerH + 24;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveId(id);
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* ── Hero Section ── */}
        <section className={styles.heroSection}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className={styles.categoryTag}>PERSPECTIVES</span>
              <h1 className={styles.heroTitle}>Our Perspective</h1>
              <h2 className={styles.heroSubtitle}>
                Understanding the Person, Not Merely the Problem
              </h2>
              <p className={styles.heroExcerpt}>
                An editorial reflection on the philosophy that guides Softmind — informed
                by psychological science, affective neuroscience and a commitment to human
                understanding.
              </p>
              <div className={styles.heroMeta}>
                <span>By Softmind Editorial Team</span>
                <span className={styles.metaDot}>|</span>
                <span>October 2026</span>
                <span className={styles.metaDot}>|</span>
                <span>8 min read</span>
              </div>
            </div>

            <div className={styles.heroImageWrap}>
              <Image
                src="/assets/perspectives/hero_chair.jpg"
                alt="Therapy space with armchair and warm sunlight"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 45vw"
                className={styles.heroImage}
              />
            </div>
          </div>
        </section>

        {/* ── Main Two-Column Layout ── */}
        <div className={styles.mainLayout}>
          {/* ── Left Column: Article Body ── */}
          <article className={styles.articleBody}>
            {/* Section 1 */}
            <section id="understanding-begins-with-the-person" className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>Understanding Begins With the Person</h2>
              <p className={styles.paragraph}>
                Human experience cannot be fully understood through symptoms, diagnostic
                categories or isolated patterns of behaviour. Every person brings a
                biological history, a developing nervous system, a body continuously responding
                to its surroundings, and experiences shaped by relationships, learning, culture
                and circumstances.
              </p>
              <p className={styles.paragraph}>
                What appears as anxiety, withdrawal, anger, sadness or difficulty adapting
                to everyday life may arise through different processes in different
                individuals.
              </p>
              <p className={styles.paragraph}>
                At Softmind, we believe psychological care must begin with this complexity
                rather than attempt to reduce it. Our perspective draws from psychological
                science, affective neuroscience, evolutionary biology, developmental
                understanding and the continuing study of human behaviour.
              </p>
            </section>

            {/* Section 2 */}
            <section id="the-mind-is-not-separate-from-life" className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>The Mind Is Not Separate From Life</h2>
              <p className={styles.paragraph}>
                The brain does not function independently of the body or the surrounding
                world. What we experience as thought, emotion, motivation and behaviour
                involves ongoing interactions among neural activity, physiological processes,
                previous learning and present circumstances.
              </p>
              <p className={styles.paragraph}>
                Anxiety is not always a problem of excessive thinking alone. It may involve
                heightened physiological arousal, learned expectations, uncertainty,
                environmental demands and attempts to anticipate or avoid possible threats.
              </p>
            </section>

            {/* Section 3 */}
            <section id="beyond-diagnostic-labels" className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>Beyond Diagnostic Labels</h2>
              <p className={styles.paragraph}>
                Diagnostic systems have an important place in contemporary healthcare. They
                provide shared terminology, support clinical communication, guide research
                and help inform treatment decisions. However, a diagnosis is not a complete
                account of a person. Two individuals with similar symptoms may have
                profoundly different developmental histories, emotional responses,
                relationships and therapeutic needs.
              </p>
            </section>

            {/* Section 4 */}
            <section id="behaviour-has-a-history" className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>Behaviour Has a History</h2>
              <p className={styles.paragraph}>
                Human behaviour develops through interactions among biological
                predispositions, learning and environmental conditions. From an evolutionary
                perspective, capacities associated with threat detection, attachment, social
                belonging, competition and cooperation have histories extending beyond
                individual experience.
              </p>
              <p className={styles.paragraph}>
                Patterns of coping that seem counterproductive today may once have offered
                safety, predictability or emotional survival in past environments. Recognising
                this continuity transforms the therapeutic conversation from identifying flaws
                to understanding adaptive responses.
              </p>
            </section>

            {/* Section 5 */}
            <section id="emotion-is-more-than-a-feeling" className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>Emotion Is More Than a Feeling</h2>
              <p className={styles.paragraph}>
                Emotions are coordinated biological and cognitive states that evolved to
                prepare the organism for action. Rather than viewing distress, shame, or grief
                as errors to be eradicated, psychological care helps individuals understand how
                emotions organise attention, guide decisions, and communicate internal needs.
              </p>
              <p className={styles.paragraph}>
                When we learn to read emotional signals with curiosity rather than fear,
                emotional regulation becomes an act of self-attunement rather than chronic
                suppression.
              </p>
            </section>

            {/* Section 6 */}
            <section id="psychological-change-is-a-process-of-learning" className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>Psychological Change Is a Process of Learning</h2>
              <p className={styles.paragraph}>
                Therapy is not an instruction manual or a passive cure; it is an active,
                collaborative learning environment. Through renewed experience, reflective
                inquiry, and gradual exposure to avoided aspects of life, neural circuits and
                behavioural patterns adapt to new possibilities.
              </p>
              <p className={styles.paragraph}>
                Change is rarely instantaneous. It mirrors how any deep learning occurs:
                requiring repetition, compassionate patience, safety, and supportive context.
              </p>
            </section>

            {/* Section 7 */}
            <section id="technology-must-serve-understanding" className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>Technology Must Serve Understanding</h2>
              <p className={styles.paragraph}>
                Tools, digital consultations, and data must always deepen empathy and clarity,
                never replace the attunement and ethical responsibility inherent in authentic
                therapeutic relationships.
              </p>
              <p className={styles.paragraph}>
                At Softmind, we design digital interfaces and workflow tools that eliminate
                administrative friction so clinicians can devote their full presence to the
                human beings in their care.
              </p>
            </section>

            {/* Section 8 */}
            <section id="the-human-experience-cannot-be-separated-from-society" className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>The Human Experience Cannot Be Separated From Society</h2>
              <p className={styles.paragraph}>
                Individual psychological suffering does not occur in a vacuum. Socioeconomic
                pressures, cultural narratives, discrimination, and community isolation
                profoundly shape mental health. Ethical care acknowledges systemic context
                alongside individual resilience.
              </p>
              <p className={styles.paragraph}>
                True psychological wellbeing is inextricably linked to feeling valued, safe,
                and connected within the wider community.
              </p>
            </section>

            {/* Section 9 */}
            <section id="scientific-humility-is-part-of-professional-responsibility" className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>Scientific Humility Is Part of Professional Responsibility</h2>
              <p className={styles.paragraph}>
                Psychological science continues to evolve. Practicing with integrity means
                remaining open to new evidence, acknowledging limits of current models, and
                prioritising client wellbeing above dogmatic allegiances.
              </p>
              <p className={styles.paragraph}>
                Clinicians must integrate empirical findings with nuanced clinical judgment
                and deep respect for the client’s values and agency.
              </p>
            </section>

            {/* Section 10 */}
            <section id="the-person-remains-at-the-centre" className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>The Person Remains at the Centre</h2>
              <p className={styles.paragraph}>
                Every protocol, formulation, and diagnostic consideration must ultimately
                yield to the unique lived reality of the human being sitting across from us.
                The person comes first.
              </p>
            </section>

            {/* Article Footer & Share Bar */}
            <footer className={styles.articleFooter}>
              <div className={styles.footerAuthorInfo}>
                <span className={styles.footerAuthorName}>By Softmind Editorial Team</span>
                <span className={styles.footerMeta}>
                  October 2026 &nbsp;|&nbsp; 8 min read &nbsp;|&nbsp; Last updated: October 2026
                </span>
              </div>

              <div className={styles.shareSection}>
                <span className={styles.shareLabel}>Share this article</span>
                <div className={styles.shareButtons}>
                  {/* Copy Link */}
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className={styles.shareBtn}
                    aria-label="Copy link"
                    title="Copy link"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  </button>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.softmindindia.com%2Fperspectives"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.shareBtn}
                    aria-label="Share on LinkedIn"
                    title="Share on LinkedIn"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.05 1.53 1.53 0 0 0 0 3.05m1.37 9.74v-8.37H5.09v8.37h2.74z" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.softmindindia.com%2Fperspectives"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.shareBtn}
                    aria-label="Share on Facebook"
                    title="Share on Facebook"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>

                  {/* X / Twitter */}
                  <a
                    href="https://twitter.com/intent/tweet?text=Our%20Perspective%20-%20Softmind%20Wellness&url=https%3A%2F%2Fwww.softmindindia.com%2Fperspectives"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.shareBtn}
                    aria-label="Share on X"
                    title="Share on X"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:?subject=Our%20Perspective%20%7C%20Softmind&body=Read%20this%20thoughtful%20perspective%20from%20Softmind%20Wellness%3A%20https%3A%2F%2Fwww.softmindindia.com%2Fperspectives"
                    className={styles.shareBtn}
                    aria-label="Share via Email"
                    title="Share via Email"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </a>
                </div>

                {copied && <span className={styles.copyToast}>Link copied to clipboard!</span>}
              </div>
            </footer>
          </article>

          {/* ── Right Column: Sticky Sidebar ── */}
          <aside className={styles.sidebar}>
            {/* Table of Contents: On this page */}
            <div className={styles.tocCard}>
              <h3 className={styles.tocTitle}>On this page</h3>
              <ul className={styles.tocList}>
                {tocItems.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <li key={item.id} className={styles.tocItem}>
                      <span
                        className={`${styles.tocDot} ${
                          isActive ? styles.tocDotActive : ""
                        }`}
                        aria-hidden="true"
                      />
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => handleScrollTo(e, item.id)}
                        className={`${styles.tocLink} ${
                          isActive ? styles.tocLinkActive : ""
                        }`}
                      >
                        {item.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* More in Perspectives */}
            <div className={styles.moreCard}>
              <div className={styles.moreHeader}>
                <h3 className={styles.moreTitle}>More in Perspectives</h3>
                <Link href="/articles" className={styles.moreViewAll}>
                  View all &rarr;
                </Link>
              </div>

              <div className={styles.moreList}>
                {morePerspectives.map((item, idx) => (
                  <Link key={idx} href={item.href} className={styles.moreItem}>
                    <div className={styles.moreThumbWrap}>
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        sizes="64px"
                        className={styles.moreThumb}
                      />
                    </div>
                    <div className={styles.moreInfo}>
                      <h4 className={styles.moreItemTitle}>{item.title}</h4>
                      <span className={styles.moreCategory}>{item.category}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ── Full-Width Editorial Statement Banner ── */}
      <section className={styles.editorialBannerSection}>
        <div className={styles.container}>
          <div className={styles.bannerGrid}>
            <div className={styles.bannerStatement}>
              <p>Science guides the care.</p>
              <p>Technology supports it.</p>
              <p>The person remains at the centre.</p>
            </div>

            <div className={styles.bannerMetaCol}>
              <span className={styles.bannerTag}>SOFTMIND PERSPECTIVES</span>
              <p className={styles.bannerOrgText}>
                An institutional editorial statement<br />
                by Softmind Wellness Pvt. Ltd.<br />
                Kerala, India.
              </p>
              <p className={styles.bannerItalicTagline}>
                Beyond labels. Towards understanding.
              </p>
            </div>

            <div className={styles.bannerIllustrationCol}>
              <div className={styles.bannerBotanicalWrap}>
                <Image
                  src="/assets/perspectives/botanical.jpg"
                  alt="Botanical illustration"
                  fill
                  sizes="190px"
                  className={styles.botanicalImg}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Perspectives Section ── */}
      <section className={styles.relatedSection}>
        <div className={styles.container}>
          <div className={styles.relatedHeader}>
            <h2 className={styles.relatedTitle}>Related Perspectives</h2>
            <Link href="/articles" className={styles.relatedViewAll}>
              View all Perspectives &rarr;
            </Link>
          </div>

          <div className={styles.cardsGrid}>
            {relatedPerspectives.map((card, idx) => (
              <Link key={idx} href={card.href} className={styles.cardItem}>
                <div className={styles.cardImageWrap}>
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={styles.cardImage}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardExcerpt}>{card.desc}</p>
                  <span className={styles.cardCategory}>{card.category}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
