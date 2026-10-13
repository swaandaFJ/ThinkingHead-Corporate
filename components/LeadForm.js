"use client";

import { useId, useState } from "react";
import { submitForm } from "@/lib/submitForm";
import { trackEvent } from "@/lib/analytics";
import { FORM_SUCCESS_MESSAGE } from "@/lib/site";

/**
 * One form component for every form on the site (service enquiry, contact, profile download).
 *
 * fields:       [{ name, label, type?, required?, multiline?, full?, autoComplete? }]
 *               `full` = spans both columns on wider screens.
 * hidden:       extra values sent with the form but not shown (e.g. which service it came from)
 * eventName:    the analytics event fired on success
 * successExtra: anything to show under the thank-you message (e.g. a download button)
 * onSuccess:    optional callback, e.g. so a modal can hide its intro text once the form is sent
 */
export default function LeadForm({
  fields,
  hidden = {},
  submitLabel = "Send",
  eventName,
  eventParams = {},
  successMessage = FORM_SUCCESS_MESSAGE,
  successExtra = null,
  onSuccess,
}) {
  const uid = useId();
  const [status, setStatus] = useState("idle"); // idle | sending | error | success
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const data = { ...Object.fromEntries(new FormData(event.currentTarget).entries()), ...hidden };

    setStatus("sending");
    setError("");
    const result = await submitForm(data);

    if (result.ok) {
      if (eventName) trackEvent(eventName, eventParams);
      setStatus("success");
      onSuccess?.();
    } else {
      setError(result.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <p>{successMessage}</p>
        {successExtra}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Honeypot: invisible to people, tempting to bots. A filled value is discarded. */}
      <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
        <label htmlFor={`${uid}-gotcha`}>Leave this field empty</label>
        <input type="text" id={`${uid}-gotcha`} name="_gotcha" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form-grid">
        {fields.map((f) => {
          const id = `${uid}-${f.name}`;
          return (
            <div key={f.name} className={`form-field${f.full ? " full" : ""}`}>
              <label htmlFor={id}>
                {f.label}
                {!f.required && <span className="optional"> (optional)</span>}
              </label>
              {f.multiline ? (
                <textarea id={id} name={f.name} required={f.required} />
              ) : (
                <input
                  id={id}
                  name={f.name}
                  type={f.type || "text"}
                  required={f.required}
                  autoComplete={f.autoComplete}
                />
              )}
            </div>
          );
        })}
      </div>

      <button type="submit" className="btn btn-primary full-width" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : submitLabel}
      </button>

      <p className={`form-status${status === "error" ? " is-error" : ""}`} role="status" aria-live="polite">
        {status === "error" ? error : ""}
      </p>
    </form>
  );
}
