import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COURSES, getCourse } from "@/lib/courses";
import { RenderBlocks, BookingCTA } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return COURSES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  return {
    title: course?.title ?? "Training and Education",
    description: course?.teaser.slice(0, 160),
  };
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <div className="mx-auto max-w-[900px] px-4 py-12">
      <div className="relative aspect-[5/2] mb-8 rounded-[10px] overflow-hidden">
        <Image src={course.image} alt={course.title} fill className="object-cover" />
      </div>
      <h1 className="h1-brand mb-6">{course.title}</h1>
      <RenderBlocks blocks={course.body} />
      <BookingCTA
        lead={`Contact Life Unlimited on 02 6248 5138 or email info@lifeunlimited.com.au now to book a “${course.title}” seminar or workshop. We can provide one-to-one coaching for managers or employees, or tailor the course specifically for your organisation’s needs.`}
      />
      <p className="mt-8">
        <Link href="/training-and-education" className="text-olive underline">
          ← Back to Training and Education
        </Link>
      </p>
    </div>
  );
}
