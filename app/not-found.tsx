import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[900px] px-4 py-24 text-center">
      <h1 className="h1-brand mb-4">Oops! That page can’t be found.</h1>
      <p className="mb-8">It looks like nothing was found at this location.</p>
      <Link href="/" className="btn-blue">
        Back to Home
      </Link>
    </div>
  );
}
