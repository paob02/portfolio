import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BackLink } from "@/components/ui/BackLink";
import { Button } from "@/components/ui/Button";
import { FigmaEmbed } from "@/components/case-study/FigmaEmbed";
import { ImageGallery } from "@/components/case-study/ImageGallery";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <Section spacing="default">
      <Container size="wide">
        <p className="text-label">
          {caseStudy.role} · {caseStudy.year}
        </p>
        <div className="mt-2 flex items-center gap-4">
          <BackLink href="/work" label="Back to work" />
          <h1 className="text-h1 text-foreground">{caseStudy.title}</h1>
        </div>
        <p className="mt-4 max-w-2xl text-body-lg text-foreground-muted">
          {caseStudy.summary}
        </p>
        <p className="mt-6 max-w-2xl text-body text-foreground-muted">
          {caseStudy.details}
        </p>

        {caseStudy.pdfUrl && (
          <div className="mt-8">
            <Button href={caseStudy.pdfUrl} variant="secondary" target="_blank" rel="noopener noreferrer">
              {caseStudy.pdfLabel ?? "Open PDF"}
            </Button>
          </div>
        )}

        {caseStudy.galleryImages && caseStudy.galleryImages.length > 0 && (
          <div className="mt-12">
            <ImageGallery images={caseStudy.galleryImages} />
          </div>
        )}

        {caseStudy.figmaEmbedUrl && (
          <div className="mt-12">
            <h2 className="text-h3 text-foreground">Interactive prototype</h2>
            <FigmaEmbed
              url={caseStudy.figmaEmbedUrl}
              title={`${caseStudy.title} — Figma prototype`}
              className="mt-4"
            />
          </div>
        )}
      </Container>
    </Section>
  );
}
