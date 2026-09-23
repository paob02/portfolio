import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/case-study/ProjectCard";
import { CollapsibleSection } from "@/components/work/CollapsibleSection";
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
    <CollapsibleSection title={title}>
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
    </CollapsibleSection>
  );
}

export default function Work() {
  const caseStudies = getSortedCaseStudies();
  const uxUiDesign = caseStudies.filter((caseStudy) => caseStudy.category === "UX/UI design");
  const graphicDesign = caseStudies.filter((caseStudy) => caseStudy.category === "Graphic design");
  const videoEditing = caseStudies.filter((caseStudy) => caseStudy.category === "Video Editing");

  return (
    <Section spacing="default">
      <Container size="wide">
        <h1 className="text-h1 text-foreground">Work</h1>
        <CaseStudyGroup title="UX/UI design" caseStudies={uxUiDesign} />
        <CaseStudyGroup title="Graphic design" caseStudies={graphicDesign} />
        <CaseStudyGroup title="Video Editing" caseStudies={videoEditing} />
      </Container>
    </Section>
  );
}
