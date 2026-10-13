"use client";

import LeadForm from "@/components/LeadForm";

const FIELDS = [
  { name: "name", label: "Name", required: true, autoComplete: "name" },
  { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
  { name: "organisation", label: "Organisation", autoComplete: "organization" },
  { name: "role", label: "Role", autoComplete: "organization-title" },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel", full: true },
  { name: "challenge", label: "What's the challenge?", multiline: true, required: true, full: true },
];

export default function ContactForm() {
  return (
    <LeadForm
      fields={FIELDS}
      hidden={{ source: "contact-page", _subject: "Discovery call request" }}
      submitLabel="Start a conversation"
      eventName="discovery_call_submit"
    />
  );
}
