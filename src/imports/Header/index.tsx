import svgPaths from "./svg-2vyiiqh1ih";

function Frame() {
  return (
    <div className="absolute h-[23.467px] left-0 top-0 w-[84.751px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84.7505 23.4667">
        <g id="Frame 2087328046">
          <g id="VOID">
            <path d={svgPaths.p32b9b400} fill="var(--fill-0, #E4501D)" id="Vector" />
            <path d={svgPaths.p3ae9d200} fill="var(--fill-0, #E4501D)" id="Vector_2" />
            <path d={svgPaths.p234d70b0} fill="var(--fill-0, #E4501D)" id="Vector_3" />
            <path d={svgPaths.p2ca5b680} fill="var(--fill-0, #E4501D)" id="Vector_4" />
          </g>
          <path d={svgPaths.p3e350440} fill="var(--fill-0, #E4501D)" id="â¢" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[23.467px] relative shrink-0 w-full">
      <Frame />
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-[85px]" data-name="logo">
      <Frame1 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Space_Grotesk:Medium',sans-serif] gap-[32px] items-center leading-[normal] not-italic relative shrink-0 text-[14px] whitespace-nowrap" data-name="navigation">
      <p className="relative shrink-0 text-[#e4501d]">about</p>
      <p className="relative shrink-0 text-[#161513]">work</p>
      <p className="relative shrink-0 text-[#161513]">contact</p>
    </div>
  );
}

export default function Header() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(255,248,233,0.6)] content-stretch flex items-center justify-between px-[80px] py-[24px] relative shadow-[0px_8px_12px_0px_rgba(0,0,0,0.1)] size-full" data-name="header">
      <Logo />
      <Navigation />
    </div>
  );
}