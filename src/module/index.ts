import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { postsEpic, postsReducer } from './posts';

export const rootReducer = combineReducers({
  posts: postsReducer
});

export const rootEpic = combineEpics(
  postsEpic
);