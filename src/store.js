import { create } from "zustand";

export const useQuizStore = create((set, get) => ({
  screen: "categories",
  category: null,
  questions: [],
  currentIndex: 0,
  answers: [],
  loading: false,
  timer: 10,

  setScreen: (s) => set({ screen: s }),
  setCategory: (cat) => set({ category: cat }),
  reset: () =>
    set({
      screen: "categories",
      category: null,
      questions: [],
      currentIndex: 0,
      answers: [],
      loading: false,
      timer: 10,
    }),

  startQuiz: async (category) => {
    set({ loading: true, category, answers: [], currentIndex: 0, timer: 10 });
    try {
      const res = await fetch(
        `https://the-trivia-api.com/v2/questions?categories=${encodeURIComponent(
          category
        )}&limit=10`
      );
      if (!res.ok) throw new Error("Fetch failed");
      const data = await res.json();

      const questions = data.map((q) => ({
        id: q.id,
        question: q.question.text,
        choices: shuffle([q.correctAnswer, ...(q.incorrectAnswers ?? [])]),
        correctAnswer: q.correctAnswer,
      }));

      set({
        questions,
        loading: false,
        screen: "quiz",
        currentIndex: 0,
        timer: 10,
      });
    } catch (e) {
      console.error(e);
      set({ loading: false });
    }
  },
}));

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

window.store = useQuizStore;
