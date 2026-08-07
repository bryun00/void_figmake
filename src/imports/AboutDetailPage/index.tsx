import imgAboutTitle from "@/imports/image-3.png";
import imgProfileHalftone from "./profile-halftone.png";

function IntroBlock() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="intro-block">
      <p className="[word-break:break-word] font-['Space_Grotesk',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[24px] text-[#161513] w-full">
        what color are you?
      </p>
    </div>
  );
}

function Hero() {
  return (
    <div className="relative shrink-0 w-full" data-name="hero">
      <div aria-hidden className="absolute border-[#e5e0d0] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[82px] items-start pb-[170px] pt-[80px] px-[80px] relative size-full">
        <img src={imgAboutTitle} alt="About" style={{ display: "block", width: "462px", height: "56px", objectFit: "contain", objectPosition: "left", flexShrink: 0 }} />
        <IntroBlock />
      </div>
    </div>
  );
}

function LeftLabelColumn() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-[180px]" data-name="left-label-column">
      <p className="font-['Space_Grotesk',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#161513] text-[18px] w-full">Profile</p>
      <p className="font-['Pretendard',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#8a8a8a] text-[12px] w-full">프로필</p>
    </div>
  );
}

function MemberBio() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="member-bio">
      <p className="font-['Space_Grotesk',sans-serif] font-semibold relative shrink-0 text-[#e4501d] text-[0px] w-full">
        <span className="font-['Pretendard',sans-serif] font-normal leading-[1.6] text-[22px]">윤보람</span>
        <span className="leading-[normal] text-[24px]">{` / Boram Yun`}</span>
      </p>
      <div className="font-['Pretendard',sans-serif] font-medium relative shrink-0 text-[#161513] text-[14px] w-[574px] max-w-full whitespace-pre-wrap">
        <p className="leading-[1.5] mb-0">{`어디에나 스며들고, 무엇이든 선명하게 만드는 '무채색' 같은 사람`}</p>
        <p className="leading-[1.5] mb-0">{`어떤 색과 섞여도 이질감이 없고, `}</p>
        <p className="leading-[1.5] mb-0">동시에 곁에 있는 다른 색들을 더욱 돋보이게 만드는 무채색.</p>
        <p className="leading-[1.5]">{`저는 저 자신을 화려한 원색보다는, 팀의 조화와 본질에 집중하는 '무채색의 협력자' 라 정의합니다.`}</p>
      </div>
    </div>
  );
}

function MemberProfile() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="member-profile">
      <div className="h-[281px] relative shrink-0 w-[342px] overflow-hidden" data-name="Rectangle · halftone · halftone">
        <img
          alt=""
          src={imgProfileHalftone}
          className="absolute max-w-none pointer-events-none"
          style={{ height: "147.78%", width: "121.21%", left: "-10.91%", top: "-21.67%" }}
        />
      </div>
      <MemberBio />
    </div>
  );
}

function RightContentColumn() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="right-content-column">
      <MemberProfile />
    </div>
  );
}

function SectionRow() {
  return (
    <div className="content-stretch flex gap-[24px] items-start py-[64px] relative shrink-0 w-full" data-name="section-row">
      <div aria-hidden className="absolute border-[#e5e0d0] border-b border-solid inset-0 pointer-events-none" />
      <LeftLabelColumn />
      <RightContentColumn />
    </div>
  );
}

function LeftLabelColumn1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-[180px]" data-name="left-label-column">
      <p className="font-['Space_Grotesk',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#161513] text-[18px] w-full">My Values</p>
      <p className="font-['Pretendard',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#8a8a8a] text-[12px] w-full">핵심 가치</p>
    </div>
  );
}

function ValueBlock({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="right-content-column">
      <p className="font-['Pretendard',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#161513] text-[18px] w-full">{title}</p>
      <div className="font-['Pretendard',sans-serif] font-medium leading-[0] relative shrink-0 text-[#161513] text-[14px] w-full whitespace-pre-wrap">
        {lines.map((line, i) => (
          <p key={line} className={`leading-[1.5] ${i < lines.length - 1 ? "mb-0" : ""}`}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

function RightContentColumn1() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 text-[#161513] w-[736px] max-w-full">
      <ValueBlock
        title="침묵 속에 흐르는 단단한 책임감"
        lines={[
          "저는 먼저 나서서 목소리를 높이는 적극적인 타입은 아닙니다. 내향적인 성향은 저에게 타인의 의견을 더 깊이 경청하고, ",
          "상황을 객관적으로 파악하는 힘을 주었습니다. ",
          "화려한 말솜씨보다는 묵묵한 행동과 완벽한 업무 완수로 제 가치를 증명합니다. 맡은 바 책임을 다하는 것은 저에게 당연한 원칙이며, ",
          "그 성실함은 팀원들에게 신뢰라는 이름으로 기억됩니다",
        ]}
      />
      <ValueBlock
        title="화려한 색깔로 시선을 끄는 사람은 아닐지 모릅니다."
        lines={[
          "하지만 어떤 프로젝트에서도 배경이 되어 팀을 지탱하고, 때로는 가장 날카로운 직선이 되어 문제를 해결할 준비가 되어 있습니다. ",
          "저는 당신의 팀에서 어떤 색으로 존재하게 될까요?",
        ]}
      />
    </div>
  );
}

function SectionRow1() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[24px] items-start not-italic py-[64px] relative shrink-0 w-full" data-name="section-row">
      <div aria-hidden className="absolute border-[#e5e0d0] border-b border-solid inset-0 pointer-events-none" />
      <LeftLabelColumn1 />
      <RightContentColumn1 />
    </div>
  );
}

function LeftLabelColumn2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-[180px]" data-name="left-label-column">
      <p className="font-['Space_Grotesk',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#161513] text-[18px] w-full">Career</p>
      <p className="font-['Pretendard',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#8a8a8a] text-[12px] w-full">경력</p>
    </div>
  );
}

function CareerJobRow() {
  return (
    <div className="content-stretch flex gap-[24px] items-start py-[16px] relative shrink-0 w-full" data-name="award-row">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Geist_Mono',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8a8a8a] text-[14px] w-[80px]">2022.12-</p>
      <p className="[word-break:break-word] font-['Pretendard',sans-serif] font-medium leading-[1.5] not-italic overflow-hidden relative shrink-0 text-[#161513] text-[14px] text-ellipsis w-[180px] whitespace-nowrap">
        미디어포스얼라이언스
      </p>
      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Pretendard',sans-serif] font-medium gap-[10px] items-start leading-[1.5] min-w-px not-italic relative text-[14px] text-[#161513]">
        <p className="overflow-hidden relative shrink-0 text-ellipsis w-full whitespace-nowrap">제안부서 디자인 시안담당</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis w-full whitespace-nowrap">IBK기업은행</p>
      </div>
    </div>
  );
}

function AwardRow({
  year,
  title,
  project,
  org,
}: {
  year: string;
  title: string;
  project: string;
  org: string;
}) {
  return (
    <div className="content-stretch flex gap-[24px] items-center py-[16px] relative shrink-0 w-full" data-name="award-row">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Geist_Mono',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8a8a8a] text-[14px] w-[80px]">{year}</p>
      <p className="[word-break:break-word] font-['Manrope',sans-serif] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#161513] text-[14px] text-ellipsis w-[180px] whitespace-nowrap">{title}</p>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Manrope',sans-serif] font-normal leading-[normal] min-w-px overflow-hidden relative text-[#161513] text-[14px] text-ellipsis whitespace-nowrap">{project}</p>
      <p className="[word-break:break-word] font-['Manrope',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8a8a8a] text-[14px] text-right w-[150px]">{org}</p>
    </div>
  );
}

function AwardsTable() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="awards-table">
      <CareerJobRow />
      <AwardRow year="2025" title="Honorable Mention" project="REMISE PIGAUT" org="Awwwards" />
      <AwardRow year="2024" title="Honorable Mention" project="PLANKTON" org="Awwwards" />
      <AwardRow year="2024" title="Website of the Day" project="PARIS MANAGEMENT" org="CSS Design Awards" />
      <AwardRow year="2023" title="Honorable Mention" project="PARIS MANAGEMENT" org="Awwwards" />
      <AwardRow year="2023" title="Mobile Excellence" project="PARIS MANAGEMENT" org="Awwwards" />
    </div>
  );
}

function RightContentColumn2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="right-content-column">
      <AwardsTable />
    </div>
  );
}

function SectionRow2() {
  return (
    <div className="content-stretch flex gap-[24px] items-start py-[64px] relative shrink-0 w-full" data-name="section-row">
      <div aria-hidden className="absolute border-[#e5e0d0] border-b border-solid inset-0 pointer-events-none" />
      <LeftLabelColumn2 />
      <RightContentColumn2 />
    </div>
  );
}

function LeftLabelColumn3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-[180px]" data-name="left-label-column">
      <p className="font-['Space_Grotesk',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#161513] text-[18px] w-full">Stack</p>
      <p className="font-['Pretendard',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#8a8a8a] text-[12px] w-full">사용 툴</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[4px] items-start leading-[normal] relative shrink-0 text-[#161513] whitespace-nowrap">
      <p className="font-['Pretendard',sans-serif] font-semibold not-italic relative shrink-0 text-[18px]">Figma</p>
      <p className="font-['Manrope',sans-serif] font-normal relative shrink-0 text-[16px]">·</p>
      <p className="font-['Pretendard',sans-serif] font-semibold not-italic relative shrink-0 text-[18px]">Adobe</p>
      <p className="font-['Manrope',sans-serif] font-normal relative shrink-0 text-[16px]">·</p>
      <p className="font-['Pretendard',sans-serif] font-semibold not-italic relative shrink-0 text-[18px]">Sketch</p>
      <p className="font-['Manrope',sans-serif] font-normal relative shrink-0 text-[16px]">·</p>
      <p className="font-['Pretendard',sans-serif] font-semibold not-italic relative shrink-0 text-[18px]">Claude Code</p>
    </div>
  );
}

function RightContentColumn3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="right-content-column">
      <Frame2 />
    </div>
  );
}

function SectionRow3() {
  return (
    <div className="content-stretch flex gap-[24px] items-start py-[64px] relative shrink-0 w-full" data-name="section-row">
      <div aria-hidden className="absolute border-[#e5e0d0] border-b border-solid inset-0 pointer-events-none" />
      <LeftLabelColumn3 />
      <RightContentColumn3 />
    </div>
  );
}

function LeftLabelColumn4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[180px]" data-name="left-label-column">
      <p className="font-['Space_Grotesk',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#161513] text-[18px] w-full">Approach</p>
      <p className="font-['Pretendard',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#8a8a8a] text-[12px] w-full">작업할 때 중요하게 생각하는 것</p>
    </div>
  );
}

function RightContentColumn4() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 text-[#161513] w-[736px] max-w-full">
      <ValueBlock
        title="합리와 납득을 바탕으로 한 유연한 소통"
        lines={[
          "좋은 게 좋은 것이라는 마음으로 동료들을 배려하고 포용하지만, 제가 지키는 선은 명확합니다. ",
          "자신의 이득을 위해 근거 없이 타 팀을 비난하거나, 업무의 본질을 흐리는 비합리적인 상황 앞에서는 무채색이 가진 특유의 차가운",
          "선명함을 드러냅니다. 무조건적인 수용이 아닌, 올바른 가치관 위에서 협업하기에 제 배려에는 무게가 있고 제 약속에는 힘이 있습니다.",
        ]}
      />
      <ValueBlock
        title="합리와 납득을 바탕으로 한 유연한 소통"
        lines={[
          "진정한 협업은 서로에 대한 이해와 논리적인 '납득'에서 시작된다고 믿습니다. ",
          "감정적인 대립보다는 대화를 통해 접점을 찾고, 공동의 목표를 위해 최선의 효율을 내는 소통 방식을 지향합니다. ",
          "덕분에 지금까지 다양한 팀과 협업하며 마찰 없이 매끄러운 관계를 유지해 왔습니다.",
        ]}
      />
    </div>
  );
}

function SectionRow4() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[24px] items-start not-italic py-[64px] relative shrink-0 w-full" data-name="section-row">
      <LeftLabelColumn4 />
      <RightContentColumn4 />
    </div>
  );
}

function Biography() {
  return (
    <div className="relative shrink-0 w-full" data-name="biography">
      <div className="content-stretch flex flex-col items-start pb-[120px] pl-[420px] pr-[80px] relative size-full">
        <SectionRow />
        <SectionRow1 />
        <SectionRow2 />
        <SectionRow3 />
        <SectionRow4 />
      </div>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 text-[#161513]" data-name="social-links">
      <p className="relative shrink-0">INSTAGRAM</p>
      <p className="relative shrink-0">LINKEDIN</p>
    </div>
  );
}

function FooterContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="footer-content">
      <div className="flex flex-row items-center size-full">
        <div className="[word-break:break-word] content-stretch flex font-['Space_Grotesk',sans-serif] font-medium items-center justify-between leading-[normal] not-italic px-[80px] py-[40px] relative size-full text-[12px] whitespace-nowrap">
          <p className="relative shrink-0 text-[#8a8780]">LOCAL TIME · SEOUL, KOREA</p>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="footer">
      <div className="h-0 relative shrink-0 w-full" data-name="footer-divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1">
            <line id="footer-divider" stroke="var(--stroke-0, #E5E0D0)" x2="1440" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <FooterContent />
    </div>
  );
}

export default function AboutDetailPage() {
  return (
    <div className="bg-[#fff8e9] content-stretch flex flex-col items-start relative size-full" data-name="about-detail-page">
      <Hero />
      <Biography />
      <Footer />
    </div>
  );
}
