import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RESOURCE_CATEGORIES, getResourceCategory } from "@/lib/factsheets";
import { RenderBlocks } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return RESOURCE_CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = getResourceCategory(slug);
  return { title: cat?.title ?? "Resources" };
}

export default async function ResourceCategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = getResourceCategory(slug);
  if (!cat) notFound();

  return (
    <div className="mx-auto max-w-[900px] px-4 py-12">
      <h1 className="h1-brand mb-6">{cat.title}</h1>
      <RenderBlocks blocks={cat.body} />
      <p className="mt-8">
        <Link href="/resource" className="text-olive underline">
          ← Back to Resources
        </Link>
      </p>
    </div>
  );
}
