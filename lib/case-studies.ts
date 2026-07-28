export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  /** Longer body copy shown on the case study page, between the summary and the prototype embed. */
  details: string;
  role: string;
  year: string;
  tags: string[];
  coverImage: string;
  coverImageAlt: string;
  featured: boolean;
  /** Optional — a figma.com share URL, rendered as an interactive embed on the case study page. */
  figmaEmbedUrl?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "HCI-project",
    title: "Human Computer Interaction Project",
    summary: "This was a group project for the course Human Computer Interaction at Chalmers University of Technology.",
    details: "Write more about the project here",
    role: "Software Engineer Student",
    year: "2023",
    tags: ["Research", "UI Design"],
    coverImage: "/images/case-studies/HCI-project/cover.jpg",
    coverImageAlt: "",
    featured: true,
    figmaEmbedUrl:
      "https://www.figma.com/proto/AHZudzP5BvFu7O070Bpnj3/Human-computer-interaction?node-id=0-1&t=VEybAodxQdnncHZT-1",
  },
  {
    slug: "multiplay",
    title: "MultiPlay",
    summary: "This was a group project for the course Interaction Design Methodologies at Chalmers University of Technology.",
    details: "Write more about the project here",
    role: "Software Engineer Student",
    year: "2024",
    tags: ["UX Design", "UI Design"],
    coverImage: "/images/case-studies/multiplay/cover.jpg",
    coverImageAlt: "",
    featured: false,
    figmaEmbedUrl:
      "https://www.figma.com/proto/oWir1rGhjblCkqGwscodtC/MultiPlay?node-id=0-1&t=MiOV0kZRa3twXCSs-1",
  },
  {
    slug: "booking-system",
    title: "Booking System",
    summary: "This was an individual examination for the course Graphical Interfaces at Chalmers University of Technology.",
    details: "Write more about the project here",
    role: "Software Engineer Student",
    year: "2024",
    tags: ["UX Design", "UI Design"],
    coverImage: "/images/case-studies/booking-system/cover.jpg",
    coverImageAlt: "",
    featured: false,
    figmaEmbedUrl:
      "https://www.figma.com/proto/CrbQ1o6xFYKqWnfv8uiW1v/Booking-system?node-id=0-1&t=wapc3Sp8VCHrfmgl-1",
  },
  {
    slug: "workbook",
    title: "Agumented Reality for Online Shopping",
    summary: "This is a workbook for an individual project for the course Emerging Trends and Critical Topics in Interaction Design at Chalmers University of Technology.",
    details: "Write more about the project here",
    role: "Software Engineer Student",
    year: "2025",
    tags: ["UX Design"],
    coverImage: "/images/case-studies/workbook/cover.jpg",
    coverImageAlt: "",
    featured: false,
    figmaEmbedUrl:
      "https://www.figma.com/proto/0EdxaUa0qydW8sqnjeelCN/Workbook?node-id=0-1&t=KGPVtvqouD2KZqQR-1",
  },
  {
    slug: "imat-skiss",
    title: "Food Store Website Project",
    summary: "This was a group project for the course Design and Construction of Grafical Interfaces at Chalmers University of Technology.",
    details: "Write more about the project here",
    role: "Software Engineer Student",
    year: "2023",
    tags: ["UX Design", "UI Design"],
    coverImage: "/images/case-studies/imat-skiss/cover.jpg",
    coverImageAlt: "",
    featured: false,
    figmaEmbedUrl:
      "https://www.figma.com/proto/Wyq3egIP1iEMa3dGDrAY65/iMat-Skiss?node-id=0-1&t=RwG8SIjo3IyXRmms-1",
  },
  {
    slug: "presentation",
    title: "The Offline Troll",
    summary: "This was an individual project for the course Concept Driven Interaction Design at Chalmers University of Technology.",
    details: "Write more about the project here",
    role: "Software Engineer Student",
    year: "2025",
    tags: ["UX Design"],
    coverImage: "/images/case-studies/presentation/cover.jpg",
    coverImageAlt: "",
    featured: false,
    figmaEmbedUrl: "https://www.figma.com/deck/EpMCsSqzruLbqKfwFQkmXB",
  },
  {
    slug: "masterthesis",
    title: "Master's Thesis",
    summary: "This is my Master's Thesis at Chalmers University of Technology.",
    details: "Write more about the project here",
    role: "Software Engineer Student",
    year: "2026",
    tags: ["Tangible Interaction", "UX Design", "UI Design"],
    coverImage: "/images/case-studies/masterthesis/cover.jpg",
    coverImageAlt: "",
    featured: false,
    figmaEmbedUrl: "https://www.figma.com/proto/HL6Jk7IUy8VUMOzrySopNb/Karta?node-id=0-1&t=YAPF55GVUeYXxXrI-1",
  },
];

function byYearDescending(a: CaseStudy, b: CaseStudy) {
  return Number(b.year) - Number(a.year);
}

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

/** All case studies, newest year first. */
export function getSortedCaseStudies() {
  return [...caseStudies].sort(byYearDescending);
}

export function getFeaturedCaseStudies() {
  return caseStudies.filter((caseStudy) => caseStudy.featured).sort(byYearDescending);
}
