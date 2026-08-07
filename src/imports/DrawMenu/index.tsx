import { Link } from "react-router";
import MobileLogo from "@/app/components/MobileLogo";
import imgAbout from "@/imports/mobile-titles/menu-about.svg";
import imgWork from "@/imports/mobile-titles/menu-work.svg";
import imgContact from "@/imports/mobile-titles/menu-contact.svg";

function Cross() {
  return (
    <div className="h-[16.971px] relative shrink-0 w-[17.941px]" data-name="cross">
      <div className="absolute inset-[-6.25%_-5.91%_-6.25%_0]">
        <svg className="block size-full" fill="none" height="19.0919" preserveAspectRatio="none" viewBox="0 0 19.0018 19.0919" width="19.0018">
          <g id="cross">
            <line id="Line" stroke="var(--stroke-0, #161513)" strokeWidth="1.5" x1="1.5009" x2="18.4715" y1="0.53033" y2="17.5009" />
            <line id="Line_2" stroke="var(--stroke-0, #161513)" strokeWidth="1.5" x1="17.5009" x2="0.53033" y1="1.59099" y2="18.5616" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function CloseIcon() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="close-icon">
      <Cross />
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

interface DrawMenuProps {
  onClose: () => void;
}

export default function DrawMenu({ onClose }: DrawMenuProps) {
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
                <p className="font-['Manrope',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#8a8a8a] text-[14px] whitespace-nowrap">01</p>
                <img src={imgAbout} alt="ABOUT" className="block h-[33.792px] w-[175.221px] max-w-none shrink-0" />
              </div>
            </Link>

            <Link to="/work" onClick={onClose} className="no-underline w-full">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="nav-item-collection">
                <p className="font-['Manrope',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#8a8a8a] text-[14px] whitespace-nowrap">02</p>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <img src={imgWork} alt="work" className="block h-[33.792px] w-[135.946px] max-w-none shrink-0" />
                  <BadgeNew />
                </div>
              </div>
            </Link>

            <Link to="/contact" onClick={onClose} className="no-underline w-full">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="nav-item-contact">
                <p className="font-['Manrope',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#e4501d] text-[14px] whitespace-nowrap">03</p>
                <img src={imgContact} alt="CONTACT" className="block h-[33.888px] w-[239.82px] max-w-none shrink-0" />
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
