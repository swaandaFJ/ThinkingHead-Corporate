"use client";

import { useState } from "react";

// Share buttons for an article. `url` is the article's full public address.
export default function ShareLinks({ url, title }) {
  const [copied, setCopied] = useState(false);
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked; the other links still work.
    }
  }

  return (
    <div className="share">
      <span>Share</span>
      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${u}`} target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
      <a href={`https://twitter.com/intent/tweet?url=${u}&text=${t}`} target="_blank" rel="noopener noreferrer">
        X
      </a>
      <a href={`https://wa.me/?text=${t}%20${u}`} target="_blank" rel="noopener noreferrer">
        WhatsApp
      </a>
      <button type="button" onClick={copy}>
        {copied ? "Link copied" : "Copy link"}
      </button>
    </div>
  );
}
