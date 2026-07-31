import imgAboutTitle from "@/imports/image-3.png";


function IntroBlock() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="intro-block">
      <div className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#e4501d] text-[22px] w-full">
        <p className="leading-[1.6] mb-0" style={{ color: "var(--color-ink)" }}>{`우리는, 고객사와 '함께 고민하고, 함께 쓰는'`}</p>
        <p className="leading-[1.6]" style={{ color: "var(--color-ink)" }}>Web/Creative 파트너입니다.</p>
      </div>
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
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[#8a8a8a] text-[12px] w-full">프로필</p>
    </div>
  );
}

function MemberBio() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-[480px]" data-name="member-bio">
      <p className="font-['Space_Grotesk',sans-serif] font-semibold relative shrink-0 text-[#e4501d] text-[0px] w-full">
        <span className="font-['Pretendard:Regular',sans-serif] leading-[1.6] text-[22px]">윤보람</span>
        <span className="leading-[normal] text-[24px]">{` / Boram Yun`}</span>
      </p>
      <div className="font-['Pretendard:Regular',sans-serif] relative shrink-0 text-[#161513] text-[14px] w-full">
        <p className="leading-[1.7] mb-0">인간 중심적 가치를 탐구하는 웹 디자이너이자 디렉터입니다.</p>
        <p className="leading-[1.7] mb-0">에이전시 및 스타트업에서의 다양한 경험을 거쳐,</p>
        <p className="leading-[1.7] mb-0">2022년 maithi 스튜디오를 설립하였습니다.</p>
        <p className="leading-[1.7] mb-0">클라이언트의 비전과 철학이 조화를 이루는 최상의 완성도를 지향하며,</p>
        <p className="leading-[1.7]">구조적으로 아름답고 깊이 있는 웹 경험을 일구어가고 있습니다.</p>
      </div>
    </div>
  );
}

function MemberProfile() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="member-profile">
      <div className="bg-white h-[600px] relative rounded-[12px] shrink-0 w-[480px]" data-name="member-portrait" />
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
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[#8a8a8a] text-[12px] w-full">핵심 가치</p>
    </div>
  );
}

function RightContentColumn1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="right-content-column">
      <p className="font-['Geist_Mono:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#8a8a8a] text-[12px] uppercase w-full">Atmosphere</p>
      <p className="font-['Pretendard:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161513] text-[18px] w-full">무엇보다 신뢰와 교감을 소중히 여깁니다.\n지속적이고 건강한 소통을 통해 고객사와의 깊은 이해를 넓히고 방향성을 공유합니다.</p>
      <div className="font-['Pretendard:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#161513] text-[14px] w-full whitespace-pre-wrap">
        <p className="leading-[1.7] mb-0">끊임없이 발전하고 변화하는 웹 생태계와 트렌드 속에서,</p>
        <p className="leading-[1.7] mb-0">단순히 기술의 속도를 쫓아가는 것에 그치지 않고 본질적인 가치를 지켜내며 유연하게 적응하는 것은 매우 중요한 경쟁력입니다.</p>
        <p className="leading-[1.7] mb-0">우리는 쉽게 타협하거나 한계에 갇히지 않는 유연하고 열정적인 자세를 지향하며,</p>
        <p className="leading-[1.7] mb-0">서로 다른 생각과 가치가 건강하게 조화되고 어우러질 수 있도록 넓고 깊은 마음으로 늘 경청하고 소통하겠습니다.</p>
        <p className="leading-[1.7] mb-0">프로젝트의 시작부터 마침표를 찍는 순간까지 모든 단계에서 따뜻한 온기가 느껴지는 세심한 배려와 깊은 진정성을 약속드립니다.</p>
        <p className="leading-[1.7] mb-0">​</p>
        <p className="leading-[1.7] mb-0">우리가 만드는 웹 서비스와 디자인이 수많은 이들의 마음에 깊은 울림을 전하고,</p>
        <p className="leading-[1.7]">더 나은 내일로 연결되는 단단한 징검다리가 될 수 있도록 정성을 기울여 한 걸음씩 묵묵히 나아갈 것입니다.</p>
      </div>
    </div>
  );
}

function SectionRow1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start py-[64px] relative shrink-0 w-full" data-name="section-row">
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
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[#8a8a8a] text-[12px] w-full">경력</p>
    </div>
  );
}

function AwardRow() {
  return (
    <div className="content-stretch flex gap-[24px] items-center py-[16px] relative shrink-0 w-full" data-name="award-row">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8a8a8a] text-[14px] w-[80px]">2025</p>
      <p className="[word-break:break-word] font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#161513] text-[14px] text-ellipsis w-[180px] whitespace-nowrap">Honorable Mention</p>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Manrope:Regular',sans-serif] font-normal leading-[normal] min-w-px overflow-hidden relative text-[#161513] text-[14px] text-ellipsis whitespace-nowrap">PATRICK DRUIN S03 LOOKBOOK</p>
      <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8a8a8a] text-[14px] text-right w-[150px]">Awwwards</p>
    </div>
  );
}

function AwardRow1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center py-[16px] relative shrink-0 w-full" data-name="award-row">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8a8a8a] text-[14px] w-[80px]">2025</p>
      <p className="[word-break:break-word] font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#161513] text-[14px] text-ellipsis w-[180px] whitespace-nowrap">Honorable Mention</p>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Manrope:Regular',sans-serif] font-normal leading-[normal] min-w-px overflow-hidden relative text-[#161513] text-[14px] text-ellipsis whitespace-nowrap">REMISE PIGAUT</p>
      <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8a8a8a] text-[14px] text-right w-[150px]">Awwwards</p>
    </div>
  );
}

function AwardRow2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center py-[16px] relative shrink-0 w-full" data-name="award-row">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8a8a8a] text-[14px] w-[80px]">2024</p>
      <p className="[word-break:break-word] font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#161513] text-[14px] text-ellipsis w-[180px] whitespace-nowrap">Honorable Mention</p>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Manrope:Regular',sans-serif] font-normal leading-[normal] min-w-px overflow-hidden relative text-[#161513] text-[14px] text-ellipsis whitespace-nowrap">PLANKTON</p>
      <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8a8a8a] text-[14px] text-right w-[150px]">Awwwards</p>
    </div>
  );
}

function AwardRow3() {
  return (
    <div className="content-stretch flex gap-[24px] items-center py-[16px] relative shrink-0 w-full" data-name="award-row">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8a8a8a] text-[14px] w-[80px]">2024</p>
      <p className="[word-break:break-word] font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#161513] text-[14px] text-ellipsis w-[180px] whitespace-nowrap">Website of the Day</p>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Manrope:Regular',sans-serif] font-normal leading-[normal] min-w-px overflow-hidden relative text-[#161513] text-[14px] text-ellipsis whitespace-nowrap">PARIS MANAGEMENT</p>
      <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8a8a8a] text-[14px] text-right w-[150px]">CSS Design Awards</p>
    </div>
  );
}

function AwardRow4() {
  return (
    <div className="content-stretch flex gap-[24px] items-center py-[16px] relative shrink-0 w-full" data-name="award-row">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8a8a8a] text-[14px] w-[80px]">2023</p>
      <p className="[word-break:break-word] font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#161513] text-[14px] text-ellipsis w-[180px] whitespace-nowrap">Honorable Mention</p>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Manrope:Regular',sans-serif] font-normal leading-[normal] min-w-px overflow-hidden relative text-[#161513] text-[14px] text-ellipsis whitespace-nowrap">PARIS MANAGEMENT</p>
      <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8a8a8a] text-[14px] text-right w-[150px]">Awwwards</p>
    </div>
  );
}

function AwardRow5() {
  return (
    <div className="content-stretch flex gap-[24px] items-center py-[16px] relative shrink-0 w-full" data-name="award-row">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8a8a8a] text-[14px] w-[80px]">2023</p>
      <p className="[word-break:break-word] font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#161513] text-[14px] text-ellipsis w-[180px] whitespace-nowrap">Mobile Excellence</p>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Manrope:Regular',sans-serif] font-normal leading-[normal] min-w-px overflow-hidden relative text-[#161513] text-[14px] text-ellipsis whitespace-nowrap">PARIS MANAGEMENT</p>
      <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8a8a8a] text-[14px] text-right w-[150px]">Awwwards</p>
    </div>
  );
}

function AwardsTable() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="awards-table">
      <AwardRow />
      <AwardRow1 />
      <AwardRow2 />
      <AwardRow3 />
      <AwardRow4 />
      <AwardRow5 />
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
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[#8a8a8a] text-[12px] w-full">사용 툴</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[4px] items-start leading-[normal] relative shrink-0 text-[#161513] whitespace-nowrap">
      <p className="font-['Pretendard:SemiBold',sans-serif] not-italic relative shrink-0 text-[18px]">Figma</p>
      <p className="font-['Manrope:Regular',sans-serif] font-normal relative shrink-0 text-[16px]">·</p>
      <p className="font-['Pretendard:SemiBold',sans-serif] not-italic relative shrink-0 text-[18px]">Adobe</p>
      <p className="font-['Manrope:Regular',sans-serif] font-normal relative shrink-0 text-[16px]">·</p>
      <p className="font-['Pretendard:SemiBold',sans-serif] not-italic relative shrink-0 text-[18px]">Sketch</p>
      <p className="font-['Manrope:Regular',sans-serif] font-normal relative shrink-0 text-[16px]">·</p>
      <p className="font-['Pretendard:SemiBold',sans-serif] not-italic relative shrink-0 text-[18px]">Claude Code</p>
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
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[#8a8a8a] text-[12px] w-full">작업할 때 중요하게 생각하는 것</p>
    </div>
  );
}

function RightContentColumn4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative text-[#161513]" data-name="right-content-column">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[normal] relative shrink-0 text-[18px] w-full">Web·홈페이지를 통해 새로운 가치를 만들어내고, 문제를 해결하는 것.</p>
      <div className="font-['Pretendard:Regular',sans-serif] leading-[0] relative shrink-0 text-[14px] w-full">
        <p className="leading-[1.7] mb-0">웹사이트가 지닌 역할과 목적은 비즈니스의 형태와 환경에 따라 언제나 유기적이고 다양하게 변화합니다.</p>
        <p className="leading-[1.7] mb-0">하지만 그 본질적인 지향점은 늘 동일합니다. 바로 고객사가 바라는 미래의 방향성과 가치, 그리고 생생한 열망을 오롯이 담아내는 일입니다.</p>
        <p className="leading-[1.7] mb-0">우리는 다양한 프로젝트의 깊이 있는 경험과 전문적인 통찰력을 바탕으로,</p>
        <p className="leading-[1.7] mb-0">창의적인 아이디어와 정교한 설계를 정밀하게 조합하고 융합하여 언제나 최적의 맞춤형 솔루션을 제안합니다.</p>
        <p className="leading-[1.7]">단순히 미적인 완성을 넘어 비즈니스의 실질적인 성장을 이끌어내고, 당면한 핵심 문제를 주도적으로 해결하는 혁신적인 웹 경험을 설계하겠습니다.</p>
      </div>
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