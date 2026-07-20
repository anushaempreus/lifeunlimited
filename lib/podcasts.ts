export type Episode = {
  title: string;
  date: string;
  blurb: string;
  href: string;
  action?: "Listen now" | "Watch now";
};

export const RECENT_EPISODES: Episode[] = [
  {
    title: "Menopause and Mental Health",
    date: "10 Dec 2024",
    blurb:
      "If you have been through, or are currently going through peri-menopause or menopause, did you feel like your mental health was impacted? And if someone you love is going through this, what can you look out for and how can you support them? Psychologist Sue Read sat down with ABC Canberra’s Alice Matthews.",
    href: "https://www.abc.net.au/listen/programs/canberra-afternoons/sue-read-on-menopause-and-mental-health/104707978",
  },
  {
    title: "The importance of rest and recovery during the Christmas holiday period",
    date: "26 November 2024",
    blurb:
      "As the holiday season approaches, how do you find yourself feeling? For many, the Christmas break, rather than being a time of rest, can quickly spiral into chaos. Sue Read from Life Unlimited joined Alice Matthews on Afternoons to discuss the vital role of rest and recovery during this busy time of year. They explore how to prioritise well-being amidst the holiday rush, ensuring we don’t overlook the importance of taking time to recharge.",
    href: "https://www.abc.net.au/listen/programs/canberra-afternoons/take-care-with-sue/104653218",
  },
  {
    title: "Self-Compassion and your Inner Critic",
    date: "3 Sept 2024",
    blurb:
      "How much attention should you pay to that voice in your head that tends to be negative, intrusive and even mean? And what are the different ways you can practise self-compassion? Psychologist Sue Read sat down with ABC Canberra’s Alice Matthews.",
    href: "https://www.abc.net.au/listen/programs/canberra-afternoons/sue-read-self-compassion-your-inner-critic-/104311150",
  },
  {
    title: "Recovering Perfectionist",
    date: "20 August 2024",
    blurb:
      "Are you a bit of a perfectionist? Sue Read describes herself as a “recovering perfectionist.” What does that mean? And where does it come from? Psychologist Sue Read sat down with ABC Canberra’s Alice Matthews.",
    href: "https://www.abc.net.au/listen/programs/canberra-afternoons/sue-read-recovering-perfectionist-/104311096",
  },
  {
    title: "What can competition teach us?",
    date: "9 July 2024",
    blurb:
      "How do you feel about the participation award? With the Olympics fast approaching, we wanted to delve into the psychology of competition. When is competition healthy and when is it unhealthy? What should be rewarded and what shouldn’t? ABC Canberra’s Alice Matthews was joined by our resident psychologist and former Matildas player Sue Read.",
    href: "https://www.abc.net.au/listen/programs/canberra-afternoons/sue-read-competition/104082318",
  },
  {
    title: "How do you discuss death with your children?",
    date: "25 June 2024",
    blurb:
      "Discussing death with children can be challenging, leaving many parents unsure about how to approach the subject. For Canberra-based psychologist Sue Read, honesty is crucial when addressing such sensitive topics with young ones. She emphasises that children’s understanding of death evolves as they grow, but their capacity for deep emotions remains constant. Read stresses the importance of truthful, compassionate communication in fostering a child’s emotional development while speaking with ABC’s Alice Matthews.",
    href: "https://www.abc.net.au/listen/programs/canberra-afternoons/discussing-death-with-children/104020808",
  },
  {
    title: "The Psychology of Healthy Habits",
    date: "4 March 2024 | The MediHerb podcast",
    blurb:
      "In this episode, Sue discusses effective communication strategies to empower and motivate patients to make positive changes to meet their health goals. She discusses the psychology behind habits and how to nurture compassion and understanding for patients as they navigate their health journey.",
    href: "https://themediherbpodcast.podbean.com/e/sue-read-the-psychology-of-healthy-habits/",
  },
  {
    title: "Love languages: How do you show the love?",
    date: "11 Feb 2024 | ABC Radio Canberra",
    blurb:
      "It’s no surprise that we all express love in different ways. But do you know what it is that really cuts through for you? Are you familiar with different types of love languages? On Sunday Brunch, Kate Midena spoke to psychologist Sue Read to find out more about the different ways we can show love to those we care about.",
    href: "https://www.abc.net.au/listen/programs/canberra-sundaybrunch/love-languages-with-sue-read/103470808",
  },
  {
    title:
      "Pause – Reflect – Reconnect: Preventing Burnout in Clinical Practice – Working with Emotion and the Body",
    date: "26 August 2023 | Integria Symposium",
    blurb:
      "In this session Sue explores the concepts of trauma informed practice and how this can be applied at a practical level in your work, as well as the importance of practitioner self-care when looking after patients with a trauma background.",
    href: "/pause-reflect-reconnect-preventing-burnout-in-clinical-practice-working-with-emotion-and-the-body",
    action: "Watch now",
  },
];

export const SERIES_2023: Episode[] = [
  {
    title: "Therapy Dogs",
    date: "4 Dec 2023",
    blurb:
      "Psychologist Sue Read is a regular on Mornings, and so is her chocolate labrador Jack. He also attends consults with clients and is considered a key member of the team at Sue’s practice. Sue spoke to James about the mental health benefits of having a pet – especially of the canine variety.",
    href: "https://www.abc.net.au/listen/programs/canberra-mornings/life-guru-sue-read-therapy-dogs/103185430",
  },
  {
    title: "A psychologist’s take on mental health apps – Sue Read talks to James Vyver",
    date: "28 Nov 2023",
    blurb:
      "There are more than 10,000 mental health apps on the market. James Vyver spoke with Sue Read about how they compare to an appointment with a psychologist, and how to sort through the thousands of options to find something that might be useful.",
    href: "https://www.abc.net.au/listen/programs/canberra-mornings/life-guru-sue-read-mental-health-apps/103159518",
  },
  {
    title: "The power of applied Breathwork with James Vyver",
    date: "20 Nov 2023",
    blurb:
      "Breathing is something we do every day, almost always without thinking. However, many of us are breathing the wrong way. Breathing techniques can have incredible benefits for our concentration and physical health, but only if we do them correctly. The ABC’s James Vyver spoke to Morning’s resident life guru and psychologist, Sue Read about breathing techniques.",
    href: "https://www.abc.net.au/listen/programs/canberra-mornings/sue-read-breathwork-part-2/103130106",
  },
  {
    title: "Breathwork with Emma Bickley",
    date: "13 Nov 2023",
    blurb:
      "Psychologist and our resident Life Guru, Sue Read, talks about the importance of reconnecting mind and body through breathwork. Emotional regulation can be achieved through breathing exercises and Sue took us through one of these on air. She encourages you to take a minute to focus on whether you’re breathing deeply and – very importantly – whether you’re breathing through your nose!",
    href: "https://www.abc.net.au/listen/programs/canberra-mornings/sue-read-breathing/103097900",
  },
  {
    title: "Supporting Anxious Teens",
    date: "6 Nov 2023",
    blurb:
      "Rates of anxiety among teenagers doubled during the pandemic. They’ve since petered out, but remain higher than previous generations. Life Guru Sue Read spoke to Lish Fejer on Mornings about how to support young people struggling with anxiety.",
    href: "https://www.abc.net.au/listen/programs/canberra-mornings/life-guru-sue-read-anxious-teenagers/103070274",
  },
  {
    title: "The Vagus Nerve",
    date: "6 Nov 2023",
    blurb:
      "Trust your gut because it really does speak to your brain. Listen to learn how it works, and what to do to keep your vagus nerve healthy. Life Guru Sue Read spoke to Lish Fejer about the nerve responsible – the vagus nerve.",
    href: "https://www.abc.net.au/listen/programs/canberra-mornings/vagus-nerve-life-guru-sue-read/103055804",
  },
  {
    title: "The importance of deep rest and reset",
    date: "18 Sept 2023",
    blurb:
      "When was the last time you took a proper break? Life Guru Sue Read shared her recipe for the perfect reset with Lish Fejer on ABC Canberra Mornings.",
    href: "https://www.abc.net.au/listen/programs/canberra-mornings/life-guru-deep-rest-reset/102869894",
  },
  {
    title: "Navigating political conversations with family",
    date: "5 Sept 2023",
    blurb:
      "Should you throw out the old adage and attempt to talk politics, religion and money at the family dinner table? Sue Read has some tips for navigating political differences with your loved ones.",
    href: "https://www.abc.net.au/listen/programs/canberra-mornings/life-guru-sue-read-political-conversations-with-your-family/102815962",
  },
  {
    title: "FIFA WWC Wrap Up",
    date: "7 Aug 2023",
    blurb:
      "Not only is ABC’s Life Guru Sue Read our go-to on all things psychology, but she is also a former Matilda and can offer the scoop on what is going down with the FIFA Women’s World Cup. Mornings’ Presenter Lish Fejer talks the beautiful game with Sue in this episode.",
    href: "https://www.abc.net.au/listen/programs/canberra-mornings/sue-read-life-guru-matildas-wrap/102701568",
  },
  {
    title: "FIFA WWC Canada v Australia",
    date: "31 July 2023",
    blurb:
      "As Australia plays their final group stage game against Canada in the FIFA Women’s World Cup, both teams will fight for a place in the knockout stages. Lish Fejer spoke with Life Guru and Ex-Matilda’s player Sue Read.",
    href: "https://www.abc.net.au/listen/programs/canberra-mornings/ex-matilda-s-goalie-sue-read/102669740",
  },
  {
    title: "Reflecting on Angela Lannotta",
    date: "24 July 2023",
    blurb:
      "Former Matildas goalie, Sue Read, spoke to Lish Fejer about a pioneer of the Women’s World Cup – the woman who scored Australia’s first ever World Cup goal.",
    href: "https://www.abc.net.au/listen/programs/canberra-mornings/sue-read-angela/102642942",
  },
  {
    title: "Women’s sport in the spotlight",
    date: "17 July 2023",
    blurb:
      "Former Matildas goalie and regular guest on the Mornings show, Sue Read, talks to Lish Fejer about gender inequality in sport in the lead up to the FIFA Women’s World Cup, which starts this week.",
    href: "https://www.abc.net.au/listen/programs/canberra-mornings/sue-read-fifa-womens-world-cup/102624450",
  },
  {
    title: "Why you should switch off & limit screen time",
    date: "26 June 2023",
    blurb:
      "How many hours do you spend scrolling every day? Life Guru Sue Read spoke to ABC’s Lish Fejer about how unlimited access to our devices is having a negative impact on our social relationships and general wellbeing.",
    href: "https://www.abc.net.au/listen/programs/canberra-mornings/sue-read-technology-switch-off/102619268",
  },
  {
    title: "Matildas Goal Keeper World Cup predictions",
    date: "19 June 2023",
    blurb:
      "Before she became ABC Radio Canberra’s Life Guru, Sue Read played for the Matildas as goalkeeper. Sue spoke with Lish Fejer about what it means that Australia (with NZ) is hosting the competition this year.",
    href: "https://www.abc.net.au/listen/programs/canberra-mornings/sue-read-fifa-womens-world-cup/102505516",
  },
  {
    title: "The benefits of being alone",
    date: "5 June 2023",
    blurb:
      "Does the thought of solitude scare you? The ability to tolerate alone time has been linked to increased happiness, better life satisfaction, and improved stress management.",
    href: "https://www.abc.net.au/listen/programs/canberra-mornings/life-guru-sue-read-solitude/102441390",
  },
  {
    title: "Life Satisfaction drops to lowest in 20 years",
    date: "15 May 2023",
    blurb:
      "Every year since 2001, Deakin University and mutual company Australian Unity have attempted to measure how satisfied Australians are with their lives. Sue Read spoke about the latest Australian Unity Wellbeing Index Survey results with the ABC’s Kim Huynh.",
    href: "https://www.abc.net.au/listen/programs/canberra-mornings/sue-read-life-guru-australian-unity-wellbeing-index-survey/102347526",
  },
  {
    title: "How to talk about suicide",
    date: "8 May 2023",
    blurb:
      "More than 10 million Australian adults are estimated to know someone who has died by suicide, and 1 in 2 young people are impacted by suicide by the time they turn 25. The latest Australian Bureau of Statistics data shows that around 8-9 lives are lost everyday to suicide. Sue Read spoke to Lish Fejer about what support is available if you start to have suicidal thoughts, or you’re worried about someone else. Lifeline 24/7 support: 13 11 14.",
    href: "https://www.abc.net.au/listen/programs/canberra-mornings/life-guru-sue-read-how-to-talk-about-suicide/102316924",
  },
  {
    title: "Making time for reflection",
    date: "24 April 2023",
    blurb:
      "How often do you stop and really think about what’s important in your life? ANZAC day is a time of remembrance, slowing down and reflection. Sue Read spoke to Alice Matthews about how we learn from this day and be more reflective in our daily lives.",
    href: "https://www.abc.net.au/listen/programs/canberra-mornings/life-guru-sue-read-reflection-anzac-day/102271178",
  },
  {
    title: "Vitamin D",
    date: "17 April 2023",
    blurb:
      "Canberra truly has a gruelling winter, with low temperatures welcoming frost and dark cloud coverage for much of the year. So how can Canberran’s get the vitamin D they need during the dreariest part of the year?",
    href: "https://www.abc.net.au/listen/programs/canberra-mornings/life-guru-sue-read-vitamin-d/102239994",
  },
  {
    title: "Saying NO",
    date: "13 April 2023",
    blurb:
      "No is a powerful word, and something that doesn’t come easy to all to us. ABC’s Lish Fejer spoke to Sue Read about saying ‘No’.",
    href: "https://www.abc.net.au/listen/programs/canberra-mornings/life-guru-sue-read-saying-no/102230438",
  },
  {
    title: "Kindness",
    date: "7 April 2023",
    blurb:
      "ABC’s Lish Fejer spoke with Life Guru Sue Read about kindness. How do you show kindness?",
    href: "https://www.abc.net.au/listen/programs/canberra-mornings/life-guru-sue-read-kindness/102217010",
  },
  {
    title: "Maintaining healthy habits",
    date: "27 March 2023",
    blurb:
      "Starting a healthy routine is one thing but keeping it going is another. Sue Read shares her tips for sticking with a good thing.",
    href: "https://www.abc.net.au/listen/programs/canberra-mornings/life-guru-sue-read-maintaining-good-habits/102149738",
  },
  {
    title: "Rethinking happiness and how to achieve it",
    date: "20 March 2023",
    blurb:
      "Today there are more ways to be instantly happy and yet we’ve never been so miserable. Sue Read says it’s time to rethink happiness and what we do to achieve it.",
    href: "https://www.abc.net.au/listen/programs/canberra-mornings/life-guru-sue-read-happiness/102119436",
  },
  {
    title: "Exercising for your mental health",
    date: "6 March 2023",
    blurb:
      "Consistent physical exercise has been found to be 1.5 times more effective than medication and counselling in the first instance to treat ill mental health. Sue Read has some advice on how to implement a bit more exercise into your daily routine.",
    href: "https://www.abc.net.au/listen/programs/canberra-mornings/exercising-for-your-mental-health-life-guru-sue-read/102058664",
  },
  {
    title: "Transform habits with core values",
    date: "20 Feb 2023",
    blurb:
      "Want to transform your habits? Combining core values with your daily routine may be the key to success. Sue Read has some advice for achieving your goals.",
    href: "https://www.abc.net.au/listen/programs/canberra-mornings/habits-life-guru-sue-read/102006910",
  },
  {
    title: "Staying on track with NYE resolutions",
    date: "7 Feb 2023",
    blurb:
      "What stops us from consistently following through and implementing change or creating positive habits? Sue Read has some advice for staying on track.",
    href: "https://www.abc.net.au/listen/programs/canberra-mornings/life-guru-new-years-resolutions/101958134",
  },
  {
    title: "School Refusal",
    date: "30 Jan 2023",
    blurb:
      "Sue Read talks about school refusal with ABC Radio Canberra’s Lish Fejer.",
    href: "https://www.abc.net.au/listen/programs/canberra-mornings/life-guru-school-refusal/101958152",
  },
];

export const SERIES_2022: Episode[] = [
  {
    title: "Managing social anxiety at Christmas",
    date: "16 Dec 2022",
    blurb:
      "ABC Radio Canberra’s Emma Bickley asked Life Guru Sue Read for her tips on managing social anxiety at Christmas time.",
    href: "https://www.abc.net.au/listen/programs/canberra-breakfast/social-anxiety/101779904",
  },
  {
    title: "Sue Read talks turkey about surviving the Christmas time",
    date: "9 Dec 2022",
    blurb:
      "ABC Breakfast Presenter Lish Fejer asked our resident Life Guru Sue Read about how to navigate some of the pitfalls around Christmas, and make sure you really get a break, and rejuvenate.",
    href: "https://www.abc.net.au/listen/programs/canberra-breakfast/life-guru:-dealing-with-christmas/101753260",
  },
  {
    title: "Under Pressure – Soccer Goalies",
    date: "2 Dec 2022",
    blurb:
      "ABC Canberra Life Guru, Sue Read from Life Unlimited Psychology and former Matildas’ goalie talks about the unique pressure of being a soccer goalie.",
    href: "https://www.abc.net.au/listen/programs/canberra-breakfast/life-guru:-under-pressure---soccer-goalies/101726448",
  },
  {
    title: "Banishing loneliness for better health",
    date: "13 Nov 2022",
    blurb:
      "What can we do to banish loneliness and create connections? And how can that improve your physical and mental health? Life Unlimited Psychologist Sue Read gives ABC Radio Canberra’s Lish Fejer some great advice.",
    href: "https://www.abc.net.au/listen/programs/canberra-breakfast/banishing-loneliness/101726364",
  },
  {
    title: "Get Moving Part 2",
    date: "28 Oct 2022",
    blurb:
      "Finding the motivation to get moving can be tricky – ABC Life Guru Sue Read has some tips on how to do just that.",
    href: "https://www.abc.net.au/listen/programs/canberra-breakfast/life-guru-sue-read-on-motivation-part-2/101588178",
  },
  {
    title: "How do you get moving when you really don’t want to?",
    date: "21 Oct 2022",
    blurb:
      "ABC Life Guru Sue Read speaks with Breakfast host Lish Fejer about how to get over that initial barrier to get moving.",
    href: "https://www.abc.net.au/listen/programs/canberra-breakfast/life-guru-sue-read-on-motivation-to-exercise/101560450",
  },
  {
    title: "What are you thankful for?",
    date: "14 Oct 2022",
    blurb:
      "ABC Canberra Life Guru Sue Read speaks with Breakfast host Lish Fejer about how important it is to focus on the positive (as well as taking stock of the negative) and offers some simple ways to train your brain to bring back the balance between good and bad.",
    href: "https://www.abc.net.au/listen/programs/canberra-breakfast/sue-read-on-gratitude/101533232",
  },
  {
    title: "How easy do you find it to say ‘no’?",
    date: "7 Oct 2022",
    blurb:
      "Listen to the discussion with ABC Canberra’s Breakfast radio host Lish Fejer and Life Guru Sue Read, Psychologist from Life Unlimited Psychology and learn the benefits of occasionally saying “no thank you”.",
    href: "https://www.abc.net.au/listen/programs/canberra-breakfast/sue-read-power-of-saying-no/101530850",
  },
  {
    title: "Sue Read on seeking joy",
    date: "23 Sept 2022",
    blurb:
      "Do you make time to find joyful moments? ABC Life Guru Sue Read from Life Unlimited Psychology discusses the importance of joy with presenter Adam Shirley.",
    href: "https://www.abc.net.au/listen/programs/canberra-breakfast/life-guru-sue-read-sparking-joy/101467548",
  },
  {
    title: "Sue Read on Microbreaks",
    date: "16 Sept 2022",
    blurb:
      "Life Guru Sue Read from Life Unlimited Psychology discusses how important microbreaks are for health and wellbeing with ABC Canberra’s Breakfast host Lish Fejer.",
    href: "https://www.abc.net.au/listen/programs/canberra-breakfast/life-guru-sue-read-on-microbreaks/101452922",
  },
  {
    title: "Good Sleep Habits",
    date: "2 Sept 2022",
    blurb:
      "Do you sleep well? ABC Life Guru Sue Read from Life Unlimited Psychology talks to Breakfast host Lish Fejer about the 3 things to avoid for good sleep.",
    href: "https://www.abc.net.au/listen/programs/canberra-breakfast/life-guru-good-sleep-habits/101398754",
  },
  {
    title: "Sue Read on Mindfulness",
    date: "19 Aug 2022",
    blurb:
      "As part of the new Life Guru series, Canberra psychologist Sue Read spoke to ABC Radio Canberra’s Lish Fejer about what people can do to bounce back.",
    href: "https://www.abc.net.au/listen/programs/canberra-breakfast/mindfulness-with-life-guru-sue-read/101349548",
  },
  {
    title:
      "How to bounce back from feeling exhausted with Canberra psychologist Sue Read",
    date: "2 Jul 2022",
    blurb:
      "Feeling exhausted? Canberra psychologist Sue Read talks about how to bounce back after feeling exhausted.",
    href: "https://www.abc.net.au/listen/programs/canberra-breakfast/life-guru-how-to-bounce-back-after-feeling-exhausted-sue-read/13984244",
  },
];
