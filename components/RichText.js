// Turns **double-asterisk** phrases in the copy into <strong>. Nothing else is interpreted,
// so text written in lib/services.js can never inject markup.
export default function RichText({ text }) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));
}
