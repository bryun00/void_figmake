import AboutDetailPage from "@/imports/AboutDetailPage/index";
import AboutMobile from "@/imports/AboutMobile/index";

export default function AboutPage() {
  return (
    <>
      {/* Mobile: ≤440px */}
      <div className="max-[440px]:block hidden min-h-[100dvh] w-full bg-[#fff8e9]">
        <AboutMobile />
      </div>
      {/* Desktop: >440px */}
      <div className="max-[440px]:hidden bg-[#fff8e9] min-h-screen w-full">
        <AboutDetailPage />
      </div>
    </>
  );
}
