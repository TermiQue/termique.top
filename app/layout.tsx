import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className="bg-slate-50 text-slate-800 min-h-screen flex flex-col">
        <Navbar />
        <main className="max-w-5xl mx-auto px-4 py-8 w-full flex-1">{children}</main>

        <footer className="border-t bg-white">
          <div className="max-w-5xl mx-auto px-4 py-4 text-sm text-slate-500 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <span>© {new Date().getFullYear()} TermiQue</span>
            <a
              href="http://beian.miit.gov.cn/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-600"
            >
              京ICP备2026015392号
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}