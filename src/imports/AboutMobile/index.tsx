import imgMemberPortrait from "./7141806a1e74f7972c04338b914fc893c70dfca8.png";
import imgLogo from "@/imports/image.png";
import { Link } from "react-router";
import Title from "@/imports/Title/index";

function Logo() {
  return (
    <Link to="/" className="no-underline">
      <img src={imgLogo} alt="VOID logo" className="h-[20px] w-auto object-contain" />
    </Link>
  );
}

function Hamburger() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 size-[24px]" data-name="hamburger">
      <div className="bg-[#161513] h-[2px] relative rounded-[1px] shrink-0 w-[24px]" data-name="line-1" />
      <div className="bg-[#161513] h-[2px] relative rounded-[1px] shrink-0 w-[24px]" data-name="line-2" />
      <div className="bg-[#161513] h-[2px] relative rounded-[1px] shrink-0 w-[24px]" data-name="line-3" />
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="navigation">
      <Hamburger />
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="header">
      <div aria-hidden className="absolute border-[#e5e0d0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] py-[16px] relative size-full">
          <Logo />
          <Navigation />
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="relative shrink-0 w-full" data-name="hero">
      <div aria-hidden className="absolute border-[#e5e0d0] border-b border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start not-italic px-[20px] py-[40px] relative size-full text-[#e4501d]">
        <div style={{ position: "relative", width: "332.14px", height: "63.36px" }}>
          <Title />
        </div>
        <p className="font-['Pretendard',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[22px] w-full">{`우리는, 고객사와 '함께 고민하고, 함께 쓰는' Web/Creative 파트너입니다.`}</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Space_Grotesk',sans-serif] font-semibold relative shrink-0 text-[#161513] text-[18px]">Profile</p>
      <p className="font-['Pretendard',sans-serif] font-normal relative shrink-0 text-[#8a8a8a] text-[11px]">프로필</p>
    </div>
  );
}

function MemberBio() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="member-bio">
      <p className="font-['Space_Grotesk',sans-serif] font-bold leading-[0] relative shrink-0 text-[#e4501d] text-[0px] w-full">
        <span className="leading-[normal] text-[24px]">{`윤보람 `}</span>
        <span className="leading-[normal] text-[#8a8a8a] text-[16px]">
          / Boram Yun
        </span>
      </p>
      <p className="font-['Pretendard',sans-serif] font-normal leading-[1.7] not-italic relative shrink-0 text-[#161513] text-[14px] w-full">인간 중심적 가치를 탐구하는 웹 디자이너이자 디렉터입니다. 에이전시 및 스타트업에서의 다양한 경험을 거쳐, 2022년 maithi 스튜디오를 설립하였습니다. 클라이언트의 비전과 철학이 조화를 이루는 최상의 완성도를 지향하며, 구조적으로 아름답고 깊이 있는 웹 경험을 일구어가고 있습니다.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="h-[380px] relative rounded-[16px] shrink-0 w-full" data-name="member-portrait">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgMemberPortrait} />
      </div>
      <MemberBio />
    </div>
  );
}

function ProfileSection() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start py-[32px] relative shrink-0 w-full" data-name="profile-section">
      <div aria-hidden className="absolute border-[#e5e0d0] border-b border-solid inset-0 pointer-events-none" />
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Space_Grotesk',sans-serif] font-semibold relative shrink-0 text-[#161513] text-[18px]">My Values</p>
      <p className="font-['Pretendard',sans-serif] font-normal relative shrink-0 text-[#8a8a8a] text-[11px]">핵심 가치</p>
    </div>
  );
}

function ValuesSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start py-[32px] relative shrink-0 w-full" data-name="values-section">
      <div aria-hidden className="absolute border-[#e5e0d0] border-b border-solid inset-0 pointer-events-none" />
      <Frame2 />
      <p className="[word-break:break-word] font-['Geist_Mono:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#8a8a8a] text-[11px] uppercase w-full">Atmosphere</p>
      <p className="[word-break:break-word] font-['Pretendard',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#161513] text-[15px] w-full">무엇보다 신뢰와 교감을 소중히 여깁니다. 지속적이고 건강한 소통을 통해 고객사와의 깊은 이해를 넓히고 방향성을 공유합니다.</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Space_Grotesk',sans-serif] font-semibold relative shrink-0 text-[#161513] text-[18px]">Career</p>
      <p className="font-['Pretendard',sans-serif] font-normal relative shrink-0 text-[#8a8a8a] text-[11px]">경력 및 수상</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Space_Grotesk',sans-serif] font-normal items-center justify-between leading-[normal] not-italic relative shrink-0 text-[#8a8a8a] w-full whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[12px]">2025</p>
      <p className="relative shrink-0 text-[11px] uppercase">Awwwards</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start py-[12px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e5e0d0] border-b border-solid inset-0 pointer-events-none" />
      <Frame5 />
      <p className="[word-break:break-word] font-['Space_Grotesk',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#161513] text-[14px] whitespace-nowrap">Honorable Mention</p>
      <p className="[word-break:break-word] font-['Space_Grotesk',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#8a8a8a] text-[13px] whitespace-nowrap">PATRICK DRUIN S03</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Space_Grotesk',sans-serif] font-normal items-center justify-between leading-[normal] not-italic relative shrink-0 text-[#8a8a8a] w-full whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[12px]">2025</p>
      <p className="relative shrink-0 text-[11px] uppercase">Awwwards</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start py-[12px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e5e0d0] border-b border-solid inset-0 pointer-events-none" />
      <Frame7 />
      <p className="[word-break:break-word] font-['Space_Grotesk',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#161513] text-[14px] whitespace-nowrap">Honorable Mention</p>
      <p className="[word-break:break-word] font-['Space_Grotesk',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#8a8a8a] text-[13px] whitespace-nowrap">REMISE PIGAUT</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Space_Grotesk',sans-serif] font-normal items-center justify-between leading-[normal] not-italic relative shrink-0 text-[#8a8a8a] w-full whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[12px]">2024</p>
      <p className="relative shrink-0 text-[11px] uppercase">Awwwards</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start py-[12px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e5e0d0] border-b border-solid inset-0 pointer-events-none" />
      <Frame9 />
      <p className="[word-break:break-word] font-['Space_Grotesk',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#161513] text-[14px] whitespace-nowrap">Honorable Mention</p>
      <p className="[word-break:break-word] font-['Space_Grotesk',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#8a8a8a] text-[13px] whitespace-nowrap">PLANKTON STUDY</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Space_Grotesk',sans-serif] font-normal items-center justify-between leading-[normal] not-italic relative shrink-0 text-[#8a8a8a] w-full whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[12px]">2024</p>
      <p className="relative shrink-0 text-[11px] uppercase">CSSDA</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start py-[12px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-0 border-[#e5e0d0] border-solid inset-0 pointer-events-none" />
      <Frame11 />
      <p className="[word-break:break-word] font-['Space_Grotesk',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#161513] text-[14px] whitespace-nowrap">Website of Day</p>
      <p className="[word-break:break-word] font-['Space_Grotesk',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#8a8a8a] text-[13px] whitespace-nowrap">PARIS MANAGEMENT</p>
    </div>
  );
}

function TimelineList() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="timeline-list">
      <Frame4 />
      <Frame6 />
      <Frame8 />
      <Frame10 />
    </div>
  );
}

function CareerSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start py-[32px] relative shrink-0 w-full" data-name="career-section">
      <div aria-hidden className="absolute border-[#e5e0d0] border-b border-solid inset-0 pointer-events-none" />
      <Frame3 />
      <TimelineList />
    </div>
  );
}

function Frame12() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Space_Grotesk',sans-serif] font-semibold relative shrink-0 text-[#161513] text-[18px]">Stack</p>
      <p className="font-['Pretendard',sans-serif] font-normal relative shrink-0 text-[#8a8a8a] text-[11px]">사용 기술 및 도구</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-white content-stretch flex items-start px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e0d0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Space_Grotesk',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#161513] text-[13px] whitespace-nowrap">Figma</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-white content-stretch flex items-start px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e0d0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Space_Grotesk',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#161513] text-[13px] whitespace-nowrap">Adobe CC</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-white content-stretch flex items-start px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e0d0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Space_Grotesk',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#161513] text-[13px] whitespace-nowrap">HTML/CSS</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-white content-stretch flex items-start px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e0d0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Space_Grotesk',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#161513] text-[13px] whitespace-nowrap">React</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-white content-stretch flex items-start px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e0d0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Space_Grotesk',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#161513] text-[13px] whitespace-nowrap">TypeScript</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-white content-stretch flex items-start px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e0d0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Space_Grotesk',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#161513] text-[13px] whitespace-nowrap">Tailwind</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame14 />
      <Frame15 />
      <Frame16 />
      <Frame17 />
      <Frame18 />
      <Frame19 />
    </div>
  );
}

function StackSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pt-[32px] relative shrink-0 w-full" data-name="stack-section">
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Biography() {
  return (
    <div className="relative shrink-0 w-full" data-name="biography">
      <div className="content-stretch flex flex-col items-start pb-[48px] px-[20px] relative size-full">
        <ProfileSection />
        <ValuesSection />
        <CareerSection />
        <StackSection />
      </div>
    </div>
  );
}

function Frame20() {
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
        <Frame20 />
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
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 390 1">
            <line id="Line" stroke="var(--stroke-0, #E5E0D0)" x2="390" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <FooterContent />
    </div>
  );
}

export default function AboutMobile() {
  return (
    <div className="bg-[#fff8e9] content-stretch flex flex-col items-start relative size-full" data-name="about-mobile">
      <Header />
      <Hero />
      <Biography />
      <FooterWrapper />
    </div>
  );
}