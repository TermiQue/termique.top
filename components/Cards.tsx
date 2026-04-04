export default function Card({
  title,
  description,
}: Readonly<{ title: string; description: string }>) {
  return (
    <article
      className="
        group relative w-full max-w-md min-h-[220px]
        rounded-2xl border border-white/50
        bg-white/70 backdrop-blur-md
        p-6
        shadow-[0_8px_30px_rgba(0,0,0,0.08)]
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:scale-[1.01]
        hover:shadow-[0_16px_40px_rgba(0,0,0,0.14)]
      "
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/40" />

      <h2 className="mb-2 text-xl font-semibold text-slate-800 transition-colors duration-300 group-hover:text-slate-900">
        {title}
      </h2>

      <p
        className="leading-relaxed text-slate-600"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </article>
  );
}