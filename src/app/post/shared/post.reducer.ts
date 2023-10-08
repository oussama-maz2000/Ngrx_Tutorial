import { createReducer, on } from '@ngrx/store';
import { PostState } from './post.model';
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
    let post = { ...action.post };
    post.id = state.posts.length + 1;
    return {
      ...state,
      posts: [...state.posts, post],
    };
  }),
  on(updatePostSuccess_AC, (state, action) => {
    const postUpdate = state.posts.map((post) => {
      return action.post.id === post.id ? action.post : post;
    });
    return {
      ...state,
      posts: postUpdate,
    };
  }),

  on(deletePost, (state, { id }) => {
    const postReturned = state.posts.filter((post) => {
      return post.id !== id;
    });
    return {
      ...state,
      posts: postReturned,
    };
  }),
  on(loadPostsSuccess_AC, (state, action) => {
    return {
      ...state,
      posts: action.posts,
    };
  })
);

export function postReducer(state, action) {
  return _postReducer(state, action);
}
