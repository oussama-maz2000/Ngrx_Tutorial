import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PostState } from './post.model';
import { getcurrentRouter } from 'src/app/router/router.select';
import { RouterStateUrl } from 'src/app/router/custom-serializer';

const getPostsState = createFeatureSelector<PostState>('posts');

export const getPosts = createSelector(getPostsState, (state) => {
  return state.posts;
});

/* export const getPostById = createSelector(
  getPosts,
  getcurrentRouter,
  (posts, router: RouterStateUrl) => {
   

    return posts ? posts.find((post) => post.id === router.params['id']) : null;
  }
); */

export const getPostById = createSelector(
  getPosts,
  getcurrentRouter,
  (posts, router) => {
    if (!posts || !router.params['id']) {
      return null;
    }
    return posts.find((post) => post.id === +router.params['id']);
  }
);
