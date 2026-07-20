import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  {
    index: "01",
    title: "Training & Education",
    href: "/training-and-education",
    text: "Evidence-based workshops, keynotes and resilience programs for organisations of every sector.",
  },
  {
    index: "02",
    title: "Counselling & Psychology",
    href: "/resource/counselling-psychology",
    text: "Therapy and counselling for individuals, couples and families — in person or telehealth.",
  },
  {
    index: "03",
    title: "Workshop Resources",
    href: "/workshop-resources",
    text: "Materials and take-home resources for our workshop participants.",
  },
];

const MARQUEE = [
  "Resilience",
  "Counselling",
  "Mindfulness",
  "Workplace Wellbeing",
  "Training",
  "Retreats",
  "Psychology",
  "Optimal Health",
];

const STATS = [
  { value: "2001", label: "Practice established" },
  { value: "20+", label: "Years supporting Canberra" },
  { value: "8", label: "Clinicians & team members" },
  { value: "1000s", label: "Workshop participants" },
];

function Asterisk({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" className={className} aria-hidden>
      <path d="M50 4c2.6 0 4.7 2.1 4.7 4.7l-1.6 28.6 16.5-23.4c1.5-2.1 4.4-2.7 6.5-1.2s2.7 4.4 1.2 6.5L60.4 43.4l28.6-1.6c2.6 0 4.7 2.1 4.7 4.7s-2.1 4.7-4.7 4.7l-28.6-1.6 17 24.2c1.5 2.1 1 5-1.2 6.5-2.1 1.5-5 1-6.5-1.2L53.1 55.7l1.6 28.6c0 2.6-2.1 4.7-4.7 4.7s-4.7-2.1-4.7-4.7l1.6-28.6-16.5 23.4c-1.5 2.1-4.4 2.7-6.5 1.2s-2.7-4.4-1.2-6.5l17-24.2-28.6 1.6C8.1 51.2 6 49.1 6 46.5s2.1-4.7 4.7-4.7l28.6 1.6-17-24.2c-1.5-2.1-1-5 1.2-6.5 2.1-1.5 5-1 6.5 1.2l16.5 23.4L45.3 8.7C45.3 6.1 47.4 4 50 4z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section
        className="relative overflow-hidden bg-cream grain -mt-[88px] pt-[130px] pb-16 lg:pb-24"
        data-no-reveal
      >
        <div className="blob bg-olive/50 w-[480px] h-[480px] -top-40 -left-40" aria-hidden />
        <div className="blob bg-blue/30 w-[420px] h-[420px] top-24 -right-40" aria-hidden />

        <div className="relative z-[2] mx-auto max-w-[1290px] px-4 lg:px-6 grid gap-14 lg:grid-cols-[1.05fr_0.95fr] items-center">
          {/* Left — copy */}
          <div>
            <span className="eyebrow fade-up fade-up-1">
              Life Unlimited Health Solutions · Canberra
            </span>
            <h1 className="mt-5 mb-7 font-[family-name:var(--font-fraunces)] font-semibold text-heading leading-[1.06] tracking-[-0.015em] text-[clamp(2.7rem,5.6vw,4.3rem)] fade-up fade-up-2">
              Therapy, counselling &{" "}
              <span className="accent-i">wellbeing</span> — for a life
              unlimited.
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed max-w-xl mb-9 fade-up fade-up-3">
              Life Unlimited offers therapy and counselling to individuals, couples, and
              families. We also provide tailored workshops, seminars and training programs
              to organisations.
            </p>
            <div className="flex flex-wrap gap-4 mb-10 fade-up fade-up-3">
              <Link href="/contact-us" className="btn-blue !px-8 !py-3.5 text-base">
                Make an appointment
              </Link>
              <Link href="/training-and-education" className="btn-outline !px-8 !py-3.5 text-base">
                Explore training
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-7 gap-y-3 fade-up fade-up-4">
              <span className="tick-chip">Medicare rebates (Better Access)</span>
              <span className="tick-chip">Telehealth available</span>
              <span className="tick-chip">Trusted since 2001</span>
            </div>
          </div>

          {/* Right — arch image with floating chips */}
          <div className="relative max-w-[460px] mx-auto w-full fade-up fade-up-2">
            <Asterisk className="absolute -top-8 -left-9 h-16 w-16 text-olive spin-slow z-[2]" />
            <div className="arch relative aspect-[4/5]">
              <Image
                src="/images/home-banner.jpg"
                alt="Life Unlimited — support for your wellbeing"
                fill
                priority
                className="object-cover"
                style={{ objectPosition: "30% 40%" }}
              />
              <div
                className="absolute inset-0"
                style={{ backgroundColor: "#e3e39f", opacity: 0.35, mixBlendMode: "multiply" }}
              />
            </div>
            <div className="glass-chip absolute top-10 -left-4 lg:-left-10 float-y">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-lime" aria-hidden />
              Bootcamp for the Brain — signature program
            </div>
            <div className="glass-chip absolute bottom-12 -right-2 lg:-right-6">
              <span className="font-[family-name:var(--font-fraunces)] italic text-lg text-olive-deep">
                20+
              </span>
              years of clinical practice
            </div>
          </div>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <div className="marquee border-y border-gray-200/70 bg-white py-5" aria-hidden>
        <div className="marquee-track">
          {[...MARQUEE, ...MARQUEE].map((word, i) => (
            <span
              key={i}
              className="flex items-center gap-12 text-[15px] font-medium uppercase tracking-[0.22em] text-heading/60 whitespace-nowrap"
            >
              {word}
              <Asterisk className="h-3.5 w-3.5 text-olive" />
            </span>
          ))}
        </div>
      </div>
      <p className="sr-only">
        Resilience, counselling, mindfulness, workplace wellbeing, training, retreats,
        psychology, optimal health.
      </p>

      {/* ============ SERVICES ============ */}
      <section className="mx-auto max-w-[1290px] px-4 lg:px-6 pt-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-end mb-12">
          <div>
            <span className="eyebrow">What we do</span>
            <h2 className="text-4xl mt-3 leading-tight">
              Support for people <span className="accent-i">and</span> the places they
              work
            </h2>
          </div>
          <p className="max-w-xl lg:justify-self-end text-[16.5px]">
            From one-to-one counselling to organisation-wide wellbeing programs, we
            collaborate with you to find the right approach — never one size fits all.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Link
              key={s.title}
              href={s.href}
              className={`card group p-8 flex flex-col min-h-[240px] ${
                i === 1 ? "!bg-blue !border-blue text-white" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <span className={`index-num ${i === 1 ? "!text-white/40" : ""}`}>
                  {s.index}
                </span>
                <span className="arrow-dot">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-4 w-4" aria-hidden>
                    <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              <h3 className={`text-[1.35rem] mb-2 ${i === 1 ? "text-white" : ""}`}>
                {s.title}
              </h3>
              <p className={`text-[15px] ${i === 1 ? "text-white/85" : ""}`}>{s.text}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ============ INSIGHTS — bento ============ */}
      <section className="mx-auto max-w-[1290px] px-4 lg:px-6 pt-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <span className="eyebrow">From the practice</span>
            <h2 className="text-4xl mt-3">Insights</h2>
          </div>
          <Link href="/podcasts" className="btn-outline text-sm">
            All podcasts & presentations
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Wide tile — podcasts */}
          <Link
            href="/podcasts"
            className="card group lg:col-span-2 grid sm:grid-cols-2 overflow-hidden"
          >
            <div className="card-img relative min-h-[220px]">
              <Image src="/images/podcasts.png" alt="" fill className="object-cover" />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="eyebrow mb-3">ABC Radio Canberra</span>
              <h3 className="text-2xl mb-3">Podcasts and presentations</h3>
              <p className="text-[15.5px] mb-5">
                Sue’s regular spot as the Life Guru on Mornings — now Resident
                Psychologist on Afternoons. A library of practical wisdom.
              </p>
              <span className="inline-flex items-center gap-3 font-semibold text-sm text-heading">
                Listen now <span className="arrow-dot">→</span>
              </span>
            </div>
          </Link>

          {/* Tall tile — instagram */}
          <a
            href="https://www.instagram.com/sueread_psychologist/"
            target="_blank"
            rel="noopener noreferrer"
            className="card group flex flex-col"
          >
            <div className="card-img relative min-h-[200px] flex-1">
              <Image src="/images/instagram.png" alt="" fill className="object-cover" />
            </div>
            <div className="p-7">
              <h3 className="text-xl mb-2">Follow Sue on Instagram</h3>
              <p className="text-[15px] mb-4">
                Practical tips on stress, resilience and wellbeing —
                @SueRead_Psychologist.
              </p>
              <span className="inline-flex items-center gap-3 font-semibold text-sm text-heading">
                Go to Instagram <span className="arrow-dot">→</span>
              </span>
            </div>
          </a>

          {/* Bootcamp tile */}
          <Link href="/organisational-solutions/bootcamp-for-the-brain" className="card group flex flex-col">
            <div className="card-img relative min-h-[200px] flex-1">
              <Image src="/images/bootcamp.png" alt="" fill className="object-cover" />
            </div>
            <div className="p-7">
              <h3 className="text-xl mb-2">Bootcamp for the Brain</h3>
              <p className="text-[15px] mb-4">
                Our signature resilience program — wellbeing as a predictor of
                performance.
              </p>
              <span className="inline-flex items-center gap-3 font-semibold text-sm text-heading">
                Find out more <span className="arrow-dot">→</span>
              </span>
            </div>
          </Link>

          {/* Retreat tile */}
          <Link
            href="/retreat"
            className="card group lg:col-span-2 relative overflow-hidden min-h-[260px] flex items-end"
          >
            <Image
              src="/images/optimal-health.jpg"
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3c3c10]/85 via-[#3c3c10]/30 to-transparent" />
            <div className="relative p-8">
              <span className="eyebrow eyebrow--light mb-2">Nourish &amp; Nurture</span>
              <h3 className="text-2xl text-white mb-2">Wellbeing retreats</h3>
              <p className="text-white/85 text-[15.5px] max-w-md mb-4">
                Deeply restorative, science-informed weekends — psychology, breathwork,
                yoga and somatic practice.
              </p>
              <span className="inline-flex items-center gap-3 font-semibold text-sm text-white">
                Are you ready to rejuvenate? <span className="arrow-dot">→</span>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ============ APPROACH QUOTE ============ */}
      <section className="mx-auto max-w-[1290px] px-4 py-28 text-center relative">
        <Asterisk className="mx-auto h-9 w-9 text-olive mb-8 spin-slow" />
        <span className="eyebrow justify-center">Our Approach</span>
        <blockquote className="relative mx-auto max-w-3xl mt-6">
          <p className="font-[family-name:var(--font-fraunces)] text-[clamp(1.5rem,3vw,2.2rem)] leading-[1.35] text-heading">
            The World Health Organisation defines health as{" "}
            <span className="accent-i">
              “a state of complete physical, mental, and social well-being, and not merely
              the absence of disease or infirmity”.
            </span>
          </p>
        </blockquote>
      </section>

      {/* ============ OPTIMAL HEALTH ============ */}
      <section className="mx-auto max-w-[1290px] px-4 lg:px-6 pb-24 grid gap-14 lg:grid-cols-2 items-center">
        <div className="relative order-1 max-w-[440px] mx-auto w-full">
          <div className="arch relative aspect-[4/4.6]">
            <Image
              src="/images/lu-about.jpg"
              alt="The Life Unlimited practice"
              fill
              className="object-cover"
            />
          </div>
          <div className="glass-chip absolute bottom-10 -right-2 lg:-right-8 float-y">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-blue" aria-hidden />
            Holistic — never one size fits all
          </div>
        </div>
        <div className="prose-lu order-2">
          <span className="eyebrow">Our philosophy</span>
          <h2 className="text-4xl mt-3 mb-6 leading-tight">
            Helping people gain <span className="accent-i">“Optimal Health”</span>
          </h2>
          <p>
            The over-arching philosophy of Life Unlimited is about helping people gain
            “Optimal Health” – to enable our clients to be the best they can be and have
            the best life possible, socially, physically and psychologically. Our Optimal
            Health Model ensures we take a holistic approach when working with clients to
            resolve their problems – we don’t just focus on symptoms or isolated issues.
          </p>
          <p>
            We love collaborating with clients to help them clarify problems, understand
            the impacts of these issues, and make sustainable life changes. Our work is
            based on values – both our clients’ and ours. We don’t provide a “one size
            fits all” solution. We work with our clients to find the right methods for
            them, solutions that are in line with their values and the changes they want
            to make.
          </p>
        </div>
      </section>

      {/* ============ STATS BAND ============ */}
      <section className="relative overflow-hidden bg-gradient-to-r from-olive/15 via-cream to-blue/12 border-y border-gray-200/60 py-16 grain">
        <div className="relative mx-auto max-w-[1290px] px-4 grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="text-5xl font-[family-name:var(--font-fraunces)] font-semibold bg-gradient-to-br from-olive-deep to-blue-dark bg-clip-text text-transparent">
                {s.value}
              </div>
              <div className="mt-2 text-body text-sm uppercase tracking-[0.1em]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section className="mx-auto max-w-[1290px] px-4 py-24 text-center">
        <span className="eyebrow justify-center">Since 2001</span>
        <h2 className="text-4xl mt-3 mb-6">About Us</h2>
        <p className="mx-auto max-w-3xl mb-3 text-lg">
          Life Unlimited opened in 2001 with{" "}
          <Link href="/people/sue-read" className="text-blue-dark underline underline-offset-4 hover:text-olive-deep transition-colors">
            Sue Read
          </Link>{" "}
          as Director. She was joined by{" "}
          <Link href="/people/julia-oboyle" className="text-blue-dark underline underline-offset-4 hover:text-olive-deep transition-colors">
            Julia O’Boyle
          </Link>{" "}
          a few years later.
        </p>
        <p className="mx-auto max-w-3xl mb-10 text-lg">
          Sue Read is a registered psychologist and Julia O’Boyle is a clinical social
          worker specialising in mental health issues.
        </p>
        <Link href="/our-people" className="btn-outline !px-8 !py-3.5">
          Meet Our People
        </Link>
      </section>

      {/* ============ COVID NOTE ============ */}
      <section className="mx-auto max-w-[1290px] px-4 pb-4">
        <div className="rounded-3xl border border-olive/30 bg-cream p-8">
          <h2 className="text-base font-semibold uppercase tracking-[0.1em] mb-3 text-olive-deep">
            COVID-19 and our practice
          </h2>
          <p className="mb-3">
            We offer both face to face and telehealth appointments and in most cases our
            training and workshops. We follow health advice and have hygiene measures in
            place in our office.
          </p>
          <p>
            We ask if you’re symptomatic, have been around a positive case or otherwise
            not feeling 100% please consider our team and other clients and give us a call
            to discuss alternative options.
          </p>
        </div>
      </section>
    </>
  );
}
