import { useState } from "react";
import imgProjectMockup from "./5feedae39629b36880c2b033096a12abbf624b76.png";
import imgProjectMockup1 from "./e355088863662242ab2796cf85ef43a5fb3ba2cb.png";
import imgProjectMockup2 from "./57317e361b4588416742b30ac8e1ee04301a9821.png";
import DrawMenu from "@/imports/DrawMenu/index";
import MobileLogo from "@/app/components/MobileLogo";

function Logo() {
  return <MobileLogo />;
}

function Hamburger() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-end justify-center relative shrink-0 size-[24px]" data-name="hamburger">
      <div className="bg-[#161513] h-[1.5px] relative rounded-[1px] shrink-0 w-[22px]" data-name="line-1" />
      <div className="bg-[#161513] h-[1.5px] relative rounded-[1px] shrink-0 w-[16px]" data-name="line-2" />
      <div className="bg-[#161513] h-[1.5px] relative rounded-[1px] shrink-0 w-[22px]" data-name="line-3" />
    </div>
  );
}

function Navigation({ onOpen }: { onOpen: () => void }) {
  return (
    <button onClick={onOpen} className="content-stretch flex items-center relative shrink-0 bg-transparent border-none p-0 cursor-pointer" data-name="navigation">
      <Hamburger />
    </button>
  );
}

function Header({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="header">
      <div aria-hidden className="absolute border-[#e5e0d0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] py-[16px] relative size-full">
          <Logo />
          <Navigation onOpen={onOpen} />
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="relative shrink-0 w-full" data-name="hero">
      <div aria-hidden className="absolute border-[#e5e0d0] border-b border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start not-italic px-[20px] py-[40px] relative size-full text-[#161513]">
        <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['TheNightWatch_:Regular',sans-serif] leading-[normal] relative shrink-0 text-[52px] tracking-[-1.04px] w-full">Works</p>
        <p className="font-['Pretendard',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[22px] w-full">우리의 상상력은 정교한 설계와 단순한 아름다움을 만나 현실이 됩니다.</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div aria-hidden className="absolute border-[#e4501d] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Space_Grotesk',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#e4501d] text-[24px] whitespace-nowrap">All</p>
      <p className="[word-break:break-word] font-['Space_Grotesk',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#8a8a8a] text-[22px] whitespace-nowrap">4</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center not-italic relative shrink-0 whitespace-nowrap">
      <p className="font-['Space_Grotesk',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#161513] text-[24px]">Product</p>
      <p className="font-['Space_Grotesk',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#8a8a8a] text-[22px]">1</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center not-italic relative shrink-0 whitespace-nowrap">
      <p className="font-['Space_Grotesk',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#161513] text-[24px]">Marketing</p>
      <p className="font-['Space_Grotesk',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#8a8a8a] text-[22px]">1</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center not-italic relative shrink-0 whitespace-nowrap">
      <p className="font-['Space_Grotesk',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#161513] text-[24px]">etc</p>
      <p className="font-['Space_Grotesk',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#8a8a8a] text-[22px]">2</p>
    </div>
  );
}

function NavItem() {
  return (
    <div className="relative shrink-0 w-full" data-name="nav-item-02">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-[32px] items-center p-[24px] relative size-full">
          <Frame1 />
          <Frame2 />
          <Frame3 />
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex font-['Pretendard',sans-serif] font-normal items-center justify-between leading-[1.4] relative shrink-0 text-[12px] w-full whitespace-nowrap">
      <p className="relative shrink-0 text-[#e4501d]">이벤트</p>
      <p className="relative shrink-0 text-[#8a8a8a]">2023</p>
    </div>
  );
}

function LeftLabelColumn() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-full" data-name="left-label-column">
      <Frame5 />
      <div className="font-['Pretendard',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#161513] text-[18px] w-full whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">하나은행 기업뱅킹 app</p>
        <p className="leading-[normal]">{`개편안내  `}</p>
      </div>
    </div>
  );
}

function WorkCard1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="work-card-01">
      <div className="h-[220px] relative rounded-[16px] shrink-0 w-full" data-name="project-mockup">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgProjectMockup} />
      </div>
      <LeftLabelColumn />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex font-['Pretendard',sans-serif] font-normal items-center justify-between leading-[1.4] relative shrink-0 text-[12px] w-full whitespace-nowrap">
      <p className="relative shrink-0 text-[#e4501d]">랜딩페이지</p>
      <p className="relative shrink-0 text-[#8a8a8a]">2024</p>
    </div>
  );
}

function LeftLabelColumn1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-full" data-name="left-label-column">
      <Frame6 />
      <div className="font-['Pretendard',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#161513] text-[18px] w-full whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">하나은행 기업뱅킹 모바일 웹</p>
        <p className="leading-[normal]">{`법인비대면계좌개설  `}</p>
      </div>
    </div>
  );
}

function WorkCard2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="work-card-02">
      <div className="h-[220px] relative rounded-[16px] shrink-0 w-full" data-name="project-mockup">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgProjectMockup1} />
      </div>
      <LeftLabelColumn1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex font-['Pretendard',sans-serif] font-normal items-center justify-between leading-[1.4] relative shrink-0 text-[12px] w-full whitespace-nowrap">
      <p className="relative shrink-0 text-[#e4501d]">이벤트</p>
      <p className="relative shrink-0 text-[#8a8a8a]">2023</p>
    </div>
  );
}

function LeftLabelColumn2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-full" data-name="left-label-column">
      <Frame7 />
      <div className="font-['Pretendard',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#161513] text-[18px] w-full">
        <p className="leading-[normal] mb-0">하나은행 기업뱅킹</p>
        <p className="leading-[normal]">비대면 계좌개설 이벤트</p>
      </div>
    </div>
  );
}

function WorkCard3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="work-card-03">
      <div className="h-[220px] relative rounded-[16px] shrink-0 w-full" data-name="project-mockup">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgProjectMockup2} />
      </div>
      <LeftLabelColumn2 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex font-['Pretendard',sans-serif] font-normal items-center justify-between leading-[1.4] relative shrink-0 text-[12px] w-full whitespace-nowrap">
      <p className="relative shrink-0 text-[#e4501d]">이벤트</p>
      <p className="relative shrink-0 text-[#8a8a8a]">2023</p>
    </div>
  );
}

function LeftLabelColumn3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-full" data-name="left-label-column">
      <Frame8 />
      <div className="font-['Pretendard',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#161513] text-[18px] w-full">
        <p className="leading-[normal] mb-0">하나은행 기업뱅킹</p>
        <p className="leading-[normal]">비대면 계좌개설 이벤트</p>
      </div>
    </div>
  );
}

function WorkCard() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="work-card-03">
      <div className="h-[220px] relative rounded-[16px] shrink-0 w-full" data-name="project-mockup">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgProjectMockup2} />
      </div>
      <LeftLabelColumn3 />
    </div>
  );
}

function WorksGrid() {
  return (
    <div className="relative shrink-0 w-full" data-name="works-grid">
      <div className="content-stretch flex flex-col gap-[36px] items-start pb-[52px] pt-[32px] px-[20px] relative size-full">
        <WorkCard1 />
        <WorkCard2 />
        <WorkCard3 />
        <WorkCard />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col font-['Space_Grotesk',sans-serif] font-medium gap-[6px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="relative shrink-0 text-[#8a8a8a] text-[11px] tracking-[0.0055px] uppercase">LOCAL TIME</p>
      <p className="relative shrink-0 text-[#161513] text-[13px]">SEOUL, KOREA · 10:41 PM KST</p>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="content-stretch flex font-['Space_Grotesk',sans-serif] font-semibold gap-[24px] items-start relative shrink-0 text-[#161513] text-[12px] tracking-[0.006px] uppercase" data-name="social-links">
      <p className="relative shrink-0">INSTAGRAM</p>
      <p className="relative shrink-0">LINKEDIN</p>
      <p className="relative shrink-0">READ.CV</p>
    </div>
  );
}

function FooterContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="footer-content">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start leading-[normal] not-italic pb-[32px] pt-[28px] px-[20px] relative size-full whitespace-nowrap">
        <Frame />
        <SocialLinks />
        <p className="font-['Space_Grotesk',sans-serif] font-normal relative shrink-0 text-[#8a8a8a] text-[11px]">© 2026 VOID. All rights reserved.</p>
      </div>
    </div>
  );
}

function FooterWrapper() {
  return (
    <div className="bg-[#fff8e9] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="footer-wrapper">
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 390 1" width="390">
            <line id="Line" stroke="var(--stroke-0, #E5E0D0)" x2="390" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <FooterContent />
    </div>
  );
}

export default function WorksListMobile() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-[#fff8e9] content-stretch flex flex-col items-start relative size-full" data-name="works-list-mobile">
      <Header onOpen={() => setMenuOpen(true)} />
      <Hero />
      <NavItem />
      <WorksGrid />
      <FooterWrapper />
      {menuOpen && (
        <div className="fixed inset-0 z-50">
          <DrawMenu onClose={() => setMenuOpen(false)} />
        </div>
      )}
    </div>
  );
}