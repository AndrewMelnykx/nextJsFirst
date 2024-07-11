import { RootState } from 'redux/reducers/root_reducer';

const selectCardsData = (state: RootState) =>
  state.DataHandlingReducer.dataCards;
const selectInFavorites = (state: RootState) =>
  state.DataHandlingReducer.inFavorites;
export { selectCardsData, selectInFavorites };
