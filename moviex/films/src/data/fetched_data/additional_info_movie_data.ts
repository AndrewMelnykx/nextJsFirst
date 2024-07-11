import { apiKey } from "./rating_popular_data";

export default async function GetCreditsDetails(
  movieId: string | undefined,
  linkEnding: string | undefined
) {
  const movieAddInfoLink = "https://api.themoviedb.org/3/movie/";
  try {
    const data = await fetch(`${movieAddInfoLink}${movieId}${linkEnding}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        accept: "application/json",
      },
    });
    const jsonData = await data.json();
    return jsonData;
  } catch (error) {
    console.error("Failed to fetch", error);
  }
}
