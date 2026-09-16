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
  slug: string;
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
    "id": 1,
    "slug": "prasad-amore",
    "name": "Prasad Amore",
    "role": "Chief Consultant; Managing Director",
    "eyebrow": "Chief Consultant",
    "tagline": "Dedicated practitioner providing evidence-based psychological support at Softmind.",
    "desc": "Prasad Amore is a Chief Consultant; Managing Director at Softmind Wellness, offering evidence-based therapeutic care.",
    "img": "/assets/clinicians/clinician_1.jpg",
    "categories": [
      "All",
      "Emotional Wellbeing",
      "Personal & Life Challenges"
    ],
    "experience": "Experienced",
    "experienceSub": "CLINICAL PRACTICE",
    "sessions": "1000+",
    "sessionsSub": "SESSIONS CONDUCTED",
    "license": "RCI licensed Rehabilitation Psychologist (RCI No. A50537)",
    "licenseSub": "RCI LICENSED",
    "aboutParagraphs": [
      "Prasad Amore is an RCI-licensed Rehabilitation Psychologist and Managing Director of Softmind Wellness Pvt. Ltd., Kerala. He provides compassionate, confidential, and evidence-based psychological care.",
      "His areas of clinical expertise include Cognitive Behaviour Therapy (CBT), psychotherapy, hypnotherapy, and psychological assessments.",
      "Alongside clinical practice, he contributes as a consultant, trainer, and author, dedicated to advancing psychological care across Kerala."
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/softmindindia",
      "facebook": "https://facebook.com/softmindindia"
    },
    "languages": [
      "English",
      "Malayalam"
    ],
    "quote": "Empowering Minds. Healing Hearts. Enabling Better Life.",
    "quoteAuthor": "- Prasad Amore",
    "expertise": [
      {
        "title": "Emotional & Mental Wellbeing",
        "description": "Helping individuals navigate anxiety, stress, and low mood with evidence-based therapeutic approaches."
      },
      {
        "title": "Personal Growth & Relationships",
        "description": "Supporting personal development, resilience building, and healthier relationships."
      }
    ],
    "articles": [
      {
        "title": "Understanding Anxiety: The Mind, Body, and Why It Feels Real",
        "category": "Anxiety & Stress",
        "readTime": "5 min read",
        "img": "/assets/insight_1.jpg",
        "href": "/articles/understanding-anxiety-mind-body"
      }
    ]
  },
  {
    "id": 2,
    "slug": "bavij-balan",
    "name": "Dr. Bavij Balan",
    "role": "Consultant Psychiatrist",
    "eyebrow": "Consultant Psychiatrist",
    "tagline": "Dedicated practitioner providing evidence-based psychological support at Softmind.",
    "desc": "Dr. Bavij Balan is a Consultant Psychiatrist at Softmind Wellness, offering evidence-based therapeutic care.",
    "img": "/assets/clinicians/clinician_2.jpg",
    "categories": [
      "All",
      "Emotional Wellbeing",
      "Personal & Life Challenges"
    ],
    "experience": "Experienced",
    "experienceSub": "CLINICAL PRACTICE",
    "sessions": "1000+",
    "sessionsSub": "SESSIONS CONDUCTED",
    "license": "Licensed Practitioner",
    "licenseSub": "QUALIFIED CARE",
    "aboutParagraphs": [
      "Dr. Bavij Balan is an experienced mental health professional serving at Softmind Wellness. Providing compassionate, confidential, and evidence-based psychological care.",
      "Areas of focus include psychological counselling, evidence-based psychotherapies, and helping individuals navigate emotional and personal challenges.",
      "Committed to supporting clients with clinical excellence, empathy, and practical guidance."
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/softmindindia",
      "facebook": "https://facebook.com/softmindindia"
    },
    "languages": [
      "English",
      "Malayalam"
    ],
    "quote": "Empowering Minds. Healing Hearts. Enabling Better Life.",
    "quoteAuthor": "- Dr. Bavij Balan",
    "expertise": [
      {
        "title": "Emotional & Mental Wellbeing",
        "description": "Helping individuals navigate anxiety, stress, and low mood with evidence-based therapeutic approaches."
      },
      {
        "title": "Personal Growth & Relationships",
        "description": "Supporting personal development, resilience building, and healthier relationships."
      }
    ],
    "articles": []
  },
  {
    "id": 3,
    "slug": "nishma",
    "name": "Nishma",
    "role": "Consultant Psychologist",
    "eyebrow": "Consultant Psychologist",
    "tagline": "Dedicated practitioner providing evidence-based psychological support at Softmind.",
    "desc": "Nishma is a Consultant Psychologist at Softmind Wellness, offering evidence-based therapeutic care.",
    "img": "/assets/clinicians/clinician_3.jpg",
    "categories": [
      "All",
      "Emotional Wellbeing",
      "Personal & Life Challenges"
    ],
    "experience": "Experienced",
    "experienceSub": "CLINICAL PRACTICE",
    "sessions": "1000+",
    "sessionsSub": "SESSIONS CONDUCTED",
    "license": "Licensed Practitioner",
    "licenseSub": "QUALIFIED CARE",
    "aboutParagraphs": [
      "Nishma is an experienced mental health professional serving at Softmind Wellness. Providing compassionate, confidential, and evidence-based psychological care.",
      "Areas of focus include psychological counselling, evidence-based psychotherapies, and helping individuals navigate emotional and personal challenges.",
      "Committed to supporting clients with clinical excellence, empathy, and practical guidance."
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/softmindindia",
      "facebook": "https://facebook.com/softmindindia"
    },
    "languages": [
      "English",
      "Malayalam"
    ],
    "quote": "Empowering Minds. Healing Hearts. Enabling Better Life.",
    "quoteAuthor": "- Nishma",
    "expertise": [
      {
        "title": "Emotional & Mental Wellbeing",
        "description": "Helping individuals navigate anxiety, stress, and low mood with evidence-based therapeutic approaches."
      },
      {
        "title": "Personal Growth & Relationships",
        "description": "Supporting personal development, resilience building, and healthier relationships."
      }
    ],
    "articles": []
  },
  {
    "id": 4,
    "slug": "afreen",
    "name": "Afreen M. Duste",
    "role": "Psychologist (Clinical)",
    "eyebrow": "Psychologist (Clinical)",
    "tagline": "Dedicated practitioner providing evidence-based psychological support at Softmind.",
    "desc": "Afreen M. Duste is a Psychologist (Clinical) at Softmind Wellness, offering evidence-based therapeutic care.",
    "img": "/assets/clinicians/clinician_4.jpg",
    "categories": [
      "All",
      "Emotional Wellbeing",
      "Personal & Life Challenges"
    ],
    "experience": "Experienced",
    "experienceSub": "CLINICAL PRACTICE",
    "sessions": "1000+",
    "sessionsSub": "SESSIONS CONDUCTED",
    "license": "Member of American Psychological Association (as stated)",
    "licenseSub": "QUALIFIED CARE",
    "aboutParagraphs": [
      "Afreen M. Duste is an experienced mental health professional serving at Softmind Wellness. Providing compassionate, confidential, and evidence-based psychological care.",
      "Areas of focus include psychological counselling, evidence-based psychotherapies, and helping individuals navigate emotional and personal challenges.",
      "Committed to supporting clients with clinical excellence, empathy, and practical guidance."
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/softmindindia",
      "facebook": "https://facebook.com/softmindindia"
    },
    "languages": [
      "English",
      "Malayalam"
    ],
    "quote": "Empowering Minds. Healing Hearts. Enabling Better Life.",
    "quoteAuthor": "- Afreen M. Duste",
    "expertise": [
      {
        "title": "Emotional & Mental Wellbeing",
        "description": "Helping individuals navigate anxiety, stress, and low mood with evidence-based therapeutic approaches."
      },
      {
        "title": "Personal Growth & Relationships",
        "description": "Supporting personal development, resilience building, and healthier relationships."
      }
    ],
    "articles": []
  },
  {
    "id": 5,
    "slug": "jalita-james",
    "name": "Jalita James",
    "role": "Clinical Psychologist",
    "eyebrow": "Clinical Psychologist",
    "tagline": "Dedicated practitioner providing evidence-based psychological support at Softmind.",
    "desc": "Jalita James is a Clinical Psychologist at Softmind Wellness, offering evidence-based therapeutic care.",
    "img": "/assets/clinicians/clinician_5.jpg",
    "categories": [
      "All",
      "Emotional Wellbeing",
      "Personal & Life Challenges"
    ],
    "experience": "Experienced",
    "experienceSub": "CLINICAL PRACTICE",
    "sessions": "1000+",
    "sessionsSub": "SESSIONS CONDUCTED",
    "license": "Licensed Practitioner",
    "licenseSub": "QUALIFIED CARE",
    "aboutParagraphs": [
      "Jalita James is an experienced mental health professional serving at Softmind Wellness. Providing compassionate, confidential, and evidence-based psychological care.",
      "Areas of focus include psychological counselling, evidence-based psychotherapies, and helping individuals navigate emotional and personal challenges.",
      "Committed to supporting clients with clinical excellence, empathy, and practical guidance."
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/softmindindia",
      "facebook": "https://facebook.com/softmindindia"
    },
    "languages": [
      "English",
      "Malayalam"
    ],
    "quote": "Empowering Minds. Healing Hearts. Enabling Better Life.",
    "quoteAuthor": "- Jalita James",
    "expertise": [
      {
        "title": "Emotional & Mental Wellbeing",
        "description": "Helping individuals navigate anxiety, stress, and low mood with evidence-based therapeutic approaches."
      },
      {
        "title": "Personal Growth & Relationships",
        "description": "Supporting personal development, resilience building, and healthier relationships."
      }
    ],
    "articles": []
  },
  {
    "id": 6,
    "slug": "keerthana-chandran",
    "name": "Keerthana Chandran",
    "role": "Clinical Psychologist",
    "eyebrow": "Clinical Psychologist",
    "tagline": "Dedicated practitioner providing evidence-based psychological support at Softmind.",
    "desc": "Keerthana Chandran is a Clinical Psychologist at Softmind Wellness, offering evidence-based therapeutic care.",
    "img": "/assets/clinicians/clinician_6.jpg",
    "categories": [
      "All",
      "Emotional Wellbeing",
      "Personal & Life Challenges"
    ],
    "experience": "Experienced",
    "experienceSub": "CLINICAL PRACTICE",
    "sessions": "1000+",
    "sessionsSub": "SESSIONS CONDUCTED",
    "license": "Licensed Practitioner",
    "licenseSub": "QUALIFIED CARE",
    "aboutParagraphs": [
      "Keerthana Chandran is an experienced mental health professional serving at Softmind Wellness. Providing compassionate, confidential, and evidence-based psychological care.",
      "Areas of focus include psychological counselling, evidence-based psychotherapies, and helping individuals navigate emotional and personal challenges.",
      "Committed to supporting clients with clinical excellence, empathy, and practical guidance."
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/softmindindia",
      "facebook": "https://facebook.com/softmindindia"
    },
    "languages": [
      "English",
      "Malayalam"
    ],
    "quote": "Empowering Minds. Healing Hearts. Enabling Better Life.",
    "quoteAuthor": "- Keerthana Chandran",
    "expertise": [
      {
        "title": "Emotional & Mental Wellbeing",
        "description": "Helping individuals navigate anxiety, stress, and low mood with evidence-based therapeutic approaches."
      },
      {
        "title": "Personal Growth & Relationships",
        "description": "Supporting personal development, resilience building, and healthier relationships."
      }
    ],
    "articles": []
  },
  {
    "id": 7,
    "slug": "kripa-xavier",
    "name": "Kripa Xavier",
    "role": "Consultant Psychologist",
    "eyebrow": "Consultant Psychologist",
    "tagline": "Dedicated practitioner providing evidence-based psychological support at Softmind.",
    "desc": "Kripa Xavier is a Consultant Psychologist at Softmind Wellness, offering evidence-based therapeutic care.",
    "img": "/assets/clinicians/clinician_7.jpg",
    "categories": [
      "All",
      "Emotional Wellbeing",
      "Personal & Life Challenges"
    ],
    "experience": "Experienced",
    "experienceSub": "CLINICAL PRACTICE",
    "sessions": "1000+",
    "sessionsSub": "SESSIONS CONDUCTED",
    "license": "Licensed Practitioner",
    "licenseSub": "QUALIFIED CARE",
    "aboutParagraphs": [
      "Kripa Xavier is an experienced mental health professional serving at Softmind Wellness. Providing compassionate, confidential, and evidence-based psychological care.",
      "Areas of focus include psychological counselling, evidence-based psychotherapies, and helping individuals navigate emotional and personal challenges.",
      "Committed to supporting clients with clinical excellence, empathy, and practical guidance."
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/softmindindia",
      "facebook": "https://facebook.com/softmindindia"
    },
    "languages": [
      "English",
      "Malayalam"
    ],
    "quote": "Empowering Minds. Healing Hearts. Enabling Better Life.",
    "quoteAuthor": "- Kripa Xavier",
    "expertise": [
      {
        "title": "Emotional & Mental Wellbeing",
        "description": "Helping individuals navigate anxiety, stress, and low mood with evidence-based therapeutic approaches."
      },
      {
        "title": "Personal Growth & Relationships",
        "description": "Supporting personal development, resilience building, and healthier relationships."
      }
    ],
    "articles": []
  },
  {
    "id": 8,
    "slug": "reshma-ramesh",
    "name": "Reshma Ramesh",
    "role": "Consultant Psychologist",
    "eyebrow": "Consultant Psychologist",
    "tagline": "Dedicated practitioner providing evidence-based psychological support at Softmind.",
    "desc": "Reshma Ramesh is a Consultant Psychologist at Softmind Wellness, offering evidence-based therapeutic care.",
    "img": "/assets/clinicians/clinician_8.jpg",
    "categories": [
      "All",
      "Emotional Wellbeing",
      "Personal & Life Challenges"
    ],
    "experience": "Experienced",
    "experienceSub": "CLINICAL PRACTICE",
    "sessions": "1000+",
    "sessionsSub": "SESSIONS CONDUCTED",
    "license": "Licensed Practitioner",
    "licenseSub": "QUALIFIED CARE",
    "aboutParagraphs": [
      "Reshma Ramesh is an experienced mental health professional serving at Softmind Wellness. Providing compassionate, confidential, and evidence-based psychological care.",
      "Areas of focus include psychological counselling, evidence-based psychotherapies, and helping individuals navigate emotional and personal challenges.",
      "Committed to supporting clients with clinical excellence, empathy, and practical guidance."
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/softmindindia",
      "facebook": "https://facebook.com/softmindindia"
    },
    "languages": [
      "English",
      "Malayalam"
    ],
    "quote": "Empowering Minds. Healing Hearts. Enabling Better Life.",
    "quoteAuthor": "- Reshma Ramesh",
    "expertise": [
      {
        "title": "Emotional & Mental Wellbeing",
        "description": "Helping individuals navigate anxiety, stress, and low mood with evidence-based therapeutic approaches."
      },
      {
        "title": "Personal Growth & Relationships",
        "description": "Supporting personal development, resilience building, and healthier relationships."
      }
    ],
    "articles": []
  },
  {
    "id": 9,
    "slug": "nayana-kurian",
    "name": "Nayana Kurian",
    "role": "Clinical Psychologist",
    "eyebrow": "Clinical Psychologist",
    "tagline": "Dedicated practitioner providing evidence-based psychological support at Softmind.",
    "desc": "Nayana Kurian is a Clinical Psychologist at Softmind Wellness, offering evidence-based therapeutic care.",
    "img": "/assets/clinicians/clinician_1.jpg",
    "categories": [
      "All",
      "Emotional Wellbeing",
      "Personal & Life Challenges"
    ],
    "experience": "Experienced",
    "experienceSub": "CLINICAL PRACTICE",
    "sessions": "1000+",
    "sessionsSub": "SESSIONS CONDUCTED",
    "license": "Licensed Practitioner",
    "licenseSub": "QUALIFIED CARE",
    "aboutParagraphs": [
      "Nayana Kurian is an experienced mental health professional serving at Softmind Wellness. Providing compassionate, confidential, and evidence-based psychological care.",
      "Areas of focus include psychological counselling, evidence-based psychotherapies, and helping individuals navigate emotional and personal challenges.",
      "Committed to supporting clients with clinical excellence, empathy, and practical guidance."
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/softmindindia",
      "facebook": "https://facebook.com/softmindindia"
    },
    "languages": [
      "English",
      "Malayalam"
    ],
    "quote": "Empowering Minds. Healing Hearts. Enabling Better Life.",
    "quoteAuthor": "- Nayana Kurian",
    "expertise": [
      {
        "title": "Emotional & Mental Wellbeing",
        "description": "Helping individuals navigate anxiety, stress, and low mood with evidence-based therapeutic approaches."
      },
      {
        "title": "Personal Growth & Relationships",
        "description": "Supporting personal development, resilience building, and healthier relationships."
      }
    ],
    "articles": []
  },
  {
    "id": 10,
    "slug": "haritha-damodaran",
    "name": "Dr. Haritha Damodaran",
    "role": "Consultant Psychiatrist",
    "eyebrow": "Consultant Psychiatrist",
    "tagline": "Dedicated practitioner providing evidence-based psychological support at Softmind.",
    "desc": "Dr. Haritha Damodaran is a Consultant Psychiatrist at Softmind Wellness, offering evidence-based therapeutic care.",
    "img": "/assets/clinicians/clinician_2.jpg",
    "categories": [
      "All",
      "Emotional Wellbeing",
      "Personal & Life Challenges"
    ],
    "experience": "Experienced",
    "experienceSub": "CLINICAL PRACTICE",
    "sessions": "1000+",
    "sessionsSub": "SESSIONS CONDUCTED",
    "license": "MBBS, MD (Psychiatry)",
    "licenseSub": "QUALIFIED CARE",
    "aboutParagraphs": [
      "Dr. Haritha Damodaran is an experienced mental health professional serving at Softmind Wellness. Providing compassionate, confidential, and evidence-based psychological care.",
      "Areas of focus include psychological counselling, evidence-based psychotherapies, and helping individuals navigate emotional and personal challenges.",
      "Committed to supporting clients with clinical excellence, empathy, and practical guidance."
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/softmindindia",
      "facebook": "https://facebook.com/softmindindia"
    },
    "languages": [
      "English",
      "Malayalam"
    ],
    "quote": "Empowering Minds. Healing Hearts. Enabling Better Life.",
    "quoteAuthor": "- Dr. Haritha Damodaran",
    "expertise": [
      {
        "title": "Emotional & Mental Wellbeing",
        "description": "Helping individuals navigate anxiety, stress, and low mood with evidence-based therapeutic approaches."
      },
      {
        "title": "Personal Growth & Relationships",
        "description": "Supporting personal development, resilience building, and healthier relationships."
      }
    ],
    "articles": []
  },
  {
    "id": 11,
    "slug": "karishma-k-valsan",
    "name": "Karishma K Valsan",
    "role": "Consultant Psychologist",
    "eyebrow": "Consultant Psychologist",
    "tagline": "Dedicated practitioner providing evidence-based psychological support at Softmind.",
    "desc": "Karishma K Valsan is a Consultant Psychologist at Softmind Wellness, offering evidence-based therapeutic care.",
    "img": "/assets/clinicians/clinician_3.jpg",
    "categories": [
      "All",
      "Emotional Wellbeing",
      "Personal & Life Challenges"
    ],
    "experience": "Experienced",
    "experienceSub": "CLINICAL PRACTICE",
    "sessions": "1000+",
    "sessionsSub": "SESSIONS CONDUCTED",
    "license": "Licensed Practitioner",
    "licenseSub": "QUALIFIED CARE",
    "aboutParagraphs": [
      "Karishma K Valsan is an experienced mental health professional serving at Softmind Wellness. Providing compassionate, confidential, and evidence-based psychological care.",
      "Areas of focus include psychological counselling, evidence-based psychotherapies, and helping individuals navigate emotional and personal challenges.",
      "Committed to supporting clients with clinical excellence, empathy, and practical guidance."
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/softmindindia",
      "facebook": "https://facebook.com/softmindindia"
    },
    "languages": [
      "English",
      "Malayalam"
    ],
    "quote": "Empowering Minds. Healing Hearts. Enabling Better Life.",
    "quoteAuthor": "- Karishma K Valsan",
    "expertise": [
      {
        "title": "Emotional & Mental Wellbeing",
        "description": "Helping individuals navigate anxiety, stress, and low mood with evidence-based therapeutic approaches."
      },
      {
        "title": "Personal Growth & Relationships",
        "description": "Supporting personal development, resilience building, and healthier relationships."
      }
    ],
    "articles": []
  },
  {
    "id": 12,
    "slug": "albin-thomas",
    "name": "Albin Thomas",
    "role": "Psychotherapist",
    "eyebrow": "Psychotherapist",
    "tagline": "Dedicated practitioner providing evidence-based psychological support at Softmind.",
    "desc": "Albin Thomas is a Psychotherapist at Softmind Wellness, offering evidence-based therapeutic care.",
    "img": "/assets/clinicians/clinician_4.jpg",
    "categories": [
      "All",
      "Emotional Wellbeing",
      "Personal & Life Challenges"
    ],
    "experience": "Experienced",
    "experienceSub": "CLINICAL PRACTICE",
    "sessions": "1000+",
    "sessionsSub": "SESSIONS CONDUCTED",
    "license": "Licensed Practitioner",
    "licenseSub": "QUALIFIED CARE",
    "aboutParagraphs": [
      "Albin Thomas is an experienced mental health professional serving at Softmind Wellness. Providing compassionate, confidential, and evidence-based psychological care.",
      "Areas of focus include psychological counselling, evidence-based psychotherapies, and helping individuals navigate emotional and personal challenges.",
      "Committed to supporting clients with clinical excellence, empathy, and practical guidance."
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/softmindindia",
      "facebook": "https://facebook.com/softmindindia"
    },
    "languages": [
      "English",
      "Malayalam"
    ],
    "quote": "Empowering Minds. Healing Hearts. Enabling Better Life.",
    "quoteAuthor": "- Albin Thomas",
    "expertise": [
      {
        "title": "Emotional & Mental Wellbeing",
        "description": "Helping individuals navigate anxiety, stress, and low mood with evidence-based therapeutic approaches."
      },
      {
        "title": "Personal Growth & Relationships",
        "description": "Supporting personal development, resilience building, and healthier relationships."
      }
    ],
    "articles": []
  },
  {
    "id": 13,
    "slug": "jis-joy",
    "name": "Jis Joy",
    "role": "Consultant Psychologist",
    "eyebrow": "Consultant Psychologist",
    "tagline": "Dedicated practitioner providing evidence-based psychological support at Softmind.",
    "desc": "Jis Joy is a Consultant Psychologist at Softmind Wellness, offering evidence-based therapeutic care.",
    "img": "/assets/clinicians/clinician_5.jpg",
    "categories": [
      "All",
      "Emotional Wellbeing",
      "Personal & Life Challenges"
    ],
    "experience": "Experienced",
    "experienceSub": "CLINICAL PRACTICE",
    "sessions": "1000+",
    "sessionsSub": "SESSIONS CONDUCTED",
    "license": "Licensed Practitioner",
    "licenseSub": "QUALIFIED CARE",
    "aboutParagraphs": [
      "Jis Joy is an experienced mental health professional serving at Softmind Wellness. Providing compassionate, confidential, and evidence-based psychological care.",
      "Areas of focus include psychological counselling, evidence-based psychotherapies, and helping individuals navigate emotional and personal challenges.",
      "Committed to supporting clients with clinical excellence, empathy, and practical guidance."
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/softmindindia",
      "facebook": "https://facebook.com/softmindindia"
    },
    "languages": [
      "English",
      "Malayalam"
    ],
    "quote": "Empowering Minds. Healing Hearts. Enabling Better Life.",
    "quoteAuthor": "- Jis Joy",
    "expertise": [
      {
        "title": "Emotional & Mental Wellbeing",
        "description": "Helping individuals navigate anxiety, stress, and low mood with evidence-based therapeutic approaches."
      },
      {
        "title": "Personal Growth & Relationships",
        "description": "Supporting personal development, resilience building, and healthier relationships."
      }
    ],
    "articles": []
  },
  {
    "id": 14,
    "slug": "ashly-joshy",
    "name": "Ashly Joshy",
    "role": "Psychotherapist",
    "eyebrow": "Psychotherapist",
    "tagline": "Dedicated practitioner providing evidence-based psychological support at Softmind.",
    "desc": "Ashly Joshy is a Psychotherapist at Softmind Wellness, offering evidence-based therapeutic care.",
    "img": "/assets/clinicians/clinician_6.jpg",
    "categories": [
      "All",
      "Emotional Wellbeing",
      "Personal & Life Challenges"
    ],
    "experience": "Experienced",
    "experienceSub": "CLINICAL PRACTICE",
    "sessions": "1000+",
    "sessionsSub": "SESSIONS CONDUCTED",
    "license": "Licensed Practitioner",
    "licenseSub": "QUALIFIED CARE",
    "aboutParagraphs": [
      "Ashly Joshy is an experienced mental health professional serving at Softmind Wellness. Providing compassionate, confidential, and evidence-based psychological care.",
      "Areas of focus include psychological counselling, evidence-based psychotherapies, and helping individuals navigate emotional and personal challenges.",
      "Committed to supporting clients with clinical excellence, empathy, and practical guidance."
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/softmindindia",
      "facebook": "https://facebook.com/softmindindia"
    },
    "languages": [
      "English",
      "Malayalam"
    ],
    "quote": "Empowering Minds. Healing Hearts. Enabling Better Life.",
    "quoteAuthor": "- Ashly Joshy",
    "expertise": [
      {
        "title": "Emotional & Mental Wellbeing",
        "description": "Helping individuals navigate anxiety, stress, and low mood with evidence-based therapeutic approaches."
      },
      {
        "title": "Personal Growth & Relationships",
        "description": "Supporting personal development, resilience building, and healthier relationships."
      }
    ],
    "articles": []
  },
  {
    "id": 15,
    "slug": "hamna",
    "name": "Hamna",
    "role": "Clinical Psychologist",
    "eyebrow": "Clinical Psychologist",
    "tagline": "Dedicated practitioner providing evidence-based psychological support at Softmind.",
    "desc": "Hamna is a Clinical Psychologist at Softmind Wellness, offering evidence-based therapeutic care.",
    "img": "/assets/clinicians/clinician_7.jpg",
    "categories": [
      "All",
      "Emotional Wellbeing",
      "Personal & Life Challenges"
    ],
    "experience": "Experienced",
    "experienceSub": "CLINICAL PRACTICE",
    "sessions": "1000+",
    "sessionsSub": "SESSIONS CONDUCTED",
    "license": "Licensed Practitioner",
    "licenseSub": "QUALIFIED CARE",
    "aboutParagraphs": [
      "Hamna is an experienced mental health professional serving at Softmind Wellness. Providing compassionate, confidential, and evidence-based psychological care.",
      "Areas of focus include psychological counselling, evidence-based psychotherapies, and helping individuals navigate emotional and personal challenges.",
      "Committed to supporting clients with clinical excellence, empathy, and practical guidance."
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/softmindindia",
      "facebook": "https://facebook.com/softmindindia"
    },
    "languages": [
      "English",
      "Malayalam"
    ],
    "quote": "Empowering Minds. Healing Hearts. Enabling Better Life.",
    "quoteAuthor": "- Hamna",
    "expertise": [
      {
        "title": "Emotional & Mental Wellbeing",
        "description": "Helping individuals navigate anxiety, stress, and low mood with evidence-based therapeutic approaches."
      },
      {
        "title": "Personal Growth & Relationships",
        "description": "Supporting personal development, resilience building, and healthier relationships."
      }
    ],
    "articles": []
  },
  {
    "id": 16,
    "slug": "hashim-abdul-salam",
    "name": "Hashim Abdul Salam",
    "role": "Consultant Psychologist",
    "eyebrow": "Consultant Psychologist",
    "tagline": "Dedicated practitioner providing evidence-based psychological support at Softmind.",
    "desc": "Hashim Abdul Salam is a Consultant Psychologist at Softmind Wellness, offering evidence-based therapeutic care.",
    "img": "/assets/clinicians/clinician_8.jpg",
    "categories": [
      "All",
      "Emotional Wellbeing",
      "Personal & Life Challenges"
    ],
    "experience": "Experienced",
    "experienceSub": "CLINICAL PRACTICE",
    "sessions": "1000+",
    "sessionsSub": "SESSIONS CONDUCTED",
    "license": "Licensed Practitioner",
    "licenseSub": "QUALIFIED CARE",
    "aboutParagraphs": [
      "Hashim Abdul Salam is an experienced mental health professional serving at Softmind Wellness. Providing compassionate, confidential, and evidence-based psychological care.",
      "Areas of focus include psychological counselling, evidence-based psychotherapies, and helping individuals navigate emotional and personal challenges.",
      "Committed to supporting clients with clinical excellence, empathy, and practical guidance."
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/softmindindia",
      "facebook": "https://facebook.com/softmindindia"
    },
    "languages": [
      "English",
      "Malayalam"
    ],
    "quote": "Empowering Minds. Healing Hearts. Enabling Better Life.",
    "quoteAuthor": "- Hashim Abdul Salam",
    "expertise": [
      {
        "title": "Emotional & Mental Wellbeing",
        "description": "Helping individuals navigate anxiety, stress, and low mood with evidence-based therapeutic approaches."
      },
      {
        "title": "Personal Growth & Relationships",
        "description": "Supporting personal development, resilience building, and healthier relationships."
      }
    ],
    "articles": []
  },
  {
    "id": 17,
    "slug": "naveen",
    "name": "Naveen",
    "role": "Consultant Psychologist",
    "eyebrow": "Consultant Psychologist",
    "tagline": "Dedicated practitioner providing evidence-based psychological support at Softmind.",
    "desc": "Naveen is a Consultant Psychologist at Softmind Wellness, offering evidence-based therapeutic care.",
    "img": "/assets/clinicians/clinician_1.jpg",
    "categories": [
      "All",
      "Emotional Wellbeing",
      "Personal & Life Challenges"
    ],
    "experience": "Experienced",
    "experienceSub": "CLINICAL PRACTICE",
    "sessions": "1000+",
    "sessionsSub": "SESSIONS CONDUCTED",
    "license": "Licensed Practitioner",
    "licenseSub": "QUALIFIED CARE",
    "aboutParagraphs": [
      "Naveen is an experienced mental health professional serving at Softmind Wellness. Providing compassionate, confidential, and evidence-based psychological care.",
      "Areas of focus include psychological counselling, evidence-based psychotherapies, and helping individuals navigate emotional and personal challenges.",
      "Committed to supporting clients with clinical excellence, empathy, and practical guidance."
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/softmindindia",
      "facebook": "https://facebook.com/softmindindia"
    },
    "languages": [
      "English",
      "Malayalam"
    ],
    "quote": "Empowering Minds. Healing Hearts. Enabling Better Life.",
    "quoteAuthor": "- Naveen",
    "expertise": [
      {
        "title": "Emotional & Mental Wellbeing",
        "description": "Helping individuals navigate anxiety, stress, and low mood with evidence-based therapeutic approaches."
      },
      {
        "title": "Personal Growth & Relationships",
        "description": "Supporting personal development, resilience building, and healthier relationships."
      }
    ],
    "articles": []
  },
  {
    "id": 18,
    "slug": "manikandan",
    "name": "Manikandan K A",
    "role": "Counselling Psychologist",
    "eyebrow": "Counselling Psychologist",
    "tagline": "Dedicated practitioner providing evidence-based psychological support at Softmind.",
    "desc": "Manikandan K A is a Counselling Psychologist at Softmind Wellness, offering evidence-based therapeutic care.",
    "img": "/assets/clinicians/clinician_2.jpg",
    "categories": [
      "All",
      "Emotional Wellbeing",
      "Personal & Life Challenges"
    ],
    "experience": "Experienced",
    "experienceSub": "CLINICAL PRACTICE",
    "sessions": "1000+",
    "sessionsSub": "SESSIONS CONDUCTED",
    "license": "Licensed Practitioner",
    "licenseSub": "QUALIFIED CARE",
    "aboutParagraphs": [
      "Manikandan K A is an experienced mental health professional serving at Softmind Wellness. Providing compassionate, confidential, and evidence-based psychological care.",
      "Areas of focus include psychological counselling, evidence-based psychotherapies, and helping individuals navigate emotional and personal challenges.",
      "Committed to supporting clients with clinical excellence, empathy, and practical guidance."
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/softmindindia",
      "facebook": "https://facebook.com/softmindindia"
    },
    "languages": [
      "English",
      "Malayalam"
    ],
    "quote": "Empowering Minds. Healing Hearts. Enabling Better Life.",
    "quoteAuthor": "- Manikandan K A",
    "expertise": [
      {
        "title": "Emotional & Mental Wellbeing",
        "description": "Helping individuals navigate anxiety, stress, and low mood with evidence-based therapeutic approaches."
      },
      {
        "title": "Personal Growth & Relationships",
        "description": "Supporting personal development, resilience building, and healthier relationships."
      }
    ],
    "articles": []
  },
  {
    "id": 19,
    "slug": "tehmina-asif",
    "name": "Dr. Tehmina Asif",
    "role": "Psychiatrist (listed as \"Consultant Psychiatrist\")",
    "eyebrow": "Psychiatrist (listed as \"Consultant Psychiatrist\")",
    "tagline": "Dedicated practitioner providing evidence-based psychological support at Softmind.",
    "desc": "Dr. Tehmina Asif is a Psychiatrist (listed as \"Consultant Psychiatrist\") at Softmind Wellness, offering evidence-based therapeutic care.",
    "img": "/assets/clinicians/clinician_3.jpg",
    "categories": [
      "All",
      "Emotional Wellbeing",
      "Personal & Life Challenges"
    ],
    "experience": "Experienced",
    "experienceSub": "CLINICAL PRACTICE",
    "sessions": "1000+",
    "sessionsSub": "SESSIONS CONDUCTED",
    "license": "Licensed Practitioner",
    "licenseSub": "QUALIFIED CARE",
    "aboutParagraphs": [
      "Dr. Tehmina Asif is an experienced mental health professional serving at Softmind Wellness. Providing compassionate, confidential, and evidence-based psychological care.",
      "Areas of focus include psychological counselling, evidence-based psychotherapies, and helping individuals navigate emotional and personal challenges.",
      "Committed to supporting clients with clinical excellence, empathy, and practical guidance."
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/softmindindia",
      "facebook": "https://facebook.com/softmindindia"
    },
    "languages": [
      "English",
      "Malayalam"
    ],
    "quote": "Empowering Minds. Healing Hearts. Enabling Better Life.",
    "quoteAuthor": "- Dr. Tehmina Asif",
    "expertise": [
      {
        "title": "Emotional & Mental Wellbeing",
        "description": "Helping individuals navigate anxiety, stress, and low mood with evidence-based therapeutic approaches."
      },
      {
        "title": "Personal Growth & Relationships",
        "description": "Supporting personal development, resilience building, and healthier relationships."
      }
    ],
    "articles": []
  },
  {
    "id": 20,
    "slug": "anly-chandy",
    "name": "Anly Chandy",
    "role": "Consultant Psychologist & Psychotherapist",
    "eyebrow": "Consultant Psychologist & Psychotherapist",
    "tagline": "Dedicated practitioner providing evidence-based psychological support at Softmind.",
    "desc": "Anly Chandy is a Consultant Psychologist & Psychotherapist at Softmind Wellness, offering evidence-based therapeutic care.",
    "img": "/assets/clinicians/clinician_4.jpg",
    "categories": [
      "All",
      "Emotional Wellbeing",
      "Personal & Life Challenges"
    ],
    "experience": "Experienced",
    "experienceSub": "CLINICAL PRACTICE",
    "sessions": "1000+",
    "sessionsSub": "SESSIONS CONDUCTED",
    "license": "Licensed Practitioner",
    "licenseSub": "QUALIFIED CARE",
    "aboutParagraphs": [
      "Anly Chandy is an experienced mental health professional serving at Softmind Wellness. Providing compassionate, confidential, and evidence-based psychological care.",
      "Areas of focus include psychological counselling, evidence-based psychotherapies, and helping individuals navigate emotional and personal challenges.",
      "Committed to supporting clients with clinical excellence, empathy, and practical guidance."
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/softmindindia",
      "facebook": "https://facebook.com/softmindindia"
    },
    "languages": [
      "English",
      "Malayalam"
    ],
    "quote": "Empowering Minds. Healing Hearts. Enabling Better Life.",
    "quoteAuthor": "- Anly Chandy",
    "expertise": [
      {
        "title": "Emotional & Mental Wellbeing",
        "description": "Helping individuals navigate anxiety, stress, and low mood with evidence-based therapeutic approaches."
      },
      {
        "title": "Personal Growth & Relationships",
        "description": "Supporting personal development, resilience building, and healthier relationships."
      }
    ],
    "articles": []
  },
  {
    "id": 21,
    "slug": "ramakrishnan-kv",
    "name": "Ramakrishnan K V",
    "role": "Psychotherapist",
    "eyebrow": "Psychotherapist",
    "tagline": "Dedicated practitioner providing evidence-based psychological support at Softmind.",
    "desc": "Ramakrishnan K V is a Psychotherapist at Softmind Wellness, offering evidence-based therapeutic care.",
    "img": "/assets/clinicians/clinician_5.jpg",
    "categories": [
      "All",
      "Emotional Wellbeing",
      "Personal & Life Challenges"
    ],
    "experience": "Experienced",
    "experienceSub": "CLINICAL PRACTICE",
    "sessions": "1000+",
    "sessionsSub": "SESSIONS CONDUCTED",
    "license": "Licensed Practitioner",
    "licenseSub": "QUALIFIED CARE",
    "aboutParagraphs": [
      "Ramakrishnan K V is an experienced mental health professional serving at Softmind Wellness. Providing compassionate, confidential, and evidence-based psychological care.",
      "Areas of focus include psychological counselling, evidence-based psychotherapies, and helping individuals navigate emotional and personal challenges.",
      "Committed to supporting clients with clinical excellence, empathy, and practical guidance."
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/softmindindia",
      "facebook": "https://facebook.com/softmindindia"
    },
    "languages": [
      "English",
      "Malayalam"
    ],
    "quote": "Empowering Minds. Healing Hearts. Enabling Better Life.",
    "quoteAuthor": "- Ramakrishnan K V",
    "expertise": [
      {
        "title": "Emotional & Mental Wellbeing",
        "description": "Helping individuals navigate anxiety, stress, and low mood with evidence-based therapeutic approaches."
      },
      {
        "title": "Personal Growth & Relationships",
        "description": "Supporting personal development, resilience building, and healthier relationships."
      }
    ],
    "articles": []
  },
  {
    "id": 22,
    "slug": "anju",
    "name": "Anju",
    "role": "Psychologist (Kakkanad)",
    "eyebrow": "Psychologist (Kakkanad)",
    "tagline": "Dedicated practitioner providing evidence-based psychological support at Softmind.",
    "desc": "Anju is a Psychologist (Kakkanad) at Softmind Wellness, offering evidence-based therapeutic care.",
    "img": "/assets/clinicians/clinician_6.jpg",
    "categories": [
      "All",
      "Emotional Wellbeing",
      "Personal & Life Challenges"
    ],
    "experience": "Experienced",
    "experienceSub": "CLINICAL PRACTICE",
    "sessions": "1000+",
    "sessionsSub": "SESSIONS CONDUCTED",
    "license": "Licensed Practitioner",
    "licenseSub": "QUALIFIED CARE",
    "aboutParagraphs": [
      "Anju is an experienced mental health professional serving at Softmind Wellness. Providing compassionate, confidential, and evidence-based psychological care.",
      "Areas of focus include psychological counselling, evidence-based psychotherapies, and helping individuals navigate emotional and personal challenges.",
      "Committed to supporting clients with clinical excellence, empathy, and practical guidance."
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/softmindindia",
      "facebook": "https://facebook.com/softmindindia"
    },
    "languages": [
      "English",
      "Malayalam"
    ],
    "quote": "Empowering Minds. Healing Hearts. Enabling Better Life.",
    "quoteAuthor": "- Anju",
    "expertise": [
      {
        "title": "Emotional & Mental Wellbeing",
        "description": "Helping individuals navigate anxiety, stress, and low mood with evidence-based therapeutic approaches."
      },
      {
        "title": "Personal Growth & Relationships",
        "description": "Supporting personal development, resilience building, and healthier relationships."
      }
    ],
    "articles": []
  },
  {
    "id": 23,
    "slug": "sruthi",
    "name": "Sruthi",
    "role": "Consultant Psychologist (Thrissur)",
    "eyebrow": "Consultant Psychologist (Thrissur)",
    "tagline": "Dedicated practitioner providing evidence-based psychological support at Softmind.",
    "desc": "Sruthi is a Consultant Psychologist (Thrissur) at Softmind Wellness, offering evidence-based therapeutic care.",
    "img": "/assets/clinicians/clinician_7.jpg",
    "categories": [
      "All",
      "Emotional Wellbeing",
      "Personal & Life Challenges"
    ],
    "experience": "Experienced",
    "experienceSub": "CLINICAL PRACTICE",
    "sessions": "1000+",
    "sessionsSub": "SESSIONS CONDUCTED",
    "license": "Licensed Practitioner",
    "licenseSub": "QUALIFIED CARE",
    "aboutParagraphs": [
      "Sruthi is an experienced mental health professional serving at Softmind Wellness. Providing compassionate, confidential, and evidence-based psychological care.",
      "Areas of focus include psychological counselling, evidence-based psychotherapies, and helping individuals navigate emotional and personal challenges.",
      "Committed to supporting clients with clinical excellence, empathy, and practical guidance."
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/softmindindia",
      "facebook": "https://facebook.com/softmindindia"
    },
    "languages": [
      "English",
      "Malayalam"
    ],
    "quote": "Empowering Minds. Healing Hearts. Enabling Better Life.",
    "quoteAuthor": "- Sruthi",
    "expertise": [
      {
        "title": "Emotional & Mental Wellbeing",
        "description": "Helping individuals navigate anxiety, stress, and low mood with evidence-based therapeutic approaches."
      },
      {
        "title": "Personal Growth & Relationships",
        "description": "Supporting personal development, resilience building, and healthier relationships."
      }
    ],
    "articles": []
  },
  {
    "id": 24,
    "slug": "srithila",
    "name": "Srithila",
    "role": "Clinical Psychologist (Thrissur)",
    "eyebrow": "Clinical Psychologist (Thrissur)",
    "tagline": "Dedicated practitioner providing evidence-based psychological support at Softmind.",
    "desc": "Srithila is a Clinical Psychologist (Thrissur) at Softmind Wellness, offering evidence-based therapeutic care.",
    "img": "/assets/clinicians/clinician_8.jpg",
    "categories": [
      "All",
      "Emotional Wellbeing",
      "Personal & Life Challenges"
    ],
    "experience": "Experienced",
    "experienceSub": "CLINICAL PRACTICE",
    "sessions": "1000+",
    "sessionsSub": "SESSIONS CONDUCTED",
    "license": "Licensed Practitioner",
    "licenseSub": "QUALIFIED CARE",
    "aboutParagraphs": [
      "Srithila is an experienced mental health professional serving at Softmind Wellness. Providing compassionate, confidential, and evidence-based psychological care.",
      "Areas of focus include psychological counselling, evidence-based psychotherapies, and helping individuals navigate emotional and personal challenges.",
      "Committed to supporting clients with clinical excellence, empathy, and practical guidance."
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/softmindindia",
      "facebook": "https://facebook.com/softmindindia"
    },
    "languages": [
      "English",
      "Malayalam"
    ],
    "quote": "Empowering Minds. Healing Hearts. Enabling Better Life.",
    "quoteAuthor": "- Srithila",
    "expertise": [
      {
        "title": "Emotional & Mental Wellbeing",
        "description": "Helping individuals navigate anxiety, stress, and low mood with evidence-based therapeutic approaches."
      },
      {
        "title": "Personal Growth & Relationships",
        "description": "Supporting personal development, resilience building, and healthier relationships."
      }
    ],
    "articles": []
  },
  {
    "id": 25,
    "slug": "jisiya",
    "name": "Jisiya",
    "role": "Counselling Psychologist (Thrissur)",
    "eyebrow": "Counselling Psychologist (Thrissur)",
    "tagline": "Dedicated practitioner providing evidence-based psychological support at Softmind.",
    "desc": "Jisiya is a Counselling Psychologist (Thrissur) at Softmind Wellness, offering evidence-based therapeutic care.",
    "img": "/assets/clinicians/clinician_1.jpg",
    "categories": [
      "All",
      "Emotional Wellbeing",
      "Personal & Life Challenges"
    ],
    "experience": "Experienced",
    "experienceSub": "CLINICAL PRACTICE",
    "sessions": "1000+",
    "sessionsSub": "SESSIONS CONDUCTED",
    "license": "Licensed Practitioner",
    "licenseSub": "QUALIFIED CARE",
    "aboutParagraphs": [
      "Jisiya is an experienced mental health professional serving at Softmind Wellness. Providing compassionate, confidential, and evidence-based psychological care.",
      "Areas of focus include psychological counselling, evidence-based psychotherapies, and helping individuals navigate emotional and personal challenges.",
      "Committed to supporting clients with clinical excellence, empathy, and practical guidance."
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/softmindindia",
      "facebook": "https://facebook.com/softmindindia"
    },
    "languages": [
      "English",
      "Malayalam"
    ],
    "quote": "Empowering Minds. Healing Hearts. Enabling Better Life.",
    "quoteAuthor": "- Jisiya",
    "expertise": [
      {
        "title": "Emotional & Mental Wellbeing",
        "description": "Helping individuals navigate anxiety, stress, and low mood with evidence-based therapeutic approaches."
      },
      {
        "title": "Personal Growth & Relationships",
        "description": "Supporting personal development, resilience building, and healthier relationships."
      }
    ],
    "articles": []
  },
  {
    "id": 26,
    "slug": "gadha",
    "name": "Gadha",
    "role": "Psychologist",
    "eyebrow": "Psychologist",
    "tagline": "Dedicated practitioner providing evidence-based psychological support at Softmind.",
    "desc": "Gadha is a Psychologist at Softmind Wellness, offering evidence-based therapeutic care.",
    "img": "/assets/clinicians/clinician_2.jpg",
    "categories": [
      "All",
      "Emotional Wellbeing",
      "Personal & Life Challenges"
    ],
    "experience": "Experienced",
    "experienceSub": "CLINICAL PRACTICE",
    "sessions": "1000+",
    "sessionsSub": "SESSIONS CONDUCTED",
    "license": "Licensed Practitioner",
    "licenseSub": "QUALIFIED CARE",
    "aboutParagraphs": [
      "Gadha is an experienced mental health professional serving at Softmind Wellness. Providing compassionate, confidential, and evidence-based psychological care.",
      "Areas of focus include psychological counselling, evidence-based psychotherapies, and helping individuals navigate emotional and personal challenges.",
      "Committed to supporting clients with clinical excellence, empathy, and practical guidance."
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/softmindindia",
      "facebook": "https://facebook.com/softmindindia"
    },
    "languages": [
      "English",
      "Malayalam"
    ],
    "quote": "Empowering Minds. Healing Hearts. Enabling Better Life.",
    "quoteAuthor": "- Gadha",
    "expertise": [
      {
        "title": "Emotional & Mental Wellbeing",
        "description": "Helping individuals navigate anxiety, stress, and low mood with evidence-based therapeutic approaches."
      },
      {
        "title": "Personal Growth & Relationships",
        "description": "Supporting personal development, resilience building, and healthier relationships."
      }
    ],
    "articles": []
  },
  {
    "id": 27,
    "slug": "meenakshi",
    "name": "Meenakshi",
    "role": "Psychologist",
    "eyebrow": "Psychologist",
    "tagline": "Dedicated practitioner providing evidence-based psychological support at Softmind.",
    "desc": "Meenakshi is a Psychologist at Softmind Wellness, offering evidence-based therapeutic care.",
    "img": "/assets/clinicians/clinician_3.jpg",
    "categories": [
      "All",
      "Emotional Wellbeing",
      "Personal & Life Challenges"
    ],
    "experience": "Experienced",
    "experienceSub": "CLINICAL PRACTICE",
    "sessions": "1000+",
    "sessionsSub": "SESSIONS CONDUCTED",
    "license": "Licensed Practitioner",
    "licenseSub": "QUALIFIED CARE",
    "aboutParagraphs": [
      "Meenakshi is an experienced mental health professional serving at Softmind Wellness. Providing compassionate, confidential, and evidence-based psychological care.",
      "Areas of focus include psychological counselling, evidence-based psychotherapies, and helping individuals navigate emotional and personal challenges.",
      "Committed to supporting clients with clinical excellence, empathy, and practical guidance."
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/softmindindia",
      "facebook": "https://facebook.com/softmindindia"
    },
    "languages": [
      "English",
      "Malayalam"
    ],
    "quote": "Empowering Minds. Healing Hearts. Enabling Better Life.",
    "quoteAuthor": "- Meenakshi",
    "expertise": [
      {
        "title": "Emotional & Mental Wellbeing",
        "description": "Helping individuals navigate anxiety, stress, and low mood with evidence-based therapeutic approaches."
      },
      {
        "title": "Personal Growth & Relationships",
        "description": "Supporting personal development, resilience building, and healthier relationships."
      }
    ],
    "articles": []
  },
  {
    "id": 28,
    "slug": "lijo-nellickal-jose",
    "name": "Lijo Nellickal Jose",
    "role": "Psychotherapist",
    "eyebrow": "Psychotherapist",
    "tagline": "Dedicated practitioner providing evidence-based psychological support at Softmind.",
    "desc": "Lijo Nellickal Jose is a Psychotherapist at Softmind Wellness, offering evidence-based therapeutic care.",
    "img": "/assets/clinicians/clinician_4.jpg",
    "categories": [
      "All",
      "Emotional Wellbeing",
      "Personal & Life Challenges"
    ],
    "experience": "Experienced",
    "experienceSub": "CLINICAL PRACTICE",
    "sessions": "1000+",
    "sessionsSub": "SESSIONS CONDUCTED",
    "license": "Licensed Practitioner",
    "licenseSub": "QUALIFIED CARE",
    "aboutParagraphs": [
      "Lijo Nellickal Jose is an experienced mental health professional serving at Softmind Wellness. Providing compassionate, confidential, and evidence-based psychological care.",
      "Areas of focus include psychological counselling, evidence-based psychotherapies, and helping individuals navigate emotional and personal challenges.",
      "Committed to supporting clients with clinical excellence, empathy, and practical guidance."
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/softmindindia",
      "facebook": "https://facebook.com/softmindindia"
    },
    "languages": [
      "English",
      "Malayalam"
    ],
    "quote": "Empowering Minds. Healing Hearts. Enabling Better Life.",
    "quoteAuthor": "- Lijo Nellickal Jose",
    "expertise": [
      {
        "title": "Emotional & Mental Wellbeing",
        "description": "Helping individuals navigate anxiety, stress, and low mood with evidence-based therapeutic approaches."
      },
      {
        "title": "Personal Growth & Relationships",
        "description": "Supporting personal development, resilience building, and healthier relationships."
      }
    ],
    "articles": []
  },
  {
    "id": 29,
    "slug": "binusha",
    "name": "Binusha",
    "role": "Psychotherapist",
    "eyebrow": "Psychotherapist",
    "tagline": "Dedicated practitioner providing evidence-based psychological support at Softmind.",
    "desc": "Binusha is a Psychotherapist at Softmind Wellness, offering evidence-based therapeutic care.",
    "img": "/assets/clinicians/clinician_5.jpg",
    "categories": [
      "All",
      "Emotional Wellbeing",
      "Personal & Life Challenges"
    ],
    "experience": "Experienced",
    "experienceSub": "CLINICAL PRACTICE",
    "sessions": "1000+",
    "sessionsSub": "SESSIONS CONDUCTED",
    "license": "Licensed Practitioner",
    "licenseSub": "QUALIFIED CARE",
    "aboutParagraphs": [
      "Binusha is an experienced mental health professional serving at Softmind Wellness. Providing compassionate, confidential, and evidence-based psychological care.",
      "Areas of focus include psychological counselling, evidence-based psychotherapies, and helping individuals navigate emotional and personal challenges.",
      "Committed to supporting clients with clinical excellence, empathy, and practical guidance."
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/softmindindia",
      "facebook": "https://facebook.com/softmindindia"
    },
    "languages": [
      "English",
      "Malayalam"
    ],
    "quote": "Empowering Minds. Healing Hearts. Enabling Better Life.",
    "quoteAuthor": "- Binusha",
    "expertise": [
      {
        "title": "Emotional & Mental Wellbeing",
        "description": "Helping individuals navigate anxiety, stress, and low mood with evidence-based therapeutic approaches."
      },
      {
        "title": "Personal Growth & Relationships",
        "description": "Supporting personal development, resilience building, and healthier relationships."
      }
    ],
    "articles": []
  },
  {
    "id": 30,
    "slug": "gopalakrishnan",
    "name": "Gopalakrishnan",
    "role": "Doctor (role unclear)",
    "eyebrow": "Doctor (role unclear)",
    "tagline": "Dedicated practitioner providing evidence-based psychological support at Softmind.",
    "desc": "Gopalakrishnan is a Doctor (role unclear) at Softmind Wellness, offering evidence-based therapeutic care.",
    "img": "/assets/clinicians/clinician_6.jpg",
    "categories": [
      "All",
      "Emotional Wellbeing",
      "Personal & Life Challenges"
    ],
    "experience": "Experienced",
    "experienceSub": "CLINICAL PRACTICE",
    "sessions": "1000+",
    "sessionsSub": "SESSIONS CONDUCTED",
    "license": "Licensed Practitioner",
    "licenseSub": "QUALIFIED CARE",
    "aboutParagraphs": [
      "Gopalakrishnan is an experienced mental health professional serving at Softmind Wellness. Providing compassionate, confidential, and evidence-based psychological care.",
      "Areas of focus include psychological counselling, evidence-based psychotherapies, and helping individuals navigate emotional and personal challenges.",
      "Committed to supporting clients with clinical excellence, empathy, and practical guidance."
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/softmindindia",
      "facebook": "https://facebook.com/softmindindia"
    },
    "languages": [
      "English",
      "Malayalam"
    ],
    "quote": "Empowering Minds. Healing Hearts. Enabling Better Life.",
    "quoteAuthor": "- Gopalakrishnan",
    "expertise": [
      {
        "title": "Emotional & Mental Wellbeing",
        "description": "Helping individuals navigate anxiety, stress, and low mood with evidence-based therapeutic approaches."
      },
      {
        "title": "Personal Growth & Relationships",
        "description": "Supporting personal development, resilience building, and healthier relationships."
      }
    ],
    "articles": []
  },
  {
    "id": 31,
    "slug": "chandra-mohan",
    "name": "Chandra Mohan",
    "role": "Consultant Psychologist (Calicut)",
    "eyebrow": "Consultant Psychologist (Calicut)",
    "tagline": "Dedicated practitioner providing evidence-based psychological support at Softmind.",
    "desc": "Chandra Mohan is a Consultant Psychologist (Calicut) at Softmind Wellness, offering evidence-based therapeutic care.",
    "img": "/assets/clinicians/clinician_7.jpg",
    "categories": [
      "All",
      "Emotional Wellbeing",
      "Personal & Life Challenges"
    ],
    "experience": "Experienced",
    "experienceSub": "CLINICAL PRACTICE",
    "sessions": "1000+",
    "sessionsSub": "SESSIONS CONDUCTED",
    "license": "Licensed Practitioner",
    "licenseSub": "QUALIFIED CARE",
    "aboutParagraphs": [
      "Chandra Mohan is an experienced mental health professional serving at Softmind Wellness. Providing compassionate, confidential, and evidence-based psychological care.",
      "Areas of focus include psychological counselling, evidence-based psychotherapies, and helping individuals navigate emotional and personal challenges.",
      "Committed to supporting clients with clinical excellence, empathy, and practical guidance."
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/softmindindia",
      "facebook": "https://facebook.com/softmindindia"
    },
    "languages": [
      "English",
      "Malayalam"
    ],
    "quote": "Empowering Minds. Healing Hearts. Enabling Better Life.",
    "quoteAuthor": "- Chandra Mohan",
    "expertise": [
      {
        "title": "Emotional & Mental Wellbeing",
        "description": "Helping individuals navigate anxiety, stress, and low mood with evidence-based therapeutic approaches."
      },
      {
        "title": "Personal Growth & Relationships",
        "description": "Supporting personal development, resilience building, and healthier relationships."
      }
    ],
    "articles": []
  },
  {
    "id": 32,
    "slug": "shahzad",
    "name": "Shahzad",
    "role": "Psychologist & Psychotherapist (Calicut)",
    "eyebrow": "Psychologist & Psychotherapist (Calicut)",
    "tagline": "Dedicated practitioner providing evidence-based psychological support at Softmind.",
    "desc": "Shahzad is a Psychologist & Psychotherapist (Calicut) at Softmind Wellness, offering evidence-based therapeutic care.",
    "img": "/assets/clinicians/clinician_8.jpg",
    "categories": [
      "All",
      "Emotional Wellbeing",
      "Personal & Life Challenges"
    ],
    "experience": "Experienced",
    "experienceSub": "CLINICAL PRACTICE",
    "sessions": "1000+",
    "sessionsSub": "SESSIONS CONDUCTED",
    "license": "Licensed Practitioner",
    "licenseSub": "QUALIFIED CARE",
    "aboutParagraphs": [
      "Shahzad is an experienced mental health professional serving at Softmind Wellness. Providing compassionate, confidential, and evidence-based psychological care.",
      "Areas of focus include psychological counselling, evidence-based psychotherapies, and helping individuals navigate emotional and personal challenges.",
      "Committed to supporting clients with clinical excellence, empathy, and practical guidance."
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/softmindindia",
      "facebook": "https://facebook.com/softmindindia"
    },
    "languages": [
      "English",
      "Malayalam"
    ],
    "quote": "Empowering Minds. Healing Hearts. Enabling Better Life.",
    "quoteAuthor": "- Shahzad",
    "expertise": [
      {
        "title": "Emotional & Mental Wellbeing",
        "description": "Helping individuals navigate anxiety, stress, and low mood with evidence-based therapeutic approaches."
      },
      {
        "title": "Personal Growth & Relationships",
        "description": "Supporting personal development, resilience building, and healthier relationships."
      }
    ],
    "articles": []
  }
];

export function getClinicianBySlug(slug: string): Clinician | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().trim();
  return clinicians.find(
    (c) => c.slug.toLowerCase() === normalized || String(c.id) === normalized
  );
}

export function getClinicianById(id: string | number): Clinician | undefined {
  if (!id) return undefined;
  const strId = String(id).toLowerCase().trim();
  const found = clinicians.find(
    (c) => String(c.id) === strId || c.slug.toLowerCase() === strId
  );
  if (found) return found;
  return clinicians[0];
}
