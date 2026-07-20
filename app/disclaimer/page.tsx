import type { Metadata } from "next";

export const metadata: Metadata = { title: "Disclaimer" };

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-[900px] px-4 py-12">
      <h1 className="h1-brand mb-6">Disclaimer</h1>
      <div className="prose-lu">
        <p>
          The information published on this website is for personal use only. Information
          on this site is not intended to be comprehensive or intended for the purpose of
          any psychological diagnosis, therapy or provided as an alternative to obtaining
          psychological advice from a qualified practitioner.
        </p>
        <p>
          This site provides links to other company websites and resources as a
          convenience to you. Life Unlimited Health Solutions Pty Ltd is not responsible
          for the accuracy, quality or suitability of any linked websites.
        </p>
        <p>
          Life Unlimited Health Solutions Pty Ltd accepts no responsibility permitted by
          law for misuse of information presented on this website by any individual, for
          the purpose of claims, compensation, litigation, damages or personal problems.
        </p>
      </div>
    </div>
  );
}
