"use client";

import { useState } from "react";
import Modal from "@/components/Modal";
import LeadForm from "@/components/LeadForm";
import Placeholder from "@/components/Placeholder";

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
        <div className="pillar fade-in" id={s.id} key={s.id}>
          <span className="pillar-number">{String(i + 1).padStart(2, "0")}</span>
          <h2>{s.name}</h2>

          {s.description ? (
            <p>{s.description}</p>
          ) : (
            <Placeholder>full description paragraph from Corporate Profile, pp.10–11</Placeholder>
          )}

          {s.bullets ? (
            <ul>
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          ) : (
            <ul>
              <li className="placeholder-note">[Placeholder — sub-service bullet list from Corporate Profile]</li>
            </ul>
          )}

          <span className="pillar-outcome">You get: {s.outcome}</span>

          <div className="pillar-actions">
            <button type="button" className="btn btn-primary" onClick={() => {
                setSent(false);
                setActive(s);
              }}>
              Ask about this service
            </button>
          </div>
        </div>
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
