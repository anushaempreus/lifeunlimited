import type { Block } from "./content";

export type FactSheet = {
  slug: string;
  title: string;
  banner: string;
  metaTitle: string;
  body: Block[];
  ctaLead: string;
};

const BETTER_ACCESS =
  "However, you may qualify for a referral under the “Better Access” scheme, which does require a referral from your GP. The referral will enable you to claim a Medicare rebate on your counselling fees, and “Better Access” currently provides up to ten rebated sessions per year. Some private health insurers may also provide rebates – please check with your fund.";

export const FACTSHEETS: FactSheet[] = [
  {
    slug: "counselling-psychology",
    title: "What is Counselling? What Can I Expect?",
    metaTitle: "What is Counselling?",
    banner: "/images/resource/counselling.jpg",
    ctaLead:
      "Contact us or email info@lifeunlimited.com.au to book an appointment. You do not need a referral from a doctor to attend an appointment at Life Unlimited. " +
      BETTER_ACCESS,
    body: [
      {
        type: "lead",
        text: "Counselling at Life Unlimited involves active participation of both you and your counsellor.",
      },
      {
        type: "p",
        text: "We work with you to assess your needs and set goals. Effective counselling is a process where you will work on managing problems and issues both in our office and at home.",
      },
      {
        type: "p",
        text: "The major aim of counselling is to assist you to live your life the way you want to live, in line with your goals and values. Learning to be free of life-limiting problems is certainly one of the benefits of seeking help.",
      },
      {
        type: "p",
        text: "However, in undergoing counselling, you may need to take risks – to talk about the not-so-pleasant or troubling aspects of your life. It’s quite normal to feel uncomfortable or upset. You might feel hopeless or helpless for a time, and you might struggle with making decisions.",
      },
      {
        type: "p",
        text: "When people stick with their counselling treatment plan, though, they generally find that they have more rewarding social and family relationships, they are more able to resolve problems, they are happier, and better able to manage life’s ups and downs.",
      },
      {
        type: "p",
        text: "We usually allow up to 80 minutes for your first appointment. During this session, we will support you to outline the issues or problems you are bringing to counselling. We will also evaluate your counselling needs, and find out what your goals are. This is so we can formulate a treatment plan for your counselling process.",
      },
      {
        type: "p",
        text: "After the first session, each appointment will be for 50 minutes. We usually suggest a second appointment about a week after the first. You might find that the frequency of appointments will change, depending on what your needs are. You might also have “homework” to do in between sessions.",
      },
      {
        type: "p",
        text: "At any time during your counselling process, you are welcome to ask any questions of us and we will commit to discussing these with you.",
      },
    ],
  },
  {
    slug: "depression",
    title: "What is Depression?",
    metaTitle: "What is Depression?",
    banner: "/images/resource/depression-banner.jpg",
    ctaLead:
      "Contact Life Unlimited on 02 6248 5138 or email info@lifeunlimited.com.au. Many people choose to see their doctor (GP) first. They will talk to you about treatment options and may refer you to a counsellor (Psychologist or Mental Health Social Worker) under the “Better Access” scheme. The referral will enable you to claim a Medicare rebate on your counselling fees, and “Better Access” currently provides up to ten rebated sessions per year. Some private health insurers may also provide rebates – please check with your fund.",
    body: [
      {
        type: "lead",
        text: "Depression is more than just feeling “low”, being “down in the dumps” or “having the blues” – it’s a serious illness.",
      },
      {
        type: "p",
        text: "Everyone feels sad, moody or low from time to time. However, some people experience these feelings intensely, for long periods of time and sometimes without reason.",
      },
      {
        type: "p",
        text: "People with depression find it hard to function every day. They may be reluctant to participate in activities they once enjoyed, or withdraw from friends and family.",
      },
      {
        type: "p",
        text: "Depression is one of the most common of all mental health problems. According to the World Health Organisation, one in five people experience depression at some stage of their lives.",
      },
      { type: "h2", text: "Some of the symptoms of depression may include:" },
      {
        type: "ul",
        items: [
          "Increased irritability and frustration",
          "Out of character moodiness and/or teariness",
          "Increased sensitivity to minor personal criticisms",
          "Withdrawal from friends and family",
          "Loss of interest in pleasurable activities",
          "Absenteeism from work or school",
          "Wakefulness and insomnia",
          "Decreased libido",
          "Increased drug and/or alcohol use",
          "Slowed thoughts and actions",
        ],
      },
      { type: "h2", text: "How can counselling help?" },
      {
        type: "p",
        text: "Counselling can help people to recover from depression and prevent future occurrences. It can help identify unhelpful thought patterns that make people vulnerable to depression, and assist in finding new ways of coping with life. Most people recover well from depression and find that life can improve once different coping strategies are learned and put in place.",
      },
    ],
  },
  {
    slug: "stres",
    title: "What is stress?",
    metaTitle: "What is stress?",
    banner: "/images/resource/stress-banner.jpg",
    ctaLead:
      "Contact Life Unlimited on 02 6248 5138 or email info@lifeunlimited.com.au. You do not need a referral from a doctor to attend an appointment at Life Unlimited. " +
      BETTER_ACCESS,
    body: [
      { type: "lead", text: "Stress is a normal human response to pressure." },
      {
        type: "p",
        text: "We can feel stressed when faced with challenging and sometimes dangerous situations and this puts pressure on our ability to cope. The pressure is not only about what’s happening around us, but also about the demands we place on ourselves.",
      },
      {
        type: "p",
        text: "Stress is helpful when it increases our ability to be alert, energised, switched on and resourceful in facing challenges we enjoy or have to deal with.",
      },
      {
        type: "p",
        text: "Stress becomes unhelpful when it leaves us feeling fatigued, tense, anxious, burnt out, or overwhelmed. Everyone responds differently and the “tipping point” between helpful and unhelpful stress is different for each of us. It can also depend on what’s happening in our lives.",
      },
      { type: "h2", text: "The causes of stress can be many and varied:" },
      {
        type: "ul",
        items: [
          "Too many responsibilities – at work or at home",
          "Working or living with “difficult” people",
          "Illness – of yourself or a family member",
          "Lack of sleep",
          "Financial difficulties",
          "Competing worries and demands",
          "Facing change",
          "Being in danger, either physically or emotionally",
        ],
      },
      {
        type: "p",
        text: "Sometimes stress builds up and takes on a life of its own so that we feel anxious, even when not facing difficult situations. Stress is unhelpful when we:",
      },
      {
        type: "ul",
        items: [
          "Can’t switch off – we feel alert and anxious even when we want to be resting",
          "Have difficulty eating or sleeping properly",
          "Have difficulty concentrating",
          "Can’t cope – even small things get us down, leave us exhausted",
          "Become irritable, anxious or depressed because the stress is “too much”",
          "Have aches and pains unrelated to exercise or any medical condition",
          "Withdraw from relationships, work, or fun activities",
        ],
      },
      { type: "h2", text: "What can you do if you feel stressed?" },
      {
        type: "p",
        text: "If you think stress is taking its toll on you, counselling may help to reduce the anxiety and worry that stress can cause. It can also teach you better ways to manage and respond to stress, to lessen the harmful impacts on you and your body.",
      },
    ],
  },
  {
    slug: "what-is-anxiety",
    title: "What is Anxiety?",
    metaTitle: "What is Anxiety?",
    banner: "/images/resource/anxiety-banner.jpg",
    ctaLead:
      "Contact Life Unlimited on 02 6248 5138 or email info@lifeunlimited.com.au. You do not need a referral from a doctor to attend an appointment at Life Unlimited. " +
      BETTER_ACCESS,
    body: [
      {
        type: "lead",
        text: "Anxiety is a normal, healthy emotion, and everyone experiences anxiety from time-to-time.",
      },
      {
        type: "p",
        text: "Anxiety is a state of uneasiness, worry or fear, and can help us avoid harm. Think of a snarling dog, or the smell of smoke: these things can cause fear, but they can also compel us to take action.",
      },
      {
        type: "p",
        text: "For about one in every twelve people, however, anxiety is so persistent and severe that it creates serious difficulties. People experiencing a problem with anxiety may be constantly fearful and worried. They may find that these feelings dominate, rather than influence, their thinking and actions. They may be so scared of certain situations that they’re unable to face them. Severe anxiety can also lead to other problems like depression, relationship difficulties, and drug and alcohol abuse.",
      },
      {
        type: "h2",
        text: "Symptoms of anxiety can be physical and emotional, and they may happen for no apparent reason. Symptoms can include:",
      },
      {
        type: "ul",
        items: [
          "A pounding heart",
          "Breathing difficulties",
          "Feeling faint, shaky, sweaty",
          "Muscle tension and upset stomach",
          "Persistent worrying",
          "Panic attacks",
          "Fears or worry about being in social situations",
          "Fears about everyday situations or objects",
        ],
      },
      {
        type: "p",
        text: "The good news is that anxiety can be treated and it can be managed. Treatment can help you take your mind off your worries and improve your confidence. You can also learn new ways of coping.",
      },
    ],
  },
  {
    slug: "what-is-trauma",
    title: "What is Trauma?",
    metaTitle: "What is Trauma?",
    banner: "/images/resource/trauma-banner.jpg",
    ctaLead:
      "Contact Life Unlimited on 02 6248 5138 or email info@lifeunlimited.com.au. You do not need a referral from a doctor to attend an appointment at Life Unlimited. " +
      BETTER_ACCESS,
    body: [
      {
        type: "lead",
        text: "The word ‘trauma’ comes from the Greek term for ‘wound’. Sometimes when people experience very frightening or distressing events they may be psychologically wounded.",
      },
      {
        type: "p",
        text: "Everyone’s reaction is different, but most people who experience a potentially traumatic event will recover well with the help of family and friends and will not experience any long-term problems.",
      },
      {
        type: "p",
        text: "For others, this psychological wound might mean they have difficulty coping or functioning the way they used to. Symptoms may appear immediately after the event, or not at all. Sometimes, people will experience distress some time after the event.",
      },
      { type: "h2", text: "What are traumatic events?" },
      {
        type: "p",
        text: "Traumatic events are powerful and upsetting incidents which have the potential to intrude into daily life. They are usually defined as experiences that are life threatening, or where there is a significant threat to a person’s physical or psychological wellbeing.",
      },
      {
        type: "p",
        text: "An event which may have little impact on one person, could cause severe distress in another individual. The impact that an event has may be related to the person’s mental and physical health, level of available support at the time of the event, and past experience and coping skills.",
      },
      {
        type: "p",
        text: "Situations and events that might lead a person to experience psychological trauma may include:",
      },
      {
        type: "ul",
        items: [
          "Acts of violence such as an armed robbery, war or terrorism",
          "Natural disasters such as bushfire, earthquake or floods",
          "Interpersonal violence such as rape, child abuse, or suicide of a family member or friend",
          "Involvement in a serious motor vehicle or workplace accident.",
        ],
      },
      {
        type: "p",
        text: "In addition, some people may experience traumatic reactions to other, less severe but still stressful situations.",
      },
      {
        type: "p",
        text: "Some symptoms that can occur as a result of trauma include:",
      },
      {
        type: "ul",
        items: [
          "Intrusive and upsetting memories of the traumatic event",
          "Flashbacks, where it feels as though the event is happening again",
          "Nightmares",
          "Intense distress when reminded of the event",
          "Physical responses to reminders of the event (sweating, shaking, nausea, heart pounding)",
          "Avoiding any reminders of the trauma (activities, thoughts, places, people)",
          "Feeling detached from others, emotionally “numb”",
          "Easily startled; “jumpy”; hypervigilant",
          "Irritable, prone to angry outbursts",
          "Difficulty concentrating",
          "Insomnia, or difficulty staying asleep",
        ],
      },
      {
        type: "p",
        text: "If you think you may be affected by a trauma, counselling may help you to manage the symptoms you may be experiencing. It can help you to learn new ways to cope with life, and to “make sense” of the trauma and how it has affected or changed your life.",
      },
    ],
  },
];

export function getFactSheet(slug: string) {
  return FACTSHEETS.find((f) => f.slug === slug);
}

export type ResourceCategory = {
  slug: string;
  title: string;
  body: Block[];
};

export const RESOURCE_CATEGORIES: ResourceCategory[] = [
  { slug: "values-and-goals", title: "Values and Goals", body: [{ type: "p", text: "Resources coming soon" }] },
  { slug: "movement", title: "Movement", body: [{ type: "p", text: "Resources coming soon" }] },
  { slug: "sleep", title: "Sleep", body: [{ type: "p", text: "Resources coming soon" }] },
  { slug: "mindfulness", title: "Mindfulness", body: [{ type: "p", text: "Resources coming soon" }] },
  {
    slug: "health-nutrition",
    title: "Health & Nutrition",
    body: [
      {
        type: "lead",
        text: "The over-arching philosophy of Life Unlimited is about helping people gain “Optimal Health” – to enable our clients to be the best they can be and have the best life possible, socially, physically and psychologically.",
      },
      {
        type: "p",
        text: "We know that we can improve our responses to life’s challenges by taking care of our physical health, and that includes what we do with our bodies, what we fuel ourselves with and how we treat ourselves. We don’t believe “deprivation” and traditional “dieting” are good for us or our health, so we developed our own approach to well-being and weight management.",
      },
      { type: "p", text: "Further resources coming soon." },
    ],
  },
];

export function getResourceCategory(slug: string) {
  return RESOURCE_CATEGORIES.find((c) => c.slug === slug);
}
