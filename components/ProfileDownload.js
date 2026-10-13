"use client";

import { useState } from "react";
import Modal from "@/components/Modal";
import LeadForm from "@/components/LeadForm";
import { PROFILE_PDF_PATH } from "@/lib/site";

// BRD FR-02: name + email + organisation to download the Corporate Profile.
// Note: on a static site the PDF sits at a public address, so this captures leads
// but is not true access control.
const FIELDS = [
  { name: "name", label: "Name", required: true, autoComplete: "name" },
  { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
  { name: "organisation", label: "Organisation", required: true, autoComplete: "organization", full: true },
];

export default function ProfileDownload() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <>
      <button type="button" className="btn btn-secondary" onClick={() => {
          setSent(false);
          setOpen(true);
        }}>
        Download Corporate Profile
      </button>

      <Modal open={open} onClose={() => setOpen(false)} titleId="profile-title">
        <div className="modal-inner">
          <div className="modal-header">
            <div>
              <h2 id="profile-title">Download our Corporate Profile</h2>
              {!sent && <p>Tell us who you are and the 16-page profile is yours.</p>}
            </div>
            <button type="button" className="modal-close" onClick={() => setOpen(false)} aria-label="Close">
              &times;
            </button>
          </div>

          <LeadForm
            fields={FIELDS}
            hidden={{ source: "profile-download", _subject: "Corporate Profile download" }}
            submitLabel="Get the profile"
            onSuccess={() => setSent(true)}
            eventName="profile_download"
            successMessage="Thank you. Your download is ready."
            successExtra={
              <a className="btn btn-primary" href={PROFILE_PDF_PATH} download>
                Download the PDF
              </a>
            }
          />
        </div>
      </Modal>
    </>
  );
}
