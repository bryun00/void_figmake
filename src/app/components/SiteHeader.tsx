import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import svgPaths from "@/imports/AboutDetailPage/svg-cs2p8mvx7u";
import ScrollToTop from "./ScrollToTop";

function LogoSvg() {
  return (
    <div className="relative shrink-0 w-[85px]" style={{ paddingTop: "4px" }}>
      <div className="h-[23.467px] relative w-full">
        <div className="absolute h-[23.467px] left-0 top-0 w-[84.751px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84.7505 23.4667">
            <g>
              <g id="VOID">
                <path d={svgPaths.p32b9b400} fill="#E4501D" />
                <path d={svgPaths.p3ae9d200} fill="#E4501D" />
                <path d={svgPaths.p234d70b0} fill="#E4501D" />
                <path d={svgPaths.p2ca5b680} fill="#E4501D" />
              </g>
              <path d={svgPaths.p3e350440} fill="#E4501D" />
            </g>
          </svg>
        </div>
      </div>
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
              style={{ color: pathname === to ? "#e4501d" : "#161513" }}
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
