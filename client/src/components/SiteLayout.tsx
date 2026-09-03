/** 全站頁首/頁尾(夜間寺院:半透明夜空 header + 金色識別) */
import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ASSETS } from "@/lib/assets";

const NAV = [
  { href: "/", label: "首頁" },
  { href: "/reading", label: "線上占卜" },
  { href: "/cards", label: "牌意圖鑑" },
  { href: "/live", label: "真人占卜" },
  { href: "/shop", label: "商品" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[oklch(0.18_0.03_278_/_88%)] backdrop-blur-xl shadow-[0_4px_24px_oklch(0_0_0_/_30%)]" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <img src={ASSETS.logo} alt="小僧塔羅 logo" className="h-10 w-10" />
          <span className="font-brand text-xl font-black tracking-wide">
            小僧<span className="text-gold">塔羅</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`press-scale rounded-full px-4 py-2 text-sm transition-colors ${
                location === item.href
                  ? "bg-primary/15 text-gold font-medium"
                  : "text-foreground/80 hover:text-gold hover:bg-primary/10"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        {/* 手機選單:精簡為主要 CTA */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/reading"
            className="press-scale rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground"
          >
            開始占卜
          </Link>
        </div>
      </div>
      {/* 手機底部導航 */}
      <MobileNav location={location} />
    </header>
  );
}

function MobileNav({ location }: { location: string }) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 flex justify-around border-t border-primary/20 bg-[oklch(0.18_0.03_278_/_94%)] py-2 backdrop-blur-xl md:hidden">
      {NAV.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`press-scale rounded-lg px-2 py-1 text-xs ${
            location === item.href ? "text-gold font-semibold" : "text-foreground/70"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative border-t border-primary/15 bg-[oklch(0.16_0.025_280)] pb-20 pt-10 md:pb-10">
      <div className="container flex flex-col items-center gap-4 text-center">
        <img src={ASSETS.logo} alt="" className="h-12 w-12 opacity-90" />
        <p className="font-brand text-lg font-bold">
          小僧<span className="text-gold">塔羅</span>
        </p>
        <p className="max-w-md text-sm text-muted-foreground">
          塔羅是一面鏡子,照見的是你心裡早已知道的答案。<br />
          小僧只是陪你,把它輕輕唸出來。
        </p>
        <button
          type="button"
          onClick={() => toast("小僧正在準備社群帳號,敬請期待 🙏")}
          className="text-xs text-muted-foreground/70 underline-offset-4 hover:text-gold hover:underline"
        >
          追蹤小僧的日常
        </button>
        <p className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} 小僧塔羅 XiaoSeng Tarot・僅供娛樂與自我探索,重大決定請諮詢專業人士
        </p>
      </div>
    </footer>
  );
}

