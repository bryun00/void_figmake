import { Link } from "react-router";

function Frame10() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center not-italic relative shrink-0 w-full whitespace-nowrap">
      <p className="font-['Space_Grotesk:SemiBold',sans-serif] leading-[normal] relative shrink-0 text-[#161513] text-[24px]">All</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] leading-[1.6] relative shrink-0 text-[#8a8a8a] text-[22px]">1</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div aria-hidden className="absolute border-[#e4501d] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Space_Grotesk:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e4501d] text-[24px] whitespace-nowrap">Product</p>
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#8a8a8a] text-[22px] whitespace-nowrap">6</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center not-italic relative shrink-0 w-full whitespace-nowrap">
      <p className="font-['Space_Grotesk:SemiBold',sans-serif] leading-[normal] relative shrink-0 text-[#161513] text-[24px]">Marketing</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] leading-[1.6] relative shrink-0 text-[#8a8a8a] text-[22px]">88</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center not-italic relative shrink-0 w-full whitespace-nowrap">
      <p className="font-['Space_Grotesk:SemiBold',sans-serif] leading-[normal] relative shrink-0 text-[#161513] text-[24px]">etc</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] leading-[1.6] relative shrink-0 text-[#8a8a8a] text-[22px]">2</p>
    </div>
  );
}

function NavItem() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-start justify-center pb-[24px] pl-[80px] pr-[62px] pt-[64px] relative shrink-0 w-[296px]" data-name="nav-item-02">
      <Frame10 />
      <Frame6 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Frame() {
  return <div className="absolute bg-white h-[240px] left-0 top-0 w-[296px]" />;
}

function Frame11() {
  return (
    <div className="content-stretch flex font-['Pretendard:Regular',sans-serif] items-center justify-between leading-[1.4] relative shrink-0 text-[12px] w-full whitespace-nowrap">
      <p className="relative shrink-0 text-[#e4501d]">구축</p>
      <p className="relative shrink-0 text-[#8a8a8a]">2025</p>
    </div>
  );
}

function LeftLabelColumn() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[12px] items-start left-0 not-italic top-[265px] w-[296px]" data-name="left-label-column">
      <Frame11 />
      <div className="font-['Pretendard:SemiBold',sans-serif] leading-[0] relative shrink-0 text-[#161513] text-[18px] w-full">
        <p className="leading-[normal] mb-0">IBK 기업은행</p>
        <p className="leading-[normal]">개인스마트뱅킹 APP 3.0전면 개편</p>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="h-[336px] relative shrink-0 w-full" data-name="링크영역">
      <Frame />
      <LeftLabelColumn />
    </div>
  );
}

function SectionRow() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px py-[64px] relative" data-name="section-row">
      <Link to="/work/ibk" className="no-underline w-full cursor-pointer">
        <Component />
      </Link>
    </div>
  );
}

function Frame1() {
  return <div className="absolute bg-white h-[240px] left-0 top-0 w-[300.333px]" />;
}

function Frame12() {
  return (
    <div className="content-stretch flex font-['Pretendard:Regular',sans-serif] items-center justify-between leading-[1.4] relative shrink-0 text-[12px] w-full whitespace-nowrap">
      <p className="relative shrink-0 text-[#e4501d]">제안</p>
      <p className="relative shrink-0 text-[#8a8a8a]">2024</p>
    </div>
  );
}

function LeftLabelColumn1() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[12px] items-start left-0 not-italic top-[264px] w-[296px]" data-name="left-label-column">
      <Frame12 />
      <div className="font-['Pretendard:SemiBold',sans-serif] leading-[0] relative shrink-0 text-[#161513] text-[18px] w-full">
        <p className="leading-[normal] mb-0">BK 기업은행</p>
        <p className="leading-[normal]">개인스마트뱅킹 APP 제안 시안</p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="h-[336px] relative shrink-0 w-full" data-name="링크영역">
      <Frame1 />
      <LeftLabelColumn1 />
    </div>
  );
}

function SectionRow1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px py-[64px] relative" data-name="section-row">
      <Link to="/work/bk" className="no-underline w-full cursor-pointer">
        <Component2 />
      </Link>
    </div>
  );
}

function Frame2() {
  return <div className="absolute bg-white h-[240px] left-0 top-0 w-[296px]" />;
}

function Frame13() {
  return (
    <div className="content-stretch flex font-['Pretendard:Regular',sans-serif] items-center justify-between leading-[1.4] relative shrink-0 text-[12px] w-full whitespace-nowrap">
      <p className="relative shrink-0 text-[#e4501d]">구축</p>
      <p className="relative shrink-0 text-[#8a8a8a]">2020</p>
    </div>
  );
}

function LeftLabelColumn2() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[12px] items-start left-0 not-italic top-[264px] w-[296px]" data-name="left-label-column">
      <Frame13 />
      <div className="font-['Pretendard:SemiBold',sans-serif] leading-[0] relative shrink-0 text-[#161513] text-[18px] w-full">
        <p className="leading-[normal] mb-0">AMF Fantasy</p>
        <p className="leading-[normal]">글로벌 사이트</p>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="h-[336px] relative shrink-0 w-full" data-name="링크영역">
      <Frame2 />
      <LeftLabelColumn2 />
    </div>
  );
}

function SectionRow2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px py-[64px] relative" data-name="section-row">
      <Link to="/work/amf" className="no-underline w-full cursor-pointer">
        <Component3 />
      </Link>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex gap-[52px] items-center relative shrink-0 w-full" data-name="1">
      <SectionRow />
      <SectionRow1 />
      <SectionRow2 />
    </div>
  );
}

function Frame3() {
  return <div className="absolute bg-white h-[240px] left-0 top-0 w-[296px]" />;
}

function Frame14() {
  return (
    <div className="content-stretch flex font-['Pretendard:Regular',sans-serif] items-center justify-between leading-[1.4] relative shrink-0 text-[12px] w-full whitespace-nowrap">
      <p className="relative shrink-0 text-[#e4501d]">제안</p>
      <p className="relative shrink-0 text-[#8a8a8a]">2020</p>
    </div>
  );
}

function LeftLabelColumn3() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[12px] items-start left-0 not-italic top-[264px] w-[296px]" data-name="left-label-column">
      <Frame14 />
      <div className="font-['Pretendard:SemiBold',sans-serif] leading-[0] relative shrink-0 text-[#161513] text-[18px] w-full">
        <p className="leading-[normal] mb-0">B2G 게임즈</p>
        <p className="leading-[normal]">승부예측 커뮤니티사이트</p>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="h-[336px] relative shrink-0 w-full" data-name="링크영역">
      <Frame3 />
      <LeftLabelColumn3 />
    </div>
  );
}

function SectionRow3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px py-[64px] relative" data-name="section-row">
      <Link to="/work/b2g" className="no-underline w-full cursor-pointer">
        <Component4 />
      </Link>
    </div>
  );
}

function Frame4() {
  return <div className="absolute bg-white h-[240px] left-0 top-[0.5px] w-[296px]" />;
}

function Frame15() {
  return (
    <div className="content-stretch flex font-['Pretendard:Regular',sans-serif] items-center justify-between leading-[1.4] relative shrink-0 text-[12px] w-full whitespace-nowrap">
      <p className="relative shrink-0 text-[#e4501d]">운영</p>
      <p className="relative shrink-0 text-[#8a8a8a]">2016</p>
    </div>
  );
}

function LeftLabelColumn4() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[12px] items-start left-0 not-italic top-[263.5px] w-[296px]" data-name="left-label-column">
      <Frame15 />
      <div className="font-['Pretendard:SemiBold',sans-serif] leading-[0] relative shrink-0 text-[#161513] text-[18px] w-full">
        <p className="leading-[normal] mb-0">쁘띠엘린 몰</p>
        <p className="leading-[normal]">스마트라이크 브랜드 사이트</p>
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div className="h-[335px] relative shrink-0 w-full" data-name="링크영역">
      <Frame4 />
      <LeftLabelColumn4 />
    </div>
  );
}

function SectionRow4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px py-[64px] relative" data-name="section-row">
      <Link to="/work/petit-elin-brand" className="no-underline w-full cursor-pointer">
        <Component6 />
      </Link>
    </div>
  );
}

function Frame5() {
  return <div className="absolute bg-white h-[240px] left-0 top-[0.5px] w-[296px]" />;
}

function Frame16() {
  return (
    <div className="content-stretch flex font-['Pretendard:Regular',sans-serif] items-center justify-between leading-[1.4] relative shrink-0 text-[12px] w-full whitespace-nowrap">
      <p className="relative shrink-0 text-[#e4501d]">제안</p>
      <p className="relative shrink-0 text-[#8a8a8a]">2019</p>
    </div>
  );
}

function LeftLabelColumn5() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[12px] items-start left-0 not-italic top-[263.5px] w-[296px]" data-name="left-label-column">
      <Frame16 />
      <div className="font-['Pretendard:SemiBold',sans-serif] leading-[0] relative shrink-0 text-[#161513] text-[18px] w-full">
        <p className="leading-[normal] mb-0">쁘띠엘린 몰</p>
        <p className="leading-[normal]">온라인몰 제안 시안</p>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="h-[335px] relative shrink-0 w-full" data-name="링크영역">
      <Frame5 />
      <LeftLabelColumn5 />
    </div>
  );
}

function SectionRow5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px py-[64px] relative" data-name="section-row">
      <Link to="/work/petit-elin-online" className="no-underline w-full cursor-pointer">
        <Component7 />
      </Link>
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex gap-[52px] items-center relative shrink-0 w-full" data-name="5">
      <SectionRow3 />
      <SectionRow4 />
      <SectionRow5 />
    </div>
  );
}

function Frame7() {
  return <div className="absolute bg-white h-[240px] left-0 top-0 w-[300.333px]" />;
}

function Frame17() {
  return (
    <div className="content-stretch flex font-['Pretendard:Regular',sans-serif] items-center justify-between leading-[1.4] relative shrink-0 text-[12px] w-full whitespace-nowrap">
      <p className="relative shrink-0 text-[#e4501d]">제안</p>
      <p className="relative shrink-0 text-[#8a8a8a]">2026</p>
    </div>
  );
}

function LeftLabelColumn6() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[12px] items-start left-0 not-italic top-[264px] w-[300.333px]" data-name="left-label-column">
      <Frame17 />
      <div className="font-['Pretendard:SemiBold',sans-serif] leading-[0] relative shrink-0 text-[#161513] text-[18px] w-full">
        <p className="leading-[normal] mb-0">LS증권</p>
        <p className="leading-[normal]">사내 업무형 AI플랫폼 구축 제안 시안</p>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="h-[336px] relative shrink-0 w-[300px]" data-name="링크영역">
      <Frame7 />
      <LeftLabelColumn6 />
    </div>
  );
}

function SectionRow6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px py-[64px] relative" data-name="section-row">
      <Link to="/work/ls" className="no-underline w-full cursor-pointer">
        <Component9 />
      </Link>
    </div>
  );
}

function Component8() {
  return (
    <div className="content-stretch flex gap-[52px] items-center relative shrink-0 w-full" data-name="6">
      <SectionRow6 />
    </div>
  );
}

function Biography() {
  return (
    <div className="content-stretch flex flex-col h-[1469px] items-start pb-[100px] pl-[72px] pr-[80px] relative shrink-0 w-[1144px]" data-name="biography">
      <Component1 />
      <Component5 />
      <Component8 />
    </div>
  );
}

export default function Contents() {
  return (
    <div className="content-stretch flex items-start relative size-full" data-name="contents">
      <NavItem />
      <Biography />
    </div>
  );
}