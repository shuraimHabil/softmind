export interface Centre {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  city: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  fullAddress: string;
  hours: string;
  thumbnail: string;
  gallery: {
    main: string;
    sub1: string;
    sub2: string;
  };
  facilities: string[];
  clinicianIds: number[];
  mapQuery: string;
}

export const centres: Centre[] = [
  {
    id: "panampilly-nagar",
    slug: "panampilly-nagar",
    name: "Softmind Kochi",
    shortName: "Panampilly Nagar",
    city: "Kochi, Kerala",
    tagline:
      "Our Panampilly Nagar centre offers a calm and welcoming space for individuals, couples and families. A dedicated team of psychologists provide comprehensive mental health care tailored for your journey.",
    phone: "+91 90618 18732",
    email: "kochi@softmind.in",
    address: "Panampilly Nagar Ave,\nErnakulam",
    fullAddress: "4th Floor, Skyline Bay Towers, Panampilly Nagar Ave, Kochi, Kerala 682036",
    hours: "Mon – Sat: 9:00 AM – 8:00 PM",
    thumbnail: "/assets/centre_kochi.jpg",
    gallery: {
      main: "/assets/centre_kochi.jpg",
      sub1: "/assets/therapy_session.jpg",
      sub2: "/assets/hero_therapy.jpg",
    },
    facilities: [
      "Individual therapy rooms",
      "Couple & family therapy rooms",
      "Child & adolescent therapy space",
      "Psychological assessment room",
      "Comfortable waiting lounge",
      "Wheelchair accessible & parking",
      "Safe, confidential & soundproof suites",
    ],
    clinicianIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    mapQuery: "Panampilly+Nagar,+Kochi,+Kerala",
  },
  {
    id: "kakkanad",
    slug: "kakkanad",
    name: "Softmind Kakkanad",
    shortName: "Kakkanad",
    city: "Kochi, Kerala",
    tagline:
      "Conveniently situated near InfoPark and CSEZ, our Kakkanad centre provides a private sanctuary for tech professionals, students, and families seeking evidence-based therapy in a relaxing atmosphere.",
    phone: "+91 98460 60111",
    email: "kakkanad@softmind.in",
    address: "Seaport-Airport Rd, CSEZ,\nKochi",
    fullAddress: "3rd Floor, Express Arcade, Seaport-Airport Rd, Near CSEZ, Kakkanad, Kochi, Kerala 682037",
    hours: "Mon – Sat: 9:00 AM – 8:30 PM",
    thumbnail: "/assets/centre_calicut.jpg",
    gallery: {
      main: "/assets/centre_calicut.jpg",
      sub1: "/assets/insight_1.jpg",
      sub2: "/assets/insight_2.jpg",
    },
    facilities: [
      "Individual therapy rooms",
      "Work-stress & corporate wellness pods",
      "Couple & family therapy rooms",
      "Psychological diagnostic suite",
      "High-speed confidential tele-therapy booth",
      "Soundproof consultation rooms",
      "On-site visitor parking",
    ],
    clinicianIds: [1, 3, 5, 7, 9, 11, 12, 13, 2, 4, 6, 8],
    mapQuery: "Kakkanad,+Kochi,+Kerala",
  },
  {
    id: "trivandrum",
    slug: "trivandrum",
    name: "Softmind Trivandrum",
    shortName: "Trivandrum",
    city: "Thiruvananthapuram, Kerala",
    tagline:
      "Located in the serene neighbourhood of Kowdiar, our Trivandrum centre delivers compassionate psychiatric and psychological interventions in an elegant, soothing setting designed for genuine healing.",
    phone: "+91 0471 299238",
    email: "trivandrum@softmind.in",
    address: "Ambalamukku, Kowdiar,\nThiruvananthapuram",
    fullAddress: "2nd Floor, Lotus Heritage, Ambalamukku - Kowdiar Main Rd, Thiruvananthapuram, Kerala 695003",
    hours: "Mon – Sat: 9:00 AM – 7:30 PM",
    thumbnail: "/assets/centre_trivandrum.jpg",
    gallery: {
      main: "/assets/centre_trivandrum.jpg",
      sub1: "/assets/insight_3.jpg",
      sub2: "/assets/child_session.jpg",
    },
    facilities: [
      "Individual therapy rooms",
      "Child & developmental therapy suite",
      "Couple & family counselling room",
      "Senior psychiatric consultation lounge",
      "Comprehensive psychometric assessment",
      "Peaceful garden-facing waiting lounge",
      "Dedicated parking facility",
    ],
    clinicianIds: [2, 4, 6, 8, 10, 14, 15, 1, 3, 5, 7],
    mapQuery: "Kowdiar,+Thiruvananthapuram,+Kerala",
  },
  {
    id: "thrissur",
    slug: "thrissur",
    name: "Softmind Thrissur",
    shortName: "Thrissur",
    city: "Thrissur, Kerala",
    tagline:
      "Nestled in the cultural heart of Thrissur, our centre offers warm, discreet, and patient-centered psychological support for individuals, couples, and children facing emotional and behavioral challenges.",
    phone: "+91 90618 18732",
    email: "thrissur@softmind.in",
    address: "Father Vadakkan Road, Shakthan\nNagar, Thrissur",
    fullAddress: "1st Floor, Centre Square Annex, Father Vadakkan Road, Shakthan Nagar, Thrissur, Kerala 680001",
    hours: "Mon – Sat: 9:00 AM – 8:00 PM",
    thumbnail: "/assets/centre_thrissur.jpg",
    gallery: {
      main: "/assets/centre_thrissur.jpg",
      sub1: "/assets/therapy_session.jpg",
      sub2: "/assets/couple_session.png",
    },
    facilities: [
      "Individual therapy rooms",
      "Family counselling suites",
      "Child behavioral play zone",
      "Cognitive & neuro-psychological assessments",
      "Warm and welcoming reception lounge",
      "Sound-isolated quiet suites",
      "Convenient central city access & parking",
    ],
    clinicianIds: [1, 2, 4, 5, 8, 11, 13, 3, 6, 9, 10],
    mapQuery: "Shakthan+Nagar,+Thrissur,+Kerala",
  },
];

export function getCentreBySlug(slug: string): Centre | undefined {
  const normalized = slug.toLowerCase();
  if (normalized === "kochi") return centres.find((c) => c.id === "panampilly-nagar");
  return centres.find((c) => c.slug === normalized || c.id === normalized);
}

export function getAllCentres(): Centre[] {
  return centres;
}
