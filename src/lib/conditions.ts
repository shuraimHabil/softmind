export interface ConditionFAQ {
  question: string;
  answer: string;
}

export interface ConditionReviewer {
  name: string;
  role: string;
  date: string;
}

export interface Condition {
  slug: string;
  name: string;
  group: string;
  url: string;
  sensitivity: string;
  isEmergency: boolean;
  isEatingDisorder: boolean;
  isTrauma: boolean;
  isMedicalFirst: boolean;
  metaDescription: string;
  whatItIs: string;
  commonSigns: string[];
  causes: string[];
  assessment: string;
  treatment: string;
  urgentHelp: string;
  relatedCare: string[];
  faqs: ConditionFAQ[];
  reviewer: ConditionReviewer;
  references: string[];
}

export const conditions: Condition[] = [
  {
    "slug": "anxiety",
    "name": "Anxiety",
    "group": "Anxiety and stress",
    "url": "/conditions/anxiety",
    "sensitivity": "Standard",
    "isEmergency": false,
    "isEatingDisorder": false,
    "isTrauma": false,
    "isMedicalFirst": false,
    "metaDescription": "Evidence-based clinical understanding, symptoms, assessment, and therapeutic treatment for anxiety at Softmind Wellness centres in Kerala and online.",
    "whatItIs": "Anxiety is a recognised clinical condition characterised by specific cognitive, emotional, and behavioural patterns that affect personal wellbeing and everyday life. With appropriate evidence-based intervention, individuals can experience significant relief and long-term recovery.",
    "commonSigns": [
      "Persistent feelings or physical tension associated with anxiety.",
      "Interference with daily routines, work, or interpersonal relationships.",
      "Difficulty concentrating, fluctuating sleep patterns, or feeling easily overwhelmed.",
      "Changes in energy levels or withdrawal from previously enjoyed activities."
    ],
    "causes": [
      "Complex interactions of genetic vulnerability and neurobiological factors.",
      "Psychological stressors, high-pressure life events, or relational difficulties.",
      "Environmental pressures, chronic work stress, or past unresolved experiences."
    ],
    "assessment": "At Softmind, assessment for anxiety is conducted through a structured clinical interview and validated psychological rating scales. Our clinical psychologists assess cognitive patterns, emotional triggers, and situational factors to create a tailored care plan.",
    "treatment": "Treatment typically involves evidence-based psychotherapy, such as Cognitive Behaviour Therapy (CBT). When appropriate, our psychiatrists collaborate with the treating psychologist if medication may support symptom management.",
    "urgentHelp": "If you or someone you care about is experiencing overwhelming distress or severe symptoms, immediate professional support is available. Call the national mental health helpline Tele-MANAS on 14416 (toll-free, 24/7) or visit your nearest hospital emergency department.",
    "relatedCare": [
      "/our-care/psychological-counselling",
      "/our-care/clinical-psychology"
    ],
    "faqs": [
      {
        "question": "How do I know if I need professional help for anxiety?",
        "answer": "If symptoms of anxiety persist for more than two weeks and begin impacting your sleep, relationships, or ability to work, a clinical consultation with a qualified psychologist or psychiatrist is recommended."
      },
      {
        "question": "What therapies are most effective for anxiety?",
        "answer": "Evidence-based modalities such as Cognitive Behaviour Therapy (CBT), mindfulness-informed therapy, and solution-focused interventions are tailored to your specific clinical assessment."
      },
      {
        "question": "Can I receive consultation online?",
        "answer": "Yes, Softmind Wellness offers secure, confidential online consultations in both Malayalam and English, as well as in-person sessions at our centres in Kerala."
      }
    ],
    "reviewer": {
      "name": "Prasad Amore",
      "role": "RCI Licensed Rehabilitation Psychologist",
      "date": "September 2026"
    },
    "references": [
      "World Health Organization (WHO). Comprehensive Mental Health Action Plan.",
      "American Psychological Association (APA). Clinical Practice Guidelines.",
      "Indian Journal of Psychiatry / National Institute of Mental Health and Neurosciences (NIMHANS)."
    ]
  },
  {
    "slug": "generalised-anxiety-disorder",
    "name": "Generalised anxiety disorder",
    "group": "Anxiety and stress",
    "url": "/conditions/generalised-anxiety-disorder",
    "sensitivity": "Standard",
    "isEmergency": false,
    "isEatingDisorder": false,
    "isTrauma": false,
    "isMedicalFirst": false,
    "metaDescription": "Evidence-based clinical understanding, symptoms, assessment, and therapeutic treatment for generalised anxiety disorder at Softmind Wellness centres in Kerala and online.",
    "whatItIs": "Generalised anxiety disorder is a recognised clinical condition characterised by specific cognitive, emotional, and behavioural patterns that affect personal wellbeing and everyday life. With appropriate evidence-based intervention, individuals can experience significant relief and long-term recovery.",
    "commonSigns": [
      "Persistent feelings or physical tension associated with generalised anxiety disorder.",
      "Interference with daily routines, work, or interpersonal relationships.",
      "Difficulty concentrating, fluctuating sleep patterns, or feeling easily overwhelmed.",
      "Changes in energy levels or withdrawal from previously enjoyed activities."
    ],
    "causes": [
      "Complex interactions of genetic vulnerability and neurobiological factors.",
      "Psychological stressors, high-pressure life events, or relational difficulties.",
      "Environmental pressures, chronic work stress, or past unresolved experiences."
    ],
    "assessment": "At Softmind, assessment for generalised anxiety disorder is conducted through a structured clinical interview and validated psychological rating scales. Our clinical psychologists assess cognitive patterns, emotional triggers, and situational factors to create a tailored care plan.",
    "treatment": "Treatment typically involves evidence-based psychotherapy, such as Cognitive Behaviour Therapy (CBT). When appropriate, our psychiatrists collaborate with the treating psychologist if medication may support symptom management.",
    "urgentHelp": "If you or someone you care about is experiencing overwhelming distress or severe symptoms, immediate professional support is available. Call the national mental health helpline Tele-MANAS on 14416 (toll-free, 24/7) or visit your nearest hospital emergency department.",
    "relatedCare": [
      "/our-care/clinical-psychology"
    ],
    "faqs": [
      {
        "question": "How do I know if I need professional help for generalised anxiety disorder?",
        "answer": "If symptoms of generalised anxiety disorder persist for more than two weeks and begin impacting your sleep, relationships, or ability to work, a clinical consultation with a qualified psychologist or psychiatrist is recommended."
      },
      {
        "question": "What therapies are most effective for generalised anxiety disorder?",
        "answer": "Evidence-based modalities such as Cognitive Behaviour Therapy (CBT), mindfulness-informed therapy, and solution-focused interventions are tailored to your specific clinical assessment."
      },
      {
        "question": "Can I receive consultation online?",
        "answer": "Yes, Softmind Wellness offers secure, confidential online consultations in both Malayalam and English, as well as in-person sessions at our centres in Kerala."
      }
    ],
    "reviewer": {
      "name": "Prasad Amore",
      "role": "RCI Licensed Rehabilitation Psychologist",
      "date": "September 2026"
    },
    "references": [
      "World Health Organization (WHO). Comprehensive Mental Health Action Plan.",
      "American Psychological Association (APA). Clinical Practice Guidelines.",
      "Indian Journal of Psychiatry / National Institute of Mental Health and Neurosciences (NIMHANS)."
    ]
  },
  {
    "slug": "social-anxiety",
    "name": "Social anxiety disorder",
    "group": "Anxiety and stress",
    "url": "/conditions/social-anxiety",
    "sensitivity": "Standard",
    "isEmergency": false,
    "isEatingDisorder": false,
    "isTrauma": false,
    "isMedicalFirst": false,
    "metaDescription": "Evidence-based clinical understanding, symptoms, assessment, and therapeutic treatment for social anxiety disorder at Softmind Wellness centres in Kerala and online.",
    "whatItIs": "Social anxiety disorder is a recognised clinical condition characterised by specific cognitive, emotional, and behavioural patterns that affect personal wellbeing and everyday life. With appropriate evidence-based intervention, individuals can experience significant relief and long-term recovery.",
    "commonSigns": [
      "Persistent feelings or physical tension associated with social anxiety disorder.",
      "Interference with daily routines, work, or interpersonal relationships.",
      "Difficulty concentrating, fluctuating sleep patterns, or feeling easily overwhelmed.",
      "Changes in energy levels or withdrawal from previously enjoyed activities."
    ],
    "causes": [
      "Complex interactions of genetic vulnerability and neurobiological factors.",
      "Psychological stressors, high-pressure life events, or relational difficulties.",
      "Environmental pressures, chronic work stress, or past unresolved experiences."
    ],
    "assessment": "At Softmind, assessment for social anxiety disorder is conducted through a structured clinical interview and validated psychological rating scales. Our clinical psychologists assess cognitive patterns, emotional triggers, and situational factors to create a tailored care plan.",
    "treatment": "Treatment typically involves evidence-based psychotherapy, such as Cognitive Behaviour Therapy (CBT). When appropriate, our psychiatrists collaborate with the treating psychologist if medication may support symptom management.",
    "urgentHelp": "If you or someone you care about is experiencing overwhelming distress or severe symptoms, immediate professional support is available. Call the national mental health helpline Tele-MANAS on 14416 (toll-free, 24/7) or visit your nearest hospital emergency department.",
    "relatedCare": [
      "/our-care/clinical-psychology"
    ],
    "faqs": [
      {
        "question": "How do I know if I need professional help for social anxiety disorder?",
        "answer": "If symptoms of social anxiety disorder persist for more than two weeks and begin impacting your sleep, relationships, or ability to work, a clinical consultation with a qualified psychologist or psychiatrist is recommended."
      },
      {
        "question": "What therapies are most effective for social anxiety disorder?",
        "answer": "Evidence-based modalities such as Cognitive Behaviour Therapy (CBT), mindfulness-informed therapy, and solution-focused interventions are tailored to your specific clinical assessment."
      },
      {
        "question": "Can I receive consultation online?",
        "answer": "Yes, Softmind Wellness offers secure, confidential online consultations in both Malayalam and English, as well as in-person sessions at our centres in Kerala."
      }
    ],
    "reviewer": {
      "name": "Prasad Amore",
      "role": "RCI Licensed Rehabilitation Psychologist",
      "date": "September 2026"
    },
    "references": [
      "World Health Organization (WHO). Comprehensive Mental Health Action Plan.",
      "American Psychological Association (APA). Clinical Practice Guidelines.",
      "Indian Journal of Psychiatry / National Institute of Mental Health and Neurosciences (NIMHANS)."
    ]
  },
  {
    "slug": "panic-disorder",
    "name": "Panic disorder",
    "group": "Anxiety and stress",
    "url": "/conditions/panic-disorder",
    "sensitivity": "Standard",
    "isEmergency": false,
    "isEatingDisorder": false,
    "isTrauma": false,
    "isMedicalFirst": false,
    "metaDescription": "Evidence-based clinical understanding, symptoms, assessment, and therapeutic treatment for panic disorder at Softmind Wellness centres in Kerala and online.",
    "whatItIs": "Panic disorder is a recognised clinical condition characterised by specific cognitive, emotional, and behavioural patterns that affect personal wellbeing and everyday life. With appropriate evidence-based intervention, individuals can experience significant relief and long-term recovery.",
    "commonSigns": [
      "Persistent feelings or physical tension associated with panic disorder.",
      "Interference with daily routines, work, or interpersonal relationships.",
      "Difficulty concentrating, fluctuating sleep patterns, or feeling easily overwhelmed.",
      "Changes in energy levels or withdrawal from previously enjoyed activities."
    ],
    "causes": [
      "Complex interactions of genetic vulnerability and neurobiological factors.",
      "Psychological stressors, high-pressure life events, or relational difficulties.",
      "Environmental pressures, chronic work stress, or past unresolved experiences."
    ],
    "assessment": "At Softmind, assessment for panic disorder is conducted through a structured clinical interview and validated psychological rating scales. Our clinical psychologists assess cognitive patterns, emotional triggers, and situational factors to create a tailored care plan.",
    "treatment": "Treatment typically involves evidence-based psychotherapy, such as Cognitive Behaviour Therapy (CBT). When appropriate, our psychiatrists collaborate with the treating psychologist if medication may support symptom management.",
    "urgentHelp": "If you or someone you care about is experiencing overwhelming distress or severe symptoms, immediate professional support is available. Call the national mental health helpline Tele-MANAS on 14416 (toll-free, 24/7) or visit your nearest hospital emergency department.",
    "relatedCare": [
      "/our-care/clinical-psychology"
    ],
    "faqs": [
      {
        "question": "How do I know if I need professional help for panic disorder?",
        "answer": "If symptoms of panic disorder persist for more than two weeks and begin impacting your sleep, relationships, or ability to work, a clinical consultation with a qualified psychologist or psychiatrist is recommended."
      },
      {
        "question": "What therapies are most effective for panic disorder?",
        "answer": "Evidence-based modalities such as Cognitive Behaviour Therapy (CBT), mindfulness-informed therapy, and solution-focused interventions are tailored to your specific clinical assessment."
      },
      {
        "question": "Can I receive consultation online?",
        "answer": "Yes, Softmind Wellness offers secure, confidential online consultations in both Malayalam and English, as well as in-person sessions at our centres in Kerala."
      }
    ],
    "reviewer": {
      "name": "Prasad Amore",
      "role": "RCI Licensed Rehabilitation Psychologist",
      "date": "September 2026"
    },
    "references": [
      "World Health Organization (WHO). Comprehensive Mental Health Action Plan.",
      "American Psychological Association (APA). Clinical Practice Guidelines.",
      "Indian Journal of Psychiatry / National Institute of Mental Health and Neurosciences (NIMHANS)."
    ]
  },
  {
    "slug": "health-anxiety",
    "name": "Health anxiety",
    "group": "Anxiety and stress",
    "url": "/conditions/health-anxiety",
    "sensitivity": "Standard",
    "isEmergency": false,
    "isEatingDisorder": false,
    "isTrauma": false,
    "isMedicalFirst": false,
    "metaDescription": "Evidence-based clinical understanding, symptoms, assessment, and therapeutic treatment for health anxiety at Softmind Wellness centres in Kerala and online.",
    "whatItIs": "Health anxiety is a recognised clinical condition characterised by specific cognitive, emotional, and behavioural patterns that affect personal wellbeing and everyday life. With appropriate evidence-based intervention, individuals can experience significant relief and long-term recovery.",
    "commonSigns": [
      "Persistent feelings or physical tension associated with health anxiety.",
      "Interference with daily routines, work, or interpersonal relationships.",
      "Difficulty concentrating, fluctuating sleep patterns, or feeling easily overwhelmed.",
      "Changes in energy levels or withdrawal from previously enjoyed activities."
    ],
    "causes": [
      "Complex interactions of genetic vulnerability and neurobiological factors.",
      "Psychological stressors, high-pressure life events, or relational difficulties.",
      "Environmental pressures, chronic work stress, or past unresolved experiences."
    ],
    "assessment": "At Softmind, assessment for health anxiety is conducted through a structured clinical interview and validated psychological rating scales. Our clinical psychologists assess cognitive patterns, emotional triggers, and situational factors to create a tailored care plan.",
    "treatment": "Treatment typically involves evidence-based psychotherapy, such as Cognitive Behaviour Therapy (CBT). When appropriate, our psychiatrists collaborate with the treating psychologist if medication may support symptom management.",
    "urgentHelp": "If you or someone you care about is experiencing overwhelming distress or severe symptoms, immediate professional support is available. Call the national mental health helpline Tele-MANAS on 14416 (toll-free, 24/7) or visit your nearest hospital emergency department.",
    "relatedCare": [
      "/our-care/clinical-psychology"
    ],
    "faqs": [
      {
        "question": "How do I know if I need professional help for health anxiety?",
        "answer": "If symptoms of health anxiety persist for more than two weeks and begin impacting your sleep, relationships, or ability to work, a clinical consultation with a qualified psychologist or psychiatrist is recommended."
      },
      {
        "question": "What therapies are most effective for health anxiety?",
        "answer": "Evidence-based modalities such as Cognitive Behaviour Therapy (CBT), mindfulness-informed therapy, and solution-focused interventions are tailored to your specific clinical assessment."
      },
      {
        "question": "Can I receive consultation online?",
        "answer": "Yes, Softmind Wellness offers secure, confidential online consultations in both Malayalam and English, as well as in-person sessions at our centres in Kerala."
      }
    ],
    "reviewer": {
      "name": "Prasad Amore",
      "role": "RCI Licensed Rehabilitation Psychologist",
      "date": "September 2026"
    },
    "references": [
      "World Health Organization (WHO). Comprehensive Mental Health Action Plan.",
      "American Psychological Association (APA). Clinical Practice Guidelines.",
      "Indian Journal of Psychiatry / National Institute of Mental Health and Neurosciences (NIMHANS)."
    ]
  },
  {
    "slug": "agoraphobia",
    "name": "Agoraphobia",
    "group": "Anxiety and stress",
    "url": "/conditions/agoraphobia",
    "sensitivity": "Standard",
    "isEmergency": false,
    "isEatingDisorder": false,
    "isTrauma": false,
    "isMedicalFirst": false,
    "metaDescription": "Evidence-based clinical understanding, symptoms, assessment, and therapeutic treatment for agoraphobia at Softmind Wellness centres in Kerala and online.",
    "whatItIs": "Agoraphobia is a recognised clinical condition characterised by specific cognitive, emotional, and behavioural patterns that affect personal wellbeing and everyday life. With appropriate evidence-based intervention, individuals can experience significant relief and long-term recovery.",
    "commonSigns": [
      "Persistent feelings or physical tension associated with agoraphobia.",
      "Interference with daily routines, work, or interpersonal relationships.",
      "Difficulty concentrating, fluctuating sleep patterns, or feeling easily overwhelmed.",
      "Changes in energy levels or withdrawal from previously enjoyed activities."
    ],
    "causes": [
      "Complex interactions of genetic vulnerability and neurobiological factors.",
      "Psychological stressors, high-pressure life events, or relational difficulties.",
      "Environmental pressures, chronic work stress, or past unresolved experiences."
    ],
    "assessment": "At Softmind, assessment for agoraphobia is conducted through a structured clinical interview and validated psychological rating scales. Our clinical psychologists assess cognitive patterns, emotional triggers, and situational factors to create a tailored care plan.",
    "treatment": "Treatment typically involves evidence-based psychotherapy, such as Cognitive Behaviour Therapy (CBT). When appropriate, our psychiatrists collaborate with the treating psychologist if medication may support symptom management.",
    "urgentHelp": "If you or someone you care about is experiencing overwhelming distress or severe symptoms, immediate professional support is available. Call the national mental health helpline Tele-MANAS on 14416 (toll-free, 24/7) or visit your nearest hospital emergency department.",
    "relatedCare": [
      "/our-care/clinical-psychology"
    ],
    "faqs": [
      {
        "question": "How do I know if I need professional help for agoraphobia?",
        "answer": "If symptoms of agoraphobia persist for more than two weeks and begin impacting your sleep, relationships, or ability to work, a clinical consultation with a qualified psychologist or psychiatrist is recommended."
      },
      {
        "question": "What therapies are most effective for agoraphobia?",
        "answer": "Evidence-based modalities such as Cognitive Behaviour Therapy (CBT), mindfulness-informed therapy, and solution-focused interventions are tailored to your specific clinical assessment."
      },
      {
        "question": "Can I receive consultation online?",
        "answer": "Yes, Softmind Wellness offers secure, confidential online consultations in both Malayalam and English, as well as in-person sessions at our centres in Kerala."
      }
    ],
    "reviewer": {
      "name": "Prasad Amore",
      "role": "RCI Licensed Rehabilitation Psychologist",
      "date": "September 2026"
    },
    "references": [
      "World Health Organization (WHO). Comprehensive Mental Health Action Plan.",
      "American Psychological Association (APA). Clinical Practice Guidelines.",
      "Indian Journal of Psychiatry / National Institute of Mental Health and Neurosciences (NIMHANS)."
    ]
  },
  {
    "slug": "specific-phobia",
    "name": "Specific phobia",
    "group": "Anxiety and stress",
    "url": "/conditions/specific-phobia",
    "sensitivity": "Standard",
    "isEmergency": false,
    "isEatingDisorder": false,
    "isTrauma": false,
    "isMedicalFirst": false,
    "metaDescription": "Evidence-based clinical understanding, symptoms, assessment, and therapeutic treatment for specific phobia at Softmind Wellness centres in Kerala and online.",
    "whatItIs": "Specific phobia is a recognised clinical condition characterised by specific cognitive, emotional, and behavioural patterns that affect personal wellbeing and everyday life. With appropriate evidence-based intervention, individuals can experience significant relief and long-term recovery.",
    "commonSigns": [
      "Persistent feelings or physical tension associated with specific phobia.",
      "Interference with daily routines, work, or interpersonal relationships.",
      "Difficulty concentrating, fluctuating sleep patterns, or feeling easily overwhelmed.",
      "Changes in energy levels or withdrawal from previously enjoyed activities."
    ],
    "causes": [
      "Complex interactions of genetic vulnerability and neurobiological factors.",
      "Psychological stressors, high-pressure life events, or relational difficulties.",
      "Environmental pressures, chronic work stress, or past unresolved experiences."
    ],
    "assessment": "At Softmind, assessment for specific phobia is conducted through a structured clinical interview and validated psychological rating scales. Our clinical psychologists assess cognitive patterns, emotional triggers, and situational factors to create a tailored care plan.",
    "treatment": "Treatment typically involves evidence-based psychotherapy, such as Cognitive Behaviour Therapy (CBT). When appropriate, our psychiatrists collaborate with the treating psychologist if medication may support symptom management.",
    "urgentHelp": "If you or someone you care about is experiencing overwhelming distress or severe symptoms, immediate professional support is available. Call the national mental health helpline Tele-MANAS on 14416 (toll-free, 24/7) or visit your nearest hospital emergency department.",
    "relatedCare": [
      "/our-care/clinical-psychology"
    ],
    "faqs": [
      {
        "question": "How do I know if I need professional help for specific phobia?",
        "answer": "If symptoms of specific phobia persist for more than two weeks and begin impacting your sleep, relationships, or ability to work, a clinical consultation with a qualified psychologist or psychiatrist is recommended."
      },
      {
        "question": "What therapies are most effective for specific phobia?",
        "answer": "Evidence-based modalities such as Cognitive Behaviour Therapy (CBT), mindfulness-informed therapy, and solution-focused interventions are tailored to your specific clinical assessment."
      },
      {
        "question": "Can I receive consultation online?",
        "answer": "Yes, Softmind Wellness offers secure, confidential online consultations in both Malayalam and English, as well as in-person sessions at our centres in Kerala."
      }
    ],
    "reviewer": {
      "name": "Prasad Amore",
      "role": "RCI Licensed Rehabilitation Psychologist",
      "date": "September 2026"
    },
    "references": [
      "World Health Organization (WHO). Comprehensive Mental Health Action Plan.",
      "American Psychological Association (APA). Clinical Practice Guidelines.",
      "Indian Journal of Psychiatry / National Institute of Mental Health and Neurosciences (NIMHANS)."
    ]
  },
  {
    "slug": "stress",
    "name": "Stress",
    "group": "Anxiety and stress",
    "url": "/conditions/stress",
    "sensitivity": "Standard",
    "isEmergency": false,
    "isEatingDisorder": false,
    "isTrauma": false,
    "isMedicalFirst": false,
    "metaDescription": "Evidence-based clinical understanding, symptoms, assessment, and therapeutic treatment for stress at Softmind Wellness centres in Kerala and online.",
    "whatItIs": "Stress is a recognised clinical condition characterised by specific cognitive, emotional, and behavioural patterns that affect personal wellbeing and everyday life. With appropriate evidence-based intervention, individuals can experience significant relief and long-term recovery.",
    "commonSigns": [
      "Persistent feelings or physical tension associated with stress.",
      "Interference with daily routines, work, or interpersonal relationships.",
      "Difficulty concentrating, fluctuating sleep patterns, or feeling easily overwhelmed.",
      "Changes in energy levels or withdrawal from previously enjoyed activities."
    ],
    "causes": [
      "Complex interactions of genetic vulnerability and neurobiological factors.",
      "Psychological stressors, high-pressure life events, or relational difficulties.",
      "Environmental pressures, chronic work stress, or past unresolved experiences."
    ],
    "assessment": "At Softmind, assessment for stress is conducted through a structured clinical interview and validated psychological rating scales. Our clinical psychologists assess cognitive patterns, emotional triggers, and situational factors to create a tailored care plan.",
    "treatment": "Treatment typically involves evidence-based psychotherapy, such as Cognitive Behaviour Therapy (CBT). When appropriate, our psychiatrists collaborate with the treating psychologist if medication may support symptom management.",
    "urgentHelp": "If you or someone you care about is experiencing overwhelming distress or severe symptoms, immediate professional support is available. Call the national mental health helpline Tele-MANAS on 14416 (toll-free, 24/7) or visit your nearest hospital emergency department.",
    "relatedCare": [
      "/our-care/psychological-counselling"
    ],
    "faqs": [
      {
        "question": "How do I know if I need professional help for stress?",
        "answer": "If symptoms of stress persist for more than two weeks and begin impacting your sleep, relationships, or ability to work, a clinical consultation with a qualified psychologist or psychiatrist is recommended."
      },
      {
        "question": "What therapies are most effective for stress?",
        "answer": "Evidence-based modalities such as Cognitive Behaviour Therapy (CBT), mindfulness-informed therapy, and solution-focused interventions are tailored to your specific clinical assessment."
      },
      {
        "question": "Can I receive consultation online?",
        "answer": "Yes, Softmind Wellness offers secure, confidential online consultations in both Malayalam and English, as well as in-person sessions at our centres in Kerala."
      }
    ],
    "reviewer": {
      "name": "Prasad Amore",
      "role": "RCI Licensed Rehabilitation Psychologist",
      "date": "September 2026"
    },
    "references": [
      "World Health Organization (WHO). Comprehensive Mental Health Action Plan.",
      "American Psychological Association (APA). Clinical Practice Guidelines.",
      "Indian Journal of Psychiatry / National Institute of Mental Health and Neurosciences (NIMHANS)."
    ]
  },
  {
    "slug": "depression",
    "name": "Depression",
    "group": "Mood",
    "url": "/conditions/depression",
    "sensitivity": "Standard",
    "isEmergency": false,
    "isEatingDisorder": false,
    "isTrauma": false,
    "isMedicalFirst": false,
    "metaDescription": "Evidence-based clinical understanding, symptoms, assessment, and therapeutic treatment for depression at Softmind Wellness centres in Kerala and online.",
    "whatItIs": "Depression is a recognised clinical condition characterised by specific cognitive, emotional, and behavioural patterns that affect personal wellbeing and everyday life. With appropriate evidence-based intervention, individuals can experience significant relief and long-term recovery.",
    "commonSigns": [
      "Persistent feelings or physical tension associated with depression.",
      "Interference with daily routines, work, or interpersonal relationships.",
      "Difficulty concentrating, fluctuating sleep patterns, or feeling easily overwhelmed.",
      "Changes in energy levels or withdrawal from previously enjoyed activities."
    ],
    "causes": [
      "Complex interactions of genetic vulnerability and neurobiological factors.",
      "Psychological stressors, high-pressure life events, or relational difficulties.",
      "Environmental pressures, chronic work stress, or past unresolved experiences."
    ],
    "assessment": "At Softmind, assessment for depression is conducted through a structured clinical interview and validated psychological rating scales. Our clinical psychologists assess cognitive patterns, emotional triggers, and situational factors to create a tailored care plan.",
    "treatment": "Treatment typically involves evidence-based psychotherapy, such as Cognitive Behaviour Therapy (CBT). When appropriate, our psychiatrists collaborate with the treating psychologist if medication may support symptom management.",
    "urgentHelp": "If you or someone you care about is experiencing overwhelming distress or severe symptoms, immediate professional support is available. Call the national mental health helpline Tele-MANAS on 14416 (toll-free, 24/7) or visit your nearest hospital emergency department.",
    "relatedCare": [
      "/our-care/clinical-psychology",
      "/our-care/psychiatry"
    ],
    "faqs": [
      {
        "question": "How do I know if I need professional help for depression?",
        "answer": "If symptoms of depression persist for more than two weeks and begin impacting your sleep, relationships, or ability to work, a clinical consultation with a qualified psychologist or psychiatrist is recommended."
      },
      {
        "question": "What therapies are most effective for depression?",
        "answer": "Evidence-based modalities such as Cognitive Behaviour Therapy (CBT), mindfulness-informed therapy, and solution-focused interventions are tailored to your specific clinical assessment."
      },
      {
        "question": "Can I receive consultation online?",
        "answer": "Yes, Softmind Wellness offers secure, confidential online consultations in both Malayalam and English, as well as in-person sessions at our centres in Kerala."
      }
    ],
    "reviewer": {
      "name": "Prasad Amore",
      "role": "RCI Licensed Rehabilitation Psychologist",
      "date": "September 2026"
    },
    "references": [
      "World Health Organization (WHO). Comprehensive Mental Health Action Plan.",
      "American Psychological Association (APA). Clinical Practice Guidelines.",
      "Indian Journal of Psychiatry / National Institute of Mental Health and Neurosciences (NIMHANS)."
    ]
  },
  {
    "slug": "suicidal-thoughts",
    "name": "Suicidal thoughts",
    "group": "Mood",
    "url": "/conditions/suicidal-thoughts",
    "sensitivity": "HIGH: follow safe messaging guidelines; Tele-MANAS 14416 above the fold; no method detail; clinical sign-off.",
    "isEmergency": true,
    "isEatingDisorder": false,
    "isTrauma": false,
    "isMedicalFirst": false,
    "metaDescription": "Evidence-based clinical understanding, symptoms, assessment, and therapeutic treatment for suicidal thoughts at Softmind Wellness centres in Kerala and online.",
    "whatItIs": "Suicidal thoughts is a recognised clinical condition characterised by specific cognitive, emotional, and behavioural patterns that affect personal wellbeing and everyday life. With appropriate evidence-based intervention, individuals can experience significant relief and long-term recovery.",
    "commonSigns": [
      "Feeling overwhelmed by unbearable emotional pain or hopelessness.",
      "Preoccupation with thoughts of ending one's life or feeling like a burden to others.",
      "Withdrawing from loved ones, saying goodbyes, or giving away personal possessions.",
      "Sudden calmness after a period of intense distress."
    ],
    "causes": [
      "Complex interactions of genetic vulnerability and neurobiological factors.",
      "Psychological stressors, high-pressure life events, or relational difficulties.",
      "Environmental pressures, chronic work stress, or past unresolved experiences."
    ],
    "assessment": "At Softmind, assessment for suicidal thoughts is conducted through a structured clinical interview and validated psychological rating scales. Our clinical psychologists assess cognitive patterns, emotional triggers, and situational factors to create a tailored care plan.",
    "treatment": "Treatment typically involves evidence-based psychotherapy, such as Cognitive Behaviour Therapy (CBT). When appropriate, our psychiatrists collaborate with the treating psychologist if medication may support symptom management.",
    "urgentHelp": "If you or someone you care about is experiencing overwhelming distress or severe symptoms, immediate professional support is available. Call the national mental health helpline Tele-MANAS on 14416 (toll-free, 24/7) or visit your nearest hospital emergency department.",
    "relatedCare": [
      "/our-care/psychiatry",
      "/our-care/psychological-counselling"
    ],
    "faqs": [
      {
        "question": "How do I know if I need professional help for suicidal thoughts?",
        "answer": "If symptoms of suicidal thoughts persist for more than two weeks and begin impacting your sleep, relationships, or ability to work, a clinical consultation with a qualified psychologist or psychiatrist is recommended."
      },
      {
        "question": "What therapies are most effective for suicidal thoughts?",
        "answer": "Evidence-based modalities such as Cognitive Behaviour Therapy (CBT), mindfulness-informed therapy, and solution-focused interventions are tailored to your specific clinical assessment."
      },
      {
        "question": "Can I receive consultation online?",
        "answer": "Yes, Softmind Wellness offers secure, confidential online consultations in both Malayalam and English, as well as in-person sessions at our centres in Kerala."
      }
    ],
    "reviewer": {
      "name": "Prasad Amore",
      "role": "RCI Licensed Rehabilitation Psychologist",
      "date": "September 2026"
    },
    "references": [
      "World Health Organization (WHO). Comprehensive Mental Health Action Plan.",
      "American Psychological Association (APA). Clinical Practice Guidelines.",
      "Indian Journal of Psychiatry / National Institute of Mental Health and Neurosciences (NIMHANS)."
    ]
  },
  {
    "slug": "obsessive-compulsive-personality-disorder",
    "name": "Obsessive-compulsive personality disorder",
    "group": "Obsessions and compulsions",
    "url": "/conditions/obsessive-compulsive-personality-disorder",
    "sensitivity": "Consider adding a separate OCD page; the old site only had OCPD.",
    "isEmergency": false,
    "isEatingDisorder": false,
    "isTrauma": false,
    "isMedicalFirst": false,
    "metaDescription": "Evidence-based clinical understanding, symptoms, assessment, and therapeutic treatment for obsessive-compulsive personality disorder at Softmind Wellness centres in Kerala and online.",
    "whatItIs": "Obsessive-compulsive personality disorder is a recognised clinical condition characterised by specific cognitive, emotional, and behavioural patterns that affect personal wellbeing and everyday life. With appropriate evidence-based intervention, individuals can experience significant relief and long-term recovery.",
    "commonSigns": [
      "Persistent feelings or physical tension associated with obsessive-compulsive personality disorder.",
      "Interference with daily routines, work, or interpersonal relationships.",
      "Difficulty concentrating, fluctuating sleep patterns, or feeling easily overwhelmed.",
      "Changes in energy levels or withdrawal from previously enjoyed activities."
    ],
    "causes": [
      "Complex interactions of genetic vulnerability and neurobiological factors.",
      "Psychological stressors, high-pressure life events, or relational difficulties.",
      "Environmental pressures, chronic work stress, or past unresolved experiences."
    ],
    "assessment": "At Softmind, assessment for obsessive-compulsive personality disorder is conducted through a structured clinical interview and validated psychological rating scales. Our clinical psychologists assess cognitive patterns, emotional triggers, and situational factors to create a tailored care plan.",
    "treatment": "Treatment typically involves evidence-based psychotherapy, such as Cognitive Behaviour Therapy (CBT). When appropriate, our psychiatrists collaborate with the treating psychologist if medication may support symptom management.",
    "urgentHelp": "If you or someone you care about is experiencing overwhelming distress or severe symptoms, immediate professional support is available. Call the national mental health helpline Tele-MANAS on 14416 (toll-free, 24/7) or visit your nearest hospital emergency department.",
    "relatedCare": [
      "/our-care/clinical-psychology"
    ],
    "faqs": [
      {
        "question": "How do I know if I need professional help for obsessive-compulsive personality disorder?",
        "answer": "If symptoms of obsessive-compulsive personality disorder persist for more than two weeks and begin impacting your sleep, relationships, or ability to work, a clinical consultation with a qualified psychologist or psychiatrist is recommended."
      },
      {
        "question": "What therapies are most effective for obsessive-compulsive personality disorder?",
        "answer": "Evidence-based modalities such as Cognitive Behaviour Therapy (CBT), mindfulness-informed therapy, and solution-focused interventions are tailored to your specific clinical assessment."
      },
      {
        "question": "Can I receive consultation online?",
        "answer": "Yes, Softmind Wellness offers secure, confidential online consultations in both Malayalam and English, as well as in-person sessions at our centres in Kerala."
      }
    ],
    "reviewer": {
      "name": "Prasad Amore",
      "role": "RCI Licensed Rehabilitation Psychologist",
      "date": "September 2026"
    },
    "references": [
      "World Health Organization (WHO). Comprehensive Mental Health Action Plan.",
      "American Psychological Association (APA). Clinical Practice Guidelines.",
      "Indian Journal of Psychiatry / National Institute of Mental Health and Neurosciences (NIMHANS)."
    ]
  },
  {
    "slug": "ocd",
    "name": "Obsessive-compulsive disorder (OCD)",
    "group": "Obsessions and compulsions",
    "url": "/conditions/ocd",
    "sensitivity": "Proposed new page; high search demand.",
    "isEmergency": false,
    "isEatingDisorder": false,
    "isTrauma": false,
    "isMedicalFirst": false,
    "metaDescription": "Evidence-based clinical understanding, symptoms, assessment, and therapeutic treatment for obsessive-compulsive disorder (ocd) at Softmind Wellness centres in Kerala and online.",
    "whatItIs": "Obsessive-compulsive disorder (OCD) is a recognised clinical condition characterised by specific cognitive, emotional, and behavioural patterns that affect personal wellbeing and everyday life. With appropriate evidence-based intervention, individuals can experience significant relief and long-term recovery.",
    "commonSigns": [
      "Persistent feelings or physical tension associated with obsessive-compulsive disorder (ocd).",
      "Interference with daily routines, work, or interpersonal relationships.",
      "Difficulty concentrating, fluctuating sleep patterns, or feeling easily overwhelmed.",
      "Changes in energy levels or withdrawal from previously enjoyed activities."
    ],
    "causes": [
      "Complex interactions of genetic vulnerability and neurobiological factors.",
      "Psychological stressors, high-pressure life events, or relational difficulties.",
      "Environmental pressures, chronic work stress, or past unresolved experiences."
    ],
    "assessment": "At Softmind, assessment for obsessive-compulsive disorder (ocd) is conducted through a structured clinical interview and validated psychological rating scales. Our clinical psychologists assess cognitive patterns, emotional triggers, and situational factors to create a tailored care plan.",
    "treatment": "Treatment typically involves evidence-based psychotherapy, such as Cognitive Behaviour Therapy (CBT). When appropriate, our psychiatrists collaborate with the treating psychologist if medication may support symptom management.",
    "urgentHelp": "If you or someone you care about is experiencing overwhelming distress or severe symptoms, immediate professional support is available. Call the national mental health helpline Tele-MANAS on 14416 (toll-free, 24/7) or visit your nearest hospital emergency department.",
    "relatedCare": [
      "/our-care/clinical-psychology",
      "/our-care/psychiatry"
    ],
    "faqs": [
      {
        "question": "How do I know if I need professional help for obsessive-compulsive disorder (ocd)?",
        "answer": "If symptoms of obsessive-compulsive disorder (ocd) persist for more than two weeks and begin impacting your sleep, relationships, or ability to work, a clinical consultation with a qualified psychologist or psychiatrist is recommended."
      },
      {
        "question": "What therapies are most effective for obsessive-compulsive disorder (ocd)?",
        "answer": "Evidence-based modalities such as Cognitive Behaviour Therapy (CBT), mindfulness-informed therapy, and solution-focused interventions are tailored to your specific clinical assessment."
      },
      {
        "question": "Can I receive consultation online?",
        "answer": "Yes, Softmind Wellness offers secure, confidential online consultations in both Malayalam and English, as well as in-person sessions at our centres in Kerala."
      }
    ],
    "reviewer": {
      "name": "Prasad Amore",
      "role": "RCI Licensed Rehabilitation Psychologist",
      "date": "September 2026"
    },
    "references": [
      "World Health Organization (WHO). Comprehensive Mental Health Action Plan.",
      "American Psychological Association (APA). Clinical Practice Guidelines.",
      "Indian Journal of Psychiatry / National Institute of Mental Health and Neurosciences (NIMHANS)."
    ]
  },
  {
    "slug": "ptsd",
    "name": "Post-traumatic stress disorder (PTSD)",
    "group": "Trauma",
    "url": "/conditions/ptsd",
    "sensitivity": "Trauma-informed language; content warning at top.",
    "isEmergency": false,
    "isEatingDisorder": false,
    "isTrauma": true,
    "isMedicalFirst": false,
    "metaDescription": "Evidence-based clinical understanding, symptoms, assessment, and therapeutic treatment for post-traumatic stress disorder (ptsd) at Softmind Wellness centres in Kerala and online.",
    "whatItIs": "Post-traumatic stress disorder (PTSD) is a recognised clinical condition characterised by specific cognitive, emotional, and behavioural patterns that affect personal wellbeing and everyday life. With appropriate evidence-based intervention, individuals can experience significant relief and long-term recovery.",
    "commonSigns": [
      "Persistent feelings or physical tension associated with post-traumatic stress disorder (ptsd).",
      "Interference with daily routines, work, or interpersonal relationships.",
      "Difficulty concentrating, fluctuating sleep patterns, or feeling easily overwhelmed.",
      "Changes in energy levels or withdrawal from previously enjoyed activities."
    ],
    "causes": [
      "Complex interactions of genetic vulnerability and neurobiological factors.",
      "Psychological stressors, high-pressure life events, or relational difficulties.",
      "Environmental pressures, chronic work stress, or past unresolved experiences."
    ],
    "assessment": "At Softmind, assessment for post-traumatic stress disorder (ptsd) is conducted through a structured clinical interview and validated psychological rating scales. Our clinical psychologists assess cognitive patterns, emotional triggers, and situational factors to create a tailored care plan.",
    "treatment": "Treatment typically involves evidence-based psychotherapy, such as Cognitive Behaviour Therapy (CBT). When appropriate, our psychiatrists collaborate with the treating psychologist if medication may support symptom management.",
    "urgentHelp": "If you or someone you care about is experiencing overwhelming distress or severe symptoms, immediate professional support is available. Call the national mental health helpline Tele-MANAS on 14416 (toll-free, 24/7) or visit your nearest hospital emergency department.",
    "relatedCare": [
      "/our-care/psychotherapy",
      "/our-care/clinical-psychology"
    ],
    "faqs": [
      {
        "question": "How do I know if I need professional help for post-traumatic stress disorder (ptsd)?",
        "answer": "If symptoms of post-traumatic stress disorder (ptsd) persist for more than two weeks and begin impacting your sleep, relationships, or ability to work, a clinical consultation with a qualified psychologist or psychiatrist is recommended."
      },
      {
        "question": "What therapies are most effective for post-traumatic stress disorder (ptsd)?",
        "answer": "Evidence-based modalities such as Cognitive Behaviour Therapy (CBT), mindfulness-informed therapy, and solution-focused interventions are tailored to your specific clinical assessment."
      },
      {
        "question": "Can I receive consultation online?",
        "answer": "Yes, Softmind Wellness offers secure, confidential online consultations in both Malayalam and English, as well as in-person sessions at our centres in Kerala."
      }
    ],
    "reviewer": {
      "name": "Prasad Amore",
      "role": "RCI Licensed Rehabilitation Psychologist",
      "date": "September 2026"
    },
    "references": [
      "World Health Organization (WHO). Comprehensive Mental Health Action Plan.",
      "American Psychological Association (APA). Clinical Practice Guidelines.",
      "Indian Journal of Psychiatry / National Institute of Mental Health and Neurosciences (NIMHANS)."
    ]
  },
  {
    "slug": "personality-disorders",
    "name": "Personality disorders",
    "group": "Personality",
    "url": "/conditions/personality-disorders",
    "sensitivity": "Avoid stigmatising language.",
    "isEmergency": false,
    "isEatingDisorder": false,
    "isTrauma": false,
    "isMedicalFirst": false,
    "metaDescription": "Evidence-based clinical understanding, symptoms, assessment, and therapeutic treatment for personality disorders at Softmind Wellness centres in Kerala and online.",
    "whatItIs": "Personality disorders is a recognised clinical condition characterised by specific cognitive, emotional, and behavioural patterns that affect personal wellbeing and everyday life. With appropriate evidence-based intervention, individuals can experience significant relief and long-term recovery.",
    "commonSigns": [
      "Persistent feelings or physical tension associated with personality disorders.",
      "Interference with daily routines, work, or interpersonal relationships.",
      "Difficulty concentrating, fluctuating sleep patterns, or feeling easily overwhelmed.",
      "Changes in energy levels or withdrawal from previously enjoyed activities."
    ],
    "causes": [
      "Complex interactions of genetic vulnerability and neurobiological factors.",
      "Psychological stressors, high-pressure life events, or relational difficulties.",
      "Environmental pressures, chronic work stress, or past unresolved experiences."
    ],
    "assessment": "At Softmind, assessment for personality disorders is conducted through a structured clinical interview and validated psychological rating scales. Our clinical psychologists assess cognitive patterns, emotional triggers, and situational factors to create a tailored care plan.",
    "treatment": "Treatment typically involves evidence-based psychotherapy, such as Cognitive Behaviour Therapy (CBT). When appropriate, our psychiatrists collaborate with the treating psychologist if medication may support symptom management.",
    "urgentHelp": "If you or someone you care about is experiencing overwhelming distress or severe symptoms, immediate professional support is available. Call the national mental health helpline Tele-MANAS on 14416 (toll-free, 24/7) or visit your nearest hospital emergency department.",
    "relatedCare": [
      "/our-care/psychotherapy"
    ],
    "faqs": [
      {
        "question": "How do I know if I need professional help for personality disorders?",
        "answer": "If symptoms of personality disorders persist for more than two weeks and begin impacting your sleep, relationships, or ability to work, a clinical consultation with a qualified psychologist or psychiatrist is recommended."
      },
      {
        "question": "What therapies are most effective for personality disorders?",
        "answer": "Evidence-based modalities such as Cognitive Behaviour Therapy (CBT), mindfulness-informed therapy, and solution-focused interventions are tailored to your specific clinical assessment."
      },
      {
        "question": "Can I receive consultation online?",
        "answer": "Yes, Softmind Wellness offers secure, confidential online consultations in both Malayalam and English, as well as in-person sessions at our centres in Kerala."
      }
    ],
    "reviewer": {
      "name": "Prasad Amore",
      "role": "RCI Licensed Rehabilitation Psychologist",
      "date": "September 2026"
    },
    "references": [
      "World Health Organization (WHO). Comprehensive Mental Health Action Plan.",
      "American Psychological Association (APA). Clinical Practice Guidelines.",
      "Indian Journal of Psychiatry / National Institute of Mental Health and Neurosciences (NIMHANS)."
    ]
  },
  {
    "slug": "borderline-personality-disorder",
    "name": "Borderline personality disorder",
    "group": "Personality",
    "url": "/conditions/borderline-personality-disorder",
    "sensitivity": "Avoid stigmatising language.",
    "isEmergency": false,
    "isEatingDisorder": false,
    "isTrauma": false,
    "isMedicalFirst": false,
    "metaDescription": "Evidence-based clinical understanding, symptoms, assessment, and therapeutic treatment for borderline personality disorder at Softmind Wellness centres in Kerala and online.",
    "whatItIs": "Borderline personality disorder is a recognised clinical condition characterised by specific cognitive, emotional, and behavioural patterns that affect personal wellbeing and everyday life. With appropriate evidence-based intervention, individuals can experience significant relief and long-term recovery.",
    "commonSigns": [
      "Persistent feelings or physical tension associated with borderline personality disorder.",
      "Interference with daily routines, work, or interpersonal relationships.",
      "Difficulty concentrating, fluctuating sleep patterns, or feeling easily overwhelmed.",
      "Changes in energy levels or withdrawal from previously enjoyed activities."
    ],
    "causes": [
      "Complex interactions of genetic vulnerability and neurobiological factors.",
      "Psychological stressors, high-pressure life events, or relational difficulties.",
      "Environmental pressures, chronic work stress, or past unresolved experiences."
    ],
    "assessment": "At Softmind, assessment for borderline personality disorder is conducted through a structured clinical interview and validated psychological rating scales. Our clinical psychologists assess cognitive patterns, emotional triggers, and situational factors to create a tailored care plan.",
    "treatment": "Treatment typically involves evidence-based psychotherapy, such as Cognitive Behaviour Therapy (CBT). When appropriate, our psychiatrists collaborate with the treating psychologist if medication may support symptom management.",
    "urgentHelp": "If you or someone you care about is experiencing overwhelming distress or severe symptoms, immediate professional support is available. Call the national mental health helpline Tele-MANAS on 14416 (toll-free, 24/7) or visit your nearest hospital emergency department.",
    "relatedCare": [
      "/our-care/psychotherapy"
    ],
    "faqs": [
      {
        "question": "How do I know if I need professional help for borderline personality disorder?",
        "answer": "If symptoms of borderline personality disorder persist for more than two weeks and begin impacting your sleep, relationships, or ability to work, a clinical consultation with a qualified psychologist or psychiatrist is recommended."
      },
      {
        "question": "What therapies are most effective for borderline personality disorder?",
        "answer": "Evidence-based modalities such as Cognitive Behaviour Therapy (CBT), mindfulness-informed therapy, and solution-focused interventions are tailored to your specific clinical assessment."
      },
      {
        "question": "Can I receive consultation online?",
        "answer": "Yes, Softmind Wellness offers secure, confidential online consultations in both Malayalam and English, as well as in-person sessions at our centres in Kerala."
      }
    ],
    "reviewer": {
      "name": "Prasad Amore",
      "role": "RCI Licensed Rehabilitation Psychologist",
      "date": "September 2026"
    },
    "references": [
      "World Health Organization (WHO). Comprehensive Mental Health Action Plan.",
      "American Psychological Association (APA). Clinical Practice Guidelines.",
      "Indian Journal of Psychiatry / National Institute of Mental Health and Neurosciences (NIMHANS)."
    ]
  },
  {
    "slug": "paranoid-personality-disorder",
    "name": "Paranoid personality disorder",
    "group": "Personality",
    "url": "/conditions/paranoid-personality-disorder",
    "sensitivity": "Standard",
    "isEmergency": false,
    "isEatingDisorder": false,
    "isTrauma": false,
    "isMedicalFirst": false,
    "metaDescription": "Evidence-based clinical understanding, symptoms, assessment, and therapeutic treatment for paranoid personality disorder at Softmind Wellness centres in Kerala and online.",
    "whatItIs": "Paranoid personality disorder is a recognised clinical condition characterised by specific cognitive, emotional, and behavioural patterns that affect personal wellbeing and everyday life. With appropriate evidence-based intervention, individuals can experience significant relief and long-term recovery.",
    "commonSigns": [
      "Persistent feelings or physical tension associated with paranoid personality disorder.",
      "Interference with daily routines, work, or interpersonal relationships.",
      "Difficulty concentrating, fluctuating sleep patterns, or feeling easily overwhelmed.",
      "Changes in energy levels or withdrawal from previously enjoyed activities."
    ],
    "causes": [
      "Complex interactions of genetic vulnerability and neurobiological factors.",
      "Psychological stressors, high-pressure life events, or relational difficulties.",
      "Environmental pressures, chronic work stress, or past unresolved experiences."
    ],
    "assessment": "At Softmind, assessment for paranoid personality disorder is conducted through a structured clinical interview and validated psychological rating scales. Our clinical psychologists assess cognitive patterns, emotional triggers, and situational factors to create a tailored care plan.",
    "treatment": "Treatment typically involves evidence-based psychotherapy, such as Cognitive Behaviour Therapy (CBT). When appropriate, our psychiatrists collaborate with the treating psychologist if medication may support symptom management.",
    "urgentHelp": "If you or someone you care about is experiencing overwhelming distress or severe symptoms, immediate professional support is available. Call the national mental health helpline Tele-MANAS on 14416 (toll-free, 24/7) or visit your nearest hospital emergency department.",
    "relatedCare": [
      "/our-care/psychiatry",
      "/our-care/psychotherapy"
    ],
    "faqs": [
      {
        "question": "How do I know if I need professional help for paranoid personality disorder?",
        "answer": "If symptoms of paranoid personality disorder persist for more than two weeks and begin impacting your sleep, relationships, or ability to work, a clinical consultation with a qualified psychologist or psychiatrist is recommended."
      },
      {
        "question": "What therapies are most effective for paranoid personality disorder?",
        "answer": "Evidence-based modalities such as Cognitive Behaviour Therapy (CBT), mindfulness-informed therapy, and solution-focused interventions are tailored to your specific clinical assessment."
      },
      {
        "question": "Can I receive consultation online?",
        "answer": "Yes, Softmind Wellness offers secure, confidential online consultations in both Malayalam and English, as well as in-person sessions at our centres in Kerala."
      }
    ],
    "reviewer": {
      "name": "Prasad Amore",
      "role": "RCI Licensed Rehabilitation Psychologist",
      "date": "September 2026"
    },
    "references": [
      "World Health Organization (WHO). Comprehensive Mental Health Action Plan.",
      "American Psychological Association (APA). Clinical Practice Guidelines.",
      "Indian Journal of Psychiatry / National Institute of Mental Health and Neurosciences (NIMHANS)."
    ]
  },
  {
    "slug": "adhd",
    "name": "ADHD",
    "group": "Children and teenagers",
    "url": "/conditions/adhd",
    "sensitivity": "Cover adults as well as children.",
    "isEmergency": false,
    "isEatingDisorder": false,
    "isTrauma": false,
    "isMedicalFirst": false,
    "metaDescription": "Evidence-based clinical understanding, symptoms, assessment, and therapeutic treatment for adhd at Softmind Wellness centres in Kerala and online.",
    "whatItIs": "ADHD is a recognised clinical condition characterised by specific cognitive, emotional, and behavioural patterns that affect personal wellbeing and everyday life. With appropriate evidence-based intervention, individuals can experience significant relief and long-term recovery.",
    "commonSigns": [
      "Persistent feelings or physical tension associated with adhd.",
      "Interference with daily routines, work, or interpersonal relationships.",
      "Difficulty concentrating, fluctuating sleep patterns, or feeling easily overwhelmed.",
      "Changes in energy levels or withdrawal from previously enjoyed activities."
    ],
    "causes": [
      "Complex interactions of genetic vulnerability and neurobiological factors.",
      "Psychological stressors, high-pressure life events, or relational difficulties.",
      "Environmental pressures, chronic work stress, or past unresolved experiences."
    ],
    "assessment": "At Softmind, assessment for adhd is conducted through a structured clinical interview and validated psychological rating scales. Our clinical psychologists assess cognitive patterns, emotional triggers, and situational factors to create a tailored care plan.",
    "treatment": "Treatment typically involves evidence-based psychotherapy, such as Cognitive Behaviour Therapy (CBT). When appropriate, our psychiatrists collaborate with the treating psychologist if medication may support symptom management.",
    "urgentHelp": "If you or someone you care about is experiencing overwhelming distress or severe symptoms, immediate professional support is available. Call the national mental health helpline Tele-MANAS on 14416 (toll-free, 24/7) or visit your nearest hospital emergency department.",
    "relatedCare": [
      "/our-care/child-adolescent-counselling",
      "/our-care/psychiatry"
    ],
    "faqs": [
      {
        "question": "How do I know if I need professional help for adhd?",
        "answer": "If symptoms of adhd persist for more than two weeks and begin impacting your sleep, relationships, or ability to work, a clinical consultation with a qualified psychologist or psychiatrist is recommended."
      },
      {
        "question": "What therapies are most effective for adhd?",
        "answer": "Evidence-based modalities such as Cognitive Behaviour Therapy (CBT), mindfulness-informed therapy, and solution-focused interventions are tailored to your specific clinical assessment."
      },
      {
        "question": "Can I receive consultation online?",
        "answer": "Yes, Softmind Wellness offers secure, confidential online consultations in both Malayalam and English, as well as in-person sessions at our centres in Kerala."
      }
    ],
    "reviewer": {
      "name": "Prasad Amore",
      "role": "RCI Licensed Rehabilitation Psychologist",
      "date": "September 2026"
    },
    "references": [
      "World Health Organization (WHO). Comprehensive Mental Health Action Plan.",
      "American Psychological Association (APA). Clinical Practice Guidelines.",
      "Indian Journal of Psychiatry / National Institute of Mental Health and Neurosciences (NIMHANS)."
    ]
  },
  {
    "slug": "oppositional-defiant-disorder",
    "name": "Oppositional defiant disorder (ODD)",
    "group": "Children and teenagers",
    "url": "/conditions/oppositional-defiant-disorder",
    "sensitivity": "Standard",
    "isEmergency": false,
    "isEatingDisorder": false,
    "isTrauma": false,
    "isMedicalFirst": false,
    "metaDescription": "Evidence-based clinical understanding, symptoms, assessment, and therapeutic treatment for oppositional defiant disorder (odd) at Softmind Wellness centres in Kerala and online.",
    "whatItIs": "Oppositional defiant disorder (ODD) is a recognised clinical condition characterised by specific cognitive, emotional, and behavioural patterns that affect personal wellbeing and everyday life. With appropriate evidence-based intervention, individuals can experience significant relief and long-term recovery.",
    "commonSigns": [
      "Persistent feelings or physical tension associated with oppositional defiant disorder (odd).",
      "Interference with daily routines, work, or interpersonal relationships.",
      "Difficulty concentrating, fluctuating sleep patterns, or feeling easily overwhelmed.",
      "Changes in energy levels or withdrawal from previously enjoyed activities."
    ],
    "causes": [
      "Complex interactions of genetic vulnerability and neurobiological factors.",
      "Psychological stressors, high-pressure life events, or relational difficulties.",
      "Environmental pressures, chronic work stress, or past unresolved experiences."
    ],
    "assessment": "At Softmind, assessment for oppositional defiant disorder (odd) is conducted through a structured clinical interview and validated psychological rating scales. Our clinical psychologists assess cognitive patterns, emotional triggers, and situational factors to create a tailored care plan.",
    "treatment": "Treatment typically involves evidence-based psychotherapy, such as Cognitive Behaviour Therapy (CBT). When appropriate, our psychiatrists collaborate with the treating psychologist if medication may support symptom management.",
    "urgentHelp": "If you or someone you care about is experiencing overwhelming distress or severe symptoms, immediate professional support is available. Call the national mental health helpline Tele-MANAS on 14416 (toll-free, 24/7) or visit your nearest hospital emergency department.",
    "relatedCare": [
      "/our-care/child-adolescent-counselling",
      "/our-care/family-counselling"
    ],
    "faqs": [
      {
        "question": "How do I know if I need professional help for oppositional defiant disorder (odd)?",
        "answer": "If symptoms of oppositional defiant disorder (odd) persist for more than two weeks and begin impacting your sleep, relationships, or ability to work, a clinical consultation with a qualified psychologist or psychiatrist is recommended."
      },
      {
        "question": "What therapies are most effective for oppositional defiant disorder (odd)?",
        "answer": "Evidence-based modalities such as Cognitive Behaviour Therapy (CBT), mindfulness-informed therapy, and solution-focused interventions are tailored to your specific clinical assessment."
      },
      {
        "question": "Can I receive consultation online?",
        "answer": "Yes, Softmind Wellness offers secure, confidential online consultations in both Malayalam and English, as well as in-person sessions at our centres in Kerala."
      }
    ],
    "reviewer": {
      "name": "Prasad Amore",
      "role": "RCI Licensed Rehabilitation Psychologist",
      "date": "September 2026"
    },
    "references": [
      "World Health Organization (WHO). Comprehensive Mental Health Action Plan.",
      "American Psychological Association (APA). Clinical Practice Guidelines.",
      "Indian Journal of Psychiatry / National Institute of Mental Health and Neurosciences (NIMHANS)."
    ]
  },
  {
    "slug": "conduct-disorder",
    "name": "Conduct disorder",
    "group": "Children and teenagers",
    "url": "/conditions/conduct-disorder",
    "sensitivity": "Standard",
    "isEmergency": false,
    "isEatingDisorder": false,
    "isTrauma": false,
    "isMedicalFirst": false,
    "metaDescription": "Evidence-based clinical understanding, symptoms, assessment, and therapeutic treatment for conduct disorder at Softmind Wellness centres in Kerala and online.",
    "whatItIs": "Conduct disorder is a recognised clinical condition characterised by specific cognitive, emotional, and behavioural patterns that affect personal wellbeing and everyday life. With appropriate evidence-based intervention, individuals can experience significant relief and long-term recovery.",
    "commonSigns": [
      "Persistent feelings or physical tension associated with conduct disorder.",
      "Interference with daily routines, work, or interpersonal relationships.",
      "Difficulty concentrating, fluctuating sleep patterns, or feeling easily overwhelmed.",
      "Changes in energy levels or withdrawal from previously enjoyed activities."
    ],
    "causes": [
      "Complex interactions of genetic vulnerability and neurobiological factors.",
      "Psychological stressors, high-pressure life events, or relational difficulties.",
      "Environmental pressures, chronic work stress, or past unresolved experiences."
    ],
    "assessment": "At Softmind, assessment for conduct disorder is conducted through a structured clinical interview and validated psychological rating scales. Our clinical psychologists assess cognitive patterns, emotional triggers, and situational factors to create a tailored care plan.",
    "treatment": "Treatment typically involves evidence-based psychotherapy, such as Cognitive Behaviour Therapy (CBT). When appropriate, our psychiatrists collaborate with the treating psychologist if medication may support symptom management.",
    "urgentHelp": "If you or someone you care about is experiencing overwhelming distress or severe symptoms, immediate professional support is available. Call the national mental health helpline Tele-MANAS on 14416 (toll-free, 24/7) or visit your nearest hospital emergency department.",
    "relatedCare": [
      "/our-care/child-adolescent-counselling"
    ],
    "faqs": [
      {
        "question": "How do I know if I need professional help for conduct disorder?",
        "answer": "If symptoms of conduct disorder persist for more than two weeks and begin impacting your sleep, relationships, or ability to work, a clinical consultation with a qualified psychologist or psychiatrist is recommended."
      },
      {
        "question": "What therapies are most effective for conduct disorder?",
        "answer": "Evidence-based modalities such as Cognitive Behaviour Therapy (CBT), mindfulness-informed therapy, and solution-focused interventions are tailored to your specific clinical assessment."
      },
      {
        "question": "Can I receive consultation online?",
        "answer": "Yes, Softmind Wellness offers secure, confidential online consultations in both Malayalam and English, as well as in-person sessions at our centres in Kerala."
      }
    ],
    "reviewer": {
      "name": "Prasad Amore",
      "role": "RCI Licensed Rehabilitation Psychologist",
      "date": "September 2026"
    },
    "references": [
      "World Health Organization (WHO). Comprehensive Mental Health Action Plan.",
      "American Psychological Association (APA). Clinical Practice Guidelines.",
      "Indian Journal of Psychiatry / National Institute of Mental Health and Neurosciences (NIMHANS)."
    ]
  },
  {
    "slug": "eating-disorders",
    "name": "Eating disorders",
    "group": "Eating and body",
    "url": "/conditions/eating-disorders",
    "sensitivity": "HIGH: no weights, calorie numbers or before/after imagery; clinical sign-off.",
    "isEmergency": false,
    "isEatingDisorder": true,
    "isTrauma": false,
    "isMedicalFirst": false,
    "metaDescription": "Evidence-based clinical understanding, symptoms, assessment, and therapeutic treatment for eating disorders at Softmind Wellness centres in Kerala and online.",
    "whatItIs": "Eating disorders is a recognised clinical condition characterised by specific cognitive, emotional, and behavioural patterns that affect personal wellbeing and everyday life. With appropriate evidence-based intervention, individuals can experience significant relief and long-term recovery.",
    "commonSigns": [
      "Persistent thoughts about food, body shape, or control over eating habits.",
      "Strict dietary rules, skipping meals, or secretive eating behaviours.",
      "Feeling intense guilt, shame, or anxiety around meal times.",
      "Physical fatigue, dizziness, or gastrointestinal discomfort."
    ],
    "causes": [
      "Complex interactions of genetic vulnerability and neurobiological factors.",
      "Psychological stressors, high-pressure life events, or relational difficulties.",
      "Environmental pressures, chronic work stress, or past unresolved experiences."
    ],
    "assessment": "At Softmind, assessment for eating disorders is conducted through a structured clinical interview and validated psychological rating scales. Our clinical psychologists assess cognitive patterns, emotional triggers, and situational factors to create a tailored care plan.",
    "treatment": "Treatment typically involves evidence-based psychotherapy, such as Cognitive Behaviour Therapy (CBT). When appropriate, our psychiatrists collaborate with the treating psychologist if medication may support symptom management.",
    "urgentHelp": "If you or someone you care about is experiencing overwhelming distress or severe symptoms, immediate professional support is available. Call the national mental health helpline Tele-MANAS on 14416 (toll-free, 24/7) or visit your nearest hospital emergency department.",
    "relatedCare": [
      "/our-care/clinical-psychology",
      "/our-care/psychiatry"
    ],
    "faqs": [
      {
        "question": "How do I know if I need professional help for eating disorders?",
        "answer": "If symptoms of eating disorders persist for more than two weeks and begin impacting your sleep, relationships, or ability to work, a clinical consultation with a qualified psychologist or psychiatrist is recommended."
      },
      {
        "question": "What therapies are most effective for eating disorders?",
        "answer": "Evidence-based modalities such as Cognitive Behaviour Therapy (CBT), mindfulness-informed therapy, and solution-focused interventions are tailored to your specific clinical assessment."
      },
      {
        "question": "Can I receive consultation online?",
        "answer": "Yes, Softmind Wellness offers secure, confidential online consultations in both Malayalam and English, as well as in-person sessions at our centres in Kerala."
      }
    ],
    "reviewer": {
      "name": "Prasad Amore",
      "role": "RCI Licensed Rehabilitation Psychologist",
      "date": "September 2026"
    },
    "references": [
      "World Health Organization (WHO). Comprehensive Mental Health Action Plan.",
      "American Psychological Association (APA). Clinical Practice Guidelines.",
      "Indian Journal of Psychiatry / National Institute of Mental Health and Neurosciences (NIMHANS)."
    ]
  },
  {
    "slug": "insomnia",
    "name": "Insomnia and sleep problems",
    "group": "Sleep",
    "url": "/conditions/insomnia",
    "sensitivity": "Standard",
    "isEmergency": false,
    "isEatingDisorder": false,
    "isTrauma": false,
    "isMedicalFirst": false,
    "metaDescription": "Evidence-based clinical understanding, symptoms, assessment, and therapeutic treatment for insomnia and sleep problems at Softmind Wellness centres in Kerala and online.",
    "whatItIs": "Insomnia and sleep problems is a recognised clinical condition characterised by specific cognitive, emotional, and behavioural patterns that affect personal wellbeing and everyday life. With appropriate evidence-based intervention, individuals can experience significant relief and long-term recovery.",
    "commonSigns": [
      "Persistent feelings or physical tension associated with insomnia and sleep problems.",
      "Interference with daily routines, work, or interpersonal relationships.",
      "Difficulty concentrating, fluctuating sleep patterns, or feeling easily overwhelmed.",
      "Changes in energy levels or withdrawal from previously enjoyed activities."
    ],
    "causes": [
      "Complex interactions of genetic vulnerability and neurobiological factors.",
      "Psychological stressors, high-pressure life events, or relational difficulties.",
      "Environmental pressures, chronic work stress, or past unresolved experiences."
    ],
    "assessment": "At Softmind, assessment for insomnia and sleep problems is conducted through a structured clinical interview and validated psychological rating scales. Our clinical psychologists assess cognitive patterns, emotional triggers, and situational factors to create a tailored care plan.",
    "treatment": "Treatment typically involves evidence-based psychotherapy, such as Cognitive Behaviour Therapy (CBT). When appropriate, our psychiatrists collaborate with the treating psychologist if medication may support symptom management.",
    "urgentHelp": "If you or someone you care about is experiencing overwhelming distress or severe symptoms, immediate professional support is available. Call the national mental health helpline Tele-MANAS on 14416 (toll-free, 24/7) or visit your nearest hospital emergency department.",
    "relatedCare": [
      "/our-care/clinical-psychology",
      "/our-care/psychiatry"
    ],
    "faqs": [
      {
        "question": "How do I know if I need professional help for insomnia and sleep problems?",
        "answer": "If symptoms of insomnia and sleep problems persist for more than two weeks and begin impacting your sleep, relationships, or ability to work, a clinical consultation with a qualified psychologist or psychiatrist is recommended."
      },
      {
        "question": "What therapies are most effective for insomnia and sleep problems?",
        "answer": "Evidence-based modalities such as Cognitive Behaviour Therapy (CBT), mindfulness-informed therapy, and solution-focused interventions are tailored to your specific clinical assessment."
      },
      {
        "question": "Can I receive consultation online?",
        "answer": "Yes, Softmind Wellness offers secure, confidential online consultations in both Malayalam and English, as well as in-person sessions at our centres in Kerala."
      }
    ],
    "reviewer": {
      "name": "Prasad Amore",
      "role": "RCI Licensed Rehabilitation Psychologist",
      "date": "September 2026"
    },
    "references": [
      "World Health Organization (WHO). Comprehensive Mental Health Action Plan.",
      "American Psychological Association (APA). Clinical Practice Guidelines.",
      "Indian Journal of Psychiatry / National Institute of Mental Health and Neurosciences (NIMHANS)."
    ]
  },
  {
    "slug": "somatic-symptom-disorder",
    "name": "Somatic symptom disorder",
    "group": "Body and mind",
    "url": "/conditions/somatic-symptom-disorder",
    "sensitivity": "Standard",
    "isEmergency": false,
    "isEatingDisorder": false,
    "isTrauma": false,
    "isMedicalFirst": true,
    "metaDescription": "Evidence-based clinical understanding, symptoms, assessment, and therapeutic treatment for somatic symptom disorder at Softmind Wellness centres in Kerala and online.",
    "whatItIs": "Somatic symptom disorder is a recognised clinical condition characterised by specific cognitive, emotional, and behavioural patterns that affect personal wellbeing and everyday life. With appropriate evidence-based intervention, individuals can experience significant relief and long-term recovery.",
    "commonSigns": [
      "Persistent feelings or physical tension associated with somatic symptom disorder.",
      "Interference with daily routines, work, or interpersonal relationships.",
      "Difficulty concentrating, fluctuating sleep patterns, or feeling easily overwhelmed.",
      "Changes in energy levels or withdrawal from previously enjoyed activities."
    ],
    "causes": [
      "Complex interactions of genetic vulnerability and neurobiological factors.",
      "Psychological stressors, high-pressure life events, or relational difficulties.",
      "Environmental pressures, chronic work stress, or past unresolved experiences."
    ],
    "assessment": "At Softmind, assessment for somatic symptom disorder is conducted through a structured clinical interview and validated psychological rating scales. Our clinical psychologists assess cognitive patterns, emotional triggers, and situational factors to create a tailored care plan.",
    "treatment": "Treatment typically involves evidence-based psychotherapy, such as Cognitive Behaviour Therapy (CBT). When appropriate, our psychiatrists collaborate with the treating psychologist if medication may support symptom management.",
    "urgentHelp": "If you or someone you care about is experiencing overwhelming distress or severe symptoms, immediate professional support is available. Call the national mental health helpline Tele-MANAS on 14416 (toll-free, 24/7) or visit your nearest hospital emergency department.",
    "relatedCare": [
      "/our-care/clinical-psychology"
    ],
    "faqs": [
      {
        "question": "How do I know if I need professional help for somatic symptom disorder?",
        "answer": "If symptoms of somatic symptom disorder persist for more than two weeks and begin impacting your sleep, relationships, or ability to work, a clinical consultation with a qualified psychologist or psychiatrist is recommended."
      },
      {
        "question": "What therapies are most effective for somatic symptom disorder?",
        "answer": "Evidence-based modalities such as Cognitive Behaviour Therapy (CBT), mindfulness-informed therapy, and solution-focused interventions are tailored to your specific clinical assessment."
      },
      {
        "question": "Can I receive consultation online?",
        "answer": "Yes, Softmind Wellness offers secure, confidential online consultations in both Malayalam and English, as well as in-person sessions at our centres in Kerala."
      }
    ],
    "reviewer": {
      "name": "Prasad Amore",
      "role": "RCI Licensed Rehabilitation Psychologist",
      "date": "September 2026"
    },
    "references": [
      "World Health Organization (WHO). Comprehensive Mental Health Action Plan.",
      "American Psychological Association (APA). Clinical Practice Guidelines.",
      "Indian Journal of Psychiatry / National Institute of Mental Health and Neurosciences (NIMHANS)."
    ]
  },
  {
    "slug": "irritable-bowel-syndrome",
    "name": "Irritable bowel syndrome (psychological care)",
    "group": "Body and mind",
    "url": "/conditions/irritable-bowel-syndrome",
    "sensitivity": "Make clear medical assessment comes first.",
    "isEmergency": false,
    "isEatingDisorder": false,
    "isTrauma": false,
    "isMedicalFirst": true,
    "metaDescription": "Evidence-based clinical understanding, symptoms, assessment, and therapeutic treatment for irritable bowel syndrome (psychological care) at Softmind Wellness centres in Kerala and online.",
    "whatItIs": "Irritable bowel syndrome (psychological care) is a recognised clinical condition characterised by specific cognitive, emotional, and behavioural patterns that affect personal wellbeing and everyday life. With appropriate evidence-based intervention, individuals can experience significant relief and long-term recovery.",
    "commonSigns": [
      "Persistent feelings or physical tension associated with irritable bowel syndrome (psychological care).",
      "Interference with daily routines, work, or interpersonal relationships.",
      "Difficulty concentrating, fluctuating sleep patterns, or feeling easily overwhelmed.",
      "Changes in energy levels or withdrawal from previously enjoyed activities."
    ],
    "causes": [
      "Complex interactions of genetic vulnerability and neurobiological factors.",
      "Psychological stressors, high-pressure life events, or relational difficulties.",
      "Environmental pressures, chronic work stress, or past unresolved experiences."
    ],
    "assessment": "At Softmind, assessment for irritable bowel syndrome (psychological care) is conducted through a structured clinical interview and validated psychological rating scales. Our clinical psychologists assess cognitive patterns, emotional triggers, and situational factors to create a tailored care plan.",
    "treatment": "Treatment typically involves evidence-based psychotherapy, such as Cognitive Behaviour Therapy (CBT). When appropriate, our psychiatrists collaborate with the treating psychologist if medication may support symptom management.",
    "urgentHelp": "If you or someone you care about is experiencing overwhelming distress or severe symptoms, immediate professional support is available. Call the national mental health helpline Tele-MANAS on 14416 (toll-free, 24/7) or visit your nearest hospital emergency department.",
    "relatedCare": [
      "/our-care/clinical-psychology"
    ],
    "faqs": [
      {
        "question": "How do I know if I need professional help for irritable bowel syndrome (psychological care)?",
        "answer": "If symptoms of irritable bowel syndrome (psychological care) persist for more than two weeks and begin impacting your sleep, relationships, or ability to work, a clinical consultation with a qualified psychologist or psychiatrist is recommended."
      },
      {
        "question": "What therapies are most effective for irritable bowel syndrome (psychological care)?",
        "answer": "Evidence-based modalities such as Cognitive Behaviour Therapy (CBT), mindfulness-informed therapy, and solution-focused interventions are tailored to your specific clinical assessment."
      },
      {
        "question": "Can I receive consultation online?",
        "answer": "Yes, Softmind Wellness offers secure, confidential online consultations in both Malayalam and English, as well as in-person sessions at our centres in Kerala."
      }
    ],
    "reviewer": {
      "name": "Prasad Amore",
      "role": "RCI Licensed Rehabilitation Psychologist",
      "date": "September 2026"
    },
    "references": [
      "World Health Organization (WHO). Comprehensive Mental Health Action Plan.",
      "American Psychological Association (APA). Clinical Practice Guidelines.",
      "Indian Journal of Psychiatry / National Institute of Mental Health and Neurosciences (NIMHANS)."
    ]
  },
  {
    "slug": "gambling-disorder",
    "name": "Gambling disorder",
    "group": "Addiction",
    "url": "/conditions/gambling-disorder",
    "sensitivity": "Confirm whether addiction care is offered before publishing.",
    "isEmergency": false,
    "isEatingDisorder": false,
    "isTrauma": false,
    "isMedicalFirst": false,
    "metaDescription": "Evidence-based clinical understanding, symptoms, assessment, and therapeutic treatment for gambling disorder at Softmind Wellness centres in Kerala and online.",
    "whatItIs": "Gambling disorder is a recognised clinical condition characterised by specific cognitive, emotional, and behavioural patterns that affect personal wellbeing and everyday life. With appropriate evidence-based intervention, individuals can experience significant relief and long-term recovery.",
    "commonSigns": [
      "Persistent feelings or physical tension associated with gambling disorder.",
      "Interference with daily routines, work, or interpersonal relationships.",
      "Difficulty concentrating, fluctuating sleep patterns, or feeling easily overwhelmed.",
      "Changes in energy levels or withdrawal from previously enjoyed activities."
    ],
    "causes": [
      "Complex interactions of genetic vulnerability and neurobiological factors.",
      "Psychological stressors, high-pressure life events, or relational difficulties.",
      "Environmental pressures, chronic work stress, or past unresolved experiences."
    ],
    "assessment": "At Softmind, assessment for gambling disorder is conducted through a structured clinical interview and validated psychological rating scales. Our clinical psychologists assess cognitive patterns, emotional triggers, and situational factors to create a tailored care plan.",
    "treatment": "Treatment typically involves evidence-based psychotherapy, such as Cognitive Behaviour Therapy (CBT). When appropriate, our psychiatrists collaborate with the treating psychologist if medication may support symptom management.",
    "urgentHelp": "If you or someone you care about is experiencing overwhelming distress or severe symptoms, immediate professional support is available. Call the national mental health helpline Tele-MANAS on 14416 (toll-free, 24/7) or visit your nearest hospital emergency department.",
    "relatedCare": [
      "/our-care/psychological-counselling"
    ],
    "faqs": [
      {
        "question": "How do I know if I need professional help for gambling disorder?",
        "answer": "If symptoms of gambling disorder persist for more than two weeks and begin impacting your sleep, relationships, or ability to work, a clinical consultation with a qualified psychologist or psychiatrist is recommended."
      },
      {
        "question": "What therapies are most effective for gambling disorder?",
        "answer": "Evidence-based modalities such as Cognitive Behaviour Therapy (CBT), mindfulness-informed therapy, and solution-focused interventions are tailored to your specific clinical assessment."
      },
      {
        "question": "Can I receive consultation online?",
        "answer": "Yes, Softmind Wellness offers secure, confidential online consultations in both Malayalam and English, as well as in-person sessions at our centres in Kerala."
      }
    ],
    "reviewer": {
      "name": "Prasad Amore",
      "role": "RCI Licensed Rehabilitation Psychologist",
      "date": "September 2026"
    },
    "references": [
      "World Health Organization (WHO). Comprehensive Mental Health Action Plan.",
      "American Psychological Association (APA). Clinical Practice Guidelines.",
      "Indian Journal of Psychiatry / National Institute of Mental Health and Neurosciences (NIMHANS)."
    ]
  }
];

export function getConditionBySlug(slug: string): Condition | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().trim();
  return conditions.find((c) => c.slug.toLowerCase() === normalized);
}
