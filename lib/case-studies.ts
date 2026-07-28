export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  year: string;
  tags: string[];
  coverImage: string;
  coverImageAlt: string;
  featured: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "example-project",
    title: "Example Project",
    summary: "A one-line summary of the problem, approach, and outcome.",
    role: "UX/UI Designer",
    year: "2026",
    tags: ["Research", "UI Design"],
    coverImage: "/images/case-studies/example-project/cover.jpg",
    coverImageAlt: "",
    featured: true,
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

export function getFeaturedCaseStudies() {
  return caseStudies.filter((caseStudy) => caseStudy.featured);
}
