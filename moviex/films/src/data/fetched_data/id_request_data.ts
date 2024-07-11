import { tokenFromRegistration } from 'components/utilits/helpers/const_for_modal';
const urlRequestId = ' https://api.themoviedb.org/3/account/null';

export async function getMovieUserId() {
  try {
    const result = await fetch(urlRequestId, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${tokenFromRegistration}`,
        Accept: 'application/json',
      },
    });
    const data = await result.json();
    const id = data.id;
    const status = result.status;
    return { id, status };
  } catch (error) {
    console.error('Failed to fetch error', error);
    return { id: null, status: 500 };
  }
}
