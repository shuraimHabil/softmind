import { Metadata } from "next";
import Link from "next/link";
import JsonLd, {
  generateBreadcrumbsLd,
  generateOrganizationLd,
} from "@/components/SEO/JsonLd";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Softmind Wellness | Psychological Care in Kerala",
  description:
    "Learn about Softmind Wellness Pvt. Ltd., our clinical governance, multidisciplinary team of licensed psychologists and psychiatrists, and our commitment to evidence-based care.",
  alternates: {
    canonical: "https://www.softmindindia.com/about",
  },
  openGraph: {
    title: "About Softmind Wellness | Psychological Care in Kerala",
    description:
      "Grounded in science, free of stigma, and dedicated to compassionate psychological care across Kerala and online.",
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


        <header className={styles.hero}>
          <h1 className={styles.h1}>Privacy Policy & Terms</h1>
          <p className={styles.intro}>
            Softmind Wellness Pvt. Ltd.
          </p>
        </header>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.h2}>Privacy Policy</h2>
            <p className={styles.paragraph}><strong>Effective: 1 October 2026</strong></p>
            <p className={styles.paragraph}>
              Softmind Wellness Pvt. Ltd. (“Softmind”, “we”, “us”) respects the privacy and confidentiality of clients, website visitors and users of our digital services. This policy explains how we collect, use and protect personal information.
            </p>

            <h3 className={styles.h2} style={{ fontSize: "1.2rem", marginTop: "24px" }}>1. Information We Collect</h3>
            <p className={styles.paragraph}>
              Depending on the service used, we may collect your name, age/date of birth, contact details, appointment and payment information, communications, and information reasonably required for psychological assessment or care. Our website may also collect limited technical information such as device/browser information, IP address and cookies.
            </p>

            <h3 className={styles.h2} style={{ fontSize: "1.2rem", marginTop: "24px" }}>2. How We Use Information</h3>
            <p className={styles.paragraph}>
              Information may be used to provide and manage psychological services, appointments, payments and communications; maintain appropriate clinical and administrative records; support continuity and quality of care; meet legal and professional obligations; maintain service security; and improve our services. Anonymised or aggregated information may be used for legitimate service evaluation, statistics and quality improvement.
            </p>

            <h3 className={styles.h2} style={{ fontSize: "1.2rem", marginTop: "24px" }}>3. Confidentiality</h3>
            <p className={styles.paragraph}>
              Information disclosed during psychological consultation, assessment or therapy is treated as confidential. Information may be disclosed where the client provides valid consent, where reasonably necessary for authorised professional care or supervision, where required by law or a competent authority, or where disclosure is legally permitted or required in relation to serious risk of harm or safety. Where disclosure is necessary, we seek to limit it to information reasonably required for that purpose. The Mental Healthcare Act, 2017 provides confidentiality protections for mental-health information, including information stored electronically or digitally.
            </p>

            <h3 className={styles.h2} style={{ fontSize: "1.2rem", marginTop: "24px" }}>4. Online Services & Minors</h3>
            <p className={styles.paragraph}>
              Online consultations use internet-based technologies and cannot be guaranteed to be completely secure or uninterrupted. Users should participate from a reasonably private environment and protect access to their devices. Additional consent and privacy safeguards may apply to children and adolescents, including parental or lawful-guardian consent where required by law.
            </p>

            <h3 className={styles.h2} style={{ fontSize: "1.2rem", marginTop: "24px" }}>5. AI-Assisted Services</h3>
            <p className={styles.paragraph}>
              Softmind may provide AI-assisted features for general information, education, website navigation and access to services. AI assistance is not a psychologist, therapist, psychiatrist, physician or emergency service. AI responses may be inaccurate or incomplete and should not be considered a diagnosis, prescription, treatment plan or professional clinical opinion. Interaction with an AI-assisted service does not by itself establish a professional relationship with Softmind or a Softmind professional. Please avoid sharing unnecessary sensitive personal or clinical information through general AI interfaces.
            </p>

            <h3 className={styles.h2} style={{ fontSize: "1.2rem", marginTop: "24px" }}>6. Payments & Service Providers</h3>
            <p className={styles.paragraph}>
              Payments and certain digital functions may be provided through authorised third-party providers. Depending on the services used, this may include payment, hosting, communication, booking, video consultation, analytics and AI technology providers. Softmind does not intentionally store complete card credentials where payment information is processed directly by a payment provider. Softmind does not sell identifiable clinical information.
            </p>

            <h3 className={styles.h2} style={{ fontSize: "1.2rem", marginTop: "24px" }}>7. Security, Retention & Data Breaches</h3>
            <p className={styles.paragraph}>
              Softmind uses reasonable administrative, technical and organisational safeguards to protect personal information. No electronic system, however, can guarantee absolute security. Information is retained for as long as reasonably necessary or as required by applicable legal, clinical, regulatory or professional obligations and is securely deleted, anonymised or disposed of when appropriate. Where a personal-data breach occurs, Softmind will take reasonable containment and remedial measures and provide legally required notifications where applicable.
            </p>

            <h3 className={styles.h2} style={{ fontSize: "1.2rem", marginTop: "24px" }}>8. Recording & Research</h3>
            <p className={styles.paragraph}>
              Psychological consultations are not routinely recorded. Where Softmind proposes audio/video recording for a specific purpose, appropriate notice and consent will be obtained where required. Receiving services from Softmind does not automatically constitute consent to participate in identifiable research. Separate consent and applicable safeguards will be used where required.
            </p>

            <h3 className={styles.h2} style={{ fontSize: "1.2rem", marginTop: "24px" }}>9. Your Rights</h3>
            <p className={styles.paragraph}>
              Subject to applicable law, you may have rights concerning access, correction, updating, erasure, withdrawal of consent, nomination and grievance redressal. The applicable Indian data-protection framework includes rights and obligations relating to consent, correction, erasure and grievance redressal.
            </p>

            <h3 className={styles.h2} style={{ fontSize: "1.2rem", marginTop: "24px" }}>10. Contact Privacy & Grievance Officer</h3>
            <p className={styles.paragraph}>
              Softmind Wellness Pvt. Ltd.<br />
              Second Floor, Kerala State Housing Board<br />
              G-23, Panampilly Nagar Avenue<br />
              Panampilly Nagar, Kochi, Ernakulam<br />
              Kerala – 682036, India<br />
              Phone: +91 90618 18732<br />
              Email: hello@softmindindia.com
            </p>
          </section>

          <section className={styles.section} style={{ marginTop: "40px" }}>
            <h2 className={styles.h2}>Terms & Conditions</h2>
            <p className={styles.paragraph}><strong>Effective: 1 October 2026</strong></p>
            <p className={styles.paragraph}>
              By accessing Softmind's website or digital services, you agree to these Terms to the extent permitted by applicable law.
            </p>

            <h3 className={styles.h2} style={{ fontSize: "1.2rem", marginTop: "24px" }}>1. Website Information</h3>
            <p className={styles.paragraph}>
              Website articles, resources and other information are provided primarily for general educational and informational purposes. They do not constitute individual psychological assessment, diagnosis, prescription or personalised treatment advice.
            </p>

            <h3 className={styles.h2} style={{ fontSize: "1.2rem", marginTop: "24px" }}>2. Professional Services</h3>
            <p className={styles.paragraph}>
              Browsing the website, sending an enquiry, using WhatsApp, interacting with AI assistance or requesting an appointment does not by itself establish a professional relationship. A professional relationship begins through an appropriately accepted professional engagement. Softmind professionals work within their respective qualifications, registrations and professional scope. Referral to another professional or service may be recommended where appropriate.
            </p>

            <h3 className={styles.h2} style={{ fontSize: "1.2rem", marginTop: "24px" }}>3. Clinical Consent</h3>
            <p className={styles.paragraph}>
              Acceptance of these website Terms does not replace clinical informed consent. Separate consent may be required for psychological services, online consultations, services involving minors, specific procedures, recording or research participation.
            </p>

            <h3 className={styles.h2} style={{ fontSize: "1.2rem", marginTop: "24px" }}>4. Appointments & Payments</h3>
            <p className={styles.paragraph}>
              Appointments are subject to availability and confirmation. Applicable fees and relevant cancellation, rescheduling and refund conditions will be communicated during the booking process. No particular therapeutic or psychological outcome can be guaranteed.
            </p>

            <h3 className={styles.h2} style={{ fontSize: "1.2rem", marginTop: "24px" }}>5. Online Consultation</h3>
            <p className={styles.paragraph}>
              Users are responsible for providing accurate information, maintaining reasonable privacy and having adequate internet connectivity. A professional may recommend in-person consultation or referral where online consultation is not appropriate.
            </p>

            <h3 className={styles.h2} style={{ fontSize: "1.2rem", marginTop: "24px" }}>6. AI-Assisted Services</h3>
            <p className={styles.paragraph}>
              AI-assisted services are intended for general information, education, navigation and access to Softmind services. They do not provide diagnosis, psychotherapy, medical treatment, prescriptions or emergency assessment. AI-generated information may contain errors. Users should not rely solely on AI for decisions concerning diagnosis, medication, treatment, self-harm, harm to others, emergencies or significant health and safety matters.
            </p>

            <h3 className={styles.h2} style={{ fontSize: "1.2rem", marginTop: "24px" }}>7. Emergencies</h3>
            <p className={styles.paragraph}>
              Softmind's website, AI assistance, WhatsApp, email and routine booking systems are not emergency services. Where there is an immediate threat to life or safety, appropriate emergency assistance should be sought without waiting for a response from Softmind.
            </p>

            <h3 className={styles.h2} style={{ fontSize: "1.2rem", marginTop: "24px" }}>8. Intellectual Property & Acceptable Use</h3>
            <p className={styles.paragraph}>
              Softmind's original website content, branding and educational materials are owned by or appropriately licensed to Softmind Wellness Pvt. Ltd. Users must not unlawfully reproduce content, interfere with Softmind systems, impersonate others, misuse professional identities or credentials, introduce malicious software, or use the services for unlawful purposes.
            </p>

            <h3 className={styles.h2} style={{ fontSize: "1.2rem", marginTop: "24px" }}>9. Third-Party Services & Availability</h3>
            <p className={styles.paragraph}>
              Softmind may use third-party payment, hosting, communication, video, analytics and AI services. These providers may have their own terms and privacy practices. Softmind does not guarantee uninterrupted availability of its website or third-party digital infrastructure.
            </p>

            <h3 className={styles.h2} style={{ fontSize: "1.2rem", marginTop: "24px" }}>10. Liability</h3>
            <p className={styles.paragraph}>
              To the maximum extent permitted by applicable law, Softmind is not responsible for indirect or consequential losses arising solely from general website information, temporary service interruptions, third-party systems or unreasonable reliance on AI-generated information. Nothing in these Terms excludes professional duties, consumer rights or liability that cannot lawfully be excluded.
            </p>

            <h3 className={styles.h2} style={{ fontSize: "1.2rem", marginTop: "24px" }}>11. Governing Law & Jurisdiction</h3>
            <p className={styles.paragraph}>
              These Terms and Softmind's digital services are governed by the laws of India. Subject to applicable law and statutory forums that cannot legally be excluded, the competent courts at Ernakulam (Kochi), Kerala, India shall have jurisdiction over disputes relating to these Terms or Softmind's digital services. Nothing in this clause restricts any non-waivable statutory consumer right, remedy or forum.
            </p>

            <h3 className={styles.h2} style={{ fontSize: "1.2rem", marginTop: "24px" }}>12. Contact</h3>
            <p className={styles.paragraph}>
              Softmind Wellness Pvt. Ltd.<br />
              Second Floor, Kerala State Housing Board<br />
              G-23, Panampilly Nagar Avenue<br />
              Panampilly Nagar, Kochi, Ernakulam<br />
              Kerala – 682036, India<br />
              Phone: +91 90618 18732<br />
              Email: hello@softmindindia.com
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
