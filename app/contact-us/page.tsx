import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Life Unlimited — phone 02 6248 5138, email info@lifeunlimited.com.au, or visit us at Unit 1/9 McKay Street, Turner ACT 2612.",
};

const CRISIS = [
  "Police, Fire, Ambulance: call 000",
  "Police Attendance: call 13 1444",
  "ACT Mental Health Crisis team: 1800 629 354 (24hrs) or (02) 6205 1065 (24hrs)",
  "NSW Mental Health Line 1800 011 511 (24 hrs)",
  "Lifeline – 13 1114 (24hrs)",
  "Kids Helpline – 1800 551 800 (24hrs)",
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[1290px] px-4 lg:px-6 py-14">
      <span className="eyebrow">We’re here to help</span>
      <h1 className="h1-brand mt-3 mb-2">Contact Us</h1>
      <p className="text-xl text-heading/80 mb-12">
        There are many ways to get in touch
      </p>

      <div className="grid gap-12 lg:grid-cols-2 items-start">
        <div className="space-y-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <a href="tel:0262485138" className="card p-6 block group">
              <p className="text-sm font-medium text-body mb-1">Phone us on</p>
              <p className="text-xl font-semibold text-heading group-hover:text-blue-dark transition-colors">
                02 6248 5138
              </p>
            </a>
            <a href="mailto:info@lifeunlimited.com.au" className="card p-6 block group">
              <p className="text-sm font-medium text-body mb-1">Email us</p>
              <p className="text-lg font-semibold text-heading break-all group-hover:text-blue-dark transition-colors">
                info@lifeunlimited.com.au
              </p>
            </a>
          </div>

          <div className="card p-6">
            <p className="text-sm font-medium text-body mb-1">Drop by</p>
            <p className="text-lg font-semibold text-heading">
              Unit 1, 9 McKay Street, Southern Cross House
              <br />
              Turner ACT 2612
            </p>
          </div>

          <div className="rounded-3xl border border-blue/25 bg-gradient-to-br from-cream to-blue/10 p-7">
            <h2 className="text-xl font-semibold mb-3">If you need help urgently:</h2>
            <ul className="space-y-2">
              {CRISIS.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card !rounded-3xl p-8">
          <h2 className="text-2xl font-semibold mb-2">Send us a message</h2>
          <p className="mb-6 text-[15.5px]">
            Prefer to write? Fill in the form and we’ll get back to you.
          </p>
          <ContactForm />
        </div>
      </div>

      <div className="card !rounded-3xl overflow-hidden mt-12">
        <iframe
          title="Life Unlimited location map"
          src="https://www.google.com/maps?q=9%20McKay%20St%2C%20Turner%20ACT%202612&output=embed"
          className="w-full h-[420px] border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
