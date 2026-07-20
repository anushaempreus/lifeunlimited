import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COURSES } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Training and Education",
  description:
    "Evidence-based workplace training, workshops and keynote talks — resilience, vicarious trauma, assertiveness, harassment-free workplaces and more.",
};

export default function TrainingPage() {
  return (
    <div className="mx-auto max-w-[1290px] px-4 py-12">
      <h1 className="h1-brand mb-6">Training and Education</h1>

      <div className="prose-lu max-w-3xl mb-12">
        <p>
          Life Unlimited has been working with organisations from all sectors for over 20
          years to improve the health and well-being of people and teams at work. We work
          with your company or agency to assess what the issues are, and then we
          collaborate with you to tailor a solution that best suits your needs.
        </p>
        <p>
          We are skilled in providing interactive and evidence based training, workshops
          and keynote talks, as well as a range of initiatives from mediating conflict to
          developing organisation-wide wellbeing programs.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        {COURSES.map((c) => (
          <div key={c.slug} className="card flex flex-col">
            <div className="card-img relative aspect-[3/2]">
              <Image src={c.image} alt={c.title} fill className="object-cover" />
            </div>
            <div className="p-7 flex flex-col flex-1">
              <h2 className="text-xl font-bold mb-3">
                <Link href={`/training_course/${c.slug}`} className="hover:text-olive-deep transition-colors">
                  {c.title}
                </Link>
              </h2>
              <p className="mb-6 flex-1 text-[15.5px]">{c.teaser}</p>
              <Link href={`/training_course/${c.slug}`} className="btn-blue self-start text-sm">
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
