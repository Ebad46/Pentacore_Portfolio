import CTA from "@/components/sections/CTA";
import PrivacyHero from "@/components/sections/PrivacyHero";

export default function TermsAndConditionsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black overflow-hidden relative">
      <PrivacyHero titleTop="TERMS AND" titleBottom="CONDITIONS" />

      <section className="pb-20">
        <div className="container mx-auto px-6 max-w-4xl text-white/80 space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Terms and Conditions</h2>
            <p className="mt-2 text-white/60">Effective Date: August 2025</p>
            <p className="mt-4 leading-relaxed">
              Welcome to Pentacore Solution ("Company," "we," "our," or "us"). By accessing or using
              our website and services, you agree to these Terms of Use. If you do not agree, please do
              not use our website or services.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">1. Use of Our Services</h3>
            <p className="mt-3 leading-relaxed">
              Our services are designed for businesses and individuals seeking custom software
              development, AI-powered solutions, automation, and related technology services.
            </p>
            <p className="mt-3 leading-relaxed">
              You agree to use our website and services only for lawful purposes and in compliance with
              all applicable laws and regulations.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">2. Intellectual Property</h3>
            <p className="mt-3 leading-relaxed">
              All content on this website, including text, images, graphics, and code, is owned by
              Pentacore Solution or our technology partners and is protected by copyright and
              intellectual property laws.
            </p>
            <p className="mt-3 leading-relaxed">
              You may not copy, modify, distribute, or use our content without prior written
              permission.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">3. AI Services and Tools</h3>
            <p className="mt-3 leading-relaxed">
              We utilize advanced AI tools and frameworks, including Anthropic, OpenAI, Hugging Face,
              VAPI, LangChain, Google Vertex AI, Microsoft Azure AI, Retell AI, and related
              technologies.
            </p>
            <p className="mt-3 leading-relaxed">
              These tools are integrated strictly to deliver our AI solutions and are subject to their
              respective licenses and usage policies.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">4. Confidentiality</h3>
            <p className="mt-3 leading-relaxed">
              Any information shared with us for project purposes will be kept strictly confidential.
              We do not disclose client data to unauthorized parties unless required by law.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">5. Disclaimers</h3>
            <p className="mt-3 leading-relaxed">
              Our website and services are provided on an "as is" basis without warranties of any kind.
              While we strive to deliver high-quality solutions, we do not guarantee that our website or
              services will be uninterrupted, error-free, or completely secure.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">6. Limitation of Liability</h3>
            <p className="mt-3 leading-relaxed">
              Pentacore Solution shall not be liable for any indirect, incidental, or consequential
              damages arising from the use or inability to use our website or services.
            </p>
            <p className="mt-3 leading-relaxed">
              Our total liability, in any case, shall not exceed the fees paid by you for the specific
              service in question.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">7. Third-Party Links</h3>
            <p className="mt-3 leading-relaxed">
              Our website may contain links to third-party websites or services. We are not responsible
              for the content, policies, or practices of these third-party sites.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">8. Changes to Terms</h3>
            <p className="mt-3 leading-relaxed">
              We may update these Terms of Use periodically. Continued use of our website or services
              after changes indicates acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">9. Contact Us</h3>
            <p className="mt-3 leading-relaxed">
              For any questions or concerns about these Terms, you can reach us at:
            </p>
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center text-cyan-300">
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                      <path d="m22 6-10 7L2 6" />
                    </svg>
                  </span>
                  <p className="leading-relaxed">
                    <span className="text-white font-medium">Email: </span>
                    <a
                      href="mailto:pentacoresolutions6@gmail.com"
                      className="text-cyan-300 hover:text-cyan-200 underline"
                    >
                      pentacoresolutions6@gmail.com
                    </a>
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center text-cyan-300">
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.78.65 2.62a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.46-1.22a2 2 0 0 1 2.11-.45c.84.31 1.72.53 2.62.65A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <p className="leading-relaxed">
                    <span className="text-white font-medium">Phone: </span>+92 3345226644
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center text-cyan-300">
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20.52 3.48A11.78 11.78 0 0 0 12.06 0C5.52 0 .22 5.3.22 11.84c0 2.09.55 4.14 1.59 5.94L0 24l6.4-1.67a11.8 11.8 0 0 0 5.66 1.45h.01c6.53 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.39-8.46z" />
                      <path d="M17.19 14.78c-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.61.14-.18.27-.7.89-.86 1.07-.16.18-.31.2-.58.07-.27-.14-1.14-.42-2.18-1.34-.81-.72-1.35-1.61-1.5-1.88-.16-.27-.02-.42.12-.56.12-.12.27-.31.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.61-1.47-.84-2.01-.22-.52-.45-.45-.61-.46h-.52c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27s.97 2.64 1.11 2.82c.14.18 1.9 2.9 4.61 4.07.64.28 1.14.45 1.53.57.64.2 1.22.17 1.68.1.51-.08 1.62-.66 1.85-1.3.23-.64.23-1.18.16-1.3-.07-.11-.25-.18-.52-.32z" />
                    </svg>
                  </span>
                  <p className="leading-relaxed">
                    <span className="text-white font-medium">WhatsApp: </span>+92 3345226644
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <CTA />
      </section>
    </main>
  );
}
