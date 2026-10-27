
export type Dimension =
  | "education"
  | "interest"
  | "skill"
  | "workstyle"
  | "priority";

export type Option = {
  value: string;
  label: string;
  icon: string;
};

export type Question = {
  id: string;
  dimension: Dimension;
  weight: number;
  title: string;
  subtitle: string;
  options: Option[];
};

export type Career = {
  id: string;
  title: string;
  icon: string;
  category: string;
  description: string;
  education: string[];
  interests: string[];
  skills: string[];
  workstyles: string[];
  priorities: string[];
  learn: string[];
  nextStep: string;
};

export type Answers = Record<string, string>;

const education: Option[] = [
  { value: "technology", label: "IT & Computer Science", icon: "💻" },
  { value: "business", label: "Business & Commerce", icon: "📊" },
  { value: "science", label: "Science & Mathematics", icon: "🔬" },
  { value: "arts", label: "Arts & Humanities", icon: "🎨" },
  { value: "other", label: "Other / Still exploring", icon: "🎓" },
];

const interests: Option[] = [
  { value: "building", label: "Building technology", icon: "🛠️" },
  { value: "numbers", label: "Working with data", icon: "📈" },
  { value: "creative", label: "Designing & creating", icon: "✨" },
  { value: "helping", label: "Helping people", icon: "🤝" },
  { value: "business", label: "Business & strategy", icon: "🚀" },
  { value: "security", label: "Solving security problems", icon: "🔐" },
];

const skills: Option[] = [
  { value: "coding", label: "Programming & technology", icon: "⌨️" },
  { value: "analytical", label: "Analysis & problem solving", icon: "🧩" },
  { value: "creative", label: "Creative thinking", icon: "🎭" },
  { value: "communication", label: "Communication & teaching", icon: "💬" },
  { value: "leadership", label: "Leadership & organisation", icon: "🎯" },
];

const workstyles: Option[] = [
  { value: "independent", label: "Independent work", icon: "🎧" },
  { value: "team", label: "Team collaboration", icon: "👥" },
  { value: "people", label: "Working directly with people", icon: "🗣️" },
  { value: "research", label: "Research & investigation", icon: "🔍" },
];

const priorities: Option[] = [
  { value: "growth", label: "Learning & development", icon: "🌱" },
  { value: "creative", label: "Creative freedom", icon: "💡" },
  { value: "impact", label: "Making a positive impact", icon: "🌍" },
  { value: "flexibility", label: "Flexibility & independence", icon: "🏡" },
  { value: "leadership", label: "Leadership & responsibility", icon: "🏆" },
];


export const questions: Question[] = [
  {
    id: "q1",
    dimension: "education",
    weight: 2,
    title: "What is your educational background?",
    subtitle: "Select the field closest to your studies.",
    options: education,
  },
  {
    id: "q2",
    dimension: "interest",
    weight: 4,
    title: "Which field interests you most?",
    subtitle: "Choose the area you would enjoy exploring.",
    options: interests,
  },
  {
    id: "q3",
    dimension: "skill",
    weight: 4,
    title: "What is your strongest ability?",
    subtitle: "Choose what you believe you do best.",
    options: skills,
  },
  {
    id: "q4",
    dimension: "workstyle",
    weight: 2,
    title: "How do you prefer working?",
    subtitle: "Consider your ideal working environment.",
    options: workstyles,
  },
  {
    id: "q5",
    dimension: "priority",
    weight: 2,
    title: "What matters most in your future career?",
    subtitle: "Choose your most important career priority.",
    options: priorities,
  },
  {
    id: "q6",
    dimension: "interest",
    weight: 3,
    title: "Which project would you enjoy completing?",
    subtitle: "Imagine choosing a project for yourself.",
    options: [
      { value: "building", label: "Developing an application", icon: "💻" },
      { value: "numbers", label: "Analysing a dataset", icon: "📊" },
      { value: "creative", label: "Designing a digital product", icon: "🎨" },
      { value: "helping", label: "Creating educational material", icon: "📚" },
      { value: "business", label: "Developing a business plan", icon: "💼" },
      { value: "security", label: "Investigating digital security", icon: "🛡️" },
    ],
  },
  {
    id: "q7",
    dimension: "skill",
    weight: 2,
    title: "How do you usually approach a challenging task?",
    subtitle: "Select the approach that feels natural to you.",
    options: [
      { value: "coding", label: "Build a technical solution", icon: "⚙️" },
      { value: "analytical", label: "Study evidence and patterns", icon: "🔍" },
      { value: "creative", label: "Think of an original solution", icon: "💡" },
      { value: "communication", label: "Discuss and explain ideas", icon: "💬" },
      { value: "leadership", label: "Organise a plan of action", icon: "📋" },
    ],
  },
  {
    id: "q8",
    dimension: "priority",
    weight: 2,
    title: "What kind of achievement would satisfy you most?",
    subtitle: "Choose the outcome that motivates you.",
    options: [
      { value: "growth", label: "Becoming highly skilled in my field", icon: "🌱" },
      { value: "creative", label: "Creating something original", icon: "✨" },
      { value: "impact", label: "Making a positive difference", icon: "🌍" },
      { value: "flexibility", label: "Building an independent career", icon: "🏡" },
      { value: "leadership", label: "Successfully leading a team", icon: "🏆" },
    ],
  },
];


export const careers: Career[] = [
  {
    id: "software",
    title: "Software Developer",
    icon: "💻",
    category: "Technology",
    description: "Designs, develops, tests and maintains software applications.",
    education: ["technology", "science"],
    interests: ["building"],
    skills: ["coding", "analytical"],
    workstyles: ["independent", "team"],
    priorities: ["growth", "flexibility"],
    learn: ["Programming", "JavaScript", "Git", "React"],
    nextStep: "Build a simple working application and publish its code.",
  },
  {
    id: "data",
    title: "Data Analyst",
    icon: "📊",
    category: "Data & Analytics",
    description: "Uses data to identify trends and support decision-making.",
    education: ["technology", "business", "science"],
    interests: ["numbers"],
    skills: ["analytical", "coding"],
    workstyles: ["independent", "research"],
    priorities: ["growth", "impact"],
    learn: ["Excel", "SQL", "Statistics", "Power BI"],
    nextStep: "Create a dashboard using a public dataset.",
  },
  {
    id: "cyber",
    title: "Cybersecurity Analyst",
    icon: "🛡️",
    category: "Technology",
    description: "Helps protect digital systems, networks and information.",
    education: ["technology", "science"],
    interests: ["security", "building"],
    skills: ["analytical", "coding"],
    workstyles: ["research", "team"],
    priorities: ["growth", "impact"],
    learn: ["Networking", "Linux", "Security principles"],
    nextStep: "Practise security fundamentals in an authorised lab.",
  },
  {
    id: "design",
    title: "UI/UX Designer",
    icon: "🎨",
    category: "Design",
    description: "Creates attractive, accessible and usable digital experiences.",
    education: ["arts", "technology", "other"],
    interests: ["creative", "building"],
    skills: ["creative", "communication"],
    workstyles: ["independent", "team"],
    priorities: ["creative", "flexibility"],
    learn: ["Figma", "Wireframing", "User research"],
    nextStep: "Redesign a website interface and document your decisions.",
  },
  {
    id: "marketing",
    title: "Digital Marketing Specialist",
    icon: "📣",
    category: "Marketing",
    description: "Plans and evaluates digital campaigns for businesses.",
    education: ["business", "arts", "technology", "other"],
    interests: ["business", "creative"],
    skills: ["creative", "communication", "analytical"],
    workstyles: ["team", "people"],
    priorities: ["growth", "creative", "flexibility"],
    learn: ["SEO", "Content marketing", "Analytics"],
    nextStep: "Create a sample marketing campaign.",
  },
  {
    id: "analyst",
    title: "Business Analyst",
    icon: "📈",
    category: "Business",
    description: "Analyses business processes and recommends improvements.",
    education: ["business", "technology", "science"],
    interests: ["business", "numbers"],
    skills: ["analytical", "communication", "leadership"],
    workstyles: ["team", "research"],
    priorities: ["growth", "leadership"],
    learn: ["Excel", "Business processes", "Requirements analysis"],
    nextStep: "Analyse a business problem and recommend a solution.",
  },
  {
    id: "teacher",
    title: "Educator / Teacher",
    icon: "📚",
    category: "Education",
    description: "Supports students through teaching and assessment.",
    education: ["arts", "science", "technology", "business", "other"],
    interests: ["helping"],
    skills: ["communication"],
    workstyles: ["people", "team"],
    priorities: ["impact", "growth"],
    learn: ["Lesson planning", "Communication", "Assessment"],
    nextStep: "Prepare and deliver a short sample lesson.",
  },
  {
    id: "research",
    title: "Research Scientist",
    icon: "🔬",
    category: "Research",
    description: "Investigates research questions using systematic methods.",
    education: ["science", "technology"],
    interests: ["numbers", "helping", "security"],
    skills: ["analytical"],
    workstyles: ["research", "independent"],
    priorities: ["impact", "growth"],
    learn: ["Research methods", "Statistics", "Scientific writing"],
    nextStep: "Read a research paper and identify a research question.",
  },
  {
    id: "manager",
    title: "Project Manager",
    icon: "🗂️",
    category: "Management",
    description: "Coordinates projects, people, tasks, budgets and timelines.",
    education: ["business", "technology", "arts", "other"],
    interests: ["business", "helping"],
    skills: ["leadership", "communication"],
    workstyles: ["team", "people"],
    priorities: ["leadership", "growth"],
    learn: ["Planning", "Agile", "Risk management"],
    nextStep: "Create a project schedule with tasks and milestones.",
  },
  {
    id: "writer",
    title: "Content Writer",
    icon: "✍️",
    category: "Communication",
    description: "Creates written content for organisations and audiences.",
    education: ["arts", "business", "other"],
    interests: ["creative", "helping"],
    skills: ["communication", "creative"],
    workstyles: ["independent", "people"],
    priorities: ["creative", "flexibility"],
    learn: ["Writing", "Editing", "Content strategy"],
    nextStep: "Write three samples for your professional portfolio.",
  },
];

const careerFields: Record<Dimension, keyof Pick<
  Career,
  "education" | "interests" | "skills" | "workstyles" | "priorities"
>> = {
  education: "education",
  interest: "interests",
  skill: "skills",
  workstyle: "workstyles",
  priority: "priorities",
};

export type CareerMatch = Career & {
  score: number;
  percentage: number;
  reasons: string[];
};

export function getMatches(answers: Answers): CareerMatch[] {
  const completed = questions.filter((q) => Boolean(answers[q.id]));

  const maximum = completed.reduce((sum, q) => sum + q.weight, 0);

  return careers
    .map((career) => {
      let score = 0;
      const reasonDimensions = new Set<Dimension>();

      for (const question of completed) {
        const selected = answers[question.id];
        const field = careerFields[question.dimension];

        if (career[field].includes(selected)) {
          score += question.weight;
          reasonDimensions.add(question.dimension);
        }
      }

      const reasonLabels: Record<Dimension, string> = {
        education: "Related to your educational background",
        interest: "Matches your selected interests",
        skill: "Uses your preferred skills",
        workstyle: "Supports your working preferences",
        priority: "Aligns with your career priorities",
      };

      return {
        ...career,
        score,
        percentage: maximum ? Math.round((score / maximum) * 100) : 0,
        reasons: [...reasonDimensions].map((dimension) => reasonLabels[dimension]),
      };
    })
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, 3);
}
