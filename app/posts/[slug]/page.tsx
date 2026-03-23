import { getAllPostsMeta, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPostsMeta();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostDetailPage({ params }: Props) {
  const { slug } = await params;

  try {
    const post = await getPostBySlug(slug);

    return (
      <article className="max-w-3xl space-y-6">
        <header className="space-y-3">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <div className="text-sm text-slate-500 flex items-center gap-2">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.category}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag: string) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-700"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        <div
          className="prose prose-slate max-w-none"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    );
  } catch {
    notFound();
  }
}