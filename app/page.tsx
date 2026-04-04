import Link from "next/link";
import projects from "@/data/projects.json";
import { getAllPostsMeta } from "@/lib/posts";
import type { ProjectItem } from "@/lib/types";

export default function HomePage() {
  const posts = getAllPostsMeta().slice(0, 2); // 取前两篇
  const featuredProjects = (projects as ProjectItem[])
    .filter((p) => p.featured)
    .slice(0, 2);

  // 玻璃态卡片的公共样式
  const glassCard = "bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-6 transition-all hover:bg-white/50 flex flex-col";

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[160px]">
      
      {/* 1. 左侧导航卡片 (跨2行) */}
      <div className={`${glassCard} row-span-2 col-span-1`}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-400 to-indigo-500 shadow-inner"></div>
          <span className="font-bold text-lg text-indigo-950">TermiQue</span>
        </div>
        <p className="text-xs text-slate-500 font-semibold tracking-wider mb-3">GENERAL</p>
        <ul className="space-y-2 flex-1">
          {['最新文章', '我的项目', '常用工具', '关于网站'].map((item, i) => (
            <li key={item}>
              <Link href={['/posts', '/projects', '/tools', '/about'][i]} className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/60 text-slate-700 transition">
                <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 2. 中间主问候语 (跨2行2列) */}
      <div className={`${glassCard} row-span-2 col-span-1 md:col-span-2 flex items-center justify-center text-center relative overflow-hidden group`}>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-200/20 to-indigo-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="z-10 space-y-4">
          <div className="w-24 h-24 mx-auto rounded-full bg-white/60 p-1 shadow-lg">
            {/* 这里以后可以换成你的头像 <img> */}
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-orange-300 to-indigo-400"></div>
          </div>
          <h1 className="text-2xl font-medium text-slate-600">Good Afternoon</h1>
          <p className="text-3xl font-bold text-indigo-950">
            I'm <span className="text-orange-500">TermiQue</span> , Nice to meet you!
          </p>
        </div>
      </div>

      {/* 3. 右上角：时间/时钟概念卡 (跨1行) */}
      <div className={`${glassCard} col-span-1 flex items-center justify-center`}>
        <div className="text-5xl font-mono font-bold text-indigo-900/80 tracking-widest">
          {/* 这里可以后续写个 useEffect 实时时钟，先写死占位 */}
          16:36
        </div>
      </div>

      {/* 4. 右侧日历/推荐占位 (跨2行) */}
      <div className={`${glassCard} row-span-2 col-span-1 bg-gradient-to-b from-white/40 to-indigo-50/40`}>
        <h3 className="font-semibold text-indigo-900 mb-4">时间线 & 动态</h3>
        <ul className="space-y-4 text-sm text-slate-600">
          <li className="flex gap-3">
            <span className="text-orange-500 font-bold">2026</span>
            <span>搭建基于 Next.js 的全新个人数字花园</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-500 font-bold">2025</span>
            <span>深入 FastAPI 并实践 API 服务开发</span>
          </li>
        </ul>
      </div>

      {/* 5. 左下：最新文章 */}
      <div className={`${glassCard} col-span-1 md:col-span-1`}>
        <h3 className="text-xs font-semibold text-slate-500 mb-3">最新文章</h3>
        <div className="space-y-3">
          {posts.map(post => (
            <Link key={post.slug} href={`/posts/${post.slug}`} className="block group">
              <h4 className="text-sm font-semibold text-indigo-900 group-hover:text-orange-500 truncate">{post.title}</h4>
              <p className="text-xs text-slate-500">{post.date}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* 6. 中下：社交链接/外部平台 */}
      <div className={`${glassCard} col-span-1 md:col-span-2 flex flex-row items-center justify-center gap-4`}>
        <a href="https://github.com" target="_blank" className="flex-1 max-w-[140px] py-3 bg-indigo-950 text-white rounded-2xl flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-lg">
          <span className="font-bold">GitHub</span>
        </a>
        <a href="#" className="flex-1 max-w-[140px] py-3 bg-orange-50 text-orange-600 font-bold rounded-2xl flex items-center justify-center gap-2 hover:scale-105 transition-transform">
          Bilibili
        </a>
        <a href="#" className="flex-1 max-w-[140px] py-3 bg-red-50 text-red-500 font-bold rounded-2xl flex items-center justify-center gap-2 hover:scale-105 transition-transform">
          小红书
        </a>
      </div>

    </div>
  );
}