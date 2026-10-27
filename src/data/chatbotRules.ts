
export type ChatRule = {
  id: string;
  category: string;
  question: string;
  alternatives: string[];
  answer: string;
};

export const chatbotRules: ChatRule[] = [
  {
    id: "CP001",
    category: "Career Planning",
    question: "What is career planning?",
    alternatives: ["Explain career planning"],
    answer: "Career planning is the process of identifying your interests, skills, values, and goals, then exploring suitable occupations. It involves researching career paths, gaining relevant qualifications or experience, and reviewing your plans over time.",
  },
  {
    id: "CP002",
    category: "Career Planning",
    question: "How do I choose a career?",
    alternatives: ["How can I select a career?"],
    answer: "Identify what you enjoy, what you do well, and what matters to you at work. Research several careers, compare their daily responsibilities and entry requirements, and try practical activities or short courses before making a decision.",
  },
  {
    id: "CP003",
    category: "Career Planning",
    question: "Can I change my career?",
    alternatives: ["Is changing careers possible?"],
    answer: "Yes. Many people move into different careers. First identify your transferable skills, review the requirements of the new field, develop any missing skills, and seek practical experience. Some regulated professions require specific qualifications or licensing.",
  },
  {
    id: "CP004",
    category: "Career Planning",
    question: "What are transferable skills?",
    alternatives: ["Explain transferable skills"],
    answer: "Transferable skills are abilities useful in many jobs, such as communication, teamwork, problem solving, time management, and leadership. They can support career changes and help you adapt to new roles.",
  },
  {
    id: "CP005",
    category: "Career Planning",
    question: "How do I identify my strengths?",
    alternatives: ["How can I find my strengths?"],
    answer: "Review tasks you complete well, subjects you enjoy, and feedback you receive. Think about your achievements and ask teachers or colleagues for examples of your abilities. Practical experiences can reveal strengths you have not yet recognised.",
  },
  {
    id: "CP006",
    category: "Software Development",
    question: "What does a software developer do?",
    alternatives: ["What is the role of a software developer?"],
    answer: "A software developer designs, builds, tests, and maintains applications. Their work can involve coding, debugging, reviewing requirements, documenting software, and collaborating with other technical professionals.",
  },
  {
    id: "CP007",
    category: "Software Development",
    question: "How do I become a software developer?",
    alternatives: ["How can I start a software development career?"],
    answer: "Learn programming fundamentals, choose a language such as Python or JavaScript, practise solving problems, and build projects. Learn Git and basic testing. A relevant degree is useful for many positions, while some employers also consider strong practical portfolios.",
  },
  {
    id: "CP008",
    category: "Software Development",
    question: "Which programming language should I learn first?",
    alternatives: ["What programming language is best for beginners?"],
    answer: "Python is a suitable starting point for general programming, automation, and data work. JavaScript is especially useful for web development. Choose based on your goals and focus on programming concepts rather than learning many languages at once.",
  },
  {
    id: "CP009",
    category: "Software Development",
    question: "What is frontend development?",
    alternatives: ["Explain frontend development"],
    answer: "Frontend development focuses on the visual and interactive parts of websites and applications. Common technologies are HTML, CSS, JavaScript, and frameworks such as React. Frontend developers also consider responsive design and accessibility.",
  },
  {
    id: "CP010",
    category: "Software Development",
    question: "What is backend development?",
    alternatives: ["Explain backend development"],
    answer: "Backend development handles server-side operations such as application logic, database access, authentication, and communication between services. Technologies may include Node.js, Python, Java, and SQL databases.",
  },
  {
    id: "CP011",
    category: "Data Analytics",
    question: "What does a data analyst do?",
    alternatives: ["What is the role of a data analyst?"],
    answer: "A data analyst collects, prepares, examines, and communicates data to help answer questions and support decisions. Common tasks include cleaning datasets, calculating statistics, identifying trends, and creating reports or dashboards.",
  },
  {
    id: "CP012",
    category: "Data Analytics",
    question: "What skills does a data analyst need?",
    alternatives: ["Which skills are required for data analytics?"],
    answer: "Useful skills include Excel, SQL, data cleaning, basic statistics, visualisation, and communication. Python or R can be valuable for more complex tasks. Requirements vary by industry and the specific job.",
  },
  {
    id: "CP013",
    category: "Data Analytics",
    question: "How do I become a data analyst?",
    alternatives: ["How can I start a career in data analytics?"],
    answer: "Start with spreadsheet analysis and descriptive statistics. Learn SQL, explore visualisation tools such as Power BI, and analyse real datasets. Build a portfolio that explains the question, methods, findings, and limitations of each project.",
  },
  {
    id: "CP014",
    category: "Data Analytics",
    question: "What is the difference between a data analyst and a data scientist?",
    alternatives: ["Compare data analyst and data scientist"],
    answer: "Data analysts often focus on explaining patterns in existing data and presenting useful findings. Data scientists may also build predictive models and use advanced statistics or machine learning. There is overlap, and job descriptions vary between employers.",
  },
  {
    id: "CP015",
    category: "Data Analytics",
    question: "Is SQL important for data analysts?",
    alternatives: ["Do data analysts need SQL?"],
    answer: "SQL is commonly used to retrieve, filter, join, and summarise data in relational databases. It is a valuable skill for many data analyst roles, although some positions rely mainly on spreadsheets or specialised analytical software.",
  },
  {
    id: "CP016",
    category: "Cybersecurity",
    question: "What is cybersecurity?",
    alternatives: ["Explain cybersecurity"],
    answer: "Cybersecurity involves protecting computer systems, networks, applications, and information from digital threats. It includes prevention, monitoring, access control, incident response, and user awareness.",
  },
  {
    id: "CP017",
    category: "Cybersecurity",
    question: "What does a cybersecurity analyst do?",
    alternatives: ["What is the role of a cybersecurity analyst?"],
    answer: "A cybersecurity analyst monitors systems for threats, investigates suspicious activity, reviews security controls, and helps respond to incidents. The exact responsibilities depend on the organisation and specialisation.",
  },
  {
    id: "CP018",
    category: "Cybersecurity",
    question: "How do I start learning cybersecurity?",
    alternatives: ["How can I begin studying cybersecurity?"],
    answer: "Begin with computer networking, operating systems, Linux, and common security principles. Learn how vulnerabilities and protective controls work. Practise only on systems you own or are explicitly authorised to test.",
  },
  {
    id: "CP019",
    category: "Cybersecurity",
    question: "What is ethical hacking?",
    alternatives: ["Explain ethical hacking"],
    answer: "Ethical hacking is authorised testing of computer systems to identify security weaknesses. It requires clear permission and defined boundaries. Its purpose is to help organisations improve security, not gain unauthorised access.",
  },
  {
    id: "CP020",
    category: "Design",
    question: "What does a UI/UX designer do?",
    alternatives: ["What is the job of a UX designer?"],
    answer: "UI/UX designers work to make digital products useful, understandable, and easy to interact with. Their tasks may include user research, wireframing, interface design, prototyping, and usability testing.",
  },
  {
    id: "CP021",
    category: "Design",
    question: "What is the difference between UI and UX?",
    alternatives: ["Compare UI and UX design"],
    answer: "UI, or User Interface, concerns the presentation and interactive controls of a product. UX, or User Experience, considers the broader experience of using it, including ease of use, navigation, user needs, and satisfaction.",
  },
  {
    id: "CP022",
    category: "Design",
    question: "How do I become a UI/UX designer?",
    alternatives: ["How can I start UI UX design?"],
    answer: "Learn design principles, user research, accessibility, and prototyping. Practise with a tool such as Figma. Create portfolio case studies showing the problem, research, design decisions, and improvements made.",
  },
  {
    id: "CP023",
    category: "Marketing",
    question: "What is digital marketing?",
    alternatives: ["Explain digital marketing"],
    answer: "Digital marketing is the promotion of products, services, or organisations through online channels. Examples include search engines, websites, email, social media, and digital advertising.",
  },
  {
    id: "CP024",
    category: "Marketing",
    question: "What does an SEO specialist do?",
    alternatives: ["What is the role of an SEO specialist?"],
    answer: "An SEO specialist works on improving website visibility in unpaid search results. Their activities may include keyword research, content optimisation, website audits, technical improvements, and performance monitoring.",
  },
  {
    id: "CP025",
    category: "Marketing",
    question: "How do I become a digital marketer?",
    alternatives: ["How can I start digital marketing?"],
    answer: "Learn basic marketing principles, content strategy, search engine optimisation, advertising, and analytics. Create sample campaigns, evaluate their results, and develop examples of your practical work.",
  },
  {
    id: "CP026",
    category: "Business",
    question: "What does a business analyst do?",
    alternatives: ["What is the role of a business analyst?"],
    answer: "A business analyst identifies organisational needs, examines existing processes, gathers requirements, and helps define potential improvements. Their work often involves communication, documentation, and structured analysis.",
  },
  {
    id: "CP027",
    category: "Business",
    question: "What does a project manager do?",
    alternatives: ["What is the role of a project manager?"],
    answer: "A project manager coordinates activities needed to achieve project objectives. Responsibilities can include scheduling, managing resources, monitoring risks, communicating with stakeholders, and tracking progress.",
  },
  {
    id: "CP028",
    category: "Education",
    question: "How do I become a teacher?",
    alternatives: ["What do I need to become a teacher?"],
    answer: "Teaching requirements depend on the country, subject, and institution. They may include a relevant degree, recognised teacher training, supervised practice, or registration. Subject knowledge and communication skills are essential foundations.",
  },
  {
    id: "CP029",
    category: "Research",
    question: "How do I become a research scientist?",
    alternatives: ["How can I start a research career?"],
    answer: "Build strong subject knowledge and learn research methods, statistics, and scientific writing. Seek laboratory or research-project experience where relevant. Many research scientist positions require postgraduate qualifications.",
  },
  {
    id: "CP030",
    category: "Employment",
    question: "How do I write a CV?",
    alternatives: ["How can I prepare my CV?"],
    answer: "Organise your CV into clear sections such as contact details, education, experience, skills, and projects. Include relevant achievements, use accurate information, and tailor the document to the position. Proofread before applying.",
  },
  {
    id: "CP031",
    category: "Employment",
    question: "What is the difference between a CV and a resume?",
    alternatives: ["Compare CV and resume"],
    answer: "The terminology varies by country. In some places the terms are interchangeable. In US academic settings, a CV usually provides a detailed academic record, while a resume is generally shorter and tailored to a particular job.",
  },
  {
    id: "CP032",
    category: "Employment",
    question: "How do I prepare for a job interview?",
    alternatives: ["How should I prepare for an interview?"],
    answer: "Research the organisation, review the job description, and practise likely questions. Prepare examples of your work using the Situation, Task, Action, Result approach. Be ready to discuss your skills honestly and ask relevant questions.",
  },
  {
    id: "CP033",
    category: "Employment",
    question: "How do I find an internship?",
    alternatives: ["How can I get an internship?"],
    answer: "Identify companies and organisations related to your interests. Prepare a focused CV and look for opportunities through university career services, company recruitment pages, and professional contacts. Check eligibility requirements carefully.",
  },
  {
    id: "CP034",
    category: "Employment",
    question: "Can I get a job without experience?",
    alternatives: ["How can I get my first job?"],
    answer: "Some entry-level jobs accept applicants without previous employment experience. Academic projects, internships, volunteering, and personal portfolios can demonstrate relevant skills. Focus on positions whose essential requirements you meet.",
  },
  {
    id: "CP035",
    category: "Employment",
    question: "What should I include in a portfolio?",
    alternatives: ["How do I build a professional portfolio?"],
    answer: "Include relevant projects, brief explanations of your contributions, tools used, challenges faced, and outcomes achieved. Present authentic work and make it easy for employers to understand what you can do.",
  },
  {
    id: "CP036",
    category: "Professional Skills",
    question: "What are soft skills?",
    alternatives: ["Explain soft skills"],
    answer: "Soft skills include communication, teamwork, adaptability, organisation, and problem solving. They complement technical knowledge and are useful in many workplaces.",
  },
  {
    id: "CP037",
    category: "Professional Skills",
    question: "How do I improve my communication skills?",
    alternatives: ["How can I communicate better at work?"],
    answer: "Practise active listening, clear speaking, concise writing, and asking questions. Group discussions, presentations, feedback, and regular practice can help improve confidence and clarity.",
  },
  {
    id: "CP038",
    category: "Professional Skills",
    question: "How do I improve my problem-solving skills?",
    alternatives: ["How can I become better at problem solving?"],
    answer: "Define the problem, gather information, break it into manageable parts, compare possible solutions, test your approach, and review the result. Apply this method to practical problems regularly.",
  },
  {
    id: "CP039",
    category: "Career Planning",
    question: "Are CareerPath recommendations guaranteed to be correct?",
    alternatives: ["Are career recommendations always accurate?"],
    answer: "No. CareerPath uses predefined rules and answers selected by the user. The results are educational suggestions, not scientifically validated aptitude measurements, professional assessments, or guarantees of employment.",
  },
  {
    id: "CP040",
    category: "Career Planning",
    question: "How does CareerPath recommend careers?",
    alternatives: ["How does the career matching system work?"],
    answer: "CareerPath compares answers from its 15-question assessment with predefined career attributes. Matching answers add weighted points, and careers are ranked by their scores. The percentages show alignment with those rules, not probabilities of future success.",
  },
];

export type BotResult = {
  status: "matched" | "clarification" | "unknown" | "empty";
  reply: string;
  suggestions: ChatRule[];
  matchedId?: string;
};

export function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const stopWords = new Set([
  "what", "how", "does", "do", "the", "a", "an", "is", "are",
  "can", "i", "my", "me", "you", "your", "to", "for", "of",
  "in", "about", "should", "which", "and", "it", "with",
]);

function significantWords(text: string): Set<string> {
  return new Set(
    normalize(text)
      .split(" ")
      .filter((word) => word.length > 2 && !stopWords.has(word))
  );
}

export function findBotResponse(input: string): BotResult {
  const message = normalize(input);

  if (!message) {
    return {
      status: "empty",
      reply: "Please enter a career-related question.",
      suggestions: [],
    };
  }

  // Rule 1: exact approved question or alternative.
  const exact = chatbotRules.filter((rule) =>
    [rule.question, ...rule.alternatives]
      .map(normalize)
      .includes(message)
  );

  if (exact.length === 1) {
    return {
      status: "matched",
      reply: exact[0].answer,
      suggestions: [],
      matchedId: exact[0].id,
    };
  }

  if (exact.length > 1) {
    return {
      status: "clarification",
      reply: "More than one question matches. Please select one.",
      suggestions: exact,
    };
  }

  // Rule 2: similarity is used only for suggestions.
  // It must never automatically select an answer.
  const queryWords = significantWords(message);

  const ranked = chatbotRules
    .map((rule) => {
      const phrases = [rule.question, ...rule.alternatives];

      const similarity = Math.max(
        ...phrases.map((phrase) => {
          const words = significantWords(phrase);
          const overlap = [...queryWords].filter((w) => words.has(w)).length;
          const union = new Set([...queryWords, ...words]).size;
          return union ? overlap / union : 0;
        })
      );

      return { rule, similarity };
    })
    .filter((item) => item.similarity >= 0.25)
    .sort(
      (a, b) =>
        b.similarity - a.similarity ||
        a.rule.id.localeCompare(b.rule.id)
    )
    .slice(0, 4);

  if (ranked.length > 0) {
    return {
      status: "clarification",
      reply: "I found some related questions. Please choose the one you intended so I can give you its dedicated answer.",
      suggestions: ranked.map((item) => item.rule),
    };
  }

  return {
    status: "unknown",
    reply: "I do not have a dedicated answer for that question yet. Please select a supported question below.",
    suggestions: [
      chatbotRules[1],
      chatbotRules[12],
      chatbotRules[31],
    ],
  };
}
