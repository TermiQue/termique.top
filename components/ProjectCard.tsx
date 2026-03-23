import type { ProjectItem } from "@/lib/types";

export default function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article className="rounded-2xl bg-white p-5 border shadow-sm space-y-3">
      <h3 className="text-lg font-semibold">{project.name}</h3>
      <p className="text-sm text-slate-600">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3 text-sm">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-indigo-600 hover:underline"
          >
            GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="text-emerald-600 hover:underline"
          >
            在线预览
          </a>
        )}
      </div>
    </article>
  );
}