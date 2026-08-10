import WorksDetailNhPayDesktop from "@/imports/WorksDetailNhPayDesktop/index";
import WorkDetailPlaceholder from "@/app/components/WorkDetailPlaceholder";
import DesktopCanvas from "@/app/components/DesktopCanvas";
import SiteHeader from "@/app/components/SiteHeader";

export default function WorkDetailNhPayPage() {
  return (
    <>
      {/* Mobile: ≤440px — mobile design not delivered yet */}
      <div className="max-[440px]:block hidden">
        <WorkDetailPlaceholder
          tag="이벤트"
          year="2024"
          title="NH pay,NH 카드"
          subtitle="pc,mobile"
        />
      </div>
      {/* Desktop: >440px */}
      <div className="max-[440px]:hidden bg-[#fff8e9] min-h-screen w-full">
        <SiteHeader />
        <DesktopCanvas>
          <WorksDetailNhPayDesktop />
        </DesktopCanvas>
      </div>
    </>
  );
}
