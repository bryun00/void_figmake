import { Link } from "react-router";
import SiteHeader from '@/app/components/SiteHeader';
import imgWorksTitle from "@/imports/image-4.png";
import WorkCard1 from "@/imports/SectionRow-1/index";

function IntroBlock() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="intro-block">
      <div className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#161513] text-[22px] w-full">
        <p className="leading-[1.6] mb-0">{`우리는, 고객사와 '함께 고민하고, 함께 쓰는'`}</p>
        <p className="leading-[1.6]">Web/Creative 파트너입니다.</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[82px] items-start relative shrink-0 w-full">
      <img src={imgWorksTitle} alt="works" style={{ display: "block", width: "462px", height: "56px", objectFit: "contain", objectPosition: "left", flexShrink: 0 }} />
      <IntroBlock />
    </div>
  );
}

function Frame2() {
  return <div className="h-[31px] relative shrink-0 w-[594px]" />;
}

function Hero() {
  return (
    <div className="content-stretch flex flex-col gap-[160px] items-end justify-end pb-[40px] pt-[80px] px-[80px] relative shrink-0 w-full" data-name="hero">
      <div aria-hidden className="absolute border-[#e5e0d0] border-b border-solid inset-0 pointer-events-none" />
      <Frame3 />
      <Frame2 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div aria-hidden className="absolute border-[#e4501d] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Space_Grotesk:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e4501d] text-[24px] whitespace-nowrap">All</p>
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#8a8a8a] text-[22px] whitespace-nowrap">4</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center not-italic relative shrink-0 whitespace-nowrap">
      <p className="font-['Space_Grotesk:SemiBold',sans-serif] leading-[normal] relative shrink-0 text-[#161513] text-[24px]">Product</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] leading-[1.6] relative shrink-0 text-[#8a8a8a] text-[22px]">1</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center not-italic relative shrink-0 whitespace-nowrap">
      <p className="font-['Space_Grotesk:SemiBold',sans-serif] leading-[normal] relative shrink-0 text-[#161513] text-[24px]">Marketing</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] leading-[1.6] relative shrink-0 text-[#8a8a8a] text-[22px]">1</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center not-italic relative shrink-0 whitespace-nowrap">
      <p className="font-['Space_Grotesk:SemiBold',sans-serif] leading-[normal] relative shrink-0 text-[#161513] text-[24px]">Etc</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] leading-[1.6] relative shrink-0 text-[#8a8a8a] text-[22px]">2</p>
    </div>
  );
}

function NavItem() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-start justify-center pb-[24px] pt-[64px] px-[80px] relative shrink-0 w-[275px]" data-name="nav-item-02">
      <Frame10 />
      <Frame11 />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame4() {
  return <div className="bg-white h-[240px] relative shrink-0 w-full" />;
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] relative shrink-0 text-[#161513] text-[18px] w-full">Profile</p>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[#8a8a8a] text-[12px] w-full">프로필</p>
    </div>
  );
}

function LeftLabelColumn() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-[180px]" data-name="left-label-column">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[#8a8a8a] text-[12px] w-full">프로필</p>
      <Frame5 />
    </div>
  );
}

function SectionRow() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px py-[64px] relative" data-name="section-row">
      <Frame4 />
      <LeftLabelColumn />
    </div>
  );
}

function Frame7() {
  return <div className="bg-white h-[240px] relative shrink-0 w-full" />;
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] relative shrink-0 text-[#161513] text-[18px] w-full">Profile</p>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[#8a8a8a] text-[12px] w-full">프로필</p>
    </div>
  );
}

function LeftLabelColumn1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-[180px]" data-name="left-label-column">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[#8a8a8a] text-[12px] w-full">프로필</p>
      <Frame8 />
    </div>
  );
}

function SectionRow1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px py-[64px] relative" data-name="section-row">
      <Frame7 />
      <LeftLabelColumn1 />
    </div>
  );
}

function Frame9() {
  return <div className="bg-white h-[240px] relative shrink-0 w-full" />;
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] relative shrink-0 text-[#161513] text-[18px] w-full">Profile</p>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[#8a8a8a] text-[12px] w-full">프로필</p>
    </div>
  );
}

function LeftLabelColumn2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-[180px]" data-name="left-label-column">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[#8a8a8a] text-[12px] w-full">프로필</p>
      <Frame14 />
    </div>
  );
}

function SectionRow2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px py-[64px] relative" data-name="section-row">
      <Frame9 />
      <LeftLabelColumn2 />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex gap-[52px] items-center relative shrink-0 w-full" data-name="1">
      <Link to="/work/1" className="no-underline flex-1 min-w-0"><WorkCard1 /></Link>
      <WorkCard1 />
      <WorkCard1 />
    </div>
  );
}

function Frame15() {
  return <div className="bg-white h-[240px] relative shrink-0 w-full" />;
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] relative shrink-0 text-[#161513] text-[18px] w-full">Profile</p>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[#8a8a8a] text-[12px] w-full">프로필</p>
    </div>
  );
}

function LeftLabelColumn3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-[180px]" data-name="left-label-column">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[#8a8a8a] text-[12px] w-full">프로필</p>
      <Frame16 />
    </div>
  );
}

function SectionRow3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px py-[64px] relative" data-name="section-row">
      <Frame15 />
      <LeftLabelColumn3 />
    </div>
  );
}

function Frame17() {
  return <div className="bg-white h-[240px] relative shrink-0 w-full" />;
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] relative shrink-0 text-[#161513] text-[18px] w-full">Profile</p>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[#8a8a8a] text-[12px] w-full">프로필</p>
    </div>
  );
}

function LeftLabelColumn4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-[180px]" data-name="left-label-column">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[#8a8a8a] text-[12px] w-full">프로필</p>
      <Frame18 />
    </div>
  );
}

function SectionRow4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px py-[64px] relative" data-name="section-row">
      <Frame17 />
      <LeftLabelColumn4 />
    </div>
  );
}

function Frame19() {
  return <div className="bg-white h-[240px] relative shrink-0 w-full" />;
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] relative shrink-0 text-[#161513] text-[18px] w-full">Profile</p>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[#8a8a8a] text-[12px] w-full">프로필</p>
    </div>
  );
}

function LeftLabelColumn5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-[180px]" data-name="left-label-column">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[#8a8a8a] text-[12px] w-full">프로필</p>
      <Frame20 />
    </div>
  );
}

function SectionRow5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px py-[64px] relative" data-name="section-row">
      <Frame19 />
      <LeftLabelColumn5 />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex gap-[52px] items-center relative shrink-0 w-full" data-name="2">
      <WorkCard1 />
      <WorkCard1 />
      <WorkCard1 />
    </div>
  );
}

function Frame21() {
  return <div className="bg-white h-[240px] relative shrink-0 w-[294px]" />;
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] relative shrink-0 text-[#161513] text-[18px] w-full">Profile</p>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[#8a8a8a] text-[12px] w-full">프로필</p>
    </div>
  );
}

function LeftLabelColumn6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-[180px]" data-name="left-label-column">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[#8a8a8a] text-[12px] w-full">프로필</p>
      <Frame22 />
    </div>
  );
}

function SectionRow6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px py-[64px] relative" data-name="section-row">
      <Frame21 />
      <LeftLabelColumn6 />
    </div>
  );
}

function Frame23() {
  return <div className="bg-white h-[240px] relative shrink-0 w-[294px]" />;
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] relative shrink-0 text-[#161513] text-[18px] w-full">Profile</p>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[#8a8a8a] text-[12px] w-full">프로필</p>
    </div>
  );
}

function LeftLabelColumn7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-[180px]" data-name="left-label-column">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[#8a8a8a] text-[12px] w-full">프로필</p>
      <Frame24 />
    </div>
  );
}

function SectionRow7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px py-[64px] relative" data-name="section-row">
      <Frame23 />
      <LeftLabelColumn7 />
    </div>
  );
}

function Frame25() {
  return <div className="bg-white h-[240px] relative shrink-0 w-[294px]" />;
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] relative shrink-0 text-[#161513] text-[18px] w-full">Profile</p>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[#8a8a8a] text-[12px] w-full">프로필</p>
    </div>
  );
}

function LeftLabelColumn8() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-[180px]" data-name="left-label-column">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[#8a8a8a] text-[12px] w-full">프로필</p>
      <Frame26 />
    </div>
  );
}

function SectionRow8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px py-[64px] relative" data-name="section-row">
      <Frame25 />
      <LeftLabelColumn8 />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex gap-[52px] items-center relative shrink-0 w-full" data-name="3">
      <WorkCard1 />
      <WorkCard1 />
      <WorkCard1 />
    </div>
  );
}

function Biography() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="biography">
      <div className="content-stretch flex flex-col items-start pb-[100px] px-[80px] relative size-full">
        <Component />
        <Component1 />
        <Component2 />
      </div>
    </div>
  );
}

function Contents() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="contents">
      <NavItem />
      <Biography />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative w-full">
      <SiteHeader />
      <Hero />
      <Contents />
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 text-[#161513]" data-name="social-links">
      <p className="relative shrink-0">INSTAGRAM</p>
      <p className="relative shrink-0">LINKEDIN</p>
    </div>
  );
}

function FooterContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="footer-content">
      <div className="flex flex-row items-center size-full">
        <div className="[word-break:break-word] content-stretch flex font-['Space_Grotesk:Medium',sans-serif] items-center justify-between leading-[normal] not-italic px-[80px] py-[40px] relative size-full text-[12px] whitespace-nowrap">
          <p className="relative shrink-0 text-[#8a8780]">LOCAL TIME · SEOUL, KOREA</p>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="footer">
      <div className="h-0 relative shrink-0 w-full" data-name="footer-divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1">
            <line id="footer-divider" stroke="var(--stroke-0, #E5E0D0)" x2="1440" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <FooterContent />
    </div>
  );
}

export default function WorksType2DetailPage() {
  return (
    <div className="bg-[#fff8e9] content-stretch flex flex-col items-start relative size-full" data-name="works type2-detail-page">
      <Frame6 />
      <Footer />
    </div>
  );
}