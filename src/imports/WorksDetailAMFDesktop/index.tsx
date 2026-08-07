import { Link } from "react-router";
import ScrollToTopButton from "@/app/components/ScrollToTopButton";
import imgHero from "./hero.png";
import imgStyleGuide from "./style-guide.png";
import imgSectionMain from "./section-main.png";
import imgSectionMypage from "./section-mypage.png";

function ArrowLeftWrapper() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow-left-wrapper">
      <Link to="/work" className="absolute inset-0 flex items-center justify-center hover:opacity-70 transition-opacity">
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
          <Link to="/work" className="[word-break:break-word] font-['Space_Grotesk',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#e4501d] text-[14px] whitespace-nowrap no-underline hover:opacity-70 transition-opacity">
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
        <p className="relative shrink-0 text-[#e4501d]">구축</p>
        <p className="relative shrink-0 text-[#8a8a8a]">2020</p>
      </div>
      <div className="font-['Pretendard',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#161513] text-[40px] w-full">
        <p className="leading-[normal] mb-0">AMF Fantasy</p>
        <p className="leading-[normal]">글로벌 사이트</p>
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
        <div className="bg-[#444235] h-[560px] overflow-clip relative shrink-0 w-full" data-name="img">
          <img alt="AMF Fantasy hero" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHero} />
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
        <ProjectMetaRow label="Client" value={<span className="font-['Manrope',sans-serif] font-semibold whitespace-nowrap">Asian model festival</span>} />
        <ProjectMetaRow label="Duration" value={<span className="font-['Manrope',sans-serif] font-semibold whitespace-nowrap">2020.10-2020.11</span>} />
        <ProjectMetaRow label="Contribution" value={<span className="whitespace-nowrap">디자인 100%</span>} />
        <ProjectMetaRow label="Role" value={<span className="whitespace-nowrap">pl</span>} />
        <ProjectMetaRow label="Tools" value={<span className="font-['Manrope',sans-serif] font-semibold whitespace-nowrap">Figma , photoshop</span>} />
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
          <p className="mb-0">매년 열리는 “Asia model Festival” 에 고객 참여를 독려하기 위한 마케팅의 일원으로 시작된 프로젝트입니다.</p>
          <p className="mb-0">한국보다 해외 국가에 입소문이 더 나 있던 이번 프로젝트를 위하여, 어떻게 하면 고객들의 이목을 끌게 할 수 있을까 생각하였습니다.</p>
          <p className="mb-0">이미 외국에는 승자예측, 승부예측과 같은 게임이 많이 활성화되어있었고 이를 이용하여, 고객 참여형 게임을 만들면 좋겠다는 것이 이번 프로젝트의 기획이었습니다.</p>
          <p>승자예측 게임을 통하여 본인이 응원하는 모델을 선정하고 실제 모델 페스티벌의 라운드별 결과와 대조하며 상품도 받을 수 있는 컨텐츠가 Asia model Festival Fantasy의 시작입니다.</p>
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
        <div className="font-['Pretendard',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[14px] text-[#8a8a8a] max-w-full whitespace-pre-wrap">
          <p className="mb-0">“내가 PICK!한 모델이 승자가 될수 있을까?!”</p>
          <p className="mb-0">글로벌 사용자를 위한 승자예측 게임을 통하여 사용자들은 경품을 받을 수 있고, 이를통해 AMF도 홍보할 수 있는</p>
          <p>참여형 캐주얼 게임사이트</p>
        </div>
      </div>
    </div>
  );
}

function UiStyleGuideSection() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="process-texts">
      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
        <p className="[word-break:break-word] font-['Space_Grotesk',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#101116] text-[24px] whitespace-nowrap">UI style guide</p>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full max-w-[1086px]">
          <img alt="AMF UI style guide" className="block w-full h-auto max-w-[1086px] pointer-events-none" src={imgStyleGuide} />
        </div>
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

function SectionHeading({ en, kr }: { en: string; kr: string }) {
  return (
    <div className="content-stretch flex gap-[20px] items-start leading-[normal] not-italic relative shrink-0 text-[24px] text-[#161513] whitespace-nowrap">
      <p className="font-['Space_Grotesk',sans-serif] font-semibold relative shrink-0">{en}</p>
      <p className="font-['Pretendard',sans-serif] font-semibold relative shrink-0">{kr}</p>
    </div>
  );
}

function DesignStory({ items }: { items: string[] }) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <p className="[word-break:break-word] font-['Manrope',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[14px] text-[#161513] whitespace-nowrap">Design story</p>
      <ul className="[word-break:break-word] block font-['Pretendard',sans-serif] font-medium leading-[0] list-disc not-italic relative shrink-0 text-[14px] text-[#8a8a8a]">
        {items.map((item, i) => (
          <li key={item} className={`ms-[21px] ${i < items.length - 1 ? "mb-0" : ""}`}>
            <span className="leading-[1.5]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SectionPanel({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative shrink-0 w-full">
      <img alt={alt} className="block w-full h-auto pointer-events-none" src={src} />
    </div>
  );
}

function MainSection() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <SectionHeading en="Main" kr="[메인]" />
      <DesignStory
        items={[
          "모델의 순위를 카드게임 속의 king, queen 등 말의 이름이나 포지션에 동일시 하여 직관적인 디자인을 주고자 하였습니다.",
          "카드게임이라는 모티브를 통하여 ui디자인을 하여 모델 pick부분에 사이트 전체적인 디자인 포커스를 두었습니다.",
        ]}
      />
      <SectionPanel src={imgSectionMain} alt="AMF Fantasy main screens" />
    </div>
  );
}

function MyPageSection() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <SectionHeading en="My page" kr="[마이페이지]" />
      <SectionPanel src={imgSectionMypage} alt="AMF Fantasy my page screens" />
    </div>
  );
}

function ProcessContentGrid() {
  return (
    <div className="content-stretch flex flex-col gap-[65px] items-start pb-[96px] pt-[24px] px-[80px] relative shrink-0 w-full" data-name="process-content-grid">
      <ProjectMetaBox />
      <OverviewSection />
      <ConceptSection />
      <UiStyleGuideSection />
      <FooterDivider />
      <MainSection />
      <FooterDivider />
      <MyPageSection />
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
      to="/work/ls"
      className="bg-[rgba(255,255,255,0.6)] relative shrink-0 w-full no-underline block hover:bg-[rgba(255,255,255,0.85)] transition-colors cursor-pointer"
      data-name="next-project-banner"
    >
      <div aria-hidden className="absolute border-[#e5e0d0] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[80px] py-[40px] relative size-full">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap">
            <p className="font-['Space_Grotesk',sans-serif] font-normal relative shrink-0 text-[#8a8a8a] text-[12px] tracking-[0.006px] uppercase">NEXT PROJECT</p>
            <p className="font-['Pretendard',sans-serif] font-semibold relative shrink-0 text-[#161513] text-[20px]">LS증권 사내 업무형 AI플랫폼 구축 프로젝트 제안</p>
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

export default function WorksDetailAMFDesktop() {
  return (
    <div className="bg-[#fff8e9] content-stretch flex flex-col items-start relative size-full" data-name="works-detail-amf-desktop">
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
