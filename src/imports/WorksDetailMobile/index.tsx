import { useState } from "react";
import svgPaths from "./svg-sgds1891ay";
import DrawMenu from "@/imports/DrawMenu/index";
import imgHeroMockup from "./16157e464f9995eabe4b29aedace4290bb468547.png";
import imgImage3910 from "./dccf75f95eccbed9a6133b0956ac253f93553d01.png";
import imgImage3909 from "./2e7c08f52afb3d897109b9856a839c428f8655ea.png";
import imgImage3911 from "./d304ed481b20aaec910b3377fd4d06936f5e127e.png";
import imgImage3912 from "./78d25a414571a3ca031139e4513bf789a95343c9.png";
import imgImage3913 from "./c2a3b3cfc95920a9a87d3289d74589bbc1319482.png";
import imgImage3914 from "./c6df23ed3e93e30cfff4e02f6e69279f4b045728.png";

function Logo() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[2px] items-baseline not-italic relative shrink-0 text-[#161513] whitespace-nowrap" data-name="logo">
      <p className="font-['TheNightWatch_:Regular',sans-serif] leading-none relative shrink-0 text-[28px]">VOID</p>
      <p className="font-['Space_Grotesk',sans-serif] font-bold leading-[normal] relative shrink-0 text-[11px]">™</p>
    </div>
  );
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

function ArrowLeft() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow-left">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="arrow-left">
          <path d={svgPaths.pe197860} id="Vector" stroke="var(--stroke-0, #E4501D)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BackNav() {
  return (
    <div className="relative shrink-0 w-full" data-name="back-nav">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pt-[20px] px-[20px] relative size-full">
          <ArrowLeft />
          <p className="[word-break:break-word] font-['Space_Grotesk',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#e4501d] text-[13px] whitespace-nowrap">Back to works</p>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex font-['Pretendard',sans-serif] font-medium gap-[12px] items-start leading-[1.5] relative shrink-0 text-[14px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#e4501d]">구축</p>
      <p className="relative shrink-0 text-[#8a8a8a]">2025</p>
    </div>
  );
}

function CaseHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="case-header">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic pb-[32px] pt-[24px] px-[20px] relative size-full">
        <Frame21 />
        <div className="font-['Pretendard',sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#161513] text-[24px] w-[min-content]">
          <p className="leading-[normal] mb-0">IBK 기업은행</p>
          <p className="leading-[normal]">개인스마트뱅킹 APP 3.0전면 개편</p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-baseline justify-between leading-[1.5] relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Pretendard',sans-serif] font-semibold relative shrink-0 text-[#8a8a8a]">Client</p>
      <p className="font-['Pretendard',sans-serif] font-medium relative shrink-0 text-[#161513]">IBK 기업은행</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex font-['Pretendard',sans-serif] font-semibold items-baseline justify-between leading-[1.5] relative shrink-0 w-full" data-name="Frame">
      <p className="relative shrink-0 text-[#8a8a8a]">Duration</p>
      <p className="relative shrink-0 text-[#161513]">2025.01-2025.09</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-baseline justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Pretendard',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#8a8a8a]">Contribution</p>
      <div className="font-['Pretendard',sans-serif] font-medium leading-[0] relative shrink-0 text-[#161513] text-right">
        <p className="leading-[1.5] mb-0">디자인 100%</p>
        <p className="leading-[1.5]">(프로젝트 중 기여도 100%작업물만 첨부)</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-baseline justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Pretendard',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#8a8a8a]">Role</p>
      <div className="font-['Pretendard',sans-serif] font-medium leading-[0] relative shrink-0 text-[#161513] text-right">
        <p className="leading-[1.5] mb-0">부pl , 디자인 시스템관리,</p>
        <p className="leading-[1.5]">{`제안부터 구축까지 참여 `}</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex font-['Pretendard',sans-serif] font-semibold items-baseline justify-between leading-[1.5] relative shrink-0 w-full" data-name="Frame">
      <p className="relative shrink-0 text-[#8a8a8a]">Tools</p>
      <p className="relative shrink-0 text-[#161513]">Figma , photoshop</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[14px] w-full">
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 w-full whitespace-nowrap">
      <p className="font-['Space_Grotesk',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#161513] text-[20px]">Project overview</p>
      <Frame12 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-[350px]" data-name="Frame">
      <p className="font-['Space_Grotesk',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#161513] text-[20px] whitespace-nowrap">Concept</p>
      <div className="font-['Pretendard',sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#8a8a8a] text-[14px] w-[min-content] whitespace-pre-wrap">
        <p className="leading-[1.5] mb-0">{`사용자 중심의 은행앱이 되기위한 리뉴얼을 진행하였습니다. `}</p>
        <p className="leading-[1.5]">{`고객의 금융 이용 경험을 혁신하기 위한 전체 적인 서비스 구조를 재정비 하고,  UI/UX 디자인을 전면 개편, 금융 서비스에 특화된 인터페이스 설계에 집중했습니다. `}</p>
      </div>
    </div>
  );
}

function ProjectMetaBox() {
  return (
    <div className="relative shrink-0 w-full" data-name="project-meta-box">
      <div className="content-stretch flex flex-col gap-[40px] items-start p-[20px] relative size-full">
        <Frame22 />
        <Frame5 />
        <div className="h-0 relative shrink-0 w-[350px]" data-name="footer-divider">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 350 1" width="350">
              <line id="footer-divider" stroke="var(--stroke-0, #E5E0D0)" x2="350" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="h-[240px] relative shrink-0 w-full" data-name="hero-mockup">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHeroMockup} />
      </div>
      <ProjectMetaBox />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 text-[#161513] text-[20px] whitespace-nowrap">
      <p className="font-['Space_Grotesk',sans-serif] font-semibold relative shrink-0">Random game</p>
      <p className="font-['Pretendard',sans-serif] font-semibold relative shrink-0">[랜덤게임 3종]</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard',sans-serif] font-medium gap-[4px] items-start leading-[0] relative shrink-0 text-[#8a8a8a] w-full">
      <ul className="block relative shrink-0 w-full">
        <li className="list-disc ms-[21px] whitespace-pre-wrap">
          <span className="leading-[1.5]">{`게임 진행시 비주얼 위주로 게이미피케이션                            적금이라는 것을 강조`}</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="list-disc ms-[21px] whitespace-pre-wrap">
          <span className="leading-[1.5]">{`3D 일러스트나, 이미지를 사용하여 젊은 이미지를                   나타내고 싶음`}</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="list-disc ms-[21px]">
          <span className="leading-[1.5]">우대금리가 높다는 것을 결과 페이지 강조</span>
        </li>
      </ul>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[14px] w-full">
      <p className="font-['Pretendard',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#161513] whitespace-nowrap">Clients needs</p>
      <Frame13 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard',sans-serif] font-medium gap-[4px] items-start leading-[0] relative shrink-0 text-[#8a8a8a]">
      <ul className="block relative shrink-0">
        <li className="list-disc ms-[21px]">
          <span className="leading-[1.5]">게이미피케이션 카테고리를 활성화로 고객 유입을 증가</span>
        </li>
      </ul>
      <ul className="block relative shrink-0">
        <li className="list-disc ms-[21px]">
          <span className="leading-[1.5]">우대금리를 이용하여 적금가입 유도</span>
        </li>
      </ul>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[14px] w-full whitespace-nowrap">
      <p className="font-['Pretendard',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#161513]">Main purpose</p>
      <Frame16 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard',sans-serif] font-medium gap-[4px] items-start leading-[0] relative shrink-0 text-[#8a8a8a]">
      <ul className="block relative shrink-0">
        <li className="list-disc ms-[21px]">
          <span className="leading-[1.5]">{`게이미피케이션 요소를 추가하여 고객참여 유도 `}</span>
        </li>
      </ul>
      <ul className="block relative shrink-0">
        <li className="list-disc ms-[21px]">
          <span className="leading-[1.5]">젊은 이미지로 탈바꿈</span>
        </li>
      </ul>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[14px] w-full whitespace-nowrap">
      <p className="font-['Pretendard',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#161513]">Solution</p>
      <Frame18 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <Frame23 />
      <Frame14 />
      <Frame15 />
      <Frame17 />
    </div>
  );
}

function ProcessContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="process-content">
      <div className="content-stretch flex flex-col items-start px-[20px] py-[32px] relative size-full">
        <Frame6 />
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <div className="aspect-[2558/1664] relative shrink-0 w-full" data-name="image 3910">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3910} />
      </div>
      <div className="aspect-[2560/1664] relative shrink-0 w-full" data-name="image 3909">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3909} />
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 text-[#161513] text-[20px] whitespace-nowrap">
      <p className="font-['Space_Grotesk',sans-serif] font-semibold relative shrink-0">chatbot</p>
      <p className="font-['Pretendard',sans-serif] font-semibold relative shrink-0">[챗봇]</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard',sans-serif] font-medium gap-[4px] items-start leading-[0] relative shrink-0 text-[#8a8a8a] w-full">
      <ul className="block relative shrink-0 w-full">
        <li className="list-disc ms-[21px]">
          <span className="leading-[1.5]">솔루션 사용, 촉박한 일정으로 큰 변화를 원하지 않음</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="list-disc ms-[21px]">
          <span className="leading-[1.5]">개발이슈가 없는 한에서 디자인 적으로 변경을 원함</span>
        </li>
      </ul>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[14px] w-full">
      <p className="font-['Pretendard',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#161513] whitespace-nowrap">Clients needs</p>
      <Frame25 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <Frame24 />
      <Frame20 />
    </div>
  );
}

function ProcessContent1() {
  return (
    <div className="relative shrink-0 w-full" data-name="process-content">
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-[32px] pt-[52px] px-[20px] relative size-full">
        <div className="h-0 relative shrink-0 w-[350px]" data-name="footer-divider">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 350 1" width="350">
              <line id="footer-divider" stroke="var(--stroke-0, #E5E0D0)" x2="350" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Frame7 />
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <div className="aspect-[2558/1664] relative shrink-0 w-full" data-name="image 3910">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3911} />
      </div>
      <div className="aspect-[1576/4096] relative shrink-0 w-full" data-name="image 3911">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3912} />
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 text-[#161513] text-[20px] whitespace-nowrap">
      <p className="font-['Space_Grotesk',sans-serif] font-semibold relative shrink-0">{`etc `}</p>
      <p className="font-['Pretendard',sans-serif] font-semibold relative shrink-0">[알림함, 스플래시, 내정보, vip class, 환율]</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <ul className="[word-break:break-word] block font-['Pretendard',sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#8a8a8a] text-[14px] w-full">
        <li className="list-disc ms-[21px]">
          <span className="leading-[1.5]">디자인시스템을 준수하고 기업은행의 아이덴티티를 담아냄</span>
        </li>
      </ul>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Pretendard',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#161513] text-[14px] whitespace-nowrap">Concept</p>
      <Frame29 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame27 />
      <Frame28 />
    </div>
  );
}

function ProcessContent2() {
  return (
    <div className="relative shrink-0 w-full" data-name="process-content">
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-[32px] pt-[52px] px-[20px] relative size-full">
        <div className="h-0 relative shrink-0 w-[350px]" data-name="footer-divider">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 350 1" width="350">
              <line id="footer-divider" stroke="var(--stroke-0, #E5E0D0)" x2="350" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Frame8 />
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start pb-[52px] relative shrink-0 w-full">
      <div className="aspect-[2558/1664] relative shrink-0 w-full" data-name="image 3910">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3913} />
      </div>
      <div className="aspect-[2560/3152] relative shrink-0 w-full" data-name="image 3912">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3914} />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Space_Grotesk',sans-serif] font-normal relative shrink-0 text-[#8a8a8a] text-[11px]">NEXT PROJECT</p>
      <p className="font-['Space_Grotesk',sans-serif] font-semibold relative shrink-0 text-[#161513] text-[16px]">BK 기업은행 개인스마트뱅킹 APP 제안 시안</p>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="arrow-right">
          <path d={svgPaths.p2df9a900} id="Vector" stroke="var(--stroke-0, #E4501D)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NextProjectBanner() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] relative shrink-0 w-full" data-name="next-project-banner">
      <div aria-hidden className="absolute border-[#e5e0d0] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative size-full">
          <Frame9 />
          <ArrowRight />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
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
        <Frame10 />
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

export default function WorksDetailMobile() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-[#fff8e9] content-stretch flex flex-col items-start relative size-full" data-name="works-detail-mobile">
      <Header onOpen={() => setMenuOpen(true)} />
      <BackNav />
      <CaseHeader />
      <Frame11 />
      <ProcessContent />
      <Frame19 />
      <ProcessContent1 />
      <Frame26 />
      <ProcessContent2 />
      <Frame30 />
      <NextProjectBanner />
      <FooterWrapper />
      {menuOpen && (
        <div className="fixed inset-0 z-50">
          <DrawMenu onClose={() => setMenuOpen(false)} />
        </div>
      )}
    </div>
  );
}