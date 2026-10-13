import styles from "./CentreStaticCareServices.module.css";

interface CareArea {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface Therapy {
  title: string;
  pill: string;
  desc: string;
}

interface TechCare {
  title: string;
  desc: string;
  callout?: string;
  icon: React.ReactNode;
}

const areasOfCare: CareArea[] = [
  {
    title: "Emotional Well-being",
    desc: "Space to understand your emotional experiences, explore recurring patterns and develop practical responses to everyday challenges. Counselling connects these conversations with your relationships, routines and daily life.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7Z" />
        <path d="M9 21h6" />
      </svg>
    ),
  },
  {
    title: "Relationships & Family Life",
    desc: "Couples counselling and family sessions offer space to explore communication, expectations and patterns of interaction. We consider each person’s perspective and work towards goals agreed together.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Children & Adolescents",
    desc: "Support that considers the young person’s development, experiences, family relationships and educational environment. Parents and caregivers may be involved where appropriate.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
        <path d="M6 20.5v-1.75A4.75 4.75 0 0 1 10.75 14h2.5A4.75 4.75 0 0 1 18 18.75V20.5" />
      </svg>
    ),
  },
  {
    title: "Personal Development",
    desc: "Work on self-understanding, confidence, habits, decision-making and goals that matter to you. Together, we explore manageable steps that fit your circumstances.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h5l3 7 4-14 3 7h5" />
      </svg>
    ),
  },
  {
    title: "Work & Everyday Life",
    desc: "Support for navigating workplace demands, changing responsibilities, communication and daily routines. Sessions focus on understanding your situation and developing practical ways forward.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="7" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
];

const psychologicalTherapies: Therapy[] = [
  {
    title: "Cognitive Behavioural Therapy — CBT",
    pill: "CBT",
    desc: "Explore connections between thoughts, feelings and behaviour. Sessions may include practical exercises and guided practice to develop useful responses in everyday life.",
  },
  {
    title: "Dialectical Behaviour Therapy — DBT Skills",
    pill: "DBT Skills",
    desc: "Develop skills in mindfulness, emotional regulation, managing difficult moments and communication. Skills-based sessions are tailored to agreed goals.",
  },
  {
    title: "Solution-Focused Brief Therapy — SFBT",
    pill: "SFBT",
    desc: "Identify existing strengths, clarify what you would like to change and build manageable steps towards those goals.",
  },
  {
    title: "Acceptance and Commitment Therapy — ACT",
    pill: "ACT",
    desc: "Explore ways of responding to difficult thoughts and feelings while making choices guided by what matters to you.",
  },
  {
    title: "Rational Emotive Behaviour Therapy — REBT",
    pill: "REBT",
    desc: "Examine beliefs and expectations that influence emotional and behavioural responses, and consider more flexible ways of approaching everyday situations.",
  },
  {
    title: "Mindfulness-Based Approaches",
    pill: "Mindfulness",
    desc: "Practise noticing thoughts, feelings and bodily sensations with greater awareness. Structured methods are selected according to the clinician’s training and your suitability.",
  },
  {
    title: "Behavioural Approaches",
    pill: "Behavioural",
    desc: "Explore habits and routines through structured practice, activity planning and learning. Progress is reviewed in relation to your everyday goals.",
  },
  {
    title: "Relaxation & Practical Skills",
    pill: "Skills",
    desc: "Guided breathing, progressive muscle relaxation and other structured exercises may be included within the wider therapeutic work.",
  },
];

const assessmentAndTech: TechCare[] = [
  {
    title: "Psychological Assessment",
    desc: "Clinical interviews and appropriate standardised measures help clarify concerns, strengths and priorities. Findings are discussed in understandable language and connected with practical next steps.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    title: "qEEG & Brain Mapping",
    desc: "Quantitative electroencephalography analyses recorded electrical activity from the brain. Findings are interpreted alongside consultation and other assessment information.",
    callout: "A recording alone does not explain a person’s experiences or determine their care.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a9 9 0 0 1 9 9c0 3.2-1.7 6-4.2 7.6L16 21H8l-.8-2.4A9 9 0 0 1 3 11a9 9 0 0 1 9-9Z" />
        <path d="M9 10h.01M15 10h.01M9.5 15a3.5 3.5 0 0 0 5 0" />
      </svg>
    ),
  },
  {
    title: "Neurofeedback",
    desc: "Recorded brain activity provides feedback during structured training sessions. The clinician discusses the proposed application, supporting evidence and how progress will be reviewed.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Biofeedback",
    desc: "Feedback from physiological signals helps people observe bodily responses and practise regulation skills. The method is selected according to the intended purpose and individual needs.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Transcranial Direct Current Stimulation — tDCS",
    desc: "A non-invasive brain-stimulation option considered following clinical screening. Its proposed use, evidence, uncertainties and relevant precautions are discussed before informed consent and treatment planning.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Audio-Visual Entrainment — AVE",
    desc: "A system using patterned light and sound during supervised sessions. Suitability screening is required, and the clinician explains the intended purpose and limitations of the evidence.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 10v3M6 6v11M10 3v18M14 8v7M18 5v13M22 10v3" />
      </svg>
    ),
  },
];

export default function CentreStaticCareServices() {
  return (
    <section className={styles.careSection}>
      <div className={styles.container}>
        {/* Main Section Header */}
        <div className={styles.headerWrap}>
          <span className={styles.eyebrow}>SERVICES &amp; CLINICAL APPROACH</span>
          <h2 className={styles.mainTitle}>Our Care</h2>
          <p className={styles.mainDesc}>
            Evidence-informed psychological support and consultations tailored to individuals, couples, children and families across our centres.
          </p>
        </div>

        {/* ── 1. Areas of Care ── */}
        <div className={styles.careBlock}>
          <div className={styles.areasGrid}>
            {areasOfCare.map((item, idx) => (
              <div key={idx} className={styles.areaCard}>
                <div className={styles.areaCardIcon}>{item.icon}</div>
                <h3 className={styles.areaCardTitle}>{item.title}</h3>
                <p className={styles.areaCardText}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 2. Psychological Therapies ── */}
        <div className={styles.careBlock}>
          <div className={styles.subHeaderWrap}>
            <h3 className={styles.subTitle}>Psychological Therapies</h3>
            <p className={styles.subDesc}>
              The approach is chosen collaboratively, considering your needs, preferences, the available evidence and the clinician’s training.
            </p>
          </div>

          <div className={styles.therapiesGrid}>
            {psychologicalTherapies.map((item, idx) => (
              <div key={idx} className={styles.therapyCard}>
                <div className={styles.therapyBadgeRow}>
                  <span className={styles.therapyPill}>{item.pill}</span>
                </div>
                <h4 className={styles.therapyTitle}>{item.title}</h4>
                <p className={styles.therapyText}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 3. Assessment & Technology-Assisted Care ── */}
        <div className={styles.careBlock}>
          <div className={styles.subHeaderWrap}>
            <h3 className={styles.subTitle}>Assessment &amp; Technology-Assisted Care</h3>
            <p className={styles.subDesc}>
              Assessments and technology-assisted methods are considered within a broader care plan. The clinician explains their purpose, evidence, limitations and suitability before proceeding. The strength of evidence varies according to the method and its proposed use.
            </p>
          </div>

          <div className={styles.techGrid}>
            {assessmentAndTech.map((item, idx) => (
              <div key={idx} className={styles.techCard}>
                <div className={styles.techCardHeader}>
                  <div className={styles.techIconWrap}>{item.icon}</div>
                  <h4 className={styles.techTitle}>{item.title}</h4>
                </div>
                <p className={styles.techText}>{item.desc}</p>
                {item.callout && (
                  <div className={styles.techCallout}>
                    <em>{item.callout}</em>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className={styles.availabilityBanner}>
            <span className={styles.availabilityIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </span>
            <p className={styles.availabilityText}>
              Availability depends on clinical suitability, equipment and appointment schedules.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
