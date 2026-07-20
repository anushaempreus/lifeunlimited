import type { Metadata } from "next";
import { BookingCTA } from "@/lib/content";

export const metadata: Metadata = { title: "Bootcamp for the Brain, Heart and Mind" };

export default function BootcampHeartMindPage() {
  return (
    <div className="mx-auto max-w-[900px] px-4 py-12">
      <h1 className="h1-brand mb-6">Bootcamp for the Brain, Heart and Mind</h1>
      <div className="prose-lu">
        <h2>Practical Skills and resilience training</h2>
        <p>
          Join us for a highly practical and experiential 6-part skills building course to
          help you maintain your resilience, practice skills to be calm and present and
          reconnect with yourself and others.
        </p>
        <p>
          You will learn strategies to help you manage stress, improve productivity,
          increase coping strategies, and have better relationships.
        </p>
        <p>
          Discover proven techniques to bring you a greater sense of calm, clarity, and
          relaxation.
        </p>
        <p>
          Delivered in 6 x 1 hour group sessions conducted via video conferencing with one
          of our experienced facilitators.
        </p>
        <p>Bootcamp for the Brain, Heart and Mind was developed as to embed practical skills.</p>
        <p>
          Booking this course for your teams is a great way to implement practical
          resilience building strategies into your daily life and as a refresher post
          Bootcamp for the Brain.
        </p>
      </div>
      <BookingCTA />
    </div>
  );
}
