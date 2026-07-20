import type { Block } from "./content";

export type Person = {
  slug: string;
  name: string;
  role: string;
  image: string;
  portrait?: boolean;
  teaser: string;
  bio: Block[];
};

export const PEOPLE: Person[] = [
  {
    slug: "jack",
    name: "Jack",
    role: "Chief “Meeter and Greeter”",
    image: "/images/people/jack.jpeg",
    teaser:
      "Jack is a very happy and “chilled” addition to our team, and can often be found asleep on the rug in a counselling room, or when no-one is looking, on the couch in the waiting room.",
    bio: [
      {
        type: "p",
        text: "Jack is a very happy and “chilled” addition to our team, and can often be found asleep on the rug in a counselling room, or when no-one is looking, on the couch in the waiting room.",
      },
      {
        type: "p",
        text: "He loves our clients, but is slowly learning to understand that not everyone is as happy to see him as he is them! He understands that there are some humans who have allergies to dogs, and asks that clients let the office humans know ahead of their appointment so he can stay out of the way when they arrive.",
      },
      {
        type: "p",
        text: "Jack loves pats and encourages us all to remember that having a dog in the office reduces stress and makes everyone happier (Barker, R et al 2012. International Journal of Workplace Health Management.)",
      },
      {
        type: "p",
        text: "You can see more of Jack’s adventures — follow Jack on Instagram!",
      },
    ],
  },
  {
    slug: "sue-read",
    name: "Sue Read",
    role: "Registered Psychologist, HR Consultant, Presenter",
    image: "/images/people/sue-read.jpeg",
    portrait: true,
    teaser:
      "Sue is the founder and Director of Life Unlimited psychology. She is a registered psychologist with the Psychology Board of Australia and has been in clinical practice for over twenty years.",
    bio: [
      {
        type: "p",
        text: "Sue is the founder and Director of Life Unlimited Psychology. She is a registered psychologist with the Psychology Board of Australia and has been in clinical practice for over twenty years.",
      },
      {
        type: "p",
        text: "Sue is an extremely experienced workshop facilitator with over 20 years facilitation experience in Government, private and community organisations. She is a highly sought after speaker for conferences, workplace summits, workplace training, management and leadership forums, and human resource events. She has presented at events such as the G20 Summit and has run countless workshops and seminars for public, private sector and community organisations. Sue has a natural way of making complex concepts practical, accessible and entertaining. Sue has a particular interest in assisting individuals and organisations to attain optimal health and to improve their ability to perform under pressure.",
      },
      {
        type: "p",
        text: "As well as her interests in people and psychology, Sue is a former elite athlete who has competed nationally and internationally in weightlifting and athletics (discus and javelin), gaining several titles and records that still have not been broken! She was also a member of the Australian National Women’s soccer team – the Matildas – and played as a Goal Keeper. Sue’s experiences in elite level sport have given her key insights into how to continually perform under peak pressure, and an understanding and appreciation of how to maintain peak physical and mental health whilst balancing an elite sporting career with family and work commitments. Though Sue has now retired from competitive sport, she exercises daily as a way to stay fit both physically and psychologically, and as a means to achieve balance between her professional work and her personal life.",
      },
      {
        type: "p",
        text: "From a clinical perspective Sue offers evidence based, holistic and practical approaches to assist clients. She draws on her extensive science, psychology, health and neuroscience background to explore practical strategies for building resilience and managing client difficulties. In particular, she draws on the following fields of research and practice for her work with individuals and organisations:",
      },
      {
        type: "ul",
        items: [
          "Neuro-plasticity and brain based training;",
          "Strengths based psychology;",
          "Mindfulness based stress reduction (MBSR);",
          "Acceptance and Commitment Therapy (ACT);",
          "Trauma research including developments in the field of both Post Traumatic Stress Disorder (PTSD) and Post Traumatic Growth;",
          "Eye Movement Desensitization and Reprocessing (EMDR) and Cognitive Reprocessing Therapy (CPT);",
          "Positive Organisational Scholarship;",
          "Epigenetics research – in particular, understanding the key role that our internal and external environment has on influencing our gene expression and our health;",
          "Nutritional approaches to mental health – including understanding the Brain-gut connection and the role of ‘mood food’ in managing both physical and psychological health;",
          "Integrated mind body medicine to assist in improving overall mental and physical wellbeing",
        ],
      },
      {
        type: "p",
        text: "Sue is passionate about helping individuals not just ‘manage symptoms’ but achieve a meaningful and purposeful quality of life.",
      },
      {
        type: "p",
        text: "Sue’s passion for working with people impacted by chronic stress, trauma, grief, illness and disease, was spurred strongly by her own experience of illness that effectively ended her elite sports career. Sue has dedicated her professional life to working with individuals and groups to assist them to manage and positively recover from such life events.",
      },
    ],
  },
  {
    slug: "julia-oboyle",
    name: "Julia O’Boyle",
    role: "Clinical Social Worker, HR Consultant",
    image: "/images/people/julia-oboyle.jpg",
    teaser:
      "Julia provides psychological counselling and support for a range of mental health issues, and feels privileged to have been working as a counsellor and helping people for over twenty years.",
    bio: [
      {
        type: "p",
        text: "One of the most rewarding parts of Julia’s job is witnessing her clients’ determination and tenacity to free themselves from problems which have been limiting them, often for many years.",
      },
      {
        type: "p",
        text: "Julia provides psychological counselling and support for a range of mental health issues, and feels privileged to have been working as a counsellor and helping people for over twenty years.",
      },
      {
        type: "p",
        text: "Julia completed her Bachelor of Social Work at the ACU in Canberra and loved studying. Julia really appreciates the breadth and depth of skills and knowledge that she gained from her degree. She also has a degree in Education, having once been a primary school teacher! Julia still enjoys learning and is committed to ongoing professional development, so she can bring contemporary research and knowledge to her work.",
      },
      {
        type: "p",
        text: "Some of the issues Julia commonly helps people with include depression and anxiety, trauma (past and present), adjustment issues, stress, grief and loss, sleep issues and workplace concerns. Julia uses a range of approaches in her work, including: Cognitive Behavioural Therapy (CBT); Acceptance and Commitment Therapy (ACT); Mindfulness; Trauma Focussed Therapy; Motivational Interviewing; and relaxation and stress management techniques.",
      },
      {
        type: "p",
        text: "Julia is a member of the Australian Association of Social Workers (AASW), an accredited Mental Health Social Worker, and a member of the International Society for Traumatic Stress Studies (ISTSS).",
      },
    ],
  },
  {
    slug: "erin-pittard",
    name: "Erin Pittard",
    role: "Office Manager",
    image: "/images/people/erin-pittard.jpeg",
    teaser:
      "Erin is client services and behind-the-scenes coordinator. Friendly and professional, Erin came to Life Unlimited from a high-end retail background and has developed an intimate knowledge of Life Unlimited.",
    bio: [
      {
        type: "p",
        text: "Erin is Life Unlimited’s Office manager and behind-the-scenes coordinator. Friendly and professional, Erin came to Life Unlimited from a high-end retail background and in her time working at Life Unlimited alongside Directors, practitioners, clients, and our external training customers, has developed an intimate knowledge of Life Unlimited.",
      },
      {
        type: "p",
        text: "Erin is our front of house manager and contact for all client enquiries and assists our team behind the scenes in several different capacities, including assisting our Directors and Business Development Manager, developing resources, continued support and training, and implementing new technologies to our business. In life away from the office, Erin practices as a professional makeup artist and is passionate about music, art and fashion.",
      },
    ],
  },
  {
    slug: "aileen-howe",
    name: "Aileen Howe",
    role: "Clinical Psychologist",
    image: "/images/people/aileen-howe.jpg",
    portrait: true,
    teaser:
      "Aileen provides psychological support and counselling for a range of mental health concerns, and enjoys working collaboratively with her clients to find real solutions to the issues they are experiencing.",
    bio: [
      {
        type: "p",
        text: "Aileen provides psychological support and counselling for a range of mental health concerns, and enjoys working collaboratively with her clients to find real solutions to the issues they are experiencing.",
      },
      {
        type: "p",
        text: "Aileen has also worked in the community and public sectors both as a psychologist and as a manager, and understands these environments very well. Aileen brings a wealth of knowledge and experience to her role at Life Unlimited. She provides a wide range of treatment to individuals and couples with various concerns including anxiety, depression, trauma, relationship difficulties, grief and loss, personal and work-related stress, parenting issues, adjustment and life transitions, sleep problems, phobias, substance abuse and many of life’s other challenges. Some of the approaches Aileen utilises in her work are: Cognitive Behavioural Therapy (CBT), Mindfulness Based Emotional Balance, Dialetical Behaviour Therapy (DBT), Eye Movement, Desensitisation and Reprocessing (EMDR), Compassion Based Therapy, Motivational Interviewing, Solutions Focussed Therapy, Hypnosis, and Acceptance and Commitment Therapy (ACT).",
      },
      {
        type: "p",
        text: "Aileen is a full member of the APS College of Clinical Psychologists, and is registered with the Psychology Board of Australia. She is also a registered provider with Medicare Australia. When not working, Aileen enjoys taking on new challenges – such as learning the cello, and loves travelling to the coast and overseas and filling her home with good people, fun activity, and joy.",
      },
    ],
  },
  {
    slug: "elizabeth-williams",
    name: "Elizabeth Williams",
    role: "Accredited Social Worker, Counsellor",
    image: "/images/people/elizabeth-williams.jpg",
    portrait: true,
    teaser:
      "Elizabeth has a breadth of experience working with individuals and families across the lifespan, and specialises in counselling adolescents and families.",
    bio: [
      {
        type: "p",
        text: "Elizabeth has a breadth of experience working with individuals and families across the lifespan. Elizabeth works with clients experiencing many life challenges and specialises in counselling adolescents and families, particularly those formed through adoption, out of home care, blended and separated families, or where there has been early childhood trauma.",
      },
      {
        type: "p",
        text: "This extends to working with clients experiencing infertility and those caught in behaviours stemming from unresolved childhood crisis. Elizabeth provides family therapy for those who need a little extra support in their relationships. She also provides support to people experiencing anxiety, depression, trauma, grief and loss, and personal and work-related stress.",
      },
      {
        type: "p",
        text: "Elizabeth has worked with not for profit, federal and state government agencies, and EAP companies, and brings to her practice an understanding of complex family dynamics and the systems around them. She is a qualified Workplace Assessor and Trainer and has trained and assessed in many settings including child protection, government agencies and the education sector.",
      },
      {
        type: "p",
        text: "Elizabeth’s practice is guided by a commitment to a number of key therapies and approaches that support relationships, and that are client centred. These include Cognitive Behavioural Therapy (CBT), Dyadic Developmental Therapy (DDT), Acceptance and Commitment Therapy (ACT), with a focus on strengths-based practice and attachment theory.",
      },
    ],
  },
  {
    slug: "lauren",
    name: "Lauren Palmer",
    role: "Registered Psychologist",
    image: "/images/people/lauren-palmer.jpeg",
    teaser:
      "Lauren is a registered psychologist with over 15 years’ experience working with individuals, families and children from all walks of life.",
    bio: [
      {
        type: "p",
        text: "Lauren is a registered psychologist with over 15 years’ experience working with individuals, families and children from all walks of life. Including people experiencing the day to day struggles of relationships, parenting and work/life, to those living with the consequences of poverty, disadvantage, trauma and complex trauma. Lauren believes that if people could be living their best life, they would – and she is passionate about helping them get to the life they want to live.",
      },
      {
        type: "p",
        text: "Lauren has extensive experience working with children and young people who display challenging or harmful behaviours and supporting those who care for them. Lauren also has experience working with adults experiencing the symptoms of anxiety and depression, as well as those struggling to understand what has happened to them, and why they do the things they do. Lauren has worked with parents post separation, often where conflict is high – and supported them to make decisions and take action in the best interest of their children, and themselves.",
      },
      {
        type: "p",
        text: "Lauren has worked in senior leadership and management roles in the Not For Profit (NFP) sector, working closely with government and non-government agencies to develop and provide services to various communities across Canberra.",
      },
      {
        type: "p",
        text: "In addition to her psychology qualification, Lauren holds diplomas in Youth Work and Community Services which she believes provides a well-rounded view of the practical and scientific elements of working with people.",
      },
      {
        type: "p",
        text: "Lauren loves music, singing and dancing (as long as no one is watching!), staying fit and healthy and spending time with her family and friends.",
      },
      {
        type: "p",
        text: "Lauren currently provides consultations via Telehealth (video call).",
      },
    ],
  },
  {
    slug: "orlie-beer",
    name: "Orlie Beer",
    role: "Registered Psychologist",
    image: "/images/people/orlie-beer.jpg",
    portrait: true,
    teaser:
      "Orlie Beer is a highly experienced psychologist with over 25 years of clinical practice, dedicated to helping individuals navigate life’s most challenging transitions.",
    bio: [
      {
        type: "p",
        text: "Orlie Beer is a psychologist with over 26 years of clinical experience, working with people through periods of change, loss, and disruption. She is a member of the Australian Psychological Society and an accredited trainer with the Black Dog Institute’s Workplace Programs.",
      },
      {
        type: "p",
        text: "Her work centres on helping people find their place on the map when things stop working in the usual way whether due to trauma, grief, chronic illness, neurodiversity, or work related pressures. She works with individuals, couples, children and parents, supporting relationship dynamics, family strain, parenting challenges, and identity shifts. With children and families, she focuses on making things more workable in real terms: helping parents understand what drives behaviour, reducing escalation, and restoring balance at home. Orlie also works directly with young children, addressing behavioural and developmental concerns. The overall focus is on clarity, consistency, and viability.",
      },
      {
        type: "p",
        text: "Orlie has worked across hospital, community health, and disability settings, including oncology, cardiology, rehabilitation, palliative care, and neurodiverse support. She provides therapy under Medicare and the NDIS, and works with EAP clients around workplace stress, career transitions, and professional identity.",
      },
      {
        type: "p",
        text: "While grounded in depth and complexity, Orlie’s approach is practical, systemic, solution focused, and humanistic.",
      },
      {
        type: "p",
        text: "In addition to her clinical work, Orlie supports organisations following critical incidents and high-pressure workplace events, facilitating structured debriefs and conversations that help people make sense of their experience, stabilise responses, and move forward. She brings a calm, practical approach focused on restoring clarity, psychological safety, and functional capacity within teams.",
      },
    ],
  },
];

export function getPerson(slug: string) {
  return PEOPLE.find((p) => p.slug === slug);
}
