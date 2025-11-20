import React, { useEffect } from "react";
import { useQuizStore } from "./store";

function App() {
  const { screen, startQuiz, setScreen } = useQuizStore();

  return (
    <main className="flex justify-center items-start min-h-screen bg-linear-to-b from-gray-900 to-gray-800 p-6">
      <div className="w-full max-w-3xl">
        {screen === "categories" && (
          <section className="flex flex-col items-center text-center animate-fadeIn space-y-6 p-7 bg-gray-900/50 rounded-2xl mt-20">
            <h1 className="text-5xl font-extrabold text-white">
              Welcome to the Quiz App
            </h1>
            <p className="text-gray-300 max-w-md">
              Answer 10 timed multiple-choice questions. Be fast, be sharp!⚡⚡
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
                <li>• Skipped/unanswered questions count as wrong.</li>
                <li>• View your full results at the end.</li>
              </ul>
            </div>
            <button
              onClick={() => startQuiz("general_knowledge")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-2xl shadow-xl transition-transform transform hover:scale-105"
            >
              🚀 Start Game
            </button>
          </section>
        )}
      </div>
    </main>
  );
}
export default App;
