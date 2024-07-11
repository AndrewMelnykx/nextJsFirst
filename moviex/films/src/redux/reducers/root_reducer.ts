import { combineReducers } from 'redux';
import { AuthorizationReducer } from './reducer_authorization';
import { FilterReducer } from './reducer_filter';
import { GenreItem, CurrentOfPage } from '../types';
import { FavoriteListProps } from '../../components/cards/types';
import { PropsForCardsData } from 'data/fetched_data/rating_popular_data';
import { DataHandlingReducer } from './reducer_data_handling';

export const rootReducer = combineReducers({
  AuthorizationReducer: AuthorizationReducer,
  FilterReducer: FilterReducer,
  DataHandlingReducer: DataHandlingReducer,
});

export interface RootState {
  AuthorizationReducer: {
    visibleFilter: boolean;
    visibleCards: boolean;
    status: undefined | number;
    visibleSignUp: boolean;
    visibleLogin: boolean;
  };
  FilterReducer: {
    selectYears: number[] | number;
    selectOptions: string;
    genres: GenreItem[];
    page: CurrentOfPage;
    inFavorites: FavoriteListProps[];
    searchData: PropsForCardsData[];
    researchInput: string | null;
  };
  DataHandlingReducer: {
    dataCards: PropsForCardsData[];
    inFavorites: FavoriteListProps[];
    movieId: number;
    detailsData: {};
    genres: [];
  };
}
