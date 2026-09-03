/** 小僧塔羅 — 3D 翻牌元件(夜間寺院:卡背深藍金框,卡面米紙) */
import { useState } from "react";
import { CardFront } from "./CardArt";
import { ASSETS } from "@/lib/assets";
import type { DrawnCard } from "@/lib/tarotData";

interface Props {
  drawn: DrawnCard;
  flipped: boolean;
  onFlip: () => void;
  positionTitle?: string;
  delay?: number;
}

export function TarotFlipCard({ drawn, flipped, onFlip, positionTitle, delay = 0 }: Props) {
  const [burst, setBurst] = useState(false);
  const { card, reversed } = drawn;

  const handleClick = () => {
    if (flipped) return;
    onFlip();
    setBurst(true);
  };

  return (
    <div className="flex flex-col items-center gap-3 fade-up" style={{ animationDelay: `${delay}ms` }}>
      {positionTitle && (
        <span className="font-brand text-sm tracking-widest text-gold">{positionTitle}</span>
      )}
      <div
        className="tarot-scene w-36 sm:w-44 md:w-48"
        style={{ aspectRatio: "3/5" }}
      >
        <button
          type="button"
          onClick={handleClick}
          aria-label={flipped ? `${card.name}${reversed ? "(逆位)" : ""}` : "點擊翻牌"}
          className={`tarot-flipper block h-full w-full rounded-2xl ${flipped ? "is-flipped" : "tarot-card-hover cursor-pointer"} ${burst && flipped ? "gold-burst" : ""}`}
          style={{ borderRadius: "0.9rem" }}
        >
          {/* 卡背 */}
          <div className="tarot-face border-2 border-primary/60 bg-[oklch(0.2_0.04_275)]">
            <img
              src={ASSETS.cardBack}
              alt="小僧塔羅卡背"
              className="h-full w-full object-cover"
              draggable={false}
            />
          </div>
          {/* 卡面 */}
          <div className="tarot-face tarot-face-front border-2 border-primary/70 bg-[#f3ecdc]">
            <div className={`h-full w-full ${reversed ? "rotate-180" : ""}`}>
              <CardFront id={card.id} numeral={card.numeral} name={card.name} enName={card.enName} />
            </div>
          </div>
        </button>
      </div>
      {flipped && (
        <span className={`fade-up rounded-full px-3 py-0.5 text-xs font-medium ${reversed ? "bg-secondary text-muted-foreground" : "bg-primary/15 text-gold"}`}>
          {card.name}・{reversed ? "逆位" : "正位"}
        </span>
      )}
    </div>
  );
}
