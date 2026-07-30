import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/case-study/ProjectCard";
import { getSortedCaseStudies } from "@/lib/case-studies";

export default function Work() {
  const caseStudies = getSortedCaseStudies();

  return (
    <Section spacing="default">
      <Container size="wide">
        <h1 className="text-h1 text-foreground">Work</h1>
        <div className="mt-10 flex flex-col gap-8">
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
      </Container>
    </Section>
  );
}
