import type { ToolItem } from "@/lib/types";

export default function ToolCard({ tool }: { tool: ToolItem }) {
  return (
    <article className="rounded-2xl bg-white p-5 border shadow-sm space-y-2">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-semibold">{tool.name}</h3>
        <span className="text-xs px-2 py-1 rounded bg-slate-100 text-slate-600">
          {tool.category}
        </span>
      </div>
      <p className="text-sm text-slate-600">{tool.description}</p>
      <a
        href={tool.url}
        target="_blank"
        rel="noreferrer"
        className="text-sm text-indigo-600 hover:underline"
      >
        打开工具 →
      </a>
    </article>
  );
}