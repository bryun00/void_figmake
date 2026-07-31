import { useState } from "react";
import { productCards } from "@/imports/Biography/index";
import { marketingCards } from "@/imports/Biography-1/index";
import { etcCards } from "@/imports/Biography-2/index";

const allCards = [...productCards, ...marketingCards, ...etcCards];
const INITIAL_VISIBLE = 9;

export default function WorkAllList() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const hasMore = visibleCount < allCards.length;

  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center pb-[100px] pl-[72px] pr-[80px] relative size-full" data-name="biography">
      <div className="content-stretch flex flex-wrap gap-x-[52px] items-start relative w-full">
        {allCards.slice(0, visibleCount)}
      </div>
      {hasMore && (
        <button
          type="button"
          onClick={() => setVisibleCount(allCards.length)}
          className="font-['Pretendard',sans-serif] font-semibold text-[16px] text-[#e4501d] bg-transparent border-none border-b border-solid border-[#e4501d] cursor-pointer pb-[2px]"
        >
          더보기
        </button>
      )}
    </div>
  );
}
