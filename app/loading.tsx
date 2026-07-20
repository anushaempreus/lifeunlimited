import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-8 bg-cream">
      <Image
        src="/images/logo.png"
        alt="Life Unlimited"
        width={260}
        height={59}
        priority
        className="animate-pulse"
      />
      <div className="flex items-center gap-2" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-olive animate-bounce [animation-delay:0ms]" />
        <span className="h-2.5 w-2.5 rounded-full bg-lime animate-bounce [animation-delay:140ms]" />
        <span className="h-2.5 w-2.5 rounded-full bg-blue animate-bounce [animation-delay:280ms]" />
      </div>
      <span className="sr-only">Loading…</span>
    </div>
  );
}
