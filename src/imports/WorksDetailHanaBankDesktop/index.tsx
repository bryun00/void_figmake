import { Link } from "react-router";
import ScrollToTopButton from "@/app/components/ScrollToTopButton";

/**
 * TEMP: this session's sandbox could not reach figma.com to download the
 * real exported images/SVGs (org network policy blocks that host for the
 * Bash tool here — see PR description). Every image/icon asset below is a
 * clearly-labelled placeholder sized and positioned exactly per the Figma
 * spec (node "detail_hana_desktop", 2483:2508) so swapping in the real
 * files later is a pure asset-drop, no layout work. Search this file for
 * `AssetPlaceholder` to find every spot that needs a real asset.
 */
function AssetPlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`flex items-center justify-center bg-[#ece6d6] border border-dashed border-[#c9c0a6] text-center text-[10px] leading-[1.4] text-[#8a8a8a] px-2 ${className}`}>
      {label}
    </div>
  );
}

function ArrowLeftWrapper() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow-left-wrapper">
      <Link to="/work/marketing" className="absolute inset-0 flex items-center justify-center hover:opacity-70 transition-opacity">
        <svg className="block size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
          <g id="arrow-left-wrapper">
            <path d="M8 2L2 8L8 14M2 8H14" id="arrow-left" stroke="var(--stroke-0, #E4501D)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </Link>
    </div>
  );
}

function BackNav() {
  return (
    <div className="relative shrink-0 w-full" data-name="back-nav">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pt-[40px] px-[80px] relative size-full">
          <ArrowLeftWrapper />
          <Link to="/work/marketing" className="[word-break:break-word] font-['Space_Grotesk',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#e4501d] text-[14px] whitespace-nowrap no-underline hover:opacity-70 transition-opacity">
            Back to works
          </Link>
        </div>
      </div>
    </div>
  );
}

function TitleColumn() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px not-italic relative" data-name="title-column">
      <div className="content-stretch flex font-['Pretendard',sans-serif] font-medium gap-[12px] items-center leading-[1.5] relative shrink-0 text-[14px] w-full whitespace-nowrap">
        <p className="relative shrink-0 text-[#e4501d]">이벤트</p>
        <p className="relative shrink-0 text-[#8a8a8a]">2023</p>
      </div>
      <div className="font-['Pretendard',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#161513] text-[40px] w-full">
        <p className="leading-[normal] mb-0">하나은행 기업뱅킹</p>
        <p className="leading-[normal]">pc,mobile</p>
      </div>
    </div>
  );
}

function CaseHeaderGrid() {
  return (
    <div className="relative shrink-0 w-full" data-name="case-header-grid">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end pb-[48px] pt-[40px] px-[80px] relative size-full">
          <TitleColumn />
        </div>
      </div>
    </div>
  );
}

/** Hero — Figma "top" (2483:2521). Teal backdrop with a rotated blurred glow (CSS-only) behind the app screenshot. */
function HeroSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="top">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[80px] relative size-full">
        <div className="bg-[#499c92] h-[560px] overflow-clip relative shrink-0 w-full" data-name="img">
          <div className="absolute bottom-[-105.23px] flex items-center justify-center right-[446.6px] top-[95.05px] w-[351.726px]" style={{ containerType: "size" }}>
            <div className="flex-none h-[hypot(-30.1336cqw,91.2173cqh)] rotate-[11.52deg] w-[hypot(69.8664cqw,8.78272cqh)]">
              <div className="bg-[rgba(47,47,47,0.5)] blur-[16.1px] opacity-30 relative rounded-[34px] size-full" />
            </div>
          </div>
          <div className="absolute inset-[42px_419px_-150px_419px] overflow-hidden pointer-events-none" data-name="image 3957">
            <AssetPlaceholder label="하나은행 기업뱅킹 앱 히어로 스크린샷 (image 3957)" className="absolute inset-0" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectMetaRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="content-stretch flex gap-[16px] items-baseline leading-[1.5] relative shrink-0 text-[14px] w-full">
      <p className="font-['Manrope',sans-serif] font-semibold relative shrink-0 text-[#8a8a8a] w-[125px]">{label}</p>
      <div className="font-['Pretendard',sans-serif] font-medium not-italic relative shrink-0 text-[#161513]">{value}</div>
    </div>
  );
}

function ProjectMetaBox() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start relative rounded-[12px] shrink-0 w-[560px]" data-name="project-meta-box">
      <p className="font-['Space_Grotesk',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#161513] text-[24px] whitespace-nowrap">Project overview</p>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <ProjectMetaRow label="Client" value={<span className="whitespace-nowrap">하나은행 기업뱅킹</span>} />
        <ProjectMetaRow label="Duration" value={<span className="font-['Manrope',sans-serif] font-semibold whitespace-nowrap">2023.01-2023.12</span>} />
        <ProjectMetaRow label="Contribution" value={<span className="whitespace-nowrap">디자인 100%</span>} />
        <ProjectMetaRow label="Role" value={<span className="whitespace-nowrap">pa</span>} />
        <ProjectMetaRow label="Tools" value={<span className="font-['Manrope',sans-serif] font-semibold whitespace-nowrap">Sketch, Photoshop</span>} />
      </div>
    </div>
  );
}

function FooterDivider() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="footer-divider">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1280 1" width="1280">
          <line id="footer-divider" stroke="var(--stroke-0, #E5E0D0)" x2="1280" y1="0.5" y2="0.5" />
        </svg>
      </div>
    </div>
  );
}

function SectionHeading({ company, subtitle }: { company: string; subtitle: string }) {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Pretendard',sans-serif] font-semibold gap-[20px] items-start leading-[normal] not-italic relative shrink-0 text-[24px] text-[#161513] whitespace-nowrap">
      <p className="relative shrink-0">{company}</p>
      <p className="relative shrink-0">{subtitle}</p>
    </div>
  );
}

function StatusBadge({ tone, children, className = "" }: { tone: "as-is" | "to-be"; children: string; className?: string }) {
  return (
    <div
      className={`content-stretch flex items-center justify-center px-[20px] py-[4px] rounded-[20px] shrink-0 ${
        tone === "as-is" ? "bg-[#aeaeae]" : "bg-[#1e9898]"
      } ${className}`}
    >
      <p className="font-['Space_Grotesk',sans-serif] font-semibold text-[18px] text-white whitespace-nowrap">{children}</p>
    </div>
  );
}

function IssueList({ heading, items, className = "" }: { heading: string; items: React.ReactNode[]; className?: string }) {
  return (
    <div className={`content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[14px] ${className}`}>
      <p className="font-['Manrope',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#161513] whitespace-nowrap">{heading}</p>
      <div className="content-stretch flex flex-col font-['Pretendard',sans-serif] font-medium gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#8a8a8a]">
        {items.map((item, i) => (
          <ul key={i} className="block relative shrink-0">
            <li className="list-disc ms-[21px]">
              <span className="leading-[1.5]">{item}</span>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

/** "대출코드입력페이지 개선" as-is/to-be comparison — Figma 2483:2562 */
function LoanCodeInputSection() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <SectionHeading company="하나은행 기업뱅킹" subtitle="[대출코드입력페이지 개선]" />
      <div className="bg-[#f6ffff] relative shrink-0 w-full h-[832px] overflow-hidden">
        <div className="absolute h-[501px] left-1/2 -translate-x-1/2 ml-[-412.5px] top-[198px] w-[260px]">
          <div className="absolute aspect-[390/751] border border-[#ededed] border-solid bottom-[0.33px] left-0 right-0 rounded-[20px] overflow-hidden">
            <AssetPlaceholder label="사업자맞춤대출 as-is" className="absolute inset-0" />
          </div>
        </div>
        <div className="absolute left-[97px] top-[102px]">
          <IssueList heading="Problem" items={["텍스트의 강약이없고 단조로운 페이지"]} />
        </div>
        <StatusBadge tone="as-is" className="absolute left-[97px] top-[57px]">as-is</StatusBadge>
        <StatusBadge tone="to-be" className="absolute left-[483px] top-[57px]">to-be</StatusBadge>
        <div className="absolute h-[559px] left-[465px] top-[178px] w-[743.666px]">
          <div className="absolute aspect-[320/692.9066772460938] bottom-[57.06px] left-[39.94%] right-[31.38%] rounded-[20px] shadow-[2px_18px_33px_1px_rgba(0,0,0,0.1)] overflow-hidden">
            <AssetPlaceholder label="시안 · 대출코드입력페이지 개선" className="absolute inset-0" />
          </div>
          <div className="absolute bottom-[56.58px] h-[461.938px] right-0 rounded-[20px] shadow-[2px_18px_33px_1px_rgba(0,0,0,0.1)] w-[213.333px] overflow-hidden">
            <AssetPlaceholder label="추가시안 · 상품설명" className="absolute inset-0" />
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 ml-[-230.33px] h-[559px] w-[283px] overflow-hidden rounded-[20px]">
            <AssetPlaceholder label="to-be 베이스 화면 (image 3936)" className="absolute inset-0" />
          </div>
        </div>
      </div>
    </div>
  );
}

/** "대출상품 페이지 개선" — Figma 2483:2612. Phone mockup + flat comparison-grid graphic. */
function LoanProductSection() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <SectionHeading company="하나은행 기업뱅킹" subtitle="[대출상품 페이지 개선]" />
      <div className="bg-white relative shrink-0 w-full h-[746px] overflow-hidden">
        {/* Phone mockup frame — chrome (shadow/border/notch) and screen content are all missing Figma-exported assets */}
        <div className="absolute h-[606.353px] left-[161px] top-[68px] w-[300px] rounded-[40px] border-[8px] border-[#1f1f1f] bg-[#1f1f1f] shadow-[0_20px_40px_rgba(0,0,0,0.15)] overflow-hidden">
          <AssetPlaceholder label="상품상세 화면 (iPhone 목업, 시안1)" className="absolute inset-0" />
        </div>
        <div className="absolute bottom-[68px] h-[583px] left-[548px] w-[571px] rounded-[12px] overflow-hidden">
          <AssetPlaceholder label="대출한도 비교 카드 그리드 (image 3932)" className="absolute inset-0" />
        </div>
      </div>
    </div>
  );
}

/** "법인비대면계좌개설 랜딩페이지 개선" — Figma 2483:2642. Largest section: as-is/to-be + illustrated hero background. */
function CorporateAccountSection() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <SectionHeading company="하나은행 기업뱅킹" subtitle="[법인비대면계좌개설 랜딩페이지 개선]" />
      <div className="bg-white relative shrink-0 w-full h-[3227px] overflow-hidden">
        <div className="absolute border border-[#ededed] border-solid h-[563px] left-[98px] rounded-[20px] top-[210px] w-[260px] overflow-hidden">
          <AssetPlaceholder label="법인 비대면 계좌개설 as-is" className="absolute inset-0" />
        </div>
        <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[12px] items-start left-[97px] text-[14px] top-[102px] whitespace-nowrap">
          <IssueList
            heading="Problem"
            items={["올드한 일러스트 스타일과 컬러 교체 요청", "스와이프 형식의 ux는 고객이 내용을 숙지하는데 어려움이 있어서 교체"]}
          />
        </div>
        <StatusBadge tone="as-is" className="absolute left-[97px] top-[57px]">as-is</StatusBadge>
        <div className="absolute h-[636px] left-1/2 -translate-x-1/2 ml-[64.5px] top-[194px] w-[320px] rounded-[20px] overflow-hidden">
          <AssetPlaceholder label="법인 비대면 계좌개설 to-be 화면 1 (image 3937)" className="absolute inset-0" />
        </div>
        <div className="absolute h-[636px] left-1/2 -translate-x-1/2 ml-[384.5px] top-[194px] w-[320px] rounded-[20px] overflow-hidden">
          <AssetPlaceholder label="법인 비대면 계좌개설 to-be 화면 2 (image 3938)" className="absolute inset-0" />
        </div>
        <StatusBadge tone="to-be" className="absolute left-[566px] top-[57px]">to-be</StatusBadge>

        {/* Decorative illustrated background — floating icons behind the final scrolling screen, all at 30% opacity in Figma */}
        <div className="absolute bottom-[-419px] h-[2450px] left-[50px] right-0 pointer-events-none" data-name="bg">
          <AssetPlaceholder label="배경 데코 · 휴대폰" className="absolute inset-[52%_4.23%_20.92%_43.45%] opacity-30" />
          <AssetPlaceholder label="배경 데코 · 앱아이콘" className="absolute inset-[58.62%_11.92%_34.79%_75.04%] opacity-30" />
          <AssetPlaceholder label="배경 데코 · 손" className="absolute inset-[62.9%_20.95%_24.14%_43.45%] opacity-30" />
          <AssetPlaceholder label="배경 데코 · 아이콘3" className="absolute size-[245.58px] left-[66px] top-[41.96%] opacity-30 rotate-[-13.9deg]" />
          <AssetPlaceholder label="배경 데코 · 아이콘2" className="absolute size-[338.541px] left-[63.3%] top-[12.2%] opacity-30 rotate-[17.28deg]" />
        </div>
        <AssetPlaceholder label="배경 데코 · 아이콘1" className="absolute size-[259.943px] left-[17.12%] top-[1066px] opacity-30 -rotate-[20deg]" />
        <div className="absolute bottom-[146px] left-1/2 -translate-x-1/2 ml-[0.5px] h-[2129px] w-[500px] rounded-[8px] shadow-[2px_18px_33px_1px_rgba(0,0,0,0.1)] overflow-hidden">
          <AssetPlaceholder label="법인비대면 시안최종 (스크롤 전체 화면)" className="absolute inset-0" />
        </div>
      </div>
    </div>
  );
}

function ProcessContentGrid() {
  return (
    <div className="content-stretch flex flex-col gap-[65px] items-start pb-[96px] pt-[24px] px-[80px] relative shrink-0 w-full" data-name="process-content-grid">
      <ProjectMetaBox />
      <FooterDivider />
      <LoanCodeInputSection />
      <FooterDivider />
      <LoanProductSection />
      <FooterDivider />
      <CorporateAccountSection />
    </div>
  );
}

function ArrowRightWrapper() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow-right-wrapper">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="arrow-right-wrapper">
          <path d="M4 12H20M12 20L20 12L12 4" id="arrow-right" stroke="var(--stroke-0, #E4501D)" strokeLinecap="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function NextProjectBanner() {
  return (
    <Link
      to="/work/ipnos"
      className="bg-[rgba(255,255,255,0.6)] relative shrink-0 w-full no-underline block hover:bg-[rgba(255,255,255,0.85)] transition-colors cursor-pointer"
      data-name="next-project-banner"
    >
      <div aria-hidden className="absolute border-[#e5e0d0] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[80px] py-[40px] relative size-full">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap">
            <p className="font-['Space_Grotesk',sans-serif] font-normal relative shrink-0 text-[#8a8a8a] text-[12px] tracking-[0.006px] uppercase">NEXT PROJECT</p>
            <p className="font-['Pretendard',sans-serif] font-semibold relative shrink-0 text-[#161513] text-[20px]">이프노스 요가복 상세페이지</p>
          </div>
          <ArrowRightWrapper />
        </div>
      </div>
    </Link>
  );
}

function SocialLinks() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 text-[#161513]" data-name="social-links">
      <p className="relative shrink-0">INSTAGRAM</p>
      <p className="relative shrink-0">LINKEDIN</p>
    </div>
  );
}

function FooterContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="footer-content">
      <div className="flex flex-row items-center size-full">
        <div className="[word-break:break-word] content-stretch flex font-['Space_Grotesk',sans-serif] font-medium items-center justify-between leading-[normal] not-italic px-[80px] py-[40px] relative size-full text-[14px] tracking-[0.007px] uppercase whitespace-nowrap">
          <p className="relative shrink-0 text-[#8a8a8a]">LOCAL TIME · SEOUL, KOREA</p>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default function WorksDetailHanaBankDesktop() {
  return (
    <div className="bg-[#fff8e9] content-stretch flex flex-col items-start relative size-full" data-name="works-detail-hana-bank-desktop">
      <BackNav />
      <CaseHeaderGrid />
      <HeroSection />
      <ProcessContentGrid />
      <NextProjectBanner />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="footer-wrapper">
        <div className="h-0 relative shrink-0 w-full" data-name="Line">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1">
              <line id="footer-divider" stroke="var(--stroke-0, #E5E0D0)" x2="1440" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <FooterContent />
      </div>
      <ScrollToTopButton />
    </div>
  );
}
