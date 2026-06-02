import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getQuestionsByCategory } from "../src/services/quiz.services";

export const useQuizStore = create(
  persist(
    (set, get) => ({
      category: null,
      questions: [],
      currentIndex: 0,
      answers: [],
      loading: false,
      timer: 10,

      reset: () =>
        set({
          category: null,
          questions: [],
          currentIndex: 0,
          answers: [],
          loading: false,
          timer: 10,
        }),

      startQuiz: async (category) => {
        set({
          loading: true,
          category,
          answers: [],
          currentIndex: 0,
          timer: 10,
        });

        try {
          const data = await getQuestionsByCategory(category);

          const questions = data.map((q) => ({
            id: q.id,
            question: q.question.text,
            choices: shuffle([q.correctAnswer, ...(q.incorrectAnswers ?? [])]),
            correctAnswer: q.correctAnswer,
          }));

          set({
            questions,
            loading: false,
            currentIndex: 0,
            timer: 20,
          });
        } catch (e) {
          console.error("Error fetching questions:", e);
          set({ loading: false });
        }
      },

      chooseAnswer: (chosen) => {
        const { questions, currentIndex, answers } = get();
        const q = questions[currentIndex];
        const correct = q.correctAnswer === chosen;

        set({
          answers: [
            ...answers,
            {
              question: q.question,
              correctAnswer: q.correctAnswer,
              chosenAnswer: chosen,
              correct,
            },
          ],
        });

        const next = currentIndex + 1;
        if (next < questions.length) {
          set({ currentIndex: next, timer: 20 });
        }
      },

      skipQuestion: () => {
        const { questions, currentIndex, answers } = get();
        const q = questions[currentIndex];

        set({
          answers: [
            ...answers,
            {
              question: q.question,
              correctAnswer: q.correctAnswer,
              chosenAnswer: null,
              correct: false,
            },
          ],
        });

        const next = currentIndex + 1;
        if (next < questions.length) {
          set({ currentIndex: next, timer: 20 });
        }
      },

      tickTimer: () => {
        const { timer, questions, answers } = get();

        if (questions.length === 0) return;
        if (answers.length >= questions.length) return;

        if (timer <= 0) {
          get().skipQuestion();
        } else {
          set({ timer: timer - 1 });
        }
      },
    }),
    {
      name: "quiz-storage",
      getStorage: () => localStorage,
    }
  )
);

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
