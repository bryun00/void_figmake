import WorksDetailAMFDesktop from "@/imports/WorksDetailAMFDesktop/index";
import WorkDetailPlaceholder from "@/app/components/WorkDetailPlaceholder";
import DesktopCanvas from "@/app/components/DesktopCanvas";
import SiteHeader from "@/app/components/SiteHeader";

export default function WorkDetailAMFPage() {
  return (
    <>
      {/* Mobile: ≤440px — mobile design not delivered yet */}
      <div className="max-[440px]:block hidden">
        <WorkDetailPlaceholder
          tag="구축"
          year="2020"
          title="AMF Fantasy"
          subtitle="글로벌 사이트"
        />
      </div>
      {/* Desktop: >440px */}
      <div className="max-[440px]:hidden bg-[#fff8e9] min-h-screen w-full">
        <SiteHeader />
        <DesktopCanvas>
          <WorksDetailAMFDesktop />
        </DesktopCanvas>
      </div>
    </>
  );
}
