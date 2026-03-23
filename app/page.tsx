import Link from "next/link";
import projects from "@/data/projects.json";
import { getAllPostsMeta } from "@/lib/posts";
import type { ProjectItem } from "@/lib/types";

export default function HomePage() {
  const posts = getAllPostsMeta().slice(0, 3);
  const featuredProjects = (projects as ProjectItem[])
    .filter((p) => p.featured)
    .slice(0, 3);

  return (
    <section className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">你好，我是 TermiQue 👋</h1>
        <p className="text-slate-600">
          这里记录学习、展示项目、沉淀工具，也欢迎朋友和 HR 浏览交流。
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="rounded-2xl bg-white p-5 shadow-sm border">
          <h2 className="font-semibold mb-2">精选项目</h2>
          <ul className="space-y-2 text-sm">
            {featuredProjects.map((p) => (
              <li key={p.name}>
                <Link href="/projects" className="hover:text-indigo-600">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm border">
          <h2 className="font-semibold mb-2">最新文章</h2>
          <ul className="space-y-2 text-sm">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/posts/${post.slug}`} className="hover:text-indigo-600">
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm border">
          <h2 className="font-semibold mb-2">常用工具</h2>
          <p className="text-sm text-slate-600">
            已整理开发与效率工具，点击导航中的「工具」查看。
          </p>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-5 shadow-sm border">
        <h2 className="font-semibold mb-4">时间线</h2>
        <ul className="space-y-3 text-sm text-slate-700">
          <li>2026 - 搭建个人综合网站（Next.js）</li>
          <li>2025 - 深入 FastAPI 并实践 API 服务开发</li>
          <li>2024 - 系统学习前端基础与工程化</li>
        </ul>
      </div>
    </section>
  );
}