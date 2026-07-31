import imgContactTitle from "@/imports/image-5.png";

function IntroBlock() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="intro-block">
      <div className="[word-break:break-word] font-['Pretendard',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#161513] text-[22px] w-full whitespace-pre-wrap">
        <p className="leading-[1.6] mb-0">{`새로운 프로젝트문의  `}</p>
        <p className="leading-[1.6]">{`아래폼으로 남겨주시면 답장드리겠습니다. `}</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[82px] items-start relative shrink-0 w-full">
      <img src={imgContactTitle} alt="contact" style={{ display: "block", width: "462px", height: "56px", objectFit: "contain", objectPosition: "left", flexShrink: 0 }} />
      <IntroBlock />
    </div>
  );
}

function Frame2() {
  return <div className="h-[31px] relative shrink-0 w-[594px]" />;
}

function Hero() {
  return (
    <div className="content-stretch flex flex-col gap-[160px] items-end justify-end pb-[40px] pt-[80px] px-[80px] relative shrink-0 w-full" data-name="hero">
      <div aria-hidden className="absolute border-[#e5e0d0] border-b border-solid inset-0 pointer-events-none" />
      <Frame3 />
      <Frame2 />
    </div>
  );
}

function LeftLabelColumn() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[180px]" data-name="left-label-column">
      <p className="font-['Space_Grotesk',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#161513] text-[18px] w-full">Direct Contact</p>
      <p className="font-['Pretendard',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#8a8a8a] text-[12px] w-full">직접 문의</p>
    </div>
  );
}

function LeftLabelColumn1() {
  return (
    <div className="content-stretch flex flex-col font-['Space_Grotesk',sans-serif] font-semibold gap-[12px] items-start leading-[normal] relative shrink-0 text-[#8a8a8a] text-[18px] whitespace-nowrap" data-name="left-label-column">
      <p className="relative shrink-0">designjstyle@naver.com</p>
      <p className="relative shrink-0">Instagram</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[74px] items-start not-italic relative shrink-0 w-[430px]">
      <LeftLabelColumn />
      <LeftLabelColumn1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center py-[20px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e5e0d0] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Manrope:SemiBold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#bfbbad] text-[14px] text-ellipsis whitespace-nowrap">답장 받으실 이메일 주소를 남겨주세요</p>
    </div>
  );
}

function AwardRow() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center py-[16px] relative shrink-0 w-full" data-name="award-row">
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#161513] text-[14px] w-[80px]">Email</p>
      <Frame5 />
    </div>
  );
}

function AwardsTable() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="awards-table">
      <AwardRow />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center py-[20px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e5e0d0] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Manrope:SemiBold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#bfbbad] text-[14px] text-ellipsis w-[180px] whitespace-nowrap">성함을 남겨주세요</p>
    </div>
  );
}

function AwardRow1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center py-[16px] relative shrink-0 w-full" data-name="award-row">
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#161513] text-[14px] w-[80px]">Name</p>
      <Frame8 />
    </div>
  );
}

function AwardsTable1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="awards-table">
      <AwardRow1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex h-[200px] items-start py-[20px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e5e0d0] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Manrope:SemiBold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#bfbbad] text-[14px] text-ellipsis whitespace-nowrap">{`어떤 이야기든 편하게 남겨주세요 `}</p>
    </div>
  );
}

function AwardRow2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center py-[16px] relative shrink-0 w-full" data-name="award-row">
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#161513] text-[14px] w-[80px]">Message</p>
      <Frame9 />
    </div>
  );
}

function Btn() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[24px] relative shrink-0 w-[180px] cursor-pointer" data-name="btn">
      <div aria-hidden className="absolute border border-[#e4501d] border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Space_Grotesk',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#e4501d] text-[18px] whitespace-nowrap">Send</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start justify-center min-w-px relative">
      <AwardsTable />
      <AwardsTable1 />
      <AwardRow2 />
      <Btn />
    </div>
  );
}

function SectionRow() {
  return (
    <div className="content-stretch flex gap-[121px] items-start justify-center pb-[120px] pt-[64px] relative shrink-0 w-full" data-name="section-row">
      <div aria-hidden className="absolute border-[#e5e0d0] border-b border-solid inset-0 pointer-events-none" />
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Biography() {
  return (
    <div className="relative shrink-0 w-full" data-name="biography">
      <div className="content-stretch flex flex-col items-start px-[80px] relative size-full">
        <SectionRow />
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

export default function ContactPage() {
  return (
    <div className="bg-[#fff8e9] content-stretch flex flex-col items-start relative size-full" data-name="contact-page">
      <div className="content-stretch flex flex-col items-start relative w-full">
        <Hero />
        <Biography />
      </div>
      <Footer />
    </div>
  );
}
