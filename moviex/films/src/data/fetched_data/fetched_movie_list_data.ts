import Cookies from 'js-cookie';
const apiKey = Cookies.get('userToken');

export default async function getMovieList(
  inputValue: string | null,
  pageNumber: number,
) {
  const url = `https://api.themoviedb.org/3/search/movie?query=${inputValue}&?include_adult=false&language=en-US&page=${pageNumber}`;

  try {
    const response = await fetch(url, {
      method: 'GET',

      headers: {
        Authorization: `Bearer ${apiKey}`,
        accept: 'application/json',
      },
    });
    const status = response.status;
    const data = await response.json();
    return { data, status };
  } catch (error) {
    console.error('Failed to fetch', error);
    return { status: 500, data: [] };
  }
}
