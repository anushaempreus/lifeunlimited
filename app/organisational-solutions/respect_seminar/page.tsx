import type { Metadata } from "next";
import Image from "next/image";
import { BookingCTA } from "@/lib/content";

export const metadata: Metadata = { title: "How to Create a Harassment Free Workplace" };

export default function RespectSeminarPage() {
  return (
    <div className="mx-auto max-w-[900px] px-4 py-12">
      <div className="relative aspect-[5/2] mb-8 rounded-[10px] overflow-hidden">
        <Image
          src="/images/org/bullying.jpg"
          alt="Respect and Diversity at Work"
          fill
          className="object-cover"
        />
      </div>
      <h1 className="h1-brand mb-6">
        Respect and Diversity at Work: Creating a Harassment Free Workplace
      </h1>
      <div className="prose-lu">
        <h2>What is “Respect and Diversity”? What is Bullying? What is harassment?</h2>
        <p>
          Unfortunately bullying, discrimination and inappropriate behaviours at work are
          part of the culture of many Australian organisations, despite best efforts by
          employers, staff members, Government and legislation to combat them.
        </p>
        <p>
          Bullying and harassment costs organisations dearly – not just in increased
          insurance premiums and litigation, but in increased absenteeism, lost
          productivity, high staff turnover and poor retention. It can be damaging to an
          organisation’s reputation and potentially have serious consequences for
          employees, leading to illnesses such as depression and anxiety.
        </p>
        <p>
          Respect and Diversity at Work is a half day seminar or one-day workshop designed
          to raise awareness for staff and managers, and assist to prevent and manage
          workplace bullying and harassment. We can tailor the workshop to suit the needs
          of your organisation and we offer specific workshops for employees and for
          managers.
        </p>
        <h2>The workshop will enable participants to:</h2>
        <ul>
          <li>Define workplace harassment</li>
          <li>
            Identify behaviours that constitute workplace harassment, discrimination and
            bullying
          </li>
          <li>Identify what harassment and bullying is not</li>
          <li>
            Understand the effects of bullying and harassment on the individual and
            organisation
          </li>
          <li>Prevent and manage workplace harassment</li>
          <li>Understand the responsibilities of employees and management</li>
          <li>Know who to contact for help</li>
        </ul>
      </div>
      <BookingCTA lead="Contact Life Unlimited on 02 6248 5138 or email info@lifeunlimited.com.au now to book a “Respect and Diversity at Work” seminar or workshop. We can provide one-to-one coaching for managers or employees, or tailor the course specifically for your organisation’s needs." />
    </div>
  );
}
