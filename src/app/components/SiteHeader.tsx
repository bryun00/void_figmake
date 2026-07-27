import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import svgPaths from "@/imports/LogoGroup-2/svg-3o2zgfa2t5";
import ScrollToTop from "./ScrollToTop";

function LogoSvg() {
  return (
    <div className="h-[24px] relative shrink-0 w-[85px]" style={{ paddingTop: "4px" }}>
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 85 24" width="85">
        <g id="logo">
          <path d={svgPaths.p865340} fill="#161513" />
          <path d={svgPaths.p140ac680} fill="#161513" />
        </g>
      </svg>
    </div>
  );
}

const navLinks = [
  { label: "about", to: "/about" },
  { label: "work", to: "/work" },
  { label: "contact", to: "/contact" },
];

export default function SiteHeader() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <ScrollToTop />
    <div
      className="sticky top-0 z-50 w-full transition-all duration-300"
      style={
        scrolled
          ? {
              backdropFilter: "blur(4px)",
              backgroundColor: "rgba(255, 248, 233, 0.45)",
            }
          : {
              backgroundColor: "#FFF8E9",
              borderBottom: "1px solid #e5e0d0",
            }
      }
      data-name="header"
    >
      <div className="content-stretch flex items-center justify-between px-[80px] py-[24px] relative w-full">
        <Link to="/" className="no-underline cursor-pointer">
          <LogoSvg />
        </Link>
        <nav
          className="flex gap-[32px] items-center text-[14px] whitespace-nowrap"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
        >
          {navLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="no-underline hover:opacity-70 transition-opacity"
              style={{ color: pathname === to || (to !== "/" && pathname.startsWith(to)) ? "#e4501d" : "#161513" }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
    </>
  );
}
