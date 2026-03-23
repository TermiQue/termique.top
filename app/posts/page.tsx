import Link from "next/link";
import { getAllPostsMeta } from "@/lib/posts";

export default function PostsPage() {
  const posts = getAllPostsMeta();

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">文章</h1>

      <div className="grid gap-4">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-2xl bg-white p-5 border shadow-sm space-y-3"
          >
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>{post.date}</span>
              <span>·</span>
              <span className="px-2 py-0.5 bg-slate-100 rounded">{post.category}</span>
            </div>

            <h2 className="text-lg font-semibold">
              <Link href={`/posts/${post.slug}`} className="hover:text-indigo-600">
                {post.title}
              </Link>
            </h2>

            <p className="text-sm text-slate-600">{post.summary}</p>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-700"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}