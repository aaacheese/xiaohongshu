import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "从 21 年到现在用过的防晒",
  description: "小红书笔记详情页与评论区高保真移动端演示",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
