import { useState } from "react";
import { toast } from "sonner";

interface MiniSiteVisitFormProps {
  solutionType?: string; // e.g., "home-security", "office-setup"
}

export default function SolutionsSiteVisitForm({
  solutionType,
}: MiniSiteVisitFormProps) {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const toastId = toast.loading("Submitting request...");

    try {
      const response = await fetch("/api/site-visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Site visit scheduled successfully!", { id: toastId });
        setFormData({ name: "", phone: "", email: "" });
      } else {
        toast.error(result.error || "Something went wrong", { id: toastId });
      }
    } catch (error) {
      console.error(error);
      toast.error("Submission failed", { id: toastId });
    }
  };
  const getHeading = (type?: string) => {
    switch (type) {
      case "home-security":
        return "Secure Your Home";
      case "industrial-security":
        return "Upgrade Your Workspace";
      case "real-state-security":
        return "Monitor Smarter";
      case "retail-security":
        return "Automate Your Security";
      case "hospitality-security":
        return "Secure Your Life";

      default:
        return "Book a Visit";
    }
  };
  return (
    <div className="text-black p-4  max-w-md mx-auto shadow-md border">
      <h2 className="text-lg font-semibold text-center mb-4">
        {getHeading(solutionType)}
        <p className="text-md">Book a Visit</p>
      </h2>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="p-2 rounded border bg-[#e5e7eb] border-white text-sm placeholder:text-gray-600"
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="p-2 rounded bg-[#e5e7eb] border border-white text-sm placeholder:text-gray-600"
          onChange={handleChange}
        />
        <input
          name="phone"
          type="tel"
          placeholder="Phone"
          className="p-2 rounded bg-[#e5e7eb] border border-white text-sm placeholder:text-gray-600"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-[#2b388f] hover:bg-[#2b388f]/80 transition text-white py-2 rounded mt-2 text-sm font-medium"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
