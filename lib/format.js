// Fixed to UTC so the server and the browser always print the same date (avoids a
// "text content did not match" hydration warning around midnight).
export function formatDate(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
