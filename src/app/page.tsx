import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/project-card";
import FadeIn from "@/components/motion/fade-in";
import StaggerContainer, {
  StaggerItem,
} from "@/components/motion/stagger-container";

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    span: "sm:col-span-2",
  },
  {
    category: "Backend",
    items: ["Django", "Node.js", "Express", "REST API"],
    span: "",
  },
  {
    category: "Infrastructure",
    items: ["Docker", "AWS", "Vercel", "PostgreSQL"],
    span: "",
  },
] as const;

const contacts = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
  { label: "Email", href: "mailto:your@email.com" },
] as const;

export default function Home() {
  const selectedWork = projects.slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* Hero */}
      <section className="relative py-28 sm:py-36 lg:py-44 overflow-hidden">
        <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent-from/20 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-32 h-[400px] w-[400px] rounded-full bg-accent-to/15 blur-[120px]" />

        <FadeIn delay={0}>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-emerald-400">
              Available for work
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-6">
            <span className="gradient-text">MASA</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-sm font-medium text-accent-from mb-6 tracking-wide uppercase">
            Frontend / Full-stack Developer
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-lg sm:text-xl text-dark-muted max-w-2xl mb-10 leading-relaxed">
            ユーザー体験を起点に、パフォーマンスと保守性を両立したWeb開発を行っています。
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex gap-4">
            <Link
              href="/work"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-accent-from to-accent-to px-6 py-3 text-sm font-medium text-white transition-shadow hover:shadow-lg hover:shadow-accent-from/25"
            >
              作品を見る
            </Link>
            <a
              href="mailto:your@email.com"
              className="inline-flex items-center rounded-full border border-dark-border px-6 py-3 text-sm font-medium text-dark-muted hover:text-white hover:border-white/20 transition-colors"
            >
              連絡する
            </a>
          </div>
        </FadeIn>
      </section>

      {/* Selected Work - Bento Grid */}
      <section className="pb-28">
        <FadeIn>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-white">Selected Work</h2>
            <Link
              href="/work"
              className="text-sm font-medium text-dark-muted hover:text-white transition-colors group"
            >
              すべて見る{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
        </FadeIn>
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {selectedWork.map((project, i) => (
            <StaggerItem
              key={project.slug}
              className={i === 0 ? "sm:col-span-2 lg:col-span-2" : ""}
            >
              <ProjectCard project={project} featured={i === 0} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Skills - Bento */}
      <section className="pb-28">
        <FadeIn>
          <h2 className="text-2xl font-bold text-white mb-10">
            Skills &amp; Focus
          </h2>
        </FadeIn>
        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ category, items, span }) => (
            <StaggerItem
              key={category}
              className={`rounded-2xl border border-dark-border bg-dark-card p-6 glow-card ${span ? "lg:col-span-2" : ""}`}
            >
              <h3 className="text-sm font-semibold text-dark-muted uppercase tracking-wider mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-white/[0.06] px-3 py-1.5 text-sm text-dark-text transition-colors hover:bg-white/[0.1] hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <FadeIn>
          <p className="mt-8 text-dark-muted max-w-2xl leading-relaxed">
            Webフロントエンドを中心に、API設計からインフラ構築まで一貫して対応できることを強みとしています。
            パフォーマンス最適化とアクセシビリティを常に意識した開発を心がけています。
          </p>
        </FadeIn>
      </section>

      {/* About */}
      <section className="pb-28">
        <FadeIn>
          <h2 className="text-2xl font-bold text-white mb-6">About</h2>
          <p className="text-dark-muted max-w-2xl mb-6 leading-relaxed">
            Web技術を軸に、フロントエンドからバックエンドまで幅広く開発を行うエンジニアです。
            ユーザーにとって本当に使いやすいプロダクトを作ることに情熱を持っています。
          </p>
          <Link
            href="/about"
            className="text-sm font-medium text-accent-from hover:text-accent-to transition-colors group"
          >
            詳しく見る{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </FadeIn>
      </section>

      {/* Contact */}
      <section className="pb-28">
        <FadeIn>
          <h2 className="text-2xl font-bold text-white mb-6">Contact</h2>
          <p className="text-dark-muted mb-8">
            お仕事のご相談やお問い合わせはお気軽にどうぞ。
          </p>
        </FadeIn>
        <StaggerContainer className="flex flex-wrap gap-4">
          {contacts.map(({ label, href }) => (
            <StaggerItem key={label}>
              <a
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  href.startsWith("mailto") ? undefined : "noopener noreferrer"
                }
                className="inline-flex items-center rounded-full border border-dark-border px-6 py-3 text-sm font-medium text-dark-muted hover:text-white hover:border-white/20 transition-colors glow-card"
              >
                {label}
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </div>
  );
}
