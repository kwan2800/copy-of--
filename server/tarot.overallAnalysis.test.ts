import { beforeEach, describe, expect, it, vi } from "vitest";

const invokeLLMMock = vi.fn();

vi.mock("./_core/llm", () => ({
  invokeLLM: (...args: unknown[]) => invokeLLMMock(...args),
}));

import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

const sampleInput = {
  spreadName: "時之流",
  spreadDescription: "過去、現在、未來三張牌,看清事情的來龍去脈與走向。",
  cards: [
    {
      position: "過去",
      positionHint: "事情的根源與背景",
      name: "愚者",
      enName: "The Fool",
      reversed: false,
      keywords: ["新開始", "冒險", "純真"],
      meaning: "背起小包袱,踏出山門的第一步。",
    },
    {
      position: "現在",
      positionHint: "當下的處境與課題",
      name: "寶劍五",
      enName: "Five of Swords",
      reversed: true,
      keywords: ["和解", "放下輸贏"],
      meaning: "爭到最後,山風只記得誰先放下。",
    },
    {
      position: "未來",
      positionHint: "即將展開的方向",
      name: "太陽",
      enName: "The Sun",
      reversed: false,
      keywords: ["喜悅", "成功", "光明"],
      meaning: "日出東山,萬物都亮了。",
    },
  ],
};

describe("tarot.overallAnalysis", () => {
  beforeEach(() => {
    invokeLLMMock.mockReset();
  });

  it("returns the trimmed analysis from the LLM", async () => {
    invokeLLMMock.mockResolvedValue({
      choices: [{ message: { content: "  施主,這三張牌像一條溪水。\n\n阿彌陀佛。  " } }],
    });
    const caller = appRouter.createCaller(createPublicContext());
    const result = await caller.tarot.overallAnalysis(sampleInput);
    expect(result.analysis).toBe("施主,這三張牌像一條溪水。\n\n阿彌陀佛。");
  });

  it("sends spread, positions, reversed state and meanings to the LLM prompt", async () => {
    invokeLLMMock.mockResolvedValue({
      choices: [{ message: { content: "分析內容" } }],
    });
    const caller = appRouter.createCaller(createPublicContext());
    await caller.tarot.overallAnalysis(sampleInput);

    expect(invokeLLMMock).toHaveBeenCalledTimes(1);
    const callArg = invokeLLMMock.mock.calls[0][0] as {
      messages: { role: string; content: string }[];
    };
    const system = callArg.messages.find(m => m.role === "system")!.content;
    const user = callArg.messages.find(m => m.role === "user")!.content;

    expect(system).toContain("小僧");
    expect(system).toContain("繁體中文");
    expect(user).toContain("時之流");
    expect(user).toContain("【過去(事情的根源與背景)】愚者(The Fool)・正位");
    expect(user).toContain("【現在(當下的處境與課題)】寶劍五(Five of Swords)・逆位");
    expect(user).toContain("【未來(即將展開的方向)】太陽(The Sun)・正位");
    expect(user).toContain("關聯與互動");
  });

  it("throws a friendly error when the LLM returns empty content", async () => {
    invokeLLMMock.mockResolvedValue({ choices: [{ message: { content: "" } }] });
    const caller = appRouter.createCaller(createPublicContext());
    await expect(caller.tarot.overallAnalysis(sampleInput)).rejects.toThrow("小僧一時語塞");
  });

  it("rejects invalid input (empty cards array)", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    await expect(
      caller.tarot.overallAnalysis({ spreadName: "時之流", cards: [] }),
    ).rejects.toThrow();
    expect(invokeLLMMock).not.toHaveBeenCalled();
  });
});
