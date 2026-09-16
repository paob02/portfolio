import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/case-study/ProjectCard";
import { getSortedCaseStudies } from "@/lib/case-studies";

function CaseStudyGroup({
  title,
  caseStudies,
}: {
  title: string;
  caseStudies: ReturnType<typeof getSortedCaseStudies>;
}) {
  if (caseStudies.length === 0) {
    return null;
  }

  return (
    <div className="mt-12 first:mt-10">
      <h2 className="text-h3 text-foreground">{title}</h2>
      <div className="mt-6 flex flex-col gap-8">
        {caseStudies.map((caseStudy) => (
          <ProjectCard
            key={caseStudy.slug}
            showImage={false}
            href={`/work/${caseStudy.slug}`}
            title={caseStudy.title}
            summary={caseStudy.summary}
            coverImage={caseStudy.coverImage}
            coverImageAlt={caseStudy.coverImageAlt}
            role={caseStudy.role}
            year={caseStudy.year}
            tags={caseStudy.tags}
          />
        ))}
      </div>
    </div>
  );
}

export default function Work() {
  const caseStudies = getSortedCaseStudies();
  const graphicDesign = caseStudies.filter((caseStudy) => caseStudy.category === "Graphic design");
  const uxUiDesign = caseStudies.filter((caseStudy) => caseStudy.category === "UX/UI design");

  return (
    <Section spacing="default">
      <Container size="wide">
        <h1 className="text-h1 text-foreground">Work</h1>
        <CaseStudyGroup title="Graphic design" caseStudies={graphicDesign} />
        <CaseStudyGroup title="UX/UI design" caseStudies={uxUiDesign} />
      </Container>
    </Section>
  );
}
