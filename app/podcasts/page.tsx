import type { Metadata } from "next";
import Link from "next/link";
import { RECENT_EPISODES, SERIES_2023, SERIES_2022, type Episode } from "@/lib/podcasts";

export const metadata: Metadata = {
  title: "Podcasts and presentations",
  description:
    "Listen to psychologist Sue Read on ABC Radio Canberra — the Life Guru series and more conversations on stress, resilience, sleep, habits and wellbeing.",
};

function EpisodeCard({ ep }: { ep: Episode }) {
  const action = ep.action ?? "Listen now";
  const internal = ep.href.startsWith("/");
  return (
    <div className="card p-7 flex flex-col">
      <h3 className="text-lg font-bold mb-1">{ep.title}</h3>
      <p className="text-xs uppercase tracking-[0.12em] text-olive-deep font-bold mb-3">{ep.date}</p>
      <p className="mb-6 flex-1 text-[15.5px]">{ep.blurb}</p>
      {internal ? (
        <Link href={ep.href} className="btn-blue self-start text-sm">
          {action}
        </Link>
      ) : (
        <a
          href={ep.href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-blue self-start text-sm"
        >
          {action}
        </a>
      )}
    </div>
  );
}

export default function PodcastsPage() {
  return (
    <div className="mx-auto max-w-[1290px] px-4 py-12">
      <h1 className="h1-brand mb-10">Podcasts and presentations</h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
        {RECENT_EPISODES.map((ep) => (
          <EpisodeCard key={ep.title} ep={ep} />
        ))}
      </div>

      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-olive/15 via-cream to-blue/12 border border-olive/25 p-10 mb-16 text-center">
        <h2 className="text-2xl font-semibold uppercase tracking-[0.14em] mb-4">
          Life Guru
        </h2>
        <p className="mx-auto max-w-3xl mb-3">
          Sue Read is on ABC Radio every Monday morning as Canberra’s very own Life Guru –
          sharing her wealth of psychological knowledge, real life examples and practical
          ways to live your life to it’s full potential.
        </p>
        <p className="mx-auto max-w-3xl">
          Tune in Monday mornings at 666 AM, online at{" "}
          <a
            href="https://www.abc.net.au/radio/listen/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-dark underline underline-offset-4"
          >
            ABC Radio
          </a>{" "}
          or download the ABC Listen App to keep up to date with Sue Read’s Life Guru
          series.
        </p>
      </section>

      <h2 className="text-2xl font-semibold mb-8">Life Guru Series 2023</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
        {SERIES_2023.map((ep) => (
          <EpisodeCard key={ep.title} ep={ep} />
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-8">Life Guru Series 2022</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {SERIES_2022.map((ep) => (
          <EpisodeCard key={ep.title} ep={ep} />
        ))}
      </div>
    </div>
  );
}
