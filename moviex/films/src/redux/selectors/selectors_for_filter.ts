import { RootState } from '../reducers/root_reducer';

const selectSelectYears = (state: RootState): number[] | number =>
  state.FilterReducer.selectYears;

const selectSelectorsOptions = (state: RootState): string =>
  state.FilterReducer.selectOptions;

const selectGenres = (state: RootState) => state.FilterReducer.genres;

const selectPageCurrent = (state: RootState): number =>
  state.FilterReducer.page.current;

const selectSearchData = (state: RootState) => state.FilterReducer.searchData;

const selectResearchInput = (state: RootState): string | null =>
  state.FilterReducer.researchInput;

export {
  selectSelectYears,
  selectSelectorsOptions,
  selectGenres,
  selectPageCurrent,
  selectSearchData,
  selectResearchInput,
};
