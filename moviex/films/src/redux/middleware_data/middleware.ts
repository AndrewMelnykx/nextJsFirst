import { Middleware } from 'redux';
import {
  FETCH_DATA_BY_SELECTOR,
  FETCH_FAVORITE_LIST,
} from 'redux/actions/action_types';
import { dataByCondition, fetchFavoriteList } from './handle_data';
type AppAction = {
  type: string;
  payload: {
    selectorsOptionValue?: string;
    token?: string | undefined;
    page: number;
  };
};

const apiMiddleware: Middleware =
  (store) => (next) => async (action: AppAction) => {
    if (typeof action === 'function') {
      return action(store.dispatch);
    }
    switch (action.type) {
      case FETCH_DATA_BY_SELECTOR:
        const { selectorsOptionValue, page: dataPage } = action.payload;
        await store.dispatch(dataByCondition(selectorsOptionValue, dataPage));
        break;
      case FETCH_FAVORITE_LIST:
        const { token, page: favPage } = action.payload;
        await store.dispatch(fetchFavoriteList(token, favPage));
        break;
      default:
        break;
    }

    return next(action);
  };

export default apiMiddleware;
