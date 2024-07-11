import {
  HANDLE_CARDS_VISIBILITY,
  HANDLE_FILTER_VISIBILITY,
  HANDLE_STATUS_API,
  HANDLE_LOGIN_MODAL_VISIBILITY,
  HANDLE_SIGNUP_MODAL_VISIBILITY,
} from '../actions/action_types';
import {
  HandleCardsVisibility,
  HandleFilterVisibility,
  HandleStatusAPI,
  HandleLoginVisibility,
  HandleSignUpVisibility,
} from '../types';
import { RootState } from './root_reducer';

const initialState = {
  visibleCards: false,
  visibleFilter: false,
  status: undefined,
  visibleSignUp: false,
  visibleLogin: false,
};

export type Action =
  | HandleCardsVisibility
  | HandleFilterVisibility
  | HandleStatusAPI
  | HandleLoginVisibility
  | HandleSignUpVisibility;
export const AuthorizationReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case HANDLE_CARDS_VISIBILITY:
      return {
        ...state,
        visibleCards: action.payload,
      };
    case HANDLE_FILTER_VISIBILITY:
      return {
        ...state,
        visibleFilter: action.payload,
      };
    case HANDLE_STATUS_API:
      return {
        ...state,
        status: action.payload,
      };
    case HANDLE_LOGIN_MODAL_VISIBILITY:
      return {
        ...state,
        visibleLogin: action.payload,
      };
    case HANDLE_SIGNUP_MODAL_VISIBILITY:
      return {
        ...state,
        visibleSignUp: action.payload,
      };
    default:
      return state;
  }
};
