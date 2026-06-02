import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuizStore } from "../store";
import { Instructions } from "./instructions";
import { QuizCategories } from "./quizCategory";

export function Home() {
  const startQuiz = useQuizStore((state) => state.startQuiz);
  const navigate = useNavigate();

  const handleStart = async (id) => {
    await startQuiz(id);
    navigate("/quiz");
  };

  const categories = [
    {
      id: "general_knowledge",
      label: "🌍 General Knowledge",
      color: "bg-blue-600",
    },
    { id: "film_and_tv", label: "🎬 Film & TV", color: "bg-purple-600" },
    { id: "history", label: "📜 History", color: "bg-amber-600" },
    { id: "science", label: "🧪 Science", color: "bg-emerald-600" },
    { id: "sports", label: "🏅 Sports", color: "bg-red-600" },
    { id: "music", label: "🎵 Music", color: "bg-pink-600" },
    {
      id: "anime_and_manga",
      label: "🉐 Anime & Manga",
      color: "bg-fuchsia-600",
    },
    { id: "video_games", label: "🎮 Video Games", color: "bg-green-600" },
  ];

  return (
    <section className="flex flex-col items-center text-center animate-fadeIn space-y-8 p-6 md:p-10 bg-gray-900/50 rounded-3xl mt-10 shadow-2xl border border-gray-700 max-w-4xl mx-auto backdrop-blur-sm">
      <div className="space-y-2">
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Quiz Master
        </h1>
        <p className="text-gray-300 text-lg max-w-lg mx-auto leading-relaxed">
          Test your knowledge, beat the clock, and challenge your brain! ⚡
        </p>
      </div>

      <Instructions />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

      <QuizCategories categories={categories} onCategorySelect={handleStart} />
    </section>
  );
}
