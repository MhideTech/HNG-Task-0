import axios from "axios";

// Create an axios instance with a base URL and a timeout.
// This is a good practice for centralizing API configuration.
const apiClient = axios.create({
  baseURL: "https://catfact.ninja",
});

/**
 * Fetches posts from the external API.
 */
export const getCatFact = async () => {
  // The try...catch block is essential for handling network or API errors.
  try {
    const response = await apiClient.get("/fact");
    return response.data.fact;
  } catch (error) {
    console.error("Error fetching posts from external API:", error.message);
    // Re-throw a more generic error to be handled by the route handler.
    throw new Error("Could not fetch posts.");
  }
};
