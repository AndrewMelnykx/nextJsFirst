import {
  FilterProps,
  SelectYear,
  SelectOption,
  ResetSelect,
  InitialGenres,
  CheckToggling,
  PaginationChange,
  MovieBySearching,
  HandleSearchData,
  FollowStatus,
} from '../types';

import {
  HANDLE_RESET_WHOLE_FILTER,
  HANDLE_SELECT_OPTION,
  HANDLE_SELECT_YEAR,
  HANDLE_PAGINATION,
  HANDLE_MOVIE_SEARCH,
  HANDLE_RESEARCH_INPUT,
} from '../actions/action_types';

export const initialSelectOptions: FilterProps = {
  selectYears: [1960, 2024],
  selectOptions: 'Popularity',
  genres: [],
  page: {
    current: 1,
  },
  inFavorites: [],
  searchData: [],
  researchInput: '',
  data: [],
};

export type Action =
  | SelectOption
  | SelectYear
  | ResetSelect
  | InitialGenres
  | CheckToggling
  | PaginationChange
  | MovieBySearching
  | HandleSearchData
  | FollowStatus;

export const FilterReducer = (
  state: FilterProps = initialSelectOptions,
  action: Action,
) => {
  switch (action.type) {
    case HANDLE_RESET_WHOLE_FILTER:
      return {
        ...initialSelectOptions,
      };

    case HANDLE_SELECT_OPTION:
      return { ...state, selectOptions: action.payload };
    case HANDLE_SELECT_YEAR:
      return { ...state, selectYears: action.payload };
    case HANDLE_PAGINATION:
      return {
        ...state,
        page: {
          ...state.page,
          current: action.payload,
        },
      };
    case HANDLE_MOVIE_SEARCH: {
      return { ...state, searchData: action.payload };
    }
    case HANDLE_RESEARCH_INPUT: {
      return { ...state, researchInput: action.payload };
    }
    default:
      return state;
  }
};
