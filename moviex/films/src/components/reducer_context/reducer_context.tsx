// import React, { createContext, useReducer, useContext } from 'react';
// import {
//   FilterProps,
//   SelectYear,
//   SelectOption,
//   ResetSelect,
//   InitialGenres,
//   CheckToggling,
//   PaginationChange,
//   SignupModalHandler,
//   LoginModalHandler,
//   FilterVisibilityHandler,
//   CardsVisibilityHandler,
//   ToggleFavoriteMovie,
//   MovieBySearching,
//   HandleCardsData,
//   HandleDataStatus,
//   FollowStatus,
// } from './types';
// import {
//   GET_INITIAL_GENRES,
//   RESET_WHOLE_FILTER,
//   CHECK_TOGGLING,
//   SELECT_OPTION,
//   SELECT_YEAR,
//   HANDLE_PAGINATION,
//   HANDLE_MOVIE_FAVORITE,
//   HANDLE_MOVIE_SEARCH,
//   HANDLE_RESEARCH_INPUT,
//   HANDLE_DATA_CARDS,
// } from '../../redux/action_types';

// export const FilterDataContext = createContext<FilterProps>(null!);
// export const FilterDispatcherContext = createContext<React.Dispatch<Action>>(
//   null!,
// );

// interface PropsChildrenContextProvider {
//   children: React.ReactNode;
// }

// export default function FilterContextProvider({
//   children,
// }: PropsChildrenContextProvider) {
//   const [currentData, dispatch] = useReducer(
//     FilterReducer,
//     initialSelectOptions,
//   );
//   return (
//     <FilterDataContext.Provider value={currentData}>
//       <FilterDispatcherContext.Provider value={dispatch}>
//         {children}
//       </FilterDispatcherContext.Provider>
//     </FilterDataContext.Provider>
//   );
// }
// export function useDataContext() {
//   return useContext(FilterDataContext);
// }
// export function useDispatcherContext() {
//   return useContext(FilterDispatcherContext);
// }
// export const initialSelectOptions: FilterProps = {
//   selectYears: [1960, 2024],
//   selectOptions: 'Popularity',
//   genres: [],
//   page: {
//     current: 1,
//   },
//   inFavorites: [],
//   searchData: [],
//   researchInput: '',
//   data: [],
// };

// export type Action =
//   | SelectOption
//   | SelectYear
//   | ResetSelect
//   | InitialGenres
//   | CheckToggling
//   | PaginationChange
//   | SignupModalHandler
//   | LoginModalHandler
//   | FilterVisibilityHandler
//   | CardsVisibilityHandler
//   | ToggleFavoriteMovie
//   | MovieBySearching
//   | HandleCardsData
//   | HandleDataStatus
//   | FollowStatus;
// export function FilterReducer(state: FilterProps, action: Action) {
//   switch (action.type) {
//     case GET_INITIAL_GENRES:
//       return {
//         ...state,
//         genres: action.payload,
//       };
//     case RESET_WHOLE_FILTER:
//       return {
//         ...initialSelectOptions,
//       };
//     case CHECK_TOGGLING:
//       return {
//         ...state,
//         genres: action.payload,
//       };
//     case SELECT_OPTION:
//       return { ...state, selectOptions: action.payload };
//     case SELECT_YEAR:
//       return { ...state, selectYears: action.payload };
//     case HANDLE_PAGINATION:
//       return {
//         ...state,
//         page: {
//           ...state.page,
//           current: action.payload,
//         },
//       };

//     case HANDLE_MOVIE_FAVORITE: {
//       return { ...state, inFavorites: [...action.payload] };
//     }
//     case HANDLE_MOVIE_SEARCH: {
//       return { ...state, searchData: action.payload };
//     }
//     case HANDLE_RESEARCH_INPUT: {
//       return { ...state, researchInput: action.payload };
//     }
//     case HANDLE_DATA_CARDS: {
//       return { ...state, data: [...action.payload] };
//     }

//     default:
//       throw new Error('Unhandled action type');
//   }
// }
