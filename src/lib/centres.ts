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
    name: "Softmind Panampilly Nagar, Kochi",
    shortName: "Panampilly Nagar",
    city: "Kochi, Kerala",
    tagline:
      "Our Panampilly Nagar centre is a quiet, private space for therapy, psychological assessment and psychiatric consultation.",
    phone: "+91 90618 18732",
    email: "info@softmindindia.com",
    address: "Panampilly Nagar Ave,\nErnakulam",
    fullAddress:
      "Second Floor, Kerala State Housing Board, G-23, Panampilly Nagar Avenue, Panampilly Nagar, Kochi, Ernakulam, Kerala 682036",
    hours: "Mon – Sat: 9:00 AM – 7:00 PM",
    thumbnail: "/assets/panampilly-nagar.webp",
    gallery: {
      main: "/assets/panampilly-nagar.webp",
      sub1: "/assets/therapy_session.jpg",
      sub2: "/assets/hero_therapy.jpg",
    },
    facilities: [
      "Individual therapy rooms",
      "Couple & family therapy rooms",
      "Child & adolescent therapy space",
      "Psychological assessment room",
      "Comfortable waiting lounge",
      "Safe, confidential & soundproof consultation suites",
    ],
    clinicianIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    mapQuery: "Panampilly+Nagar,+Kochi,+Kerala",
  },
  {
    id: "kakkanad",
    slug: "kakkanad",
    name: "Softmind Kakkanad, Kochi",
    shortName: "Kakkanad",
    city: "Kochi, Kerala",
    tagline:
      "Conveniently situated near InfoPark and CSEZ, our Kakkanad centre offers psychological assessment, therapy and psychiatric care for adults, couples and families.",
    phone: "+91 98460 60111",
    email: "info@softmindindia.com",
    address: "Seaport-Airport Rd, CSEZ,\nKochi",
    fullAddress:
      "Isac & Geetha's Image Centre, Seaport-Airport Road, CSEZ P.O., Kakkanad, Kochi, Kerala 682037",
    hours: "Mon – Sat: 9:00 AM – 7:00 PM",
    thumbnail: "/assets/kakkanad.webp",
    gallery: {
      main: "/assets/kakkanad.webp",
      sub1: "/assets/insight_1.jpg",
      sub2: "/assets/insight_2.jpg",
    },
    facilities: [
      "Individual therapy rooms",
      "Work-stress & corporate wellness support",
      "Couple & family therapy rooms",
      "Psychological assessment suites",
      "Confidential tele-therapy facility",
    ],
    clinicianIds: [1, 3, 5, 7, 9, 11, 12, 13, 2, 4],
    mapQuery: "Kakkanad,+Kochi,+Kerala",
  },
  {
    id: "thrissur",
    slug: "thrissur",
    name: "Softmind Thrissur",
    shortName: "Thrissur",
    city: "Thrissur, Kerala",
    tagline:
      "Our Thrissur centre offers therapy for adults, children and families, with psychiatric consultations arranged as needed.",
    phone: "+91 90618 18732",
    email: "care@softmindindia.com",
    address: "Father Vadakkan Road, Shakthan\nNagar, Thrissur",
    fullAddress:
      "Forms Villas, near Shakthan Manar Flat, Father Vadakkan Road (Mundupalam Road), Shakthan Thampuran Nagar, Veliyannur, Thrissur, Kerala 680001",
    hours: "Mon – Sat: 10:00 AM – 1:00 PM (Afternoons by prior booking)",
    thumbnail: "/assets/thrissur.webp",
    gallery: {
      main: "/assets/thrissur.webp",
      sub1: "/assets/therapy_session.jpg",
      sub2: "/assets/couple_session.png",
    },
    facilities: [
      "Individual therapy rooms",
      "Family counselling suites",
      "Child behavioral support",
      "Cognitive assessments",
      "Sound-isolated consultation rooms",
    ],
    clinicianIds: [1, 2, 4, 5, 8, 11, 13, 3, 6, 9],
    mapQuery: "Shakthan+Nagar,+Thrissur,+Kerala",
  },
  {
    id: "aroor",
    slug: "aroor",
    name: "Softmind Aroor",
    shortName: "Aroor",
    city: "Aroor, Alappuzha, Kerala",
    tagline:
      "Located inside Lakshmi Hospital, our Aroor centre serves families across Aroor and Alappuzha district with experienced psychologists and psychiatric support.",
    phone: "+91 77364 84813",
    email: "care@softmindindia.com",
    address: "Lakshmi Hospital, opposite Malayala Manorama,\nAroor",
    fullAddress:
      "Softmind Counselling Centre, Lakshmi Hospital, opposite Malayala Manorama, Aroor, Alappuzha, Kerala",
    hours: "Mon – Sun: 10:00 AM – 5:00 PM",
    thumbnail: "/assets/panampilly-nagar.webp",
    gallery: {
      main: "/assets/panampilly-nagar.webp",
      sub1: "/assets/therapy_session.jpg",
      sub2: "/assets/hero_therapy.jpg",
    },
    facilities: [
      "Individual therapy rooms",
      "Child and family support space",
      "Psychiatric consultation",
      "Hospital-supported clinical setting",
    ],
    clinicianIds: [1, 2, 4, 10, 15],
    mapQuery: "Aroor,+Alappuzha,+Kerala",
  },
  {
    id: "trivandrum",
    slug: "trivandrum",
    name: "Softmind Online Services (Thiruvananthapuram)",
    shortName: "Online (Trivandrum)",
    city: "Thiruvananthapuram, Kerala",
    tagline:
      "Secure online psychological care and psychiatric consultations in Malayalam and English for clients in Thiruvananthapuram and across Kerala.",
    phone: "+91 90618 18732",
    email: "info@softmindindia.com",
    address: "Online Consultations\nThiruvananthapuram",
    fullAddress: "Secure Tele-health services across Thiruvananthapuram, Kerala",
    hours: "Mon – Sat: 9:00 AM – 8:00 PM (By Appointment)",
    thumbnail: "/assets/trivandrum.webp",
    gallery: {
      main: "/assets/trivandrum.webp",
      sub1: "/assets/insight_3.jpg",
      sub2: "/assets/child_session.jpg",
    },
    facilities: [
      "High-definition encrypted video sessions",
      "Individual therapy & psychiatric consultation",
      "Malayalam & English consultations",
    ],
    clinicianIds: [1, 2, 3, 5, 8],
    mapQuery: "Thiruvananthapuram,+Kerala",
  },
];

export function getCentreBySlug(slug: string): Centre | undefined {
  const normalized = slug.toLowerCase().trim();
  if (normalized === "kochi") return centres.find((c) => c.id === "panampilly-nagar");
  return centres.find((c) => c.slug === normalized || c.id === normalized);
}

export function getAllCentres(): Centre[] {
  return centres.filter((c) => c.id !== "trivandrum");
}
