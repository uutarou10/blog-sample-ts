import { combineEpics, Epic } from 'redux-observable';
import { filter, map, mergeMap } from 'rxjs/operators';
import { ActionType, createAsyncAction } from 'typesafe-actions';
import Post from '../model/post';
import api from '../util/api';

enum ActionTypes {
  FETCH_START = 'Posts/FetchStart',
  FETCH_SUCCESS = 'Posts/FetchSuccess',
  FETCH_FAILURE = 'Posts/FetchFailure'
}

export const fetchPosts = createAsyncAction(
  ActionTypes.FETCH_START,
  ActionTypes.FETCH_SUCCESS,
  ActionTypes.FETCH_FAILURE
)<void, Post[], Error>();

interface State {
  posts: Post[],
  isFetching: boolean
}

const defaultState: State = {
  posts: [],
  isFetching: false
};

export const postsReducer = (state: State = defaultState, action: ActionType<typeof fetchPosts>) => {
  switch(action.type) {
    case ActionTypes.FETCH_START:
      return {
        ...state,
        isFetching: true
      };
    case ActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        isFetching: false
      };
    case ActionTypes.FETCH_FAILURE:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
}

const fetchPostsEpic: Epic = action$ => {
  return action$.pipe(
    filter(action => action.type === ActionTypes.FETCH_START),
    mergeMap(() => api.post.getAll()),
    map(posts => fetchPosts.success(posts))
  );
}

export const postsEpic = combineEpics(
  fetchPostsEpic
);