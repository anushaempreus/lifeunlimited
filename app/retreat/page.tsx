import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Retreats",
  description:
    "Science-informed wellbeing retreats with Life Unlimited — restorative weekends blending psychology, breathwork, yoga and somatic practice.",
};

const REGISTER_URL =
  "https://forms.office.com/Pages/ResponsePage.aspx?id=i7Ka3UUAU0qRrYqsGKGr2Ovhx5yliRlPiC-UmgWVJc1UNlYwT1U4NkRSQkdVM09VSFMyWU1QRElMTy4u";

const FACILITATORS = [
  {
    name: "Sue Read – Psychologist",
    image: "/images/retreat/sue.png",
    text: "With Sue, you’ll be supported to understand what’s happening in your body – and shown how to work with it, not against it. Sue Read is a Registered Psychologist, ABC Radio presenter and Director of Life Unlimited Psychology, with over 25 years’ experience in performance, wellbeing and burnout recovery. Alongside her clinical expertise, her background as an elite athlete shapes a deeply practical, embodied approach to restoring energy and resilience. She brings together modern neuroscience, trauma-informed care and somatic-based practices to help women navigate the intersection of stress, perimenopause and hormonal change. Throughout the retreat, Sue will guide you through psychological skills and body-based practices that support real change – helping you regulate your nervous system, reduce overwhelm, and rebuild clarity, energy and emotional steadiness. You won’t just learn the science – you’ll experience it. And you’ll leave with simple, sustainable tools you can use in everyday life to support your body, mind and long-term wellbeing.",
  },
  {
    name: "KJ Shaw",
    image: "/images/retreat/kj-shaw.png",
    text: "KJ brings warmth, authenticity, and a wealth of life experience to her teaching. At 52 and as a mother of three boys, she understands the importance of balance, connection, and self-care through life’s changing seasons. Alongside motherhood, she has spent the past 28 years teaching Furniture Making and Creative Arts in high schools, inspiring creativity and resilience in her students. Having grown up immersed in competitive sport – including gymnastics, CrossFit, and numerous team sports – movement has always been central to KJ’s life. In 2016, she discovered yoga and recognised the importance of a more mindful and nurturing relationship with movement. Yoga became a powerful way for her to reconnect with herself beyond competition and performance. For the past six years, KJ has been teaching yoga with a focus on balance, self-compassion, and wellbeing. She enjoys weaving yoga philosophy into her classes and encouraging students to find strength, gratitude, and perspective through everyday life. KJ feels honoured to be part of the Nourish & Nurture Retreat and looks forward to supporting women navigating perimenopause, burnout, and the transformative journey of midlife with compassion and connection.",
  },
  {
    name: "Liz Fulop",
    image: "/images/retreat/liz-fulop.png",
    text: "Liz brings a deeply supportive, body-based approach to the retreat – helping you slow down, release tension and restore energy. As an experienced body worker, yoga teacher, personal trainer and remedial massage therapist (lymphatic drainage), she will guide you through gentle, accessible practices that support joint health, lymphatic flow and overall recovery. Liz’s sessions are designed to meet you where you are – helping you feel more at ease in your body, while building simple, sustainable habits you can continue long after the retreat.",
  },
];

export default function RetreatPage() {
  return (
    <div className="mx-auto max-w-[1290px] px-4 py-12">
      <h1 className="h1-brand mb-2">Retreats</h1>
      <p className="text-xl font-medium text-heading mb-10">
        Are you ready to rejuvenate?
      </p>

      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-olive/25 via-cream to-blue/15 border border-olive/25 p-10 mb-12 text-center">
        <h2 className="text-2xl font-bold uppercase tracking-[0.12em] mb-3">
          Upcoming Retreats
        </h2>
        <p className="text-xl mb-6 font-medium text-olive-deep">COMING SOON!</p>
        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-blue uppercase"
        >
          Register your interest for future retreats here
        </a>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold uppercase mb-6">Past Retreats</h2>
        <h3 className="text-xl font-semibold mb-1">
          May 2026 Retreat: NOURISH &amp; NURTURE
        </h3>
        <p className="text-lg text-heading mb-6">
          A Burnout &amp; Hormonal Reset Retreat for Women
        </p>
        <div className="prose-lu max-w-3xl">
          <p>
            This was a 2 day, deeply restorative, science-informed weekend amidst the
            breathtaking landscapes of the Yass Valley.
          </p>
          <p>
            Across the weekend, participants were guided through a carefully balanced
            program integrating evidence-based psychological approaches, neuroscience, and
            gentle embodied practices. The experience included a blend of mindfulness,
            breathwork, yoga, and somatic techniques, alongside practical workshops
            focused on nervous system regulation, emotional wellbeing, and hormonal
            health.
          </p>
          <p>
            A key focus of the retreat was not only rest and restoration, but also
            equipping participants with practical, sustainable tools they could continue
            to use in everyday life — supporting resilience, energy, and overall wellbeing
            beyond the retreat setting.
          </p>
          <p>
            Participants were supported within a calm, nurturing environment, with time
            for reflection, connection, and rest, alongside nourishing meals and
            thoughtful care throughout.
          </p>
        </div>

        {/* Instagram reel from the retreat */}
        <div className="mt-10 max-w-[380px]">
          <div className="card !rounded-3xl overflow-hidden">
            <iframe
              title="Nourish & Nurture retreat reel — @sueread_psychologist on Instagram"
              src="https://www.instagram.com/reel/DZeiLGXSQLp/embed/"
              className="w-full aspect-[9/16] border-0"
              loading="lazy"
              allow="encrypted-media"
              allowFullScreen
            />
          </div>
          <p className="mt-3 text-sm">
            <a
              href="https://www.instagram.com/reel/DZeiLGXSQLp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-dark underline underline-offset-4"
            >
              Watch the retreat reel on Instagram (@sueread_psychologist)
            </a>
          </p>
        </div>
        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-blue uppercase mt-6 inline-block"
        >
          Register your interest for future retreats now
        </a>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-8">Meet our Facilitators</h2>
        <div className="space-y-12">
          {FACILITATORS.map((f) => (
            <div key={f.name} className="grid gap-8 md:grid-cols-[300px_1fr] items-start">
              <div className="tilt-frame">
                <Image
                  src={f.image}
                  alt={f.name}
                  width={300}
                  height={320}
                  className="rounded-3xl w-full h-auto"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">{f.name}</h3>
                <p>{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
