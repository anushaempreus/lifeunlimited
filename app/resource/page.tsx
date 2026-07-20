import type { Metadata } from "next";
import Link from "next/link";
import { RESOURCE_CATEGORIES } from "@/lib/factsheets";

export const metadata: Metadata = {
  title: "Mental Health Resources",
  description:
    "Free fact sheets on counselling, depression, stress, anxiety and trauma — what they are, how counselling helps, and how to get support in Canberra.",
};

const FACTSHEET_LINKS = [
  { label: "Top Sleep Tips", href: "/docs/LU-Top-Sleep-Tips.pdf", external: true },
  { label: "What is counselling? What can I expect?", href: "/resource/counselling-psychology" },
  { label: "What is depression?", href: "/resource/depression" },
  { label: "What is stress?", href: "/resource/stres" },
  { label: "What is anxiety?", href: "/resource/what-is-anxiety" },
  { label: "What is trauma?", href: "/resource/what-is-trauma" },
];

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-[1290px] px-4 py-12">
      <h1 className="h1-brand mb-6">Resources</h1>

      <div className="prose-lu max-w-3xl mb-10">
        <p className="text-[20px] text-heading font-medium">
          Have you thought about counselling but are not sure what to expect? Do you
          wonder whether what you are currently feeling might be more than “feeling blue”?
        </p>
        <p>
          Do you or someone you know, often feel worried and panicky? Are you affected by
          something that happened in the past?
        </p>
        <p>
          We have developed fact sheets that describe some of the common problems or
          issues that many of our clients face. Our facts sheets help to define common
          mental health issues and how we can assist people to manage symptoms and make
          positive changes to their lives.
        </p>
      </div>

      <section className="rounded-3xl border border-olive/25 bg-cream p-8 mb-12 max-w-3xl">
        <h2 className="text-2xl font-bold mb-4">List of factsheets</h2>
        <ul className="space-y-2">
          {FACTSHEET_LINKS.map((l) => (
            <li key={l.label}>
              {l.external ? (
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-olive underline">
                  {l.label}
                </a>
              ) : (
                <Link href={l.href} className="text-olive underline">
                  {l.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </section>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {RESOURCE_CATEGORIES.map((c) => (
          <div key={c.slug} className="card p-7 flex flex-col">
            <h2 className="text-xl font-bold mb-3">{c.title}</h2>
            <p className="mb-5 flex-1">
              {c.slug === "health-nutrition"
                ? "The over-arching philosophy of Life Unlimited is about helping people gain “Optimal Health” – to enable our clients to be the best they can be and have the best life possible, socially, physically and psychologically."
                : "Resources coming soon"}
            </p>
            <Link href={`/resources/${c.slug}`} className="btn-blue self-start text-sm">
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
