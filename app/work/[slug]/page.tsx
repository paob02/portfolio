import { notFound } from "next/navigation";
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
    <div className="mx-auto max-w-3xl flex-1 px-6 py-24 sm:px-8">
      <p className="text-label">
        {caseStudy.role} · {caseStudy.year}
      </p>
      <h1 className="mt-2 text-h1 text-foreground">{caseStudy.title}</h1>
      <p className="mt-4 max-w-xl text-body-lg text-foreground-muted">
        {caseStudy.summary}
      </p>
    </div>
  );
}
