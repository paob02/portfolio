import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";

export default function Work() {
  return (
    <div className="mx-auto max-w-3xl flex-1 px-6 py-24 sm:px-8">
      <h1 className="text-h1 text-foreground">Work</h1>
      <ul className="mt-10 flex flex-col gap-8">
        {caseStudies.map((caseStudy) => (
          <li key={caseStudy.slug}>
            <Link href={`/work/${caseStudy.slug}`} className="group block">
              <h2 className="text-h3 text-foreground group-hover:text-accent">
                {caseStudy.title}
              </h2>
              <p className="mt-1 text-body text-foreground-muted">
                {caseStudy.summary}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
