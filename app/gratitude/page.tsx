import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Gratitude and Weight Loss" };

export default function GratitudePage() {
  return (
    <div className="mx-auto max-w-[900px] px-4 py-12">
      <div className="relative aspect-[5/2] mb-8 rounded-[10px] overflow-hidden">
        <Image
          src="/images/resource/gratitude-banner.jpeg"
          alt="Gratitude"
          fill
          className="object-cover"
        />
      </div>
      <h1 className="h1-brand mb-6">
        Gratitude: why it helps with weight loss and your relationship with your body
      </h1>
      <div className="prose-lu">
        <h2>Keep a gratitude journal</h2>
        <p>
          Spending a few minutes each day writing down three things you are grateful for
          is a great way to boost your appreciation for the little things in life, and
          indeed the big things as well. Think creatively – the little things could be a
          text message from a friend, hearing a joke that made you laugh out loud, a
          wonderful meal, or even the experience of spending 15 minutes doing something
          nurturing just for you. Research has shown that people who record gratitude
          every day are 25% more likely to be happier, more optimistic, and healthier than
          people who don’t. (David Hamilton, 2009)
        </p>
        <h2>Gratitude is good for us</h2>
        <p>
          When we take care of ourselves, we begin to expand (but not width ways!). We
          have more energy, confidence, clarity and wisdom; we make better choices for
          ourselves. As kindness to others and ourselves becomes easier, compassion occurs
          without thought and gratitude flows.
        </p>
        <p>Gratitude enables us to appreciate ourselves, our lives, and others.</p>
        <p>
          Gratitude helps our bodies produce “feel good” hormones that help us feel more
          relaxed, and more content. This helps us turn off our “fight/flight/freeze”
          response and lowers stress hormones in our body. This helps our metabolism
          function properly; we feel less stressed, less worried, less anxious. This
          provides clarity and space to make good decisions for ourselves.
        </p>
        <h3>Some interesting websites:</h3>
        <ul>
          <li>Changing minds – www.changingminds.org.au</li>
          <li>Authentic Happiness – www.authentichappiness.org</li>
          <li>The Happiness Institute – www.thehappinessinstitute.com</li>
        </ul>
        <h3>Useful reading:</h3>
        <ul>
          <li>Martin Seligman, (2002) Authentic Happiness, Random House; New York.</li>
          <li>Dr Tim Sharp, (2007) Happiness Handbook, Finch Publishing.</li>
          <li>Stephanie Dowrick, (2005) Choosing Happiness, Allen &amp; Unwin.</li>
          <li>Stephanie Dowrick, (2007) Creative Journal Writing, Allen &amp; Unwin.</li>
          <li>Dr. Tim Sharp, (2008) 100 Ways to Happiness: a guide for busy people, Penguin.</li>
          <li>Ingrid Poulson (2008), Rise, Pan MacMillan</li>
        </ul>
      </div>
    </div>
  );
}
