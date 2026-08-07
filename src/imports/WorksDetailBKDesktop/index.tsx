import { Link } from "react-router";
import ScrollToTopButton from "@/app/components/ScrollToTopButton";
import imgHero from "./hero.png";
import imgIoneBadge from "./ione-badge.png";
import imgDesignMotifDiagram from "./design-motif-diagram.png";
import imgSectionSplash from "./section-splash.png";
import imgSectionMain from "./section-main.png";
import imgSectionAi from "./section-ai.png";
import imgSectionProduct from "./section-product.png";
import imgSectionLounge from "./section-lounge.png";
import imgSectionAsset from "./section-asset.png";
import imgSectionEtc from "./section-etc.png";

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
          <Link to="/work" className="[word-break:break-word] font-['Space_Grotesk',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#e4501d] text-[14px] whitespace-nowrap no-underline hover:opacity-70 transition-opacity">Back to works</Link>
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
        <p className="relative shrink-0 text-[#8a8a8a]">2024</p>
      </div>
      <div className="font-['Pretendard',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#161513] text-[40px] w-full">
        <p className="leading-[normal] mb-0">IBK 기업은행</p>
        <p className="leading-[normal]">개인스마트뱅킹 APP 제안 시안</p>
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
    <div className="relative shrink-0 w-full" data-name="hero-mockup-container">
      <div className="content-stretch flex flex-col gap-[32px] items-start px-[80px] relative size-full">
        <div className="h-[560px] relative shrink-0 w-full overflow-hidden" data-name="hero-mockup">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHero} />
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
        <ProjectMetaRow label="Client" value={<span className="whitespace-nowrap"><span className="font-['Manrope',sans-serif] font-semibold text-[14px]">IBK</span> 기업은행 제안시안</span>} />
        <ProjectMetaRow label="Duration" value={<span className="whitespace-nowrap">2024.11-2024.12</span>} />
        <ProjectMetaRow label="Contribution" value={<span className="whitespace-nowrap">메인화면 디자인 100% , 서브화면 디자인 80%</span>} />
        <ProjectMetaRow label="Role" value={<span className="whitespace-nowrap">pl</span>} />
        <ProjectMetaRow label="Tools" value={<span className="whitespace-nowrap">Figma , photoshop</span>} />
      </div>
    </div>
  );
}

function ConceptSection() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="process-texts">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 w-full">
        <p className="font-['Space_Grotesk',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#161513] text-[24px] whitespace-nowrap">Concept</p>
        <div className="font-['Pretendard',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[14px] text-[#8a8a8a] max-w-[720px]">
          <p className="mb-0">제안시안부터 구축까지 모든 과정을 함께 했습니다.</p>
          <p className="mb-0">realtime, familly banking, intelligent 를 추구하며 고객 맞춤형 정보 제공을 기획 컨셉으로 진행하였습니다.</p>
          <p>simple&clearly(심플하고 명료한) , consistent(일관된), flasibility&usability(유연한 사용성)을 디자인 컨셉으로 메인부터 서브페이지 까지 작업하였습니다.</p>
        </div>
      </div>
    </div>
  );
}

function DesignMotifSection() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="process-texts">
      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
        <p className="[word-break:break-word] font-['Space_Grotesk',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#161513] text-[24px] whitespace-nowrap">Design Motiff</p>
        <div className="[word-break:break-word] content-stretch flex flex-col font-['Pretendard',sans-serif] font-medium items-start leading-[1.5] not-italic relative shrink-0 text-[14px] text-[#8a8a8a]">
          <p className="relative shrink-0">원과 원의 전진의 형태를 활용하여 "고객과 함께 꿈을 실현, 더 나은 세상으로 전진한다"는 모티브로 하였습니다.</p>
          <p className="relative shrink-0">원, 벤토그리드 를 적용하여 기존의 기업은행의 딱딱한 이미지보다 부드럽고 친근한 이미지로 선택했습니다.</p>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
            <img alt="" className="h-[19px] w-[120px] object-contain" src={imgIoneBadge} />
            <p className="[word-break:break-word] font-['Pretendard',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[#8a8a8a] whitespace-nowrap">ONE = Circle</p>
          </div>
          <img alt="" className="h-[68px] w-[459px] object-contain" src={imgDesignMotifDiagram} />
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

function MainPurpose({ items }: { items: string[] }) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[14px] w-full">
      <p className="font-['Manrope',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#161513]">Main purpose</p>
      <div className="content-stretch flex flex-col font-['Pretendard',sans-serif] font-medium gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#8a8a8a]">
        {items.map((item) => (
          <ul key={item} className="block relative shrink-0">
            <li className="list-disc ms-[21px]">
              <span className="leading-[1.5]">{item}</span>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

/** Figma-exported section panel — preserves strokes, shadows, flow arrows, dashed highlights. */
function SectionPanel({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative shrink-0 w-full overflow-hidden rounded-[20px]">
      <img alt={alt} className="block w-full h-auto pointer-events-none" src={src} />
    </div>
  );
}

function SplashSection() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <SectionHeading en="Splash" kr="[스플래시 , 앱구동]" />
      <SectionPanel src={imgSectionSplash} alt="Splash and app launch screens" />
    </div>
  );
}

function MainSection() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <SectionHeading en="Main" kr="[메인]" />
      <SectionPanel src={imgSectionMain} alt="Main screens with annotations" />
    </div>
  );
}

function AISection() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <SectionHeading en="AI" kr="[AI 금융비서]" />
      <MainPurpose
        items={[
          "AI금융비서 메뉴를 통해 금융 앱뿐만 아니라 나만의 비서역할을 한다는 점을 강조",
          "AI대화형뱅킹 기능을 통해 쓰는 뱅킹이 아닌 말하는 금융앱을 강조",
        ]}
      />
      <SectionPanel src={imgSectionAi} alt="AI banking screens with annotations" />
    </div>
  );
}

function ProductMainSection() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <SectionHeading en="Product Main" kr="[상품 홈]" />
      <MainPurpose
        items={[
          "카테고리별로 나뉘어진 상품 구성",
          "이자계산기, 같이하기 등의 기능을 통해 함께 하는 금융을 강조",
        ]}
      />
      <SectionPanel src={imgSectionProduct} alt="Product home screens with annotations" />
    </div>
  );
}

function RoungeSection() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <SectionHeading en="Rounge" kr="[라운지 홈]" />
      <MainPurpose items={["타겟층 별로 나눠진 탭에서 상품 및 기타 정보를 제공"]} />
      <SectionPanel src={imgSectionLounge} alt="Lounge screens with annotations" />
    </div>
  );
}

function MyAssetSection() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <SectionHeading en="My Asset" kr="[자산 홈]" />
      <MainPurpose items={["내 자산 뿐만이 아니라 family banking을 보여주는 기능을 강조"]} />
      <SectionPanel src={imgSectionAsset} alt="My Asset screens with annotations" />
    </div>
  );
}

function EtcSection() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <SectionHeading en="etc" kr="[패밀리 금융관리, 송금, 전체메뉴]" />
      <MainPurpose
        items={[
          "패밀리 금융관리는 내 금융이 가족 누구와 공유되어있는지 리스트, 상사형 이미지로 확인",
          "송금은 텍스트와 음성뿐만 아닌 계좌번호 촬영을하여 텍스트를 스스로 인식하여 송금",
        ]}
      />
      <SectionPanel src={imgSectionEtc} alt="Family banking, transfer, and menu screens" />
    </div>
  );
}

function ProcessContentGrid() {
  return (
    <div className="content-stretch flex flex-col gap-[65px] items-start pb-[96px] pt-[24px] px-[80px] relative shrink-0 w-full" data-name="process-content-grid">
      <ProjectMetaBox />
      <ConceptSection />
      <DesignMotifSection />
      <FooterDivider />
      <SplashSection />
      <FooterDivider />
      <MainSection />
      <FooterDivider />
      <AISection />
      <FooterDivider />
      <ProductMainSection />
      <FooterDivider />
      <RoungeSection />
      <FooterDivider />
      <MyAssetSection />
      <FooterDivider />
      <EtcSection />
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
    <div className="bg-[rgba(255,255,255,0.6)] relative shrink-0 w-full" data-name="next-project-banner">
      <div aria-hidden className="absolute border-[#e5e0d0] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[80px] py-[40px] relative size-full">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap">
            <p className="font-['Space_Grotesk',sans-serif] font-normal relative shrink-0 text-[#8a8a8a] text-[12px] tracking-[0.006px] uppercase">NEXT PROJECT</p>
            <p className="font-['Pretendard',sans-serif] font-semibold relative shrink-0 text-[#161513] text-[20px]">BK 기업은행 개인스마트뱅킹 APP 제안 시안</p>
          </div>
          <ArrowRightWrapper />
        </div>
      </div>
    </div>
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

export default function WorksDetailBKDesktop() {
  return (
    <div className="bg-[#fff8e9] content-stretch flex flex-col items-start relative size-full" data-name="works-detail-bk-desktop">
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
