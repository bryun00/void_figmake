import ContactPage from "@/imports/ContactPage/index";
import ContactMobile from "@/imports/ContactMobile/index";
import DesktopCanvas from "@/app/components/DesktopCanvas";

export default function ContactPageRoute() {
  return (
    <>
      {/* Mobile: ≤440px */}
      <div className="max-[440px]:block hidden min-h-[100dvh] w-full bg-[#fff8e9]">
        <ContactMobile />
      </div>
      {/* Desktop: >440px */}
      <div className="max-[440px]:hidden bg-[#fff8e9] min-h-screen w-full">
        <DesktopCanvas>
          <ContactPage />
        </DesktopCanvas>
      </div>
    </>
  );
}
