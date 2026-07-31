import WorksDetailDesktop from "@/imports/WorksDetailDesktop/index";
import WorksDetailMobile from "@/imports/WorksDetailMobile/index";
import DesktopCanvas from "@/app/components/DesktopCanvas";

export default function WorkDetailIBKPage() {
  return (
    <>
      {/* Mobile: ≤440px */}
      <div className="max-[440px]:block hidden min-h-[100dvh] w-full bg-[#fff8e9]">
        <WorksDetailMobile />
      </div>
      {/* Desktop: >440px */}
      <div className="max-[440px]:hidden bg-[#fff8e9] min-h-screen w-full">
        <DesktopCanvas>
          <WorksDetailDesktop />
        </DesktopCanvas>
      </div>
    </>
  );
}
