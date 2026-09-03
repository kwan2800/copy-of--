/**
 * 小僧塔羅 — 卡面 SVG 插畫
 * 風格:夜間寺院 — 米紙底 × 墨線 × 燭火金點綴,chibi 小僧元素
 * 每張大阿爾克那有專屬的簡約符號構圖,共用小僧臉譜繪製函式。
 */

const INK = "#4a3f33";
const GOLD = "#c9963f";
const GOLD_LIGHT = "#e8c477";
const GREY = "#8a8a92";
const GREY_DARK = "#6b6b74";
const SKIN = "#fbe8d8";
const BLUSH = "#f5b8b0";
const BROWN = "#8a6844";

/** chibi 小僧頭(可調表情) */
function MonkHead({
  cx,
  cy,
  r,
  mood = "calm",
}: {
  cx: number;
  cy: number;
  r: number;
  mood?: "calm" | "happy" | "surprised" | "sad" | "wink" | "determined";
}) {
  const eyeY = cy + r * 0.08;
  const eyeDX = r * 0.42;
  const blushY = cy + r * 0.38;
  const blushDX = r * 0.62;
  const mouthY = cy + r * 0.5;
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={SKIN} stroke={INK} strokeWidth={r * 0.07} />
      {/* 腮紅 */}
      <ellipse cx={cx - blushDX} cy={blushY} rx={r * 0.18} ry={r * 0.11} fill={BLUSH} opacity={0.85} />
      <ellipse cx={cx + blushDX} cy={blushY} rx={r * 0.18} ry={r * 0.11} fill={BLUSH} opacity={0.85} />
      {/* 眼睛 */}
      {mood === "calm" && (
        <g stroke={INK} strokeWidth={r * 0.08} strokeLinecap="round" fill="none">
          <path d={`M ${cx - eyeDX - r * 0.14} ${eyeY} q ${r * 0.14} ${r * 0.12} ${r * 0.28} 0`} />
          <path d={`M ${cx + eyeDX - r * 0.14} ${eyeY} q ${r * 0.14} ${r * 0.12} ${r * 0.28} 0`} />
        </g>
      )}
      {mood === "happy" && (
        <g stroke={INK} strokeWidth={r * 0.08} strokeLinecap="round" fill="none">
          <path d={`M ${cx - eyeDX - r * 0.14} ${eyeY + r * 0.06} q ${r * 0.14} -${r * 0.14} ${r * 0.28} 0`} />
          <path d={`M ${cx + eyeDX - r * 0.14} ${eyeY + r * 0.06} q ${r * 0.14} -${r * 0.14} ${r * 0.28} 0`} />
        </g>
      )}
      {mood === "surprised" && (
        <g fill={INK}>
          <circle cx={cx - eyeDX} cy={eyeY} r={r * 0.11} />
          <circle cx={cx + eyeDX} cy={eyeY} r={r * 0.11} />
        </g>
      )}
      {mood === "sad" && (
        <g stroke={INK} strokeWidth={r * 0.08} strokeLinecap="round" fill="none">
          <path d={`M ${cx - eyeDX - r * 0.14} ${eyeY + r * 0.08} q ${r * 0.14} -${r * 0.1} ${r * 0.28} ${r * 0.02}`} />
          <path d={`M ${cx + eyeDX + r * 0.14} ${eyeY + r * 0.08} q -${r * 0.14} -${r * 0.1} -${r * 0.28} ${r * 0.02}`} />
        </g>
      )}
      {mood === "wink" && (
        <g>
          <circle cx={cx - eyeDX} cy={eyeY} r={r * 0.1} fill={INK} />
          <path
            d={`M ${cx + eyeDX - r * 0.14} ${eyeY} q ${r * 0.14} ${r * 0.12} ${r * 0.28} 0`}
            stroke={INK} strokeWidth={r * 0.08} strokeLinecap="round" fill="none"
          />
        </g>
      )}
      {mood === "determined" && (
        <g>
          <circle cx={cx - eyeDX} cy={eyeY} r={r * 0.1} fill={INK} />
          <circle cx={cx + eyeDX} cy={eyeY} r={r * 0.1} fill={INK} />
          <path d={`M ${cx - eyeDX - r * 0.16} ${eyeY - r * 0.22} l ${r * 0.32} ${r * 0.08}`} stroke={INK} strokeWidth={r * 0.07} strokeLinecap="round" />
          <path d={`M ${cx + eyeDX + r * 0.16} ${eyeY - r * 0.22} l -${r * 0.32} ${r * 0.08}`} stroke={INK} strokeWidth={r * 0.07} strokeLinecap="round" />
        </g>
      )}
      {/* 嘴 */}
      {mood === "surprised" ? (
        <ellipse cx={cx} cy={mouthY} rx={r * 0.1} ry={r * 0.13} fill={INK} />
      ) : mood === "sad" ? (
        <path d={`M ${cx - r * 0.12} ${mouthY + r * 0.06} q ${r * 0.12} -${r * 0.12} ${r * 0.24} 0`} stroke={INK} strokeWidth={r * 0.07} strokeLinecap="round" fill="none" />
      ) : (
        <path d={`M ${cx - r * 0.12} ${mouthY} q ${r * 0.12} ${r * 0.12} ${r * 0.24} 0`} stroke={INK} strokeWidth={r * 0.07} strokeLinecap="round" fill="none" />
      )}
    </g>
  );
}

/** 盤坐小僧全身(冥想) */
function MonkSit({ cx, cy, scale = 1, mood = "calm" }: { cx: number; cy: number; scale?: number; mood?: Parameters<typeof MonkHead>[0]["mood"] }) {
  const s = scale;
  return (
    <g>
      {/* 身體(灰袍) */}
      <path
        d={`M ${cx - 34 * s} ${cy + 30 * s}
           q ${-6 * s} ${-26 * s} ${14 * s} ${-38 * s}
           q ${20 * s} ${-10 * s} ${40 * s} 0
           q ${20 * s} ${12 * s} ${14 * s} ${38 * s}
           q ${-8 * s} ${10 * s} ${-34 * s} ${10 * s}
           q ${-26 * s} 0 ${-34 * s} ${-10 * s} Z`}
        fill={GREY} stroke={INK} strokeWidth={2.4 * s}
      />
      {/* 衣領 V */}
      <path d={`M ${cx - 12 * s} ${cy - 6 * s} L ${cx} ${cy + 10 * s} L ${cx + 12 * s} ${cy - 6 * s}`} fill="none" stroke={GREY_DARK} strokeWidth={2.4 * s} />
      {/* 腰帶 */}
      <path d={`M ${cx - 26 * s} ${cy + 18 * s} q ${26 * s} ${8 * s} ${52 * s} 0`} fill="none" stroke={BROWN} strokeWidth={5 * s} strokeLinecap="round" />
      {/* 念珠 */}
      <g fill={BROWN}>
        {[-14, -8, -2, 4, 10].map((dx, i) => (
          <circle key={i} cx={cx + dx * s} cy={cy + (2 + Math.abs(dx) * 0.35) * s} r={2.6 * s} />
        ))}
      </g>
      {/* 手(合十/放腿上) */}
      <ellipse cx={cx - 24 * s} cy={cy + 26 * s} rx={6 * s} ry={4.5 * s} fill={SKIN} stroke={INK} strokeWidth={1.8 * s} />
      <ellipse cx={cx + 24 * s} cy={cy + 26 * s} rx={6 * s} ry={4.5 * s} fill={SKIN} stroke={INK} strokeWidth={1.8 * s} />
      {/* 頭 */}
      <MonkHead cx={cx} cy={cy - 26 * s} r={24 * s} mood={mood} />
    </g>
  );
}

/** 蓮花座 */
function Lotus({ cx, cy, scale = 1 }: { cx: number; cy: number; scale?: number }) {
  const s = scale;
  return (
    <g fill={GOLD_LIGHT} stroke={GOLD} strokeWidth={1.6 * s}>
      <path d={`M ${cx} ${cy} q ${-10 * s} ${-14 * s} ${-22 * s} ${-6 * s} q ${6 * s} ${14 * s} ${22 * s} ${6 * s} Z`} />
      <path d={`M ${cx} ${cy} q ${10 * s} ${-14 * s} ${22 * s} ${-6 * s} q ${-6 * s} ${14 * s} ${-22 * s} ${6 * s} Z`} />
      <path d={`M ${cx} ${cy + 1 * s} q ${-14 * s} ${-6 * s} ${-30 * s} ${2 * s} q ${14 * s} ${10 * s} ${30 * s} ${-2 * s} Z`} />
      <path d={`M ${cx} ${cy + 1 * s} q ${14 * s} ${-6 * s} ${30 * s} ${2 * s} q ${-14 * s} ${10 * s} ${-30 * s} ${-2 * s} Z`} />
    </g>
  );
}

/** 依牌 id 繪製核心符號構圖(180x230 viewBox 中央區) */
function CardSymbol({ id }: { id: number }) {
  if (id >= 22) return <MinorSymbol id={id} />;
  switch (id) {
    case 0: // 愚者:走路小僧 + 小包袱 + 新芽
      return (
        <g>
          <path d="M 30 185 q 60 -14 120 0" fill="none" stroke={GOLD} strokeWidth={3} strokeLinecap="round" />
          <MonkSit cx={90} cy={120} scale={0.9} mood="happy" />
          <g stroke={GOLD} strokeWidth={2.5} fill="none" strokeLinecap="round">
            <path d="M 140 96 q 0 -14 10 -18" />
            <path d="M 150 78 q -8 -2 -10 6 q 8 2 10 -6" fill={GOLD_LIGHT} />
          </g>
          <circle cx={44} cy={70} r={3} fill={GOLD_LIGHT} />
          <circle cx={136} cy={54} r={2.4} fill={GOLD_LIGHT} />
        </g>
      );
    case 1: // 魔術師:小僧 + 掌上燭光 + ∞
      return (
        <g>
          <MonkSit cx={90} cy={130} scale={0.85} mood="wink" />
          <path d="M 74 52 q 8 -10 16 0 q 8 10 16 0 q -8 -10 -16 0 q -8 10 -16 0 Z" fill="none" stroke={GOLD} strokeWidth={2.6} />
          <g>
            <ellipse cx={90} cy={84} rx={7} ry={10} fill={GOLD_LIGHT} stroke={GOLD} strokeWidth={1.6} />
            <circle cx={90} cy={80} r={2.6} fill="#fff6dd" />
          </g>
        </g>
      );
    case 2: // 女祭司:月 + 靜坐
      return (
        <g>
          <path d="M 118 46 a 22 22 0 1 0 10 40 a 18 18 0 1 1 -10 -40 Z" fill={GOLD_LIGHT} stroke={GOLD} strokeWidth={2} />
          <MonkSit cx={90} cy={132} scale={0.85} mood="calm" />
          <circle cx={52} cy={60} r={2.6} fill={GOLD_LIGHT} />
        </g>
      );
    case 3: // 皇后:花朵環繞
      return (
        <g>
          <MonkSit cx={90} cy={128} scale={0.85} mood="happy" />
          {[
            [40, 66], [140, 66], [32, 120], [148, 120],
          ].map(([x, y], i) => (
            <g key={i}>
              {[0, 60, 120, 180, 240, 300].map((a) => (
                <ellipse
                  key={a}
                  cx={x + 7 * Math.cos((a * Math.PI) / 180)}
                  cy={y + 7 * Math.sin((a * Math.PI) / 180)}
                  rx={4.5} ry={3}
                  transform={`rotate(${a} ${x + 7 * Math.cos((a * Math.PI) / 180)} ${y + 7 * Math.sin((a * Math.PI) / 180)})`}
                  fill={BLUSH} stroke={GOLD} strokeWidth={0.8}
                />
              ))}
              <circle cx={x} cy={y} r={3.4} fill={GOLD_LIGHT} />
            </g>
          ))}
        </g>
      );
    case 4: // 皇帝:山門 torii 式屋簷
      return (
        <g>
          <path d="M 34 62 q 56 -16 112 0 l -8 12 q -48 -12 -96 0 Z" fill={GOLD_LIGHT} stroke={GOLD} strokeWidth={2.2} />
          <rect x={52} y={72} width={9} height={40} fill={GOLD_LIGHT} stroke={GOLD} strokeWidth={2} />
          <rect x={119} y={72} width={9} height={40} fill={GOLD_LIGHT} stroke={GOLD} strokeWidth={2} />
          <MonkSit cx={90} cy={148} scale={0.72} mood="determined" />
        </g>
      );
    case 5: // 教皇:經卷 + 木魚
      return (
        <g>
          <MonkSit cx={90} cy={122} scale={0.85} mood="calm" />
          <rect x={58} y={166} width={64} height={16} rx={4} fill={GOLD_LIGHT} stroke={GOLD} strokeWidth={2} />
          <g stroke={GOLD} strokeWidth={1.6}>
            <line x1={68} y1={170} x2={68} y2={178} />
            <line x1={80} y1={170} x2={80} y2={178} />
            <line x1={92} y1={170} x2={92} y2={178} />
            <line x1={104} y1={170} x2={104} y2={178} />
          </g>
          <circle cx={90} cy={48} r={10} fill="none" stroke={GOLD} strokeWidth={2.2} strokeDasharray="4 3" />
        </g>
      );
    case 6: // 戀人:兩顆心 + 紅線
      return (
        <g>
          <MonkSit cx={62} cy={132} scale={0.62} mood="happy" />
          <MonkSit cx={118} cy={132} scale={0.62} mood="wink" />
          <path d="M 62 88 q 28 -30 56 0" fill="none" stroke={BLUSH} strokeWidth={2.6} strokeDasharray="5 4" strokeLinecap="round" />
          <path d="M 84 52 a 6 6 0 0 1 6 6 a 6 6 0 0 1 6 -6 a 6 6 0 0 1 6 6 q 0 8 -12 14 q -12 -6 -12 -14 a 6 6 0 0 1 6 -6 Z" fill={BLUSH} stroke={GOLD} strokeWidth={1.6} transform="translate(-6 0)" />
        </g>
      );
    case 7: // 戰車:草鞋快步 + 速度線
      return (
        <g>
          <MonkSit cx={90} cy={120} scale={0.85} mood="determined" />
          <g stroke={GOLD} strokeWidth={3} strokeLinecap="round">
            <line x1={26} y1={92} x2={48} y2={92} />
            <line x1={20} y1={110} x2={44} y2={110} />
            <line x1={28} y1={128} x2={46} y2={128} />
          </g>
          <path d="M 58 178 q 32 10 64 0" fill="none" stroke={GOLD} strokeWidth={3} strokeLinecap="round" />
        </g>
      );
    case 8: // 力量:小老虎依偎
      return (
        <g>
          <MonkSit cx={80} cy={118} scale={0.8} mood="happy" />
          <g>
            <ellipse cx={130} cy={168} rx={22} ry={14} fill={GOLD_LIGHT} stroke={GOLD} strokeWidth={2} />
            <circle cx={144} cy={158} r={11} fill={GOLD_LIGHT} stroke={GOLD} strokeWidth={2} />
            <path d="M 138 150 l 3 -6 l 4 5 Z M 148 149 l 3 -6 l 4 5 Z" fill={GOLD} />
            <g stroke={INK} strokeWidth={1.4}>
              <line x1={122} y1={162} x2={130} y2={164} />
              <line x1={122} y1={168} x2={130} y2={168} />
            </g>
            <circle cx={141} cy={157} r={1.6} fill={INK} />
            <circle cx={148} cy={157} r={1.6} fill={INK} />
          </g>
        </g>
      );
    case 9: // 隱士:提燈
      return (
        <g>
          <MonkSit cx={90} cy={130} scale={0.85} mood="calm" />
          <g>
            <line x1={132} y1={70} x2={132} y2={88} stroke={INK} strokeWidth={2} />
            <rect x={122} y={88} width={20} height={26} rx={5} fill={GOLD_LIGHT} stroke={GOLD} strokeWidth={2.2} />
            <circle cx={132} cy={101} r={5} fill="#fff6dd" />
          </g>
          <circle cx={48} cy={60} r={2.4} fill={GOLD_LIGHT} />
        </g>
      );
    case 10: // 命運之輪:轉經輪
      return (
        <g>
          <circle cx={90} cy={92} r={34} fill="none" stroke={GOLD} strokeWidth={3} />
          <circle cx={90} cy={92} r={22} fill={GOLD_LIGHT} stroke={GOLD} strokeWidth={2} opacity={0.5} />
          {[0, 45, 90, 135].map((a) => (
            <line
              key={a}
              x1={90 + 34 * Math.cos((a * Math.PI) / 180)} y1={92 + 34 * Math.sin((a * Math.PI) / 180)}
              x2={90 - 34 * Math.cos((a * Math.PI) / 180)} y2={92 - 34 * Math.sin((a * Math.PI) / 180)}
              stroke={GOLD} strokeWidth={2}
            />
          ))}
          <MonkSit cx={90} cy={166} scale={0.55} mood="surprised" />
        </g>
      );
    case 11: // 正義:天秤
      return (
        <g>
          <line x1={90} y1={48} x2={90} y2={96} stroke={GOLD} strokeWidth={3} />
          <line x1={48} y1={60} x2={132} y2={60} stroke={GOLD} strokeWidth={3} strokeLinecap="round" />
          <path d="M 48 60 l -10 22 h 20 Z" fill={GOLD_LIGHT} stroke={GOLD} strokeWidth={2} />
          <path d="M 132 60 l -10 22 h 20 Z" fill={GOLD_LIGHT} stroke={GOLD} strokeWidth={2} />
          <MonkSit cx={90} cy={148} scale={0.7} mood="calm" />
        </g>
      );
    case 12: // 倒吊人:倒掛小僧
      return (
        <g>
          <line x1={40} y1={44} x2={140} y2={44} stroke={BROWN} strokeWidth={4} strokeLinecap="round" />
          <g transform="rotate(180 90 118)">
            <MonkSit cx={90} cy={118} scale={0.75} mood="happy" />
          </g>
          <line x1={90} y1={44} x2={90} y2={62} stroke={BROWN} strokeWidth={2.4} />
          <circle cx={52} cy={170} r={2.6} fill={GOLD_LIGHT} />
          <circle cx={130} cy={162} r={2.2} fill={GOLD_LIGHT} />
        </g>
      );
    case 13: // 死神:落葉與新芽
      return (
        <g>
          <MonkSit cx={90} cy={126} scale={0.8} mood="calm" />
          {[[44, 60, -20], [140, 72, 24], [36, 130, 12]].map(([x, y, r], i) => (
            <path
              key={i}
              d={`M ${x} ${y} q 8 -6 14 0 q -6 8 -14 0 Z`}
              fill={GOLD_LIGHT} stroke={GOLD} strokeWidth={1.4}
              transform={`rotate(${r} ${x} ${y})`}
            />
          ))}
          <g stroke="#7da26b" strokeWidth={2.4} fill="none" strokeLinecap="round">
            <path d="M 138 184 v -14" />
            <path d="M 138 172 q -8 -2 -9 6 q 8 2 9 -6" fill="#a8c796" />
            <path d="M 138 172 q 8 -2 9 6 q -8 2 -9 -6" fill="#a8c796" />
          </g>
        </g>
      );
    case 14: // 節制:沏茶
      return (
        <g>
          <MonkSit cx={90} cy={118} scale={0.8} mood="calm" />
          <g>
            <path d="M 66 172 h 24 q 2 12 -12 12 q -14 0 -12 -12 Z" fill={GOLD_LIGHT} stroke={GOLD} strokeWidth={2} />
            <path d="M 104 164 q 14 -2 14 8 q 0 10 -12 10 h -6 q 8 -8 4 -18 Z" fill={GOLD_LIGHT} stroke={GOLD} strokeWidth={2} />
            <path d="M 92 160 q 4 -8 0 -14 M 100 160 q 4 -8 0 -14" stroke={GREY} strokeWidth={2} fill="none" strokeLinecap="round" />
          </g>
        </g>
      );
    case 15: // 惡魔:小妖與珍奶
      return (
        <g>
          <MonkSit cx={76} cy={128} scale={0.78} mood="surprised" />
          <g>
            <circle cx={136} cy={96} r={16} fill="#b48ac2" stroke={INK} strokeWidth={2} />
            <path d="M 126 84 l 4 -10 l 5 8 Z M 146 84 l -4 -10 l -5 8 Z" fill="#b48ac2" stroke={INK} strokeWidth={1.6} />
            <circle cx={130} cy={94} r={2} fill={INK} />
            <circle cx={142} cy={94} r={2} fill={INK} />
            <path d="M 131 102 q 5 4 10 0" stroke={INK} strokeWidth={1.6} fill="none" strokeLinecap="round" />
          </g>
          <g>
            <rect x={126} y={140} width={20} height={30} rx={5} fill="#e8d6c2" stroke={INK} strokeWidth={1.8} />
            <line x1={136} y1={136} x2={140} y2={122} stroke={INK} strokeWidth={2.2} />
            {[131, 136, 141].map((x) => (
              <circle key={x} cx={x} cy={164} r={2.2} fill={INK} />
            ))}
          </g>
        </g>
      );
    case 16: // 高塔:雷與塔
      return (
        <g>
          <path d="M 74 78 h 32 l 6 96 h -44 Z" fill={GREY} stroke={INK} strokeWidth={2.2} />
          <path d="M 66 78 h 48 l -6 -12 h -36 Z" fill={GREY_DARK} stroke={INK} strokeWidth={2.2} />
          <path d="M 70 60 h 40 l -5 -10 h -30 Z" fill={GREY_DARK} stroke={INK} strokeWidth={2} />
          <path d="M 104 30 l -12 20 h 10 l -14 24 l 22 -18 h -9 l 12 -20 Z" fill={GOLD_LIGHT} stroke={GOLD} strokeWidth={1.6} />
          <circle cx={44} cy={120} r={2.6} fill={GOLD_LIGHT} />
          <circle cx={140} cy={104} r={2.2} fill={GOLD_LIGHT} />
        </g>
      );
    case 17: // 星星:大星與許願
      return (
        <g>
          <path d="M 90 34 l 7 18 l 19 2 l -14 13 l 4 19 l -16 -10 l -16 10 l 4 -19 l -14 -13 l 19 -2 Z" fill={GOLD_LIGHT} stroke={GOLD} strokeWidth={2.2} />
          <MonkSit cx={90} cy={148} scale={0.72} mood="happy" />
          {[[40, 70], [142, 62], [36, 122], [148, 118]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={2.4} fill={GOLD_LIGHT} />
          ))}
        </g>
      );
    case 18: // 月亮:霧中石燈籠
      return (
        <g>
          <path d="M 122 40 a 20 20 0 1 0 9 36 a 16 16 0 1 1 -9 -36 Z" fill={GOLD_LIGHT} stroke={GOLD} strokeWidth={2} />
          <g>
            <rect x={58} y={96} width={26} height={8} rx={3} fill={GREY} stroke={INK} strokeWidth={1.8} />
            <rect x={63} y={104} width={16} height={18} fill={GOLD_LIGHT} stroke={INK} strokeWidth={1.8} />
            <rect x={56} y={122} width={30} height={8} rx={3} fill={GREY} stroke={INK} strokeWidth={1.8} />
            <rect x={66} y={130} width={10} height={22} fill={GREY} stroke={INK} strokeWidth={1.8} />
          </g>
          <g stroke={GREY} strokeWidth={2.4} strokeLinecap="round" opacity={0.7}>
            <path d="M 40 166 q 20 -8 44 0 q 24 8 48 0" fill="none" />
            <path d="M 52 180 q 20 -8 40 0 q 20 8 40 0" fill="none" />
          </g>
          <MonkSit cx={124} cy={150} scale={0.55} mood="calm" />
        </g>
      );
    case 19: // 太陽:大太陽開心小僧
      return (
        <g>
          <circle cx={90} cy={72} r={24} fill={GOLD_LIGHT} stroke={GOLD} strokeWidth={2.4} />
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => (
            <line
              key={a}
              x1={90 + 30 * Math.cos((a * Math.PI) / 180)} y1={72 + 30 * Math.sin((a * Math.PI) / 180)}
              x2={90 + 38 * Math.cos((a * Math.PI) / 180)} y2={72 + 38 * Math.sin((a * Math.PI) / 180)}
              stroke={GOLD} strokeWidth={2.6} strokeLinecap="round"
            />
          ))}
          <MonkSit cx={90} cy={154} scale={0.68} mood="happy" />
        </g>
      );
    case 20: // 審判:晨鐘
      return (
        <g>
          <path d="M 70 44 q 20 -12 40 0 l 4 34 q -24 10 -48 0 Z" fill={GOLD_LIGHT} stroke={GOLD} strokeWidth={2.4} />
          <circle cx={90} cy={86} r={5} fill={GOLD} />
          <g stroke={GOLD} strokeWidth={2} strokeLinecap="round" opacity={0.8}>
            <path d="M 52 56 q -8 8 -6 18" fill="none" />
            <path d="M 128 56 q 8 8 6 18" fill="none" />
          </g>
          <MonkSit cx={90} cy={150} scale={0.7} mood="surprised" />
        </g>
      );
    case 21: // 世界:禪圓
      return (
        <g>
          <path
            d="M 90 40 a 52 52 0 1 0 1 0"
            fill="none" stroke={GOLD} strokeWidth={5} strokeLinecap="round" strokeDasharray="300 40"
          />
          <MonkSit cx={90} cy={106} scale={0.72} mood="happy" />
          <Lotus cx={90} cy={158} scale={0.9} />
        </g>
      );
    default:
      return null;
  }
}

/* ============ 小阿爾克那卡面 ============ */

const SUIT_COLORS: Record<string, { main: string; light: string }> = {
  wands: { main: "#b3552e", light: "#e8935f" },
  cups: { main: "#3e6f8e", light: "#8fbcd4" },
  swords: { main: "#5f6b7d", light: "#aab6c8" },
  pentacles: { main: "#8a6d2f", light: "#d9b866" },
};

/** 花色小符號 */
function SuitIcon({ suit, cx, cy, s = 1 }: { suit: string; cx: number; cy: number; s?: number }) {
  const c = SUIT_COLORS[suit];
  switch (suit) {
    case "wands": // 權杖:木杖+新葉
      return (
        <g transform={`translate(${cx} ${cy}) scale(${s})`}>
          <line x1={0} y1={-11} x2={0} y2={11} stroke={c.main} strokeWidth={3.4} strokeLinecap="round" />
          <path d="M 0 -11 q -7 -3 -8 4 q 7 3 8 -4 Z" fill={c.light} stroke={c.main} strokeWidth={1.2} />
          <path d="M 0 -11 q 7 -3 8 4 q -7 3 -8 -4 Z" fill={c.light} stroke={c.main} strokeWidth={1.2} />
        </g>
      );
    case "cups": // 聖杯:茶碗
      return (
        <g transform={`translate(${cx} ${cy}) scale(${s})`}>
          <path d="M -9 -6 h 18 q 1 10 -9 12 q -10 -2 -9 -12 Z" fill={c.light} stroke={c.main} strokeWidth={1.6} />
          <line x1={-6} y1={9} x2={6} y2={9} stroke={c.main} strokeWidth={2} strokeLinecap="round" />
          <path d="M -4 -9 q 1 -3 0 -5 M 4 -9 q 1 -3 0 -5" stroke={c.main} strokeWidth={1.2} fill="none" strokeLinecap="round" opacity={0.7} />
        </g>
      );
    case "swords": // 寶劍:短劍
      return (
        <g transform={`translate(${cx} ${cy}) scale(${s})`}>
          <path d="M 0 -12 l 2.6 14 l -2.6 4 l -2.6 -4 Z" fill={c.light} stroke={c.main} strokeWidth={1.4} />
          <line x1={-5.5} y1={7} x2={5.5} y2={7} stroke={c.main} strokeWidth={2.4} strokeLinecap="round" />
          <line x1={0} y1={7} x2={0} y2={12} stroke={c.main} strokeWidth={2.2} strokeLinecap="round" />
        </g>
      );
    default: // pentacles 錢幣:銅錢
      return (
        <g transform={`translate(${cx} ${cy}) scale(${s})`}>
          <circle cx={0} cy={0} r={10} fill={c.light} stroke={c.main} strokeWidth={1.8} />
          <rect x={-3.4} y={-3.4} width={6.8} height={6.8} fill="#f3ecdc" stroke={c.main} strokeWidth={1.4} />
        </g>
      );
  }
}

/** 數字牌 1-10 的符號排列位置(180x230 座標) */
const PIP_LAYOUTS: Record<number, [number, number][]> = {
  2: [[90, 62], [90, 118]],
  3: [[90, 52], [62, 112], [118, 112]],
  4: [[62, 60], [118, 60], [62, 120], [118, 120]],
  5: [[62, 56], [118, 56], [90, 90], [62, 124], [118, 124]],
  6: [[62, 52], [118, 52], [62, 90], [118, 90], [62, 128], [118, 128]],
  7: [[62, 50], [118, 50], [90, 72], [62, 94], [118, 94], [62, 132], [118, 132]],
  8: [[62, 48], [118, 48], [62, 82], [118, 82], [62, 116], [118, 116], [62, 148], [118, 148]],
  9: [[58, 48], [90, 48], [122, 48], [58, 90], [90, 90], [122, 90], [58, 132], [90, 132], [122, 132]],
  10: [[58, 46], [90, 46], [122, 46], [58, 84], [90, 84], [122, 84], [58, 122], [90, 122], [122, 122], [90, 152]],
};

/** 小阿爾克那符號構圖:王牌大符號+小僧;2-10 pip 排列;宮廷牌小僧+花色 */
function MinorSymbol({ id }: { id: number }) {
  const idx = id - 22;
  const suit = (["wands", "cups", "swords", "pentacles"] as const)[Math.floor(idx / 14)];
  const rank = (idx % 14) + 1;
  const c = SUIT_COLORS[suit];

  if (rank === 1) {
    // 王牌:雲上大花色符號 + 仰望的小僧
    return (
      <g>
        <circle cx={90} cy={70} r={30} fill="none" stroke={c.main} strokeWidth={1.6} strokeDasharray="4 4" opacity={0.6} />
        <SuitIcon suit={suit} cx={90} cy={70} s={2.4} />
        <path d="M 56 100 q 10 8 34 8 q 24 0 34 -8" fill="none" stroke={c.light} strokeWidth={2.4} strokeLinecap="round" opacity={0.7} />
        <MonkSit cx={90} cy={158} scale={0.62} mood="surprised" />
        <circle cx={46} cy={54} r={2.4} fill={GOLD_LIGHT} />
        <circle cx={136} cy={48} r={2} fill={GOLD_LIGHT} />
      </g>
    );
  }

  if (rank <= 10) {
    // 數字牌:pip 排列 + 底部迷你小僧頭
    const pips = PIP_LAYOUTS[rank] ?? [];
    return (
      <g>
        {pips.map(([x, y], i) => (
          <SuitIcon key={i} suit={suit} cx={x} cy={y} s={1.05} />
        ))}
        <MonkHead cx={90} cy={186} r={14} mood={rank === 5 ? "sad" : rank === 9 && suit === "swords" ? "surprised" : rank >= 9 ? "happy" : "calm"} />
      </g>
    );
  }

  // 宮廷牌:小僧 + 身分標誌 + 花色符號
  const mood = rank === 11 ? "surprised" : rank === 12 ? "determined" : rank === 13 ? "happy" : "calm";
  return (
    <g>
      {/* 身分光環/座 */}
      {rank === 14 && <path d="M 52 168 q 38 14 76 0 l -6 14 q -32 10 -64 0 Z" fill={c.light} stroke={c.main} strokeWidth={1.8} opacity={0.85} />}
      {rank === 13 && <Lotus cx={90} cy={170} scale={0.9} />}
      <MonkSit cx={90} cy={118} scale={0.82} mood={mood} />
      {/* 頭飾:騎士頭巾 / 王后花 / 國王冠 */}
      {rank === 12 && <path d="M 66 66 q 24 -14 48 0 l -4 8 q -20 -10 -40 0 Z" fill={c.light} stroke={c.main} strokeWidth={1.8} />}
      {rank === 13 && (
        <g>
          {[0, 72, 144, 216, 288].map((a) => (
            <ellipse key={a} cx={116 + 6 * Math.cos((a * Math.PI) / 180)} cy={62 + 6 * Math.sin((a * Math.PI) / 180)} rx={4} ry={2.6}
              transform={`rotate(${a} ${116 + 6 * Math.cos((a * Math.PI) / 180)} ${62 + 6 * Math.sin((a * Math.PI) / 180)})`}
              fill={BLUSH} stroke={c.main} strokeWidth={0.8} />
          ))}
          <circle cx={116} cy={62} r={2.6} fill={GOLD_LIGHT} />
        </g>
      )}
      {rank === 14 && <path d="M 76 58 l 4 -12 l 6 8 l 4 -12 l 4 12 l 6 -8 l 4 12 Z" fill={GOLD_LIGHT} stroke={GOLD} strokeWidth={1.6} transform="translate(-2 0)" />}
      {/* 花色符號(左上、右上角落) */}
      <SuitIcon suit={suit} cx={38} cy={52} s={0.9} />
      <SuitIcon suit={suit} cx={142} cy={52} s={0.9} />
    </g>
  );
}

/**
 * 完整卡面(米紙底 + 金框 + 編號 + 牌名)
 * viewBox 180x300
 */
import { CARD_IMAGES } from "@/lib/cardImages";

export function CardFront({ id, numeral, name, enName }: { id: number; numeral: string; name: string; enName: string }) {
  const img = CARD_IMAGES[id];
  if (img) {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#f3ecdc]">
        <img
          src={img}
          alt={name}
          className="h-full w-full object-cover"
          loading="lazy"
          draggable={false}
        />
      </div>
    );
  }
  return (
    <svg viewBox="0 0 180 300" className="h-full w-full" role="img" aria-label={name}>
      {/* 米紙底 */}
      <rect x={0} y={0} width={180} height={300} rx={12} fill="#f3ecdc" />
      <rect x={6} y={6} width={168} height={288} rx={9} fill="none" stroke={GOLD} strokeWidth={2.4} />
      <rect x={11} y={11} width={158} height={278} rx={7} fill="none" stroke={GOLD} strokeWidth={0.9} opacity={0.6} />
      {/* 四角裝飾 */}
      {[
        [18, 18, 0], [162, 18, 90], [162, 282, 180], [18, 282, 270],
      ].map(([x, y, r], i) => (
        <path
          key={i}
          d={`M ${x} ${y + 8} q 0 -8 8 -8`}
          fill="none" stroke={GOLD} strokeWidth={2} strokeLinecap="round"
          transform={`rotate(${r} ${x} ${y})`}
        />
      ))}
      {/* 編號 */}
      <text x={90} y={34} textAnchor="middle" fontSize={15} fontFamily="Noto Serif TC, serif" fill={GOLD} fontWeight={700} letterSpacing={2}>
        {numeral}
      </text>
      <line x1={62} y1={42} x2={118} y2={42} stroke={GOLD} strokeWidth={1} opacity={0.7} />
      {/* 主圖區 */}
      <g transform="translate(0 46) scale(1 0.72)">
        <CardSymbol id={id} />
      </g>
      {/* 牌名 */}
      <line x1={54} y1={252} x2={126} y2={252} stroke={GOLD} strokeWidth={1} opacity={0.7} />
      <text x={90} y={274} textAnchor="middle" fontSize={20} fontFamily="Noto Serif TC, serif" fill={INK} fontWeight={900}>
        {name}
      </text>
      <text x={90} y={289} textAnchor="middle" fontSize={8.5} fontFamily="Noto Sans TC, sans-serif" fill={GOLD} letterSpacing={1.2}>
        {enName.toUpperCase()}
      </text>
    </svg>
  );
}
