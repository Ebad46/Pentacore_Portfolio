"use client";

import { type FormEvent, useState } from "react";

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const sendContactForm = async () => {
    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
    } catch {
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
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="contact-form rounded-2xl border border-white/25 bg-white/[0.08] p-5 shadow-[0_0_40px_rgba(167,139,250,0.28)] backdrop-blur-xl md:p-6"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="text-xs font-medium text-white/80">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            autoComplete="given-name"
            value={formData.firstName}
            onChange={(event) => handleChange("firstName", event.target.value)}
            type="text"
            placeholder="Your first name"
            required
            className="mt-1 h-11 w-full rounded-md border border-white/25 bg-white/10 px-3 text-sm text-white outline-none placeholder:text-white/55 focus:border-violet-300"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="text-xs font-medium text-white/80">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            autoComplete="family-name"
            value={formData.lastName}
            onChange={(event) => handleChange("lastName", event.target.value)}
            type="text"
            placeholder="Your last name"
            required
            className="mt-1 h-11 w-full rounded-md border border-white/25 bg-white/10 px-3 text-sm text-white outline-none placeholder:text-white/55 focus:border-violet-300"
          />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="email" className="text-xs font-medium text-white/80">
          Email
        </label>
        <input
          id="email"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={(event) => handleChange("email", event.target.value)}
          type="email"
          placeholder="Your email"
          required
          className="mt-1 h-11 w-full rounded-md border border-white/25 bg-white/10 px-3 text-sm text-white outline-none placeholder:text-white/55 focus:border-violet-300"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="phone" className="text-xs font-medium text-white/80">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          autoComplete="tel"
          value={formData.phone}
          onChange={(event) => handleChange("phone", event.target.value)}
          type="tel"
          placeholder="+92 335 7678769"
          required
          className="mt-1 h-11 w-full rounded-md border border-white/25 bg-white/10 px-3 text-sm text-white outline-none placeholder:text-white/55 focus:border-violet-300"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="service" className="text-xs font-medium text-white/80">
          Service
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={(event) => handleChange("service", event.target.value)}
          required
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
        <label htmlFor="message" className="text-xs font-medium text-white/80">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={(event) => handleChange("message", event.target.value)}
          placeholder="Write your message..."
          rows={5}
          required
          className="mt-1 w-full resize-y rounded-md border border-white/25 bg-white/10 px-3 py-2 text-sm text-white outline-none placeholder:text-white/55 focus:border-violet-300"
        />
      </div>

      {feedback ? (
        <p
          className={`mt-4 text-sm ${status === "error" ? "text-red-300" : "text-emerald-300"}`}
          role={status === "error" ? "alert" : "status"}
        >
          {feedback}
        </p>
      ) : null}

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send My Request"}
        </button>
        {status === "error" ? (
          <button
            type="button"
            onClick={handleResend}
            className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Resend My Request
          </button>
        ) : null}
      </div>
    </form>
  );
}
