'use client';

import { type FormEvent, useState } from "react";
import PrivacyHero from "@/components/sections/PrivacyHero";
import PentacoreSectionShell from "@/components/ui/PentacoreSectionShell";
import HomeReviews from "@/components/sections/HomeReviews";
import Image from "next/image";
import CTA from "@/components/sections/CTA";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [feedback, setFeedback] = useState<string>("");

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const sendContactForm = async () => {
    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus("error");
        setFeedback(result?.error || "Unable to send request. Please try again.");
        return;
      }

      setStatus("sent");
      setFeedback(result?.message || "Your request has been sent successfully.");
    } catch (error) {
      setStatus("error");
      setFeedback("Unable to send request. Please check your connection and try again.");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await sendContactForm();
  };

  const handleResend = async () => {
    if (status === "sending") return;
    await sendContactForm();
  };

  return (
    <main className="relative flex min-h-screen flex-col overflow-x-clip bg-black">
      <PrivacyHero titleTop="CONTACT" titleBottom="US" />

      <section className="pb-24">
        <div className="container mx-auto relative">
          <PentacoreSectionShell className="mt-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div className="pt-2">
                <p className="text-xs uppercase tracking-[0.24em] text-white/50">Home • Contact</p>
                <h2 className="mt-5 text-4xl md:text-5xl font-semibold leading-tight text-white">
                  Get in touch today to receive
                  <br />
                  more information.
                </h2>
                <p className="mt-6 text-white/65 leading-relaxed max-w-md">
                  Whether you are a startup or a business owner, we understand your requirements and
                  suggest the best software solutions.
                </p>
                <p className="mt-6 text-sm text-white/45 leading-relaxed max-w-md">
                  Your information stays completely secure. No spam, no unnecessary follow-ups.
                </p>
              </div>

              <div>
                <form
                  id="contact-form"
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-white/25 bg-white/[0.08] backdrop-blur-xl p-5 md:p-6 shadow-[0_0_40px_rgba(167,139,250,0.28)]"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-white/80">First Name</label>
                      <input
                        value={formData.firstName}
                        onChange={(event) => handleChange("firstName", event.target.value)}
                        type="text"
                        placeholder="Your first name"
                        className="mt-1 h-11 w-full rounded-md border border-white/25 bg-white/10 px-3 text-sm text-white placeholder:text-white/55 outline-none focus:border-violet-300"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-white/80">Last Name</label>
                      <input
                        value={formData.lastName}
                        onChange={(event) => handleChange("lastName", event.target.value)}
                        type="text"
                        placeholder="Your last name"
                        className="mt-1 h-11 w-full rounded-md border border-white/25 bg-white/10 px-3 text-sm text-white placeholder:text-white/55 outline-none focus:border-violet-300"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="text-xs font-medium text-white/80">Email</label>
                    <input
                      value={formData.email}
                      onChange={(event) => handleChange("email", event.target.value)}
                      type="email"
                      placeholder="Your email"
                      className="mt-1 h-11 w-full rounded-md border border-white/25 bg-white/10 px-3 text-sm text-white placeholder:text-white/55 outline-none focus:border-violet-300"
                    />
                  </div>
                  <div className="mt-4">
                    <label className="text-xs font-medium text-white/80">Phone</label>
                    <input
                      value={formData.phone}
                      onChange={(event) => handleChange("phone", event.target.value)}
                      type="tel"
                      placeholder="+92 335 7678769"
                      className="mt-1 h-11 w-full rounded-md border border-white/25 bg-white/10 px-3 text-sm text-white placeholder:text-white/55 outline-none focus:border-violet-300"
                    />
                  </div>
                  <div className="mt-4">
                    <label className="text-xs font-medium text-white/80">Service</label>
                    <select
                      value={formData.service}
                      onChange={(event) => handleChange("service", event.target.value)}
                      className="mt-1 h-11 w-full rounded-md border border-white/25 bg-white/10 px-3 text-sm text-white outline-none focus:border-violet-300"
                    >
                      <option value="">Choose a service</option>
                      <option className="text-black">Web Development</option>
                      <option className="text-black">App Development</option>
                      <option className="text-black">AI Solutions</option>
                      <option className="text-black">Automation</option>
                    </select>
                  </div>
                  <div className="mt-4">
                    <label className="text-xs font-medium text-white/80">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(event) => handleChange("message", event.target.value)}
                      placeholder="Write your message..."
                      rows={5}
                      className="mt-1 w-full rounded-md border border-white/25 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/55 outline-none focus:border-violet-300 resize-y"
                    />
                  </div>

                  {feedback ? (
                    <p className={`mt-4 text-sm ${status === "error" ? "text-red-300" : "text-emerald-300"}`}>
                      {feedback}
                    </p>
                  ) : null}

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-2.5 text-sm font-semibold text-white hover:brightness-110 transition disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {status === "sending" ? "Sending..." : "Send My Request"}
                    </button>
                    {status === "error" ? (
                      <button
                        type="button"
                        onClick={handleResend}
                        className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition"
                      >
                        Resend My Request
                      </button>
                    ) : null}
                  </div>
                </form>
              </div>
            </div>
          </PentacoreSectionShell>

          <div className="mt-8">
            <div><CTA/></div>
            <div className="rounded-2xl border border-white/10 bg-[#0b0e14]">
              <HomeReviews />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
