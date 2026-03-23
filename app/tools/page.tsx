"use client";

import { useMemo, useState } from "react";
import tools from "@/data/tools.json";
import ToolCard from "@/components/ToolCard";
import type { ToolItem } from "@/lib/types";

export default function ToolsPage() {
  const list = tools as ToolItem[];
  const categories = useMemo(
    () => ["全部", ...Array.from(new Set(list.map((t) => t.category)))],
    [list]
  );
  const [active, setActive] = useState("全部");

  const filtered = useMemo(
    () => (active === "全部" ? list : list.filter((t) => t.category === active)),
    [active, list]
  );

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">工具</h1>
      <p className="text-slate-600 text-sm">我常用的效率工具与开发资源。</p>

      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`text-sm px-3 py-1.5 rounded-full border ${
              active === c
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-white hover:bg-slate-50"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map((tool) => (
          <ToolCard key={tool.name} tool={tool} />
        ))}
      </div>
    </section>
  );
}