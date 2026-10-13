// ALL form submissions in the site go through this one function. To change where leads go
// (a different form service, or a serverless function later), this is the only file to edit.

const PLACEHOLDER_MARK = "YOUR_FORM_ID";

/**
 * @param {Record<string, string>} data  field name -> value (includes hidden fields)
 * @returns {Promise<{ ok: boolean, message?: string }>}
 */
export async function submitForm(data) {
  // Honeypot: real people never see this field, so a filled value means a bot.
  // Pretend it worked so the bot learns nothing, and send nothing.
  if (data._gotcha) return { ok: true };

  // Test mode for local development: log instead of sending.
  if (process.env.NEXT_PUBLIC_FORM_DRY_RUN === "true") {
    console.info("[form dry run] nothing was sent. Payload:", data);
    return { ok: true };
  }

  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
  if (!endpoint || endpoint.includes(PLACEHOLDER_MARK)) {
    return {
      ok: false,
      message:
        "This form isn't connected yet. Please email hello@thinkinghead.ng directly.",
    };
  }

  try {
    // Multipart form data + an Accept header is the standard "AJAX form" request.
    // (Unlike a JSON body, it doesn't trigger a CORS preflight on the form service.)
    const payload = new FormData();
    Object.entries(data).forEach(([key, value]) => payload.append(key, value));

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: payload,
    });

    if (response.ok) return { ok: true };

    const body = await response.json().catch(() => null);
    const detail = body?.errors?.map((e) => e.message).join(", ");
    return {
      ok: false,
      message:
        detail ||
        "Something went wrong sending that. Please try again, or email hello@thinkinghead.ng directly.",
    };
  } catch {
    return {
      ok: false,
      message:
        "Couldn't reach the server. Check your connection, or email hello@thinkinghead.ng directly.",
    };
  }
}
