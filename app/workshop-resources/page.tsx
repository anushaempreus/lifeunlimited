import type { Metadata } from "next";
import { cookies } from "next/headers";
import { WORKSHOP_COOKIE, tokenIsValid } from "@/lib/workshop-auth";

export const metadata: Metadata = {
  title: "Workshop Resources",
  description:
    "Materials and take-home resources for Life Unlimited workshop participants.",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

type Resource = {
  title: string;
  description: string;
  href?: string;
  tag: string;
};

/**
 * Protected content shown after the password gate.
 * Add/replace entries as workshop materials are supplied.
 */
const RESOURCES: Resource[] = [
  {
    title: "Top Sleep Tips",
    description: "Practical, evidence-based tips for a better night’s sleep.",
    href: "/docs/LU-Top-Sleep-Tips.pdf",
    tag: "PDF",
  },
  {
    title: "Bootcamp for the Brain — key concepts",
    description:
      "Summary of the core resilience concepts covered in your workshop. Coming soon.",
    tag: "Coming soon",
  },
  {
    title: "Breathing & grounding exercises",
    description:
      "Guided practices to regulate your nervous system between sessions. Coming soon.",
    tag: "Coming soon",
  },
];

const ERRORS: Record<string, string> = {
  incorrect: "That password isn’t right — please check with your facilitator and try again.",
  rate: "Too many attempts — please wait a few minutes and try again.",
  unconfigured:
    "Access isn’t set up yet. Please contact the office on 02 6248 5138 for your materials.",
};

function Gate({ error }: { error?: string }) {
  return (
    <div className="mx-auto max-w-[700px] px-4 py-14">
      <span className="eyebrow">For workshop participants</span>
      <h1 className="h1-brand mt-3 mb-6">Workshop Resources</h1>
      <div className="card !rounded-3xl p-8">
        <p className="mb-6">
          This content is password-protected. Workshop participants receive the password
          from their facilitator — enter it below to view your materials.
        </p>
        <form method="POST" action="/api/workshop-auth" className="flex flex-wrap gap-3 items-end">
          <div className="flex-1 min-w-[220px]">
            <label htmlFor="wr-password" className="block text-sm font-medium text-heading mb-1.5">
              Password
            </label>
            <input
              id="wr-password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="field"
            />
          </div>
          <button type="submit" className="btn-blue">
            View resources
          </button>
        </form>
        {error && ERRORS[error] && (
          <p role="alert" className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {ERRORS[error]}
          </p>
        )}
        <p className="mt-6 text-sm text-body/80">
          Don’t have the password? Contact us on{" "}
          <a href="tel:0262485138" className="text-blue-dark underline underline-offset-4">02 6248 5138</a>{" "}
          or{" "}
          <a href="mailto:info@lifeunlimited.com.au" className="text-blue-dark underline underline-offset-4">
            info@lifeunlimited.com.au
          </a>.
        </p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="mx-auto max-w-[1000px] px-4 py-14">
      <span className="eyebrow">For workshop participants</span>
      <h1 className="h1-brand mt-3 mb-4">Workshop Resources</h1>
      <p className="max-w-2xl mb-10">
        Welcome! Below are the take-home materials from your Life Unlimited workshop. If
        something you’re looking for isn’t here yet, contact the office and we’ll point
        you in the right direction.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {RESOURCES.map((r) => (
          <div key={r.title} className="card p-7 flex flex-col">
            <span className="self-start text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-olive/20 text-olive-deep mb-4">
              {r.tag}
            </span>
            <h2 className="text-xl mb-2">{r.title}</h2>
            <p className="mb-5 flex-1 text-[15px]">{r.description}</p>
            {r.href ? (
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-semibold text-sm text-heading"
              >
                Download <span className="arrow-dot">↓</span>
              </a>
            ) : (
              <span className="text-sm text-body/60">Available soon</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function WorkshopResourcesPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const cookieStore = await cookies();
  const authed = tokenIsValid(cookieStore.get(WORKSHOP_COOKIE)?.value);
  if (authed) return <Content />;
  const { error } = await searchParams;
  return <Gate error={error} />;
}
