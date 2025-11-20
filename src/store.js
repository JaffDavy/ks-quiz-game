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
}));
