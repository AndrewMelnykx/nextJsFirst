import Cookies from 'js-cookie';
export const apiKey = Cookies.get('userToken');
const api_image_link = 'https://image.tmdb.org/t/p/original/';
const urlBegin = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=`;

async function getPopularSelectorsData(page: number) {
  const urlPopular = `${urlBegin}${page}&sort_by=popularity.desc`;
  try {
    const result = await fetch(urlPopular, {
      method: 'Get',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        accept: 'application/json',
      },
    });
    // const status: number = result.status;
    const mainData = await result.json();
    const data = mainData.results;
    return data;
  } catch (error) {
    console.error('Failed fetching ', error);
    return { data: [] };
  }
}

async function getRatingSelectorsData(page: number) {
  const urlRating = `${urlBegin}${page}&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200`;
  try {
    const result = await fetch(urlRating, {
      method: 'Get',
      headers: {
        Authorization: `Bearer ${apiKey} `,
        accept: 'application/json',
      },
    });
    // const status = result.status;
    const mainData = await result.json();
    const data = mainData.results;
    return data;
  } catch (error) {
    console.error('Failed to fetch');
    return { data: [] };
  }
}

export type PropsForCardsData = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: OriginalLanguage;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  isFavorite: boolean;
};
export type OriginalLanguage = 'en';

export { getPopularSelectorsData, getRatingSelectorsData, api_image_link };
