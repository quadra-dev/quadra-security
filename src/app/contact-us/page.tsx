"use client";

import ContactForm from "@/components/ContactForm";
import Footer from "@/components/footer/Footer";
import Map from "@/components/Map";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactForm />
      <Map />
      <Footer />
    </main>
  );
}
