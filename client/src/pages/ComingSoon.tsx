/** 即將推出頁(真人占卜/商品共用) */
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";
import { toast } from "sonner";
import { SiteHeader, SiteFooter } from "@/components/SiteLayout";
import { StarField } from "@/components/StarField";
import { ASSETS } from "@/lib/assets";

export function LiveReading() {
  return (
    <ComingSoonPage
      img={ASSETS.monkCrystal}
      title="真人占卜"
      en="LIVE READING"
      desc="小僧正在四處參訪,尋找有緣的占卜師夥伴。之後施主將能在這裡預約真人一對一深度解牌——線上視訊或文字皆可。"
      note="想第一時間收到開放通知?"
    />
  );
}

export function Shop() {
  return (
    <ComingSoonPage
      img={ASSETS.monkShop}
      title="商品"
      en="SHOP"
      desc="小僧的化緣缽裡即將裝滿好東西:實體小僧塔羅牌卡、御守、貼紙與更多可愛周邊。目前正在窯裡燒製中,施主再等等。"
      note="想在上架時搶先知道?"
    />
  );
}

function ComingSoonPage({ img, title, en, desc, note }: { img: string; title: string; en: string; desc: string; note: string }) {
  return (
    <div className="night-sky relative min-h-screen">
      <SiteHeader />
      <StarField count={24} />
      <main className="container relative z-10 flex min-h-[80vh] flex-col items-center justify-center pb-28 pt-24 text-center md:pb-16">
        <img src={img} alt="" className="monk-float mb-6 w-44 drop-shadow-[0_12px_36px_oklch(0.78_0.13_75_/_28%)] sm:w-56" draggable={false} />
        <p className="mb-2 text-sm tracking-[0.3em] text-gold">{en}・COMING SOON</p>
        <h1 className="mb-4 font-brand text-4xl font-black sm:text-5xl">
          {title}<span className="text-gold-glow">,即將開山</span>
        </h1>
        <p className="mb-8 max-w-md leading-relaxed text-muted-foreground">{desc}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => toast.success("小僧記下了!開放時第一個通知你 🙏")}
            className="press-scale glow-pulse rounded-full bg-primary px-8 py-3 font-bold text-primary-foreground"
          >
            {note} 通知小僧
          </button>
          <Link
            href="/reading"
            className="press-scale inline-flex items-center gap-1 rounded-full border border-primary/50 px-6 py-3 text-gold hover:bg-primary/15"
          >
            <ChevronLeft className="h-4 w-4" /> 先去線上占卜
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
