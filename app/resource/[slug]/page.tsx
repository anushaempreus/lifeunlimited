import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FACTSHEETS, getFactSheet } from "@/lib/factsheets";
import { RenderBlocks, BookingCTA } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return FACTSHEETS.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const sheet = getFactSheet(slug);
  const lead = sheet?.body.find((b) => b.type === "lead");
  return {
    title: sheet?.metaTitle ?? "Resources",
    description: lead && "text" in lead ? lead.text.slice(0, 160) : undefined,
  };
}

export default async function FactSheetPage({ params }: Props) {
  const { slug } = await params;
  const sheet = getFactSheet(slug);
  if (!sheet) notFound();

  return (
    <div className="mx-auto max-w-[900px] px-4 py-12">
      <div className="relative aspect-[2/1] mb-8 rounded-[10px] overflow-hidden">
        <Image src={sheet.banner} alt={sheet.title} fill className="object-cover" />
      </div>
      <h1 className="h1-brand mb-6">{sheet.title}</h1>
      <RenderBlocks blocks={sheet.body} />
      <BookingCTA lead={sheet.ctaLead} />
      <p className="mt-8">
        <Link href="/resource" className="text-olive underline">
          ← Back to Resources
        </Link>
      </p>
    </div>
  );
}
