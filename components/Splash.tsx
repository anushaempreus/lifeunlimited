import Image from "next/image";

/**
 * Branded splash overlay shown on every full page load.
 * Pure CSS: fades in the logo, then fades the whole overlay away —
 * no JS state, so it cannot cause hydration mismatches.
 */
export default function Splash() {
  return (
    <div className="splash" aria-hidden="true">
      <div className="splash-inner">
        <Image
          src="/images/logo.png"
          alt=""
          width={280}
          height={63}
          priority
        />
        <div className="splash-dots">
          <span style={{ animationDelay: "0ms" }} />
          <span style={{ animationDelay: "140ms" }} />
          <span style={{ animationDelay: "280ms" }} />
        </div>
      </div>
    </div>
  );
}
