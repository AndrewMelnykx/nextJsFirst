import Cookies from 'js-cookie';

const account_id = Cookies.get('userId');
const url = ` https://api.themoviedb.org/3/account/${account_id}/favorite`;

export async function getFavoriteList(token: string | undefined, page: number) {
  const urlFavoriteList = `https://api.themoviedb.org/3/account/${account_id}/favorite/movies?language=en-US&page=${page}&sort_by=created_at.asc`;
  try {
    const response = await fetch(urlFavoriteList, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        accept: 'application/json',
      },
    });
    const mainData = await response.json();
    const data = mainData.results;
    return data;
  } catch (error) {
    console.error('Failed to fetch ', error);
  }
}

export async function setFavorite(
  media_id: number,
  token: string | undefined,
  favorite: boolean,
) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        accept: 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        media_type: 'movie',
        media_id: media_id,
        favorite: favorite,
      }),
    });
    const data = response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch', error);
  }
}
