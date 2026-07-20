import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Workplace mental health resources" };

export default function OrgResourcesPage() {
  return (
    <div className="mx-auto max-w-[900px] px-4 py-12">
      <h1 className="h1-brand mb-6">Resources</h1>
      <div className="prose-lu">
        <h2>
          Below are a list of resources relating to the workplace which you may benefit
          from.
        </h2>
        <h3>List of resources and seminars</h3>
        <ul>
          <li>
            <Link href="/organisational-solutions/respect_seminar">
              Respect and Diversity at Work: Creating a Harassment Free Workplace
            </Link>
          </li>
          <li>
            <Link href="/organisational-solutions/assertiveness-at-work">
              Assertiveness at Work
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
