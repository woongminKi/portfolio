import type { Metadata } from "next";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMono.woff2",
  variable: "--font-geist-mono",
  display: "swap",
  weight: "100 900",
});

const title = "기웅민 | AI Engineer";
const description = "마케터 → PM → 풀스택 → AI. 제품을 만들 줄 아는 AI 엔지니어.";

export const metadata: Metadata = {
  metadataBase: new URL("https://woongmin.dev"),
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "기웅민 포트폴리오",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={cn(pretendard.variable, geistMono.variable, "pt-14")}>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
