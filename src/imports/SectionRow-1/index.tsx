function Frame() {
  return <div className="absolute bg-white h-[240px] left-0 top-0 w-[296px]" />;
}

function Frame1() {
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
      <Frame1 />
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

export default function SectionRow() {
  return (
    <div className="content-stretch flex flex-col items-start py-[64px] relative size-full" data-name="section-row">
      <Component />
    </div>
  );
}