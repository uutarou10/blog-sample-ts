import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { StateType } from 'typesafe-actions';
import { postsEpic, postsReducer } from './posts';

export const rootReducer = combineReducers({
  posts: postsReducer
});

export const rootEpic = combineEpics(
  postsEpic
);

export type RootState = StateType<typeof rootReducer>