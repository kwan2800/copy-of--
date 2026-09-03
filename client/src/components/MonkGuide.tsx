/** 小僧引導者:小僧圖 + 對話氣泡(夜間寺院米紙氣泡) */
import { ASSETS } from "@/lib/assets";

interface Props {
  image?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

export function MonkGuide({ image = ASSETS.monkGuide, children, size = "md" }: Props) {
  const imgSize = size === "lg" ? "w-32 sm:w-40" : size === "sm" ? "w-20 sm:w-24" : "w-24 sm:w-32";
  return (
    <div className="flex items-center gap-4 sm:gap-6">
      <img src={image} alt="小僧" className={`${imgSize} shrink-0 monk-float drop-shadow-[0_8px_24px_oklch(0.78_0.13_75_/_25%)]`} draggable={false} />
      <div className="monk-bubble px-5 py-4 text-sm sm:text-base leading-relaxed shadow-lg max-w-md">
        {children}
      </div>
    </div>
  );
}
