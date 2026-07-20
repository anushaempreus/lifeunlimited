import Image from "next/image";
import Link from "next/link";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Our People", href: "/our-people" },
  { label: "Training and Education", href: "/training-and-education" },
  { label: "Retreats", href: "/retreat" },
  { label: "Organisational Solutions", href: "/organisational-solutions" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Disclaimer", href: "/disclaimer" },
];

const OTHER_RESOURCES = [
  { label: "What is Counselling? What Can I Expect?", href: "/resource/counselling-psychology" },
  { label: "What is Depression?", href: "/resource/depression" },
  { label: "What is Trauma?", href: "/resource/what-is-trauma" },
  { label: "What is Anxiety?", href: "/resource/what-is-anxiety" },
  { label: "What is stress?", href: "/resource/stres" },
  { label: "Creating a Harassment Free Workplace", href: "/organisational-solutions/respect_seminar" },
  { label: "Assertiveness at Work", href: "/organisational-solutions/assertiveness-at-work" },
  { label: "Gratitude and weight loss", href: "/gratitude" },
  { label: "Eat Mindfully", href: "/eat-mindfully" },
];

export default function Footer() {
  return (
    <footer className="relative mt-28">
      {/* Pre-footer CTA — overlaps the footer surface */}
      <div className="mx-auto max-w-[1290px] px-4 lg:px-6 relative z-10">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue to-blue-deep grain px-8 py-12 lg:px-16 lg:py-14 text-center lg:text-left lg:flex items-center justify-between gap-10 -mb-24">
          <div className="relative">
            <p className="text-white/75 text-sm font-semibold uppercase tracking-[0.18em] mb-3">
              Ready when you are
            </p>
            <h2 className="font-[family-name:var(--font-fraunces)] text-white text-[clamp(1.7rem,3.2vw,2.5rem)] leading-tight max-w-xl">
              Let us know how we can <span className="italic text-olive">help you</span>.
            </h2>
          </div>
          <div className="relative flex flex-wrap justify-center gap-4 mt-8 lg:mt-0 shrink-0">
            <a href="tel:0262485138" className="btn-olive !px-8 !py-3.5">
              02 6248 5138
            </a>
            <a href="mailto:info@lifeunlimited.com.au" className="btn-ghost !px-8 !py-3.5">
              Email us
            </a>
          </div>
        </div>
      </div>

      {/* Footer surface */}
      <div className="bg-alt border-t border-gray-200/70">
        <div className="mx-auto max-w-[1290px] px-4 lg:px-6 pt-40 pb-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link href="/" aria-label="Life Unlimited — home">
              <Image
                src="/images/logo.png"
                alt="Life Unlimited"
                width={210}
                height={47}
                className="mb-6"
              />
            </Link>
            <p className="mb-1.5 leading-relaxed">
              Unit 1/9 McKay Street, Southern Cross House,
              <br />
              Turner ACT 2612
            </p>
            <p className="mb-5">GPO Box 597 Canberra ACT 2601</p>
            <p className="mb-1">
              <a href="tel:0262485138" className="font-semibold text-heading hover:text-blue-dark transition-colors">
                02 6248 5138
              </a>
            </p>
            <p className="mb-6">
              <a href="mailto:info@lifeunlimited.com.au" className="font-semibold text-heading hover:text-blue-dark transition-colors break-all">
                info@lifeunlimited.com.au
              </a>
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/LifeUnlimitedHealthSolutions"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-body hover:border-blue hover:text-blue transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                  <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.6 1.6-1.6h1.7V3.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.4V13h2.7v8h3.4z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/lifeunlimitedpsychology/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-body hover:border-blue hover:text-blue transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden>
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer quick links">
            <h4 className="text-heading font-semibold text-[15px] uppercase tracking-[0.1em] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="inline-block text-[15.5px] hover:text-blue-dark hover:translate-x-1 transition-all duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resources */}
          <nav aria-label="Footer resources">
            <h4 className="text-heading font-semibold text-[15px] uppercase tracking-[0.1em] mb-5">
              Other Resources
            </h4>
            <ul className="space-y-2.5">
              {OTHER_RESOURCES.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="inline-block text-[15.5px] hover:text-blue-dark hover:translate-x-1 transition-all duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200/70">
          <div className="mx-auto max-w-[1290px] px-4 lg:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-body/80">
            <span>© {new Date().getFullYear()} Empreus IT Support</span>
            <span className="inline-flex items-center gap-2">
              <span className="inline-block h-1.5 w-6 rounded-full bg-gradient-to-r from-olive to-blue" aria-hidden />
              Life Unlimited Health Solutions Pty Ltd
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
