import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PEOPLE } from "@/lib/people";

export const metadata: Metadata = {
  title: "Our People",
  description:
    "Meet the Life Unlimited team — registered psychologists, accredited mental health social workers and counsellors serving Canberra since 2001.",
};

export default function OurPeoplePage() {
  return (
    <div className="mx-auto max-w-[1290px] px-4 py-12">
      <h1 className="h1-brand mb-6">Our People</h1>

      <div className="prose-lu max-w-3xl mb-12">
        <p className="text-[20px] text-heading font-medium">
          People, and what makes us tick, are our passion. We work with people
          experiencing all kinds of distress – from depression and anxiety to trauma and
          chronic illness. Our team is highly professional, qualified and experienced with
          a broad range of skills and abilities.
        </p>
        <p>
          Sue Read started Life Unlimited over 20 years ago, with Julia O’Boyle joining
          the company in 2010. Sue is a Registered Psychologist and Julia is an Accredited
          Mental Health Social Worker, specialising in mental health issues. Together they
          have built a fantastic team – all qualified and experienced presenters and
          clinicians, as well as mediators who are skilled in dispute and conflict
          resolution.
        </p>
        <p>
          To make an appointment, or discuss your organisation or workplace needs please{" "}
          <Link href="/contact-us">contact us</Link>.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {PEOPLE.map((p) => (
          <div key={p.slug} className="card group flex flex-col p-5">
            <div className="card-img arch-sm relative aspect-[4/4.4]">
              <Image src={p.image} alt={p.name} fill className="object-cover object-top" />
            </div>
            <div className="pt-6 px-2 pb-2 flex flex-col flex-1">
              <h2 className="text-[1.35rem]">{p.name}</h2>
              <p className="text-xs uppercase tracking-[0.14em] text-olive-deep font-bold mt-1 mb-3">
                {p.role}
              </p>
              <p className="mb-6 flex-1 text-[15.5px]">{p.teaser}</p>
              <Link
                href={`/people/${p.slug}`}
                className="inline-flex items-center gap-3 font-semibold text-sm text-heading"
              >
                Read more <span className="arrow-dot">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
