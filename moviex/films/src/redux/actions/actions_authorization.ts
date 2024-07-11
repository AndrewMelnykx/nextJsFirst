import {
  UPDATE_INPUT_VALUE,
  HANDLE_CARDS_VISIBILITY,
  HANDLE_FILTER_VISIBILITY,
  HANDLE_STATUS_API,
  HANDLE_LOGIN_MODAL_VISIBILITY,
  HANDLE_SIGNUP_MODAL_VISIBILITY,
} from './action_types';

export const updateInputValue = (value: string) => ({
  type: UPDATE_INPUT_VALUE,
  payload: value,
});
export const handleCardsVisibility = (visible: boolean) => ({
  type: HANDLE_CARDS_VISIBILITY,
  visible,
});
export const handleFilterVisibility = (visible: boolean) => ({
  type: HANDLE_FILTER_VISIBILITY,
  visible,
});
export const handleStatusAPI = (status: number | undefined) => ({
  type: HANDLE_STATUS_API,
  status,
});
export const handleLoginModalVisibility = (visible: boolean) => ({
  type: HANDLE_LOGIN_MODAL_VISIBILITY,
  visible,
});

export const handleSignUpModalVisibility = (visible: boolean) => ({
  type: HANDLE_SIGNUP_MODAL_VISIBILITY,
  visible,
});
