import svgPaths from "./svg-agvkpwkmjm";
import imgHeroMockup from "./16157e464f9995eabe4b29aedace4290bb468547.png";
import imgImage3898 from "./96ae625849d030eba35c2edb0dd0648c8134c73f.png";
import imgImage3865 from "./254af040ededa96a1116e9178aad06c49526fbe0.png";
import imgImage3864 from "./e0bc596bc97a5e8c6cecf95cae39e8d9553c3cc1.png";
import imgImage9 from "./7aca9421db531b569b183ed334d157cc27e3c816.png";
import imgImage3863 from "./0b9c4f849db08a2aaf15bab3ed3c181b6705d1b8.png";
import imgImage3892 from "./6316d04a40b86b467c07bf4a6f3d92460a4c59d6.png";
import imgImg9369 from "./363579068f5321d3f7d6f5c2d7e58a550c026992.png";
import imgImg9371 from "./5ebc6ba00d32d8b351f74710cc9bbf163e9f1634.png";
import imgImg9372 from "./2c20485991cf22de5508213b9743ad73f30f61b1.png";
import imgImage3893 from "./8547878ab12c3d958a275851f375f47f0b0ba99f.png";
import imgImage3894 from "./1600bbe16e5f18eb50ae16e48a851dc46d0fa00e.png";
import imgImage3901 from "./1b28cbd6275a3189d348bf2af843e75f8e607f68.png";
import imgImage3903 from "./2db896093e99bc76027d0edec36638a379575b70.png";
import imgImage3902 from "./8b8c04578d82be061503d39a2183a0dc8184441d.png";
import imgImage3900 from "./5ad89a69cfb58b704312482287e6c8e24aaeea51.png";
import imgImage3899 from "./bdadc191c2965125f9a31d754c9fbba795e145c1.png";
import imgImage3904 from "./9134b9d1dc6d5f4bf85f4d6e0b6937eb86ba2e51.png";
import imgImage3905 from "./2a0894c9e806a0f09fbc4142ce813b0b62228d86.png";
import imgImage3906 from "./ceddf977a5ee4e05b6171a8cacd95ad6f0c6e7b8.png";
import imgImage3907 from "./03c1261f9031c0dcdad34ced1462d7aaeb0002aa.png";
import imgImage3908 from "./0cf6c75f90aee28a62d024d0b79bfb9f9c6ca817.png";

function Logo() {
  return (
    <div className="h-[24px] relative shrink-0 w-[85px]" data-name="logo">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 85 24" width="85">
        <g id="logo">
          <path d={svgPaths.p865340} fill="var(--fill-0, #161513)" id="Union" />
          <path d={svgPaths.p140ac680} fill="var(--fill-0, #161513)" id="Union_2" />
        </g>
      </svg>
    </div>
  );
}

function LogoGroup() {
  return (
    <div className="content-stretch flex items-start pt-[4px] relative shrink-0 w-[85px]" data-name="logo-group">
      <Logo />
    </div>
  );
}

function Navigation() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Space_Grotesk:Medium',sans-serif] gap-[32px] items-center leading-[normal] not-italic relative shrink-0 text-[14px] whitespace-nowrap" data-name="navigation">
      <p className="relative shrink-0 text-[#161513]">about</p>
      <p className="relative shrink-0 text-[#e4501d]">work</p>
      <p className="relative shrink-0 text-[#161513]">contact</p>
    </div>
  );
}

function ArrowLeftWrapper() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow-left-wrapper">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="arrow-left-wrapper">
          <path d="M8 2L2 8L8 14M2 8H14" id="arrow-left" stroke="var(--stroke-0, #E4501D)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BackNav() {
  return (
    <div className="relative shrink-0 w-full" data-name="back-nav">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pt-[40px] px-[80px] relative size-full">
          <ArrowLeftWrapper />
          <p className="[word-break:break-word] font-['Space_Grotesk:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e4501d] text-[14px] whitespace-nowrap">Back to works</p>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex font-['Pretendard:Medium',sans-serif] gap-[12px] items-center leading-[1.5] relative shrink-0 text-[14px] w-full whitespace-nowrap">
      <p className="relative shrink-0 text-[#e4501d]">구축</p>
      <p className="relative shrink-0 text-[#8a8a8a]">2025</p>
    </div>
  );
}

function TitleColumn() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px not-italic relative" data-name="title-column">
      <Frame19 />
      <div className="font-['Pretendard:SemiBold',sans-serif] leading-[0] relative shrink-0 text-[#161513] text-[40px] w-full">
        <p className="leading-[normal] mb-0">IBK 기업은행</p>
        <p className="leading-[normal]">개인스마트뱅킹 APP 3.0전면 개편</p>
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

function HeroMockupContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="hero-mockup-container">
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-[64px] px-[80px] relative size-full">
        <div className="h-[640px] relative rounded-[20px] shrink-0 w-full" data-name="hero-mockup">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgHeroMockup} />
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-end relative shrink-0 text-[#161513] whitespace-nowrap">
      <p className="font-['PP_Mori:Semibold',sans-serif] relative shrink-0 text-[14px]">IBK</p>
      <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0 text-[16px]">기업은행</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-baseline leading-[1.5] relative shrink-0 w-full" data-name="Frame">
      <p className="font-['PP_Mori:Semibold',sans-serif] relative shrink-0 text-[#8a8a8a] text-[14px] w-[125px]">Client</p>
      <Frame20 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex font-['PP_Mori:Semibold',sans-serif] gap-[16px] items-baseline leading-[1.5] relative shrink-0 text-[14px] w-full" data-name="Frame">
      <p className="relative shrink-0 text-[#8a8a8a] w-[125px]">Duration</p>
      <p className="relative shrink-0 text-[#161513] whitespace-nowrap">2025.01-2025.09</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] items-baseline leading-[1.5] relative shrink-0 text-[14px] w-full" data-name="Frame">
      <p className="font-['PP_Mori:Semibold',sans-serif] relative shrink-0 text-[#8a8a8a] w-[125px]">Contribution</p>
      <p className="font-['Pretendard:Medium',sans-serif] relative shrink-0 text-[#161513] whitespace-nowrap">디자인 100% (프로젝트 중 기여도 100%작업물만 첨부)</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[16px] items-baseline leading-[1.5] relative shrink-0 text-[14px] w-full" data-name="Frame">
      <p className="font-['PP_Mori:Semibold',sans-serif] relative shrink-0 text-[#8a8a8a] w-[125px]">Role</p>
      <p className="font-['Pretendard:Medium',sans-serif] relative shrink-0 text-[#161513] whitespace-nowrap">{`부pl , 디자인 시스템관리, 제안부터 구축까지 참여 `}</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex font-['PP_Mori:Semibold',sans-serif] gap-[16px] items-baseline leading-[1.5] relative shrink-0 text-[14px] w-full" data-name="Frame">
      <p className="relative shrink-0 text-[#8a8a8a] w-[125px]">Tools</p>
      <p className="relative shrink-0 text-[#161513] whitespace-nowrap">Figma , photoshop</p>
    </div>
  );
}

function ProjectMetaBox() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start not-italic relative rounded-[12px] shrink-0 w-[560px]" data-name="project-meta-box">
      <p className="font-['Space_Grotesk:SemiBold',sans-serif] leading-[normal] relative shrink-0 text-[#161513] text-[24px] whitespace-nowrap">Project overview</p>
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Space_Grotesk:SemiBold',sans-serif] leading-[normal] relative shrink-0 text-[#161513] text-[24px] whitespace-nowrap">Concept</p>
      <div className="font-['Pretendard:Medium',sans-serif] leading-[0] min-w-full relative shrink-0 text-[#8a8a8a] text-[14px] w-[min-content] whitespace-pre-wrap">
        <p className="leading-[1.5] mb-0">{`사용자 중심의 은행앱이 되기위한 리뉴얼을 진행하였습니다. `}</p>
        <p>
          <span className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[1.5] not-italic">{`고객의 금융 이용 경험을 혁신하기 위한 전체 적인 서비스 구조를 재정비 하고, `}</span>
          <span className="leading-[1.5]">{` `}</span>
          <span className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[1.5] not-italic">{`UI/UX 디자인을 전면 개편, 금융 서비스에 특화된 인터페이스 설계에 집중했습니다. `}</span>
        </p>
      </div>
    </div>
  );
}

function ProcessTexts() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="process-texts">
      <Frame5 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[20px] items-start leading-[normal] relative shrink-0 text-[#161513] text-[24px]">
      <p className="font-['Space_Grotesk:SemiBold',sans-serif] relative shrink-0">Random game</p>
      <p className="font-['Pretendard:SemiBold',sans-serif] relative shrink-0">[랜덤게임 3종]</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:Medium',sans-serif] gap-[4px] items-start leading-[0] relative shrink-0 text-[#8a8a8a]">
      <ul className="block relative shrink-0">
        <li className="list-disc ms-[21px]">
          <span className="leading-[1.5]">게임 진행시 비주얼 위주로 게이미피케이션 적금이라는 것을 강조</span>
        </li>
      </ul>
      <ul className="block relative shrink-0">
        <li className="list-disc ms-[21px]">
          <span className="leading-[1.5]">3D 일러스트나, 이미지를 사용하여 젊은 이미지를 나타내고 싶음</span>
        </li>
      </ul>
      <ul className="block relative shrink-0">
        <li className="list-disc ms-[21px]">
          <span className="leading-[1.5]">우대금리가 높다는 것을 결과 페이지 강조</span>
        </li>
      </ul>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <p className="font-['PP_Mori:Semibold',sans-serif] leading-[1.5] relative shrink-0 text-[#161513]">Clients needs</p>
      <Frame23 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:Medium',sans-serif] gap-[4px] items-start leading-[0] relative shrink-0 text-[#8a8a8a]">
      <ul className="block relative shrink-0">
        <li className="list-disc ms-[21px]">
          <span className="leading-[1.5]">게이미피케이션 카테고리를 활성화로 고객 유입을 증가</span>
        </li>
      </ul>
      <ul className="block relative shrink-0">
        <li className="list-disc ms-[21px]">
          <span className="leading-[1.5]">우대금리를 이용하여 적금가입 유도</span>
        </li>
      </ul>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <p className="font-['PP_Mori:Semibold',sans-serif] leading-[1.5] relative shrink-0 text-[#161513]">Main purpose</p>
      <Frame26 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:Medium',sans-serif] gap-[4px] items-start leading-[0] relative shrink-0 text-[#8a8a8a]">
      <ul className="block relative shrink-0">
        <li className="list-disc ms-[21px]">
          <span className="leading-[1.5]">{`게이미피케이션 요소를 추가하여 고객참여 유도 `}</span>
        </li>
      </ul>
      <ul className="block relative shrink-0">
        <li className="list-disc ms-[21px]">
          <span className="leading-[1.5]">젊은 이미지로 탈바꿈</span>
        </li>
      </ul>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <p className="font-['PP_Mori:Semibold',sans-serif] leading-[1.5] relative shrink-0 text-[#161513]">Solution</p>
      <Frame28 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[67px] items-start relative shrink-0 text-[14px] w-full">
      <Frame24 />
      <Frame25 />
      <Frame27 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <Frame21 />
      <Frame22 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center left-[60px] top-1/2 w-[295px]">
      <div className="h-[600px] relative shrink-0 w-[295px]" data-name="image 3898">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3898} />
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#161513] text-[14px] whitespace-nowrap">
        <p className="leading-[1.5] mb-0">랜덤게임 적금 3종에 관한 페이지들을 작업하였어요</p>
        <p className="leading-[1.5]">이미지요소를 사용하여 게이미피케이션 느낌을 강조하였어요</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[440px] top-[144px]">
      <Frame31 />
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute bg-white h-[832px] left-0 top-0 w-[1279px]" data-name="1">
      <Frame17 />
      <div className="absolute h-[433px] left-[1014px] rounded-[24px] shadow-[0px_7px_12.9px_1px_rgba(0,0,0,0.1)] top-[232px] w-[200px]" data-name="image 3865">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgImage3865} />
      </div>
      <div className="absolute h-[433px] left-[854px] rounded-[24px] shadow-[0px_7px_12.9px_1px_rgba(0,0,0,0.1)] top-[232px] w-[200px]" data-name="image 3864">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgImage3864} />
      </div>
      <div className="absolute h-[433px] left-[704px] rounded-[24px] shadow-[0px_7px_12.9px_1px_rgba(0,0,0,0.1)] top-[232px] w-[200px]" data-name="image 9">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgImage9} />
      </div>
      <div className="absolute h-[433px] left-[440px] rounded-[24px] top-[232px] w-[200px]" data-name="image 3863">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgImage3863} />
      </div>
      <div className="absolute flex h-[33px] items-center justify-center left-[283px] top-[539px] w-[144px]">
        <div className="flex-none rotate-90">
          <div className="h-[144px] relative w-[33px]" data-name="_Main / Flow">
            <div className="absolute flex inset-0 items-center justify-center" style={{ containerType: "size" }}>
              <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                <div className="relative size-full" data-name="-">
                  <div className="absolute inset-[-0.69%_-3.03%_0_0]">
                    <svg className="block size-full" fill="none" height="145" preserveAspectRatio="none" viewBox="0 0 34 145" width="34">
                      <path d="M0 1H33V145" id="-" stroke="var(--stroke-0, #E4501D)" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[-8px] flex items-center justify-center left-[-8px] size-[16px]">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="relative size-[16px]" data-name="start">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[4px] top-1/2" data-name="disc">
                    <div className="absolute inset-[-25%]">
                      <svg className="block size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                        <circle cx="3" cy="3" fill="var(--fill-0, #E4501D)" id="disc" r="2" stroke="var(--stroke-0, #E4501D)" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex items-center justify-center right-[-8px] size-[16px] top-[-8px]">
              <div className="-rotate-90 -scale-y-100 flex-none">
                <div className="relative size-[16px]" data-name="end">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[12px] left-[calc(50%-2px)] top-1/2 w-[6px]" data-name="arrow">
                    <div className="absolute inset-[-5.89%_-23.57%_-5.89%_-11.79%]">
                      <svg className="block size-full" fill="none" height="13.4142" preserveAspectRatio="none" viewBox="0 0 8.12132 13.4142" width="8.12132">
                        <path d={svgPaths.p1af480c0} id="arrow" stroke="var(--stroke-0, #E4501D)" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Frame30 />
    </div>
  );
}

function Component() {
  return (
    <div className="h-[832px] relative shrink-0 w-[1279px]" data-name="1">
      <Component1 />
    </div>
  );
}

function Component2() {
  return (
    <div className="bg-[#1e254a] h-[832px] overflow-clip relative shrink-0 w-[1280px]" data-name="2">
      <div className="-translate-y-1/2 absolute aspect-[4096/2863] left-[-134px] right-[-260px] top-[calc(50%+85.5px)]" data-name="image 3892">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3892} />
      </div>
      <p className="[word-break:break-word] absolute font-['Pretendard:Medium',sans-serif] leading-[1.5] left-[926px] not-italic text-[14px] text-white top-[589px] whitespace-nowrap">가위바위보</p>
      <p className="[word-break:break-word] absolute font-['Pretendard:Medium',sans-serif] leading-[1.5] left-[98px] not-italic text-[14px] text-white top-[316px] whitespace-nowrap">참참참</p>
      <p className="[word-break:break-word] absolute font-['Pretendard:Medium',sans-serif] leading-[1.5] left-[1046px] not-italic text-[14px] text-white top-[95px] whitespace-nowrap">주사위 던지기</p>
      <div className="absolute flex h-[22px] items-center justify-center left-[855px] top-[599px] w-[56px]">
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="h-[56px] opacity-40 relative w-[22px]" data-name="_Main / Flow">
            <div className="absolute flex inset-0 items-center justify-center" style={{ containerType: "size" }}>
              <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                <div className="relative size-full" data-name="-">
                  <div className="absolute inset-[-1.79%_-4.55%_0_0]">
                    <svg className="block size-full" fill="none" height="57" preserveAspectRatio="none" viewBox="0 0 23 57" width="23">
                      <path d="M0 1H22V57" id="-" stroke="var(--stroke-0, white)" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[-8px] flex items-center justify-center left-[-8px] size-[16px]">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="relative size-[16px]" data-name="start">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[4px] top-1/2" data-name="disc">
                    <div className="absolute inset-[-25%]">
                      <svg className="block size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                        <circle cx="3" cy="3" fill="var(--fill-0, white)" id="disc" r="2" stroke="var(--stroke-0, white)" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex items-center justify-center right-[-8px] size-[16px] top-[-8px]">
              <div className="-rotate-90 -scale-y-100 flex-none">
                <div className="relative size-[16px]" data-name="end">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[12px] left-[calc(50%-2px)] top-1/2 w-[6px]" data-name="arrow">
                    <div className="absolute inset-[-5.89%_-23.57%_-5.89%_-11.79%]">
                      <svg className="block size-full" fill="none" height="13.4142" preserveAspectRatio="none" viewBox="0 0 8.12132 13.4142" width="8.12132">
                        <path d={svgPaths.p1af480c0} id="arrow" stroke="var(--stroke-0, white)" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[49px] left-[95px] opacity-40 top-[345px] w-[22px]" data-name="_Main / Flow">
        <div className="absolute flex inset-0 items-center justify-center" style={{ containerType: "size" }}>
          <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
            <div className="relative size-full" data-name="-">
              <div className="absolute inset-[-2.04%_-4.55%_0_0]">
                <svg className="block size-full" fill="none" height="50" preserveAspectRatio="none" viewBox="0 0 23 50" width="23">
                  <path d="M0 1H22V50" id="-" stroke="var(--stroke-0, white)" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[-8px] flex items-center justify-center left-[-8px] size-[16px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="relative size-[16px]" data-name="start">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[4px] top-1/2" data-name="disc">
                <div className="absolute inset-[-25%]">
                  <svg className="block size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                    <circle cx="3" cy="3" fill="var(--fill-0, white)" id="disc" r="2" stroke="var(--stroke-0, white)" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex items-center justify-center right-[-8px] size-[16px] top-[-8px]">
          <div className="-rotate-90 -scale-y-100 flex-none">
            <div className="relative size-[16px]" data-name="end">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[12px] left-[calc(50%-2px)] top-1/2 w-[6px]" data-name="arrow">
                <div className="absolute inset-[-5.89%_-23.57%_-5.89%_-11.79%]">
                  <svg className="block size-full" fill="none" height="13.4142" preserveAspectRatio="none" viewBox="0 0 8.12132 13.4142" width="8.12132">
                    <path d={svgPaths.p1af480c0} id="arrow" stroke="var(--stroke-0, white)" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[22px] items-center justify-center left-[895px] top-[106px] w-[136px]">
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="h-[136px] opacity-40 relative w-[22px]" data-name="_Main / Flow">
            <div className="absolute flex inset-0 items-center justify-center" style={{ containerType: "size" }}>
              <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                <div className="relative size-full" data-name="-">
                  <div className="absolute inset-[-0.74%_-4.55%_0_0]">
                    <svg className="block size-full" fill="none" height="137" preserveAspectRatio="none" viewBox="0 0 23 137" width="23">
                      <path d="M0 1H22V137" id="-" stroke="var(--stroke-0, white)" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[-8px] flex items-center justify-center left-[-8px] size-[16px]">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="relative size-[16px]" data-name="start">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[4px] top-1/2" data-name="disc">
                    <div className="absolute inset-[-25%]">
                      <svg className="block size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                        <circle cx="3" cy="3" fill="var(--fill-0, white)" id="disc" r="2" stroke="var(--stroke-0, white)" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex items-center justify-center right-[-8px] size-[16px] top-[-8px]">
              <div className="-rotate-90 -scale-y-100 flex-none">
                <div className="relative size-[16px]" data-name="end">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[12px] left-[calc(50%-2px)] top-1/2 w-[6px]" data-name="arrow">
                    <div className="absolute inset-[-5.89%_-23.57%_-5.89%_-11.79%]">
                      <svg className="block size-full" fill="none" height="13.4142" preserveAspectRatio="none" viewBox="0 0 8.12132 13.4142" width="8.12132">
                        <path d={svgPaths.p1af480c0} id="arrow" stroke="var(--stroke-0, white)" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      <Component />
      <Component2 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[20px] items-start leading-[normal] not-italic relative shrink-0 text-[#161513] text-[24px] whitespace-nowrap">
      <p className="font-['Space_Grotesk:SemiBold',sans-serif] relative shrink-0">chatbot</p>
      <p className="font-['Pretendard:SemiBold',sans-serif] relative shrink-0">[챗봇]</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:Medium',sans-serif] gap-[4px] items-start leading-[0] relative shrink-0 text-[#8a8a8a]">
      <ul className="block relative shrink-0">
        <li className="list-disc ms-[21px]">
          <span className="leading-[1.5]">솔루션 사용, 촉박한 일정으로 큰 변화를 원하지 않음</span>
        </li>
      </ul>
      <ul className="block relative shrink-0">
        <li className="list-disc ms-[21px]">
          <span className="leading-[1.5]">개발이슈가 없는 한에서 디자인 적으로 변경을 원함</span>
        </li>
      </ul>
    </div>
  );
}

function Frame34() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 text-[14px] whitespace-nowrap">
      <p className="font-['PP_Mori:Semibold',sans-serif] leading-[1.5] relative shrink-0 text-[#161513]">Clients needs</p>
      <Frame35 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame34 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame32 />
      <Frame33 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:Medium',sans-serif] gap-[4px] items-start leading-[0] relative shrink-0 text-[#8a8a8a]">
      <ul className="block relative shrink-0">
        <li className="list-disc ms-[21px]">
          <span className="leading-[1.5]">버튼과 사용자 대화창의 컬러가 동일하여 버튼, 텍스트 버블 구분안가는 ui</span>
        </li>
      </ul>
      <ul className="block relative shrink-0">
        <li className="list-disc ms-[21px]">
          <span className="leading-[1.5]">{`버튼계층구조의 명확성 문제 `}</span>
        </li>
      </ul>
      <ul className="block relative shrink-0">
        <li className="list-disc ms-[21px]">
          <span className="leading-[1.5]">계좌 선택 ui에 대한 개선 필요성</span>
        </li>
      </ul>
    </div>
  );
}

function Txt() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[12px] items-start left-[794px] not-italic text-[14px] top-[396px] whitespace-nowrap" data-name="txt">
      <p className="font-['PP_Mori:Semibold',sans-serif] leading-[1.5] relative shrink-0 text-[#161513]">Problem</p>
      <Frame37 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[24.744px] left-[16px] top-[237px] w-[28px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="24.7443" preserveAspectRatio="none" viewBox="0 0 28 24.7443" width="28">
        <g id="Group 2087326793">
          <path d={svgPaths.p126a5180} fill="var(--fill-0, #F65009)" id="Polygon 1" />
          <path d={svgPaths.p1f176700} fill="var(--fill-0, white)" id="!" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute h-[24.744px] left-[370px] top-[335px] w-[28px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="24.7443" preserveAspectRatio="none" viewBox="0 0 28 24.7443" width="28">
        <g id="Group 2087326793">
          <path d={svgPaths.p126a5180} fill="var(--fill-0, #F65009)" id="Polygon 1" />
          <path d={svgPaths.p1f176700} fill="var(--fill-0, white)" id="!" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute h-[24.744px] left-[557px] top-[257px] w-[28px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="24.7443" preserveAspectRatio="none" viewBox="0 0 28 24.7443" width="28">
        <g id="Group 2087326793">
          <path d={svgPaths.p126a5180} fill="var(--fill-0, #F65009)" id="Polygon 1" />
          <path d={svgPaths.p1f176700} fill="var(--fill-0, white)" id="!" />
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute h-[433px] left-[89px] top-[200px] w-[628px]">
      <div className="absolute h-[433px] left-0 pointer-events-none rounded-[24px] top-0 w-[200px]" data-name="IMG_9369">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[24px] size-full" src={imgImg9369} />
        <div aria-hidden className="absolute border border-[#ededed] border-solid inset-0 rounded-[24px]" />
      </div>
      <div className="absolute aspect-[300/649] bottom-0 left-[214px] pointer-events-none rounded-[24px] top-0" data-name="IMG_9371">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[24px] size-full" src={imgImg9371} />
        <div aria-hidden className="absolute border border-[#ededed] border-solid inset-0 rounded-[24px]" />
      </div>
      <div className="absolute aspect-[300/649] bottom-0 pointer-events-none right-0 rounded-[24px] top-0" data-name="IMG_9372">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[24px] size-full" src={imgImg9372} />
        <div aria-hidden className="absolute border border-[#ededed] border-solid inset-0 rounded-[24px]" />
      </div>
      <Group />
      <Group1 />
      <Group2 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute bg-[#aeaeae] content-stretch flex items-center justify-center left-[89px] px-[20px] py-[4px] rounded-[20px] top-[144px]">
      <p className="[word-break:break-word] font-['Space_Grotesk:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">as-is</p>
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute bg-white h-[832px] left-0 top-0 w-[1279px]" data-name="1">
      <Txt />
      <Frame18 />
      <Frame10 />
    </div>
  );
}

function Component3() {
  return (
    <div className="h-[832px] relative shrink-0 w-[1279px]" data-name="1">
      <Component4 />
    </div>
  );
}

function Txt1() {
  return (
    <div className="absolute bottom-[300px] content-stretch flex flex-col gap-[10px] h-[206px] items-start left-[834px] pl-[24px]" data-name="txt1">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.6)] border-l-4 border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">다양한 케이스</p>
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">다양한 케이스를 디자인 작업 하였어요</p>
    </div>
  );
}

function Component6() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[124px] contents left-1/2" data-name="2">
      <div className="absolute bottom-[807px] h-[562px] right-[810px] w-[260px]" data-name="image 3892">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3893} />
      </div>
      <div className="absolute h-[563px] left-[510px] top-[1801px] w-[260px]" data-name="image 3893">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3894} />
      </div>
      <Txt1 />
      <div className="absolute h-[853px] left-[810px] rounded-[24px] top-[1400px] w-[260px]" data-name="image 3901">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
          <img alt="" className="absolute h-[199.65%] left-0 max-w-none top-[-99.62%] w-full" src={imgImage3901} />
        </div>
      </div>
      <div className="absolute bottom-[124px] h-[622px] left-[210px] rounded-[24px] w-[260px]" data-name="image 3903">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgImage3903} />
      </div>
      <div className="absolute h-[560px] left-[510px] rounded-[24px] top-[2643px] w-[260px]" data-name="image 3902">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
          <img alt="" className="absolute h-[100.54%] left-0 max-w-none top-[-0.54%] w-full" src={imgImage3902} />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[70px] px-[20px] py-[4px] rounded-[20px] top-[81px]">
      <p className="[word-break:break-word] font-['Space_Grotesk:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161513] text-[18px] whitespace-nowrap">to-be</p>
    </div>
  );
}

function Txt2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start pl-[24px] right-[52px] top-[468px]" data-name="txt1">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.6)] border-l-4 border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">이미지 통일화</p>
      <ul className="[word-break:break-word] block font-['Pretendard:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <li className="list-disc ms-[21px]">
          <span className="leading-[1.5]">이미지 스타일을 동일하게 하여 통일감을 주었어요</span>
        </li>
      </ul>
      <div className="h-[55px] relative shrink-0 w-[884px]" data-name="image 3900">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage3900} />
      </div>
    </div>
  );
}

function Txt3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[328px] pl-[24px] top-[832px]" data-name="txt1">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.6)] border-l-4 border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">{`버튼&텍스트 버블 수정 `}</p>
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">챗봇 전체 버튼은 가이드에 맞춰 수정하였고, 텍스트 버블만 강조를 하기위해 컬러를 넣었어요</p>
      <div className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#88edff] text-[14px] whitespace-nowrap">
        <p className="leading-[1.5] mb-0">텍스트 버블이 없는 형태로 디자인 하고 싶었지만 솔루션 사용과 개발 이슈, 타이트한 일정으로</p>
        <p className="leading-[1.5]">수정진행을 하지 못한점이 아쉬워요</p>
      </div>
    </div>
  );
}

function Txt4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[328px] pl-[24px] top-[1274px]" data-name="txt1">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.6)] border-l-4 border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">{`버튼 수정 `}</p>
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">버튼은 가이드에 맞춰 disabled 의 케이스도 수정하였어요</p>
    </div>
  );
}

function Component7() {
  return (
    <div className="absolute contents left-[70px] right-[52px] top-[136px]" data-name="1">
      <Txt2 />
      <Txt3 />
      <Txt4 />
      <div className="absolute h-[1381px] left-[70px] rounded-[24px] top-[136px] w-[230px]" data-name="image 3899">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgImage3899} />
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="bg-[#1e254a] h-[3327px] overflow-clip relative shrink-0 w-[1280px]" data-name="챗봇2">
      <Component6 />
      <Frame11 />
      <Component7 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      <Component3 />
      <Component5 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[20px] items-start leading-[normal] not-italic relative shrink-0 text-[#161513] text-[24px] whitespace-nowrap">
      <p className="font-['Space_Grotesk:SemiBold',sans-serif] relative shrink-0">{`etc `}</p>
      <p className="font-['Pretendard:SemiBold',sans-serif] relative shrink-0">[알림함, 스플래시, 내정보, vip class, 환율]</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <ul className="[word-break:break-word] block font-['Pretendard:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#8a8a8a] text-[14px] whitespace-nowrap">
        <li className="list-disc ms-[21px]">
          <span className="leading-[1.5]">디자인시스템을 준수하고 기업은행의 아이덴티티를 담아냄</span>
        </li>
      </ul>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <p className="[word-break:break-word] font-['PP_Mori:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#161513] text-[14px] whitespace-nowrap">Concept</p>
      <Frame41 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame40 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame38 />
      <Frame39 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute bg-[#aeaeae] content-stretch flex items-center justify-center left-[451px] px-[20px] py-[4px] rounded-[20px] top-[139px]">
      <p className="[word-break:break-word] font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">알림함</p>
    </div>
  );
}

function Txt5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-end left-[149px] pr-[24px] top-[350px]" data-name="txt1">
      <div aria-hidden className="absolute border-[#161513] border-r-4 border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#161513] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[1.5] mb-0">플랫아이콘들을 활용하여</p>
        <p className="leading-[1.5]">{`단순화 되보이도록 페이지를 디자인하였어요 `}</p>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="absolute bg-white h-[832px] left-0 top-0 w-[1279px]" data-name="1">
      <Frame12 />
      <div className="absolute bottom-[114px] h-[670px] pointer-events-none right-[331px] rounded-bl-[24px] rounded-br-[24px] w-[230px]" data-name="image 3899">
        <div className="absolute inset-0 overflow-hidden rounded-bl-[24px] rounded-br-[24px]">
          <img alt="" className="absolute h-[214.02%] left-0 max-w-none top-[-110.74%] w-full" src={imgImage3904} />
        </div>
        <div aria-hidden className="absolute border-[#ededed] border-b border-l border-r border-solid inset-0 rounded-bl-[24px] rounded-br-[24px]" />
      </div>
      <div className="-translate-x-1/2 absolute bottom-[48px] h-[583px] left-[calc(50%-73.5px)] pointer-events-none rounded-tl-[24px] rounded-tr-[24px] w-[230px]" data-name="image 3900">
        <div className="absolute inset-0 overflow-hidden rounded-tl-[24px] rounded-tr-[24px]">
          <img alt="" className="absolute h-[245.95%] left-0 max-w-none top-[-0.51%] w-full" src={imgImage3904} />
        </div>
        <div aria-hidden className="absolute border-[#ededed] border-l border-r border-solid border-t inset-0 rounded-tl-[24px] rounded-tr-[24px]" />
      </div>
      <Txt5 />
    </div>
  );
}

function Component8() {
  return (
    <div className="h-[832px] relative shrink-0 w-[1279px]" data-name="1">
      <Component9 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[60px] px-[20px] py-[4px] rounded-[20px] top-[157px]">
      <p className="[word-break:break-word] font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161513] text-[18px] whitespace-nowrap">스플래시</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[358px] px-[20px] py-[4px] rounded-[20px] top-[92px]">
      <p className="[word-break:break-word] font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161513] text-[18px] whitespace-nowrap">내정보 메뉴</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[666px] px-[20px] py-[4px] rounded-[20px] top-[197px]">
      <p className="[word-break:break-word] font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161513] text-[18px] whitespace-nowrap">{`회원 등급 메뉴 `}</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[974px] px-[20px] py-[4px] rounded-[20px] top-[132px]">
      <p className="[word-break:break-word] font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161513] text-[18px] whitespace-nowrap">환전,외환 메뉴</p>
    </div>
  );
}

function Component10() {
  return (
    <div className="bg-[#1e254a] h-[1576px] overflow-clip relative shrink-0 w-[1280px]" data-name="챗봇2">
      <Frame13 />
      <Frame14 />
      <Frame15 />
      <Frame16 />
      <div className="absolute h-[563px] left-[60px] rounded-[24px] top-[214px] w-[260px]" data-name="image 3905">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgImage3905} />
      </div>
      <div className="absolute h-[1134px] left-[358px] rounded-[24px] top-[144px] w-[260px]" data-name="image 3906">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgImage3906} />
      </div>
      <div className="absolute h-[864px] right-[46px] rounded-[24px] top-[197px] w-[260px]" data-name="image 3907">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgImage3907} />
      </div>
      <div className="absolute h-[1172px] right-[354px] rounded-[24px] top-[251px] w-[260px]" data-name="image 3908">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
          <img alt="" className="absolute h-[163.43%] left-0 max-w-none top-[-0.35%] w-full" src={imgImage3908} />
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      <Component8 />
      <Component10 />
    </div>
  );
}

function ProcessContentGrid() {
  return (
    <div className="relative shrink-0 w-full" data-name="process-content-grid">
      <div className="content-stretch flex flex-col gap-[65px] items-start pb-[96px] pt-[24px] px-[80px] relative size-full">
        <ProjectMetaBox />
        <ProcessTexts />
        <div className="h-0 relative shrink-0 w-full" data-name="footer-divider">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1280 1" width="1280">
              <line id="footer-divider" stroke="var(--stroke-0, #E5E0D0)" x2="1280" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Frame6 />
        <Frame29 />
        <div className="h-0 relative shrink-0 w-full" data-name="footer-divider">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1280 1" width="1280">
              <line id="footer-divider" stroke="var(--stroke-0, #E5E0D0)" x2="1280" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Frame7 />
        <Frame36 />
        <div className="h-0 relative shrink-0 w-full" data-name="footer-divider">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1280 1" width="1280">
              <line id="footer-divider" stroke="var(--stroke-0, #E5E0D0)" x2="1280" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Frame8 />
        <Frame42 />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Space_Grotesk:Medium',sans-serif] relative shrink-0 text-[#8a8a8a] text-[12px] tracking-[0.006px] uppercase">NEXT PROJECT</p>
      <p className="font-['Pretendard:SemiBold',sans-serif] relative shrink-0 text-[#161513] text-[20px]">BK 기업은행 개인스마트뱅킹 APP 제안 시안</p>
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
          <Frame9 />
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
        <div className="[word-break:break-word] content-stretch flex font-['Space_Grotesk:Medium',sans-serif] items-center justify-between leading-[normal] not-italic px-[80px] py-[40px] relative size-full text-[14px] tracking-[0.007px] uppercase whitespace-nowrap">
          <p className="relative shrink-0 text-[#8a8a8a]">LOCAL TIME · SEOUL, KOREA</p>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

function Up() {
  return (
    <div className="absolute left-[1312px] size-[48px] top-[1363px]" data-name="up">
      <svg className="absolute block inset-0 size-full" fill="none" height="48" preserveAspectRatio="none" viewBox="0 0 48 48" width="48">
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
    </div>
  );
}

export default function WorksDetailDesktop() {
  return (
    <div className="bg-[#fff8e9] content-stretch flex flex-col items-start relative size-full" data-name="works-detail-desktop">
      <div className="backdrop-blur-[2px] bg-[rgba(255,248,233,0.45)] content-stretch flex h-[76px] items-center justify-between px-[80px] py-[24px] shrink-0 sticky top-0 w-[1440px]" data-name="gnb">
        <div aria-hidden className="absolute border-[#e5e0d0] border-b border-solid inset-0 pointer-events-none" />
        <LogoGroup />
        <Navigation />
      </div>
      <BackNav />
      <CaseHeaderGrid />
      <HeroMockupContainer />
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
      <Up />
    </div>
  );
}