import CTA from "@/components/sections/CTA";
import PrivacyHero from "@/components/sections/PrivacyHero";

export default function PrivacyPolicyPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black overflow-hidden relative">
      <PrivacyHero titleTop="PRIVACY" titleBottom="POLICY" />

      <section className="pb-20">
        <div className="container mx-auto px-6 max-w-4xl text-white/80 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white">Privacy Policy</h2>
              <p className="mt-2 text-white/60">Effective Date: August 2025</p>
              <p className="mt-4 leading-relaxed">
                At Pentacore Solution ("Company," "we," "our," or "us"), we value your trust and are
                committed to protecting your privacy. This Privacy Policy explains how we handle
                information collected through our website and services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">1. Information We Collect</h3>
              <p className="mt-3 leading-relaxed">
                We only collect the information necessary to deliver our services effectively, including:
              </p>
              <ul className="mt-3 space-y-2 list-disc pl-6">
                <li>
                  Personal Information: Name, email address, phone number, and details provided when
                  contacting us or using our services.
                </li>
                <li>
                  Service Usage Data: Information related to how you interact with our website or
                  AI-powered services (non-sensitive behavioral data).
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">2. How We Use Information</h3>
              <p className="mt-3 leading-relaxed">We use the collected information solely to:</p>
              <ul className="mt-3 space-y-2 list-disc pl-6">
                <li>Provide and improve our services</li>
                <li>Respond to inquiries and requests</li>
                <li>Deliver AI solutions tailored to your needs</li>
                <li>Send important updates or service notifications</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">3. AI Services and Tools We Use</h3>
              <p className="mt-3 leading-relaxed">
                Our solutions leverage advanced AI tools and frameworks, including but not limited to:
              </p>
              <ul className="mt-3 space-y-2 list-disc pl-6">
                <li>Anthropic</li>
                <li>OpenAI</li>
                <li>VAPI</li>
                <li>Hugging Face</li>
                <li>LangChain</li>
                <li>Google Vertex AI</li>
                <li>Microsoft Azure AI Services</li>
                <li>Retell AI</li>
              </ul>
              <p className="mt-3 leading-relaxed">
                We integrate these tools strictly to build and deliver AI-powered applications and
                automations for our clients.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">4. Information Sharing</h3>
              <p className="mt-3 leading-relaxed">
                We do not sell, trade, or disclose customer information to third parties. Information
                is only shared with trusted technology partners when necessary to provide the agreed
                services and is protected under strict confidentiality agreements.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">5. Third-Party Communication Services</h3>
              <p className="mt-3 leading-relaxed">
                To provide seamless communication and calling services to our clients, we use OpenPhone.
                When you contact us via phone or messaging, certain information (such as your phone
                number and call details) may be processed by OpenPhone in accordance with their privacy
                practices.
              </p>
              <p className="mt-3 leading-relaxed">
                Additional Disclosures: Affiliates: We may disclose the Personal Data to our affiliates
                or subsidiaries; however, if we do so, their use and disclosure of your Personal Data
                will be subject to this Policy. All the above categories exclude text messaging
                originator opt-in data and consent; this information will not be shared with any third
                parties.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">6. Data Security</h3>
              <p className="mt-3 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your data from
                unauthorized access, disclosure, or misuse.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">7. Your Rights</h3>
              <p className="mt-3 leading-relaxed">
                You may request to access, correct, or delete your information at any time by contacting
                us at{" "}
                <a
                  href="mailto:pentacoresolutions6@gmail.com"
                  className="text-cyan-300 hover:text-cyan-200 underline"
                >
                  pentacoresolutions6@gmail.com
                </a>
                .
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">8. Policy Updates</h3>
              <p className="mt-3 leading-relaxed">
                We may update this Privacy Policy occasionally. Any changes will be posted on this page
                with an updated "Effective Date."
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">9. Contact Us</h3>
              <p className="mt-3 leading-relaxed">For any privacy-related questions:</p>
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
