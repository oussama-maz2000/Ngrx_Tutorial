import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PostState } from './post.model';

const getPostsState = createFeatureSelector<PostState>('posts');

export const getPosts = createSelector(getPostsState, (state) => {
  console.log(state);
  return state.posts;
});
