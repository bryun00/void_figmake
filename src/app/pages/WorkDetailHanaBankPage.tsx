import WorksDetailHanaBankDesktop from "@/imports/WorksDetailHanaBankDesktop/index";
import WorkDetailPlaceholder from "@/app/components/WorkDetailPlaceholder";
import DesktopCanvas from "@/app/components/DesktopCanvas";
import SiteHeader from "@/app/components/SiteHeader";

export default function WorkDetailHanaBankPage() {
  return (
    <>
      {/* Mobile: ≤440px — mobile design not delivered yet */}
      <div className="max-[440px]:block hidden">
        <WorkDetailPlaceholder
          tag="이벤트"
          year="2023"
          title="하나은행 기업뱅킹"
          subtitle="pc,mobile"
          backTo="/work/marketing"
        />
      </div>
      {/* Desktop: >440px */}
      <div className="max-[440px]:hidden bg-[#fff8e9] min-h-screen w-full">
        <SiteHeader />
        <DesktopCanvas>
          <WorksDetailHanaBankDesktop />
        </DesktopCanvas>
      </div>
    </>
  );
}
