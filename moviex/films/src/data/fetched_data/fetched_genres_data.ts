const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
const apiKey =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDYyODUxMTM1MmZjZjBjNzZjMGJkZmM4MjMxMDEyOCIsInN1YiI6IjY1ZTA1NmJiNTI5NGU3MDE4NjRmMzA2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XEhHZw8L1SXjI4AH1-0lavtgW_DXuuQRYSSYZnDeYY4';

export async function getGenresData() {
  try {
    const response = await fetch(url, {
      method: 'Get',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        accept: 'application/json',
      },
    });
    const data = await response.json();
    return data.genres;
  } catch (error) {
    console.log('Failed to fetch data.genres', error);
  }
}
