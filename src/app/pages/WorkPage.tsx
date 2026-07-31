import WorksType2DetailPage from "@/imports/WorksType2DetailPage/index";
import WorksListMobile from "@/imports/WorksListMobile/index";
import DesktopCanvas from "@/app/components/DesktopCanvas";

export default function WorkPage() {
  return (
    <>
      {/* Mobile: ≤440px */}
      <div className="max-[440px]:block hidden min-h-[100dvh] w-full bg-[#fff8e9]">
        <WorksListMobile />
      </div>
      {/* Desktop: >440px */}
      <div className="max-[440px]:hidden bg-[#fff8e9] min-h-screen w-full">
        <DesktopCanvas>
          <WorksType2DetailPage />
        </DesktopCanvas>
      </div>
    </>
  );
}
