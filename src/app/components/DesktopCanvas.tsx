import type { ReactNode } from "react";

interface DesktopCanvasProps {
  children: ReactNode;
  className?: string;
}

/**
 * The desktop pages are laid out at a fixed 1440px design width (fixed px
 * paddings/widths throughout, matching the Figma file). Below 1440px this
 * wrapper scales the whole canvas down with `zoom` (not `transform`, so
 * `position: sticky` inside keeps working) so content never overflows or
 * gets clipped. At 1440px and above it renders at 1:1 and centers with
 * growing side margins.
 */
export default function DesktopCanvas({ children, className = "" }: DesktopCanvasProps) {
  return (
    <div
      className={`w-[1440px] mx-auto ${className}`}
      style={{ zoom: "min(1, calc(100vw / 1440px))" } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
