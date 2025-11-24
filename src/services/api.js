import ky from "ky";

const BASE_URL = "https://the-trivia-api.com";

const api = ky.create({
  prefixUrl: BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
