import WorksDetailBKDesktop from "@/imports/WorksDetailBKDesktop/index";
import WorkDetailPlaceholder from "@/app/components/WorkDetailPlaceholder";
import DesktopCanvas from "@/app/components/DesktopCanvas";
import SiteHeader from "@/app/components/SiteHeader";

export default function WorkDetailBKPage() {
  return (
    <>
      {/* Mobile: ≤440px — mobile design not delivered yet */}
      <div className="max-[440px]:block hidden">
        <WorkDetailPlaceholder
          tag="제안"
          year="2024"
          title="BK 기업은행"
          subtitle="개인스마트뱅킹 APP 제안 시안"
        />
      </div>
      {/* Desktop: >440px */}
      <div className="max-[440px]:hidden bg-[#fff8e9] min-h-screen w-full">
        <SiteHeader />
        <DesktopCanvas>
          <WorksDetailBKDesktop />
        </DesktopCanvas>
      </div>
    </>
  );
}
