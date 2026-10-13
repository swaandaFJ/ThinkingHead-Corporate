import Link from "next/link";

// Placeholder lightbulb-brain mark. Swap the SVG paths for the real logo when it exists;
// every page keeps working unchanged. `light` = cream version for the dark teal footer.
export default function Logo({ light = false }) {
  const stroke = light ? "#F5EDDD" : "#2E6B5C";
  return (
    <Link href="/" className="logo" aria-label="ThinkingHead — home">
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M14 2C8.5 2 5 6 5 10.5c0 3.2 1.8 5.2 3.2 6.8.8.9 1.3 1.6 1.3 2.4h9c0-.8.5-1.5 1.3-2.4C21.2 15.7 23 13.7 23 10.5 23 6 19.5 2 14 2Z"
          stroke={stroke}
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M10.5 23h7" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M11.5 25.5h5" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M11 12c1-1.4 2-2.1 3-2.1s2 .7 3 2.1" stroke="#D2AB67" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      <span className="logo-word">THINKINGHEAD</span>
    </Link>
  );
}
