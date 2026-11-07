import Link from "next/link";
import { LOGO_HEIGHT, LOGO_WIDTH } from "@/lib/logoPaths";

// The ThinkingHead logo mark + wordmark. The artwork itself is drawn from the shared
// definition in <LogoDefs /> (see app/layout.js). `light` = the cream version used on the
// dark teal footer, where the normal teal outline would disappear.
export default function Logo({ light = false }) {
  return (
    <Link href="/" className={`logo${light ? " logo-light" : ""}`} aria-label="ThinkingHead — home">
      <svg viewBox={`0 0 ${LOGO_WIDTH} ${LOGO_HEIGHT}`} aria-hidden="true" focusable="false">
        <use href="#thl-logo-mark" />
      </svg>
      <span className="logo-word">THINKINGHEAD</span>
    </Link>
  );
}
