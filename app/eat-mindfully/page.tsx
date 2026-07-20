import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Eat Mindfully" };

export default function EatMindfullyPage() {
  return (
    <div className="mx-auto max-w-[900px] px-4 py-12">
      <div className="relative aspect-[5/2] mb-8 rounded-[10px] overflow-hidden">
        <Image
          src="/images/resource/woman-eating-healthy.jpg"
          alt="Eating mindfully"
          fill
          className="object-cover"
        />
      </div>
      <h1 className="h1-brand mb-6">Eat Mindfully</h1>
      <div className="prose-lu">
        {/* Original site shows a copy-paste error here (the Assertiveness intro); replaced with the correct lead line. */}
        <h2>
          The disappearance of hunger is almost instantaneous after we start eating, but
          the arrival of pleasant fullness takes some time.
        </h2>
        <p>
          When we are very hungry our brain and our hormones are screaming, “Hey you!!
          Eat!! Eat NOW!!”. So we do.
        </p>
        <p>
          We tend to eat fast in response to these commands, and don’t take time to notice
          what and how we are eating. Often the result is that 20 minutes after eating,
          when our brain and stomach have caught up with each other, we realise that we
          are overfull. We might feel uncomfortable and bloated, and unable to clearly
          remember what the food even tasted like.
        </p>
        <h2>Principles of Mindfulness:</h2>
        <ul>
          <li>Mindfulness is deliberately paying attention, non-judgmentally.</li>
          <li>
            Mindfulness is being aware of what is present for us mentally, emotionally and
            physically in each moment.
          </li>
          <li>
            Mindfulness allows us to be free of reactive, habitual patterns of thinking,
            feeling and acting.
          </li>
          <li>
            Mindfulness promotes balance, choice, wisdom and acceptance of what is.
          </li>
        </ul>
        <h2>Mindful Eating:</h2>
        <ul>
          <li>
            Allows us to become aware of the positive and nurturing opportunities we can
            experience as we prepare and eat our food;
          </li>
          <li>
            Allows us to choose to eat food that is both pleasing and nourishing, and we
            use our senses to explore, savour and taste the food;
          </li>
          <li>
            Acknowledges responses to food (likes, neutral or dislikes) without judgement;
            and
          </li>
          <li>
            Assists us to learn and be aware of physical hunger and satiety (fullness)
            cues, to guide our decisions on when to begin eating, and when to stop.
          </li>
        </ul>
        <p>Life Unlimited “Ten in Ten” Program © 2011</p>
      </div>
    </div>
  );
}
