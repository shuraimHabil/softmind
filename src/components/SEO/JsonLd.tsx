import React from "react";

interface JsonLdProps {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function generateBreadcrumbsLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateOrganizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "Softmind Wellness",
    legalName: "Softmind Wellness Pvt. Ltd.",
    url: "https://www.softmindindia.com",
    logo: "https://www.softmindindia.com/assets/Softmind%20Logo%20White.png",
    description:
      "Evidence-based psychological care and psychiatric consultations across Kerala and online.",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Second Floor, Kerala State Housing Board, G-23, Panampilly Nagar Avenue",
      addressLocality: "Kochi",
      addressRegion: "Kerala",
      postalCode: "682036",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-90618-18732",
        contactType: "customer service",
        availableLanguage: ["English", "Malayalam"],
      },
    ],
  };
}

export function generateCentreLd(centre: {
  name: string;
  url: string;
  phone: string;
  fullAddress: string;
  city: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: centre.name,
    url: centre.url,
    telephone: centre.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: centre.fullAddress,
      addressLocality: centre.city.split(",")[0],
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    parentOrganization: {
      "@type": "MedicalOrganization",
      name: "Softmind Wellness",
      url: "https://www.softmindindia.com",
    },
  };
}

export function generateClinicianLd(clinician: {
  name: string;
  role: string;
  url: string;
  license?: string;
  languages?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: clinician.name,
    jobTitle: clinician.role,
    url: clinician.url,
    worksFor: {
      "@type": "MedicalOrganization",
      name: "Softmind Wellness",
      url: "https://www.softmindindia.com",
    },
    knowsLanguage: clinician.languages || ["English", "Malayalam"],
  };
}

export function generateConditionLd(condition: {
  name: string;
  url: string;
  description: string;
  commonSigns?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    name: condition.name,
    description: condition.description,
    code: {
      "@type": "MedicalCode",
      codingSystem: "ICD-11",
    },
    signOrSymptom: (condition.commonSigns || []).map((sign) => ({
      "@type": "MedicalSignOrSymptom",
      name: sign,
    })),
  };
}

export function generateFaqLd(
  faqs: { question: string; answer: string }[]
) {
  if (!faqs || faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateArticleLd(article: {
  title: string;
  headline: string;
  datePublished: string;
  author: string;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.headline || article.title,
    datePublished: article.datePublished,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "MedicalOrganization",
      name: "Softmind Wellness",
      logo: {
        "@type": "ImageObject",
        url: "https://www.softmindindia.com/assets/Softmind%20Logo%20White.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
  };
}
