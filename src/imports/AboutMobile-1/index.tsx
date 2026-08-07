import { useState } from "react";
import svgPaths from "./svg-hffbpgdq2x";
import DrawMenu from "@/imports/DrawMenu/index";
import imgAboutTitle from "@/imports/mobile-titles/page-about.svg";
import imgProfileHalftone from "./profile-halftone.png";

function Logo() {
  return (
    <div className="h-[20px] relative shrink-0 w-[73.15px]" data-name="logo">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 73.1504 20" width="73.1504">
        <g id="logo">
          <path d={svgPaths.p11e6f880} fill="var(--fill-0, #161513)" id="Union" />
        </g>
      </svg>
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

function Hero() {
  return (
    <div className="relative shrink-0 w-full" data-name="hero">
      <div aria-hidden className="absolute border-[#e5e0d0] border-b border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start not-italic px-[20px] py-[40px] relative size-full text-[#161513]">
        <img src={imgAboutTitle} alt="ABOUT" className="block h-[36.608px] w-[191.904px] max-w-full shrink-0" />
        <p className="font-['Space_Grotesk',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[20px] w-full">
          what color are you?
        </p>
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
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-full" data-name="member-bio">
      <p className="font-['Space_Grotesk',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#e4501d] text-[0px] w-full">
        <span className="font-['Pretendard',sans-serif] font-semibold leading-[normal] text-[24px]">윤보람</span>
        <span className="leading-[normal] text-[24px]">{` `}</span>
        <span className="leading-[normal] text-[#8a8a8a] text-[16px]">/ Boram Yun</span>
      </p>
      <div className="font-['Pretendard',sans-serif] font-medium leading-[0] relative shrink-0 text-[#161513] text-[14px] w-full whitespace-pre-wrap">
        <p className="leading-[1.5] mb-0">{`어디에나 스며들고, 무엇이든 선명하게 만드는 '무채색' 같은 사람`}</p>
        <p className="leading-[1.5] mb-0">{`어떤 색과 섞여도 이질감이 없고, `}</p>
        <p className="leading-[1.5] mb-0">동시에 곁에 있는 다른 색들을 더욱 돋보이게 만드는 무채색.</p>
        <p className="leading-[1.5]">{`저는 저 자신을 화려한 원색보다는, 팀의 조화와 본질에 집중하는 '무채색의 협력자' 라 정의합니다.`}</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="h-[380px] relative rounded-[16px] shrink-0 w-full overflow-hidden" data-name="member-portrait">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgProfileHalftone} />
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
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
          <p className="[word-break:break-word] font-['Pretendard',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#161513] text-[15px] w-full">
            침묵 속에 흐르는 단단한 책임감
          </p>
          <p className="[word-break:break-word] font-['Pretendard',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#161513] text-[14px] w-full">
            저는 먼저 나서서 목소리를 높이는 적극적인 타입은 아닙니다. 내향적인 성향은 저에게 타인의 의견을 더 깊이 경청하고, 상황을 객관적으로 파악하는 힘을 주었습니다. 화려한 말솜씨보다는 묵묵한 행동과 완벽한 업무 완수로 제 가치를 증명합니다. 맡은 바 책임을 다하는 것은 저에게 당연한 원칙이며, 그 성실함은 팀원들에게 신뢰라는 이름으로 기억됩니다
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
          <p className="[word-break:break-word] font-['Pretendard',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#161513] text-[15px] w-full">
            화려한 색깔로 시선을 끄는 사람은 아닐지 모릅니다.
          </p>
          <p className="[word-break:break-word] font-['Pretendard',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#161513] text-[14px] w-full">
            하지만 어떤 프로젝트에서도 배경이 되어 팀을 지탱하고, 때로는 가장 날카로운 직선이 되어 문제를 해결할 준비가 되어 있습니다. 저는 당신의 팀에서 어떤 색으로 존재하게 될까요?
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Space_Grotesk',sans-serif] font-semibold relative shrink-0 text-[#161513] text-[18px]">Career</p>
      <p className="font-['Pretendard',sans-serif] font-normal relative shrink-0 text-[#8a8a8a] text-[11px]">경력</p>
    </div>
  );
}

function CareerItem({
  year,
  org,
  title,
  detail,
  border = true,
}: {
  year: string;
  org: string;
  title: string;
  detail: string;
  border?: boolean;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start py-[12px] relative shrink-0 w-full" data-name="Frame">
      {border && <div aria-hidden className="absolute border-[#e5e0d0] border-b border-solid inset-0 pointer-events-none" />}
      <div className="[word-break:break-word] content-stretch flex font-['Space_Grotesk',sans-serif] font-normal items-center justify-between leading-[normal] not-italic relative shrink-0 text-[#8a8a8a] w-full whitespace-nowrap">
        <p className="relative shrink-0 text-[12px]">{year}</p>
        <p className="relative shrink-0 text-[11px] uppercase">{org}</p>
      </div>
      <p className="[word-break:break-word] font-['Space_Grotesk',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#161513] text-[14px] whitespace-nowrap">{title}</p>
      <p className="[word-break:break-word] font-['Space_Grotesk',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#8a8a8a] text-[13px] whitespace-nowrap">{detail}</p>
    </div>
  );
}

function CareerJobItem() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start py-[12px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e5e0d0] border-b border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] content-stretch flex font-['Space_Grotesk',sans-serif] font-normal items-center justify-between leading-[normal] not-italic relative shrink-0 text-[#8a8a8a] w-full whitespace-nowrap">
        <p className="relative shrink-0 text-[12px]">2022.12-</p>
      </div>
      <p className="[word-break:break-word] font-['Space_Grotesk',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#161513] text-[14px] whitespace-nowrap">
        미디어포스얼라이언스
      </p>
      <p className="[word-break:break-word] font-['Space_Grotesk',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#8a8a8a] text-[13px]">
        제안부서 디자인 시안담당
      </p>
      <p className="[word-break:break-word] font-['Space_Grotesk',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#8a8a8a] text-[13px]">
        IBK기업은행
      </p>
    </div>
  );
}

function TimelineList() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="timeline-list">
      <CareerJobItem />
      <CareerItem year="2025" org="Awwwards" title="Honorable Mention" detail="REMISE PIGAUT" />
      <CareerItem year="2024" org="Awwwards" title="Honorable Mention" detail="PLANKTON" />
      <CareerItem year="2024" org="CSS Design Awards" title="Website of the Day" detail="PARIS MANAGEMENT" />
      <CareerItem year="2023" org="Awwwards" title="Honorable Mention" detail="PARIS MANAGEMENT" />
      <CareerItem year="2023" org="Awwwards" title="Mobile Excellence" detail="PARIS MANAGEMENT" border={false} />
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
      <p className="font-['Pretendard',sans-serif] font-normal relative shrink-0 text-[#8a8a8a] text-[11px]">사용 툴</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[4px] items-start leading-[normal] relative shrink-0 text-[#161513] whitespace-nowrap">
      <p className="font-['Pretendard',sans-serif] font-semibold not-italic relative shrink-0 text-[18px]">Figma</p>
      <p className="font-['Manrope:Regular',sans-serif] font-normal relative shrink-0 text-[16px]">·</p>
      <p className="font-['Pretendard',sans-serif] font-semibold not-italic relative shrink-0 text-[18px]">Adobe</p>
      <p className="font-['Manrope:Regular',sans-serif] font-normal relative shrink-0 text-[16px]">·</p>
      <p className="font-['Pretendard',sans-serif] font-semibold not-italic relative shrink-0 text-[18px]">Sketch</p>
      <p className="font-['Manrope:Regular',sans-serif] font-normal relative shrink-0 text-[16px]">·</p>
      <p className="font-['Pretendard',sans-serif] font-semibold not-italic relative shrink-0 text-[18px]">Claude Code</p>
    </div>
  );
}

function RightContentColumn() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="right-content-column">
      <Frame14 />
    </div>
  );
}

function StackSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start py-[32px] relative shrink-0 w-full" data-name="stack-section">
      <div aria-hidden className="absolute border-[#e5e0d0] border-b border-solid inset-0 pointer-events-none" />
      <Frame12 />
      <RightContentColumn />
    </div>
  );
}

function ApproachSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pt-[32px] relative shrink-0 w-full" data-name="approach-section">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap">
        <p className="font-['Space_Grotesk',sans-serif] font-semibold relative shrink-0 text-[#161513] text-[18px]">Approach</p>
        <p className="font-['Pretendard',sans-serif] font-normal relative shrink-0 text-[#8a8a8a] text-[11px]">작업할 때 중요하게 생각하는 것</p>
      </div>
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
          <p className="[word-break:break-word] font-['Pretendard',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#161513] text-[15px] w-full">
            합리와 납득을 바탕으로 한 유연한 소통
          </p>
          <p className="[word-break:break-word] font-['Pretendard',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#161513] text-[14px] w-full">
            좋은 게 좋은 것이라는 마음으로 동료들을 배려하고 포용하지만, 제가 지키는 선은 명확합니다. 자신의 이득을 위해 근거 없이 타 팀을 비난하거나, 업무의 본질을 흐리는 비합리적인 상황 앞에서는 무채색이 가진 특유의 차가운 선명함을 드러냅니다. 무조건적인 수용이 아닌, 올바른 가치관 위에서 협업하기에 제 배려에는 무게가 있고 제 약속에는 힘이 있습니다.
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
          <p className="[word-break:break-word] font-['Pretendard',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#161513] text-[15px] w-full">
            합리와 납득을 바탕으로 한 유연한 소통
          </p>
          <p className="[word-break:break-word] font-['Pretendard',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#161513] text-[14px] w-full">
            진정한 협업은 서로에 대한 이해와 논리적인 &apos;납득&apos;에서 시작된다고 믿습니다. 감정적인 대립보다는 대화를 통해 접점을 찾고, 공동의 목표를 위해 최선의 효율을 내는 소통 방식을 지향합니다. 덕분에 지금까지 다양한 팀과 협업하며 마찰 없이 매끄러운 관계를 유지해 왔습니다.
          </p>
        </div>
      </div>
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
        <ApproachSection />
      </div>
    </div>
  );
}

function Frame13() {
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
        <Frame13 />
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

export default function AboutMobile() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-[#fff8e9] content-stretch flex flex-col items-start relative size-full" data-name="about-mobile">
      <Header onOpen={() => setMenuOpen(true)} />
      <Hero />
      <Biography />
      <FooterWrapper />
      {menuOpen && (
        <div className="fixed inset-0 z-50">
          <DrawMenu onClose={() => setMenuOpen(false)} />
        </div>
      )}
    </div>
  );
}