import Card from "../../components/Cards";

export default function About() {
  return (
    <div className="relative isolate min-h-screen overflow-x-hidden ">
      {/* Glow layer */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {/* 右下红色 */}
        <div className="absolute left-[85%] top-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/30 blur-[90px] w-[72rem] h-[64rem]" />
        <div className="absolute left-[70%] top-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/40 blur-[90px] w-[64rem] h-[42rem]" />

        {/* 左上黄色 */}
        <div className="absolute left-[12%] top-[18%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300/30 blur-[90px] w-[72rem] h-[64rem]" />
        <div className="absolute left-[20%] top-[24%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300/40 blur-[90px] w-[64rem] h-[42rem]" />
      </div>

      {/* Content */}
      <main className="relative z-10 mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 md:py-10">
        <div className="my-16 md:my-24">
          <h1 className="text-6xl font-bold text-center mb-4">关于我们</h1>
          <p className="text-center text-gray-700 mb-8">
            江苏省青年志愿者服务大赛
          </p>
        </div>
        <div className="grid place-items-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 36 }).map((_, i) => (
            <Card key={i} title={`TITLE ${i + 1}`} description="CONTENT" />
          ))}
        </div>
      </main>
    </div>
  );
}