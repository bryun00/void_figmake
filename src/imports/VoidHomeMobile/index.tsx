import svgPaths from "./svg-b807gtjf9u";
import ImportedLogoGroup from "@/imports/LogoGroup-1/index";
import { Link } from "react-router";


function TopMarquee() {
  const text = "currently open to freelance work · ";
  const repeated = text.repeat(8);
  return (
    <div className="bg-[#fff8e9] relative shrink-0 w-full overflow-hidden border-b border-[#e5e0d0]" data-name="top-marquee">
      <div className="py-[12px] flex">
        <div className="flex whitespace-nowrap" style={{ animation: "marquee-mobile 24s linear infinite" }}>
          <span className="text-[#8a8a8a] text-[14px] leading-[1.5]" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 400 }}>{repeated}</span>
          <span className="text-[#8a8a8a] text-[14px] leading-[1.5]" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 400 }}>{repeated}</span>
        </div>
      </div>
      <style>{`
        @keyframes marquee-mobile {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}


function MetadataDescription() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="metadata-description">
      <p className="font-['Space_Grotesk',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#e4501d] text-[20px] tracking-[-0.5px] w-full">{`uiux designer`}</p>
      <p className="font-['Manrope',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#8a8a8a] text-[14px] w-full">Hi, I design and build things on the web. I care about typography, restraint, and the space between elements as much as the elements themselves.</p>
    </div>
  );
}

function IntroStack() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="intro-stack">
      <div style={{ position: "relative", width: "300px", height: "108.24px" }}>
        <ImportedLogoGroup />
      </div>
      <MetadataDescription />
    </div>
  );
}

function NavItem() {
  return (
    <Link to="/about" className="no-underline text-[#e4501d]">
      <div className="content-stretch flex gap-[48px] items-center relative shrink-0" data-name="nav-item-01">
        <p className="relative shrink-0 text-[20px] w-[32px]">01</p>
        <p className="relative shrink-0 text-[32px] tracking-[-1px] whitespace-nowrap">About</p>
      </div>
    </Link>
  );
}

function NavItem1() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0" data-name="nav-item-02">
      <p className="relative shrink-0 text-[20px] w-[32px]">02</p>
      <p className="relative shrink-0 text-[32px] tracking-[-1px] whitespace-nowrap">Work</p>
    </div>
  );
}

function NavItem2() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0" data-name="nav-item-03">
      <p className="relative shrink-0 text-[20px] w-[32px]">03</p>
      <p className="relative shrink-0 text-[32px] tracking-[-1px] whitespace-nowrap">Contact</p>
    </div>
  );
}

function NavigationList() {
  return (
    <div className="content-stretch flex flex-col font-['Space_Grotesk',sans-serif] font-medium gap-[12px] items-start leading-[normal] pt-[24px] relative shrink-0 text-[#e4501d] w-[200px]" data-name="navigation-list">
      <NavItem />
      <NavItem1 />
      <NavItem2 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="main-content">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[240px] items-start not-italic px-[24px] py-[48px] relative size-full">
        <IntroStack />
        <NavigationList />
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
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 390 1">
            <line id="Line" stroke="var(--stroke-0, #E5E0D0)" x2="390" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <FooterContent />
    </div>
  );
}

export default function VoidHomeMobile() {
  return (
    <div className="bg-[#fff8e9] content-stretch flex flex-col items-start relative w-full min-h-[100dvh]" data-name="void-home-mobile">
      <TopMarquee />
      <MainContent />
      <FooterWrapper />
    </div>
  );
}