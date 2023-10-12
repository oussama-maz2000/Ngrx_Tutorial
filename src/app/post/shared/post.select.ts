import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PostState, postAdapter } from './post.model';
import { getcurrentRouter } from 'src/app/router/router.select';
import { RouterStateUrl } from 'src/app/router/custom-serializer';

const getPostsState = createFeatureSelector<PostState>('posts');
const postSelectore = postAdapter.getSelectors();
const getPostEntities = createSelector(
  getPostsState,
  postSelectore.selectEntities
);

export const getPosts = createSelector(getPostsState, postSelectore.selectAll);

/* export const getPostById = createSelector(
  getPosts,
  getcurrentRouter,
  (posts, router: RouterStateUrl) => {
   

    return posts ? posts.find((post) => post.id === router.params['id']) : null;
  }
); */

/* export const getPostById = createSelector(
  getPosts,
  getcurrentRouter,
  (posts, router) => {
    if (!posts || !router.params['id']) {
      return null;
    }
    return posts.find((post) => post.id === +router.params['id']);
  }
);
 */
export const getPostById = createSelector(
  getPostEntities,
  getcurrentRouter,
  (posts, route: RouterStateUrl) => {
    return posts ? posts[route.params['id']] : null;
  }
);
