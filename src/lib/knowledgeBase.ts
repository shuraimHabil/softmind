export interface CenterInfo {
  name: string;
  slug: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  facilities: string[];
}

export const SOFTMIND_KNOWLEDGE = {
  organization: {
    name: "Softmind Healthcare",
    brandName: "Softmind",
    tagline: "Science Guides the Care. The Person Remains at the Centre.",
    overview:
      "Softmind is an evidence-informed mental health and psychological wellness practice located in Kochi, Kerala. With licensed clinical and rehabilitation psychologists, psychotherapists, and consultant psychiatrists, Softmind provides compassionate, confidential, and scientifically grounded care.",
    coreValues: [
      "Person-Led Care: Care tailored around individual experiences, relationships, and priorities without labeling.",
      "Evidence-Informed: Validated psychotherapy, psychological counselling, assessments, and neuroscience-informed care.",
      "Strict Confidentiality: High clinical standards, RCI-licensed professionals, and secure records.",
      "Comprehensive & Integrated: Psychology, psychotherapy, psychiatric medical evaluations, and brain mapping/neurofeedback."
    ],
    contact: {
      phone: "+91 7736 484 813",
      email: "info@softmindindia.com",
      website: "https://softmindindia.com",
      generalHours: "Monday to Saturday, 9:00 AM – 9:00 PM"
    }
  },

  assistantProfile: {
    name: "Minda",
    role: "Softmind AI Care Companion",
    personality: "Warm, empathetic, calm, clinically respectful, and reassuring.",
    mascotDescription: "A friendly character with blue and green antennae, representing holistic mind-body wellness and compassionate guidance."
  },

  crisisHotlines: {
    message: "If you or someone you know is in acute distress or experiencing thoughts of self-harm, immediate 24x7 help is available through these dedicated national helplines:",
    helplines: [
      { name: "Tele-MANAS (Govt. of India)", number: "14416 (Toll-free 24/7)" },
      { name: "KIRAN Mental Health Helpline", number: "1800-599-0019 (24/7)" },
      { name: "National Emergency Helpline", number: "112" },
      { name: "Softmind Direct Care Desk", number: "+91 7736 484 813" }
    ]
  },

  centres: [
    {
      name: "Softmind Panampilly Nagar (Flagship Centre)",
      slug: "softmind-panampilly-nagar-kochi",
      city: "Kochi, Kerala",
      address: "Second Floor, Kerala State Housing Board G-23, Panampilly Nagar Avenue, Panampilly Nagar, Kochi, Ernakulam, Kerala 682036",
      phone: "+91 7736 484 813",
      email: "info@softmindindia.com",
      hours: "9:00 AM – 9:00 PM (Monday to Saturday)",
      facilities: [
        "In-person psychological counselling and psychiatric consultations",
        "Individual, couples and family sessions",
        "Child and adolescent consultations",
        "Psychological assessment & psychometry",
        "Technology-assisted sessions by appointment",
        "Online consultations with participating clinicians",
        "Reception assistance with appointments and follow-up"
      ]
    },
    {
      name: "Softmind Kakkanad Clinic",
      slug: "kakkanad",
      city: "Kakkanad, Kochi, Kerala",
      address: "Building No:37, IFIL Tower, 3rd Floor, 1124, Seaport - Airport Rd, near Sunrise Hospital, Thrikkakara, Kakkanad, Kochi, Kerala",
      phone: "+91 9846 060 111",
      email: "info@softmindindia.com",
      hours: "9:00 AM – 9:00 PM (Monday to Saturday)",
      facilities: [
        "In-person psychological counselling and psychotherapy",
        "Psychiatric consultations by appointment",
        "qEEG and brain mapping by appointment",
        "Neurofeedback and biofeedback sessions",
        "Clinician-guided technology-assisted sessions",
        "Individual, couples, and family sessions",
        "Child and adolescent consultations",
        "Psychological assessment"
      ]
    }
  ],

  clinicians: [
    {
      name: "Prasad Amore",
      role: "Rehabilitation Psychologist · Psychotherapist · Author",
      experience: "5+ Years Experience",
      specialization: "Rehabilitation psychology, psychotherapy, adult & adolescent mental wellness, personal development, author of clinical mental health perspectives."
    },
    {
      name: "Albin Thomas",
      role: "Psychotherapist",
      experience: "4+ Years Experience",
      specialization: "Individual psychotherapy, emotional well-being, relationship counseling, CBT."
    },
    {
      name: "Hamna K S",
      role: "Consultant Psychologist",
      experience: "4+ Years Experience",
      specialization: "Psychological assessment, adult & adolescent counseling, emotional resilience."
    },
    {
      name: "Keerthana Chandran",
      role: "Consultant Medical Psychologist",
      experience: "3+ Years Experience",
      specialization: "Medical psychology, anxiety & mood support, health psychology, psychological assessments."
    },
    {
      name: "Jalita James",
      role: "Consultant Psychologist",
      experience: "3+ Years Experience",
      specialization: "Child & adolescent psychology, family support, behavioral guidance."
    },
    {
      name: "Athira C H",
      role: "Psychotherapist",
      experience: "1 Year Experience",
      specialization: "Psychotherapy, life transitions, stress management, youth counselling."
    }
  ],

  clinicalServices: [
    {
      title: "Psychological Counselling & Psychotherapy",
      description: "Evidence-based therapy for adults, adolescents, and couples dealing with anxiety, depression, relationship difficulties, OCD, stress, and life challenges."
    },
    {
      title: "Child & Adolescent Consultations",
      description: "Support for emotional regulation, developmental milestones, learning difficulties, ADHD, school stress, and parent-child communication."
    },
    {
      title: "Psychological Assessments & Diagnostic Evaluations",
      description: "Comprehensive psychometric testing, cognitive evaluations, and personality assessments conducted by licensed clinical psychologists."
    },
    {
      title: "Psychiatric Consultations & Medical Review",
      description: "Consultations with licensed psychiatrists for medical evaluations and coordinated psychological-psychiatric care."
    },
    {
      title: "Neuroscience-Informed Care & Technology-Assisted Sessions (Kakkanad Clinic)",
      description: "qEEG brain mapping, neurofeedback, and biofeedback sessions available at the Kakkanad clinic."
    },
    {
      title: "Online Consultations",
      description: "Encrypted, confidential video consultations for clients in India and abroad in English, Malayalam, Hindi, and Tamil."
    }
  ],

  bookingProcess: {
    steps: [
      "1. Select your preferred mode: In-person at our Panampilly Nagar or Kakkanad centres in Kochi, or secure Online Video Consultation.",
      "2. Select your clinician or concern (e.g., Prasad Amore, child guidance, psychotherapy, assessments).",
      "3. Call or WhatsApp our care desk: Panampilly Nagar: +91 7736 484 813 | Kakkanad Clinic: +91 9846 060 111.",
      "4. You can also click 'Book Now' on our website."
    ],
    hours: "Centres are open Monday through Saturday from 9:00 AM to 9:00 PM."
  }
};
