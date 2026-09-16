export interface CareFAQ {
  question: string;
  answer: string;
}

export interface CareSection {
  section: string;
  element: string;
  text: string;
}

export interface CareService {
  slug: string;
  url: string;
  title: string;
  h1: string;
  intro: string;
  sections: CareSection[];
  faqs: CareFAQ[];
}

export const careServices: CareService[] = [
  {
    "slug": "sex-therapy",
    "url": "/our-care/sex-therapy",
    "title": "Sex therapy",
    "h1": "Sex therapy",
    "intro": "Sex therapy is a form of talking therapy for sexual difficulties that affect your wellbeing or your relationship. Problems with sex are common, and talking about them with a trained therapist, in a private and non-judgemental setting, is one of the most effective ways to work through them.",
    "sections": [
      {
        "section": "Who it helps",
        "element": "H2",
        "text": "Concerns people bring to sex therapy"
      },
      {
        "section": "Who it helps",
        "element": "List",
        "text": "Erectile difficulties\nPremature or delayed ejaculation\nLow or very high sexual desire\nDifficulty becoming aroused or reaching orgasm\nPain during sex, including vaginismus, dyspareunia and vulvodynia\nSexual behaviour that feels out of control\nDistressing sexual thoughts or urges\nLow sexual confidence\nThe effect of past sexual trauma\nIntimacy problems after infidelity, or loss of interest in a long relationship\nTelling a partner about a sexually transmitted infection"
      },
      {
        "section": "How it works at Softmind",
        "element": "H2",
        "text": "How it works at Softmind"
      },
      {
        "section": "How it works at Softmind",
        "element": "Paragraph",
        "text": "Your therapist starts by understanding the physical, emotional, psychological and relationship factors behind the difficulty. Sessions may be with you alone or with your partner, depending on what will help most. Therapy is both supportive and educational: you learn how your body and mind respond, practise ways to communicate about sex, and work through the worries that keep the problem going. If a medical cause is possible, we refer you to a doctor who works in step with your therapist."
      },
      {
        "section": "In person or online",
        "element": "Paragraph",
        "text": "Sex therapy is open to anyone, whatever your gender, sexual orientation, relationship status, religion or culture. Sessions are available at our centres in Panampilly Nagar, Kakkanad, Thrissur and Aroor, and online in Malayalam or English. [CONFIRM: offered at every centre]"
      },
      {
        "section": "CTA",
        "element": "Button",
        "text": "Book a confidential session  \u2192  /book?concern=sexual-health"
      },
      {
        "section": "Review",
        "element": "Clinical sign-off",
        "text": "[CONFIRM: reviewed by (name, credential) on (date)]"
      }
    ],
    "faqs": [
      {
        "question": "Will I have to talk about intimate details?",
        "answer": "Only as much as you are comfortable with. Therapists are used to these conversations and will go at your pace."
      },
      {
        "question": "Can my partner come with me?",
        "answer": "Yes. Some sessions work best with both partners, others one to one. Your therapist will suggest what fits your situation."
      },
      {
        "question": "What if the cause is physical?",
        "answer": "Your therapist will help you look into it and refer you to an appropriate medical practitioner, while continuing to support you with the emotional side."
      }
    ]
  },
  {
    "slug": "relationship-counselling",
    "url": "/our-care/relationship-counselling",
    "title": "Couple and relationship counselling",
    "h1": "Couple and relationship counselling",
    "intro": "Every relationship goes through strain. Couple counselling gives you both a structured, neutral space to understand what is going wrong, speak honestly and decide together what happens next.",
    "sections": [
      {
        "section": "Who it helps",
        "element": "H2",
        "text": "Couples come to us about"
      },
      {
        "section": "Who it helps",
        "element": "List",
        "text": "Frequent arguments or communication breaking down\nLoss of trust, including after an affair\nDifferences over family, money or parenting\nSexual or intimacy concerns\nDeciding whether to stay together or separate\nCoping with a breakup or divorce"
      },
      {
        "section": "How it works at Softmind",
        "element": "H2",
        "text": "How it works at Softmind"
      },
      {
        "section": "How it works at Softmind",
        "element": "Paragraph",
        "text": "In the first session your counsellor hears from both of you and agrees goals for therapy. Later sessions focus on patterns that keep conflict going and practical ways to change them. Your counsellor may also see each of you individually for a session. If one partner is not ready to attend, counselling for one person can still help."
      },
      {
        "section": "In person or online",
        "element": "Paragraph",
        "text": "Sessions are available at our centres in Panampilly Nagar, Kakkanad, Thrissur and Aroor, and online in Malayalam or English. [CONFIRM: offered at every centre]"
      },
      {
        "section": "CTA",
        "element": "Button",
        "text": "Book couple counselling  \u2192  /book?concern=relationships"
      },
      {
        "section": "Review",
        "element": "Clinical sign-off",
        "text": "[CONFIRM: reviewed by (name, credential) on (date)]"
      }
    ],
    "faqs": [
      {
        "question": "Does counselling mean we are going to separate?",
        "answer": "No. Most couples come to strengthen the relationship. If separation is the right outcome, counselling helps you handle it with less harm, especially where children are involved."
      },
      {
        "question": "I have just been through a breakup. Can I come alone?",
        "answer": "Yes. Individual sessions help with grief, anger and rebuilding confidence after a relationship ends."
      }
    ]
  },
  {
    "slug": "premarital-counselling",
    "url": "/our-care/premarital-counselling",
    "title": "Premarital counselling",
    "h1": "Premarital counselling",
    "intro": "Premarital counselling helps couples talk through the things that often cause trouble later, before the wedding. It is practical, confidential and open to couples in arranged and love marriages alike.",
    "sections": [
      {
        "section": "Who it helps",
        "element": "H2",
        "text": "Topics we cover"
      },
      {
        "section": "Who it helps",
        "element": "List",
        "text": "Expectations of marriage and each other\nCommunication and handling disagreements\nFamily roles and living arrangements\nMoney and careers\nIntimacy and sexual health\nPlans for children"
      },
      {
        "section": "How it works at Softmind",
        "element": "H2",
        "text": "How it works at Softmind"
      },
      {
        "section": "How it works at Softmind",
        "element": "Paragraph",
        "text": "Couples usually attend a short series of sessions together. Softmind's approach draws on gender-sensitive premarital counselling work carried out with Kerala's Women and Child Development department. [CONFIRM: wording and link to this programme]"
      },
      {
        "section": "In person or online",
        "element": "Paragraph",
        "text": "Sessions are available at our centres in Panampilly Nagar, Kakkanad, Thrissur and Aroor, and online in Malayalam or English. [CONFIRM: offered at every centre]"
      },
      {
        "section": "CTA",
        "element": "Button",
        "text": "Book premarital counselling  \u2192  /book?concern=relationships"
      },
      {
        "section": "Review",
        "element": "Clinical sign-off",
        "text": "[CONFIRM: reviewed by (name, credential) on (date)]"
      }
    ],
    "faqs": [
      {
        "question": "We are not having problems. Is this still useful?",
        "answer": "Yes. Most couples who attend are not in difficulty. They want to go into marriage with fewer surprises."
      }
    ]
  },
  {
    "slug": "family-counselling",
    "url": "/our-care/family-counselling",
    "title": "Family counselling",
    "h1": "Family counselling",
    "intro": "When one person in a family is struggling, everyone feels it. Family counselling brings family members together to understand what is happening, reduce conflict and support each other.",
    "sections": [
      {
        "section": "Who it helps",
        "element": "H2",
        "text": "Families come to us about"
      },
      {
        "section": "Who it helps",
        "element": "List",
        "text": "Ongoing conflict at home\nParenting disagreements\nA teenager's behaviour or withdrawal\nSeparation or divorce, and its effect on children\nCaring for a family member with a mental health condition\nBereavement and major life changes"
      },
      {
        "section": "How it works at Softmind",
        "element": "H2",
        "text": "How it works at Softmind"
      },
      {
        "section": "How it works at Softmind",
        "element": "Paragraph",
        "text": "Your counsellor meets the family together and, where useful, individually. Sessions focus on how family members communicate, the roles each person has taken on and small changes that ease pressure at home. Children whose parents are separating often need their own space to talk, and we can arrange that too."
      },
      {
        "section": "In person or online",
        "element": "Paragraph",
        "text": "Sessions are available at our centres in Panampilly Nagar, Kakkanad, Thrissur and Aroor, and online in Malayalam or English. [CONFIRM: offered at every centre]"
      },
      {
        "section": "CTA",
        "element": "Button",
        "text": "Book family counselling  \u2192  /book?concern=family"
      },
      {
        "section": "Review",
        "element": "Clinical sign-off",
        "text": "[CONFIRM: reviewed by (name, credential) on (date)]"
      }
    ],
    "faqs": [
      {
        "question": "Does everyone have to come?",
        "answer": "Not always. Your counsellor will suggest who should attend, and sessions can start with whoever is willing."
      }
    ]
  },
  {
    "slug": "child-adolescent-counselling",
    "url": "/our-care/child-adolescent-counselling",
    "title": "Child and adolescent counselling",
    "h1": "Child and adolescent counselling",
    "intro": "Children and teenagers sometimes struggle with feelings or behaviour they cannot explain. Counselling gives them a safe place, with clear boundaries, to say what is troubling them, while our psychologists work out what lies underneath.",
    "sections": [
      {
        "section": "Who it helps",
        "element": "H2",
        "text": "We help children and teenagers with"
      },
      {
        "section": "Who it helps",
        "element": "List",
        "text": "Worry, fears and school refusal\nLow mood, anger and emotional outbursts\nBehaviour problems at home or school\nLearning difficulties and attention problems, including ADHD\nFriendships, peer pressure and bullying\nSexual health questions and body image\nCoping with their parents' separation"
      },
      {
        "section": "How it works at Softmind",
        "element": "H2",
        "text": "How it works at Softmind"
      },
      {
        "section": "How it works at Softmind",
        "element": "Paragraph",
        "text": "We start by meeting the parents or carers and then the child, to understand the problem from every side. Therapy helps children build problem-solving skills and learn that asking for help is a strength. For teenagers, sessions focus on handling relationships, family life, studies and peer pressure with less distress. Parents stay involved, and we agree together what will be shared from sessions."
      },
      {
        "section": "In person or online",
        "element": "Paragraph",
        "text": "Sessions are available at our centres in Panampilly Nagar, Kakkanad, Thrissur and Aroor, and online in Malayalam or English. [CONFIRM: offered at every centre]"
      },
      {
        "section": "CTA",
        "element": "Button",
        "text": "Book for your child  \u2192  /book?concern=child"
      },
      {
        "section": "Review",
        "element": "Clinical sign-off",
        "text": "[CONFIRM: reviewed by (name, credential) on (date)]"
      }
    ],
    "faqs": [
      {
        "question": "How young can a child be?",
        "answer": "[CONFIRM: minimum age]"
      },
      {
        "question": "Will you tell me what my teenager says?",
        "answer": "We explain confidentiality to both of you at the start. We share anything that affects your child's safety, and agree what else is shared."
      }
    ]
  },
  {
    "slug": "psychological-counselling",
    "url": "/our-care/psychological-counselling",
    "title": "Psychological counselling",
    "h1": "Psychological counselling",
    "intro": "Counselling is for anyone facing a problem they cannot manage alone, feelings they cannot control, or a situation where they simply do not know what to do next. You do not need a diagnosis to start.",
    "sections": [
      {
        "section": "Who it helps",
        "element": "H2",
        "text": "People come to counselling about"
      },
      {
        "section": "Who it helps",
        "element": "List",
        "text": "Stress, including work-related stress\nAnxiety, social anxiety and panic attacks\nLow mood and depression\nGrief and bereavement\nAnger\nRelationship and family problems, including affairs\nLow confidence and self-esteem\nGender and sexuality\nObsessive thoughts and compulsions\nEating problems\nAbuse\nSexual difficulties\nCross-cultural adjustment\nThoughts of suicide or self-harm"
      },
      {
        "section": "How it works at Softmind",
        "element": "H2",
        "text": "How it works at Softmind"
      },
      {
        "section": "How it works at Softmind",
        "element": "Paragraph",
        "text": "Your counsellor listens first, then helps you make sense of what is happening and agree what you want to change. Sessions use evidence-based approaches such as CBT and solution-focused brief therapy. If your difficulty needs specialist assessment or medication, we bring in a clinical psychologist or psychiatrist from our team."
      },
      {
        "section": "In person or online",
        "element": "Paragraph",
        "text": "Sessions are available at our centres in Panampilly Nagar, Kakkanad, Thrissur and Aroor, and online in Malayalam or English. [CONFIRM: offered at every centre]"
      },
      {
        "section": "CTA",
        "element": "Button",
        "text": "Book a counselling session  \u2192  /book"
      },
      {
        "section": "Review",
        "element": "Clinical sign-off",
        "text": "[CONFIRM: reviewed by (name, credential) on (date)]"
      }
    ],
    "faqs": [
      {
        "question": "How many sessions will I need?",
        "answer": "It depends on the concern. Your counsellor will suggest a plan after the first session and review it with you as you go. [CONFIRM: typical range]"
      },
      {
        "question": "I am having thoughts of suicide. Can counselling help?",
        "answer": "Yes, and please do not wait. If you are in immediate danger, call Tele-MANAS on 14416 or go to your nearest emergency department now."
      }
    ]
  },
  {
    "slug": "clinical-psychology",
    "url": "/our-care/clinical-psychology",
    "title": "Clinical psychology",
    "h1": "Clinical psychology",
    "intro": "Clinical psychologists assess and treat mental health conditions using psychological methods, not medication. At Softmind, our clinical psychologists are licensed by the Rehabilitation Council of India.",
    "sections": [
      {
        "section": "Who it helps",
        "element": "H2",
        "text": "Clinical psychologists help with"
      },
      {
        "section": "Who it helps",
        "element": "List",
        "text": "Anxiety disorders, including generalised anxiety, panic, phobias and health anxiety\nDepression\nObsessive-compulsive disorder\nPost-traumatic stress\nPersonality difficulties, including borderline personality disorder\nEating disorders\nADHD and conduct problems in children\nSleep problems\nPsychological aspects of physical conditions such as IBS"
      },
      {
        "section": "How it works at Softmind",
        "element": "H2",
        "text": "How it works at Softmind"
      },
      {
        "section": "How it works at Softmind",
        "element": "Paragraph",
        "text": "Care usually begins with a psychological assessment, which may include standard questionnaires and tests. Your psychologist explains what the assessment shows and agrees a treatment plan with you. Treatment uses evidence-based therapies such as CBT, and your progress is reviewed as you go. Where medication may help, we coordinate with one of our psychiatrists."
      },
      {
        "section": "In person or online",
        "element": "Paragraph",
        "text": "Sessions are available at our centres in Panampilly Nagar, Kakkanad, Thrissur and Aroor, and online in Malayalam or English. [CONFIRM: offered at every centre]"
      },
      {
        "section": "CTA",
        "element": "Button",
        "text": "Book an assessment  \u2192  /book"
      },
      {
        "section": "Review",
        "element": "Clinical sign-off",
        "text": "[CONFIRM: reviewed by (name, credential) on (date)]"
      }
    ],
    "faqs": [
      {
        "question": "What is the difference between a clinical psychologist and a psychiatrist?",
        "answer": "A clinical psychologist assesses and treats through therapy. A psychiatrist is a medical doctor who can diagnose and prescribe medication. Many people see both."
      }
    ]
  },
  {
    "slug": "psychotherapy",
    "url": "/our-care/psychotherapy",
    "title": "Psychotherapy",
    "h1": "Psychotherapy",
    "intro": "Psychotherapy is structured talking therapy for difficulties that run deeper or last longer: recurring patterns in relationships, the effects of trauma, or emotions that feel hard to manage.",
    "sections": [
      {
        "section": "Who it helps",
        "element": "H2",
        "text": "Psychotherapy can help with"
      },
      {
        "section": "Who it helps",
        "element": "List",
        "text": "Patterns that keep repeating in relationships or work\nThe lasting effects of trauma or abuse\nPersistent low self-worth\nDifficulty managing emotions\nPersonality difficulties"
      },
      {
        "section": "How it works at Softmind",
        "element": "H2",
        "text": "How it works at Softmind"
      },
      {
        "section": "How it works at Softmind",
        "element": "Paragraph",
        "text": "Our psychotherapists use approaches such as cognitive behavioural therapy, experiential therapy and mindfulness-based work. Therapy is usually longer than short-term counselling, with regular sessions and reviews of progress."
      },
      {
        "section": "In person or online",
        "element": "Paragraph",
        "text": "Sessions are available at our centres in Panampilly Nagar, Kakkanad, Thrissur and Aroor, and online in Malayalam or English. [CONFIRM: offered at every centre]"
      },
      {
        "section": "CTA",
        "element": "Button",
        "text": "Book psychotherapy  \u2192  /book"
      },
      {
        "section": "Review",
        "element": "Clinical sign-off",
        "text": "[CONFIRM: reviewed by (name, credential) on (date)]"
      }
    ],
    "faqs": [
      {
        "question": "How is psychotherapy different from counselling?",
        "answer": "Counselling often focuses on a current problem over a few sessions. Psychotherapy tends to go deeper and run longer, working on patterns that have built up over time."
      }
    ]
  },
  {
    "slug": "psychiatry",
    "url": "/our-care/psychiatry",
    "title": "Psychiatry",
    "h1": "Psychiatry",
    "intro": "Our psychiatrists are medical doctors who diagnose mental health conditions and, where needed, prescribe and monitor medication. They work alongside Softmind psychologists, so medication and therapy form one plan.",
    "sections": [
      {
        "section": "Who it helps",
        "element": "H2",
        "text": "Psychiatrists help with"
      },
      {
        "section": "Who it helps",
        "element": "List",
        "text": "Depression and anxiety that are severe or not improving\nObsessive-compulsive disorder\nSleep problems\nADHD\nMood swings\nSymptoms that affect daily functioning or safety\nReviewing medication you already take"
      },
      {
        "section": "How it works at Softmind",
        "element": "H2",
        "text": "How it works at Softmind"
      },
      {
        "section": "How it works at Softmind",
        "element": "Paragraph",
        "text": "Your first appointment is a detailed assessment of your symptoms, history and circumstances. The psychiatrist explains the diagnosis and treatment options, including whether medication is needed. For mild and moderate problems, therapy alone is often enough; for more severe difficulties, your psychologist may refer you to a psychiatrist."
      },
      {
        "section": "In person or online",
        "element": "Paragraph",
        "text": "Psychiatric consultations are available at [CONFIRM: centres with a psychiatrist] and online by appointment."
      },
      {
        "section": "CTA",
        "element": "Button",
        "text": "Book a psychiatrist  \u2192  /book?concern=psychiatry"
      },
      {
        "section": "Review",
        "element": "Clinical sign-off",
        "text": "[CONFIRM: reviewed by (name, credential) on (date)]"
      }
    ],
    "faqs": [
      {
        "question": "Will I have to take medication?",
        "answer": "Not necessarily. Your psychiatrist will discuss the options with you, and the decision is yours."
      }
    ]
  },
  {
    "slug": "hypnotherapy",
    "url": "/our-care/hypnotherapy",
    "title": "Hypnotherapy",
    "h1": "Clinical hypnotherapy",
    "intro": "Clinical hypnotherapy uses a focused, relaxed state of attention as part of psychological treatment. At Softmind it is always delivered by a trained clinician and used alongside other therapy, never on its own.",
    "sections": [
      {
        "section": "Who it helps",
        "element": "H2",
        "text": "Hypnotherapy may be used for"
      },
      {
        "section": "Who it helps",
        "element": "List",
        "text": "[CONFIRM with clinician: e.g. anxiety and stress, habit change, sleep difficulties, pain management]"
      },
      {
        "section": "How it works at Softmind",
        "element": "H2",
        "text": "How it works at Softmind"
      },
      {
        "section": "How it works at Softmind",
        "element": "Paragraph",
        "text": "Your clinician first assesses whether hypnotherapy suits you and your concern. Sessions combine hypnosis with therapy techniques you can use on your own. You stay aware and in control throughout."
      },
      {
        "section": "In person or online",
        "element": "Paragraph",
        "text": "Sessions are available at our centres in Panampilly Nagar, Kakkanad, Thrissur and Aroor, and online in Malayalam or English. [CONFIRM: offered at every centre]"
      },
      {
        "section": "CTA",
        "element": "Button",
        "text": "Ask about hypnotherapy  \u2192  /book"
      },
      {
        "section": "Review",
        "element": "Clinical sign-off",
        "text": "[CONFIRM: reviewed by (name, credential) on (date)]"
      }
    ],
    "faqs": [
      {
        "question": "Is hypnotherapy suitable for everyone?",
        "answer": "No. It is not recommended for some conditions, such as psychosis. Your clinician will tell you honestly whether it is right for you."
      }
    ]
  },
  {
    "slug": "lgbtq-affirmative-counselling",
    "url": "/our-care/lgbtq-affirmative-counselling",
    "title": "LGBTQ+ affirmative counselling",
    "h1": "LGBTQ+ affirmative counselling",
    "intro": "Affirmative counselling means your identity is respected, not questioned. Our counsellors offer a confidential space for LGBTQ+ people, and for families who want to support them.",
    "sections": [
      {
        "section": "Who it helps",
        "element": "H2",
        "text": "People come to us about"
      },
      {
        "section": "Who it helps",
        "element": "List",
        "text": "Understanding or accepting their identity\nComing out to family, friends or colleagues\nFamily conflict or rejection\nRelationships\nStress, anxiety or low mood linked to discrimination"
      },
      {
        "section": "How it works at Softmind",
        "element": "H2",
        "text": "How it works at Softmind"
      },
      {
        "section": "How it works at Softmind",
        "element": "Paragraph",
        "text": "Sessions focus on what you want help with, which may have nothing to do with your identity. Where family members want to understand and support a loved one, we can see them separately or together."
      },
      {
        "section": "In person or online",
        "element": "Paragraph",
        "text": "Sessions are available at our centres in Panampilly Nagar, Kakkanad, Thrissur and Aroor, and online in Malayalam or English. [CONFIRM: offered at every centre]"
      },
      {
        "section": "CTA",
        "element": "Button",
        "text": "Book a confidential session  \u2192  /book"
      },
      {
        "section": "Review",
        "element": "Clinical sign-off",
        "text": "[CONFIRM: reviewed by (name, credential) on (date)]"
      }
    ],
    "faqs": [
      {
        "question": "Will you try to change my sexual orientation or gender identity?",
        "answer": "No. Softmind does not offer or support conversion practices."
      }
    ]
  },
  {
    "slug": "online-counselling-malayalam",
    "url": "/our-care/online-counselling-malayalam",
    "title": "Online counselling in Malayalam",
    "h1": "Online counselling in Malayalam",
    "intro": "Talk to a Softmind psychologist in Malayalam by video, wherever you live. It is the same care our clinicians give at our Kerala centres, for Malayalis at home, in the Gulf, in the UK and elsewhere.",
    "sections": [
      {
        "section": "Who it helps",
        "element": "H2",
        "text": "Online sessions suit you if"
      },
      {
        "section": "Who it helps",
        "element": "List",
        "text": "You live outside Kerala or abroad and want to talk in Malayalam\nYou cannot easily travel to a centre\nYou prefer the privacy of talking from home\nYou want to continue with a Softmind clinician after moving"
      },
      {
        "section": "How it works at Softmind",
        "element": "H2",
        "text": "How it works at Softmind"
      },
      {
        "section": "How it works at Softmind",
        "element": "Paragraph",
        "text": "Nine of our psychologists, both men and women, offer online sessions. Booking is by appointment: tell us your concern and time zone, and we match you with a clinician and send a secure video link. [CONFIRM: platform, session length, international payment options]"
      },
      {
        "section": "In person or online",
        "element": "Paragraph",
        "text": "Online counselling covers most concerns, including anxiety, depression, relationship and family problems. If you are in crisis, online sessions are not the right first step: in India call Tele-MANAS on 14416; abroad, contact local emergency services."
      },
      {
        "section": "CTA",
        "element": "Button",
        "text": "Book an online session in Malayalam  \u2192  /book?centre=online&language=malayalam"
      },
      {
        "section": "Review",
        "element": "Clinical sign-off",
        "text": "[CONFIRM: reviewed by (name, credential) on (date)]"
      }
    ],
    "faqs": [
      {
        "question": "What time zones can you work with?",
        "answer": "[CONFIRM: available hours in IST for Gulf and UK clients]"
      },
      {
        "question": "Is online counselling as effective as in person?",
        "answer": "For most concerns, yes. Research on online therapy shows similar results to face-to-face sessions for common problems such as anxiety and depression."
      }
    ]
  },
  {
    "slug": "online-counselling",
    "url": "/our-care/online-counselling",
    "title": "Online therapy (English)",
    "h1": "Online therapy in English",
    "intro": "See a Softmind psychologist by secure video in English, from wherever you are. The clinicians and approach are the same as at our Kerala centres.",
    "sections": [
      {
        "section": "Who it helps",
        "element": "H2",
        "text": "Online therapy suits you if"
      },
      {
        "section": "Who it helps",
        "element": "List",
        "text": "You prefer to speak in English\nYou live outside Kerala or travel often\nYou want the privacy of talking from home"
      },
      {
        "section": "How it works at Softmind",
        "element": "H2",
        "text": "How it works at Softmind"
      },
      {
        "section": "How it works at Softmind",
        "element": "Paragraph",
        "text": "Book an appointment, tell us your concern, and we match you with a clinician and send a secure link. [CONFIRM: platform, session length, payment]"
      },
      {
        "section": "In person or online",
        "element": "Paragraph",
        "text": "If you are in crisis, online therapy is not the right first step. In India, call Tele-MANAS on 14416."
      },
      {
        "section": "CTA",
        "element": "Button",
        "text": "Book an online session  \u2192  /book?centre=online"
      },
      {
        "section": "Review",
        "element": "Clinical sign-off",
        "text": "[CONFIRM: reviewed by (name, credential) on (date)]"
      }
    ],
    "faqs": [
      {
        "question": "Do I need a camera?",
        "answer": "Video works best, but audio-only sessions are possible if you prefer. [CONFIRM]"
      }
    ]
  }
];

export function getCareServiceBySlug(slug: string): CareService | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().trim();
  return careServices.find((s) => s.slug.toLowerCase() === normalized);
}
