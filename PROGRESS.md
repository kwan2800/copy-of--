# 小僧塔羅 進度筆記(context 保存用)

## 已部署
- 公開網址: https://xiaotarot-sdufqg6r.manus.space
- v1 checkpoint: c86d9a85(22 張大阿爾克那完整站)

## 素材 URL(必須原樣使用)
- logo: /manus-storage/logo-enso-monk_d329f827.png
- monkGuide: /manus-storage/monk-guide_5bcad6ae.png
- monkWelcome: /manus-storage/monk-welcome_faf37f27.png
- monkReading: /manus-storage/monk-reading_b143168b.png
- monkHappy: /manus-storage/monk-happy_85f7f033.png
- monkShop: /manus-storage/monk-shop_13db978e.png
- monkCrystal: /manus-storage/monk-crystal_d441aa7f.png
- cardBack: /manus-storage/card-back_991f0298.png
- heroTemple: /manus-storage/hero-night-temple_be46ce37.png
(全部集中於 client/src/lib/assets.ts 的 ASSETS)

## 目前任務:加入 56 張小阿爾克那(id 22-77)
- minorTypes.ts ✅(Suit/MinorCard 型別、SUIT_INFO、RANK_NAMES)
- suitWands.ts ✅(id 22-35)
- suitCups.ts ✅(id 36-49)
- suitSwords.ts(id 50-63)← 本 patch
- suitPentacles.ts(id 64-77)← 本 patch
- 待辦:
  1. tarotData.ts 加入 FULL_DECK = MAJOR_ARCANA + 56 張,drawCards 改用 FULL_DECK
  2. CardArt.tsx 加 MinorCardSymbol(依花色+rank 繪製:花色符號 × 數量、宮廷牌用 MonkSit 變化),CardFront 支援 minor
  3. Cards.tsx 圖鑑分頁籤(大阿爾克那/權杖/聖杯/寶劍/錢幣)
  4. Home.tsx 文案更新(22 → 78 張)
  5. tsc 檢查、截圖、checkpoint、redeploy
