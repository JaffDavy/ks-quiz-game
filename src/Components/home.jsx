import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuizStore } from "../store";

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

      <div className="bg-gray-800/80 p-6 rounded-2xl border border-gray-700 shadow-inner w-full max-w-lg text-left transform transition-all hover:scale-[1.02]">
        <h3 className="text-xl font-bold mb-4 text-blue-400 flex items-center gap-2">
          📘 How to Play
        </h3>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start gap-3">
            <span className="bg-gray-700 p-1 rounded text-sm">❓</span>
            <span>
              You will face <strong className="text-white">10 Questions</strong>{" "}
              per round.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-gray-700 p-1 rounded text-sm">⏳</span>
            <span>
              You have <strong className="text-white">20 seconds</strong> to
              answer each one.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-gray-700 p-1 rounded text-sm">🚀</span>
            <span>Questions advance automatically. Good luck!</span>
          </li>
        </ul>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

      <div className="w-full">
        <h2 className="text-2xl font-bold text-white mb-6">
          Choose a Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleStart(cat.id)}
              className={`${cat.color} hover:brightness-110 relative overflow-hidden group text-white font-bold py-4 px-4 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:scale-95`}
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
