import { RootState } from '../reducers/root_reducer';

const selectStatus = (state: RootState) => state.AuthorizationReducer.status;
const selectFilter = (state: RootState) =>
  state.AuthorizationReducer.visibleFilter;
const selectCards = (state: RootState) =>
  state.AuthorizationReducer.visibleCards;
const selectLogin = (state: RootState) =>
  state.AuthorizationReducer.visibleLogin;
const selectSignUp = (state: RootState) =>
  state.AuthorizationReducer.visibleSignUp;

export { selectStatus, selectFilter, selectCards, selectLogin, selectSignUp };
