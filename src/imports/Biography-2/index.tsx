import imgRectangle1 from "./936d55d1845290b7065f03b46fbed97a1f92630a.png";
import { imgRectangle } from "./svg-tgexu";

function MaskGroup() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Mask group">
      <div className="absolute h-[276px] left-[-16px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[16px_18px] mask-size-[296px_240px] top-[-18px] w-[320px]" style={{ maskImage: `url("${imgRectangle}")` }} data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[0.04%] max-w-none top-0 w-[99.9%]" src={imgRectangle1} />
        </div>
      </div>
    </div>
  );
}

function Img() {
  return (
    <div className="absolute bg-[#569c49] h-[240px] left-0 top-0 w-full" data-name="img">
      <MaskGroup />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex font-['Pretendard',sans-serif] font-normal items-center justify-between leading-[1.4] relative shrink-0 text-[12px] w-full whitespace-nowrap">
      <p className="relative shrink-0 text-[#e4501d]">개인작업</p>
      <p className="relative shrink-0 text-[#8a8a8a]">2024</p>
    </div>
  );
}

function LeftLabelColumn() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[12px] items-start left-0 not-italic top-[264px] w-[296px]" data-name="left-label-column">
      <Frame />
      <p className="font-['Pretendard',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#161513] text-[18px] w-full">Ai - icon</p>
    </div>
  );
}

function Component() {
  return (
    <div className="h-[336px] relative shrink-0 w-full" data-name="링크영역">
      <Img />
      <LeftLabelColumn />
    </div>
  );
}

function SectionRow() {
  return (
    <div className="content-stretch flex flex-col items-start py-[64px] relative shrink-0 w-[296px]" data-name="section-row">
      <Component />
    </div>
  );
}

function Img1() {
  return <div className="absolute bg-[#559390] h-[240px] left-0 top-[0.5px] w-full" data-name="img" />;
}

function Frame1() {
  return (
    <div className="content-stretch flex font-['Pretendard',sans-serif] font-normal items-center justify-between leading-[1.4] relative shrink-0 text-[12px] w-full whitespace-nowrap">
      <p className="relative shrink-0 text-[#e4501d]">시각</p>
      <p className="relative shrink-0 text-[#8a8a8a]">2023</p>
    </div>
  );
}

function LeftLabelColumn1() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[12px] items-start left-0 not-italic top-[263.5px] w-[296px]" data-name="left-label-column">
      <Frame1 />
      <p className="font-['Pretendard',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#161513] text-[18px] w-full">인쇄물</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="h-[335px] relative shrink-0 w-full" data-name="링크영역">
      <Img1 />
      <LeftLabelColumn1 />
    </div>
  );
}

function SectionRow1() {
  return (
    <div className="content-stretch flex flex-col items-start py-[64px] relative shrink-0 w-[296px]" data-name="section-row">
      <Component1 />
    </div>
  );
}

function SectionRow2() {
  return <div className="content-stretch flex flex-col h-[464px] items-start py-[64px] relative shrink-0 w-[296px]" data-name="section-row" />;
}

function Component3() {
  return (
    <div className="content-stretch flex gap-[52px] items-center relative shrink-0 w-full" data-name="5">
      <SectionRow />
      <SectionRow1 />
      <SectionRow2 />
    </div>
  );
}

function Component2() {
  return <div className="content-stretch flex gap-[52px] h-[464px] items-center relative shrink-0 w-[296px]" data-name="1" />;
}

export default function Biography() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[100px] pl-[72px] pr-[80px] relative size-full" data-name="biography">
      <Component3 />
      <Component2 />
    </div>
  );
}