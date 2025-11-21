import React, { useEffect } from "react";
import { useQuizStore } from "./store";

function App() {
  const {
    screen,
    questions,
    currentIndex,
    timer,
    answers,
    loading,
    startQuiz,
    chooseAnswer,
    tickTimer,
    reset,
    setScreen,
  } = useQuizStore();

  useEffect(() => {
    if (screen !== "quiz") return;
    const interval = setInterval(() => tickTimer(), 1000);
    return () => clearInterval(interval);
  }, [screen, tickTimer]);

  if (loading) {
    return (
      <main className="flex justify-center items-center min-h-screen bg-gray-900">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-white font-mono text-xl animate-pulse">
            Loading Questions...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex justify-center items-start min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-6">
      <div className="w-full max-w-3xl">
        {screen === "categories" && (
          <section className="flex flex-col items-center text-center animate-fadeIn space-y-6 p-7 bg-gray-900/50 rounded-2xl mt-20 shadow-2xl border border-gray-700">
            <h1 className="text-5xl font-extrabold text-white">
              Welcome to the Quiz App
            </h1>
            <p className="text-gray-300 max-w-md">
              Answer 10 timed multiple-choice questions. Be fast, be sharp! ⚡⚡
            </p>

            <div className="bg-gray-800/60 p-6 rounded-xl border border-gray-700 shadow-lg w-full max-w-md text-left">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                📘 How It Works
              </h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>
                  • Each round contains{" "}
                  <span className="text-white font-bold">10 questions</span>.
                </li>
                <li>
                  • Each question has a{" "}
                  <span className="text-white font-bold">10-second timer</span>.
                </li>
                <li>• Questions advance automatically.</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
              {[
                {
                  id: "general_knowledge",
                  label: "🌍 General Knowledge",
                  color: "bg-blue-600",
                },
                {
                  id: "film_and_tv",
                  label: "🎬 Film & TV",
                  color: "bg-purple-600",
                },
                { id: "history", label: "📜 History", color: "bg-amber-600" },
                { id: "science", label: "🧪 Science", color: "bg-emerald-600" },
                { id: "sports", label: "🏅 Sports", color: "bg-red-600" },
                { id: "music", label: "🎵 Music", color: "bg-pink-600" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => startQuiz(cat.id)}
                  className={`${cat.color} hover:opacity-90 text-white font-semibold py-4 px-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 active:scale-95`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </section>
        )}

        {screen === "quiz" && (
          <section className="flex flex-col animate-fadeIn space-y-6 p-6 mt-10">
            <div className="flex justify-between items-center">
              <p className="text-gray-400 font-medium">
                Question {currentIndex + 1} / 10
              </p>
              <div className="flex items-center gap-2 bg-gray-800 p-2 rounded-lg shadow-inner">
                <span className="font-semibold">⏳</span>
                <span
                  className={`font-mono font-bold text-2xl transition-colors ${
                    timer <= 3 ? "text-red-500 animate-pulse" : "text-blue-400"
                  }`}
                >
                  {timer}s
                </span>
              </div>
            </div>

            <div className="bg-gray-800/60 p-6 rounded-2xl shadow-lg border border-gray-700">
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
                {questions[currentIndex]?.question}
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {questions[currentIndex]?.choices.map((choice, index) => (
                <button
                  key={index}
                  onClick={() => chooseAnswer(choice)}
                  className="w-full bg-gray-800 hover:bg-blue-600 transition-all duration-300 border border-gray-700 hover:border-blue-500 text-left px-6 py-4 rounded-xl text-gray-200 hover:text-white font-medium shadow-md transform hover:scale-105"
                >
                  {choice}
                </button>
              ))}
            </div>
          </section>
        )}

        {/* --- SCREEN 3: RESULTS (Restored this section!) --- */}
        {screen === "results" && (
          <section className="flex flex-col items-center animate-fadeIn space-y-6 p-6 mt-10">
            <div className="text-7xl mb-2">🏆</div>
            <h1 className="text-5xl font-extrabold text-white">
              Quiz Complete!
            </h1>

            <p className="text-gray-300 text-lg">
              Final Score:{" "}
              <span className="text-green-400 font-extrabold text-3xl ml-1">
                {answers.filter((a) => a.correct).length} / 10
              </span>
            </p>

            <div className="grid grid-cols-1 gap-4 max-h-[50vh] overflow-y-auto pr-2 w-full custom-scrollbar">
              {answers.map((a, i) => (
                <div
                  key={i}
                  className={`bg-gray-800/70 p-4 rounded-xl border-l-4 ${
                    a.correct ? "border-green-500" : "border-red-500"
                  }`}
                >
                  <p className="text-white font-semibold">
                    {i + 1}. {a.question}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    Your Answer:{" "}
                    <span
                      className={a.correct ? "text-green-400" : "text-red-400"}
                    >
                      {a.chosenAnswer || "Skipped"}
                    </span>
                  </p>
                  {!a.correct && (
                    <p className="text-xs text-blue-300 mt-1">
                      Correct: {a.correctAnswer}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 w-full max-w-xs">
              <button
                onClick={() => reset()}
                className="bg-blue-600 py-3 rounded-2xl hover:bg-blue-700 text-white font-bold shadow-lg transition-transform hover:scale-105"
              >
                🔄 Play Again
              </button>
              <button
                onClick={() => setScreen("categories")}
                className="border border-gray-600 py-3 rounded-2xl text-gray-300 hover:bg-gray-800"
              >
                Home
              </button>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export default App;
