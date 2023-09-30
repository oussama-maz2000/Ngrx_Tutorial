import { createReducer } from '@ngrx/store';
import { PostState } from './post.model';
import { postInitialState } from './post.state';

const _postReducer = createReducer(postInitialState);

export function postReducer(state, action) {
  return _postReducer(state, action);
}
