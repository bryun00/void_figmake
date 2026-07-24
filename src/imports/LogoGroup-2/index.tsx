import svgPaths from "./svg-3o2zgfa2t5";

function Logo() {
  return (
    <div className="h-[24px] relative shrink-0 w-[85px]" data-name="logo">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 85 24" width="85">
        <g id="logo">
          <path d={svgPaths.p865340} fill="var(--fill-0, #161513)" id="Union" />
          <path d={svgPaths.p140ac680} fill="var(--fill-0, #161513)" id="Union_2" />
        </g>
      </svg>
    </div>
  );
}

export default function LogoGroup() {
  return (
    <div className="content-stretch flex items-start pt-[4px] relative size-full" data-name="logo-group">
      <Logo />
    </div>
  );
}