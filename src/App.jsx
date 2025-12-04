import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useQuizStore } from "./store";
import { Home } from "./Components/home";
import { Quiz } from "./Components/quiz";
import { Result } from "./Components/results";

function App() {
  const { loading } = useQuizStore();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => setIsLoaded(true), []);

  if (!isLoaded) return null;

  if (loading) {
    return (
      <main className="flex justify-center items-center min-h-screen bg-gray-900">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-white font-mono text-xl animate-pulse">
            Loading...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex justify-center items-start min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-6">
      <div className="w-full max-w-3xl">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/quiz" element={<Quiz />} />

          <Route path="/results" element={<Result />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
