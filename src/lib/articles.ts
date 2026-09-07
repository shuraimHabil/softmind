export interface ArticleSection {
  num: string;
  heading: string;
  body: string;
}

export interface Article {
  slug: string;
  badge: string;
  category: string;
  language: "English" | "Malayalam";
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  authorAvatar?: string;
  readTime: string;
  reviewedDate: string;
  img: string;
  widerView: string;
  toc: string[];
  sections: ArticleSection[];
}

export const articles: Article[] = [
  {
    slug: "understanding-anxiety-mind-body",
    badge: "Anxiety & Worry",
    category: "Anxiety & Worry",
    language: "English",
    title: "Understanding Anxiety: The Mind, Body, And Why It Feels Real",
    excerpt:
      "Anxiety Often Feels Like Something That Happens To You. Your Heart Starts To Beat Faster, And Your Breathing Becomes Uneven And Difficult To Control. Your Body Feels Tense, Even Without A Clear Reason, And Gradually...",
    author: "Dr. Marcus Vance",
    authorRole: "Consultant Psychiatrist",
    authorAvatar: "/assets/dr_marcus_vance.jpg",
    readTime: "5 min read",
    reviewedDate: "Aug 26, 2026",
    img: "/assets/anxiety_hero.jpg",
    widerView:
      "Anxiety cannot always be understood from symptoms alone. Biological disposition, previous learning bodily state, relationships, current circumstances and environment can all influence how a person responds to uncertainty.",
    toc: [
      "Why Anxiety Feels Real",
      "The Body And Arousal",
      "Attention And Uncertainty",
      "Learning From Experience",
      "What May Help",
    ],
    sections: [
      {
        num: "01",
        heading: "Why Anxiety Feels So Real?",
        body: "Anxiety often feels like something that happens to you. Your heart starts to beat faster, and your breathing becomes uneven and difficult to control. Your body feels tense, even without a clear reason, and gradually, your mind begins to fill with overwhelming thoughts. It can feel sudden. It can feel overwhelming. And most people describe it as something they cannot control.",
      },
      {
        num: "02",
        heading: "The Body And Arousal",
        body: "Even a slight sense of doubt can trigger the body to prepare itself. Your breathing begins to change, your muscles become slightly tense, and your attention sharpens. These reactions happen automatically, often before you are even consciously aware of what's happening or have time to think about the situation.",
      },
      {
        num: "03",
        heading: "Attention And Uncertainty",
        body: "If the body feels slightly activated, the brain may interpret it as anxiety. If the same activation happens in a different context, it may be interpreted differently.",
      },
      {
        num: "04",
        heading: "Learning From Experience",
        body: "Past stressful events configure our threat detection systems. When an experience echoes earlier helplessness, our nervous system sounds alarms before rational evaluation can intervene.",
      },
      {
        num: "05",
        heading: "What May Help",
        body: "Evidence-based interventions such as Somatic Grounding, Cognitive Behavioural Therapy (CBT), and neurofeedback assist in re-training sympathetic responses, restoring self-trust and somatic ease.",
      },
    ],
  },
  {
    slug: "instagram-human-psychology-mental-health",
    badge: "Depression",
    category: "Depression",
    language: "English",
    title: "Instagram, Human Psychology, And Hidden Cost To Mental Health",
    excerpt:
      "How algorithmic visual feeds influence dopamine circuits, self-comparison, and emotional vulnerability in modern digital lifestyles.",
    author: "Misha Thomas",
    authorRole: "Clinical Psychologist",
    authorAvatar: "/assets/dr_marcus_vance.jpg",
    readTime: "5 min read",
    reviewedDate: "Aug 25, 2026",
    img: "/assets/phone_mental_health.jpg",
    widerView:
      "Digital spaces are designed to capture attention, but human nervous systems were not built for continuous comparative stimulation. Awareness is the first step to reclaiming psychological autonomy.",
    toc: [
      "The Comparison Trap",
      "Dopamine Loops and Fatigue",
      "Reclaiming Psychological Grounding",
    ],
    sections: [
      {
        num: "01",
        heading: "The Comparison Trap",
        body: "When scrolling curated representations of other lives, our brain unconsciously measures our internal messy reality against polished highlights, triggering social defeat and depressive inertia.",
      },
      {
        num: "02",
        heading: "Dopamine Loops and Fatigue",
        body: "Intermittent variable rewards keep neural circuits perpetually vigilant. The result is cognitive depletion, fragmented focus, and diminished emotional resilience.",
      },
      {
        num: "03",
        heading: "Reclaiming Psychological Grounding",
        body: "Establishing intentional digital boundaries, replacing late-night browsing with embodied practices, and seeking relational presence provide foundational relief.",
      },
    ],
  },
  {
    slug: "talking-therapy-stress-relief-kochi",
    badge: "Therapy",
    category: "Therapy",
    language: "English",
    title: "talking therapy for stress relief in kochi",
    excerpt:
      "Evidence-based talk therapy provides a confidential, structured space to unpack emotional burnout, anxiety, and interpersonal strains.",
    author: "Dr. Anand Kumar",
    authorRole: "Chief Psychiatrist",
    authorAvatar: "/assets/dr_marcus_vance.jpg",
    readTime: "4 min read",
    reviewedDate: "Apr 27, 2026",
    img: "/assets/therapy_session.jpg",
    widerView:
      "Effective therapy doesn't offer quick-fix prescriptions; it offers deep diagnostic clarity and relational containment where authentic healing unfolds.",
    toc: [
      "Why Talking Helps Regulate the Nervous System",
      "What Happens in a Clinical Therapy Room",
      "Navigating Care Locally in Kochi",
    ],
    sections: [
      {
        num: "01",
        heading: "Why Talking Helps Regulate the Nervous System",
        body: "Verbalizing internal distress within an attuned therapeutic relationship activates parasympathetic brake pathways, downregulating chronic fight-or-flight states.",
      },
      {
        num: "02",
        heading: "What Happens in a Clinical Therapy Room",
        body: "Your clinician collaborates with you to identify recurring patterns, understand cognitive distortions, and construct practical coping resources tailored to your life.",
      },
      {
        num: "03",
        heading: "Navigating Care Locally in Kochi",
        body: "Our clinic in Panampilly Nagar, Kochi offers multidisciplinary psychiatric assessment, CBT, psychoanalytic therapy, and dedicated family counseling.",
      },
    ],
  },
  {
    slug: "demystifying-modern-counseling",
    badge: "Therapy",
    category: "Therapy",
    language: "English",
    title: "Demystifying Modern Counseling: What to Expect in Your First Session",
    excerpt:
      "Stepping into a therapy room can feel overwhelming. Let's break down how counseling sessions work and how therapists create a safe space.",
    author: "Dr. Anand Kumar",
    authorRole: "Chief Psychiatrist",
    authorAvatar: "/assets/dr_marcus_vance.jpg",
    readTime: "5 min read",
    reviewedDate: "Aug 26, 2026",
    img: "/assets/insight_1.jpg",
    widerView:
      "Counseling cannot always be understood from brochures alone. The therapeutic relationship, your readiness, and the specific approach used can all influence how a person responds to their first session.",
    toc: [
      "Why Counseling Feels Unfamiliar",
      "What Happens in a First Session",
      "How Therapists Build Safety",
      "Learning From Experience",
      "What May Help",
    ],
    sections: [
      {
        num: "01",
        heading: "Why Counseling Feels Unfamiliar",
        body: "Many people have never been in a room designed specifically for them — where the only agenda is your wellbeing. That unfamiliarity itself can feel disorienting. Your first session is not about fixing anything. It is about beginning.",
      },
      {
        num: "02",
        heading: "What Happens in a First Session",
        body: "A first session typically involves your therapist listening far more than they speak. They want to understand your situation in your words, not impose a structure. You may be asked about what brought you here, how long you have felt this way, and what you hope for.",
      },
      {
        num: "03",
        heading: "How Therapists Build Safety",
        body: "Safety in therapy is built through consistency, confidentiality, and non-judgement. A skilled therapist will not rush you, interpret everything you say, or push you toward a conclusion. Their role is to stay curious about your experience alongside you.",
      },
    ],
  },
  {
    slug: "mindfulness-practices-daily-life",
    badge: "Mindfulness",
    category: "Mindfulness",
    language: "English",
    title: "Finding Peace in Daily Life: 5 Mindfulness Practices to Try Today",
    excerpt:
      "Mindfulness doesn't require hours of meditation. Explore simple practices to reduce stress and anxiety in your daily schedule.",
    author: "Misha Thomas",
    authorRole: "Clinical Psychologist",
    authorAvatar: "/assets/dr_marcus_vance.jpg",
    readTime: "4 min read",
    reviewedDate: "Aug 24, 2026",
    img: "/assets/insight_2.jpg",
    widerView:
      "Mindfulness is not about emptying your mind. It is about learning to observe your thoughts without being pulled into them — a skill that builds with gentle, consistent practice.",
    toc: [
      "What Mindfulness Actually Means",
      "The Breath Anchor",
      "Body Scan Practice",
      "Mindful Movement",
      "Building a Habit",
    ],
    sections: [
      {
        num: "01",
        heading: "What Mindfulness Actually Means",
        body: "Mindfulness is intentional awareness of the present moment, without judgement. It is not about being calm — it is about noticing when you are not calm, and choosing how to respond rather than react.",
      },
      {
        num: "02",
        heading: "The Breath Anchor",
        body: "The simplest practice: focus on your breath for 60 seconds. When your mind wanders — and it will — gently return your attention to the inhale and exhale. Each return is the practice itself, not a failure.",
      },
      {
        num: "03",
        heading: "Body Scan Practice",
        body: "Starting from the top of your head and moving slowly to your feet, notice each area of your body without trying to change anything. This builds the ability to be present with physical sensation — which underpins emotional regulation.",
      },
    ],
  },
  {
    slug: "nurturing-child-mental-health",
    badge: "Parenting",
    category: "Parenting",
    language: "English",
    title: "Nurturing Your Child's Mental Health: Early Signs to Watch For",
    excerpt:
      "Childhood mental wellness forms the base for adult wellbeing. Understand how to spot emotional milestones and developmental signs.",
    author: "Riya Varghese",
    authorRole: "Child Psychologist",
    authorAvatar: "/assets/dr_marcus_vance.jpg",
    readTime: "6 min read",
    reviewedDate: "Aug 20, 2026",
    img: "/assets/insight_3.jpg",
    widerView:
      "A child's emotional world is rich and complex. What appears as 'difficult behaviour' is often communication — a signal that something needs attention, not correction.",
    toc: [
      "Why Early Recognition Matters",
      "Emotional Milestones by Age",
      "Signs That May Warrant Support",
      "How to Start the Conversation",
      "When to Seek Professional Help",
    ],
    sections: [
      {
        num: "01",
        heading: "Why Early Recognition Matters",
        body: "Mental health patterns established in childhood often persist into adulthood if unaddressed. Early support does not stigmatise — it equips children with the tools they need before challenges become entrenched.",
      },
      {
        num: "02",
        heading: "Emotional Milestones by Age",
        body: "At 5–7, children begin to understand that others have feelings different from their own. By 10–12, they start to regulate embarrassment and social comparison. Knowing these milestones helps distinguish typical development from areas that may need support.",
      },
      {
        num: "03",
        heading: "Signs That May Warrant Support",
        body: "Persistent withdrawal from activities they used to enjoy, significant changes in sleep or appetite, frequent physical complaints without medical cause, or intense and prolonged emotional outbursts — these are worth paying attention to.",
      },
    ],
  },
  {
    slug: "understanding-depression-malayalam",
    badge: "Depression",
    category: "Depression",
    language: "Malayalam",
    title: "വിഷാദരോഗം തിരിച്ചറിയാം: ലക്ഷണങ്ങളും പുതിയ ചികിത്സാരീതികളും",
    excerpt:
      "വിഷാദം കേവലം ഒരു മാനസിക സങ്കടമല്ല, മറിച്ച് മസ്തിഷ്കത്തിലെ ന്യൂറോ ട്രാൻസ്മിറ്ററുകളുടെ മാറ്റങ്ങളുമായി ബന്ധപ്പെട്ട അവസ്ഥയാണ്. ശരിയായ കൗൺസിലിംഗും ചികിത്സയും വഴി പൂർണ്ണ പരിഹാരം സാധ്യമാണ്.",
    author: "Dr. Anand Kumar",
    authorRole: "Chief Psychiatrist",
    authorAvatar: "/assets/dr_marcus_vance.jpg",
    readTime: "6 min read",
    reviewedDate: "Aug 28, 2026",
    img: "/assets/insight_1.jpg",
    widerView:
      "മാനസികാരോഗ്യ പ്രശ്നങ്ങളെക്കുറിച്ച് സംസാരിക്കാൻ മടിക്കേണ്ടതില്ല. ആദ്യഘട്ടത്തിൽ തന്നെ സഹായം തേടുന്നത് ജീവിതനിലവാരം വർദ്ധിപ്പിക്കും.",
    toc: [
      "വിഷാദത്തിന്റെ പ്രധാന ലക്ഷണങ്ങൾ",
      "എപ്പോഴാണ് ഡോക്ടറെ കാണേണ്ടത്?",
      "ചികിത്സയും ജീവിതശൈലീ മാറ്റങ്ങളും",
    ],
    sections: [
      {
        num: "01",
        heading: "വിഷാദത്തിന്റെ പ്രധാന ലക്ഷണങ്ങൾ",
        body: "തുടർച്ചയായ ഉറക്കമില്ലായ്മ അല്ലെങ്കിൽ അമിത ഉറക്കം, ഒന്നിനോടും താല്പര്യമില്ലാത്ത അവസ്ഥ, അകാരണമായ ക്ഷീണം, അശുഭചിന്തകൾ എന്നിവയാണ് പ്രധാന ലക്ഷണങ്ങൾ.",
      },
      {
        num: "02",
        heading: "എപ്പോഴാണ് ഡോക്ടറെ കാണേണ്ടത്?",
        body: "ഈ ലക്ഷണങ്ങൾ രണ്ട് ആഴ്ചയിലധികം നീണ്ടുനിൽക്കുകയും ദൈനംദിന ജോലികളെയും ബന്ധങ്ങളെയും ബാധിക്കുകയും ചെയ്യുമ്പോൾ വിദഗ്ദ്ധ ചികിത്സ തേടണം.",
      },
      {
        num: "03",
        heading: "ചികിത്സയും ജീവിതശൈലീ മാറ്റങ്ങളും",
        body: "സൈക്കോതെറാപ്പി, കോഗ്നിറ്റീവ് ബിഹേവിയറൽ തെറാപ്പി (CBT), ആവശ്യമെങ്കിൽ മരുന്നുകൾ എന്നിവയിലൂടെ മാനസികാരോഗ്യം വീണ്ടെടുക്കാം.",
      },
    ],
  },
  {
    slug: "anxiety-mindful-breathing-malayalam",
    badge: "Anxiety & Worry",
    category: "Anxiety & Worry",
    language: "Malayalam",
    title: "ഉത്കണ്ഠ നിയന്ത്രിക്കാൻ ലളിതമായ ശ്വസന രീതികൾ",
    excerpt:
      "പെട്ടെന്ന് നെഞ്ചിടിപ്പ് കൂടുമ്പോഴും ഉത്കണ്ഠ വർദ്ധിക്കുമ്പോഴും നാഡീവ്യൂഹത്തെ ശാന്തമാക്കാൻ സഹായിക്കുന്ന ലളിതമായ മൈൻഡ്ഫുൾനെസ്സ് ശ്വസന രീതികൾ പരിചയപ്പെടാം.",
    author: "Dr. Marcus Vance",
    authorRole: "Consultant Psychiatrist",
    authorAvatar: "/assets/dr_marcus_vance.jpg",
    readTime: "4 min read",
    reviewedDate: "Aug 29, 2026",
    img: "/assets/anxiety_hero.jpg",
    widerView:
      "ശ്വാസത്തിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്നത് വഴി പാരാസിംപതറ്റിക് നാഡീവ്യൂഹം പ്രവർത്തനക്ഷമമാകുകയും ഉത്കണ്ഠ പെട്ടെന്ന് കുറയുകയും ചെയ്യുന്നു.",
    toc: [
      "ഉത്കണ്ഠയും ശ്വാസഗതിയും",
      "4-7-8 ശ്വസന രീതി",
      "ദിവസവും ശീലിക്കേണ്ട ക്രമങ്ങൾ",
    ],
    sections: [
      {
        num: "01",
        heading: "ഉത്കണ്ഠയും ശ്വാസഗതിയും",
        body: "ഉത്കണ്ഠ അനുഭവപ്പെടുമ്പോൾ ശ്വാസോച്ഛ്വാസം ദ്രുതഗതിയിലാകുന്നു. ഇത് ശരീരത്തിൽ ഓക്സിജൻ-കാർബൺഡയോക്സൈഡ് സന്തുലിതാവസ്ഥയെ ബാധിക്കുന്നു.",
      },
      {
        num: "02",
        heading: "4-7-8 ശ്വസന രീതി",
        body: "4 സെക്കൻഡ് മൂക്കിലൂടെ ശ്വാസം ഉള്ളിലേക്ക് എടുക്കുക, 7 സെക്കൻഡ് പിടിച്ചുനിർത്തുക, 8 സെക്കൻഡ് വായയിലൂടെ സാവധാനം പുറത്തുവിടുക. ഇത് 4 തവണ ആവർത്തിക്കുക.",
      },
      {
        num: "03",
        heading: "ദിവസവും ശീലിക്കേണ്ട ക്രമങ്ങൾ",
        body: "രാവിലെ ഉണരുമ്പോഴും ഉറങ്ങാൻ കിടക്കുന്നതിന് മുൻപും 5 മിനിറ്റ് ശാന്തമായി ഇരുന്നു ശ്വാസത്തിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്നത് ഉത്കണ്ഠ വരാതിരിക്കാൻ സഹായിക്കും.",
      },
    ],
  },
];

export const articleCategories = [
  "Anxiety & Worry",
  "Depression",
  "Therapy",
  "Mindfulness",
  "Parenting",
];

export const articleLanguages = ["English", "Malayalam"];

export const articleDoctors = [
  "Dr. Marcus Vance",
  "Dr. Anand Kumar",
  "Misha Thomas",
  "Riya Varghese",
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
