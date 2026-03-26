import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/project-card";
import FadeIn from "@/components/motion/fade-in";
import StaggerContainer, {
  StaggerItem,
} from "@/components/motion/stagger-container";

export const metadata: Metadata = {
  title: "Work",
  description:
    "これまでに手がけたプロジェクトの一覧。各プロジェクトの背景・技術選定・成果をケーススタディとして紹介します。",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tighter mb-4">
          <span className="gradient-text">Work</span>
        </h1>
        <p className="text-dark-muted max-w-2xl mb-12 leading-relaxed">
          各プロジェクトの背景・課題・技術選定・成果をケーススタディとして紹介します。
        </p>
      </FadeIn>
      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <StaggerItem key={project.slug}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
