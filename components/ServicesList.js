"use client";

import { useState } from "react";
import Modal from "@/components/Modal";
import LeadForm from "@/components/LeadForm";
import RichText from "@/components/RichText";

// Same fields for all eight services. Wider screens show them two per row.
const ENQUIRY_FIELDS = [
  { name: "name", label: "Name", required: true, autoComplete: "name" },
  { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
  { name: "organisation", label: "Organisation", autoComplete: "organization" },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
  { name: "message", label: "How can we help?", multiline: true, required: true, full: true },
];

export default function ServicesList({ services }) {
  // Which service's modal is open (null = closed). One modal serves all eight pillars.
  const [active, setActive] = useState(null);
  const [sent, setSent] = useState(false);

  return (
    <>
      {services.map((s, i) => (
        <article className="pillar fade-in" id={s.id} key={s.id}>
          <span className="pillar-number">{String(i + 1).padStart(2, "0")}</span>
          <h2>{s.name}</h2>
          <p className="pillar-promise">{s.promise}</p>

          <h3 className="pillar-label">The problem</h3>
          <p>
            <RichText text={s.problem} />
          </p>

          <h3 className="pillar-label">How ThinkingHead solves it</h3>
          <p>
            <RichText text={s.solution} />
          </p>

          <h3 className="pillar-label">What we deliver</h3>
          <ul className="deliverables">
            {s.deliverables.map((d) => (
              <li key={d.title}>
                <strong>{d.title}:</strong> {d.text}
              </li>
            ))}
          </ul>

          <div className="pillar-close">
            <h3 className="pillar-label" style={{ marginTop: 0 }}>
              How we work
            </h3>
            <ol className="steps">
              {s.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <span className="pillar-outcome">You get: {s.outcome}</span>
            <div className="pillar-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  setSent(false);
                  setActive(s);
                }}
              >
                Ask about this service
              </button>
            </div>
          </div>
        </article>
      ))}

      <Modal open={active !== null} onClose={() => setActive(null)} titleId="enquiry-title">
        {active && (
          <div className="modal-inner">
            <div className="modal-header">
              <div>
                <h2 id="enquiry-title">Enquire about {active.name}</h2>
                {!sent && <p>Tell us a little about what you need and we&rsquo;ll point you in the right direction.</p>}
              </div>
              <button type="button" className="modal-close" onClick={() => setActive(null)} aria-label="Close">
                &times;
              </button>
            </div>

            <LeadForm
              fields={ENQUIRY_FIELDS}
              // Sent with every enquiry so the team knows which service it was about.
              // `_subject` becomes the email subject line in the notification.
              hidden={{
                service: active.name,
                source: "services-page-modal",
                _subject: `Service enquiry: ${active.name}`,
              }}
              submitLabel="Send enquiry"
              onSuccess={() => setSent(true)}
              eventName="service_enquiry_submit"
              eventParams={{ service: active.name }}
              successExtra={
                <button type="button" className="btn btn-primary" onClick={() => setActive(null)}>
                  Close
                </button>
              }
            />
          </div>
        )}
      </Modal>
    </>
  );
}
