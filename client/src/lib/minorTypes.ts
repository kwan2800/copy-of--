/** 小阿爾克那共用型別 */
import type { TarotCard } from "./tarotData";

export type Suit = "wands" | "cups" | "swords" | "pentacles";

export interface MinorCard extends TarotCard {
  suit: Suit;
  rank: number; // 1-10, 11=侍從, 12=騎士, 13=王后, 14=國王
}

export const SUIT_INFO: Record<Suit, { name: string; enName: string; element: string; theme: string }> = {
  wands: { name: "權杖", enName: "Wands", element: "火", theme: "行動、熱情、創造" },
  cups: { name: "聖杯", enName: "Cups", element: "水", theme: "情感、關係、直覺" },
  swords: { name: "寶劍", enName: "Swords", element: "風", theme: "思維、真相、抉擇" },
  pentacles: { name: "錢幣", enName: "Pentacles", element: "土", theme: "物質、工作、身體" },
};

export const RANK_NAMES: Record<number, { zh: string; en: string }> = {
  1: { zh: "王牌", en: "Ace" },
  2: { zh: "二", en: "Two" },
  3: { zh: "三", en: "Three" },
  4: { zh: "四", en: "Four" },
  5: { zh: "五", en: "Five" },
  6: { zh: "六", en: "Six" },
  7: { zh: "七", en: "Seven" },
  8: { zh: "八", en: "Eight" },
  9: { zh: "九", en: "Nine" },
  10: { zh: "十", en: "Ten" },
  11: { zh: "侍從", en: "Page" },
  12: { zh: "騎士", en: "Knight" },
  13: { zh: "王后", en: "Queen" },
  14: { zh: "國王", en: "King" },
};
