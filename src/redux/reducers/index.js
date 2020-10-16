import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import movieReducer from './movieReducer';

export const rootReducers = combineReducers({
  errors: errorReducer,
  movies: movieReducer
});
