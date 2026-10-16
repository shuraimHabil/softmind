"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./OurApproachSpecialties.module.css";

const specialties = [
  {
    id: "anxiety-stress-emotional-health",
    title: "Anxiety, Stress & Emotional Health",
    intro:
      "Compassionate, evidence-based therapy to help you navigate anxiety, manage overwhelm, lift low mood, process grief, and regain emotional balance.",
    subheading: "Some areas we can help with:",
    detail:
      "Anxiety & Excessive Worry | Stress & Emotional Distress | Panic Attacks & Sudden Fear | Low Mood & Depression | Overthinking & Unwanted Thoughts | Phobias & Specific Fears | Anger & Emotional Difficulties | Grief, Loss & Sadness",
    img: "/assets/anxiety_hero.jpg",
    imgAlt: "Calm and peaceful setting representing emotional well-being",
    reversed: false,
    category: "Emotional Wellbeing",
  },
  {
    id: "marriage-relationships-family",
    title: "Marriage, Relationships & Family",
    intro:
      "Supportive counselling for couples, families, and individuals to strengthen communication, rebuild trust, resolve persistent conflicts, and navigate transitions.",
    subheading: "Some areas we can help with:",
    detail:
      "Marriage Counselling | Couples & Relationship Counselling | Family Problems & Conflicts | Breakups & Separation | Trust & Communication Difficulties | Parenting & Family Relationships | Intimacy & Relationship Concerns",
    img: "/assets/relationship_n_relationship.webp",
    imgAlt: "Family enjoying a joyful moment together outdoors",
    reversed: true,
    category: "Relationship & Family",
  },
  {
    id: "children-teenagers",
    title: "Children & Teenagers",
    intro:
      "Specialised developmental and psychological care to help children and adolescents overcome behavioural, academic, emotional, and social challenges.",
    subheading: "Some areas we can help with:",
    detail:
      "Child Behaviour Problems | Hyperactivity & Attention Difficulties | Learning & School Difficulties | Teenager Emotional & Behavioural Concerns | Exam Stress & Academic Pressure | Social Difficulties & Peer Relationships | Parenting Guidance | Screen Time & Gaming Concerns",
    img: "/assets/child_session.jpg",
    imgAlt: "Children engaging in a supportive session",
    reversed: false,
    category: "Children & Adolescents",
  },
  {
    id: "work-studies-everyday-life",
    title: "Work, Studies & Everyday Life",
    intro:
      "Practical guidance and therapy to manage workplace burnout, career stress, study pressures, decision fatigue, and build lasting self-confidence.",
    subheading: "Some areas we can help with:",
    detail:
      "Work Stress & Burnout | Career & Job-Related Stress | Exam Anxiety & Study Stress | Low Confidence & Self-Esteem | Difficulty Making Decisions | Life Changes & Adjustment | Work–Life Balance | Personal Growth & Self-Understanding",
    img: "/assets/therapy_session.jpg",
    imgAlt: "Professional consultation and personal growth session",
    reversed: true,
    category: "Work & Everyday Life",
  },
  {
    id: "habits-sleep-behaviour",
    title: "Habits, Sleep & Behaviour",
    intro:
      "Evidence-based support to restore healthy sleep rhythms, sharpen focus, overcome unwanted behavioural loops, and manage screen habits.",
    subheading: "Some areas we can help with:",
    detail:
      "Sleep Problems | Difficulty Concentrating | Repetitive Thoughts & Behaviours | Unwanted Habits & Behaviour Patterns | Excessive Screen Use | Gaming-Related Difficulties | Procrastination & Motivation | Social Anxiety & Shyness",
    img: "/assets/habbit.png",
    imgAlt: "Woman relaxing on couch using phone representing habits, screen time and daily behaviour",
    reversed: false,
    category: "Habits & Behaviour",
  },
  {
    id: "lgbtqia-friendly-support",
    title: "LGBTQIA+ Friendly Psychological Support",
    intro:
      "An affirming, confidential, and safe space offering dedicated counselling for identity exploration, relationships, family dynamics, and social stress.",
    subheading: "Some areas we can help with:",
    detail:
      "LGBTQIA+ Affirming Counselling | Gender Identity & Self-Understanding | Sexual Orientation & Personal Identity | Family Acceptance & Communication | Relationships & Emotional Well-being | Discrimination & Social Stress",
    img: "/assets/lgtv.png",
    imgAlt: "Hands reaching across a rainbow pride flag symbolizing LGBTQIA+ affirming support",
    reversed: true,
    category: "LGBTQIA+ Support",
  },
  {
    id: "womens-mens-wellbeing",
    title: "Women's & Men's Well-being",
    intro:
      "Targeted emotional health support addressing gender-specific life stages, reproductive transitions, fertility, hormonal shifts, and body image.",
    subheading: "Some areas we can help with:",
    detail:
      "Women's Emotional Health | Men's Emotional Health | Pregnancy & Emotional Well-being | Emotional Changes After Childbirth | Fertility-Related Stress | Menopause & Midlife Changes | Parenting & Family Responsibilities | Body Image & Self-Confidence",
    img: "/assets/debby-hudson-T-_oK02QLDE-unsplash.jpg",
    imgAlt: "Two people carrying surfboards along the beach representing active, balanced well-being",
    reversed: false,
    category: "Women's & Men's Well-being",
  },
  {
    id: "adhd-autism-learning-differences",
    title: "ADHD, Autism & Learning Differences",
    intro:
      "Neurodiversity-affirming guidance and practical tools for attention, sensory needs, learning differences, daily planning, and family empowerment.",
    subheading: "Some areas we can help with:",
    detail:
      "Attention & Hyperactivity Concerns | ADHD-Related Daily Difficulties | Autism-Related Support | Learning Difficulties | Organisation & Planning Difficulties | Sensory Sensitivity | Parent & Family Guidance",
    img: "/assets/autism.jpg",
    imgAlt: "Child and specialist engaging in creative learning and developmental activity",
    reversed: true,
    category: "Neurodiversity",
  },
  {
    id: "health-ageing-family-care",
    title: "Health, Ageing & Family Care",
    intro:
      "Compassionate psychological support for coping with chronic conditions, physical changes, ageing transitions, and caregiver stress.",
    subheading: "Some areas we can help with:",
    detail:
      "Emotional Stress Related to Physical Health | Living With Long-Term Health Conditions | Disability & Everyday Adjustment | Caregiver Stress | Emotional Well-being in Older Adults | Retirement & Life Changes | Family Support During Illness",
    img: "/assets/agin.png",
    imgAlt: "Adult hand gently holding a child's hand representing family care, support and generations",
    reversed: false,
    category: "Health & Ageing",
  },
  {
    id: "social-life-modern-challenges",
    title: "Social Life & Modern Challenges",
    intro:
      "Therapeutic guidance for overcoming loneliness, managing social media pressures, building interpersonal confidence, and adapting to life changes.",
    subheading: "Some areas we can help with:",
    detail:
      "Loneliness & Feeling Disconnected | Social Media Stress | Online Relationships & Digital Life | Social Confidence & Communication | Moving to a New Place or Country | Family & Social Expectations | Technology-Related Habits",
    img: "/assets/noorulabdeen-ahmad-3AwJtm6nAZ8-unsplash.jpg",
    imgAlt: "Group of friends sitting together at sunset by the water symbolizing connection, community and social well-being",
    reversed: true,
    category: "Modern Challenges",
  },
];

export default function OurApproachSpecialties() {
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
            <Link href="/book" className={styles.bookBtn} id={`book-${item.id}`}>
              Book Now &rarr;
            </Link>
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
