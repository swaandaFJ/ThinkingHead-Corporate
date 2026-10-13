// Sends a GA4 event if analytics is loaded; does nothing otherwise (safe to call anywhere).
export function trackEvent(name, params = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}
