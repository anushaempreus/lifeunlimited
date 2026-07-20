import type { Block } from "./content";

export type Course = {
  slug: string;
  title: string;
  image: string;
  teaser: string;
  body: Block[];
};

export const COURSES: Course[] = [
  {
    slug: "bootcamp-for-the-brain",
    title: "Bootcamp for the Brain",
    image: "/images/training/bootcamp-featured.jpg",
    teaser:
      "Bootcamp for the Brain – Maintaining resilience and emotional agility during times of change. Wellbeing and resilience are strong predictors of workplace productivity and being able to bounce back quicker in response to difficult times and situations.",
    body: [
      {
        type: "h2",
        text: "Bootcamp for the Brain – Maintaining resilience and emotional agility during times of change",
      },
      {
        type: "p",
        text: "Wellbeing and resilience are strong predictors of workplace productivity and being able to bounce back quicker in response to difficult times and situations. Bootcamp for the Brain will assist your teams to develop practical resilience skills and have a deeper understanding of the following areas:",
      },
      {
        type: "ul",
        items: [
          "The physiological, psychological and behavioural consequences of chronic and sustained stress and how these can impact on work performance, productivity, team morale and health;",
          "How to exercise the brain to train for peak cognitive performance and recovery;",
          "Understand the key factors that influence and improve resilience individually and in their teams.",
          "Key concepts for dealing with a difficult working environment, including dealing with change and peak work pressures.",
          "Identify the most important practical strategies for recovery of mind and body;",
          "Develop individual bespoke self-care plans to assist participants to ‘switch-off’ when they can so that they can ‘switch-on’ when they have to.",
        ],
      },
      {
        type: "p",
        text: "Bootcamp for the Brain includes take home resources and can be delivered face-to-face or in the online format. ‘Bootcamp for the Brain’ is Life Unlimited’s signature workshop and can be customised to meet your organisations requirements – please get in touch with any questions you may have and to book in your next training program.",
      },
    ],
  },
  {
    slug: "bootcamp-for-the-brain-heart-and-mind",
    title: "Bootcamp for the Brain, Heart and Mind",
    image: "/images/training/bootcamp-team.jpg",
    teaser:
      "Practical Skills and resilience training. Join us for a highly practical and experiential 6-part skills building course to help you maintain your resilience, practice skills to be calm and present and reconnect with yourself and others.",
    body: [
      { type: "h2", text: "Practical Skills and resilience training" },
      {
        type: "p",
        text: "Join us for a highly practical and experiential 6-part skills building course to help you maintain your resilience, practice skills to be calm and present and reconnect with yourself and others.",
      },
      {
        type: "p",
        text: "You will learn strategies to help you manage stress, improve productivity, increase coping strategies, and have better relationships.",
      },
      {
        type: "p",
        text: "Discover proven techniques to bring you a greater sense of calm, clarity, and relaxation.",
      },
      {
        type: "p",
        text: "Delivered in 6 x 1 hour group sessions conducted via video conferencing with one of our experienced facilitators.",
      },
      {
        type: "p",
        text: "Bootcamp for the Brain, Heart and Mind was developed as to embed practical skills.",
      },
      {
        type: "p",
        text: "Booking this course for your teams is a great way to implement practical resilience building strategies into your daily life and as a refresher post Bootcamp for the Brain.",
      },
    ],
  },
  {
    slug: "keynote-speaking-events-and-bespoke-seminars",
    title: "Keynote Speaking, Events and Bespoke Seminars",
    image: "/images/training/schedule.jpg",
    teaser:
      "Life Unlimited provides speakers for different events for organisations and teams including motivational and keynote speaking, summits, conferences and symposiums, facilitation of planning days and mental health awareness events.",
    body: [
      {
        type: "p",
        text: "Life Unlimited provides speakers for different events for organisations and teams including but not limited to the following:",
      },
      {
        type: "ul",
        items: [
          "Motivational and Keynote Speaking",
          "Summits",
          "Conferences and Symposiums",
          "Facilitation of Planning Days",
          "Mental health Awareness events including; RUOK DAY?, Mental Health Week, International Women’s day, Women’s Health Week, Suicide Awareness",
        ],
      },
      {
        type: "p",
        text: "If you have a specific training needs or something in particular in mind Life Unlimited curates bespoke seminars and key note speaking to your needs.",
      },
      {
        type: "p",
        text: "The following are some topics Life Unlimited can cover at your next event:",
      },
      {
        type: "ul",
        items: [
          "Preventing Vicarious Trauma",
          "Renewing Workplace Culture",
          "Workplace Harassment Contact Officer Training",
          "Mental Health@Work",
          "Communicating for Impact – A Workshop for Leaders",
          "Leading Remote Teams",
          "Psychological First Aid",
          "Stress Management",
          "Get a Better Night’s Sleep",
          "Mindful Eating",
          "Well-being and Corporate wellness workshops",
        ],
      },
      { type: "p", text: "Bite-Sized Training – short sharp sessions:" },
      {
        type: "ul",
        items: [
          "Taming your Inner Critic",
          "Emotional Wellbeing Resilience and Renewal",
          "Strengthening Personal Resilience",
          "Self-care",
        ],
      },
    ],
  },
  {
    slug: "vicarious-trauma-awareness-training",
    title: "Vicarious Trauma Awareness Training",
    image: "/images/training/vicarious-trauma.jpg",
    teaser:
      "Wellbeing and resilience are strong predictors of workplace productivity and being able to bounce back quicker in response to difficult times and situations. These events may trigger vicarious trauma.",
    body: [
      {
        type: "h2",
        text: "Wellbeing and resilience are strong predictors of workplace productivity and being able to bounce back quicker in response to difficult times and situations.",
      },
      {
        type: "p",
        text: "These events may trigger vicarious trauma, whereby people can be affected both psychologically and emotionally by such occurrences. It is important to acknowledge that vicarious trauma may occur in these circumstances.",
      },
      {
        type: "p",
        text: "Vicarious Trauma Awareness workshops will help people gain an understanding of what is “normal worry” or “good stress” and the effects of excessive or extended worry and stress on our bodies and minds. We will explore ways to relax body and mind and discuss what participants can do differently that will help manage stress levels in the current working environment, with exploration of practical strategies to reduce the impacts of chronic stress and increase relaxation for peak performance.",
      },
      {
        type: "p",
        text: "This session includes a review of Bootcamp for the Brain Key Concepts which will provide foundational resilience skills for participants leading into the Vicarious Trauma Awareness.",
      },
      {
        type: "p",
        text: "Participants will develop understanding of the following areas:",
      },
      {
        type: "ul",
        items: [
          "What is Vicarious Trauma and how does it occur?",
          "Understanding the signs and symptoms of vicarious trauma",
          "Vicarious trauma and the risks associated with it;",
          "The effect of trauma on the brain.",
          "How added stress can make you more vulnerable to Vicarious Trauma",
          "Empathy for the risks of exposure for themselves and others",
          "Develop an early warning system and practical strategies and skills in taking stock and self-care.",
          "Identify and practice practical strategies to assist in recovering from setbacks as well as improving productivity and building emotional resilience.",
        ],
      },
    ],
  },
  {
    slug: "the-accidental-counsellor",
    title: "The Accidental Counsellor",
    image: "/images/training/accidental-counsellor.jpg",
    teaser:
      "Accidental counselling is when we might find ourselves in a counselling role “by accident”; supporting a distressed friend, colleague, workmate, or client. Not all of us are trained counsellors but we can learn to provide appropriate support when needed.",
    body: [
      {
        type: "p",
        text: "Accidental counselling is when we might find ourselves in a counselling role “by accident”; because of something that may happen at work or personal life we find ourselves supporting a distressed friend, colleague, workmate, or client. Not all of us are trained counsellors but we can learn to provide appropriate support when needed.",
      },
      {
        type: "p",
        text: "Participants will learn practical skills to support others when they are distressed, angry or having a challenging time, including:",
      },
      {
        type: "ul",
        items: [
          "Communication skills for active, empathic, and effective listening",
          "Ways to identify the signs that people may need emotional support",
          "How to create psychological safety",
          "Techniques to respond to distress",
          "The limits of your role in providing support: rescuer vs. helper",
          "Skills to develop boundaries, limits and self-care strategies.",
          "How to effectively provide support options and referral information to provide further assistance",
          "Looking after the Accidental Counsellors wellbeing",
        ],
      },
      {
        type: "p",
        text: "The learning will be assisted with active learning scenarios, case studies and group practice and discussion.",
      },
      {
        type: "p",
        text: "The Accidental Counsellor workshop has been utilised from high level public service to customer service-based roles with great success.",
      },
    ],
  },
  {
    slug: "assertiveness-at-work",
    title: "Assertiveness at Work",
    image: "/images/training/assertiveness-at-work.jpg",
    teaser:
      "Have you ever been told, “You need to be more assertive”? Perhaps someone has said, “Stand up for yourself!” or, “Tell me what YOU think!” But what exactly is assertiveness?",
    body: [
      {
        type: "h2",
        text: "Have you ever been told, “You need to be more assertive”? Perhaps someone has said, “Stand up for yourself!” or, “Tell me what YOU think!”",
      },
      {
        type: "p",
        text: "But what exactly is assertiveness? Assertiveness is a communication style. When we are assertive, we express our feelings, thoughts, beliefs, and opinions in a respectful, open manner that doesn’t violate the rights of others.",
      },
      {
        type: "p",
        text: "There are a range of other communication styles. One that violates the rights of others is aggressive communication. On the other end of the spectrum is passive communication, which violates our own rights. Sometimes, people use a combination of the two, resulting in a passive-aggressive style, where the person is essentially being aggressive, but in a passive or indirect way.",
      },
      {
        type: "p",
        text: "Understanding how to be assertive gives us choice in the way we communicate with others. Assertive communication promotes good psychological health, and better relationships.",
      },
      { type: "h2", text: "Situations where you might need to be assertive at work:" },
      {
        type: "ul",
        items: [
          "Asking for a pay rise or promotion",
          "Discussing your performance",
          "Appraising the performance of your staff",
          "Giving feedback to colleagues or supervisors",
          "Dealing with challenging or difficult behaviours",
          "Negotiating tasks and responsibilities",
          "Collaborating on a group project",
        ],
      },
      { type: "h2", text: "Life Unlimited Assertiveness at Work participants will:" },
      {
        type: "ul",
        items: [
          "Learn how to be an assertive communicator – express your feeling, thoughts, beliefs and opinions in an open and direct way",
          "Improve your communication, negotiation and conflict management skills",
          "Learn to say no without offending anyone",
          "Deal with criticism effectively",
          "Improve confidence and self-esteem",
          "Increase resilience",
          "Reduce stress and anxiety",
        ],
      },
    ],
  },
  {
    slug: "respect-and-diversity-at-work-creating-a-harassment-free-workplace",
    title: "Respect and Diversity at Work: Creating a Harassment Free Workplace",
    image: "/images/training/respect-and-diversity.jpg",
    teaser:
      "What is “Respect and Diversity”? What is Bullying? What is harassment? Unfortunately bullying, discrimination and inappropriate behaviours at work are part of the culture of many Australian organisations.",
    body: [
      {
        type: "h2",
        text: "What is “Respect and Diversity”? What is Bullying? What is harassment?",
      },
      {
        type: "p",
        text: "Unfortunately bullying, discrimination and inappropriate behaviours at work are part of the culture of many Australian organisations, despite best efforts by employers, staff members, Government and legislation to combat them.",
      },
      {
        type: "p",
        text: "Bullying and harassment costs organisations dearly – not just in increased insurance premiums and litigation, but in increased absenteeism, lost productivity, high staff turnover and poor retention. It can be damaging to an organisation’s reputation and potentially have serious consequences for employees, leading to illnesses such as depression and anxiety.",
      },
      {
        type: "p",
        text: "Respect and Diversity at Work is a half day seminar or one-day workshop designed to raise awareness for staff and managers, and assist to prevent and manage workplace bullying and harassment. We can tailor the workshop to suit the needs of your organisation and we offer specific workshops for employees and for managers.",
      },
      { type: "h2", text: "Respect and Diversity at Work workshops will:" },
      {
        type: "ul",
        items: [
          "Enable participants to define workplace harassment",
          "Identify behaviours that constitute workplace harassment, discrimination and bullying",
          "Identify what harassment and bullying is not",
          "Understand the effects of bullying and harassment on the individual and organisation",
          "Prevent and manage workplace harassment",
          "Understand the responsibilities of employees and management",
          "Know who to contact for help",
        ],
      },
    ],
  },
  {
    slug: "debriefing-and-critical-incident-debriefing-and-support",
    title: "Debriefing and Critical Incident – Debriefing and Support",
    image: "/images/training/debriefing.jpg",
    teaser:
      "This workshop implements and embeds a variety of practical skills and techniques to appropriately support each other and develop de-briefing protocols to manage the impacts of challenging employee issues and situations.",
    body: [
      {
        type: "h2",
        text: "This workshop implements and embeds a variety of practical skills and techniques to appropriately support each other and develop de-briefing protocols to manage the impacts of challenging employee issues and situations.",
      },
      {
        type: "p",
        text: "Debriefing and Critical Incident workshops assist participants to maintain their own resilience, well-being and good mental health with self-care strategies, boundary setting and prevention of vicarious trauma.",
      },
      {
        type: "p",
        text: "The interactive and informative sessions will provide tools and strategies to assist teams and individuals to look after each other and will address the following components:",
      },
      { type: "h2", text: "Debriefing Training – Strategies and Tools" },
      {
        type: "p",
        text: "This session helps participants to have compassionate and constructive conversations with members of the team during debriefing meeting while they maintain poise, calm and objectivity. Sometimes, we will find ourselves in situations where we will need to respond or witness the pain, distress, or suffering of another person. Such times can be difficult and a challenge to navigate helpfully.",
      },
      {
        type: "p",
        text: "The session will provide participants with the skills to confidently participate in debriefing meetings.",
      },
      { type: "p", text: "In this session participants will learn:" },
      {
        type: "ul",
        items: [
          "Ways to identify the signs that people may need emotional support",
          "How to create psychological safety",
          "Techniques to respond to distress",
          "Communication skills for active, empathic and effective listening",
          "The limits of the role in providing support: rescuer v helper",
          "Skills to develop boundaries, limits and self-care strategies",
          "How to effectively provide support options and referral information for further assistance",
          "Develop individual self-care and energy management plans",
        ],
      },
      {
        type: "p",
        text: "This workshop is delivered with active learning scenarios, case studies and group practice and discussion.",
      },
      { type: "h2", text: "Follow-up Session – Review of Learnings" },
      {
        type: "p",
        text: "This session will provide the participants with an opportunity to attend a facilitated discussion to review learnings and discuss the implementation of the self-care and energy management plans developed in their Strategies and Tools session. We review the processes implemented by the team since the first session.",
      },
    ],
  },
];

export function getCourse(slug: string) {
  return COURSES.find((c) => c.slug === slug);
}
