import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCarousel } from "@/components/case-study/ProjectCarousel";
import { getSortedCaseStudies } from "@/lib/case-studies";
import { skillGroups } from "@/lib/skills";

export default function Home() {
  const caseStudies = getSortedCaseStudies();

  return (
    <>
      {/* Hero — the page's one <h1>, kept to a headline. Supporting copy and
          calls to action live in the introduction section right below it,
          so the hero itself stays a single, uncluttered visual beat. */}
      <Section spacing="default">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">
            UX/UI Designer
          </p>
          <h1 className="mt-4 max-w-3xl text-display text-foreground">
            Welcome to my portfolio!
          </h1>
        </Container>
      </Section>

      {/* Short introduction */}
      <Section spacing="compact">
        <Container>
          <p className="max-w-2xl text-body-lg text-foreground-muted">
            Hi, I&apos;m Pauline Björk — an ambitious individual known for my creativity
            and positive attitude. I am a team player and a good listener who absorbs both
            theoretical and practical information effectively. I embrace learning as an exciting
            opportunity for growth and continuously strive to enhance my skills and contributions.
             My curiosity to develop new and improved solutions is strong and in the face of
             challenges, I maintain my positive attitude, approaching difficulties with resilience
             and a proactive mindset. I take pride in consistently putting forth my best effort,
             committed to achieving optimal results and delivering high-quality work.

          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/work">View my work</Button>
            <Button href="/contact" variant="secondary">
              Get in touch
            </Button>
          </div>
        </Container>
      </Section>

      {/* Featured projects */}
      <Section tone="surface" spacing="default">
        <Container size="wide">
          <SectionHeading
            eyebrow="Featured Work"
            title="My previous work"
            description="A few project that show what I have done previously."
          />
          <div className="mx-auto mt-12 max-w-2xl">
            <ProjectCarousel caseStudies={caseStudies} />
          </div>
          <div className="mt-8 flex justify-center">
            <Button href="/work" variant="ghost">
              View all work
            </Button>
          </div>
        </Container>
      </Section>

      {/* Skills */}
      <Section spacing="default">
        <Container>
          <SectionHeading eyebrow="Skills" title="What I bring to a project" />
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-h3 text-foreground">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
