function TopMarquee() {
  return (
    <div className="bg-[#fff8e9] relative shrink-0 w-full" data-name="top-marquee">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[40px] py-[16px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard',sans-serif] font-normal leading-[1.5] min-w-px not-italic overflow-hidden relative text-[#8a8a8a] text-[14px] text-ellipsis whitespace-nowrap">{`currently open to freelance work · currently open to freelance work · currently open to freelance work · currently open to freelance work · currently open to freelance work · currently open to freelance work · `}</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e5e0d0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function LogoGroup() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 text-[#e4501d]" data-name="logo-group">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['TheNightWatch_:Regular',sans-serif] leading-none relative shrink-0 text-[180px] tracking-[-4px] whitespace-nowrap">VOID</p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Space_Grotesk',sans-serif] font-bold leading-[normal] relative shrink-0 text-[40px] w-[23px]">™</p>
    </div>
  );
}

function MetadataDescription() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="metadata-description">
      <p className="font-['Space_Grotesk',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#e4501d] text-[32px] tracking-[-1px] w-[min-content]">{`uiux designer `}</p>
      <div className="font-['Space_Grotesk',sans-serif] font-normal leading-[0] relative shrink-0 text-[#8a8a8a] text-[22px] w-[680px]">
        <p className="leading-[1.6] mb-0">Hi, I design and build things on the web.</p>
        <p className="leading-[1.6] mb-0">I care about typography, restraint, and the space</p>
        <p className="leading-[1.6]">between elements as much as the elements themselves.</p>
      </div>
    </div>
  );
}

function IntroStack() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="intro-stack">
      <LogoGroup />
      <MetadataDescription />
    </div>
  );
}

function NavItem() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0" data-name="nav-item-01">
      <p className="relative shrink-0 text-[20px] w-[32px]">01</p>
      <p className="relative shrink-0 text-[32px] tracking-[-1px] whitespace-nowrap">About</p>
    </div>
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
    <div className="content-stretch flex flex-col font-['Space_Grotesk',sans-serif] font-medium gap-[12px] items-start leading-[normal] pt-[24px] relative shrink-0 text-[#e4501d] w-full" data-name="navigation-list">
      <NavItem />
      <NavItem1 />
      <NavItem2 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="main-content">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[304px] items-start not-italic pb-[80px] pt-[120px] px-[160px] relative size-full">
        <IntroStack />
        <NavigationList />
      </div>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 text-[#161513]" data-name="social-links">
      <p className="relative shrink-0">INSTAGRAM</p>
      <p className="relative shrink-0">LINKEDIN</p>
    </div>
  );
}

function FooterContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="footer-content">
      <div className="flex flex-row items-center size-full">
        <div className="[word-break:break-word] content-stretch flex font-['Space_Grotesk',sans-serif] font-medium items-center justify-between leading-[normal] not-italic px-[160px] py-[40px] relative size-full text-[14px] tracking-[0.007px] uppercase whitespace-nowrap">
          <p className="relative shrink-0 text-[#8a8a8a]">LOCAL TIME · SEOUL, KOREA</p>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

function FooterWrapper() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="footer-wrapper">
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 1">
            <line id="Line" stroke="var(--stroke-0, #E5E0D0)" x2="1920" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <FooterContent />
    </div>
  );
}

export default function VoidHome() {
  return (
    <div className="bg-[#fff8e9] content-stretch flex flex-col items-start relative size-full" data-name="void-home">
      <TopMarquee />
      <MainContent />
      <FooterWrapper />
    </div>
  );
}