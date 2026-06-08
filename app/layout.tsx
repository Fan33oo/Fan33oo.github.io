import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://fan33oo.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dfan | Personal Homepage",
    template: "%s | Dfan"
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg?v=20260609",
        type: "image/svg+xml"
      }
    ],
    shortcut: ["/favicon.svg?v=20260609"]
  },
  description:
    "Dfan 的个人主页，记录技术笔记、工程实验和持续构建中的想法。",
  openGraph: {
    title: "Dfan | Personal Homepage",
    description:
      "Dfan 的个人主页，记录技术笔记、工程实验和持续构建中的想法。",
    url: siteUrl,
    siteName: "Dfan",
    images: [
      {
        url: "https://github.com/Fan33oo.png",
        width: 460,
        height: 460,
        alt: "Fan33oo GitHub avatar"
      }
    ],
    locale: "zh_CN",
    type: "website"
  }
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0b0d0f"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
