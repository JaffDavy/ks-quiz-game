import React from "react";

export function Instructions() {
  return (
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
  );
}
