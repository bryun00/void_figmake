import { useEffect, useState } from "react";
import { Link } from "react-router";
import ImportedLogoGroup from "@/imports/LogoGroup/index";
import VoidHomeMobile from "@/imports/VoidHomeMobile/index";
import Rectangle from "@/imports/Rectangle240649349/index";
import DesktopCanvas from "@/app/components/DesktopCanvas";

function TopMarquee() {
  const text = "currently open to freelance work · ";
  const repeated = text.repeat(8);

  return (
    <div className="bg-[#fff8e9] relative shrink-0 w-full border-b border-[#e5e0d0] overflow-hidden">
      <div className="py-4 flex">
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "marquee 28s linear infinite" }}
        >
          <span
            className="text-[#8a8a8a] text-[14px] leading-[1.5] pr-0"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 400 }}
          >
            {repeated}
          </span>
          <span
            className="text-[#8a8a8a] text-[14px] leading-[1.5]"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 400 }}
          >
            {repeated}
          </span>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

function MetadataDescription() {
  return (
    <div className="flex flex-col gap-3 items-start w-full">
      <div className="flex items-center">
        <div style={{ position: "relative", width: "10px", height: "10px", marginRight: "8px", flexShrink: 0, transform: "rotate(-45deg)" }}>
          <Rectangle />
        </div>
        <p
          className="text-[32px] tracking-[-1px]"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, color: "#161513" }}
        >
          uiux designer
        </p>
      </div>
      <div
        className="text-[#8a8a8a] text-[22px] max-w-[680px]"
        style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 400, lineHeight: 1.6 }}
      >
        <p>Hi, I design and build things on the web.</p>
        <p>I care about typography, restraint, and the space</p>
        <p>between elements as much as the elements themselves.</p>
      </div>
    </div>
  );
}

function IntroStack() {
  return (
    <div className="flex flex-col gap-8 items-start w-full">
      <div style={{ position: "relative", width: "279px", height: "77px" }}>
        <ImportedLogoGroup />
      </div>
      <MetadataDescription />
    </div>
  );
}

const navItems = [
  { num: "01", label: "About", to: "/about" },
  { num: "02", label: "Work", to: "/work" },
  { num: "03", label: "Contact", to: "/contact" },
];

function NavigationList() {
  return (
    <div
      className="flex flex-col gap-3 items-start pt-6 w-fit text-[#e4501d]"
      style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
    >
      {navItems.map(({ num, label, to }) => (
        <Link key={num} to={to} className="no-underline">
          <div className="flex gap-12 items-center cursor-pointer group">
            <p className="text-[20px] w-8 opacity-70">{num}</p>
            <p className="text-[24px] tracking-[-1px] whitespace-nowrap group-hover:underline text-[#161513]">
              {label}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

function MainContent() {
  return (
    <div className="flex-1 min-h-0 w-full">
      <div className="flex flex-col gap-[304px] items-start pt-[120px] pb-[80px] px-[160px] size-full">
        <IntroStack />
        <NavigationList />
      </div>
    </div>
  );
}

function LocalTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("ko-KR", {
          timeZone: "Asia/Seoul",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return <span>{time}</span>;
}

function FooterContent() {
  return (
    <div
      className="flex items-center justify-between px-[160px] py-10 w-full text-[14px] tracking-[0.007px] uppercase whitespace-nowrap"
      style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
    >
      <p className="text-[#8a8a8a]">
        LOCAL TIME · SEOUL, KOREA &nbsp;·&nbsp; <LocalTime />
      </p>
      <div className="flex gap-8 items-start text-[#161513]">
        <p className="cursor-pointer hover:opacity-60 transition-opacity">INSTAGRAM</p>
        <p className="cursor-pointer hover:opacity-60 transition-opacity">LINKEDIN</p>
      </div>
    </div>
  );
}

function FooterWrapper() {
  return (
    <div className="flex flex-col items-start shrink-0 w-full">
      <div className="w-full border-t border-[#e5e0d0]" />
      <FooterContent />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Mobile: ≤440px */}
      <div className="max-[440px]:block hidden min-h-[100dvh] w-full">
        <VoidHomeMobile />
      </div>
      {/* Desktop: >440px */}
      <div className="max-[440px]:hidden bg-[#fff8e9] min-h-screen w-full">
        <DesktopCanvas className="flex flex-col items-start">
          <TopMarquee />
          <MainContent />
          <FooterWrapper />
        </DesktopCanvas>
      </div>
    </>
  );
}
