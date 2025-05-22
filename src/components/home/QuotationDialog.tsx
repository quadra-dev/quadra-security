"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const QuotationDialog = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name || !phone) {
      toast.error("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/quotation", {
        method: "POST",
        body: JSON.stringify({ name, phone }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Quotation request sent!");
        setOpen(false);
        setName("");
        setPhone("");
      } else {
        toast.error("Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to send request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[400px] font-[family-name:var(--font-urbanist)]">
        <DialogHeader>
          <DialogTitle>Get Your Quotation</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <Button disabled={loading} onClick={handleSubmit} className="w-full bg-[#0D053F] cursor-pointer hover:bg-[#0D053F]/50 hover:text-black">
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuotationDialog;
