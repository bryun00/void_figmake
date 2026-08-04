import { useState } from "react";
import DrawMenu from "@/imports/DrawMenu/index";
import MobileLogo from "@/app/components/MobileLogo";

function LogoGroup() {
  return <MobileLogo />;
}

function Hamburger() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-end justify-center relative shrink-0 size-[24px]" data-name="hamburger">
      <div className="bg-[#161513] h-[1.5px] relative rounded-[1px] shrink-0 w-[22px]" data-name="line-1" />
      <div className="bg-[#161513] h-[1.5px] relative rounded-[1px] shrink-0 w-[16px]" data-name="line-2" />
      <div className="bg-[#161513] h-[1.5px] relative rounded-[1px] shrink-0 w-[22px]" data-name="line-3" />
    </div>
  );
}

function Navigation({ onOpen }: { onOpen: () => void }) {
  return (
    <button onClick={onOpen} className="content-stretch flex items-center relative shrink-0 bg-transparent border-none p-0 cursor-pointer" data-name="navigation">
      <Hamburger />
    </button>
  );
}

function Header({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="header">
      <div aria-hidden className="absolute border-[#e5e0d0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] py-[16px] relative size-full">
          <LogoGroup />
          <Navigation onOpen={onOpen} />
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="hero-section">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start not-italic pb-[32px] pt-[40px] px-[20px] relative size-full text-[#161513]">
        <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['TheNightWatch_:Regular',sans-serif] leading-[normal] relative shrink-0 text-[52px] tracking-[-1.04px] w-full">contact</p>
        <div className="font-['Pretendard',sans-serif] font-normal leading-[0] relative shrink-0 text-[22px] w-full">
          <p className="leading-[1.6] mb-0">새로운 프로젝트문의</p>
          <p className="leading-[1.6]">아래폼으로 남겨주시면 답장드리겠습니다.</p>
        </div>
      </div>
    </div>
  );
}

function LabelGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="label-group">
      <p className="font-['Space_Grotesk',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#161513] text-[18px]">Direct Contact</p>
      <p className="font-['Pretendard',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#8a8a8a] text-[12px]">직접 연락처</p>
    </div>
  );
}

function LinksGroup() {
  return (
    <div className="content-stretch flex flex-col font-['Space_Grotesk',sans-serif] font-semibold gap-[8px] items-start leading-[normal] relative shrink-0 text-[#8a8a8a] text-[18px]" data-name="links-group">
      <p className="relative shrink-0">designjstyle@naver.com</p>
      <p className="relative shrink-0">Instagram</p>
    </div>
  );
}

function DirectContact() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full whitespace-nowrap" data-name="direct-contact">
      <LabelGroup />
      <LinksGroup />
    </div>
  );
}

function InputBox() {
  return (
    <div className="content-stretch flex h-[54px] items-center py-[12px] relative shrink-0 w-full" data-name="input-box">
      <div aria-hidden className="absolute border-[#e5e0d0] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Manrope',sans-serif] font-normal leading-[normal] min-w-px not-italic overflow-hidden relative text-[#bfbbad] text-[14px] text-ellipsis whitespace-nowrap">답장 받으실 이메일 주소를 남겨주세요</p>
    </div>
  );
}

function FieldEmail() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="field-Email">
      <p className="[word-break:break-word] font-['Space_Grotesk',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#161513] text-[12px] tracking-[0.006px] uppercase whitespace-nowrap">Email</p>
      <InputBox />
    </div>
  );
}

function InputBox1() {
  return (
    <div className="content-stretch flex h-[54px] items-center py-[12px] relative shrink-0 w-full" data-name="input-box">
      <div aria-hidden className="absolute border-[#e5e0d0] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Manrope',sans-serif] font-normal leading-[normal] min-w-px not-italic overflow-hidden relative text-[#bfbbad] text-[14px] text-ellipsis whitespace-nowrap">성함을 남겨주세요</p>
    </div>
  );
}

function FieldName() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="field-Name">
      <p className="[word-break:break-word] font-['Space_Grotesk',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#161513] text-[12px] tracking-[0.006px] uppercase whitespace-nowrap">Name</p>
      <InputBox1 />
    </div>
  );
}

function InputBox2() {
  return (
    <div className="content-stretch flex h-[100px] items-center py-[12px] relative shrink-0 w-full" data-name="input-box">
      <div aria-hidden className="absolute border-[#e5e0d0] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Manrope',sans-serif] font-normal leading-[normal] min-w-px not-italic overflow-hidden relative text-[#bfbbad] text-[14px] text-ellipsis whitespace-nowrap">어떤 이야기든 편하게 남겨주세요</p>
    </div>
  );
}

function FieldMessage() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="field-Message">
      <p className="[word-break:break-word] font-['Space_Grotesk',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#161513] text-[12px] tracking-[0.006px] uppercase whitespace-nowrap">Message</p>
      <InputBox2 />
    </div>
  );
}

function Btn() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="btn">
      <div aria-hidden className="absolute border border-[#e4501d] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Space_Grotesk',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#e4501d] text-[18px] whitespace-nowrap">Send</p>
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="contact-form">
      <FieldEmail />
      <FieldName />
      <FieldMessage />
      <Btn />
    </div>
  );
}

function BiographyStack() {
  return (
    <div className="relative shrink-0 w-full" data-name="biography-stack">
      <div className="content-stretch flex flex-col gap-[40px] items-start pb-[48px] pt-[32px] px-[20px] relative size-full">
        <DirectContact />
        <ContactForm />
      </div>
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

function FooterContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="footer-content">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Space_Grotesk',sans-serif] font-medium gap-[16px] items-start leading-[normal] not-italic px-[20px] py-[24px] relative size-full text-[11px] whitespace-nowrap">
        <p className="relative shrink-0 text-[#8a8780]">LOCAL TIME · SEOUL, KOREA</p>
        <SocialLinks />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="footer">
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 390 1" width="390">
            <line id="Line" stroke="var(--stroke-0, #E5E0D0)" x2="390" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <FooterContent />
    </div>
  );
}

export default function ContactMobile() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-[#fff8e9] content-stretch flex flex-col items-start relative size-full" data-name="contact-mobile">
      <Header onOpen={() => setMenuOpen(true)} />
      <HeroSection />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 390 1" width="390">
            <line id="Line" stroke="var(--stroke-0, #E5E0D0)" x2="390" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <BiographyStack />
      <Footer />
      {menuOpen && (
        <div className="fixed inset-0 z-50">
          <DrawMenu onClose={() => setMenuOpen(false)} />
        </div>
      )}
    </div>
  );
}