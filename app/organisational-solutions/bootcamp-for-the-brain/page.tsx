import type { Metadata } from "next";
import { BookingCTA } from "@/lib/content";

export const metadata: Metadata = { title: "Bootcamp for the Brain" };

const TESTIMONIALS: { quote: string; cite: string }[] = [
  {
    quote:
      "“I’ve been getting such great feedback from your session today, especially the Leadership Team, who found your workshop so worthwhile. As people who are “stretched” your presentation on team resilience, workplace risk factors, and team culture was so valuable and so necessary. Thank you so much!”",
    cite: "Assistant Secretary, Humanitarian Division, DFAT",
  },
  {
    quote:
      "“Sue’s session was so well-received, and the positive feedback is flowing in. Sue’s expertise and passion certainly shone through. We are looking forward to the next workshop in the Wellbeing Series”.",
    cite: "Assistant Secretary, Dept of the Treasury",
  },
  {
    quote:
      "“The Bootcamp for the Brain training was an incredibly insightful, refreshing, and important use of my time. The session provided a wholesome, supportive, and empathetic environment to discuss coping mechanisms for peak work periods, share workplace concerns, problem-solve solutions to workplace and personal problems, normalise self-care, and build a positive culture with colleagues. My session in particular fostered psychological safety, understanding, and openness, which led to myself making friends with two new colleagues that I may have never spoken with otherwise.”",
    cite: "Executive Level Manager, Department of Defence",
  },
  {
    quote:
      "“I am so pleased to have had the opportunity to attend your company’s workshop called Boot Camp for the Brain: Building Resilience for Peak Performance. It was so good, so valuable, timely and necessary. The themes and resources Sue Read provided were excellent, and some, in particular, will really assist me to shape conversations with staff going through difficult times. I have recommended Life Unlimited to my Manager so we can facilitate more staff attending from my department”.",
    cite: "Nurse Specialist Manager, Calvary Hospital Emergency Department, Canberra",
  },
  {
    quote:
      "“The feedback we have received from this course has been amazing. I think we hit it with the right person, at the right time with the right content. One person wrote on their feedback sheet ‘probably the best internal training I have been on in my 25 years here!’ ”",
    cite: "Business Improvement Manager – Canterbury City Council",
  },
  {
    quote:
      "“You’d think it would be boring and mind numbing to sit through a seminar for 3 hours via Zoom…well Sue Read proved that wrong! She was so knowledgeable, so personable, so friendly and could establish rapport even through a screen. I felt comfy being there on camera (usually I feel very awkward) and I was able to participate and share. Great mix re Presentation style – some discussion, some group tasks, some PowerPoints. Perfect.”",
    cite: "Staff Member | Australian Financial Security Authority",
  },
  {
    quote:
      "“I’m hoping this email finds its way to Sue Read. Yesterday having completed the one-day workshop “Bootcamp for the Brain” I feel compelled to provide some feedback! So very refreshing and enlightening to listen to a psychologist who also happens to be an elite athlete with international commitment levels and the will that this necessitates. … everything that Sue talked about … mind, body and soul, as coping and preventative tools, made absolute sense. Before the secret gets out and Sue’s services are in demand from CEOs of clubs across any code kicking the door down to mentor the welfare of their own players, I’ve made recommendations to friends and family that work corporately for multi-national firms, if you’re looking to “lift the buzz” amongst the staff of your own organisations, give Life Unlimited a call.”",
    cite: "Participant, Dept of Education and Workplace Relations",
  },
  {
    quote:
      "“Thank you again for the outstanding training you provided to managers within our Division earlier this week on ‘leading remote teams’. The training was perfect – and exactly what we needed at this point in time when we are struggling to look after ourselves, let alone teams. I have consistently had staff from several different Branches that I have managed approach me after your training sessions to say that was the best training they have ever undertaken, and this was no exception. Thank you again.”",
    cite: "SES Member, Attorney General’s Department",
  },
  {
    quote:
      "“Thank you for the two really good sessions on building mental resilience. While I had experienced many of the symptoms of stress and heard many of the tips that you mentioned, it was very helpful to learn about the scientific underpinnings of both of these. I really enjoyed the breadth of knowledge and authenticity you brought to the sessions. Your emphasis on simple practices is helpful and I am certain that it will help me to become a healthier happier and more productive person – one small step at a time.”",
    cite: "Staff member – Murray Darling Basin Authority",
  },
  {
    quote:
      "“Bootcamp for the Brain” delivered by Sue Read is an exceptional course. I would recommend this course as an opportunity to take time out from the busy workplace to take stock of (1) the impact of every day stress on our ability to work effectively in the workplace (2) the importance of resilience and what makes resilient teams and (3) the tools we can use to revive and build resilience to help us in the workplace – as well as more generally help us in our day to day lives. Sue brought a practical approach to the discussion on mindfulness and resilience and importantly grounded the discussion back to the physiological impacts of stress and other factors on our body. The course looks at the tools which each of us can use as well as opening a discussion about the responsibility we all have to contribute to building resilient teams. She is an engaging, humorous and methodical presenter that was able to effectively tailor her presentation to the audience and to distil many of the key issues and concepts around mindfulness into simple and easy to understand concepts – and to do so in a short period of time. Undertaking this course as a branch provided the opportunity to look at issues which impact on performance and to build a common language for the team to talk about these issues. This course was well-received by all members of my Branch and it was one of the most effective training courses I have done to date – I would highly recommend it.”",
    cite: "SES Member – Attorney General’s Department",
  },
  {
    quote:
      "“We have had great feedback from Sue’s session, and teams have implemented a number of strategies Sue taught them. One team has incorporated breathing exercises at their daily team meetings. The workshop was very timely and everyone was ready for a “pep up” and very grateful for Sue’s wise and practical strategies, delivered with her usual great knowledge and sense of humour!”",
    cite: "Director, Australian Small Business and Family Enterprise Ombudsman",
  },
];

export default function BootcampPage() {
  return (
    <div className="mx-auto max-w-[900px] px-4 py-12">
      <h1 className="h1-brand mb-6">Bootcamp for the Brain</h1>
      <div className="prose-lu">
        <h2>Building Resilience for peak performance.</h2>
        <p>
          Wellbeing and resilience are strong predictors of workplace productivity and
          being able to bounce back quicker in response to difficult times and situations.
          This workshop will assist staff and managers to develop skills in the following
          areas:
        </p>
        <ul>
          <li>
            Clearly understand the physiological, psychological and behavioural
            consequences of chronic and sustained stress and how these can impact on work
            performance, productivity, team morale and health;
          </li>
          <li>
            Understand how to exercise the brain to train for peak cognitive performance
            and recovery;
          </li>
          <li>
            Understand the key factors that influence and improve resilience in self and
            staff;
          </li>
          <li>
            Discuss key concepts for dealing with a difficult working environment,
            including dealing with change and peak work pressures.
          </li>
          <li>
            Identify the most important practical strategies for recovery of mind and
            body;
          </li>
          <li>
            Develop individual self-care plans to assist participants to ‘switch-off’ when
            they can so that they can ‘switch-on’ when they have to.
          </li>
        </ul>
      </div>

      <BookingCTA lead="Contact Life Unlimited on 02 6248 5138 or email info@lifeunlimited.com.au now to book a “Bootcamp for the Brain – Building Resilience for peak performance” seminar or workshop. We can provide one-to-one coaching for managers or employees, or tailor the course specifically for your organisation’s needs." />

      <h2 className="text-2xl font-semibold mt-12 mb-6">
        Here is some feedback from previous participants:
      </h2>
      <div className="space-y-8">
        {TESTIMONIALS.map((t) => (
          <blockquote key={t.cite + t.quote.slice(0, 30)} className="border-l-4 border-olive pl-5">
            <p className="mb-2 italic">{t.quote}</p>
            <cite className="not-italic font-medium text-heading">{t.cite}</cite>
          </blockquote>
        ))}
      </div>
    </div>
  );
}
