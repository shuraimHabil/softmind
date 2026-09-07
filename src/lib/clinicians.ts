export interface ClinicianExpertise {
  title: string;
  description: string;
}

export interface ClinicianArticle {
  title: string;
  category: string;
  readTime: string;
  img: string;
  href: string;
}

export interface Clinician {
  id: number;
  name: string;
  role: string;
  eyebrow?: string;
  tagline: string;
  desc: string;
  img: string;
  categories: string[];
  experience: string;
  experienceSub: string;
  sessions: string;
  sessionsSub: string;
  license: string;
  licenseSub: string;
  aboutParagraphs: string[];
  socialLinks: {
    instagram?: string;
    youtube?: string;
    facebook?: string;
    twitter?: string;
  };
  portfolioUrl?: string;
  languages: string[];
  quote: string;
  quoteAuthor: string;
  expertise: ClinicianExpertise[];
  articles: ClinicianArticle[];
}

export const clinicians: Clinician[] = [
  {
    id: 1,
    name: "Dr. Prasad Amore",
    role: "Chief Consultant",
    eyebrow: "Chief Consultant",
    tagline: "Vatted practitioner specializing in anxiety. CBT methodology, and healing pathways.",
    desc: "Visionary psychiatrist specialising in anxiety, CBT methodology, and healing pathways.",
    img: "/assets/clinicians/clinician_1.jpg",
    categories: ["All", "Emotional Wellbeing", "Personal & Life Challenges"],
    experience: "15+ Years",
    experienceSub: "CLINICAL EXPERIENCE",
    sessions: "10000+",
    sessionsSub: "SESSIONS CONDUCTED",
    license: "RCI licensed",
    licenseSub: "CLINICAL PSYCHOLOGIST",
    aboutParagraphs: [
      "Dr. Prasad Amore is a qualified and experienced psychologist and licensed mental health practitioner, serving as the Managing Director of Softmind Wellness Pvt. Ltd., Kerala. With decades of experience across diverse age groups and clinical settings, he provides compassionate, confidential, and evidence-based psychological care.",
      "His areas of expertise include Cognitive Behaviour Therapy (CBT), couples therapy, adolescent therapy, psychotherapy, hypnotherapy, and psychological assessments. He works with individuals experiencing concerns such as anxiety, depression, phobias, OCD, addiction, and other mental health challenges.",
      "Alongside clinical practice, Dr. Prasad contributes as a consultant, trainer, and author, with a strong focus on helping individuals understand themselves, overcome challenges, and build healthier, more fulfilling lives.",
    ],
    socialLinks: {
      instagram: "https://instagram.com/softmindindia",
      youtube: "https://youtube.com/@softmindindia",
      facebook: "https://facebook.com/softmindindia",
      twitter: "https://twitter.com/softmindindia",
    },
    portfolioUrl: "#",
    languages: ["English", "Malayalam"],
    quote: "Empowering Minds. Healing Hearts. Enabling Better Life.",
    quoteAuthor: "- Prasad Amore",
    expertise: [
      {
        title: "Anxiety And Stress Management",
        description: "Helping you manage anxiety, stress, and overthinking with practical, evidence-based psychological care.",
      },
      {
        title: "Emotional Regulation",
        description: "Helping you understand and manage difficult emotions with greater awareness, balance, and control.",
      },
      {
        title: "Panic Attacks And Phobias",
        description: "Helping you manage panic attacks and overcome fears through evidence-based psychological support.",
      },
    ],
    articles: [
      {
        title: "Deciphering Depression- Unraveling Neurobiological Threads for Targeted Treatment",
        category: "Depression",
        readTime: "7 min read",
        img: "/assets/insight_1.jpg",
        href: "/articles/understanding-depression-malayalam",
      },
      {
        title: "Intellectual Disability – Understanding Adaptive Functioning and Supportive Interventions",
        category: "Mental health",
        readTime: "6 min read",
        img: "/assets/therapy_session.jpg",
        href: "/articles",
      },
      {
        title: "Harmonizing Relief – Navigating Anxiety Disorders through Medication and Considered Choices",
        category: "Anxiety",
        readTime: "6 min read",
        img: "/assets/anxiety_hero.jpg",
        href: "/articles/anxiety-mindful-breathing-malayalam",
      },
    ],
  },
  {
    id: 2,
    name: "Jalita James",
    role: "Consultant Psychologist MCA",
    eyebrow: "Consultant Psychologist",
    tagline: "Psychiatric resilience leader focused on evidence-backed recovery systems.",
    desc: "Psychiatric resilience leader focused on evidence-backed recovery systems.",
    img: "/assets/clinicians/clinician_2.jpg",
    categories: ["All", "Emotional Wellbeing", "Relationship & Family"],
    experience: "8+ Years",
    experienceSub: "CLINICAL EXPERIENCE",
    sessions: "5000+",
    sessionsSub: "SESSIONS CONDUCTED",
    license: "RCI licensed",
    licenseSub: "CONSULTANT PSYCHOLOGIST",
    aboutParagraphs: [
      "Jalita James is an experienced consultant psychologist specializing in trauma recovery, relationship counseling, and modern cognitive therapies.",
      "She has worked extensively with young adults and couples, helping them navigate emotional dysregulation, workplace burnout, and relational attachment patterns.",
      "Her practice combines humanistic principles with structured CBT methodologies to foster lasting resilience and self-awareness.",
    ],
    socialLinks: {
      instagram: "https://instagram.com/softmindindia",
      youtube: "https://youtube.com/@softmindindia",
      facebook: "https://facebook.com/softmindindia",
      twitter: "https://twitter.com/softmindindia",
    },
    portfolioUrl: "#",
    languages: ["English", "Malayalam"],
    quote: "Every journey toward healing begins with safe, empathetic understanding.",
    quoteAuthor: "- Jalita James",
    expertise: [
      {
        title: "Trauma & Emotional Recovery",
        description: "Guiding clients through complex emotional processing with gentle, structured therapies.",
      },
      {
        title: "Relationship & Couple Counseling",
        description: "Improving relational dynamics, boundary setting, and empathetic communication.",
      },
      {
        title: "Burnout & Workplace Stress",
        description: "Evidence-based strategies to restore work-life balance and emotional energy.",
      },
    ],
    articles: [
      {
        title: "Harmonizing Relief – Navigating Anxiety Disorders through Medication and Considered Choices",
        category: "Anxiety",
        readTime: "6 min read",
        img: "/assets/anxiety_hero.jpg",
        href: "/articles/anxiety-mindful-breathing-malayalam",
      },
    ],
  },
  {
    id: 3,
    name: "Jis Joy",
    role: "Consultant Psychologist",
    eyebrow: "Consultant Psychologist",
    tagline: "Caring family communicator and boundary-setter with secure, talent-backed behavioural work.",
    desc: "Caring family communicator and boundary-setter with secure, talent-backed behavioural work.",
    img: "/assets/clinicians/clinician_3.jpg",
    categories: ["All", "Relationship & Family", "Children & Adolescents"],
    experience: "10+ Years",
    experienceSub: "CLINICAL EXPERIENCE",
    sessions: "6500+",
    sessionsSub: "SESSIONS CONDUCTED",
    license: "RCI licensed",
    licenseSub: "CLINICAL PSYCHOLOGIST",
    aboutParagraphs: [
      "Jis Joy brings extensive clinical expertise in adolescent behavioral intervention, family mediation, and developmental mental health.",
      "With a collaborative approach, Jis assists families in understanding behavioral cues and fostering empathetic family communication.",
    ],
    socialLinks: {
      instagram: "https://instagram.com/softmindindia",
      youtube: "https://youtube.com/@softmindindia",
      facebook: "https://facebook.com/softmindindia",
      twitter: "https://twitter.com/softmindindia",
    },
    portfolioUrl: "#",
    languages: ["English", "Malayalam"],
    quote: "Building strong foundations within the family creates resilient individuals.",
    quoteAuthor: "- Jis Joy",
    expertise: [
      {
        title: "Child & Adolescent Therapy",
        description: "Specialized behavioral support for children and adolescents navigating growth challenges.",
      },
      {
        title: "Family Systems Counseling",
        description: "Strengthening communication and emotional harmony across diverse family structures.",
      },
      {
        title: "Behavioral Interventions",
        description: "Practical behavioral strategies tailored to each individual's developmental needs.",
      },
    ],
    articles: [
      {
        title: "Intellectual Disability – Understanding Adaptive Functioning and Supportive Interventions",
        category: "Mental health",
        readTime: "6 min read",
        img: "/assets/therapy_session.jpg",
        href: "/articles",
      },
    ],
  },
  {
    id: 4,
    name: "Dr. Nishma",
    role: "Consultant Psychologist",
    eyebrow: "Consultant Psychologist",
    tagline: "Specialist in relaxed engagement, cognitive patterns, and brain-wellness integration.",
    desc: "Specialist in relaxed engagement, cognitive patterns, and brain-wellness integration.",
    img: "/assets/clinicians/clinician_4.jpg",
    categories: ["All", "Emotional Wellbeing", "Personal & Life Challenges"],
    experience: "12+ Years",
    experienceSub: "CLINICAL EXPERIENCE",
    sessions: "8000+",
    sessionsSub: "SESSIONS CONDUCTED",
    license: "RCI licensed",
    licenseSub: "CLINICAL PSYCHOLOGIST",
    aboutParagraphs: [
      "Dr. Nishma has over a decade of dedicated clinical practice in brain-wellness integration and modern mindfulness-based psychotherapy.",
      "She specializes in treating chronic anxiety disorders, insomnia, and thought patterns affecting everyday vitality.",
    ],
    socialLinks: {
      instagram: "https://instagram.com/softmindindia",
      youtube: "https://youtube.com/@softmindindia",
      facebook: "https://facebook.com/softmindindia",
      twitter: "https://twitter.com/softmindindia",
    },
    portfolioUrl: "#",
    languages: ["English", "Malayalam"],
    quote: "Peace of mind is cultivated through intentional awareness and gentle guidance.",
    quoteAuthor: "- Dr. Nishma",
    expertise: [
      {
        title: "Mindfulness & Anxiety Care",
        description: "Combining evidence-based mindfulness techniques with modern psychological therapy.",
      },
      {
        title: "Cognitive Restructuring",
        description: "Transforming negative thought patterns into healthy, constructive mental habits.",
      },
      {
        title: "Stress & Sleep Health",
        description: "Targeted psychological interventions to restore restful sleep and nervous system balance.",
      },
    ],
    articles: [
      {
        title: "Deciphering Depression- Unraveling Neurobiological Threads for Targeted Treatment",
        category: "Depression",
        readTime: "7 min read",
        img: "/assets/insight_1.jpg",
        href: "/articles/understanding-depression-malayalam",
      },
    ],
  },
  {
    id: 5,
    name: "Dr. Arjun Nair",
    role: "Senior Psychiatrist",
    eyebrow: "Senior Psychiatrist",
    tagline: "Experienced psychiatrist with a focus on mood disorders, OCD, and pharmacotherapy.",
    desc: "Experienced psychiatrist with a focus on mood disorders, OCD, and pharmacotherapy.",
    img: "/assets/practitioner_1.jpg",
    categories: ["All", "Emotional Wellbeing"],
    experience: "16+ Years",
    experienceSub: "CLINICAL EXPERIENCE",
    sessions: "11000+",
    sessionsSub: "SESSIONS CONDUCTED",
    license: "RCI licensed",
    licenseSub: "SENIOR PSYCHIATRIST",
    aboutParagraphs: [
      "Dr. Arjun Nair is a senior consultant psychiatrist with over 16 years of clinical leadership across India and abroad.",
      "His diagnostic clarity and patient-first approach ensure comprehensive care for mood disorders, severe anxiety, and obsessive-compulsive spectrums.",
    ],
    socialLinks: {
      instagram: "https://instagram.com/softmindindia",
      youtube: "https://youtube.com/@softmindindia",
      facebook: "https://facebook.com/softmindindia",
      twitter: "https://twitter.com/softmindindia",
    },
    portfolioUrl: "#",
    languages: ["English", "Malayalam", "Hindi"],
    quote: "Clinical precision combined with deep empathy creates the best therapeutic outcomes.",
    quoteAuthor: "- Dr. Arjun Nair",
    expertise: [
      {
        title: "Mood Disorders & Depression",
        description: "Specialized psychiatric evaluation and evidence-based treatment plans.",
      },
      {
        title: "Obsessive-Compulsive Disorder",
        description: "Modern ERP and pharmacotherapy approaches for obsessive patterns.",
      },
    ],
    articles: [
      {
        title: "Deciphering Depression- Unraveling Neurobiological Threads for Targeted Treatment",
        category: "Depression",
        readTime: "7 min read",
        img: "/assets/insight_1.jpg",
        href: "/articles/understanding-depression-malayalam",
      },
    ],
  },
  {
    id: 6,
    name: "Deepa Menon",
    role: "Clinical Psychologist",
    eyebrow: "Clinical Psychologist",
    tagline: "Specialises in trauma-informed care, grief counselling, and resilience building.",
    desc: "Specialises in trauma-informed care, grief counselling, and resilience building.",
    img: "/assets/practitioner_2.jpg",
    categories: ["All", "Relationship & Family", "Personal & Life Challenges"],
    experience: "9+ Years",
    experienceSub: "CLINICAL EXPERIENCE",
    sessions: "5400+",
    sessionsSub: "SESSIONS CONDUCTED",
    license: "RCI licensed",
    licenseSub: "CLINICAL PSYCHOLOGIST",
    aboutParagraphs: [
      "Deepa Menon is a compassionate clinical psychologist dedicated to helping individuals navigate trauma, grief, and life transitions.",
      "Her practice utilizes evidence-based narrative and cognitive techniques to foster healing and self-compassion.",
    ],
    socialLinks: {
      instagram: "https://instagram.com/softmindindia",
      youtube: "https://youtube.com/@softmindindia",
      facebook: "https://facebook.com/softmindindia",
      twitter: "https://twitter.com/softmindindia",
    },
    portfolioUrl: "#",
    languages: ["English", "Malayalam"],
    quote: "Healing isn't linear, but with proper support, transformation is always possible.",
    quoteAuthor: "- Deepa Menon",
    expertise: [
      {
        title: "Trauma-Informed Therapy",
        description: "Gentle, paced therapeutic support for processing past adverse experiences.",
      },
      {
        title: "Grief & Bereavement Support",
        description: "Compassionate guidance through complex loss and major life shifts.",
      },
    ],
    articles: [
      {
        title: "Harmonizing Relief – Navigating Anxiety Disorders through Medication and Considered Choices",
        category: "Anxiety",
        readTime: "6 min read",
        img: "/assets/anxiety_hero.jpg",
        href: "/articles/anxiety-mindful-breathing-malayalam",
      },
    ],
  },
  {
    id: 7,
    name: "Rahul Krishnan",
    role: "Child & Adolescent Specialist",
    eyebrow: "Child & Adolescent Specialist",
    tagline: "Dedicated to learning difficulties, ADHD assessment, and adolescent mental health.",
    desc: "Dedicated to learning difficulties, ADHD assessment, and adolescent mental health.",
    img: "/assets/practitioner_3.jpg",
    categories: ["All", "Children & Adolescents"],
    experience: "7+ Years",
    experienceSub: "CLINICAL EXPERIENCE",
    sessions: "4200+",
    sessionsSub: "SESSIONS CONDUCTED",
    license: "RCI licensed",
    licenseSub: "CHILD PSYCHOLOGIST",
    aboutParagraphs: [
      "Rahul Krishnan focuses on supporting children, teenagers, and parents navigating developmental, behavioral, and academic challenges.",
      "He conducts thorough neurodevelopmental assessments for ADHD, learning differences, and emotional regulation.",
    ],
    socialLinks: {
      instagram: "https://instagram.com/softmindindia",
      youtube: "https://youtube.com/@softmindindia",
      facebook: "https://facebook.com/softmindindia",
      twitter: "https://twitter.com/softmindindia",
    },
    portfolioUrl: "#",
    languages: ["English", "Malayalam"],
    quote: "Every child possesses unique strengths waiting to be understood and nurtured.",
    quoteAuthor: "- Rahul Krishnan",
    expertise: [
      {
        title: "ADHD & Learning Assessments",
        description: "Comprehensive testing and tailored educational accommodation support.",
      },
      {
        title: "Adolescent Counseling",
        description: "Safe, confidential space for teens to navigate identity, pressure, and emotions.",
      },
    ],
    articles: [
      {
        title: "Intellectual Disability – Understanding Adaptive Functioning and Supportive Interventions",
        category: "Mental health",
        readTime: "6 min read",
        img: "/assets/child_session.jpg",
        href: "/articles",
      },
    ],
  },
  {
    id: 8,
    name: "Dr. Asha Pillai",
    role: "Developmental Psychiatrist",
    eyebrow: "Developmental Psychiatrist",
    tagline: "Focused on child development, autism spectrum assessments, and family-centred care.",
    desc: "Focused on child development, autism spectrum assessments, and family-centred care.",
    img: "/assets/practitioner_4.jpg",
    categories: ["All", "Children & Adolescents"],
    experience: "14+ Years",
    experienceSub: "CLINICAL EXPERIENCE",
    sessions: "9000+",
    sessionsSub: "SESSIONS CONDUCTED",
    license: "RCI licensed",
    licenseSub: "DEVELOPMENTAL PSYCHIATRIST",
    aboutParagraphs: [
      "Dr. Asha Pillai brings over 14 years of specialized expertise in developmental psychiatry, autism spectrum interventions, and early childhood mental health.",
      "Her practice works closely with multidisciplinary teams to ensure holistic developmental progress for every child.",
    ],
    socialLinks: {
      instagram: "https://instagram.com/softmindindia",
      youtube: "https://youtube.com/@softmindindia",
      facebook: "https://facebook.com/softmindindia",
      twitter: "https://twitter.com/softmindindia",
    },
    portfolioUrl: "#",
    languages: ["English", "Malayalam"],
    quote: "Early support and loving guidance make all the difference in a child's developmental path.",
    quoteAuthor: "- Dr. Asha Pillai",
    expertise: [
      {
        title: "Autism & Developmental Support",
        description: "Evidence-based developmental assessments and personalized intervention plans.",
      },
      {
        title: "Parental Coaching & Guidance",
        description: "Empowering parents with actionable, supportive behavioral tools.",
      },
    ],
    articles: [
      {
        title: "Intellectual Disability – Understanding Adaptive Functioning and Supportive Interventions",
        category: "Mental health",
        readTime: "6 min read",
        img: "/assets/child_session.jpg",
        href: "/articles",
      },
    ],
  },
];

export function getClinicianById(id: string | number): Clinician | undefined {
  const numericId = Number(id);
  const found = clinicians.find((c) => c.id === numericId);
  if (found) return found;

  // If someone enters an id not specifically listed, provide a fallback template
  return {
    ...clinicians[0],
    id: numericId || 1,
  };
}
