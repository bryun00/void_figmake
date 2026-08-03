import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={scrollToTop}
      data-name="up"
      className={`fixed right-[80px] bottom-[40px] size-[48px] z-50 cursor-pointer transition-opacity duration-300 max-[440px]:right-5 max-[440px]:bottom-5 ${
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <svg className="block size-full" fill="none" height="48" preserveAspectRatio="none" viewBox="0 0 48 48" width="48">
        <g id="up">
          <foreignObject height="64" width="64" x="-8" y="-8">
            <div style={{ backdropFilter: "blur(4px)", clipPath: "url(#bgblur_0_42_1186_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <circle cx="24" cy="24" fill="var(--fill-0, white)" fillOpacity="0.6" id="Ellipse 1" r="24" data-figma-bg-blur-radius="8" />
          <g id="arrow-right-wrapper">
            <path d="M24 32V16M32 24L24 16L16 24" id="arrow-right" stroke="var(--stroke-0, #E4501D)" strokeLinecap="round" strokeWidth="2.5" />
          </g>
        </g>
        <defs>
          <clipPath id="bgblur_0_42_1186_clip_path" transform="translate(8 8)">
            <circle cx="24" cy="24" r="24" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}
