import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Organisational workshops" };

const CATALOGUE = [
  "Preventing Vicarious Trauma",
  "Renewing Workplace Culture",
  "Respect and Diversity at Work (Creating Harassment-free Workplaces)",
  "Workplace Harassment Contact Officer Training",
  "Mental Health@Work",
  "Mental Health@Work for Managers",
  "Communicating for Impact – A Workshop for Leaders",
  "Communicating for Impact – A Workshop for Teams (building peak performance)",
  "Leading Remote Teams",
  "The Accidental Counsellor",
  "Psychological First Aid",
  "Stress Management",
  "Get a Better Night’s Sleep",
  "Assertiveness at Work",
  "Mindful Eating",
  "Well-being and Corporate wellness workshops",
  "Bespoke workshops for mental health awareness days such as: RUOK? Day; Mental Health Week/Month; International Women’s Day; Stress Down Day; Women’s Health Week; Suicide Awareness",
  "Keynote speaking – conferences, planning days, events",
];

const BITE_SIZED = [
  "Taming your Inner Critic",
  "Emotional Wellbeing Resilience and Renewal",
  "Strengthening Personal Resilience",
  "Self-care",
];

export default function OrgSolutionsPage() {
  return (
    <div className="mx-auto max-w-[1290px] px-4 py-12">
      <h1 className="h1-brand mb-6">Organisational Solutions</h1>

      <div className="prose-lu max-w-3xl mb-10">
        <p className="text-[20px] text-heading font-medium">
          Life Unlimited has been working with organisations from all sectors for over ten
          years to improve the health and well-being of your people and ultimately the
          success of your organisation. We work with your company or agency to assess what
          the issues are and then we collaborate with you to tailor a solution that best
          suits.
        </p>
        <p>
          We are skilled in providing interactive and evidence-based training in Emotional
          Resilience, Effective Communication,{" "}
          <Link href="/organisational-solutions/assertiveness-at-work">Assertiveness</Link>
          , promoting{" "}
          <Link href="/organisational-solutions/respect_seminar">
            Respect and Diversity at Work (creating harassment-free workplaces)
          </Link>{" "}
          as well as a range of initiatives from mediating conflict to developing
          organisation-wide well-being programs.
        </p>

        <h2>Workplace Training Catalogue</h2>
        <p>
          Life Unlimited Psychology offer a range of Workshops that can be tailored to
          specific need. The Australian Government recognises the importance of mental
          health in the workplace and has committed to delivering on a Mental Health
          Framework for the Australian Public Service. As part of the government’s
          framework, the APSC and Comcare have produced a guide “Working Together:
          Promoting mental health and wellbeing at work” which Life Unlimited aligns all
          workshops with this framework.
        </p>
        <p>These include:</p>
        <ul>
          <li>
            <Link href="/organisational-solutions/bootcamp-for-the-brain">
              “Bootcamp for the Brain” – Building Resilience for Peak Performance
            </Link>{" "}
            – this is our signature resilience suite of training programs which has been
            especially sought after during 2020 COVID-19. We have been working nationally
            with many organisations and individuals on their resilience through these
            challenging times.
          </li>
          <li>
            <Link href="/organisational-solutions/bootcamp-for-the-brain-heart-and-mind">
              Bootcamp for the Brain, Heart and Mind
            </Link>{" "}
            – is a highly practical and experiential 6-week (1-hour per week) skills
            building course, delivered remotely, to help people maintain their resilience,
            practice skills to be calm and present and reconnect with themselves and
            others. Participants will learn strategies to help manage stress, improve
            productivity, increase coping strategies and have better relationships.
          </li>
          {CATALOGUE.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
        <p>Bite-Sized Training – 1 hour sessions:</p>
        <ul>
          {BITE_SIZED.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_360px] items-start">
        <div className="prose-lu">
          <h2>Bootcamp for the Brain</h2>
          <p>
            Wellbeing and resilience are strong predictors of workplace productivity and
            being able to bounce back quicker in response to difficult times and
            situations. This workshop will assist staff and managers to develop skills in
            the following areas:
          </p>
          <ul>
            <li>
              Clearly understand the physiological, psychological and behavioural
              consequences of chronic and sustained stress and how these can impact on
              work performance, productivity, team morale and health;
            </li>
            <li>
              Understand how to exercise the brain to train for peak cognitive performance
              and recovery;
            </li>
            <li>
              Understand the key factors that influence and improve resilience in self and
              staff;
            </li>
            <li>
              Discuss key concepts for dealing with a difficult working environment,
              including dealing with change and peak work pressures.
            </li>
            <li>
              Identify the most important practical strategies for recovery of mind and
              body;
            </li>
            <li>
              Develop individual self-care plans to assist participants to ‘switch-off’
              when they can so that they can ‘switch-on’ when they have to.
            </li>
          </ul>
          <p>
            <Link href="/organisational-solutions/bootcamp-for-the-brain">Read more…</Link>
          </p>

          <h2>Respect and Diversity at Work</h2>
          <p>
            You may be interested in our upcoming seminar,{" "}
            <Link href="/organisational-solutions/respect_seminar">
              Respect and Diversity at Work: Creating a Harassment Free Workplace
            </Link>
            . This half day seminar or one-day workshop is designed to raise awareness for
            staff and managers, and assist to prevent and manage workplace bullying and
            harassment. We can tailor the workshop to suit the needs of your organisation
            and we offer specific workshops for employees and for managers.{" "}
            <Link href="/organisational-solutions/respect_seminar">Read more…</Link>
          </p>

          <h2>Assertiveness at Work</h2>
          <p>
            We also offer a seminar{" "}
            <Link href="/organisational-solutions/assertiveness-at-work">
              Assertiveness at Work
            </Link>{" "}
            which focuses on increasing your assertiveness in the workplace. Our seminar
            will help you learn how to be an assertive communicator – express your
            feeling, thoughts, beliefs and opinions in an open and direct way.{" "}
            <Link href="/organisational-solutions/assertiveness-at-work">Read more…</Link>
          </p>
        </div>
        <figure>
          <Image
            src="/images/org/sue-presenting.jpg"
            alt="Sue Read – presenting Bootcamp for the Brain Canberra"
            width={360}
            height={360}
            className="rounded-[10px] w-full h-auto"
          />
          <figcaption className="text-sm mt-2 text-center">
            Sue Read presenting Bootcamp for the Brain
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
