
"use client";

import { useEffect, useRef, useState } from "react";
import {
  type Answers,
  careers,
  getMatches,
  questions,
} from "@/data/careers";
import {
  type ChatRule,
  chatbotRules,
  findBotResponse,
} from "@/data/chatbotRules";

type Screen = "home" | "quiz" | "results" | "explore";
type Message = {
  id: number;
  role: "bot" | "user";
  content: string;
};

const initialAnswers: Answers = Object.fromEntries(
  questions.map((question) => [question.id, ""])
);

const starterQuestions = [
  chatbotRules[1],
  chatbotRules[6],
  chatbotRules[12],
  chatbotRules[31],
];

export default function Home() {
  const [screen, setScreen] = useState<Screen>("home");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(initialAnswers);

  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [libraryOpen, setLibraryOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [suggestions, setSuggestions] = useState<ChatRule[]>([]);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: "bot",
      content:
        "Hello! I'm CareerPath Assistant. Select a question from the knowledge base, or type your own question. I'll only give an answer when I can match it to an approved rule.",
    },
  ]);

  const messagesEnd = useRef<HTMLDivElement>(null);
  const messageId = useRef(1);

  const currentQuestion = questions[step];
  const matches = getMatches(answers);

  const categories = [
    "All",
    ...new Set(chatbotRules.map((rule) => rule.category)),
  ];

  const visibleRules = chatbotRules.filter((rule) => {
    const categoryMatch =
      category === "All" || rule.category === category;
    const searchMatch =
      `${rule.question} ${rule.category}`
        .toLowerCase()
        .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  useEffect(() => {
    if (chatOpen) {
      messagesEnd.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [chatOpen, messages, suggestions]);

  function navigate(next: Screen) {
    setScreen(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function startQuiz() {
    setAnswers({ ...initialAnswers });
    setStep(0);
    navigate("quiz");
  }

  function chooseAnswer(value: string) {
    setAnswers((previous) => ({
      ...previous,
      [currentQuestion.id]: value,
    }));

    if (step === questions.length - 1) {
      navigate("results");
    } else {
      setStep((previous) => previous + 1);
    }
  }

  function goBack() {
    if (step > 0) {
      setStep((previous) => previous - 1);
    } else {
      navigate("home");
    }
  }

  function appendMessage(role: Message["role"], content: string) {
    const id = messageId.current++;
    setMessages((previous) => [
      ...previous,
      { id, role, content },
    ]);
  }

  function sendMessage(text?: string) {
    const value = (text ?? chatInput).trim();
    if (!value) return;

    const response = findBotResponse(value);

    appendMessage("user", value);
    appendMessage("bot", response.reply);

    setSuggestions(response.suggestions);
    setChatInput("");
    setLibraryOpen(false);
    setChatOpen(true);
  }

  function selectRule(rule: ChatRule) {
    // Selecting a known rule retrieves its own answer directly.
    appendMessage("user", rule.question);
    appendMessage("bot", rule.answer);
    setSuggestions([]);
    setLibraryOpen(false);
    setChatInput("");
    setChatOpen(true);
  }

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 md:px-10">
          <button
            onClick={() => navigate("home")}
            className="flex items-center gap-3"
            aria-label="CareerPath home"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 text-xl font-black text-white shadow-lg shadow-indigo-200">
              C
            </span>
            <span className="text-xl font-black tracking-tight">
              Career<span className="text-indigo-600">Path</span>
            </span>
          </button>

          <nav
            className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex"
            aria-label="Main navigation"
          >
            <button onClick={() => navigate("home")} className="hover:text-indigo-600">
              Home
            </button>
            <button onClick={() => navigate("explore")} className="hover:text-indigo-600">
              Careers
            </button>
            <button onClick={() => setChatOpen(true)} className="hover:text-indigo-600">
              Chatbot
            </button>
          </nav>

          <button
            onClick={startQuiz}
            className="rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-indigo-600 sm:px-6"
          >
            Take Assessment ↗
          </button>
        </div>
      </header>

      <main>
        {/* HOME */}
        {screen === "home" && (
          <>
            <section className="relative overflow-hidden">
              <div className="pointer-events-none absolute -right-20 top-10 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />
              <div className="pointer-events-none absolute -left-20 top-64 h-80 w-80 rounded-full bg-cyan-100 blur-3xl" />

              <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 md:px-10 lg:grid-cols-2 lg:py-32">
                <div>
                  <span className="inline-flex rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-indigo-700">
                    ✦ Discover your potential
                  </span>

                  <h1 className="mt-8 text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                    Find your
                    <br />
                    future.
                    <br />
                    <span className="bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">
                      Find your path.
                    </span>
                  </h1>

                  <p className="mt-7 max-w-lg text-lg leading-8 text-slate-600">
                    Explore career opportunities, understand your strengths,
                    and discover professional directions with a transparent
                    rule-based guidance system.
                  </p>

                  <div className="mt-9 flex flex-wrap gap-4">
                    <button
                      onClick={startQuiz}
                      className="rounded-2xl bg-indigo-600 px-7 py-4 font-bold text-white shadow-xl shadow-indigo-200 transition hover:-translate-y-1 hover:bg-indigo-700"
                    >
                      Start Career Assessment →
                    </button>
                    <button
                      onClick={() => setChatOpen(true)}
                      className="rounded-2xl border border-slate-200 bg-white px-7 py-4 font-bold transition hover:border-indigo-300 hover:text-indigo-600"
                    >
                      Ask CareerPath
                    </button>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-5 text-sm font-semibold text-slate-500">
                    <span>✓ 8 questions</span>
                    <span>✓ Free to use</span>
                    <span>✓ No registration</span>
                  </div>
                </div>

                <div className="relative mx-auto w-full max-w-lg">
                  <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-2xl shadow-indigo-100 sm:p-9">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-extrabold uppercase tracking-widest text-indigo-600">
                          Career Discovery
                        </p>
                        <h2 className="mt-2 text-2xl font-black">
                          Explore your possibilities
                        </h2>
                      </div>
                      <span className="rounded-2xl bg-indigo-50 p-4 text-3xl">
                        🎯
                      </span>
                    </div>

                    <p className="mt-5 text-sm text-slate-500">
                      Example careers from our knowledge base
                    </p>

                    {careers.slice(0, 4).map((career, i) => (
                      <div
                        key={career.id}
                        className="mt-3 flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-4"
                      >
                        <span className="rounded-xl bg-white p-3 text-2xl">
                          {career.icon}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="font-extrabold">{career.title}</p>
                          <p className="text-xs text-slate-500">
                            {career.category}
                          </p>
                        </div>
                        <span className="font-bold text-indigo-500">
                          0{i + 1}
                        </span>
                      </div>
                    ))}

                    <div className="mt-7 flex items-center justify-between rounded-2xl bg-indigo-600 p-5 text-white">
                      <div>
                        <p className="text-sm font-extrabold">
                          Your journey starts here
                        </p>
                        <p className="mt-1 text-xs text-indigo-100">
                          Get educational career suggestions
                        </p>
                      </div>
                      <span className="text-3xl">↗</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FEATURES */}
            <section className="bg-white py-20">
              <div className="mx-auto max-w-7xl px-5 md:px-10">
                <div className="text-center">
                  <p className="text-sm font-extrabold uppercase tracking-widest text-indigo-600">
                    How it works
                  </p>
                  <h2 className="mt-3 text-3xl font-black md:text-4xl">
                    A clearer path to your future
                  </h2>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-3">
                  {[
                    {
                      icon: "📝",
                      title: "Complete your assessment",
                      text: "Answer 15 questions about your education, interests, skills, and career preferences.",
                    },
                    {
                      icon: "📊",
                      title: "See rule-based matches",
                      text: "Our matching engine evaluates your answers against predefined career profiles.",
                    },
                    {
                      icon: "💬",
                      title: "Explore with the chatbot",
                      text: "Select from 40 dedicated questions and receive clear, topic-specific answers.",
                    },
                  ].map((feature, i) => (
                    <div
                      key={feature.title}
                      className="rounded-3xl border border-slate-100 bg-[#f8faff] p-8 transition hover:-translate-y-1 hover:shadow-xl"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-4xl">{feature.icon}</span>
                        <span className="text-4xl font-black text-slate-200">
                          0{i + 1}
                        </span>
                      </div>
                      <h3 className="mt-8 text-xl font-black">
                        {feature.title}
                      </h3>
                      <p className="mt-4 leading-7 text-slate-500">
                        {feature.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="mx-auto max-w-7xl px-5 py-20 md:px-10">
              <div className="rounded-[2rem] bg-gradient-to-br from-slate-900 to-indigo-950 px-8 py-16 text-center text-white">
                <span className="text-5xl">🚀</span>
                <h2 className="mt-6 text-3xl font-black md:text-5xl">
                  Ready to discover your direction?
                </h2>
                <p className="mx-auto mt-5 max-w-lg leading-7 text-indigo-100">
                  Discover potential career paths with our interactive
                  assessment and career guidance chatbot.
                </p>
                <button
                  onClick={startQuiz}
                  className="mt-8 rounded-2xl bg-white px-8 py-4 font-extrabold text-indigo-700 transition hover:bg-indigo-50"
                >
                  Begin Assessment →
                </button>
              </div>
            </section>
          </>
        )}

        {/* ASSESSMENT */}
        {screen === "quiz" && (
          <section className="mx-auto min-h-[75vh] max-w-3xl px-5 py-14 md:py-20">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm font-extrabold text-indigo-600">
                CAREER ASSESSMENT
              </span>
              <span className="text-sm font-bold text-slate-500">
                {step + 1} / {questions.length}
              </span>
            </div>

            <div className="mb-10 h-2 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-indigo-600 transition-all duration-300"
                style={{
                  width: `${((step + 1) / questions.length) * 100}%`,
                }}
              />
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-100 md:p-12">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-2xl">
                🎯
              </div>

              <h1 className="text-3xl font-black leading-tight md:text-4xl">
                {currentQuestion.title}
              </h1>

              <p className="mt-4 text-slate-500">
                {currentQuestion.subtitle}
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {currentQuestion.options.map((option) => {
                  const selected =
                    answers[currentQuestion.id] === option.value;

                  return (
                    <button
                      key={option.value}
                      onClick={() => chooseAnswer(option.value)}
                      className={`flex min-h-24 items-center gap-4 rounded-2xl border-2 p-5 text-left transition ${
                        selected
                          ? "border-indigo-500 bg-indigo-50"
                          : "border-slate-100 hover:border-indigo-400 hover:bg-indigo-50"
                      }`}
                    >
                      <span className="text-3xl">{option.icon}</span>
                      <span className="font-bold text-slate-700">
                        {option.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-9 flex items-center justify-between">
                <button
                  onClick={goBack}
                  className="text-sm font-bold text-slate-500 hover:text-indigo-600"
                >
                  ← {step === 0 ? "Back to home" : "Previous question"}
                </button>
                <span className="text-xs font-medium text-slate-400">
                  Select an answer to continue
                </span>
              </div>
            </div>
          </section>
        )}

        {/* RECOMMENDATIONS */}
        {screen === "results" && (
          <section className="mx-auto max-w-7xl px-5 py-16 md:px-10">
            <div className="text-center">
              <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
                ✓ Assessment complete
              </span>
              <h1 className="mt-7 text-4xl font-black md:text-5xl">
                Your career matches
              </h1>
              <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-500">
                These three careers have the strongest alignment with
                your answers according to our predefined rules.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {matches.map((career, index) => (
                <article
                  key={career.id}
                  className={`rounded-[2rem] border bg-white p-7 shadow-lg shadow-slate-100 ${
                    index === 0
                      ? "border-indigo-400 ring-2 ring-indigo-100"
                      : "border-slate-200"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="rounded-2xl bg-indigo-50 p-4 text-4xl">
                      {career.icon}
                    </div>
                    {index === 0 && (
                      <span className="rounded-full bg-indigo-600 px-3 py-2 text-xs font-black text-white">
                        TOP MATCH
                      </span>
                    )}
                  </div>

                  <p className="mt-7 text-xs font-extrabold uppercase tracking-widest text-indigo-600">
                    {career.category}
                  </p>
                  <h2 className="mt-2 text-2xl font-black">{career.title}</h2>
                  <p className="mt-3 min-h-20 leading-7 text-slate-500">
                    {career.description}
                  </p>

                  <div className="mt-7 flex items-end justify-between">
                    <span className="text-sm font-semibold text-slate-500">
                      Rule alignment
                    </span>
                    <span className="text-3xl font-black text-indigo-600">
                      {career.percentage}%
                    </span>
                  </div>

                  <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-cyan-400"
                      style={{ width: `${career.percentage}%` }}
                    />
                  </div>

                  <div className="mt-8 border-t border-slate-100 pt-6">
                    <h3 className="font-black">Why this career matches</h3>
                    <div className="mt-4 space-y-3">
                      {career.reasons.length > 0 ? (
                        career.reasons.map((reason) => (
                          <p key={reason} className="text-sm text-slate-600">
                            <span className="mr-2 text-emerald-600">✓</span>
                            {reason}
                          </p>
                        ))
                      ) : (
                        <p className="text-sm text-slate-500">
                          An alternative career to consider.
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="font-black">Skills to explore</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {career.learn.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-bold text-slate-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 rounded-2xl bg-indigo-50 p-5">
                    <p className="text-xs font-extrabold uppercase text-indigo-600">
                      Suggested next step
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      {career.nextStep}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setChatOpen(true);
                      setLibraryOpen(true);
                      setSearch(career.title);
                    }}
                    className="mt-6 font-bold text-indigo-600 hover:text-indigo-800"
                  >
                    Explore related questions →
                  </button>
                </article>
              ))}
            </div>

            <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-7 text-slate-500">
              CareerPath scores represent alignment with our predefined
              rules. They are not validated aptitude scores, employment
              probabilities, or guarantees of career success.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button
                onClick={startQuiz}
                className="rounded-2xl bg-indigo-600 px-7 py-4 font-bold text-white hover:bg-indigo-700"
              >
                Retake Assessment
              </button>
              <button
                onClick={() => navigate("explore")}
                className="rounded-2xl border border-slate-200 bg-white px-7 py-4 font-bold hover:border-indigo-300"
              >
                Explore All Careers
              </button>
            </div>
          </section>
        )}

        {/* CAREER DIRECTORY */}
        {screen === "explore" && (
          <section className="mx-auto max-w-7xl px-5 py-16 md:px-10">
            <p className="text-sm font-extrabold uppercase tracking-widest text-indigo-600">
              Career Library
            </p>
            <h1 className="mt-4 text-4xl font-black md:text-5xl">
              Explore career possibilities
            </h1>
            <p className="mt-5 max-w-2xl leading-8 text-slate-500">
              Learn about careers, important skills, and useful next steps.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {careers.map((career) => (
                <article
                  key={career.id}
                  className="rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="rounded-2xl bg-indigo-50 p-4 text-3xl">
                      {career.icon}
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-2 text-xs font-bold text-slate-600">
                      {career.category}
                    </span>
                  </div>

                  <h2 className="mt-7 text-xl font-black">{career.title}</h2>
                  <p className="mt-3 leading-7 text-slate-500">
                    {career.description}
                  </p>

                  <h3 className="mt-6 text-sm font-black">
                    Skills to explore
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {career.learn.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg bg-indigo-50 px-3 py-2 text-xs font-bold text-indigo-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                    <strong>Next step:</strong> {career.nextStep}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button
                onClick={startQuiz}
                className="rounded-2xl bg-indigo-600 px-8 py-4 font-bold text-white hover:bg-indigo-700"
              >
                Find My Career Matches →
              </button>
            </div>
          </section>
        )}
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="text-xl font-black">
              Career<span className="text-indigo-600">Path</span>
            </p>
            <p className="mt-2 text-sm text-slate-500">
              A rule-based career guidance course project.
            </p>
          </div>
          <p className="text-sm text-slate-400">
            Built with Next.js, TypeScript & Tailwind CSS.
          </p>
        </div>
      </footer>

      {/* FLOATING CHATBOT BUTTON */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          aria-label="Open CareerPath Assistant"
          className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-3xl text-white shadow-2xl shadow-indigo-300 transition hover:scale-110 hover:bg-indigo-700"
        >
          💬
        </button>
      )}

      {/* CHATBOT WINDOW */}
      {chatOpen && (
        <section
          aria-label="CareerPath Assistant"
          className="fixed bottom-4 right-4 z-50 flex h-[min(680px,calc(100dvh-32px))] w-[calc(100vw-32px)] max-w-[420px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl sm:bottom-6 sm:right-6"
        >
          <div className="flex items-center justify-between bg-indigo-600 p-5 text-white">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 text-2xl">
                🎯
              </span>
              <div>
                <h2 className="font-extrabold">CareerPath Assistant</h2>
                <p className="text-xs text-indigo-100">
                  ● Rule-based guidance
                </p>
              </div>
            </div>

            <button
              onClick={() => setChatOpen(false)}
              aria-label="Close chatbot"
              className="rounded-lg px-2 py-1 text-2xl hover:bg-white/20"
            >
              ×
            </button>
          </div>

          <div
            role="log"
            aria-live="polite"
            className="flex-1 space-y-4 overflow-y-auto bg-slate-50 p-4"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[90%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.role === "user"
                      ? "rounded-br-sm bg-indigo-600 text-white"
                      : "rounded-bl-sm border border-slate-100 bg-white text-slate-700 shadow-sm"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {suggestions.length > 0 && (
              <div className="rounded-2xl border border-indigo-100 bg-white p-3">
                <p className="mb-3 text-xs font-extrabold text-slate-500">
                  Please select the question you intended:
                </p>
                <div className="space-y-2">
                  {suggestions.map((rule) => (
                    <button
                      key={rule.id}
                      onClick={() => selectRule(rule)}
                      className="block w-full rounded-xl bg-indigo-50 p-3 text-left text-xs font-semibold text-indigo-700 hover:bg-indigo-100"
                    >
                      {rule.question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.length === 1 && (
              <div>
                <p className="mb-3 text-xs font-extrabold text-slate-500">
                  POPULAR QUESTIONS
                </p>
                <div className="space-y-2">
                  {starterQuestions.map((rule) => (
                    <button
                      key={rule.id}
                      onClick={() => selectRule(rule)}
                      className="block w-full rounded-xl border border-indigo-100 bg-white p-3 text-left text-xs font-semibold text-indigo-700 hover:bg-indigo-50"
                    >
                      {rule.question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEnd} />
          </div>

          {/* QUESTION LIBRARY */}
          {libraryOpen && (
            <div className="flex max-h-72 flex-col border-t border-slate-200 bg-white">
              <div className="p-3">
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search supported questions..."
                  aria-label="Search question library"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-indigo-500"
                />

                <select
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  aria-label="Filter question category"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm"
                >
                  {categories.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="min-h-0 flex-1 space-y-1 overflow-y-auto px-3 pb-3">
                {visibleRules.map((rule) => (
                  <button
                    key={rule.id}
                    onClick={() => selectRule(rule)}
                    className="block w-full rounded-xl p-3 text-left hover:bg-indigo-50"
                  >
                    <span className="block text-xs font-bold text-indigo-600">
                      {rule.category}
                    </span>
                    <span className="mt-1 block text-sm text-slate-700">
                      {rule.question}
                    </span>
                  </button>
                ))}

                {visibleRules.length === 0 && (
                  <p className="p-3 text-sm text-slate-500">
                    No matching questions. Try another search.
                  </p>
                )}
              </div>
            </div>
          )}

          <button
            onClick={() => {
              setLibraryOpen((previous) => !previous);
              setSearch("");
              setCategory("All");
            }}
            className="border-t border-slate-100 bg-white px-4 py-3 text-left text-sm font-bold text-indigo-600 hover:bg-indigo-50"
          >
            {libraryOpen ? "− Hide question library" : "+ Browse all 40 questions"}
          </button>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage();
            }}
            className="flex gap-2 border-t border-slate-100 bg-white p-4"
          >
            <input
              value={chatInput}
              onChange={(event) => setChatInput(event.target.value)}
              aria-label="Ask a career question"
              placeholder="Type your question..."
              className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
            <button
              type="submit"
              disabled={!chatInput.trim()}
              className="rounded-xl bg-indigo-600 px-5 font-bold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Send
            </button>
          </form>
        </section>
      )}
    </div>
  );
}
