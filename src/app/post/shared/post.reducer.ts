import { createReducer, on } from '@ngrx/store';
import { PostState, postAdapter } from './post.model';
import { postInitialState } from './post.state';
import {
  addPost,
  deletePost,
  loadPostsSuccess_AC,
  updatePost,
  updatePostSuccess_AC,
} from './post.action';

const _postReducer = createReducer(
  postInitialState,
  on(addPost, (state, action) => {
    return postAdapter.addOne(action.post, state);
  }),
  on(updatePostSuccess_AC, (state, action) => {
    return postAdapter.updateOne(action.post, state);
  }),
  on(deletePost, (state, { id }) => {
    return postAdapter.removeOne(id, state);
  }),

  on(loadPostsSuccess_AC, (state, action) => {
    return postAdapter.setAll(action.posts, state);
  })
);

export function postReducer(state, action) {
  return _postReducer(state, action);
}
