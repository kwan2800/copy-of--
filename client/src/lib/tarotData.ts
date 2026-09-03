/**
 * 小僧塔羅 — 22 張大阿爾克那牌資料
 * 風格:夜間寺院 Moonlit Temple — 深墨藍 × 燭火金 × 米紙
 * 每張牌以小僧世界觀重新詮釋,附正位/逆位牌義與小僧的話。
 */

export interface TarotCard {
  id: number;
  numeral: string; // 羅馬數字
  name: string; // 中文牌名
  enName: string; // 英文牌名
  monkTitle: string; // 小僧版牌名詮釋
  keywords: string[]; // 正位關鍵字
  reversedKeywords: string[]; // 逆位關鍵字
  upright: string; // 正位牌義
  reversed: string; // 逆位牌義
  monkWords: string; // 小僧的話(口語溫暖詮釋)
  emoji: string; // 卡面核心符號 emoji(輔助 SVG 設計)
}

export const MAJOR_ARCANA: TarotCard[] = [
  {
    id: 0,
    numeral: "0",
    name: "愚者",
    enName: "The Fool",
    monkTitle: "初行腳的小僧",
    keywords: ["新的開始", "冒險", "自由", "純真"],
    reversedKeywords: ["魯莽", "猶豫不決", "缺乏計畫"],
    upright:
      "愚者代表一段旅程的起點。你正站在人生新篇章的入口,帶著純真與勇氣向前。不必知道所有答案,重要的是踏出第一步的心。宇宙正鼓勵你放下顧慮,擁抱未知的可能。",
    reversed:
      "逆位的愚者提醒你,熱情雖好,但別忘了看清腳下的路。可能有些衝動的決定需要再想想,或是你因為過度害怕而遲遲不敢出發。找回平衡,謹慎但不失勇氣。",
    monkWords:
      "施主,小僧第一次下山時也是什麼都不懂呢。但正因為不懂,才看見了最美的風景。放心走吧,路會教你的。",
    emoji: "🌱",
  },
  {
    id: 1,
    numeral: "I",
    name: "魔術師",
    enName: "The Magician",
    monkTitle: "掌燈的小僧",
    keywords: ["創造力", "行動力", "資源整合", "顯化"],
    reversedKeywords: ["才能未展", "拖延", "操弄"],
    upright:
      "魔術師手中握有實現願望的所有工具。你此刻擁有足夠的才能、資源與意志力,萬事俱備,只欠行動。專注你的目標,把想法化為現實的時機已經成熟。",
    reversed:
      "逆位的魔術師暗示你的潛能還沒有被好好發揮,或是精力太過分散。也要留意身邊是否有人口惠而實不至。收攏心神,誠實面對自己真正想要的東西。",
    monkWords:
      "施主,你手裡的燈其實一直是亮著的,只是你忘了低頭看。想做的事,今天就開始做一點點吧。",
    emoji: "✨",
  },
  {
    id: 2,
    numeral: "II",
    name: "女祭司",
    enName: "The High Priestess",
    monkTitle: "聽月的比丘尼",
    keywords: ["直覺", "內在智慧", "靜觀", "潛意識"],
    reversedKeywords: ["忽視直覺", "秘密", "浮躁"],
    upright:
      "女祭司掌管直覺與內在的聲音。答案不在外面,而在你心裡最安靜的地方。此刻適合靜下來聆聽,而非急著行動。相信你的第六感,它比你以為的更準確。",
    reversed:
      "逆位的女祭司表示你可能忽略了內心的聲音,被外界的雜音牽著走。或有些被隱藏的訊息尚未浮現。給自己一段獨處的時間,重新和自己連上線。",
    monkWords:
      "夜裡聽月,不是聽月亮的聲音,是聽自己的。施主,今晚睡前留三分鐘給自己,好嗎?",
    emoji: "🌙",
  },
  {
    id: 3,
    numeral: "III",
    name: "皇后",
    enName: "The Empress",
    monkTitle: "滿園花開的供養人",
    keywords: ["豐盛", "滋養", "創造", "母性關懷"],
    reversedKeywords: ["過度依賴", "枯竭", "忽略自己"],
    upright:
      "皇后是豐盛與滋養的化身。你付出的關愛正在開花結果,生活將迎來富足與美好。也提醒你享受生活的美感——好好吃飯、好好休息,也是一種修行。",
    reversed:
      "逆位的皇后提醒你,一直照顧別人的你,是不是忘了照顧自己?付出過度會枯竭,先把自己的杯子倒滿,才有餘裕溫暖別人。",
    monkWords:
      "施主,寺裡的花不會因為著急就開快一點,但按時澆水,它一定會開。你也是,記得先澆灌自己。",
    emoji: "🌸",
  },
  {
    id: 4,
    numeral: "IV",
    name: "皇帝",
    enName: "The Emperor",
    monkTitle: "守山門的方丈",
    keywords: ["秩序", "責任", "領導", "穩定"],
    reversedKeywords: ["固執", "控制過度", "缺乏紀律"],
    upright:
      "皇帝代表結構與掌控。現在是建立秩序、扛起責任的時刻。用理性與紀律規劃你的版圖,穩紮穩打會帶來長久的成就。你比自己想像的更有領導力。",
    reversed:
      "逆位的皇帝暗示規則變成了束縛,或是控制慾讓關係緊繃。也可能是生活缺乏紀律而散漫。剛柔並濟,權威不是壓制,而是讓人安心。",
    monkWords:
      "方丈說過:山門要守,但也要記得開。施主,立規矩是為了護人,不是為了困住誰,包括你自己。",
    emoji: "⛰️",
  },
  {
    id: 5,
    numeral: "V",
    name: "教皇",
    enName: "The Hierophant",
    monkTitle: "誦經的老和尚",
    keywords: ["傳承", "學習", "信念", "良師"],
    reversedKeywords: ["教條", "反叛", "價值動搖"],
    upright:
      "教皇象徵智慧的傳承與正統的指引。此刻適合向前輩請益、系統性地學習,或回歸讓你安心的信念與傳統。一位良師或貴人可能正要出現。",
    reversed:
      "逆位的教皇表示既有的規範讓你感到窒息,你渴望走自己的路。質疑權威沒有錯,但記得分辨哪些是真束縛,哪些是真智慧。",
    monkWords:
      "老和尚唸的經,小僧以前也聽不懂,後來才明白——不是經文深,是心還沒靜。施主,有些道理急不得。",
    emoji: "📿",
  },
  {
    id: 6,
    numeral: "VI",
    name: "戀人",
    enName: "The Lovers",
    monkTitle: "紅線下的相遇",
    keywords: ["愛", "連結", "選擇", "和諧"],
    reversedKeywords: ["失衡", "價值分歧", "逃避選擇"],
    upright:
      "戀人牌帶來愛與深刻連結的訊息。無論是感情升溫,還是遇見價值觀契合的人,你的心正在敞開。同時這也是一張「選擇」之牌——跟隨你的心,做出忠於自己的決定。",
    reversed:
      "逆位的戀人提醒關係中可能出現溝通失衡或價值觀的分歧,也可能是你正在逃避一個重要的選擇。誠實地面對心中真正的渴望,才不會辜負彼此。",
    monkWords:
      "施主,小僧雖然出家,但也懂——緣分像寺前的風鈴,風來了自然會響。強求不響,放下反而叮鈴。",
    emoji: "💞",
  },
  {
    id: 7,
    numeral: "VII",
    name: "戰車",
    enName: "The Chariot",
    monkTitle: "下山趕路的小僧",
    keywords: ["意志力", "前進", "勝利", "自律"],
    reversedKeywords: ["失控", "方向迷失", "半途而廢"],
    upright:
      "戰車象徵以強大的意志力衝破阻礙。你的目標明確,動能十足,只要駕馭好內心兩股拉扯的力量,勝利就在前方。大膽前進,這是屬於行動者的時刻。",
    reversed:
      "逆位的戰車暗示你可能失去方向或動力,像一輛輪子空轉的車。先停下來確認目的地,再重新出發。蠻力衝刺不如穩住韁繩。",
    monkWords:
      "趕路的時候,小僧學會一件事:跑得快不如走得穩,走得穩不如方向對。施主,你的方向對了嗎?",
    emoji: "🛞",
  },
  {
    id: 8,
    numeral: "VIII",
    name: "力量",
    enName: "Strength",
    monkTitle: "與虎同坐的小僧",
    keywords: ["溫柔的勇氣", "耐心", "內在力量", "馴服"],
    reversedKeywords: ["自我懷疑", "急躁", "內耗"],
    upright:
      "力量牌的力量不是蠻力,而是溫柔的堅定。你有能力以耐心與慈悲面對困境,馴服內心的恐懼之虎。真正的強大,是柔軟卻不退讓。",
    reversed:
      "逆位的力量表示你可能正被自我懷疑或焦躁啃食,內在的小獸躁動不安。別苛責自己,恐懼需要的是安撫而不是壓制。深呼吸,你比想像中勇敢。",
    monkWords:
      "施主,心裡的老虎不用打跑,摸摸牠的頭就好。小僧也常常害怕,但害怕的時候,就對自己溫柔一點。",
    emoji: "🐯",
  },
  {
    id: 9,
    numeral: "IX",
    name: "隱士",
    enName: "The Hermit",
    monkTitle: "山洞裡的燈",
    keywords: ["內省", "獨處", "尋道", "智慧之光"],
    reversedKeywords: ["孤立", "逃避", "拒絕建言"],
    upright:
      "隱士提著燈,獨自走入內心深處。此刻你需要的不是熱鬧,而是一段安靜的獨處時光,去整理、去沉澱、去尋找屬於自己的答案。智慧在靜默中生長。",
    reversed:
      "逆位的隱士提醒你,獨處若變成了封閉,燈就照不進來了。你可能在逃避人群或拒絕幫助。適度的連結不會打擾修行,反而是修行的一部分。",
    monkWords:
      "小僧閉關七日,悟出一個道理:一個人靜靜很好,但記得留一扇窗,讓月光和朋友都進得來。",
    emoji: "🏮",
  },
  {
    id: 10,
    numeral: "X",
    name: "命運之輪",
    enName: "Wheel of Fortune",
    monkTitle: "轉經輪",
    keywords: ["轉機", "命運", "循環", "時來運轉"],
    reversedKeywords: ["時運不濟", "抗拒改變", "循環卡住"],
    upright:
      "命運之輪開始轉動,改變的浪潮正在到來。好運與新的機遇即將降臨,順勢而為就能乘風而起。記住:輪子轉動時,抓住它,而不是抵抗它。",
    reversed:
      "逆位的命運之輪表示事情暫時不如預期,彷彿卡在循環裡。但低谷正是輪子即將上轉的位置。此刻能做的是保持柔軟,靜待時機,別在逆風時硬撐帆。",
    monkWords:
      "寺裡的轉經輪,轉一圈是一次祝福。施主,人生的輪子也一樣——現在轉到哪裡不重要,重要的是它一直在轉。",
    emoji: "☸️",
  },
  {
    id: 11,
    numeral: "XI",
    name: "正義",
    enName: "Justice",
    monkTitle: "持秤的判官",
    keywords: ["公平", "因果", "誠實", "抉擇"],
    reversedKeywords: ["不公", "自欺", "逃避責任"],
    upright:
      "正義牌代表因果與平衡。你付出的努力將得到公正的回報,懸而未決的事情會有清楚的結果。做決定時保持誠實與客觀,天秤自會傾向對的一方。",
    reversed:
      "逆位的正義提醒你,可能有失衡的對待,或是你對自己不夠誠實。逃避責任只會讓天秤更歪。勇敢面對真相,即使它不那麼舒服。",
    monkWords:
      "師父說:種瓜得瓜,種豆得豆,種下善念得安眠。施主,問心無愧,就是最好的護身符。",
    emoji: "⚖️",
  },
  {
    id: 12,
    numeral: "XII",
    name: "倒吊人",
    enName: "The Hanged Man",
    monkTitle: "倒掛樹上的小僧",
    keywords: ["換位思考", "暫停", "犧牲", "放下"],
    reversedKeywords: ["徒勞", "拖延", "不甘停滯"],
    upright:
      "倒吊人以顛倒的視角看世界。眼前的停滯不是懲罰,而是禮物——它讓你有機會換個角度,看見從前看不見的答案。有時候,暫停就是最快的前進。",
    reversed:
      "逆位的倒吊人表示你可能在無意義的等待中消耗自己,或明知該放下卻緊抓不放。問問自己:這份堅持是智慧,還是習慣?",
    monkWords:
      "小僧有次倒掛在樹上(別問為什麼),發現倒過來的寺廟像一艘船。施主,卡住的時候,倒過來看看吧。",
    emoji: "🙃",
  },
  {
    id: 13,
    numeral: "XIII",
    name: "死神",
    enName: "Death",
    monkTitle: "落葉與新芽",
    keywords: ["結束", "蛻變", "重生", "斷捨離"],
    reversedKeywords: ["抗拒結束", "拖延轉變", "停滯"],
    upright:
      "別怕,死神牌說的不是終結,而是蛻變。一段舊的章節正在關閉,為的是騰出空間給新的開始。勇敢地告別不再適合你的人事物,新芽正等著破土。",
    reversed:
      "逆位的死神表示你正抗拒一場必要的結束,緊抓著已經枯萎的東西不放。改變確實可怕,但停在原地更消耗。允許自己慢慢放手,一點一點就好。",
    monkWords:
      "施主你看,寺前的銀杏每年落葉,每年又新綠。沒有一片葉子的離開是白費的,它們都成了春天的土壤。",
    emoji: "🍂",
  },
  {
    id: 14,
    numeral: "XIV",
    name: "節制",
    enName: "Temperance",
    monkTitle: "沏茶的小僧",
    keywords: ["平衡", "調和", "耐心", "中道"],
    reversedKeywords: ["失衡", "極端", "急於求成"],
    upright:
      "節制是調和的藝術。像沏一壺好茶,水溫、時間、心境缺一不可。此刻的你需要在各種拉扯間找到中道,不急不徐,慢慢調配出屬於你的節奏。",
    reversed:
      "逆位的節制提醒你,生活可能正走向某種極端——過度工作、過度擔憂、或過度放縱。失衡的茶泡不出好味道。停下來,重新調整比例。",
    monkWords:
      "沏茶急不得,水太燙會苦,太涼無味。施主,你的生活最近是太燙,還是太涼了呢?",
    emoji: "🍵",
  },
  {
    id: 15,
    numeral: "XV",
    name: "惡魔",
    enName: "The Devil",
    monkTitle: "心裡的小妖",
    keywords: ["誘惑", "執念", "束縛", "陰影面"],
    reversedKeywords: ["掙脫", "覺醒", "戒斷"],
    upright:
      "惡魔牌照見的是束縛你的執念——可能是慾望、壞習慣、或一段讓你無法呼吸的關係。但看清楚:鎖鏈其實鬆鬆地掛著,囚禁你的從來不是別人,是你以為自己走不了。",
    reversed:
      "逆位的惡魔是覺醒的訊號!你正在看清那些綑綁你的東西,並且開始掙脫。戒斷的過程不舒服,但每一步都在拿回自己的自由。小僧為你喝采。",
    monkWords:
      "施主,心裡的小妖不可怕,牠只是想騙你多喝一杯珍奶(小僧也常被騙)。看見牠,笑一笑,牠就小一號。",
    emoji: "👹",
  },
  {
    id: 16,
    numeral: "XVI",
    name: "高塔",
    enName: "The Tower",
    monkTitle: "雷劈舊塔",
    keywords: ["驟變", "覺醒", "破而後立", "真相"],
    reversedKeywords: ["驚魂未定", "拖延崩塌", "僥倖"],
    upright:
      "高塔牌帶來突如其來的震盪——但被雷劈開的,往往是本來就搖搖欲墜的東西。舊的架構崩塌,是為了讓你在更堅實的地基上重建。震驚過後,你會感謝這道雷。",
    reversed:
      "逆位的高塔表示你可能正勉強撐著一座該倒的塔,或還沒從先前的變故中回神。別怕,餘震會過去。與其修補裂縫,不如考慮重建。",
    monkWords:
      "寺後的舊塔倒了那年,大家都哭了。後來新塔蓋好,比舊的更亮。施主,有些崩塌是老天爺在幫你拆違建。",
    emoji: "🌩️",
  },
  {
    id: 17,
    numeral: "XVII",
    name: "星星",
    enName: "The Star",
    monkTitle: "許願的流星",
    keywords: ["希望", "療癒", "靈感", "願望"],
    reversedKeywords: ["信心不足", "灰心", "希望渺茫感"],
    upright:
      "星星是黑夜後最溫柔的一張牌。經歷了風雨,療癒與希望正緩緩注入你的生命。你的願望被宇宙聽見了,保持信心,靈感與好消息會像星光一樣一顆顆亮起。",
    reversed:
      "逆位的星星表示你的信心之火有點微弱,覺得願望遙不可及。但星星沒有消失,只是被雲遮住了。休息一下,雲散了,光還在原地等你。",
    monkWords:
      "施主,小僧每晚都替來過的施主們數星星。今晚這顆特別亮的,就當是你的吧。",
    emoji: "⭐",
  },
  {
    id: 18,
    numeral: "XVIII",
    name: "月亮",
    enName: "The Moon",
    monkTitle: "霧中的石燈籠",
    keywords: ["直覺", "不安", "潛意識", "朦朧"],
    reversedKeywords: ["撥雲見日", "釋懷", "真相浮現"],
    upright:
      "月亮牌籠罩著一層霧。眼前的情況可能不如表面清晰,不安與疑慮悄悄浮現。此刻別急著下判斷,讓直覺當你的石燈籠,一步一步慢慢走,天亮之前不做重大決定。",
    reversed:
      "逆位的月亮是好消息:霧正在散去。困擾你的疑慮將漸漸明朗,誤會有機會解開,藏在暗處的真相即將浮現。你會發現,很多恐懼只是影子。",
    monkWords:
      "起霧的晚上,小僧就不趕路了,坐下來喝碗熱粥。施主,看不清的時候,照顧好自己就是最好的前進。",
    emoji: "🌫️",
  },
  {
    id: 19,
    numeral: "XIX",
    name: "太陽",
    enName: "The Sun",
    monkTitle: "曬太陽的小僧",
    keywords: ["喜悅", "成功", "活力", "光明"],
    reversedKeywords: ["延遲的快樂", "低電量", "陰霾未散"],
    upright:
      "太陽是整副牌中最燦爛的祝福!成功、喜悅與滿滿的正能量正照耀著你。努力將被看見,關係將被溫暖,連空氣都是甜的。盡情享受這份光亮,你值得。",
    reversed:
      "逆位的太陽並不是沒有太陽,只是雲稍微多了一點。好事可能延遲但不會缺席,或是你電量不足、快樂變得勉強。先充個電,陽光一直都在。",
    monkWords:
      "施主!今天天氣這麼好,小僧提議:把煩惱晾在竹竿上,我們去曬太陽!",
    emoji: "☀️",
  },
  {
    id: 20,
    numeral: "XX",
    name: "審判",
    enName: "Judgement",
    monkTitle: "晨鐘響起",
    keywords: ["覺醒", "重生", "召喚", "釋懷"],
    reversedKeywords: ["自我批判", "沉睡", "錯過召喚"],
    upright:
      "審判牌是一記喚醒靈魂的晨鐘。過去的努力與經歷正迎來總結算,一個重要的召喚或轉捩點出現了。原諒過去的自己,回應內心的呼喚,你將迎來煥然一新的階段。",
    reversed:
      "逆位的審判表示你可能困在自我批判裡,反覆播放過去的錯誤,或對內心的召喚裝睡。鐘聲已經響了,別再賴床。放過自己,才能出發。",
    monkWords:
      "每天敲晨鐘時,小僧都想:昨天的事就讓它留在昨天吧。施主,鐘聲是新的一天在叫你的名字喔。",
    emoji: "🔔",
  },
  {
    id: 21,
    numeral: "XXI",
    name: "世界",
    enName: "The World",
    monkTitle: "圓滿的禪圓",
    keywords: ["圓滿", "完成", "整合", "抵達"],
    reversedKeywords: ["差一哩路", "未竟之事", "循環未閉"],
    upright:
      "世界牌是旅程的圓滿終章。一個重要的階段完成了,你整合了一路的學習,抵達了曾經夢想的地方。慶祝吧!而每個圓滿的終點,都是下一段旅程溫柔的起點。",
    reversed:
      "逆位的世界表示目標近在咫尺,卻總覺得差最後一哩路。可能有未完成的課題在等你回頭處理。別急著開新篇,把這一章好好寫完,圓才畫得圓。",
    monkWords:
      "師父畫禪圓時說:圓滿不是完美,是願意把一筆畫完。施主,恭喜你,也謝謝一路走來的自己。",
    emoji: "🪷",
  },
];

/** 牌陣定義 */
export interface Spread {
  id: string;
  name: string;
  enName: string;
  description: string;
  cardCount: number;
  positions: { title: string; hint: string }[];
  monkIntro: string; // 小僧介紹這個牌陣的話
}

export const SPREADS: Spread[] = [
  {
    id: "single",
    name: "每日一問",
    enName: "Single Card",
    description: "一張牌,一個答案。適合每日指引或簡單明確的問題。",
    cardCount: 1,
    positions: [{ title: "指引", hint: "宇宙此刻想對你說的話" }],
    monkIntro: "心中默想一個問題,小僧陪你抽一張牌,聽聽宇宙的悄悄話。",
  },
  {
    id: "three",
    name: "時之流",
    enName: "Past · Present · Future",
    description: "過去、現在、未來三張牌,看清事情的來龍去脈與走向。",
    cardCount: 3,
    positions: [
      { title: "過去", hint: "事情的根源與背景" },
      { title: "現在", hint: "當下的處境與課題" },
      { title: "未來", hint: "即將展開的方向" },
    ],
    monkIntro: "時間如溪水,小僧幫你舀起三瓢:昨日、今日、明日,各見一瓢風景。",
  },
  {
    id: "choice",
    name: "心之抉擇",
    enName: "Mind · Body · Spirit",
    description: "身、心、靈三個面向的狀態檢視,找回內在的平衡。",
    cardCount: 3,
    positions: [
      { title: "身", hint: "你的行動與現實層面" },
      { title: "心", hint: "你的情緒與感受" },
      { title: "靈", hint: "你的內在智慧想說的" },
    ],
    monkIntro: "身要安,心要靜,靈要明。讓小僧為你把把脈,看看三者可還平衡?",
  },
];

/** 洗牌:回傳打亂後的卡片陣列,每張附正/逆位 */
export interface DrawnCard {
  card: TarotCard;
  reversed: boolean;
}

/** 完整 78 張牌組(22 大阿爾克那 + 56 小阿爾克那) */
import { WANDS } from "./suitWands";
import { CUPS } from "./suitCups";
import { SWORDS } from "./suitSwords";
import { PENTACLES } from "./suitPentacles";
import type { MinorCard } from "./minorTypes";

export const MINOR_ARCANA: MinorCard[] = [...WANDS, ...CUPS, ...SWORDS, ...PENTACLES];
export const FULL_DECK: TarotCard[] = [...MAJOR_ARCANA, ...MINOR_ARCANA];

/** 判斷是否為小阿爾克那牌 */
export function isMinor(card: TarotCard): card is MinorCard {
  return (card as MinorCard).suit !== undefined;
}

export function drawCards(count: number): DrawnCard[] {
  const deck = [...FULL_DECK];
  // Fisher-Yates shuffle
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck.slice(0, count).map((card) => ({
    card,
    reversed: Math.random() < 0.35,
  }));
}
