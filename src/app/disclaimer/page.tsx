import { Metadata } from "next";
import Link from "next/link";
import JsonLd, { generateBreadcrumbsLd } from "@/components/SEO/JsonLd";
import styles from "./disclaimer.module.css";

export const metadata: Metadata = {
  title: "Website & Clinical Services Disclaimer | Softmind Wellness",
  description:
    "Official Website & Clinical Services Disclaimer for Softmind Wellness Pvt. Ltd. Clear and realistic information regarding clinical outcomes, assessment limits, neurotechnologies, and professional care.",
  alternates: {
    canonical: "https://www.softmindindia.com/disclaimer",
  },
  openGraph: {
    title: "Website & Clinical Services Disclaimer | Softmind Wellness",
    description:
      "Official Website & Clinical Services Disclaimer for Softmind Wellness Pvt. Ltd. Learn about the scope of our clinical services, limitations, risks, and standards.",
    url: "https://www.softmindindia.com/disclaimer",
  },
};

export default function DisclaimerPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.softmindindia.com" },
    { name: "Disclaimer", url: "https://www.softmindindia.com/disclaimer" },
  ];

  return (
    <>
      <JsonLd data={generateBreadcrumbsLd(breadcrumbs)} />

      <div className={styles.container}>
        {/* Hero Header */}
        <header className={styles.hero}>
          <h1 className={styles.h1}>Website & Clinical Services Disclaimer</h1>
          <p className={styles.metaInfo}>
            Effective Date: 11 October 2026 &nbsp;|&nbsp; Website:{" "}
            <a
              href="https://www.softmindindia.com"
              style={{ color: "#0d9488", textDecoration: "underline" }}
            >
              www.softmindindia.com
            </a>
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "20px" }}>
            <p className={styles.paragraph}>
              At Softmind, we aim to provide psychological and mental healthcare that is responsible,
              evidence-informed and attentive to individual needs.
            </p>
            <p className={styles.paragraph}>
              We believe people should have clear and realistic information about the services they are
              considering, including their possible benefits, limitations, risks and uncertainties.
            </p>
            <p className={styles.paragraph}>
              This disclaimer applies to information published on our website, psychological and psychiatric
              services, clinical assessments, online consultations, educational resources, digital tools and
              information concerning technology-assisted interventions.
            </p>
            <p className={styles.paragraph}>
              Please read it alongside our{" "}
              <Link href="/privacy-policy" style={{ color: "#0d9488", textDecoration: "underline" }}>
                Privacy Policy
              </Link>
              ,{" "}
              <Link href="/terms" style={{ color: "#0d9488", textDecoration: "underline" }}>
                Terms of Service
              </Link>{" "}
              and relevant clinical consent documents.
            </p>
          </div>
        </header>

        {/* Main Content Sections */}
        <div className={styles.content}>
          {/* Section 1 */}
          <section className={styles.section}>
            <h2 className={styles.h2}>1. General Information</h2>
            <p className={styles.paragraph}>
              Information available on this website is intended for general education, awareness and
              understanding of psychological health, neuroscience, human behaviour and Softmind&apos;s
              services.
            </p>
            <p className={styles.paragraph}>
              Website content does not constitute personalised medical advice, psychological diagnosis,
              psychiatric evaluation or an individual treatment recommendation.
            </p>
            <p className={styles.paragraph}>
              Articles, videos, research discussions, self-assessments and other educational resources
              should not replace consultation with an appropriately qualified healthcare professional.
            </p>
            <p className={styles.paragraph}>
              Accessing this website, reading its content or submitting an enquiry does not, by itself,
              establish a professional therapeutic relationship.
            </p>
          </section>

          {/* Section 2 */}
          <section className={styles.section}>
            <h2 className={styles.h2}>2. No Guarantee of Treatment Outcomes</h2>
            <p className={styles.paragraph}>
              Softmind does not guarantee cure, recovery, symptom reduction, permanent relief, improvement
              within a particular timeframe or any other specific clinical or therapeutic outcome.
            </p>
            <p className={styles.paragraph}>
              Psychological and psychiatric care involves individual differences and clinical uncertainties.
            </p>
            <p className={styles.paragraph}>
              Treatment response may be influenced by the nature and duration of difficulties, psychological
              and medical history, coexisting conditions, environmental circumstances, treatment suitability,
              individual participation and other relevant factors.
            </p>
            <p className={styles.paragraph}>
              Some individuals may experience substantial improvement, while others may experience partial
              improvement, limited benefit or no meaningful change. Certain individuals may require
              additional assessment, alternative interventions or referral to other healthcare
              professionals.
            </p>
            <p className={styles.paragraph}>
              Symptoms may fluctuate or worsen, and some interventions may involve adverse effects.
            </p>
            <p className={styles.paragraph}>
              A recommendation for psychotherapy, psychiatric consultation, assessment, neurofeedback,
              biofeedback or another intervention must not be interpreted as a promise of success.
            </p>
            <p className={styles.paragraph}>
              Payment for consultations, assessments, treatment sessions or therapeutic packages does not
              guarantee a particular result.
            </p>
            <p className={styles.paragraph}>
              Our commitment is to provide appropriate professional care, not to promise outcomes that cannot
              be assured.
            </p>
          </section>

          {/* Section 3 */}
          <section className={styles.section}>
            <h2 className={styles.h2}>3. Individual Assessment and Treatment Suitability</h2>
            <p className={styles.paragraph}>
              Clinical recommendations are based on individual needs, professional assessment, available
              scientific evidence and applicable standards of care.
            </p>
            <p className={styles.paragraph}>
              Not every service described on this website is suitable, necessary or available for every
              individual.
            </p>
            <p className={styles.paragraph}>
              A treating professional may recommend additional assessment, modify a treatment plan, defer an
              intervention or refer an individual to another qualified professional when clinically
              appropriate.
            </p>
            <p className={styles.paragraph}>
              Services are provided within the qualifications, competence, registration requirements and
              lawful scope of practice of the professionals concerned.
            </p>
            <p className={styles.paragraph}>
              Psychiatric diagnosis, prescribing and medication management are undertaken only by
              appropriately qualified and authorised medical practitioners.
            </p>
          </section>

          {/* Section 4 */}
          <section className={styles.section}>
            <h2 className={styles.h2}>4. Psychological Therapies</h2>
            <p className={styles.paragraph}>
              Softmind provides psychological interventions that may include cognitive behavioural therapy
              (CBT), acceptance and commitment therapy (ACT), dialectical behaviour therapy (DBT)-informed
              approaches, behavioural and exposure-based therapies, mindfulness-informed practices and other
              appropriate therapeutic methods.
            </p>
            <p className={styles.paragraph}>
              The suitability and effectiveness of any approach depend on the individual&apos;s
              circumstances, presenting difficulties and available scientific evidence.
            </p>
            <p className={styles.paragraph}>
              No psychological therapy is represented as universally effective.
            </p>
            <p className={styles.paragraph}>
              Psychotherapy may involve discussing difficult experiences, experiencing temporary emotional
              discomfort or undertaking structured behavioural exercises.
            </p>
            <p className={styles.paragraph}>
              Relevant benefits, material risks, limitations and alternatives should be explained through the
              appropriate professional consent process.
            </p>
            <p className={styles.paragraph}>
              Treatment plans may be reviewed and modified according to clinical needs and progress.
            </p>
          </section>

          {/* Section 5 */}
          <section className={styles.section}>
            <h2 className={styles.h2}>5. qEEG Brain Mapping and Neurophysiological Assessment</h2>
            <p className={styles.paragraph}>
              Quantitative electroencephalography (qEEG) involves computational analysis of electrical
              activity recorded from the scalp.
            </p>
            <p className={styles.paragraph}>
              Depending on the recording protocol, qEEG may provide information about selected
              characteristics of EEG activity, including frequency-related patterns, spectral power and other
              measurable signal features.
            </p>
            <p className={styles.paragraph}>
              These findings require careful professional interpretation.
            </p>
            <p className={styles.paragraph}>
              qEEG brain mapping is not a standalone diagnostic test for depression, anxiety, ADHD,
              personality disorders or other common psychiatric conditions.
            </p>
            <p className={styles.paragraph}>
              Differences in recorded EEG patterns do not independently establish the cause of psychological
              symptoms, confirm a psychiatric diagnosis or predict treatment success.
            </p>
            <p className={styles.paragraph}>
              Results may be influenced by recording conditions, artefacts, medication, alertness,
              physiological state and individual variability.
            </p>
            <p className={styles.paragraph}>
              Where relevant, qEEG findings should be considered alongside clinical history, psychological
              assessment and other appropriate information.
            </p>
            <p className={styles.paragraph}>
              No particular diagnostic conclusion or treatment outcome is guaranteed through qEEG assessment.
            </p>
          </section>

          {/* Section 6 */}
          <section className={styles.section}>
            <h2 className={styles.h2}>
              6. Neurofeedback, Biofeedback and Technology-Assisted Interventions
            </h2>
            <p className={styles.paragraph}>
              Softmind may provide selected technology-assisted services, including EEG neurofeedback, heart
              rate variability (HRV) biofeedback, cranial electrotherapy stimulation (CES), transcranial
              direct current stimulation (tDCS), audiovisual entrainment (AVE) and photobiomodulation.
            </p>
            <p className={styles.paragraph}>
              These methods differ in their purposes, mechanisms, clinical evidence, contraindications and
              possible adverse effects.
            </p>
            <p className={styles.paragraph}>
              Some applications have limited or evolving evidence, and certain uses may remain
              investigational.
            </p>
            <p className={styles.paragraph}>
              Softmind does not claim that these technologies can cure psychiatric conditions, permanently
              correct brain activity or guarantee improvement in psychological functioning.
            </p>
            <p className={styles.paragraph}>
              Changes in physiological measurements or neurofeedback training parameters do not necessarily
              establish clinical recovery or improvement in everyday functioning.
            </p>
            <p className={styles.paragraph}>
              Technology-assisted interventions are not substitutes for appropriate medical or psychological
              evaluation.
            </p>
            <p className={styles.paragraph}>
              Before recommending an intervention, relevant professionals should consider individual
              suitability, available evidence, potential risks, contraindications and reasonable
              alternatives.
            </p>
            <p className={styles.paragraph}>
              Appropriate informed consent and monitoring are required.
            </p>
            <p className={styles.paragraph}>
              No device should be described as approved for a particular clinical indication unless the
              applicable regulatory status has been verified.
            </p>
          </section>

          {/* Section 7 */}
          <section className={styles.section}>
            <h2 className={styles.h2}>7. Psychological Assessments and Measurement</h2>
            <p className={styles.paragraph}>
              Psychological tests, cognitive assessments, rating scales, behavioural observations and
              physiological recordings may provide information about selected aspects of individual
              functioning.
            </p>
            <p className={styles.paragraph}>
              No single questionnaire, test score, brain map or physiological measurement can fully explain a
              person&apos;s emotional experience, behaviour or psychological condition.
            </p>
            <p className={styles.paragraph}>
              Assessment results must be interpreted within the validity, purpose and limitations of the
              methods used.
            </p>
            <p className={styles.paragraph}>
              Reports reflect information available at the time of evaluation and do not guarantee future
              behaviour, recovery, academic performance, occupational functioning or other outcomes.
            </p>
            <p className={styles.paragraph}>
              Where appropriate, progress may be reviewed through clinical observations, validated measures,
              functional outcomes and the individual&apos;s own account of change.
            </p>
          </section>

          {/* Section 8 */}
          <section className={styles.section}>
            <h2 className={styles.h2}>8. Online Consultations</h2>
            <p className={styles.paragraph}>
              Online psychological consultations may be suitable for certain concerns but are not appropriate
              for every situation.
            </p>
            <p className={styles.paragraph}>
              Some individuals may require face-to-face assessment, psychiatric consultation, medical
              examination, emergency services or referral to another healthcare professional.
            </p>
            <p className={styles.paragraph}>
              Online consultations may be affected by internet connectivity, communication limitations and
              the privacy of the participant&apos;s surroundings.
            </p>
            <p className={styles.paragraph}>
              The suitability of remote care is determined by the relevant professional, subject to
              applicable legal and professional requirements.
            </p>
            <p className={styles.paragraph}>
              Online consultations do not guarantee the resolution of psychological difficulties.
            </p>
          </section>

          {/* Section 9 */}
          <section className={styles.section}>
            <h2 className={styles.h2}>9. Digital Self-Assessments and AI-Assisted Services</h2>
            <p className={styles.paragraph}>
              Any self-assessment, questionnaire, mood tracker or AI-assisted feature offered through
              Softmind&apos;s website or digital services is subject to the limitations explained alongside
              that tool.
            </p>
            <p className={styles.paragraph}>
              Unless expressly identified and administered as a formal clinical assessment by an appropriately
              qualified professional, such tools are intended for information, reflection or general
              self-understanding.
            </p>
            <p className={styles.paragraph}>
              They do not independently diagnose, exclude or treat mental health conditions.
            </p>
            <p className={styles.paragraph}>
              Automated scores and AI-generated information may contain errors, omissions or unsuitable
              suggestions.
            </p>
            <p className={styles.paragraph}>
              These tools do not replace professional clinical judgement and must not be relied upon for
              emergency decisions.
            </p>
            <p className={styles.paragraph}>
              The collection and processing of personal information through digital services are subject to
              the applicable Privacy Policy and legal requirements.
            </p>
          </section>

          {/* Section 10 */}
          <section className={styles.section}>
            <h2 className={styles.h2}>10. Children and Adolescents</h2>
            <p className={styles.paragraph}>
              Psychological services involving children and adolescents require appropriate attention to
              developmental needs, professional competence, safeguarding, consent and confidentiality.
            </p>
            <p className={styles.paragraph}>
              Parent or guardian involvement and consent arrangements are determined according to the
              individual&apos;s circumstances and applicable law.
            </p>
            <p className={styles.paragraph}>
              Digital self-assessments and automated tools are not substitutes for appropriate developmental
              or psychological evaluation.
            </p>
            <p className={styles.paragraph}>
              Nothing in this disclaimer limits applicable child-protection responsibilities, including
              mandatory reporting obligations under the Protection of Children from Sexual Offences Act,
              2012, where relevant.
            </p>
          </section>

          {/* Section 11 */}
          <section className={styles.section}>
            <h2 className={styles.h2}>11. Informed Consent and Patient Rights</h2>
            <p className={styles.paragraph}>
              Individuals receiving care should be provided with relevant information about proposed
              assessments and interventions, including their purpose, reasonably foreseeable risks, potential
              benefits and appropriate alternatives.
            </p>
            <p className={styles.paragraph}>
              Informed consent is obtained in accordance with applicable law and professional requirements.
            </p>
            <p className={styles.paragraph}>
              Softmind respects applicable rights concerning dignity, confidentiality, access to information,
              participation in care decisions and lawful grievance procedures.
            </p>
            <p className={styles.paragraph}>
              Nothing in this disclaimer limits rights or protections available under applicable Indian law,
              including relevant provisions of the Mental Healthcare Act, 2017, the Rights of Persons with
              Disabilities Act, 2016 and the Consumer Protection Act, 2019.
            </p>
          </section>

          {/* Section 12 */}
          <section className={styles.section}>
            <h2 className={styles.h2}>12. Confidentiality and Personal Information</h2>
            <p className={styles.paragraph}>
              Softmind recognises the importance of protecting personal and health-related information.
            </p>
            <p className={styles.paragraph}>
              Personal information is handled in accordance with applicable confidentiality obligations, data
              protection requirements and Softmind&apos;s Privacy Policy.
            </p>
            <p className={styles.paragraph}>
              Confidentiality is subject to lawful exceptions, including disclosures required or permitted
              under applicable statutory, judicial, safeguarding or professional obligations.
            </p>
            <p className={styles.paragraph}>
              Our Privacy Policy explains how personal information is collected, used, shared, retained and
              protected, together with the rights available to individuals.
            </p>
          </section>

          {/* Section 13 */}
          <section className={styles.section}>
            <h2 className={styles.h2}>13. Educational Content, Research and Perspectives</h2>
            <p className={styles.paragraph}>
              Softmind may publish educational articles, research summaries, videos and editorial
              Perspectives relating to psychological science, neuroscience, psychotherapy and human behaviour.
            </p>
            <p className={styles.paragraph}>
              Such materials may discuss established findings, emerging evidence, scientific uncertainty or
              institutional interpretations.
            </p>
            <p className={styles.paragraph}>
              Research findings do not establish that a particular result will apply to every individual.
            </p>
            <p className={styles.paragraph}>
              Editorial perspectives should not be mistaken for personalised clinical advice or definitive
              scientific conclusions.
            </p>
            <p className={styles.paragraph}>
              Information may be revised as scientific understanding develops.
            </p>
          </section>

          {/* Section 14 */}
          <section className={styles.section}>
            <h2 className={styles.h2}>14. Testimonials, Reviews and Individual Experiences</h2>
            <p className={styles.paragraph}>
              Testimonials and reviews, where published, reflect the experiences or opinions of the individuals
              concerned.
            </p>
            <p className={styles.paragraph}>
              They are not guarantees of similar outcomes for others.
            </p>
            <p className={styles.paragraph}>
              Testimonials do not replace scientific evidence and should not be relied upon as the sole basis
              for selecting an intervention.
            </p>
            <p className={styles.paragraph}>
              Any patient-related information published by Softmind must comply with applicable consent,
              confidentiality and professional requirements.
            </p>
          </section>

          {/* Section 15 */}
          <section className={styles.section}>
            <h2 className={styles.h2}>15. Fees, Packages, Cancellations and Refunds</h2>
            <p className={styles.paragraph}>
              Fees charged by Softmind relate to consultations, professional time, assessments, therapeutic
              interventions or other services described at the time of booking.
            </p>
            <p className={styles.paragraph}>
              Payment does not guarantee a particular clinical outcome.
            </p>
            <p className={styles.paragraph}>
              Cancellation, rescheduling, package and refund arrangements are governed by the applicable terms
              communicated to the individual, subject to statutory rights and applicable law.
            </p>
            <p className={styles.paragraph}>
              Nothing in this disclaimer excludes lawful claims concerning deficient services, misrepresentation
              or other legally recognised grounds for relief.
            </p>
          </section>

          {/* Section 16 */}
          <section className={styles.section}>
            <h2 className={styles.h2}>16. Emergency Situations</h2>
            <p className={styles.paragraph}>
              Softmind&apos;s website, routine appointment channels, online forms, email and digital tools are
              not emergency response services.
            </p>
            <p className={styles.paragraph}>
              Individuals experiencing immediate risk of suicide, self-harm, violence, serious medical
              deterioration or another urgent psychiatric or medical emergency should seek immediate
              assistance from local emergency services or the nearest appropriate emergency department.
            </p>
            <p className={styles.paragraph}>
              In India, the national emergency response number is 112.
            </p>
            <p className={styles.paragraph}>
              Do not wait for a routine appointment or website response during an emergency.
            </p>
          </section>

          {/* Section 17 */}
          <section className={styles.section}>
            <h2 className={styles.h2}>17. Professional Responsibility and Limitation of Liability</h2>
            <p className={styles.paragraph}>
              Softmind aims to maintain accurate website information and provide services through
              appropriately qualified professionals.
            </p>
            <p className={styles.paragraph}>
              However, general website information may become outdated or incomplete, and clinical outcomes
              cannot be predicted with certainty.
            </p>
            <p className={styles.paragraph}>
              To the extent permitted by applicable law, Softmind is not responsible for harm arising solely
              from reliance on general educational website content instead of appropriate professional
              consultation.
            </p>
            <p className={styles.paragraph}>
              Nothing in this disclaimer excludes or restricts liability for professional negligence,
              deficient services, unlawful conduct, statutory obligations or any liability that cannot
              legally be excluded.
            </p>
            <p className={styles.paragraph}>
              This disclaimer does not replace informed consent, professional duties, clinical
              documentation or applicable regulatory requirements.
            </p>
          </section>

          {/* Section 18 */}
          <section className={styles.section}>
            <h2 className={styles.h2}>18. Governing Law and Dispute Resolution</h2>
            <p className={styles.paragraph}>
              This disclaimer is governed by applicable Indian law.
            </p>
            <p className={styles.paragraph}>
              Disputes shall be addressed through legally appropriate procedures and competent courts,
              consumer commissions or other statutory authorities, as applicable.
            </p>
            <p className={styles.paragraph}>
              Any contractual jurisdiction provision operates only to the extent permitted by law and does
              not override mandatory consumer, patient or other statutory rights.
            </p>
          </section>

          {/* Section 19 */}
          <section className={styles.section}>
            <h2 className={styles.h2}>19. Changes to This Disclaimer</h2>
            <p className={styles.paragraph}>
              Softmind may revise this disclaimer to reflect changes in services, scientific knowledge,
              professional standards or applicable legal requirements.
            </p>
            <p className={styles.paragraph}>
              The current version and effective date will be displayed on this page.
            </p>
            <p className={styles.paragraph}>
              Material changes affecting existing service arrangements will be communicated where required by
              law.
            </p>
          </section>

          {/* Section 20 */}
          <section className={styles.section}>
            <h2 className={styles.h2}>20. Contact Information</h2>
            <p className={styles.paragraph}>
              <strong>Softmind Wellness Pvt. Ltd.</strong>
              <br />
              Second Floor, Kerala State Housing Board
              <br />
              G-23 Panampilly Nagar Avenue
              <br />
              Panampilly Nagar, Kochi
              <br />
              Ernakulam, Kerala – 682036, India
              <br />
              Website:{" "}
              <a href="https://www.softmindindia.com" style={{ color: "#0d9488" }}>
                www.softmindindia.com
              </a>
              <br />
              Email:{" "}
              <a href="mailto:hello@softmindindia.com" style={{ color: "#0d9488" }}>
                hello@softmindindia.com
              </a>
              <br />
              Phone:{" "}
              <a href="tel:+919061818732" style={{ color: "#0d9488" }}>
                +91 90618 18732
              </a>
            </p>
          </section>

          {/* Our Commitment */}
          <section className={styles.section}>
            <h2 className={styles.h2}>Our Commitment</h2>
            <p className={styles.paragraph}>
              At Softmind, we aim to provide responsible psychological care informed by scientific evidence,
              professional competence and individual circumstances.
            </p>
            <p className={styles.paragraph}>
              We communicate possible benefits without promising certainty, acknowledge the limitations of
              available methods and remain accountable for the professional services we provide.
            </p>
            <p className={styles.paragraph}>
              Science guides the care.
              <br />
              Technology supports it.
              <br />
              The person remains at the centre.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
