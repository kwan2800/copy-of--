/**
 * 線上占卜頁 — 夜間寺院「祭壇式」儀式流程
 * 階段:選牌陣 → 靜心洗牌 → 翻牌 → 解讀
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { RotateCcw, Sparkles, ChevronRight, ScrollText } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/SiteLayout";
import { StarField } from "@/components/StarField";
import { MonkGuide } from "@/components/MonkGuide";
import { TarotFlipCard } from "@/components/TarotFlipCard";
import { SPREADS, drawCards, type Spread, type DrawnCard } from "@/lib/tarotData";
import { ASSETS } from "@/lib/assets";
import { trpc } from "@/lib/trpc";

type Stage = "select" | "shuffle" | "reveal" | "done";

export default function Reading() {
  const [stage, setStage] = useState<Stage>("select");
  const [spread, setSpread] = useState<Spread | null>(null);
  const [drawn, setDrawn] = useState<DrawnCard[]>([]);
  const [flipped, setFlipped] = useState<boolean[]>([]);

  const startShuffle = (s: Spread) => {
    setSpread(s);
    setStage("shuffle");
    // 洗牌儀式:1.8 秒後進入翻牌
    setTimeout(() => {
      setDrawn(drawCards(s.cardCount));
      setFlipped(Array(s.cardCount).fill(false));
      setStage("reveal");
    }, 1800);
  };

  const handleFlip = (i: number) => {
    setFlipped((prev) => {
      const next = [...prev];
      next[i] = true;
      if (next.every(Boolean)) {
        setTimeout(() => setStage("done"), 900);
      }
      return next;
    });
  };

  const reset = () => {
    setStage("select");
    setSpread(null);
    setDrawn([]);
    setFlipped([]);
  };

  return (
    <div className="night-sky relative min-h-screen">
      <SiteHeader />
      <StarField count={30} />
      <main className="container relative z-10 pb-28 pt-24 md:pb-16">
        {stage === "select" && <SelectStage onSelect={startShuffle} />}
        {stage === "shuffle" && spread && <ShuffleStage spread={spread} />}
        {(stage === "reveal" || stage === "done") && spread && (
          <RevealStage
            spread={spread}
            drawn={drawn}
            flipped={flipped}
            onFlip={handleFlip}
            done={stage === "done"}
            onReset={reset}
          />
        )}
      </main>
      <SiteFooter />
    </div>
  );
}

/* ---------- 階段一:選牌陣 ---------- */
function SelectStage({ onSelect }: { onSelect: (s: Spread) => void }) {
  return (
    <div className="fade-up">
      <div className="mx-auto mb-10 max-w-2xl">
        <MonkGuide>
          <p className="font-medium">
            施主,歡迎來到小僧的占卜殿。<br />
            先深呼吸三次,然後選一個牌陣吧。心越靜,牌越準喔。
          </p>
        </MonkGuide>
      </div>
      <h1 className="mb-2 text-center font-brand text-3xl font-black sm:text-4xl">
        選擇<span className="text-gold-glow">牌陣</span>
      </h1>
      <p className="mb-10 text-center text-sm text-muted-foreground">SELECT YOUR SPREAD</p>
      <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-3">
        {SPREADS.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => onSelect(s)}
            className="press-scale fade-up group flex flex-col items-start gap-3 rounded-2xl border border-primary/25 bg-card/70 p-6 text-left backdrop-blur transition-all hover:border-primary/60 hover:shadow-[0_0_28px_oklch(0.78_0.13_75_/_25%)]"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-center gap-1.5">
              {Array.from({ length: s.cardCount }).map((_, j) => (
                <span
                  key={j}
                  className="inline-block h-9 w-6 rounded-[4px] border border-primary/50 bg-gradient-to-b from-primary/25 to-primary/5 transition-transform group-hover:-translate-y-1"
                  style={{ transitionDelay: `${j * 60}ms` }}
                />
              ))}
            </div>
            <h2 className="font-brand text-xl font-bold">{s.name}</h2>
            <p className="text-xs tracking-widest text-gold">{s.enName.toUpperCase()}</p>
            <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            <span className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-gold">
              開始占卜 <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        ))}
      </div>
      <p className="mt-10 text-center text-sm text-muted-foreground">
        想先認識 78 張牌?到{" "}
        <Link href="/cards" className="text-gold underline underline-offset-4 hover:text-gold-glow">
          牌意圖鑑
        </Link>{" "}
        逛逛吧。
      </p>
    </div>
  );
}

/* ---------- 階段二:靜心洗牌 ---------- */
function ShuffleStage({ spread }: { spread: Spread }) {
  return (
    <div className="fade-up flex min-h-[60vh] flex-col items-center justify-center gap-8 text-center">
      <div className="relative h-52 w-40">
        {[0, 1, 2, 3, 4].map((i) => (
          <img
            key={i}
            src={ASSETS.cardBack}
            alt=""
            className="absolute left-1/2 top-1/2 h-48 w-32 rounded-xl border border-primary/40 object-cover shadow-xl"
            style={{
              transform: `translate(-50%, -50%) rotate(${(i - 2) * 9}deg)`,
              transformOrigin: "50% 120%",
              animation: `shuffle-fan 1.6s ${i * 0.08}s var(--ease-in-out-smooth) infinite alternate`,
            }}
            draggable={false}
          />
        ))}
        <style>{`
          @keyframes shuffle-fan {
            from { margin-left: -14px; }
            to { margin-left: 14px; }
          }
        `}</style>
      </div>
      <div>
        <h2 className="mb-2 font-brand text-2xl font-black text-gold-glow">小僧正在為你洗牌⋯⋯</h2>
        <p className="text-sm text-muted-foreground">{spread.monkIntro}</p>
      </div>
      <Sparkles className="h-6 w-6 animate-pulse text-gold" />
    </div>
  );
}

/* ---------- 階段三/四:翻牌與解讀 ---------- */
function RevealStage({
  spread,
  drawn,
  flipped,
  onFlip,
  done,
  onReset,
}: {
  spread: Spread;
  drawn: DrawnCard[];
  flipped: boolean[];
  onFlip: (i: number) => void;
  done: boolean;
  onReset: () => void;
}) {
  const allFlipped = flipped.every(Boolean);
  return (
    <div>
      <div className="mx-auto mb-8 max-w-2xl">
        <MonkGuide image={allFlipped ? ASSETS.monkReading : ASSETS.monkCrystal} size="sm">
          {allFlipped ? (
            <p>牌已現身。往下看,小僧為你細細解讀 🙏</p>
          ) : (
            <p>
              牌洗好了,施主。<strong>心中默想你的問題</strong>,然後輕觸卡牌,讓它翻面吧。
            </p>
          )}
        </MonkGuide>
      </div>

      <h1 className="mb-8 text-center font-brand text-2xl font-black sm:text-3xl">
        {spread.name}<span className="ml-2 text-sm font-normal tracking-widest text-gold">{spread.enName.toUpperCase()}</span>
      </h1>

      {/* 祭壇:卡牌區 */}
      <div className="mb-14 flex flex-wrap items-start justify-center gap-6 sm:gap-10">
        {drawn.map((d, i) => (
          <TarotFlipCard
            key={d.card.id}
            drawn={d}
            flipped={flipped[i]}
            onFlip={() => onFlip(i)}
            positionTitle={spread.positions[i].title}
            delay={i * 120}
          />
        ))}
      </div>

      {/* 解讀區 */}
      {done && (
        <div className="mx-auto max-w-3xl space-y-6">
          <h2 className="fade-up text-center font-brand text-2xl font-black">
            小僧<span className="text-gold-glow">解牌</span>
          </h2>
          {drawn.map((d, i) => (
            <InterpretCard key={d.card.id} drawn={d} position={spread.positions[i]} index={i} />
          ))}
          <OverallAnalysis spread={spread} drawn={drawn} />
          <div className="fade-up flex flex-col items-center gap-4 pt-6" style={{ animationDelay: "300ms" }}>
            <MonkGuide image={ASSETS.monkHappy} size="sm">
              <p>
                解牌完畢,阿彌陀佛。記住,牌只是指路,<strong>路還是施主自己走的</strong>。
                願你今夜好眠,明日有光。
              </p>
            </MonkGuide>
            <button
              type="button"
              onClick={onReset}
              className="press-scale glow-pulse inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-medium text-primary-foreground"
            >
              <RotateCcw className="h-4 w-4" /> 再占一次
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function InterpretCard({
  drawn,
  position,
  index,
}: {
  drawn: DrawnCard;
  position: { title: string; hint: string };
  index: number;
}) {
  const { card, reversed } = drawn;
  const keywords = reversed ? card.reversedKeywords : card.keywords;
  return (
    <article
      className="fade-up overflow-hidden rounded-2xl border border-primary/25 bg-card/80 backdrop-blur"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <header className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-primary/15 bg-primary/10 px-6 py-4">
        <span className="rounded-full bg-primary/20 px-3 py-0.5 text-xs font-medium text-gold">
          {position.title}・{position.hint}
        </span>
        <h3 className="font-brand text-xl font-black">
          {card.numeral}・{card.name}
          <span className="ml-2 text-sm font-normal text-muted-foreground">{card.enName}</span>
        </h3>
        <span className={`text-sm font-medium ${reversed ? "text-muted-foreground" : "text-gold"}`}>
          {reversed ? "逆位" : "正位"}
        </span>
      </header>
      <div className="space-y-4 px-6 py-5">
        <p className="text-sm text-gold">
          {card.monkTitle}・關鍵字:{keywords.join("、")}
        </p>
        <p className="leading-relaxed">{reversed ? card.reversed : card.upright}</p>
        <blockquote className="monk-bubble monk-bubble-bottom mx-auto max-w-lg px-5 py-3 text-sm leading-relaxed after:hidden">
          <span className="mb-1 block text-xs font-bold text-[oklch(0.55_0.08_55)]">🙏 小僧的話</span>
          {card.monkWords}
        </blockquote>
      </div>
    </article>
  );
}

/* ---------- 小僧整體分析(LLM 動態生成) ---------- */
function OverallAnalysis({ spread, drawn }: { spread: Spread; drawn: DrawnCard[] }) {
  const mutation = trpc.tarot.overallAnalysis.useMutation();
  const requested = useRef(false);
  // 用 mutate 的穩定參照避免重複觸發
  const { mutate } = mutation;

  useEffect(() => {
    if (requested.current) return;
    requested.current = true;
    mutate({
      spreadName: spread.name,
      spreadDescription: spread.description,
      cards: drawn.map((d, i) => ({
        position: spread.positions[i].title,
        positionHint: spread.positions[i].hint,
        name: d.card.name,
        enName: d.card.enName,
        reversed: d.reversed,
        keywords: (d.reversed ? d.card.reversedKeywords : d.card.keywords).slice(0, 8),
        meaning: (d.reversed ? d.card.reversed : d.card.upright).slice(0, 600),
      })),
    });
  }, [mutate, spread, drawn]);

  return (
    <section
      className="fade-up overflow-hidden rounded-2xl border border-gold/40 bg-gradient-to-b from-primary/15 to-card/80 backdrop-blur"
      style={{ animationDelay: "200ms" }}
      aria-live="polite"
    >
      <header className="flex items-center gap-3 border-b border-gold/25 bg-gold/10 px-6 py-4">
        <span className="inline-flex rounded-xl bg-gold/20 p-2 text-gold">
          <ScrollText className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-brand text-xl font-black">
            小僧<span className="text-gold-glow">整體分析</span>
          </h3>
          <p className="text-xs tracking-widest text-muted-foreground">OVERALL READING</p>
        </div>
      </header>
      <div className="px-6 py-6">
        {mutation.isPending && (
          <div className="flex flex-col items-center gap-4 py-6 text-center">
            <img src={ASSETS.monkGuide} alt="" className="monk-float w-20" draggable={false} />
            <div>
              <p className="mb-1 font-medium text-gold">小僧正在合掌凝視牌面⋯⋯</p>
              <p className="text-sm text-muted-foreground">把{drawn.length > 1 ? "幾張牌的因緣" : "這張牌的訊息"}串起來,需要一炷香的工夫。</p>
            </div>
            <span className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="h-2 w-2 animate-bounce rounded-full bg-gold"
                  style={{ animationDelay: `${i * 160}ms` }}
                />
              ))}
            </span>
          </div>
        )}
        {mutation.isError && (
          <div className="flex flex-col items-center gap-4 py-4 text-center">
            <p className="text-sm text-muted-foreground">
              唉呀,小僧一時語塞,整體分析沒能送達。請施主稍候再試一次。
            </p>
            <button
              type="button"
              onClick={() => mutation.mutate({
                spreadName: spread.name,
                spreadDescription: spread.description,
                cards: drawn.map((d, i) => ({
                  position: spread.positions[i].title,
                  positionHint: spread.positions[i].hint,
                  name: d.card.name,
                  enName: d.card.enName,
                  reversed: d.reversed,
                  keywords: (d.reversed ? d.card.reversedKeywords : d.card.keywords).slice(0, 8),
                  meaning: (d.reversed ? d.card.reversed : d.card.upright).slice(0, 600),
                })),
              })}
              className="press-scale inline-flex items-center gap-2 rounded-full border border-gold/50 px-6 py-2.5 text-sm font-medium text-gold hover:bg-gold/10"
            >
              <RotateCcw className="h-4 w-4" /> 請小僧再看一次
            </button>
          </div>
        )}
        {mutation.isSuccess && (
          <div className="space-y-4">
            {mutation.data.analysis.split(/\n{1,}/).filter(Boolean).map((para, i) => (
              <p key={i} className="fade-up leading-loose" style={{ animationDelay: `${i * 120}ms` }}>
                {para}
              </p>
            ))}
            <p className="pt-2 text-right text-sm text-gold">—— 小僧 合十 🙏</p>
          </div>
        )}
      </div>
    </section>
  );
}
