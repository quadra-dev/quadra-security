"use client";

import ContactForm from "@/components/ContactForm";
import Canonical from "@/utils/Canonical";

export default function ContactUsPage() {
  return (
    <>
      <Canonical />
      <main className="min-h-screen bg-gray-100">
        <ContactForm />
      </main>
    </>
  );
}
