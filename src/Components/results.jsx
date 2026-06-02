import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuizStore } from "../store";

export function Result() {
  const { answers, reset } = useQuizStore();
  const navigate = useNavigate();

  const score = answers.filter((a) => a.correct).length;

  const handleHome = () => {
    reset();
    navigate("/");
  };

  return (
    <section className="flex flex-col items-center animate-fadeIn space-y-6 p-6 mt-10">
      <div className="text-7xl mb-2">🏆</div>
      <h1 className="text-5xl font-extrabold text-white">Quiz Complete!</h1>

      <p className="text-gray-300 text-lg">
        Final Score:{" "}
        <span className="text-green-400 font-extrabold text-3xl ml-1">
          {score} / {answers.length}
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
              <span className={a.correct ? "text-green-400" : "text-red-400"}>
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
          onClick={handleHome}
          className="bg-blue-600 py-3 rounded-2xl hover:bg-blue-700 text-white font-bold shadow-lg transition-transform hover:scale-105"
        >
          🔄 Play Again
        </button>

        <button
          onClick={handleHome}
          className="border border-gray-600 py-3 rounded-2xl text-gray-300 hover:bg-gray-800"
        >
          Home
        </button>
      </div>
    </section>
  );
}
