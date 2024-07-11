import {
  HANDLE_STATUS_API,
  HANDLE_CARDS_VISIBILITY,
  HANDLE_FILTER_VISIBILITY,
  HANDLE_LOGIN_MODAL_VISIBILITY,
  HANDLE_SIGNUP_MODAL_VISIBILITY,
  HANDLE_DATA_CARDS,
  HANDLE_SELECT_OPTION,
  FETCH_FAVORITE_LIST,
  TOGGLE_FAVORITE_MOVIE,
  HANDLE_DETAILS_DATA,
  HANDLE_CHECK_TOGGLING,
  HANDLE_GET_INITIAL_GENRES,
} from './actions/action_types';

import { FavoriteListProps } from 'components/cards/types';
import { PropsForCardsData } from 'data/fetched_data/rating_popular_data';

export interface HandleCardsVisibility {
  type: typeof HANDLE_CARDS_VISIBILITY;
  payload: boolean;
}

export interface HandleFilterVisibility {
  type: typeof HANDLE_FILTER_VISIBILITY;
  payload: boolean;
}
export interface HandleStatusAPI {
  type: typeof HANDLE_STATUS_API;
  payload: undefined | number;
}
export interface HandleSignUpVisibility {
  type: typeof HANDLE_SIGNUP_MODAL_VISIBILITY;
  payload: boolean;
}
export interface HandleLoginVisibility {
  type: typeof HANDLE_LOGIN_MODAL_VISIBILITY;
  payload: boolean;
}

export interface FilterProps {
  selectYears: number[] | number;
  selectOptions: string;
  genres: GenreItem[];
  page: CurrentOfPage;
  inFavorites: FavoriteListProps[];
  searchData: PropsForCardsData[];
  researchInput: string | null;
  data: PropsForCardsData[];
}
export interface MovieSearchingProps {
  number: number;
}

export type CurrentOfPage = {
  current: number;
};
export type SearchDataTitle = {
  title: string;
};
export interface GenreItem {
  id: string;
  name: string;
  checked: boolean;
}
export interface ResetSelect {
  type: 'RESET_WHOLE_FILTER';
  genres: GenreItem[];
  selectYears: string[];
  selectOptions: string[];
  researchInput: string | null;
}

export interface InitialGenres {
  type: typeof HANDLE_GET_INITIAL_GENRES;
  payload: [];
}

export interface CheckToggling {
  type: typeof HANDLE_CHECK_TOGGLING;
  payload: GenreItem[];
}

export interface PaginationChange {
  type: 'HANDLE_PAGINATION';
  payload: number;
}
export interface SignupModalHandler {
  type: 'HANDLE_SIGNUP_MODAL';
  visible: boolean;
}
export interface LoginModalHandler {
  type: 'HANDLE_LOGIN_MODAL';
  visible: boolean;
}
export interface FilterVisibilityHandler {
  type: 'HANDLE_FILTER_VISIBILITY';
  visible: boolean;
}
export interface CardsVisibilityHandler {
  type: 'HANDLE_CARDS_VISIBILITY';
  visible: boolean;
}
export interface FavoriteMoviesList {
  type: typeof FETCH_FAVORITE_LIST;
  payload: FavoriteListProps[];
}
export interface MovieBySearching {
  type: 'HANDLE_MOVIE_SEARCH';
  payload: PropsForCardsData[];
}
export interface HandleSearchData {
  type: 'HANDLE_RESEARCH_INPUT';
  payload: string | null;
}
export interface HandleDataCardsFromAPI {
  type: typeof HANDLE_DATA_CARDS;
  payload: PropsForCardsData[];
}
export interface FollowStatus {
  type: 'FOLLOW_STATUS';
  status: number | undefined;
}
export interface SelectYear {
  type: 'SELECT_YEAR';
  payload: number[] | number;
}

export interface SelectOption {
  type: typeof HANDLE_SELECT_OPTION;
  payload: string;
}
export interface ToggleFavoriteMovie {
  type: typeof TOGGLE_FAVORITE_MOVIE;
  payload: number;
}
export interface HandleDetailsData {
  type: typeof HANDLE_DETAILS_DATA;
  payload: {};
}
