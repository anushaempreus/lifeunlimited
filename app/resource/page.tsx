import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FACTSHEETS, RESOURCE_CATEGORIES } from "@/lib/factsheets";

export const metadata: Metadata = {
  title: "Mental Health Resources",
  description:
    "Free fact sheets on counselling, depression, stress, anxiety and trauma — what they are, how counselling helps, and how to get support in Canberra.",
};

const SHEET_IMAGES: Record<string, string> = {
  "counselling-psychology": "/images/resource/counselling.jpg",
  depression: "/images/resource/depression-banner.jpg",
  stres: "/images/resource/stress-banner.jpg",
  "what-is-anxiety": "/images/resource/anxiety-banner.jpg",
  "what-is-trauma": "/images/resource/trauma-banner.jpg",
};

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-[1290px] px-4 lg:px-6 py-14">
      {/* Editorial header — copy split into two columns */}
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr] items-end mb-14">
        <div>
          <span className="eyebrow">Fact sheets &amp; guides</span>
          <h1 className="h1-brand mt-3">Resources</h1>
          <p className="text-xl text-heading/80 mt-2">
            Have you thought about counselling but are not sure what to expect? Do you
            wonder whether what you are currently feeling might be more than{" "}
            <span className="accent-i">“feeling blue”</span>?
          </p>
        </div>
        <div className="prose-lu lg:pb-2">
          <p>
            Do you or someone you know, often feel worried and panicky? Are you affected
            by something that happened in the past?
          </p>
          <p>
            We have developed fact sheets that describe some of the common problems or
            issues that many of our clients face. Our facts sheets help to define common
            mental health issues and how we can assist people to manage symptoms and make
            positive changes to their lives.
          </p>
        </div>
      </div>

      {/* Fact sheets — image card grid */}
      <section className="mb-20">
        <h2 className="text-2xl mb-8">List of factsheets</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FACTSHEETS.map((f) => (
            <Link key={f.slug} href={`/resource/${f.slug}`} className="card group flex flex-col">
              <div className="card-img relative aspect-[5/3]">
                <Image
                  src={SHEET_IMAGES[f.slug]}
                  alt={f.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex items-center justify-between gap-4 flex-1">
                <h3 className="text-lg">{f.title}</h3>
                <span className="arrow-dot shrink-0">→</span>
              </div>
            </Link>
          ))}

          {/* Top Sleep Tips PDF */}
          <a
            href="/docs/LU-Top-Sleep-Tips.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="card group flex flex-col"
          >
            <div className="card-img relative aspect-[5/3]">
              <Image
                src="/images/resource/sleep.jpg"
                alt="Top Sleep Tips"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
              <span className="absolute top-4 left-4 bg-ink/70 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">
                PDF
              </span>
            </div>
            <div className="p-6 flex items-center justify-between gap-4 flex-1">
              <h3 className="text-lg">Top Sleep Tips</h3>
              <span className="arrow-dot shrink-0">↓</span>
            </div>
          </a>
        </div>
      </section>

      {/* Topics — balanced 2 + 3 bento */}
      <section>
        <h2 className="text-2xl mb-8">Explore by topic</h2>
        <div className="grid gap-6 md:grid-cols-6">
          {RESOURCE_CATEGORIES.map((c, i) => (
            <div
              key={c.slug}
              className={`card group flex flex-col ${
                i < 2 ? "md:col-span-3" : "md:col-span-2"
              }`}
            >
              <div className={`card-img relative ${i < 2 ? "aspect-[2/1]" : "aspect-[5/3]"}`}>
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg mb-2">{c.title}</h3>
                <p className="mb-5 flex-1 text-[15px]">
                  {c.slug === "health-nutrition"
                    ? "Our “Optimal Health” philosophy — being the best you can be socially, physically and psychologically."
                    : "Resources coming soon"}
                </p>
                <Link
                  href={`/resources/${c.slug}`}
                  className="inline-flex items-center gap-3 font-semibold text-sm text-heading"
                >
                  Read more <span className="arrow-dot">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
