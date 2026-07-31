function Frame() {
  return <div className="absolute bg-white h-[240px] left-0 top-0 w-[300.333px]" />;
}

function Frame1() {
  return (
    <div className="content-stretch flex font-['Pretendard',sans-serif] font-normal items-center justify-between leading-[1.4] relative shrink-0 text-[12px] w-full whitespace-nowrap">
      <p className="relative shrink-0 text-[#e4501d]">프로필</p>
      <p className="relative shrink-0 text-[#8a8a8a]">01</p>
    </div>
  );
}

function LeftLabelColumn() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[12px] items-start left-0 not-italic top-[264px] w-[300.333px]" data-name="left-label-column">
      <Frame1 />
      <p className="font-['Pretendard',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#161513] text-[18px] w-full">Profile</p>
    </div>
  );
}

function Component() {
  return (
    <div className="h-[314px] relative shrink-0 w-[300.333px]" data-name="링크영역">
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