import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducers } from './reducers/index';
import thunk from 'redux-thunk';

const initialState = {};
const middleware = [thunk];
export const store = createStore(rootReducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));
