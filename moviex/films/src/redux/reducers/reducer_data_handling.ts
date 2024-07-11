import {
  HandleDataCardsFromAPI,
  FavoriteMoviesList,
  ToggleFavoriteMovie,
  HandleDetailsData,
  CheckToggling,
  InitialGenres,
} from '../types';
import {
  HANDLE_DATA_CARDS,
  FETCH_FAVORITE_LIST,
  TOGGLE_FAVORITE_MOVIE,
  HANDLE_DETAILS_DATA,
  HANDLE_CHECK_TOGGLING,
  HANDLE_GET_INITIAL_GENRES,
} from '../actions/action_types';

export const initialState = {
  //   selectYears: [1960, 2024],
  //   selectOptions: 'Popularity',
  //   genres: [],
  //   page: {
  //     current: 1,
  //   },
  //   inFavorites: [],
  //   searchData: [],
  //   researchInput: '',
  dataCards: [],
  inFavorites: [],
  movieId: 0,
  detailsData: {},
  genres: [],
};

export type Action =
  | InitialGenres
  | CheckToggling
  //   | MovieBySearching
  //   | HandleCardsData
  | FavoriteMoviesList
  | HandleDataCardsFromAPI
  | ToggleFavoriteMovie
  | HandleDetailsData;

export const DataHandlingReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case HANDLE_DATA_CARDS:
      return {
        ...state,
        dataCards: action.payload,
      };
    case FETCH_FAVORITE_LIST: {
      console.log(action.payload);
      return { ...state, inFavorites: action.payload };
    }
    case TOGGLE_FAVORITE_MOVIE: {
      return { ...state, movieId: action.payload };
    }
    case HANDLE_DETAILS_DATA: {
      return { ...state, detailsData: action.payload };
    }
    case HANDLE_CHECK_TOGGLING:
      return {
        ...state,
        genres: action.payload,
      };
    case HANDLE_GET_INITIAL_GENRES:
      return {
        ...state,
        genres: action.payload,
      };

    default:
      return state;
  }
};
