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
    name: "Sue Read",
    role: "Psychologist",
    image: "/images/retreat/sue.png",
    text: "With Sue, you’ll be supported to understand what’s happening in your body – and shown how to work with it, not against it. Sue Read is a Registered Psychologist, ABC Radio presenter and Director of Life Unlimited Psychology, with over 25 years’ experience in performance, wellbeing and burnout recovery. Alongside her clinical expertise, her background as an elite athlete shapes a deeply practical, embodied approach to restoring energy and resilience. She brings together modern neuroscience, trauma-informed care and somatic-based practices to help women navigate the intersection of stress, perimenopause and hormonal change. Throughout the retreat, Sue will guide you through psychological skills and body-based practices that support real change – helping you regulate your nervous system, reduce overwhelm, and rebuild clarity, energy and emotional steadiness. You won’t just learn the science – you’ll experience it. And you’ll leave with simple, sustainable tools you can use in everyday life to support your body, mind and long-term wellbeing.",
  },
  {
    name: "KJ Shaw",
    role: "Yoga Teacher",
    image: "/images/retreat/kj-shaw.png",
    text: "KJ brings warmth, authenticity, and a wealth of life experience to her teaching. At 52 and as a mother of three boys, she understands the importance of balance, connection, and self-care through life’s changing seasons. Alongside motherhood, she has spent the past 28 years teaching Furniture Making and Creative Arts in high schools, inspiring creativity and resilience in her students. Having grown up immersed in competitive sport – including gymnastics, CrossFit, and numerous team sports – movement has always been central to KJ’s life. In 2016, she discovered yoga and recognised the importance of a more mindful and nurturing relationship with movement. Yoga became a powerful way for her to reconnect with herself beyond competition and performance. For the past six years, KJ has been teaching yoga with a focus on balance, self-compassion, and wellbeing. She enjoys weaving yoga philosophy into her classes and encouraging students to find strength, gratitude, and perspective through everyday life. KJ feels honoured to be part of the Nourish & Nurture Retreat and looks forward to supporting women navigating perimenopause, burnout, and the transformative journey of midlife with compassion and connection.",
  },
  {
    name: "Liz Fulop",
    role: "Body Worker & Remedial Massage Therapist",
    image: "/images/retreat/liz-fulop.png",
    text: "Liz brings a deeply supportive, body-based approach to the retreat – helping you slow down, release tension and restore energy. As an experienced body worker, yoga teacher, personal trainer and remedial massage therapist (lymphatic drainage), she will guide you through gentle, accessible practices that support joint health, lymphatic flow and overall recovery. Liz’s sessions are designed to meet you where you are – helping you feel more at ease in your body, while building simple, sustainable habits you can continue long after the retreat.",
  },
];

export default function RetreatPage() {
  return (
    <div className="mx-auto max-w-[1290px] px-4 lg:px-6 py-14">
      {/* Page header */}
      <span className="eyebrow">Rest · Restore · Reconnect</span>
      <h1 className="h1-brand mt-3 mb-2">Retreats</h1>
      <p className="text-xl text-heading/80 mb-12">Are you ready to rejuvenate?</p>

      {/* Upcoming */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-olive/20 via-cream to-blue/10 border border-olive/25 px-8 py-12 mb-16 text-center">
        <span className="eyebrow justify-center">Upcoming Retreats</span>
        <p className="font-[family-name:var(--font-fraunces)] text-3xl text-heading mt-4 mb-7">
          Coming soon!
        </p>
        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-blue !px-8 !py-3.5"
        >
          Register your interest for future retreats
        </a>
      </section>

      {/* Past retreat — text left, reel right */}
      <section className="mb-20">
        <span className="eyebrow">Past Retreats</span>
        <h2 className="text-3xl mt-3 mb-1">
          May 2026 Retreat: Nourish &amp; Nurture
        </h2>
        <p className="text-lg text-olive-deep font-medium mb-8">
          A Burnout &amp; Hormonal Reset Retreat for Women
        </p>

        <div className="grid gap-10 lg:grid-cols-[1fr_360px] items-start">
          <div className="prose-lu">
            <p>
              This was a 2 day, deeply restorative, science-informed weekend amidst the
              breathtaking landscapes of the Yass Valley.
            </p>
            <p>
              Across the weekend, participants were guided through a carefully balanced
              program integrating evidence-based psychological approaches, neuroscience,
              and gentle embodied practices. The experience included a blend of
              mindfulness, breathwork, yoga, and somatic techniques, alongside practical
              workshops focused on nervous system regulation, emotional wellbeing, and
              hormonal health.
            </p>
            <p>
              A key focus of the retreat was not only rest and restoration, but also
              equipping participants with practical, sustainable tools they could continue
              to use in everyday life — supporting resilience, energy, and overall
              wellbeing beyond the retreat setting.
            </p>
            <p>
              Participants were supported within a calm, nurturing environment, with time
              for reflection, connection, and rest, alongside nourishing meals and
              thoughtful care throughout.
            </p>
          </div>

          <aside className="lg:sticky lg:top-24 max-w-[360px] w-full mx-auto lg:mx-0">
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
            <p className="mt-3 text-sm text-center">
              <a
                href="https://www.instagram.com/reel/DZeiLGXSQLp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-dark underline underline-offset-4"
              >
                Watch on Instagram — @sueread_psychologist
              </a>
            </p>
          </aside>
        </div>
      </section>

      {/* Facilitators */}
      <section>
        <span className="eyebrow">The team</span>
        <h2 className="text-3xl mt-3 mb-10">Meet our Facilitators</h2>
        <div className="space-y-14">
          {FACILITATORS.map((f, i) => (
            <div
              key={f.name}
              className={`grid gap-8 lg:gap-12 md:grid-cols-[300px_1fr] items-start ${
                i % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              <div className="md:[direction:ltr] max-w-[300px] w-full mx-auto md:mx-0">
                <div className="arch-sm relative aspect-[4/4.4]">
                  <Image
                    src={f.image}
                    alt={f.name}
                    fill
                    sizes="(max-width: 768px) 80vw, 300px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="md:[direction:ltr]">
                <h3 className="text-2xl">{f.name}</h3>
                <p className="text-xs uppercase tracking-[0.14em] text-olive-deep font-bold mt-1 mb-4">
                  {f.role}
                </p>
                <p>{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
