import type { Metadata } from "next";
import CTA from "@/components/sections/CTA";
import HomeReviews from "@/components/sections/HomeReviews";
import PrivacyHero from "@/components/sections/PrivacyHero";
import ContactForm from "@/components/sections/ContactForm";
import PentacoreSectionShell from "@/components/ui/PentacoreSectionShell";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Pentacore Solution to discuss web, mobile app, backend, and AI development services.",
  alternates: { canonical: "/contact-us" },
};

export default function ContactUsPage() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-x-clip bg-black">
      <PrivacyHero titleTop="CONTACT" titleBottom="US" />

      <section className="pb-24">
        <div className="container relative mx-auto">
          <PentacoreSectionShell className="mt-14">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="pt-2">
                <p className="text-xs uppercase tracking-[0.24em] text-white/50">
                  Home • Contact
                </p>
                <h2 className="mt-5 text-4xl font-semibold leading-tight text-white md:text-5xl">
                  Get in touch today to receive
                  <br />
                  more information.
                </h2>
                <p className="mt-6 max-w-md leading-relaxed text-white/65">
                  Whether you are a startup or a business owner, we understand your requirements
                  and suggest the best software solutions.
                </p>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-white/45">
                  Your information stays completely secure. No spam, no unnecessary follow-ups.
                </p>
              </div>

              <ContactForm />
            </div>
          </PentacoreSectionShell>

          <div className="mt-8">
            <CTA />
            <div className="rounded-2xl border border-white/10 bg-[#0b0e14]">
              <HomeReviews />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
