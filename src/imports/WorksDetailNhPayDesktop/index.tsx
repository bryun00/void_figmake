import { Link } from "react-router";
import ScrollToTopButton from "@/app/components/ScrollToTopButton";
import imgHero from "./hero.png";
import imgAsIs1 from "./image-77.png";
import imgAsIs2 from "./image-78.png";
import imgAsIs3 from "./image-79.png";
import imgAsIs4 from "./image-80.png";
import imgToBe1 from "./image-3989.png";
import imgToBe2 from "./image-3992.png";
import imgToBe3 from "./image-3990.png";
import imgToBe4 from "./image-3991.png";
import imgToBe5 from "./image-76.png";
import imgToBe6 from "./image-3950.png";
import imgToBe7 from "./image-3951.png";
import imgToBe8 from "./image-3952.png";
import imgCardScrollTop from "./image-3953.png";
import imgCardFinal from "./image-3954.png";
import imgEventPage1 from "./image-3957.png";
import imgEventPage2 from "./image-3956.png";
import imgMainFlow from "./main-flow.svg";
import imgDisc from "./disc.svg";
import imgArrow from "./arrow.svg";

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
        <p className="relative shrink-0 text-[#8a8a8a]">2024</p>
      </div>
      <div className="font-['Pretendard',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#161513] text-[40px] w-full">
        <p className="leading-[normal] mb-0">NH pay,NH 카드</p>
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

function HeroSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="top">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[80px] relative size-full">
        <div className="bg-[#569c49] h-[560px] overflow-clip relative shrink-0 w-full" data-name="img">
          <img alt="NH pay / NH 카드 hero" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHero} />
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
        <ProjectMetaRow label="Client" value={<span className="whitespace-nowrap"><span className="font-['Manrope',sans-serif] font-semibold">NH pay,NH</span> 카드</span>} />
        <ProjectMetaRow label="Duration" value={<span className="font-['Manrope',sans-serif] font-semibold whitespace-nowrap">2024.02-2024.06</span>} />
        <ProjectMetaRow label="Contribution" value={<span className="whitespace-nowrap">디자인 100%</span>} />
        <ProjectMetaRow label="Role" value={<span className="whitespace-nowrap">pa</span>} />
        <ProjectMetaRow label="Tools" value={<span className="font-['Manrope',sans-serif] font-semibold whitespace-nowrap">Photoshop, XD</span>} />
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

function OverviewSection() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="process-texts">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 w-full">
        <p className="font-['Space_Grotesk',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#161513] text-[24px] whitespace-nowrap">Overview</p>
        <div className="font-['Pretendard',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[14px] text-[#8a8a8a] max-w-full">
          <p className="mb-0">이번 프로젝트는 NH pay 앱의 챗봇 개선을 위해 지원인력으로 투입이 되었습니다.</p>
          <p>사용자 환경 개선을 위한 UI 고도화 작업을 진행했습니다.</p>
        </div>
      </div>
    </div>
  );
}

function ConceptSection() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="process-texts">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 w-full">
        <p className="font-['Space_Grotesk',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#161513] text-[24px] whitespace-nowrap">Concept</p>
        <p className="font-['Pretendard',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[14px] text-[#8a8a8a] max-w-full">
          NH캐릭터 “올리”를 이용해 고객들에게 친근함을 주기 위한 컨셉으로 진행했습니다.
        </p>
      </div>
    </div>
  );
}

function SectionHeading({ en, kr }: { en: string; kr: string }) {
  return (
    <div className="content-stretch flex gap-[20px] items-start leading-[normal] not-italic relative shrink-0 text-[24px] text-[#161513] whitespace-nowrap">
      <p className="font-['Space_Grotesk',sans-serif] font-semibold relative shrink-0">{en}</p>
      <p className="font-['Pretendard',sans-serif] font-semibold relative shrink-0">{kr}</p>
    </div>
  );
}

function StatusBadge({ tone, children }: { tone: "as-is" | "to-be"; children: string }) {
  return (
    <div
      className={`content-stretch flex items-center justify-center px-[20px] py-[4px] rounded-[20px] shrink-0 ${
        tone === "as-is" ? "bg-[#aeaeae]" : "bg-[#1e973d]"
      }`}
    >
      <p className="font-['Space_Grotesk',sans-serif] font-semibold text-[18px] text-white whitespace-nowrap">{children}</p>
    </div>
  );
}

function IssueList({ heading, items }: { heading: string; items: React.ReactNode[] }) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[14px] w-[320px]">
      <p className="font-['Manrope',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#161513]">{heading}</p>
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

/** Chatbot as-is/to-be comparison — Figma 2479:2057 */
function ChatbotComparisonSection() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <SectionHeading en="NH pay" kr="[챗봇 개선]" />
      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
        {/* as-is */}
        <div className="bg-[#e2e2e2] relative shrink-0 w-full">
          <div className="flex flex-col gap-[36px] items-start px-[134px] pt-[57px] pb-[80px]">
            <StatusBadge tone="as-is">as-is</StatusBadge>
            <IssueList
              heading="Problem"
              items={[
                "최상단 챗봇 캐릭터 영역의 낭비",
                "카드 자체 정보구조가 대화 맥락과 분리되어있어 위젯처럼 보이는 디자인",
                "카드형 레이아웃안의 버튼 유도력이 약함",
              ]}
            />
            <div className="flex gap-[44px] items-start w-full justify-center">
              {[imgAsIs1, imgAsIs2, imgAsIs3, imgAsIs4].map((src, i) => (
                <div key={i} className="h-[476px] rounded-[20px] shrink-0 w-[220px] overflow-hidden">
                  <img alt="NH pay 챗봇 as-is 화면" className="block size-full object-cover pointer-events-none" src={src} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* to-be */}
        <div className="bg-white relative shrink-0 w-full">
          <div className="flex flex-col gap-[36px] items-start px-[134px] pt-[85px]">
            <StatusBadge tone="to-be">to-be</StatusBadge>
            <div className="flex gap-[44px] items-start w-full justify-center">
              {[imgToBe1, imgToBe2, imgToBe3, imgToBe4].map((src, i) => (
                <div key={i} className="h-[464px] rounded-[20px] border border-[#ededed] shrink-0 w-[220px] overflow-hidden">
                  <img alt="NH pay 챗봇 to-be 화면" className="block size-full object-cover pointer-events-none" src={src} />
                </div>
              ))}
            </div>
            <IssueList
              heading="Solution"
              items={[
                "캐릭터 헤더 영역이 줄어듬으로 상단 공간 낭비를 줄임",
                "퀵리플라이가 해시태그 형태로 바뀌면서 한 줄에 더 많은 옵션이 들어감",
              ]}
            />
            <div className="flex gap-[44px] items-center w-full justify-center pt-[41px]">
              {[imgToBe5, imgToBe6, imgToBe7, imgToBe8].map((src, i) => (
                <div key={i} className="h-[464px] rounded-[20px] border border-[#ededed] shrink-0 w-[220px] overflow-hidden">
                  <img alt="NH pay 챗봇 to-be 음성인식 화면" className="block size-full object-cover pointer-events-none" src={src} />
                </div>
              ))}
            </div>
            <div className="pb-[80px]">
              <IssueList
                heading="Solution"
                items={[
                  "음성인식 플로우가 생겨 대화형 입력 경로가 다양해짐",
                  "카드형레이아웃을 버리고 선택 버튼을 리스트 형식으로 단순화",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Curved dashed connector overlaid on top of a screen mockup, pointing to the
 * next screen — Figma "_Main / Flow". Positioned absolutely within a
 * `relative` ancestor using the exact left/top from the design so it overlaps
 * the highlighted UI element instead of floating between the screens.
 */
function FlowConnector({
  left,
  top,
  containerHeight,
  dashedHeight,
  dashedTopOffset,
}: {
  left: number;
  top: number;
  containerHeight: number;
  dashedHeight: number;
  dashedTopOffset: number;
}) {
  return (
    <div className="absolute w-[320px]" style={{ left: `${left}px`, top: `${top}px`, height: `${containerHeight}px` }}>
      <div
        className="-translate-y-1/2 absolute border-2 border-[#3c54bb] border-dashed left-0 right-[24.69%] rounded-[4px]"
        style={{ height: `${dashedHeight}px`, top: `calc(50% + ${dashedTopOffset}px)` }}
      />
      <div className="absolute flex h-[144px] items-center justify-center left-[243px] top-0 w-[77px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[144px] relative w-[77px]">
            <div className="absolute inset-[-0.69%_0]">
              <img alt="" className="block max-w-none size-full" src={imgMainFlow} />
            </div>
            <div className="absolute flex items-center justify-center left-[-8px] size-[16px] top-[-8px]">
              <div className="flex-none rotate-180">
                <div className="relative size-[16px]">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[4px] top-1/2">
                    <div className="absolute inset-[-25%]">
                      <img alt="" className="block max-w-none size-full" src={imgDisc} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[-8px] right-[-8px] size-[16px]">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[12px] left-[calc(50%-2px)] top-1/2 w-[6px]">
                <div className="absolute inset-[-5.89%_-23.57%_-5.89%_-11.79%]">
                  <img alt="" className="block max-w-none size-full" src={imgArrow} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** "꿈드리미카드 안내/신청 페이지 신규" flow — Figma 2479:2090 */
function DreamCardFlowSection() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <SectionHeading en="NH Card" kr="[꿈드리미카드 안내/신청 페이지 신규]" />
      <div className="bg-white relative shrink-0 w-full h-[746px] overflow-hidden">
        {/* screen 1 — top of the scrolling detail page */}
        <div className="absolute h-[593px] left-[63px] top-[115px] w-[230px]">
          <div className="absolute bottom-0 h-[593px] w-[230px] rounded-tl-[20px] rounded-tr-[20px] border border-b-0 border-[#ededed] overflow-hidden">
            <img alt="꿈드리미 교육 바우처 신청 상단 화면" className="absolute left-[-0.02%] top-0 h-[146.21%] w-[100.04%] max-w-none pointer-events-none" src={imgCardScrollTop} />
          </div>
          <div className="absolute bottom-0 left-0 h-[53px] w-[230px] bg-gradient-to-b from-transparent to-[74.528%] to-white" />
        </div>
        {/* screen 2 — scrolled further down to the highlighted "신청" button */}
        <div className="absolute h-[611px] left-[313px] top-[34px] w-[230px]">
          <div className="absolute bottom-0 h-[611px] w-[230px] rounded-[20px] border border-[#ededed] overflow-hidden">
            <img alt="꿈드리미 교육 바우처 신청 버튼 화면" className="absolute left-[-0.02%] top-[-41.9%] h-[141.9%] w-[100.04%] max-w-none pointer-events-none" src={imgCardScrollTop} />
          </div>
          <div className="absolute top-0 left-0 h-[53px] w-[230px] bg-gradient-to-t from-transparent to-[74.528%] to-white" />
        </div>
        {/* screen 3 — final application screen */}
        <div className="absolute -translate-y-1/2 h-[516px] left-[639px] top-1/2 w-[230px]">
          <div className="h-[516px] w-[230px] rounded-[20px] border border-[#ededed] overflow-hidden">
            <img alt="꿈드리미 바우처카드 신청 화면" className="block size-full object-cover pointer-events-none" src={imgCardFinal} />
          </div>
        </div>
        {/* curved connector, overlaid on the "신청" button in screen 2, pointing at screen 3 */}
        <FlowConnector left={306} top={485} containerHeight={170} dashedHeight={52} dashedTopOffset={59} />
        <div className="absolute left-[889px] top-[333px] w-[320px]">
          <IssueList
            heading="Concept"
            items={[
              "직관적인 ui를 위해 비교 버튼이 양쪽에 병렬로 놓이도록 디자인",
              "앱의 브랜드 컬러를 지키는 디자인을 기본으로 함",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

/** "이벤트페이지, 안내페이지" flow — Figma 2483:2399 */
function EventPageFlowSection() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <SectionHeading en="NH Card" kr="[이벤트페이지, 안내페이지]" />
      <div className="bg-white relative shrink-0 w-full h-[1298px] overflow-hidden">
        <div className="absolute h-[773px] left-[369px] top-[58px] w-[220px] rounded-[20px] border border-[#ededed] overflow-hidden">
          <img alt="NH포인트 플러스 이벤트 안내 화면" className="block size-full object-cover pointer-events-none" src={imgEventPage1} />
        </div>
        <div className="absolute h-[1182px] left-[704px] top-[58px] w-[230px] rounded-[20px] border border-[#ededed] overflow-hidden">
          <img alt="매일매일 교통적립 상세 화면" className="block size-full object-cover pointer-events-none" src={imgEventPage2} />
        </div>
        {/* curved connector, overlaid on the highlighted CTA in screen 1, pointing at screen 2 */}
        <FlowConnector left={358} top={218} containerHeight={179} dashedHeight={70} dashedTopOffset={54.5} />
        <div className="absolute left-[358px] top-[870px] w-[320px]">
          <IssueList
            heading="Concept"
            items={[
              <>
                하루 3번 적립 가능한 내용을 도장으로 형상화 하여
                <br />
                key-비쥬얼로 사용
              </>,
              <>
                상세페이지에서는 어떤 적립인지에 대한 이미지인지
                <br />
                중점을 두어 비쥬얼화 하는 작업
              </>,
            ]}
          />
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
      <OverviewSection />
      <ConceptSection />
      <ChatbotComparisonSection />
      <FooterDivider />
      <DreamCardFlowSection />
      <FooterDivider />
      <EventPageFlowSection />
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
      to="/work/hana-bank"
      className="bg-[rgba(255,255,255,0.6)] relative shrink-0 w-full no-underline block hover:bg-[rgba(255,255,255,0.85)] transition-colors cursor-pointer"
      data-name="next-project-banner"
    >
      <div aria-hidden className="absolute border-[#e5e0d0] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[80px] py-[40px] relative size-full">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap">
            <p className="font-['Space_Grotesk',sans-serif] font-normal relative shrink-0 text-[#8a8a8a] text-[12px] tracking-[0.006px] uppercase">NEXT PROJECT</p>
            <p className="font-['Pretendard',sans-serif] font-semibold relative shrink-0 text-[#161513] text-[20px]">하나은행 기업뱅킹 pc,mobile</p>
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

export default function WorksDetailNhPayDesktop() {
  return (
    <div className="bg-[#fff8e9] content-stretch flex flex-col items-start relative size-full" data-name="works-detail-nh-pay-desktop">
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
