"use client";
import Image from "next/image";
import styles from "./OurApproachSpecialties.module.css";
import { useBookingModal } from "@/components/BookingModal/BookingModalContext";

const specialties = [
  {
    id: "emotional-wellbeing",
    title: "Emotional well-being",
    intro:
      "For stress, depression, anxiety, grief, loss, or reflection of life transitions. Help when you need to cope, heal, understand yourself better, and build resilience.",
    subheading: "Some areas we can help with:",
    detail:
      "Stress | Burnout | Anxiety & worry | Low mood | Anger | Relationship | Grief & loss | Self esteem | Identity",
    img: "/assets/hero_therapy.jpg",
    imgAlt: "Person meditating in a garden",
    reversed: false,
  },
  {
    id: "relationships-family",
    title: "Relationships & family",
    intro:
      "For couples, families, and individuals navigating transitions, communication, boundaries, conflict, or therapy with your partner or family system.",
    subheading: "Some areas we can help with:",
    detail:
      "Couples & relationship | Families, communication & conflicts | Parenting support | Premarital counseling | Separation & divorce",
    img: "/assets/couple_session.jpg",
    imgAlt: "Couple holding hands in a therapy session",
    reversed: true,
  },
  {
    id: "children-adolescents",
    title: "Children & adolescents",
    intro:
      "For community, advice, support for children and teenagers navigating school, behavioral challenges, learning differences, mental wellness, or family dynamics.",
    subheading: "Some areas we can help with:",
    detail:
      "Behavioral concerns | Learning & attention difficulties | ADHD & neurodiversity | School-related stress | Adolescent mental health | Developmental milestones",
    img: "/assets/child_session.jpg",
    imgAlt: "Group of children playing outdoors",
    reversed: false,
  },
];

export default function OurApproachSpecialties() {
  const { openModal } = useBookingModal();
  return (
    <section className={styles.section} id="approach-specialties">
      {specialties.map((item) => (
        <div
          key={item.id}
          className={`${styles.row} ${item.reversed ? styles.reversed : ""}`}
          id={`approach-${item.id}`}
        >
          {/* Text side */}
          <div className={styles.textSide}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.intro}>{item.intro}</p>
            <p className={styles.subheading}>{item.subheading}</p>
            <p className={styles.detail}>{item.detail}</p>
            <button onClick={openModal} className={styles.bookBtn} id={`book-${item.id}`}>
              Book Now &rarr;
            </button>
          </div>

          {/* Image side */}
          <div className={styles.imgSide}>
            <div className={styles.imgWrap}>
              <Image
                src={item.img}
                alt={item.imgAlt}
                fill
                className={styles.img}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
