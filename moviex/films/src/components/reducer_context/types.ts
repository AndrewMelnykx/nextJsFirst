// import { FavoriteListProps } from '../cards/types';
// import { PropsForCardsData } from 'data/fetched_data/rating_popular_data';

// export interface FilterProps {
//   selectYears: number[] | number;
//   selectOptions: string;
//   genres: GenreItem[];
//   page: CurrentOfPage;
//   inFavorites: FavoriteListProps[];
//   searchData: PropsForCardsData[];
//   researchInput: string | null;
//   data: PropsForCardsData[];
// }
// export interface MovieSearchingProps {
//   number: number;
// }

// export type CurrentOfPage = {
//   current: number;
// };
// export type SearchDataTitle = {
//   title: string;
// };
// export interface GenreItem {
//   id: string;
//   name: string;
//   checked: boolean;
// }
// export interface SelectYear {
//   type: 'SELECT_YEAR';
//   payload: number[] | number;
// }

// export interface SelectOption {
//   type: 'SELECT_OPTION';
//   payload: string;
// }

// export interface ResetSelect {
//   type: 'RESET_WHOLE_FILTER';
//   genres: GenreItem[];
//   selectYears: string[];
//   selectOptions: string[];
//   researchInput: string | null;
// }

// export interface InitialGenres {
//   type: 'GET_INITIAL_GENRES';
//   payload: [];
// }

// export interface CheckToggling {
//   type: 'CHECK_TOGGLING';
//   payload: GenreItem[];
// }

// export interface PaginationChange {
//   type: 'HANDLE_PAGINATION';
//   payload: number;
// }
// export interface SignupModalHandler {
//   type: 'HANDLE_SIGNUP_MODAL';
//   visible: boolean;
// }
// export interface LoginModalHandler {
//   type: 'HANDLE_LOGIN_MODAL';
//   visible: boolean;
// }
// export interface FilterVisibilityHandler {
//   type: 'HANDLE_FILTER_VISIBILITY';
//   visible: boolean;
// }
// export interface CardsVisibilityHandler {
//   type: 'HANDLE_CARDS_VISIBILITY';
//   visible: boolean;
// }
// export interface ToggleFavoriteMovie {
//   type: 'HANDLE_MOVIE_FAVORITE';
//   payload: FavoriteListProps[];
// }
// export interface MovieBySearching {
//   type: 'HANDLE_MOVIE_SEARCH';
//   payload: PropsForCardsData[];
// }
// export interface HandleCardsData {
//   type: 'HANDLE_RESEARCH_INPUT';
//   payload: string | null;
// }
// export interface HandleDataStatus {
//   type: 'HANDLE_DATA_CARDS';
//   payload: PropsForCardsData[];
// }
// export interface FollowStatus {
//   type: 'FOLLOW_STATUS';
//   status: number | undefined;
// }
