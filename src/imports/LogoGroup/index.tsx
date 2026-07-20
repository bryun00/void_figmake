import imgLogo from "@/imports/image-2.png";

export default function LogoGroup() {
  return (
    <div className="relative size-full" data-name="logo-group">
      <img src={imgLogo} alt="VOID logo" style={{ display: "block", width: "279px", height: "77px", objectFit: "contain" }} />
    </div>
  );
}
