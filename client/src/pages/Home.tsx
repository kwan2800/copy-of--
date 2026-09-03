/**
 * 首頁 — 夜間寺院「參道」卷軸:山門(hero)→ 特色 → 牌陣預覽 → 未來服務
 * 風格:深墨藍星空 × 燭火金 × 米紙,小僧穿插引導
 */
import { Link } from "wouter";
import { Sparkles, Moon, Heart, ChevronRight, Sun, Sunset, Coffee, Stars } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/SiteLayout";
import { StarField } from "@/components/StarField";
import { MonkGuide } from "@/components/MonkGuide";
import { CardFront } from "@/components/CardArt";
import { MAJOR_ARCANA, SPREADS } from "@/lib/tarotData";
import { ASSETS } from "@/lib/assets";

/* ---------- 根據裝置本地時間決定問候語 ---------- */
type TimeSlot = "morning" | "afternoon" | "evening" | "night";

function getTimeSlot(): TimeSlot {
  const h = new Date().getHours();
  if (h >= 6 && h < 12) return "morning";
  if (h >= 12 && h < 18) return "afternoon";
  if (h >= 18 && h < 21) return "evening";
  return "night";
}

const GREETINGS: Record<
  TimeSlot,
  { badge: string; icon: React.ReactNode; tagline: string; body: string }
> = {
  morning: {
    badge: "晨光初現,正是問牌的好時辰",
    icon: <Sun className="h-4 w-4" />,
    tagline: "施主,早安。",
    body: "晨鐘剛響,小僧掃完地,正好替你抽一張牌,看看今日的風向。",
  },
  afternoon: {
    badge: "日正當中,讓牌指一條路",
    icon: <Coffee className="h-4 w-4" />,
    tagline: "施主,午安。",
    body: "日頭高掛,小僧喝完茶,替你抽一張牌,看看宇宙此刻想說什麼。",
  },
  evening: {
    badge: "暮色將至,正是靜心問牌的時刻",
    icon: <Sunset className="h-4 w-4" />,
    tagline: "施主,傍晚好。",
    body: "夕陽西下,燭火剛點上。讓小僧為你抽一張牌,看看今晚的指引。",
  },
  night: {
    badge: "夜深了,正是問牌的好時辰",
    icon: <Moon className="h-4 w-4" />,
    tagline: "施主,夜深了。",
    body: "夜深了,萬籟俱寂。讓小僧為你抽一張牌,看看宇宙想對你說什麼。",
  },
};

export default function Home() {

  return (
    <div className="night-sky relative min-h-screen">
      <SiteHeader />
      <main className="relative pb-24 md:pb-0">
        <Hero />
        <IntroSection />
        <SpreadsSection />
        <CardsPreview />
        <ComingSoonSection />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  const slot = getTimeSlot();
  const g = GREETINGS[slot];
  return (
    <section className="relative overflow-hidden">
      {/* 夜間寺院背景圖 */}
      <div className="absolute inset-0">
        <img src={ASSETS.heroTemple} alt="" className="h-full w-full object-cover object-bottom" draggable={false} />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.18_0.03_278_/_55%)] via-transparent to-[oklch(0.21_0.03_275)]" />
      </div>
      <StarField count={20} />
      <div className="container relative z-10 flex min-h-[92vh] flex-col justify-center pt-20">
        <div className="grid items-center gap-8 md:grid-cols-[1.2fr_1fr]">
          <div className="fade-up max-w-xl">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-[oklch(0.18_0.03_278_/_70%)] px-4 py-1.5 text-sm text-gold backdrop-blur">
              {g.icon} {g.badge}
            </p>
            <h1 className="mb-5 font-brand text-[clamp(2.6rem,8vw,4.6rem)] font-black leading-tight drop-shadow-[0_2px_12px_oklch(0_0_0_/_60%)]">
              小僧<span className="text-gold-glow">塔羅</span>
            </h1>
            <p className="mb-8 max-w-md text-base leading-relaxed text-foreground/90 drop-shadow-[0_1px_8px_oklch(0_0_0_/_70%)] sm:text-lg">
              {g.tagline}
              <br className="hidden sm:block" />
              {g.body}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/reading"
                className="press-scale glow-pulse inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-bold text-primary-foreground shadow-lg"
              >
                靜心,抽牌 🙏
              </Link>
              <Link
                href="/cards"
                className="press-scale inline-flex items-center gap-1 rounded-full border border-primary/50 bg-[oklch(0.18_0.03_278_/_60%)] px-6 py-3.5 text-base text-gold backdrop-blur hover:bg-primary/15"
              >
                認識 78 張牌 <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          {/* 歡迎小僧 */}
          <div className="fade-up hidden justify-center md:flex" style={{ animationDelay: "200ms" }}>
            <img
              src={ASSETS.monkWelcome}
              alt="小僧歡迎你"
              className="monk-float w-64 drop-shadow-[0_16px_40px_oklch(0.78_0.13_75_/_30%)] lg:w-80"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function IntroSection() {
  const features = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "全套 78 張塔羅牌",
      desc: "22 張大阿爾克那加上 56 張小阿爾克那,每張都有小僧視角的溫暖詮釋,正逆位完整解讀,不嚇人、只指路。",
    },
    {
      icon: <Moon className="h-6 w-6" />,
      title: "儀式感翻牌體驗",
      desc: "靜心、洗牌、翻牌、解讀。像走進深夜的寺院,一步一步,不急不徐。",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "小僧全程陪伴",
      desc: "從選牌陣到解牌,小僧都在你身邊碎碎念(是溫柔的那種)。",
    },
  ];
  return (
    <section className="relative py-20">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl">
          <MonkGuide image={ASSETS.monkGuide}>
            <p>
              小僧法號「小僧」,白天掃地誦經,晚上替有緣的施主看牌。
              <strong>塔羅不是算命,是一盞照心的燈</strong>——燈亮了,路就看見了。
            </p>
          </MonkGuide>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="fade-up rounded-2xl border border-primary/20 bg-card/60 p-6 backdrop-blur transition-colors hover:border-primary/50"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="mb-4 inline-flex rounded-xl bg-primary/15 p-3 text-gold">{f.icon}</div>
              <h3 className="mb-2 font-brand text-lg font-bold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpreadsSection() {
  return (
    <section className="relative py-16">
      <div className="container">
        <h2 className="mb-2 text-center font-brand text-3xl font-black">
          三種<span className="text-gold-glow">牌陣</span>,三種問法
        </h2>
        <p className="mb-10 text-center text-sm tracking-widest text-muted-foreground">CHOOSE YOUR SPREAD</p>
        <div className="grid gap-5 sm:grid-cols-3">
          {SPREADS.map((s, i) => (
            <Link
              key={s.id}
              href="/reading"
              className="press-scale fade-up group rounded-2xl border border-primary/25 bg-card/70 p-6 backdrop-blur transition-all hover:border-primary/60 hover:shadow-[0_0_28px_oklch(0.78_0.13_75_/_22%)]"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="mb-4 flex items-center gap-1.5">
                {Array.from({ length: s.cardCount }).map((_, j) => (
                  <span
                    key={j}
                    className="inline-block h-10 w-7 rounded-[5px] border border-primary/50 bg-gradient-to-b from-primary/30 to-primary/5 transition-transform group-hover:-translate-y-1.5"
                    style={{ transitionDelay: `${j * 60}ms` }}
                  />
                ))}
              </div>
              <h3 className="font-brand text-xl font-bold">{s.name}</h3>
              <p className="mb-2 text-xs tracking-widest text-gold">{s.enName.toUpperCase()}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CardsPreview() {
  const preview = [MAJOR_ARCANA[0], MAJOR_ARCANA[17], MAJOR_ARCANA[19], MAJOR_ARCANA[21]];
  return (
    <section className="relative overflow-hidden py-16">
      <StarField count={14} />
      <div className="container relative z-10">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_1.3fr]">
          <div className="fade-up">
            <h2 className="mb-4 font-brand text-3xl font-black">
              小僧親繪的<br /><span className="text-gold-glow">大阿爾克那</span>
            </h2>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              從「初行腳的小僧」(愚者)到「圓滿的禪圓」(世界),
              再加上權杖、聖杯、寶劍、錢幣四個花色,
              78 張牌各有小僧世界觀的重新詮釋——米紙、墨線、一點燭火金。
            </p>
            <Link
              href="/cards"
              className="press-scale inline-flex items-center gap-1 rounded-full border border-primary/50 px-6 py-3 text-gold hover:bg-primary/15"
            >
              進入牌意圖鑑 <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex justify-center gap-3 sm:gap-4">
            {preview.map((c, i) => (
              <div
                key={c.id}
                className="tarot-card-hover w-24 shrink-0 overflow-hidden rounded-xl border-2 border-primary/50 shadow-xl sm:w-28 md:w-32"
                style={{ aspectRatio: "3/5", transform: `rotate(${(i - 1.5) * 5}deg) translateY(${Math.abs(i - 1.5) * 8}px)` }}
              >
                <CardFront id={c.id} numeral={c.numeral} name={c.name} enName={c.enName} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ComingSoonSection() {
  const items = [
    {
      href: "/live",
      img: ASSETS.monkCrystal,
      title: "真人占卜",
      en: "LIVE READING",
      desc: "與真人占卜師一對一深度解牌,小僧正在張羅中。",
    },
    {
      href: "/shop",
      img: ASSETS.monkShop,
      title: "商品",
      en: "SHOP",
      desc: "小僧周邊、實體牌卡與御守小物,即將上架。",
    },
  ];
  return (
    <section className="relative py-16 pb-24">
      <div className="container">
        <h2 className="mb-2 text-center font-brand text-3xl font-black">
          即將<span className="text-gold-glow">開山</span>
        </h2>
        <p className="mb-10 text-center text-sm tracking-widest text-muted-foreground">COMING SOON</p>
        <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
          {items.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="press-scale fade-up group flex items-center gap-5 rounded-2xl border border-dashed border-primary/35 bg-card/50 p-6 backdrop-blur transition-all hover:border-primary/70 hover:bg-card/80"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <img src={item.img} alt="" className="w-20 shrink-0 transition-transform group-hover:scale-110 sm:w-24" draggable={false} />
              <div>
                <h3 className="font-brand text-xl font-bold">{item.title}</h3>
                <p className="mb-1 text-xs tracking-widest text-gold">{item.en}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
