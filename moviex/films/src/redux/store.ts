import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { rootReducer } from './reducers/root_reducer';
import { useDispatch } from 'react-redux';

const store = createStore(rootReducer, undefined, applyMiddleware(thunk));

export type MainDispatcher = typeof store.dispatch;
export const useMegaDispatch: () => MainDispatcher = useDispatch;

export default store;
