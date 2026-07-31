import { Link } from "react-router";
import SiteHeader from "./SiteHeader";

interface WorkDetailPlaceholderProps {
  tag: string;
  year: string;
  title: string;
  subtitle: string;
}

export default function WorkDetailPlaceholder({ tag, year, title, subtitle }: WorkDetailPlaceholderProps) {
  return (
    <div className="bg-[#fff8e9] flex flex-col items-start min-h-screen w-full">
      <SiteHeader />
      <div className="flex-1 w-full flex flex-col items-start gap-10 px-[80px] py-[80px] max-[440px]:px-5 max-[440px]:py-10">
        <div
          className="flex items-center gap-3"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
        >
          <span className="text-[#e4501d] text-[14px]">{tag}</span>
          <span className="text-[#8a8a8a] text-[14px]">{year}</span>
        </div>
        <div className="flex flex-col gap-2">
          <h1
            className="text-[#161513] text-[40px] max-[440px]:text-[28px] tracking-[-1px]"
            style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 600 }}
          >
            {title}
          </h1>
          <p className="text-[#8a8a8a] text-[20px] max-[440px]:text-[16px]" style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 400 }}>
            {subtitle}
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-3 border border-dashed border-[#e5e0d0] rounded-[16px] py-[160px] max-[440px]:py-[80px]">
          <p className="text-[#8a8a8a] text-[18px]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            상세 페이지 디자인 준비 중입니다
          </p>
          <p className="text-[#c9c2ae] text-[13px]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Case study coming soon
          </p>
        </div>
        <Link
          to="/work"
          className="no-underline text-[#161513] text-[14px] hover:opacity-60 transition-opacity"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
        >
          ← Work 목록으로
        </Link>
      </div>
      <div className="w-full border-t border-[#e5e0d0]" />
      <div
        className="flex items-center justify-between px-[80px] py-10 w-full text-[12px] max-[440px]:px-5 max-[440px]:flex-col max-[440px]:items-start max-[440px]:gap-3"
        style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
      >
        <p className="text-[#8a8a8a]">LOCAL TIME · SEOUL, KOREA</p>
        <div className="flex gap-8 text-[#161513]">
          <p>INSTAGRAM</p>
          <p>LINKEDIN</p>
        </div>
      </div>
    </div>
  );
}
