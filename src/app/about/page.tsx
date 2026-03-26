import type { Metadata } from "next";
import FadeIn from "@/components/motion/fade-in";
import StaggerContainer, {
  StaggerItem,
} from "@/components/motion/stagger-container";

export const metadata: Metadata = {
  title: "About",
  description: "MASAのプロフィール。経歴・スキル・価値観について。",
};

const career = [
  {
    period: "2023 –",
    role: "フリーランス / フルスタック開発",
    description: "Webアプリケーションの設計・開発を中心に活動",
  },
  {
    period: "2021 – 2023",
    role: "Web開発エンジニア",
    description: "フロントエンド開発およびAPI設計を担当",
  },
] as const;

const skillCategories = [
  {
    name: "Languages",
    skills: ["TypeScript", "JavaScript", "Python"],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    name: "Backend",
    skills: ["Django", "Django REST Framework", "Node.js", "Express"],
  },
  {
    name: "Database & Infra",
    skills: ["PostgreSQL", "Redis", "Docker", "AWS", "Vercel"],
  },
] as const;

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <FadeIn>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tighter mb-4">
          <span className="gradient-text">About</span>
        </h1>
        <p className="text-lg text-dark-muted mb-16">
          MASA&mdash; Frontend / Full-stack Developer
        </p>
      </FadeIn>

      {/* Career Timeline */}
      <section className="mb-20">
        <FadeIn>
          <h2 className="text-xl font-semibold text-white mb-10">Career</h2>
        </FadeIn>
        <StaggerContainer className="relative ml-4">
          <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-accent-from via-accent-to to-transparent" />
          {career.map(({ period, role, description }) => (
            <StaggerItem key={period} className="relative pl-8 pb-10 last:pb-0">
              <div className="absolute left-0 top-1.5 -translate-x-1/2 h-3 w-3 rounded-full border-2 border-accent-from bg-dark-bg" />
              <div className="rounded-xl border border-dark-border bg-dark-card p-5 glow-card">
                <span className="text-xs font-medium text-accent-from tracking-wide uppercase">
                  {period}
                </span>
                <h3 className="font-semibold text-white mt-2">{role}</h3>
                <p className="text-sm text-dark-muted mt-1">{description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Skills */}
      <section className="mb-20">
        <FadeIn>
          <h2 className="text-xl font-semibold text-white mb-10">Skills</h2>
        </FadeIn>
        <StaggerContainer className="grid gap-4 sm:grid-cols-2">
          {skillCategories.map(({ name, skills }) => (
            <StaggerItem
              key={name}
              className="rounded-2xl border border-dark-border bg-dark-card p-5 glow-card"
            >
              <h3 className="text-xs font-semibold text-dark-muted uppercase tracking-wider mb-4">
                {name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-white/[0.06] px-3 py-1.5 text-sm text-dark-text hover:bg-white/[0.1] hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Values */}
      <section className="mb-16">
        <FadeIn>
          <h2 className="text-xl font-semibold text-white mb-6">Values</h2>
          <div className="space-y-4 text-dark-muted leading-relaxed">
            <p>
              技術選定では「チームが長期的に保守しやすいか」を最も重視します。
              新しい技術を採用する際も、移行コストとメリットを定量的に比較検討するようにしています。
            </p>
            <p>
              公式ドキュメントとソースコードを第一の情報源とし、
              不明点は実際にコードを書いて検証するスタイルで学習を進めています。
            </p>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
