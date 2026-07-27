function Hamburger() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-end justify-center relative shrink-0 size-[24px]" data-name="hamburger">
      <div className="bg-[#161513] h-[1.5px] relative rounded-[1px] shrink-0 w-[22px]" data-name="line-1" />
      <div className="bg-[#161513] h-[1.5px] relative rounded-[1px] shrink-0 w-[16px]" data-name="line-2" />
      <div className="bg-[#161513] h-[1.5px] relative rounded-[1px] shrink-0 w-[22px]" data-name="line-3" />
    </div>
  );
}

export default function Navigation() {
  return (
    <div className="content-stretch flex items-center relative size-full" data-name="navigation">
      <Hamburger />
    </div>
  );
}