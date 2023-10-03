import { createReducer, on } from '@ngrx/store';
import { PostState } from './post.model';
import { postInitialState } from './post.state';
import { addPost, deletePost, updatePost } from './post.action';

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
  on(updatePost, (state, action) => {
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
  })
);

export function postReducer(state, action) {
  return _postReducer(state, action);
}
