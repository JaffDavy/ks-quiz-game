import api from "./api";

export const getQuestionsByCategory = async (category) => {
  const response = await api.get("v2/questions", {
    searchParams: {
      categories: category,
      limit: 10,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch quiz questions: ${response.statusText}`);
  }

  return response.json();
};
