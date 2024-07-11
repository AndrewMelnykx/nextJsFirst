import { GenreItem, ResetSelect } from '../types';
import { FavoriteListProps } from '../../components/cards/types';
import { PropsForCardsData } from 'data/fetched_data/rating_popular_data';
import {
  HANDLE_GET_INITIAL_GENRES,
  HANDLE_RESET_WHOLE_FILTER,
  HANDLE_CHECK_TOGGLING,
  HANDLE_SELECT_OPTION,
  HANDLE_SELECT_YEAR,
  HANDLE_PAGINATION,
  HANDLE_MOVIE_FAVORITE,
  HANDLE_MOVIE_SEARCH,
  HANDLE_RESEARCH_INPUT,
} from './action_types';

export const handleInitialGenres = (genres: []) => ({
  type: HANDLE_GET_INITIAL_GENRES,
  payload: genres,
});
export const handleGenresToggling = (genres: GenreItem[]) => ({
  type: HANDLE_CHECK_TOGGLING,
  payload: genres,
});
export const handleResetWholeFilter = (filterData: ResetSelect) => ({
  type: HANDLE_RESET_WHOLE_FILTER,
  payload: filterData,
});
export const selectOption = (option: string) => ({
  type: HANDLE_SELECT_OPTION,
  payload: option,
});

export const selectYear = (year: number[] | number) => ({
  type: HANDLE_SELECT_YEAR,
  payload: year,
});

export const handlePagination = (pageNumber: number) => ({
  type: HANDLE_PAGINATION,
  payload: pageNumber,
});

export const handleMovieFavorite = (favorites: FavoriteListProps[]) => ({
  type: HANDLE_MOVIE_FAVORITE,
  payload: favorites,
});

export const handleMovieSearch = (movies: PropsForCardsData[]) => ({
  type: HANDLE_MOVIE_SEARCH,
  payload: movies,
});

export const handleResearchInput = (input: string | null) => ({
  type: HANDLE_RESEARCH_INPUT,
  payload: input,
});
