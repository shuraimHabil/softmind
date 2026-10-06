import { Metadata } from "next";
import Link from "next/link";
import JsonLd, {
  generateBreadcrumbsLd,
  generateOrganizationLd,
} from "@/components/SEO/JsonLd";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Softmind | Psychological Science. Human Understanding.",
  description:
    "Softmind began in 2011 with a simple idea: psychological care should begin with understanding the person, not simply naming the problem. Learn about our approach across our four centres in Kerala.",
  alternates: {
    canonical: "https://www.softmindindia.com/about",
  },
  openGraph: {
    title: "About Softmind | Psychological Science. Human Understanding.",
    description:
      "Science guides the care. Technology supports it. The person remains at the centre.",
    url: "https://www.softmindindia.com/about",
  },
};

export default function AboutPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.softmindindia.com" },
    { name: "About", url: "https://www.softmindindia.com/about" },
  ];

  return (
    <>
      <JsonLd data={generateBreadcrumbsLd(breadcrumbs)} />
      <JsonLd data={generateOrganizationLd()} />

      <div className={styles.container}>
        {/* Hero */}
        <header className={styles.hero}>
          <h1 className={styles.h1}>Psychological science. Human understanding.</h1>
          <p className={styles.intro}>
            Softmind began in 2011 with a simple idea: psychological care should begin with
            understanding the person, not simply naming the problem. People are shaped by many
            things — biology and development, learning and memory, relationships, environment,
            culture and the experiences accumulated across life.
          </p>
        </header>

        <div className={styles.content}>
          {/* Overview */}
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Our work therefore draws from contemporary understanding in applied psychology,
              affective and evolutionary neuroscience, developmental science and biology, cognitive
              science, psychophysiology and human behaviour. These perspectives do not give us one
              complete explanation of a person. Instead, they help us ask better questions about
              how people feel, think, relate, learn and behave.
            </p>
            <p className={styles.paragraph}>
              Across our four centres in Kerala, our multidisciplinary team brings this thinking
              into psychological care for individuals, couples and families, children and adolescents.
              Our approach brings together evidence-based psychological therapies,
              neuroscience-informed care, technology-assisted interventions and
              measurement-informed care, shaped around the individual.
            </p>
            <p className={styles.paragraph}>
              Where clinically appropriate, qEEG-based assessment and brain mapping, neurofeedback,
              biofeedback and specialised neuromodulation approaches may provide additional information
              or support an intervention. We use technology when it has a clear purpose—not simply
              because it is available. Technology is never the centre of our work. Understanding the
              person is.
            </p>
            <p className={styles.paragraph}>
              Beyond clinical care, our work extends to Human Experience, psychological knowledge,
              research and innovation, professional training and international collaborations.
            </p>

            <div className={styles.principleCallout}>
              <p className={styles.principleText}>
                Science guides the care. Technology supports it. The person remains at the centre.
              </p>
            </div>

            <div className={styles.ctaRow}>
              <Link href="/our-care" className={styles.primaryBtn}>
                Explore Softmind →
              </Link>
            </div>
          </section>

          {/* Understanding the person comes first */}
          <section className={styles.section}>
            <h2 className={styles.h2}>Understanding the person comes first</h2>
            <p className={styles.paragraph}>
              Softmind began with a question that still matters to us: how do we understand a person
              without reducing their experience to a diagnosis or a label? People are complicated.
              What we feel, think and do can be influenced by our biology, early development, learning,
              relationships, bodily states, environment and the experiences we accumulate over time.
              Two people may describe what appears to be the same problem and still have very different
              reasons for experiencing it.
            </p>
            <p className={styles.paragraph}>
              No single theory explains all of this. That is why our work draws from different areas of
              contemporary science, including applied psychology, affective and evolutionary neuroscience,
              developmental science and biology, cognitive science, psychophysiology and the study of
              human behaviour.
            </p>
            <p className={styles.paragraph}>
              From our centres in Kerala, including Kochi, Softmind brings this way of thinking into
              psychological care for individuals, couples and families, children and adolescents.
            </p>
          </section>

          {/* From understanding to intervention */}
          <section className={styles.section}>
            <h2 className={styles.h2}>From understanding to intervention</h2>
            <p className={styles.paragraph}>
              We prefer to understand what is happening before deciding what should be done. That means
              looking beyond the immediate difficulty. How did it develop? What may be maintaining it?
              What is happening in the person&apos;s relationships and environment? How does the body respond?
              What has been learned from previous experiences? What helps? What seems to make things worse?
            </p>
            <p className={styles.paragraph}>
              The answers are rarely the same from one person to another. Our therapeutic work therefore
              draws from evidence-based psychological interventions, but an intervention is considered in
              relation to the individual rather than applied simply because a particular label has been given.
            </p>

            <div className={styles.processCard}>
              <div className={styles.processLabel}>Our way of working can be expressed simply:</div>
              <div className={styles.processSteps}>
                {["Understand", "Personalise", "Intervene", "Measure", "Adapt"].map((step, i, arr) => (
                  <span key={step} style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                    <span className={styles.stepBadge}>{step}</span>
                    {i < arr.length - 1 && <span className={styles.stepArrow}>→</span>}
                  </span>
                ))}
              </div>
            </div>

            <p className={styles.paragraph}>
              If something is helping, we want to know. If it is not helping, that matters too.
            </p>
          </section>

          {/* Four dimensions of our care */}
          <section className={styles.section}>
            <h2 className={styles.h2}>Four dimensions of our care</h2>
            <p className={styles.paragraph}>
              These are not four separate services. They are different ways of informing the same process
              of understanding and care.
            </p>

            <div className={styles.missionGrid}>
              <div className={styles.missionCard}>
                <h3 className={styles.cardHeading}>Evidence-Based Therapies</h3>
                <p className={styles.cardText}>
                  Evidence matters. Our psychological interventions draw from established research and
                  clinical practice. But evidence still has to meet the individual in front of us —
                  their history, circumstances, preferences, strengths and difficulties. For us,
                  evidence-based practice is not about applying a technique mechanically. It is about
                  bringing together good evidence, professional judgement and an understanding of the
                  person receiving care.
                </p>
              </div>

              <div className={styles.missionCard}>
                <h3 className={styles.cardHeading}>Neuroscience-Informed Care</h3>
                <p className={styles.cardText}>
                  Our understanding of human behaviour continues to change as neuroscience develops.
                  Research into emotion, memory, learning, attention, prediction, bodily regulation,
                  development and social experience gives us additional ways of thinking about
                  psychological difficulties and human behaviour. But we are careful not to reduce a person to the brain.
                  The brain develops within a body, within relationships and within an environment.
                  Development, learning and experience continuously shape one another.
                  Neuroscience therefore informs our thinking; it does not replace psychological understanding.
                </p>
              </div>

              <div className={styles.missionCard}>
                <h3 className={styles.cardHeading}>Technology-Assisted Interventions</h3>
                <p className={styles.cardText}>
                  We are interested in technology when it has a useful role — not simply because it is new.
                  Depending on the person, the purpose and the clinical context, selected technologies such as
                  neurofeedback, biofeedback and other neurotechnology or neuromodulation approaches may be used
                  alongside psychological interventions. Technology may help us observe certain processes, provide
                  feedback, support training or complement an intervention. But technology remains a tool.
                  It should have a reason to be there. It does not replace clinical judgement, human interaction
                  or the therapeutic relationship.
                </p>
              </div>

              <div className={styles.missionCard}>
                <h3 className={styles.cardHeading}>Measurement-Informed Care</h3>
                <p className={styles.cardText}>
                  Clinical observation matters, but we also want to know what is actually changing. Where appropriate,
                  we follow psychological, behavioural, functional and physiological measures over time. In selected
                  situations, qEEG/EEG-based assessment and brain mapping may provide additional information about
                  patterns of recorded brain activity. Biofeedback and other physiological measures may also contribute
                  useful information. We do not treat a brain map, a score or a physiological measurement as an
                  explanation of the whole person. It is another piece of information. We consider it alongside the
                  person&apos;s experience, clinical assessment, history, behaviour and other relevant findings.
                </p>
                <div className={styles.cardFooterText}>
                  The purpose of measurement is practical: What is changing? What are we learning? Do we need to change what we are doing?
                </div>
              </div>
            </div>
          </section>

          {/* Beyond labels */}
          <section className={styles.section}>
            <h2 className={styles.h2}>Beyond labels</h2>
            <p className={styles.paragraph}>
              A diagnosis can describe something. It cannot describe everything.
            </p>
            <p className={styles.paragraph}>
              Diagnostic language can be useful. It can help professionals organise information,
              communicate with one another and make certain clinical decisions. But a diagnosis cannot
              contain the whole person.
            </p>
            <p className={styles.paragraph}>
              A person&apos;s present experience has a history. Biology, development, learning, relationships,
              culture, environment and life events may all have contributed to what we see today. We are
              therefore interested not only in what a difficulty is called, but in how it came to exist
              in this particular person&apos;s life.
            </p>

            <div className={styles.calloutCard}>
              <span className={styles.calloutTag}>That distinction matters to us.</span>
              <p className={styles.calloutHighlight}>Beyond labels. Towards understanding.</p>
            </div>
          </section>

          {/* Human Experience */}
          <section className={styles.section}>
            <h2 className={styles.h2}>Human Experience</h2>
            <p className={styles.paragraph}>
              Psychology is also about ordinary life. Not every important human experience is a disorder.
            </p>
            <p className={styles.paragraph}>
              Why do we become deeply attached to some people? Why can rejection stay with us for years?
              Why does the body sometimes respond before we understand what we are feeling? How does a
              sense of self develop? Why do apparently similar experiences affect two people differently?
              How do relationships change the way we experience ourselves and other people?
            </p>
            <p className={styles.paragraph}>
              These are psychological questions too.
            </p>
            <p className={styles.paragraph}>
              Through Human Experience, we explore how people feel, think, relate and behave across:
            </p>

            <div className={styles.pillGrid}>
              {[
                "Emotions",
                "Relationships",
                "Self",
                "Body & Experience",
                "Behaviour",
                "Life Transitions",
              ].map((topic) => (
                <span key={topic} className={styles.pillItem}>
                  {topic}
                </span>
              ))}
            </div>

            <p className={styles.paragraph}>
              Our intention is to bring psychological science closer to the questions people actually
              encounter in everyday life.
            </p>
          </section>

          {/* Knowledge Centre */}
          <section className={styles.section}>
            <h2 className={styles.h2}>Knowledge Centre</h2>
            <p className={styles.paragraph}>
              Science should be understandable without being oversimplified.
            </p>
            <p className={styles.paragraph}>
              Psychological ideas now travel quickly, particularly through social media. Complex experiences
              can easily become labels, lists, personality types and simple explanations. Human behaviour is rarely that simple.
            </p>
            <p className={styles.paragraph}>
              Through the Softmind Knowledge Centre, we share articles, perspectives, videos, podcasts
              and other resources exploring psychology, neuroscience, relationships, emotions and human
              behaviour. We want scientific ideas to be understandable without pretending that science
              has a simple answer for every human experience. Where evidence is strong, we should say so.
              Where questions remain, we should be equally comfortable saying that too.
            </p>
            <div className={styles.ctaRow}>
              <Link href="/knowledge-centre" className={styles.primaryBtn}>
                Knowledge Centre →
              </Link>
            </div>
          </section>

          {/* Research, Learning & Collaboration */}
          <section className={styles.section}>
            <h2 className={styles.h2}>Research, Learning &amp; Collaboration</h2>
            <p className={styles.paragraph}>
              Our understanding should continue to change.
            </p>
            <p className={styles.paragraph}>
              Psychological science does not stand still, and professional practice should not stand still
              either. We remain interested in developments across psychology, neuroscience, psychophysiology,
              neurotechnology and technology-assisted psychological care.
            </p>

            <ul className={styles.bulletList}>
              <li className={styles.bulletItem}>
                Through <strong>research and innovation</strong>, we explore emerging approaches and
                consider where they may — or may not — add value to psychological care.
              </li>
              <li className={styles.bulletItem}>
                Through <strong>professional training</strong>, we create opportunities for psychologists
                and other professionals to deepen their knowledge, clinical thinking and practical skills.
              </li>
              <li className={styles.bulletItem}>
                Through <strong>collaborations in India and internationally</strong>, we seek opportunities
                to work with researchers, professional organisations, institutions and technology partners
                around research, learning, knowledge exchange and the responsible evaluation of emerging approaches.
              </li>
            </ul>

            <div className={styles.quoteCard}>
              For us, innovation does not mean accepting every new idea. It means remaining curious enough to explore it and critical enough to question it.
            </div>

            <div className={styles.ctaRow}>
              <Link href="/research-and-collaboration" className={styles.primaryBtn}>
                Research &amp; Collaboration →
              </Link>
              <Link href="/professional-learning" className={styles.secondaryBtn}>
                Professional Learning
              </Link>
            </div>
          </section>

          {/* An evolving practice */}
          <section className={styles.section}>
            <h2 className={styles.h2}>An evolving practice</h2>
            <p className={styles.paragraph}>
              There are things about human behaviour that psychological science understands reasonably well.
              There are many things we are still learning. We think it is important to acknowledge both.
            </p>
            <p className={styles.paragraph}>
              As evidence changes, our understanding should be capable of changing with it. As new
              technologies emerge, they should be examined rather than automatically adopted. And when
              the person in front of us does not fit our assumptions, our assumptions deserve another look.
            </p>
            <p className={styles.paragraph}>
              That matters because psychological care is ultimately about a person — not a theory, a
              diagnosis, a brain map, a technology or a treatment protocol. This is the kind of practice
              we want Softmind to continue building: a place where psychological science, professional
              care, technology, curiosity and human understanding can meet without any one of them
              becoming more important than the person.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
