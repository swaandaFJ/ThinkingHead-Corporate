import { LOGO_ACCENT_PATH, LOGO_OUTLINE_PATH } from "@/lib/logoPaths";

// The logo artwork is defined ONCE per page here (in the layout) and drawn wherever <Logo />
// appears, so the roughly 10 KB of shape data is not repeated in the header, menu and footer.
// The two colours come from CSS variables, which lets the footer use a light version.
export default function LogoDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
      <defs>
        <g id="thl-logo-mark">
          <path style={{ fill: "var(--logo-outline, #04826a)" }} fillRule="evenodd" d={LOGO_OUTLINE_PATH} />
          <path style={{ fill: "var(--logo-accent, #e4a405)" }} fillRule="evenodd" d={LOGO_ACCENT_PATH} />
        </g>
      </defs>
    </svg>
  );
}
