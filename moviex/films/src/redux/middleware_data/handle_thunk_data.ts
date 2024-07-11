import {
  getPopularSelectorsData,
  getRatingSelectorsData,
} from 'data/fetched_data/rating_popular_data';
import {
  getFavoriteList,
  setFavorite,
} from 'data/fetched_data/favorites_request_data';
import GetCreditsDetails from '../../data/fetched_data/additional_info_movie_data';
import {
  handleDataCards,
  handleFavoriteData,
  handleFavoriteToggling,
  handleDetailsData,
  handleInitialGenres,
  handleGenresToggling,
} from '../actions/actions_data';
import { getGenresData } from '../../data/fetched_data/fetched_genres_data';
import { Dispatch } from 'redux';
import { CheckboxTypesData } from '../../components/utilits/checkbox';

const fetchDataByPopularity = (page: number) => async (dispatch: Dispatch) => {
  try {
    const popularMoviesData = await getPopularSelectorsData(page);
    console.log('popular datix', popularMoviesData);
    dispatch(handleDataCards(popularMoviesData ?? []));
    return popularMoviesData;
  } catch (error) {
    console.error('Failed to fetch', error);
  }
};

export default fetchDataByPopularity;
const fetchDataByRating = (page: number) => async (dispatch: Dispatch) => {
  try {
    const ratingMoviesData = await getRatingSelectorsData(page);
    dispatch(handleDataCards(ratingMoviesData ?? []));
    console.log(ratingMoviesData);
    return ratingMoviesData;
  } catch (error) {
    console.error('Failed to fetch', error);
  }
};
const fetchFavoriteList =
  (token: string | undefined, page: number) => async (dispatch: Dispatch) => {
    try {
      const favoriteList = await getFavoriteList(token, page);
      dispatch(handleFavoriteData(favoriteList ?? []));
      return favoriteList;
    } catch (error) {
      console.error('Failed to fetch', error);
    }
  };
const setFavoriteMovie =
  (movie_id: number, token: string | undefined, favorite: boolean) =>
  async (dispatch: Dispatch) => {
    try {
      await setFavorite(movie_id, token, favorite);
      dispatch(handleFavoriteToggling(movie_id, token, favorite));
    } catch (error) {
      console.error('Failed to fetch', error);
    }
  };
const fetchDetailsData =
  (movieId: string | undefined, linkEnding: string | undefined) =>
  async (dispatch: Dispatch) => {
    const data = await GetCreditsDetails(movieId, linkEnding);
    dispatch(handleDetailsData(movieId, linkEnding));
    return data;
  };
const fetchInitialGenres = () => async (dispatch: Dispatch) => {
  const data = await getGenresData();
  dispatch(handleInitialGenres(data));
  return data;
};

const setGenresToggling =
  (checkedGenres: CheckboxTypesData[]) => async (dispatch: Dispatch) => {
    dispatch(handleGenresToggling(checkedGenres));
    return checkedGenres;
  };

export {
  fetchFavoriteList,
  fetchDataByPopularity,
  fetchDataByRating,
  setFavoriteMovie,
  fetchDetailsData,
  fetchInitialGenres,
  setGenresToggling,
};
