import {
  FETCH_FAVORITE_LIST,
  HANDLE_DATA_CARDS,
  TOGGLE_FAVORITE_MOVIE,
  HANDLE_DETAILS_DATA,
  HANDLE_CHECK_TOGGLING,
  HANDLE_GET_INITIAL_GENRES,
} from './action_types';
import { PropsForCardsData } from 'data/fetched_data/rating_popular_data';
import { CheckboxTypesData } from '../../components/utilits/checkbox';

const handleDataCards = (data: PropsForCardsData[]) => ({
  type: HANDLE_DATA_CARDS,
  payload: data,
});
const handleFavoriteData = (data: PropsForCardsData[]) => ({
  type: FETCH_FAVORITE_LIST,
  payload: data,
});
const handleFavoriteToggling = (
  id: number,
  token: string | undefined,
  isFavorite: boolean,
) => ({
  type: TOGGLE_FAVORITE_MOVIE,
  payload: id,
  isFavorite,
  token,
});
const handleDetailsData = (
  movieId: string | undefined,
  linkEnding: string | undefined,
) => ({
  type: HANDLE_DETAILS_DATA,
  payload: movieId,
  linkEnding,
});
const handleGenresToggling = (CheckedGenres: CheckboxTypesData[]) => ({
  type: HANDLE_CHECK_TOGGLING,
  payload: CheckedGenres,
});

const handleInitialGenres = (data: CheckboxTypesData[]) => ({
  type: HANDLE_GET_INITIAL_GENRES,
  payload: data,
});

export {
  handleDataCards,
  handleFavoriteData,
  handleFavoriteToggling,
  handleDetailsData,
  handleGenresToggling,
  handleInitialGenres,
};
