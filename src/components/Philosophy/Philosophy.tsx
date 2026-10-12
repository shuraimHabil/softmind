import Image from "next/image";
import Link from "next/link";
import styles from "./Philosophy.module.css";

const pillars = [
  {
    title: "Evidence Based\nTherapies",
    hoverDesc: "Research-informed psychological interventions, considered in relation to the individual.",
    icon: "/assets/icons/icon1.png",
    alt: "Evidence Based Therapies icon",
    href: "/approach#01-evidence-based-therapies",
  },
  {
    title: "Neuroscience\nInformed Care",
    hoverDesc: "Contemporary neuroscience helps inform how we understand emotion, learning, behaviour and human experience.",
    icon: "/assets/icons/icon2.png",
    alt: "Neuroscience Informed Care icon",
    href: "/approach#02-neuroscience-informed-care",
  },
  {
    title: "Technology Assisted\nInterventions",
    hoverDesc: "Selected technologies may complement psychological care when they have a clear clinical purpose.",
    icon: "/assets/icons/icon3.png",
    alt: "Technology Assisted Interventions icon",
    href: "/approach#03-technology-assisted-interventions",
  },
  {
    title: "Measurement\nInformed Care",
    hoverDesc: "Psychological, behavioural and physiological measures help us understand change and adapt care.",
    icon: "/assets/icons/icon4.png",
    alt: "Measurement Informed Care icon",
    href: "/approach#04-measurement-informed-care",
  },
];

export default function Philosophy() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Top row: heading */}
        <div className={styles.topRow}>
          <h2 className={styles.title}>
            A Whole-Person Approach Rooted in Science and Delivered with Humanity.
          </h2>
        </div>

        {/* Pillars row */}
        <div className={styles.pillars}>
          {pillars.map((p) => (
            <Link key={p.alt} href={p.href} className={styles.pillar}>
              <div className={styles.iconWrap}>
                <Image
                  src={p.icon}
                  alt={p.alt}
                  width={56}
                  height={56}
                  className={styles.icon}
                  unoptimized
                />
              </div>
              <h3 className={styles.pillarTitle}>
                {p.title.split("\n").map((line, i, arr) => (
                  <span key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                  </span>
                ))}
              </h3>
              <p className={styles.hoverDesc}>{p.hoverDesc}</p>
            </Link>
          ))}
        </div>

        {/* Bottom row: link */}
        <div className={styles.bottomRow}>
          <Link href="/approach" className={styles.link}>
            Read More →
          </Link>
        </div>
      </div>
    </section>
  );
}
