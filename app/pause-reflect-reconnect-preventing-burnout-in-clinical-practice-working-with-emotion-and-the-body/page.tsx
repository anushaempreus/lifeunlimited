import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Pause – Reflect – Reconnect: Preventing Burnout in Clinical Practice – Working with Emotion and the Body",
};

export default function PauseReflectReconnectPage() {
  return (
    <div className="mx-auto max-w-[1000px] px-4 py-12">
      <h1 className="h1-brand mb-3">
        Pause – Reflect – Reconnect: Preventing Burnout in Clinical Practice – Working
        with Emotion and the Body
      </h1>
      <p className="text-olive-dark font-medium mb-8">
        26 August 2023 | Integria Symposium
      </p>
      <p className="prose-lu mb-8 max-w-3xl">
        In this session Sue explores the concepts of trauma informed practice and how this
        can be applied at a practical level in your work, as well as the importance of
        practitioner self-care when looking after patients with a trauma background.
      </p>
      <div className="aspect-video rounded-[10px] overflow-hidden">
        <iframe
          title="Pause – Reflect – Reconnect presentation video"
          src="https://www.youtube.com/embed/f94XUFO0NEM"
          className="w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}
