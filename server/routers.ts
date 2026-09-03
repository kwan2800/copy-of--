import { COOKIE_NAME } from "@shared/const";
import { z } from "zod";
import { getSessionCookieOptions } from "./_core/cookies";
import { invokeLLM } from "./_core/llm";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";

/** 單張抽到的牌(由前端傳入,含牌陣位置與正逆位) */
const drawnCardInput = z.object({
  position: z.string().min(1).max(30), // 牌陣位置名,如「過去」「身」「指引」
  positionHint: z.string().max(60).optional(), // 位置提示語
  name: z.string().min(1).max(30), // 中文牌名
  enName: z.string().min(1).max(60),
  reversed: z.boolean(),
  keywords: z.array(z.string().max(20)).max(8), // 當前方位的關鍵字
  meaning: z.string().max(600), // 當前方位的牌義
});

const overallAnalysisInput = z.object({
  spreadName: z.string().min(1).max(30), // 牌陣名,如「時之流」
  spreadDescription: z.string().max(120).optional(),
  cards: z.array(drawnCardInput).min(1).max(10),
});

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  tarot: router({
    /** 小僧整體分析:綜合牌陣中所有牌,由 LLM 動態生成獨特的綜合解讀 */
    overallAnalysis: publicProcedure
      .input(overallAnalysisInput)
      .mutation(async ({ input }) => {
        const cardLines = input.cards
          .map(
            (c, i) =>
              `${i + 1}. 【${c.position}${c.positionHint ? `(${c.positionHint})` : ""}】${c.name}(${c.enName})・${c.reversed ? "逆位" : "正位"}\n   關鍵字:${c.keywords.join("、")}\n   牌義:${c.meaning}`,
          )
          .join("\n");

        const systemPrompt = `你是「小僧」,一位可愛的小和尚塔羅占卜師。你白天掃地誦經,晚上替有緣的施主看牌。
你的說話風格:溫暖、智慧、帶禪意,偶爾俏皮;自稱「小僧」,稱呼用戶為「施主」;喜歡用自然意象(月光、溪水、燭火、落葉、掃地、敲鐘等)作比喻;結尾常帶祝福,偶爾說「阿彌陀佛」。
你的解讀原則:不嚇人、只指路;把牌與牌之間的關聯、互動、能量流向串成一個完整的故事;正視逆位牌但給予溫柔的轉化建議;提醒施主牌只是指路,路還是自己走的。
輸出要求:使用繁體中文;直接輸出整體分析內容,不要任何開場白標題或 markdown 標記;分成 2 至 4 個自然段;總長度約 250 至 400 字。`;

        const userPrompt = `施主使用「${input.spreadName}」牌陣${input.spreadDescription ? `(${input.spreadDescription})` : ""},抽到了以下的牌:

${cardLines}

請你綜合這${input.cards.length > 1 ? "幾張牌之間的關聯與互動" : "張牌的訊息"},以小僧的口吻給施主一個整體分析。${input.cards.length > 1 ? "請特別留意各位置的牌如何呼應、承接或轉折,把它們串成一個完整的能量故事。" : ""}`;

        const res = await invokeLLM({
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt },
          ],
        });

        const raw = res.choices[0]?.message?.content;
        const analysis = typeof raw === "string" ? raw.trim() : "";
        if (!analysis) {
          throw new Error("小僧一時語塞,請施主稍後再試。");
        }
        return { analysis };
      }),
  }),
});

export type AppRouter = typeof appRouter;
