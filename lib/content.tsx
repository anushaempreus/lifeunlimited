import React from "react";

export type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "lead"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string; cite?: string };

export function RenderBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose-lu">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return <h2 key={i}>{b.text}</h2>;
          case "h3":
            return <h3 key={i}>{b.text}</h3>;
          case "lead":
            return (
              <p key={i} className="text-[20px] text-heading font-medium">
                {b.text}
              </p>
            );
          case "p":
            return <p key={i}>{b.text}</p>;
          case "ul":
            return (
              <ul key={i}>
                {b.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote key={i} className="border-l-4 border-olive pl-4 my-6 italic">
                <p>{b.text}</p>
                {b.cite && <cite className="not-italic font-medium text-heading">{b.cite}</cite>}
              </blockquote>
            );
        }
      })}
    </div>
  );
}

export function BookingCTA({ lead }: { lead?: string }) {
  return (
    <section className="relative overflow-hidden mt-12 rounded-3xl bg-gradient-to-br from-blue to-blue-deep p-10 text-white">
      <div className="blob bg-olive/50 w-[240px] h-[240px] -top-20 -right-12" aria-hidden />
      <div className="relative">
        <h2 className="text-2xl font-bold mb-3 text-white">
          What do I do if I would like to make an appointment?
        </h2>
        <p className="mb-6 text-white/85">
          {lead ??
            "Contact Life Unlimited on 02 6248 5138 or email info@lifeunlimited.com.au."}
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="tel:0262485138" className="btn-olive">
            02 6248 5138
          </a>
          <a href="mailto:info@lifeunlimited.com.au" className="btn-ghost">
            info@lifeunlimited.com.au
          </a>
        </div>
      </div>
    </section>
  );
}
