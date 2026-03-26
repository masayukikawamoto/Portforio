import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";
import FadeIn from "@/components/motion/fade-in";
import StaggerContainer, {
  StaggerItem,
} from "@/components/motion/stagger-container";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { caseStudy } = project;

  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <FadeIn>
        <Link
          href="/work"
          className="inline-flex items-center text-sm text-dark-muted hover:text-white transition-colors mb-8 group"
        >
          <span className="inline-block transition-transform group-hover:-translate-x-1">
            &larr;
          </span>
          <span className="ml-2">Work</span>
        </Link>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="relative overflow-hidden rounded-2xl h-56 sm:h-64 flex items-center justify-center mb-10">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "linear-gradient(135deg, var(--color-accent-from), var(--color-accent-to))",
            }}
          />
          <span className="relative z-10 text-4xl font-bold text-white/80">
            {project.title}
          </span>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <header className="mb-14">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-white mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-dark-muted mb-6 leading-relaxed">
            {project.summary}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-white/[0.06] px-3 py-1.5 text-sm text-dark-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>
      </FadeIn>

      <div className="space-y-14">
        <FadeIn>
          <CaseSection title="Context" content={caseStudy.context} />
        </FadeIn>
        <FadeIn>
          <CaseSection title="Problem" content={caseStudy.problem} />
        </FadeIn>
        <FadeIn>
          <CaseSection title="Role" content={caseStudy.role} />
        </FadeIn>

        <FadeIn>
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Actions</h2>
            <StaggerContainer className="space-y-3">
              {caseStudy.actions.map((action, i) => (
                <StaggerItem
                  key={i}
                  className="flex gap-3 text-dark-muted"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-from" />
                  <span>{action}</span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeIn>

        <FadeIn>
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Results</h2>
            <StaggerContainer className="space-y-3">
              {caseStudy.results.map((result, i) => (
                <StaggerItem
                  key={i}
                  className="flex gap-3 text-dark-muted"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                  <span>{result}</span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeIn>

        <FadeIn>
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {caseStudy.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-dark-border px-3 py-1.5 text-sm text-dark-muted hover:border-white/20 hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        {caseStudy.links && caseStudy.links.length > 0 && (
          <FadeIn>
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Links</h2>
              <div className="flex flex-wrap gap-4">
                {caseStudy.links.map(({ label, url }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-dark-border px-5 py-2.5 text-sm font-medium text-dark-muted hover:text-white hover:border-white/20 transition-colors glow-card"
                  >
                    {label}
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </div>
  );
}

function CaseSection({ title, content }: { title: string; content: string }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-white mb-3">{title}</h2>
      <p className="text-dark-muted leading-relaxed">{content}</p>
    </div>
  );
}
