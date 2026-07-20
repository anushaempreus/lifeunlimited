import type { Metadata } from "next";
import Image from "next/image";
import { BookingCTA } from "@/lib/content";

export const metadata: Metadata = { title: "How to be assertive at work" };

export default function AssertivenessPage() {
  return (
    <div className="mx-auto max-w-[900px] px-4 py-12">
      <div className="relative aspect-[5/2] mb-8 rounded-[10px] overflow-hidden">
        <Image
          src="/images/org/group-talking.jpg"
          alt="Assertiveness at Work"
          fill
          className="object-cover"
        />
      </div>
      <h1 className="h1-brand mb-6">Assertiveness at Work</h1>
      <div className="prose-lu">
        <h2>
          Have you ever been told, “You need to be more assertive”? Perhaps someone has
          said, “Stand up for yourself!” or, “Tell me what YOU think!”
        </h2>
        <p>But what exactly is assertiveness? Assertiveness is a communication style.</p>
        <p>
          When we are assertive we express our feelings, thoughts, beliefs, and opinions
          in a respectful, open manner that doesn’t violate the rights of others.
        </p>
        <p>
          There are a range of other communication styles. One that violates the rights of
          others is aggressive communication. On the other end of the spectrum is passive
          communication, which violates our own rights. Sometimes, people use a
          combination of the two, resulting in a passive-aggressive style, where the
          person is essentially being aggressive, but in a passive or indirect way.
        </p>
        <p>
          Understanding how to be assertive gives us choice in the way we communicate with
          others. Assertive communication promotes good psychological health, and better
          relationships.
        </p>
        <h2>Some of the other benefits include:</h2>
        <ul>
          <li>Improved confidence and self-esteem</li>
          <li>Increased resilience</li>
          <li>Reduced stress and anxiety</li>
        </ul>
        <h2>Situations where you might need to be assertive at work</h2>
        <ul>
          <li>Asking for a pay rise or promotion</li>
          <li>Discussing your performance</li>
          <li>Appraising the performance of your staff</li>
          <li>Giving feedback to colleagues or supervisors</li>
          <li>Dealing with challenging or difficult behaviours</li>
          <li>Negotiating tasks and responsibilities</li>
          <li>Collaborating on a group project</li>
        </ul>
        <h2>“Assertiveness at Work” will help you to:</h2>
        <ul>
          <li>
            Learn how to be an assertive communicator – express your feeling, thoughts,
            beliefs and opinions in an open and direct way
          </li>
          <li>Improve your communication, negotiation and conflict management skills</li>
          <li>Learn to say no without offending anyone</li>
          <li>Deal with criticism</li>
        </ul>
      </div>
      <BookingCTA lead="Contact Life Unlimited on 02 6248 5138 or email info@lifeunlimited.com.au now to book an “Assertiveness at Work” seminar or workshop. We can provide one-to-one coaching for managers or employees, or tailor the course specifically for your organisation’s needs." />
    </div>
  );
}
