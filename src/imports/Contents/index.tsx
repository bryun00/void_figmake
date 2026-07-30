import { Link, useLocation } from "react-router";
import Biography from "@/imports/Biography/index";
import Biography1 from "@/imports/Biography-1/index";
import Biography2 from "@/imports/Biography-2/index";

function NavItem() {
  const { pathname } = useLocation();

  const navItems = [
    { label: "All", count: "1", to: "/work/all" },
    { label: "Product", count: "6", to: "/work" },
    { label: "Marketing", count: "88", to: "/work/marketing" },
    { label: "etc", count: "2", to: "/work/etc" },
  ];

  return (
    <div className="content-stretch flex flex-col gap-[22px] items-start justify-center pb-[24px] pl-[80px] pr-[62px] pt-[64px] relative shrink-0 w-[296px]" data-name="nav-item-02">
      {navItems.map(({ label, count, to }) => {
        const isActive = pathname === to;
        return (
          <Link key={to} to={to} className="no-underline">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              {isActive && <div aria-hidden className="absolute border-[#e4501d] border-b border-solid inset-0 pointer-events-none" />}
              <p className={`[word-break:break-word] font-['Space_Grotesk:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] whitespace-nowrap ${isActive ? "text-[#e4501d]" : "text-[#161513]"}`}>
                {label}
              </p>
              <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#8a8a8a] text-[22px] whitespace-nowrap">
                {count}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default function Contents() {
  const { pathname } = useLocation();
  const biographyComponent = () => {
    if (pathname === "/work/marketing") return <Biography1 />;
    if (pathname === "/work/etc") return <Biography2 />;
    return <Biography />;
  };

  return (
    <div className="content-stretch flex items-start relative size-full" data-name="contents">
      <NavItem />
      {biographyComponent()}
    </div>
  );
}
