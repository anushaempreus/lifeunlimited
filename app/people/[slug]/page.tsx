import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PEOPLE, getPerson } from "@/lib/people";
import { RenderBlocks } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PEOPLE.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const person = getPerson(slug);
  return {
    title: person?.name ?? "Our People",
    description: person ? `${person.name} — ${person.role}. ${person.teaser}`.slice(0, 160) : undefined,
  };
}

export default async function PersonPage({ params }: Props) {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person) notFound();

  return (
    <div className="mx-auto max-w-[1290px] px-4 py-12">
      <h1 className="h1-brand mb-8">{person.name}</h1>
      <div className="grid gap-10 lg:grid-cols-[380px_1fr] items-start">
        <div>
          <div className="tilt-frame">
            <Image
              src={person.image}
              alt={person.name}
              width={380}
              height={person.portrait ? 500 : 360}
              className="rounded-3xl w-full h-auto"
            />
          </div>
          <p className="mt-6 text-xs uppercase tracking-[0.14em] text-olive-deep font-bold">
            {person.role}
          </p>
          <a href="tel:0262485138" className="btn-blue mt-4 text-sm">
            02 6248 5138
          </a>
        </div>
        <div>
          <RenderBlocks blocks={person.bio} />
          <p className="mt-8">
            <Link href="/our-people" className="text-olive underline">
              ← Back to Our People
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
