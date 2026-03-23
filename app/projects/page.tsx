import projects from "@/data/projects.json";
import ProjectCard from "@/components/ProjectCard";
import type { ProjectItem } from "@/lib/types";

export default function ProjectsPage() {
  const list = projects as ProjectItem[];

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">项目</h1>
      <p className="text-slate-600 text-sm">展示我做过的项目与实践。</p>

      <div className="grid md:grid-cols-2 gap-4">
        {list.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}