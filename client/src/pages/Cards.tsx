/** 牌意圖鑑 — 全套 78 張牌瀏覽(大阿爾克那 + 四花色),點擊看詳細牌義 */
import { useState } from "react";
import { SiteHeader, SiteFooter } from "@/components/SiteLayout";
import { StarField } from "@/components/StarField";
import { MonkGuide } from "@/components/MonkGuide";
import { CardFront } from "@/components/CardArt";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { MAJOR_ARCANA, MINOR_ARCANA, type TarotCard } from "@/lib/tarotData";
import { SUIT_INFO, type Suit } from "@/lib/minorTypes";

type TabId = "major" | Suit;

const TABS: { id: TabId; label: string; sub: string }[] = [
  { id: "major", label: "大阿爾克那", sub: "22 張・人生大課題" },
  { id: "wands", label: "權杖", sub: `14 張・${SUIT_INFO.wands.theme}` },
  { id: "cups", label: "聖杯", sub: `14 張・${SUIT_INFO.cups.theme}` },
  { id: "swords", label: "寶劍", sub: `14 張・${SUIT_INFO.swords.theme}` },
  { id: "pentacles", label: "錢幣", sub: `14 張・${SUIT_INFO.pentacles.theme}` },
];

export default function Cards() {
  const [selected, setSelected] = useState<TarotCard | null>(null);
  const [tab, setTab] = useState<TabId>(() => {
    // 支援 ?suit=wands 直接開啟指定花色分頁
    const q = new URLSearchParams(window.location.search).get("suit");
    return q && ["major", "wands", "cups", "swords", "pentacles"].includes(q) ? (q as TabId) : "major";
  });

  const cards =
    tab === "major" ? MAJOR_ARCANA : MINOR_ARCANA.filter((c) => c.suit === tab);
  const activeTab = TABS.find((t) => t.id === tab)!;

  return (
    <div className="night-sky relative min-h-screen">
      <SiteHeader />
      <StarField count={24} />
      <main className="container relative z-10 pb-28 pt-24 md:pb-16">
        <div className="mx-auto mb-10 max-w-2xl">
          <MonkGuide>
            <p>
              這裡是小僧的<strong>牌意圖鑑</strong>,全套 78 張牌都收在這兒——
              22 張大阿爾克那,加上權杖、聖杯、寶劍、錢幣四個花色各 14 張。
              點一張牌,小僧為你細說它的故事。
            </p>
          </MonkGuide>
        </div>
        <h1 className="mb-2 text-center font-brand text-3xl font-black sm:text-4xl">
          牌意<span className="text-gold-glow">圖鑑</span>
        </h1>
        <p className="mb-8 text-center text-sm tracking-widest text-muted-foreground">FULL DECK・78 CARDS</p>

        {/* 花色分頁籤 */}
        <div className="mb-3 flex flex-wrap justify-center gap-2">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`press-scale rounded-full border px-4 py-2 text-sm font-bold transition-colors ${
                tab === t.id
                  ? "border-gold bg-gold/20 text-gold-glow"
                  : "border-primary/30 bg-primary/5 text-muted-foreground hover:border-gold/50 hover:text-foreground"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <p className="mb-10 text-center text-xs tracking-wider text-muted-foreground">{activeTab.sub}</p>

        <div key={tab} className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-5 md:grid-cols-5 lg:grid-cols-6">
          {cards.map((c, i) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setSelected(c)}
              className="tarot-card-hover press-scale fade-up overflow-hidden rounded-xl border-2 border-primary/40 shadow-lg"
              style={{ aspectRatio: "3/5", animationDelay: `${Math.min(i * 35, 500)}ms` }}
              aria-label={`查看 ${c.name} 牌義`}
            >
              <CardFront id={c.id} numeral={c.numeral} name={c.name} enName={c.enName} />
            </button>
          ))}
        </div>
      </main>
      <SiteFooter />

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-h-[86vh] max-w-2xl overflow-y-auto border-primary/30 bg-[oklch(0.22_0.03_275)] p-0">
          {selected && (
            <div className="grid gap-0 sm:grid-cols-[200px_1fr]">
              <div className="flex items-start justify-center bg-primary/10 p-6">
                <div className="w-40 overflow-hidden rounded-xl border-2 border-primary/50 shadow-xl" style={{ aspectRatio: "3/5" }}>
                  <CardFront id={selected.id} numeral={selected.numeral} name={selected.name} enName={selected.enName} />
                </div>
              </div>
              <div className="space-y-4 p-6">
                <DialogTitle asChild>
                  <h2 className="font-brand text-2xl font-black">
                    {selected.numeral}・{selected.name}
                    <span className="ml-2 text-sm font-normal text-muted-foreground">{selected.enName}</span>
                  </h2>
                </DialogTitle>
                <p className="text-sm text-gold">{selected.monkTitle}</p>
                <div>
                  <h3 className="mb-1 text-sm font-bold text-gold">正位・{selected.keywords.join("、")}</h3>
                  <p className="text-sm leading-relaxed">{selected.upright}</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-bold text-muted-foreground">逆位・{selected.reversedKeywords.join("、")}</h3>
                  <p className="text-sm leading-relaxed text-foreground/85">{selected.reversed}</p>
                </div>
                <blockquote className="monk-bubble px-4 py-3 text-sm leading-relaxed after:hidden">
                  <span className="mb-1 block text-xs font-bold text-[oklch(0.55_0.08_55)]">🙏 小僧的話</span>
                  {selected.monkWords}
                </blockquote>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
