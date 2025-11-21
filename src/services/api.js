const BASE_URL = "https://the-trivia-api.com";

const api = {
  get: async (endpoint, options = {}) => {
    const url = new URL(endpoint, BASE_URL);

    if (options.searchParams) {
      Object.keys(options.searchParams).forEach((key) =>
        url.searchParams.append(key, options.searchParams[key])
      );
    }

    const response = await fetch(url.toString(), options);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    return response;
  },
};

export default api;
