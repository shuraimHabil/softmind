import { Metadata } from "next";
import Image from "next/image";
import JsonLd, { generateBreadcrumbsLd } from "@/components/SEO/JsonLd";
import styles from "./approach.module.css";

export const metadata: Metadata = {
  title: "The Softmind Approach | Psychological Science. Human Understanding.",
  description:
    "Science guides the care. The person remains at the centre. Explore the four foundations of the Softmind approach: evidence-based therapies, neuroscience-informed care, technology-assisted interventions, and measurement-informed care.",
  alternates: {
    canonical: "https://www.softmindindia.com/approach",
  },
  openGraph: {
    title: "The Softmind Approach | Softmind Wellness Pvt. Ltd.",
    description:
      "Our work brings together established psychological therapies, insights from neuroscience, selected therapeutic technologies and meaningful assessment.",
    url: "https://www.softmindindia.com/approach",
  },
};

export default function ApproachPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.softmindindia.com" },
    { name: "The Softmind Approach", url: "https://www.softmindindia.com/approach" },
  ];

  return (
    <>
      <JsonLd data={generateBreadcrumbsLd(breadcrumbs)} />

      <main>
        {/* Hero Section */}
        <header className={styles.heroSection}>
          <div className={styles.inner}>
            <h1 className={styles.h1}>The Softmind Approach</h1>
            <p className={styles.tagline}>
              Science guides the care. The person remains at the centre.
            </p>
            <div className={styles.intro}>
              <p className={styles.paragraph}>
                People come to psychological care with different experiences, concerns and expectations. Even when
                two people describe similar difficulties, the circumstances behind them may be quite different.
              </p>
              <p className={styles.paragraph}>
                At Softmind, we begin by understanding the person rather than immediately choosing a treatment
                method.
              </p>
              <p className={styles.paragraph}>
                Our work brings together established psychological therapies, insights from neuroscience, selected
                therapeutic technologies and meaningful assessment. Each contributes something different to
                understanding human behaviour and supporting psychological change.
              </p>
              <p className={styles.paragraph}>
                These four foundations guide how we approach care.
              </p>
            </div>
          </div>
        </header>

        {/* Foundation 01 */}
        <section
          id="01-evidence-based-therapies"
          className={`${styles.section} ${styles.bgSage}`}
        >
          <div className={styles.inner}>
            <div className={styles.sectionHeader}>
              <div className={styles.iconWrap}>
                <Image
                  src="/assets/icons/icon1.png"
                  alt="Evidence-Based Therapies icon"
                  width={40}
                  height={40}
                  className={styles.icon}
                  unoptimized
                />
              </div>
              <div>
                <h2 className={styles.h2}>01. Evidence-Based Therapies</h2>
                <p className={styles.subHeading}>
                  The right approach begins with understanding the person.
                </p>
              </div>
            </div>

            <p className={styles.paragraph}>
              Psychotherapy is not a single method, and psychological difficulties do not follow the same
              pattern in everyone.
            </p>
            <p className={styles.paragraph}>
              A person experiencing anxiety may be struggling with persistent worry, avoidance, uncomfortable
              bodily sensations or difficult experiences from the past. Another person with similar symptoms may
              have an entirely different set of circumstances.
            </p>
            <p className={styles.paragraph}>
              Understanding these differences helps us decide how therapy should proceed.
            </p>
            <p className={styles.paragraph}>
              At Softmind, our psychological interventions are informed by established research and the
              clinical needs of each individual. Our approaches include Cognitive Behavioural Therapy (CBT),
              Acceptance and Commitment Therapy (ACT), Dialectical Behaviour Therapy (DBT)-informed interventions,
              behavioural and exposure-based therapies, mindfulness-informed practices and selected experiential
              approaches.
            </p>
            <p className={styles.paragraph}>
              Therapeutic work may involve examining patterns of thought and behaviour, understanding emotional
              responses, developing new coping skills, reducing avoidance or learning to respond differently to
              difficult experiences.
            </p>
            <p className={styles.paragraph}>
              Sometimes the work focuses on changing an established behaviour. At other times, it involves
              learning to experience uncomfortable thoughts and emotions without allowing them to determine every
              action.
            </p>
            <p className={styles.paragraph}>
              We do not assume that one therapeutic approach is suitable for everyone. The choice of method
              depends on the nature of the difficulty, the person&apos;s circumstances, their preferences and the
              available scientific evidence.
            </p>
            <p className={styles.paragraph}>
              As therapy progresses, we review what is changing and whether the approach continues to be helpful.
            </p>
            <p className={styles.paragraph}>
              Our interest is not limited to reducing symptoms. We also consider how people are functioning in
              their relationships, work, education and everyday life.
            </p>
            <p className={styles.keyStatement}>The person comes before the method.</p>
          </div>
        </section>

        {/* Foundation 02 */}
        <section
          id="02-neuroscience-informed-care"
          className={`${styles.section} ${styles.bgWhite}`}
        >
          <div className={styles.inner}>
            <div className={styles.sectionHeader}>
              <div className={styles.iconWrap}>
                <Image
                  src="/assets/icons/icon2.png"
                  alt="Neuroscience-Informed Care icon"
                  width={40}
                  height={40}
                  className={styles.icon}
                  unoptimized
                />
              </div>
              <div>
                <h2 className={styles.h2}>02. Neuroscience-Informed Care</h2>
                <p className={styles.subHeading}>
                  Understanding the brain, body and the life around them.
                </p>
              </div>
            </div>

            <p className={styles.paragraph}>
              Our thoughts, emotions and behaviour do not develop independently of the body or the environment
              in which we live.
            </p>
            <p className={styles.paragraph}>
              Sleep, physical health, previous experiences, relationships, learning and everyday demands can all
              influence how we feel and respond.
            </p>
            <p className={styles.paragraph}>
              For example, someone experiencing persistent anxiety may find that their body becomes alert even
              when there is no immediate danger. Another person may react strongly to criticism because of
              experiences that have shaped their expectations of others.
            </p>
            <p className={styles.paragraph}>
              These responses cannot always be understood by examining conscious thoughts alone.
            </p>
            <p className={styles.paragraph}>
              At Softmind, neuroscience-informed psychological care helps us explore how brain activity, bodily
              processes, emotional learning and behaviour interact.
            </p>
            <p className={styles.paragraph}>
              We draw on relevant knowledge from affective neuroscience, developmental psychology,
              psychophysiology and evolutionary perspectives on human behaviour.
            </p>
            <p className={styles.paragraph}>
              This includes understanding how people respond to perceived threats, how emotional experiences
              influence memory and attention, how bodily sensations become part of emotional experience, and how
              repeated learning can shape patterns of behaviour.
            </p>
            <p className={styles.paragraph}>
              We also consider interoception—the ability to notice and interpret signals from within the
              body—and its possible relevance to emotional experience and self-regulation.
            </p>
            <p className={styles.paragraph}>
              These ideas can help clinicians develop a broader understanding of a person&apos;s difficulties and
              identify suitable therapeutic approaches.
            </p>
            <p className={styles.paragraph}>
              However, neuroscience does not explain everything about human experience. A brain recording cannot
              tell us the full story of someone&apos;s relationships, personal history or circumstances.
            </p>
            <p className={styles.paragraph}>
              We use neuroscience to inform psychological care, not to reduce the person to brain activity.
            </p>
            <p className={styles.keyStatement}>
              The brain matters. So does the life in which it functions.
            </p>
          </div>
        </section>

        {/* Foundation 03 */}
        <section
          id="03-technology-assisted-interventions"
          className={`${styles.section} ${styles.bgSage}`}
        >
          <div className={styles.inner}>
            <div className={styles.sectionHeader}>
              <div className={styles.iconWrap}>
                <Image
                  src="/assets/icons/icon3.png"
                  alt="Technology-Assisted Interventions icon"
                  width={40}
                  height={40}
                  className={styles.icon}
                  unoptimized
                />
              </div>
              <div>
                <h2 className={styles.h2}>03. Technology-Assisted Interventions</h2>
                <p className={styles.subHeading}>When technology has a meaningful role in care.</p>
              </div>
            </div>

            <p className={styles.paragraph}>
              Technology has opened new possibilities for studying physiological processes and supporting
              certain therapeutic interventions.
            </p>
            <p className={styles.paragraph}>At Softmind, we explore these possibilities carefully.</p>
            <p className={styles.paragraph}>
              Alongside psychological therapies, selected technology-assisted interventions may be considered
              when they are appropriate to the individual&apos;s needs and care plan.
            </p>
            <p className={styles.paragraph}>
              Our facilities include approaches such as neurofeedback, heart rate variability (HRV) biofeedback,
              cranial electrotherapy stimulation (CES), transcranial direct current stimulation (tDCS),
              audiovisual entrainment (AVE) and photobiomodulation.
            </p>
            <p className={styles.paragraph}>These methods work in different ways.</p>
            <p className={styles.paragraph}>
              Biofeedback, for example, allows a person to observe selected physiological signals and practise
              responding to them through guided training.
            </p>
            <p className={styles.paragraph}>
              Neurofeedback uses recorded brain activity to provide feedback during structured sessions.
            </p>
            <p className={styles.paragraph}>
              Other technologies involve different forms of electrical, sensory or light-based stimulation.
            </p>
            <p className={styles.paragraph}>
              The scientific evidence supporting these interventions is not equally strong across conditions.
              Some applications remain investigational, and certain methods may not be appropriate for people with
              particular health conditions.
            </p>
            <p className={styles.paragraph}>
              We therefore do not view technology as a routine requirement for psychological treatment.
            </p>
            <p className={styles.paragraph}>
              Before considering an intervention, we look at its purpose, available evidence, suitability,
              possible risks and how any benefit would be evaluated.
            </p>
            <p className={styles.paragraph}>
              Technology is most useful when it contributes something meaningful to care. It should not replace
              established treatment, professional judgement or the therapeutic relationship.
            </p>
            <p className={styles.paragraph}>
              A sophisticated device does not necessarily lead to a better outcome.
            </p>
            <p className={styles.keyStatement}>
              Technology supports the process. Human understanding guides it.
            </p>
          </div>
        </section>

        {/* Foundation 04 */}
        <section
          id="04-measurement-informed-care"
          className={`${styles.section} ${styles.bgWhite}`}
        >
          <div className={styles.inner}>
            <div className={styles.sectionHeader}>
              <div className={styles.iconWrap}>
                <Image
                  src="/assets/icons/icon4.png"
                  alt="Measurement-Informed Care icon"
                  width={40}
                  height={40}
                  className={styles.icon}
                  unoptimized
                />
              </div>
              <div>
                <h2 className={styles.h2}>04. Measurement-Informed Care</h2>
                <p className={styles.subHeading}>
                  Looking more closely, without losing sight of the person.
                </p>
              </div>
            </div>

            <p className={styles.paragraph}>Psychological care often begins with a conversation.</p>
            <p className={styles.paragraph}>
              We listen to what someone is experiencing, how long the difficulties have been present and how they
              are affecting everyday life.
            </p>
            <p className={styles.paragraph}>
              But some aspects of human functioning can also be explored through structured psychological
              assessments and selected physiological measurements.
            </p>
            <p className={styles.paragraph}>
              At Softmind, measurement-informed care brings together clinical understanding with information
              obtained from psychological assessments, qEEG-based brain activity analysis, neurofeedback systems,
              HRV biofeedback and other relevant psychophysiological methods.
            </p>
            <p className={styles.paragraph}>
              The purpose is not to replace conversation with numbers or reports. It is to gather information
              that may help us ask better questions, understand selected processes and review progress.
            </p>

            {/* Sub-section: qEEG */}
            <h3 className={styles.h3}>qEEG Brain Mapping and Assessment</h3>
            <p className={styles.paragraph}>
              Quantitative electroencephalography, or qEEG, is a method of analysing electrical activity
              recorded from the scalp.
            </p>
            <p className={styles.paragraph}>
              It allows selected characteristics of EEG activity to be examined through computational analysis.
            </p>
            <p className={styles.paragraph}>
              Depending on the system and recording protocol, qEEG brain mapping may provide information about
              brainwave frequency patterns, spectral power and other features of recorded activity.
            </p>
            <p className={styles.paragraph}>
              These findings can be presented through graphs, numerical measures and topographical maps.
            </p>
            <p className={styles.paragraph}>
              Such information may be useful in selected neurophysiological evaluations and research-informed
              clinical discussions.
            </p>
            <p className={styles.paragraph}>
              However, qEEG findings require careful interpretation. Brain activity changes with alertness,
              sleep, medication, recording conditions and many other factors.
            </p>
            <p className={styles.paragraph}>
              A difference from a reference database does not necessarily indicate a disorder.
            </p>
            <p className={styles.paragraph}>
              Importantly, qEEG cannot independently diagnose anxiety, depression, ADHD or other common
              psychiatric conditions. It should not be used as a substitute for a qualified clinical assessment.
            </p>
            <p className={styles.paragraph}>
              At Softmind, we consider qEEG information within its appropriate limitations and alongside the
              person&apos;s clinical history, psychological presentation and other relevant findings.
            </p>

            {/* Sub-section: Neurofeedback */}
            <h3 className={styles.h3}>Neurofeedback Systems</h3>
            <p className={styles.paragraph}>
              Neurofeedback involves recording selected aspects of brain activity and presenting feedback
              during a structured training session.
            </p>
            <p className={styles.paragraph}>
              This feedback may appear as changes in a visual display, sound or another form of signal.
            </p>
            <p className={styles.paragraph}>
              The individual participates in the training while the system provides information about the
              targeted EEG activity.
            </p>
            <p className={styles.paragraph}>
              Neurofeedback can also generate session-related measurements that allow selected training
              parameters to be observed over time.
            </p>
            <p className={styles.paragraph}>
              However, changes in EEG patterns during training do not automatically mean that anxiety,
              attention or other psychological difficulties have improved.
            </p>
            <p className={styles.paragraph}>
              The clinical evidence for neurofeedback differs across conditions and training protocols.
            </p>
            <p className={styles.paragraph}>
              Where it is used, we consider both the training data and meaningful changes in the person&apos;s
              everyday functioning.
            </p>

            {/* Sub-section: HRV Biofeedback */}
            <h3 className={styles.h3}>HRV Biofeedback and Physiological Regulation</h3>
            <p className={styles.paragraph}>
              Heart rate variability, commonly called HRV, describes variation in the time intervals between
              heartbeats.
            </p>
            <p className={styles.paragraph}>
              Under suitable recording conditions, HRV can provide information about aspects of cardiovascular
              autonomic regulation.
            </p>
            <p className={styles.paragraph}>
              HRV biofeedback allows individuals to observe physiological information while practising guided
              breathing or other relevant regulation exercises.
            </p>
            <p className={styles.paragraph}>
              At Softmind, this may be considered as part of work involving physiological arousal and
              self-regulation.
            </p>
            <p className={styles.paragraph}>
              HRV measurements can be influenced by breathing patterns, physical activity, posture, medication,
              age and health conditions.
            </p>
            <p className={styles.paragraph}>
              For this reason, a single HRV score cannot tell us whether someone is emotionally healthy, resilient
              or free from stress.
            </p>
            <p className={styles.paragraph}>
              The value of HRV biofeedback lies in its appropriate use within a broader programme of care, rather
              than treating the measurement as a complete picture of the nervous system.
            </p>

            {/* Sub-section: Psychological and Cognitive Assessments */}
            <h3 className={styles.h3}>Psychological and Cognitive Assessments</h3>
            <p className={styles.paragraph}>
              Brain and physiological measurements are only one part of understanding human functioning.
            </p>
            <p className={styles.paragraph}>
              Psychological assessments, cognitive measures, clinical interviews and behavioural observations
              can help us explore areas such as attention, memory, emotional difficulties, coping patterns and
              everyday functioning.
            </p>
            <p className={styles.paragraph}>Different assessment tools serve different purposes.</p>
            <p className={styles.paragraph}>
              We select them according to the questions that need to be answered, the individual&apos;s
              circumstances and the professional expertise required for their interpretation.
            </p>
            <p className={styles.paragraph}>
              A test score may offer useful information, but it should not become a label that defines the
              person.
            </p>

            {/* Sub-section: Understanding Progress */}
            <h3 className={styles.h3}>Understanding Progress Over Time</h3>
            <p className={styles.paragraph}>
              Measurement-informed care also involves examining whether the chosen approach is helping.
            </p>
            <p className={styles.paragraph}>
              Depending on the individual&apos;s needs, we may use validated psychological measures,
              behavioural observations, relevant physiological recordings and regular clinical reviews.
            </p>
            <p className={styles.paragraph}>Progress is not always reflected in a single number.</p>
            <p className={styles.paragraph}>
              Someone may begin sleeping better, returning to work, participating in social situations,
              managing difficult emotions or responding differently during conflict.
            </p>
            <p className={styles.paragraph}>
              These changes may be more meaningful to the person than an isolated measurement.
            </p>
            <p className={styles.paragraph}>
              When appropriate, repeated assessments can help us observe patterns over time. They can also
              indicate when a care plan needs to be reconsidered.
            </p>
            <p className={styles.paragraph}>
              Our intention is to use measurement thoughtfully—collecting information that has a clear
              purpose and interpreting it without overstating what it means.
            </p>
            <p className={styles.keyStatement}>
              We measure what may help us understand, while recognising what cannot be reduced to a number.
            </p>
          </div>
        </section>

        {/* Closing Summary: Four Foundations. One Approach. */}
        <section className={`${styles.section} ${styles.bgSage}`}>
          <div className={styles.inner}>
            <h2 className={styles.h2}>Four Foundations. One Approach.</h2>
            <p className={styles.paragraph}>
              Evidence-based therapies help us choose psychological interventions supported by research.
            </p>
            <p className={styles.paragraph}>
              Neuroscience-informed care broadens our understanding of how brain, body, learning and
              environment interact.
            </p>
            <p className={styles.paragraph}>
              Technology-assisted interventions offer additional possibilities when their use is appropriate and
              supported by a sound clinical rationale.
            </p>
            <p className={styles.paragraph}>
              Measurement-informed care helps us gather relevant information and examine meaningful change.
            </p>
            <p className={styles.paragraph}>Not everyone needs every form of assessment or intervention.</p>
            <p className={styles.paragraph}>
              Some people may benefit from structured psychotherapy alone. Others may require psychiatric
              consultation, psychological assessment, coordinated care or carefully selected additional
              interventions.
            </p>
            <p className={styles.paragraph}>
              The starting point remains the same: understanding the individual before deciding what may help.
            </p>
            <p className={styles.paragraph}>
              At Softmind, we believe good psychological care requires scientific knowledge, professional
              responsibility and attention to the person behind the difficulties.
            </p>

            <div className={styles.corePhilosophy}>
              <p className={styles.corePhilosophyText}>
                Science guides the care.
                <br />
                Technology supports it.
                <br />
                The person remains at the centre.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
