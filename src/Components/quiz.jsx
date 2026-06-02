import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuizStore } from "../store";

export function Quiz() {
  const navigate = useNavigate();
  const { questions, currentIndex, timer, chooseAnswer, tickTimer, answers } =
    useQuizStore();

  useEffect(() => {
    if (questions.length === 0) return;

    const interval = setInterval(() => {
      tickTimer();
    }, 1000);

    return () => clearInterval(interval);
  }, [tickTimer, questions.length]);

  useEffect(() => {
    if (questions.length > 0 && answers.length === questions.length) {
      navigate("/results");
    }
  }, [answers, questions, navigate]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!questions || questions.length === 0) {
        navigate("/");
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [questions, navigate]);

  const currentQuestion = questions[currentIndex];

  if (!currentQuestion) return null;

  return (
    <section className="flex flex-col animate-fadeIn space-y-6 p-6 mt-10">
      <div className="flex justify-between items-center">
        <p className="text-gray-400 font-medium">
          Question {currentIndex + 1} / {questions.length}
        </p>
        <div className="flex items-center gap-2 bg-gray-800 p-2 rounded-lg shadow-inner">
          <span className="font-semibold">⏳</span>
          <span
            className={`font-mono font-bold text-2xl transition-colors ${
              timer <= 5 ? "text-red-500 animate-pulse" : "text-blue-400"
            }`}
          >
            {timer}s
          </span>
        </div>
      </div>

      <div className="bg-gray-800/60 p-6 rounded-2xl shadow-lg border border-gray-700">
        <h2 className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
          {currentQuestion.question}
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {currentQuestion.choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => chooseAnswer(choice)}
            className="w-full bg-gray-800 hover:bg-blue-600 transition-all border border-gray-700 px-6 py-4 rounded-xl text-gray-200"
          >
            {choice}
          </button>
        ))}
      </div>
    </section>
  );
}
