import type { Metadata } from "next";

export const metadata: Metadata = { title: "Protected: Workshop Resources" };

export default function WorkshopResourcesPage() {
  return (
    <div className="mx-auto max-w-[900px] px-4 py-12">
      <h1 className="h1-brand mb-6">Protected: Workshop Resources</h1>
      <div className="rounded-3xl border border-olive/25 bg-cream p-8">
        <p className="mb-4">
          This content is password-protected. To view it, please enter the password below.
        </p>
        <form
          className="flex flex-wrap gap-3 items-center"
          action="#"
          aria-label="Password form (static replica – not wired to content)"
        >
          <label htmlFor="wp-password" className="font-medium text-heading">
            Password:
          </label>
          <input
            id="wp-password"
            type="password"
            className="border border-gray-300 rounded-md px-3 py-2"
          />
          <button type="submit" className="btn-blue">
            Enter
          </button>
        </form>
        <p className="mt-4 text-sm">
          Workshop participants receive the password from their facilitator.
        </p>
      </div>
    </div>
  );
}
