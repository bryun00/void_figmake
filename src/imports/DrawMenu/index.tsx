import { Link, useLocation } from "react-router";
import MobileLogo from "@/app/components/MobileLogo";
import imgAboutOff from "@/imports/mobile-titles/menu-about.svg";
import imgAboutOn from "@/imports/mobile-titles/menu-about-on.svg";
import imgWorkOff from "@/imports/mobile-titles/menu-work.svg";
import imgWorkOn from "@/imports/mobile-titles/menu-work-on.svg";
import imgContactOn from "@/imports/mobile-titles/menu-contact.svg";
import imgContactOff from "@/imports/mobile-titles/menu-contact-off.svg";
import imgCross from "./close-cross.svg";

type ActiveItem = "about" | "work" | "contact" | null;

function getActiveItem(pathname: string): ActiveItem {
  if (pathname.startsWith("/about")) return "about";
  if (pathname.startsWith("/work")) return "work";
  if (pathname.startsWith("/contact")) return "contact";
  return null;
}

function CloseIcon() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="close-icon">
      <div className="h-[18.092px] relative shrink-0 w-[18.061px]" data-name="cross">
        <img alt="" src={imgCross} className="absolute block inset-0 max-w-none size-full" />
      </div>
    </div>
  );
}

function BadgeNew() {
  return (
    <div className="bg-[#e4501d] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="badge-new">
      <p className="[word-break:break-word] font-['Space_Grotesk',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#fff8e9] text-[10px] whitespace-nowrap">NEW</p>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 text-[#161513]" data-name="social-links">
      <p className="relative shrink-0">INSTAGRAM</p>
      <p className="relative shrink-0">LINKEDIN</p>
    </div>
  );
}

function NavNumber({ children, active }: { children: string; active: boolean }) {
  return (
    <p
      className={`font-['Manrope',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[14px] whitespace-nowrap ${
        active ? "text-[#e4501d]" : "text-[#8a8a8a]"
      }`}
    >
      {children}
    </p>
  );
}

interface DrawMenuProps {
  onClose: () => void;
}

export default function DrawMenu({ onClose }: DrawMenuProps) {
  const { pathname } = useLocation();
  const active = getActiveItem(pathname);

  return (
    <div className="bg-[#fff8e9] content-stretch flex flex-col items-start justify-between relative size-full" data-name="draw menu">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <div className="relative shrink-0 w-full" data-name="header">
          <div aria-hidden className="absolute border-[#e5e0d0] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[20px] py-[16px] relative size-full">
              <Link to="/" onClick={onClose} className="no-underline">
                <MobileLogo />
              </Link>
              <button onClick={onClose} className="content-stretch flex items-center relative shrink-0 bg-transparent border-none p-0 cursor-pointer" data-name="navigation-xbtn" aria-label="Close menu">
                <CloseIcon />
              </button>
            </div>
          </div>
        </div>

        <div className="relative shrink-0 w-full" data-name="menu-body">
          <div className="content-stretch flex flex-col gap-[36px] items-start pt-[60px] px-[32px] relative size-full">
            <Link to="/about" onClick={onClose} className="no-underline w-full">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="nav-item-about">
                <NavNumber active={active === "about"}>01</NavNumber>
                <img
                  src={active === "about" ? imgAboutOn : imgAboutOff}
                  alt="ABOUT"
                  className="block h-[33.792px] w-[175.221px] max-w-none shrink-0"
                />
              </div>
            </Link>

            <Link to="/work" onClick={onClose} className="no-underline w-full">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="nav-item-collection">
                <NavNumber active={active === "work"}>02</NavNumber>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <img
                    src={active === "work" ? imgWorkOn : imgWorkOff}
                    alt="work"
                    className="block h-[33.792px] w-[135.946px] max-w-none shrink-0"
                  />
                  <BadgeNew />
                </div>
              </div>
            </Link>

            <Link to="/contact" onClick={onClose} className="no-underline w-full">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="nav-item-contact">
                <NavNumber active={active === "contact"}>03</NavNumber>
                <img
                  src={active === "contact" ? imgContactOn : imgContactOff}
                  alt="CONTACT"
                  className="block h-[33.888px] w-[239.82px] max-w-none shrink-0"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="footer">
        <div className="h-0 relative shrink-0 w-full" data-name="Line">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 390 1" width="390">
              <line id="Line" stroke="var(--stroke-0, #E5E0D0)" x2="390" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name="footer-content">
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Space_Grotesk',sans-serif] font-medium gap-[16px] items-start leading-[normal] not-italic px-[20px] py-[24px] relative size-full text-[11px] whitespace-nowrap">
            <p className="relative shrink-0 text-[#8a8780]">LOCAL TIME · SEOUL, KOREA</p>
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
