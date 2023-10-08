import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/model/classes/Post.model';

const POST_ADD = '[POST PAGE] add post ';
const POST_UPDATE = '[POST PAGE] update post';
const POST_DELETE = '[POST PAGE] delete post ';

const LOAD_POSTS = '[POST] loading posts';
const LOAD_POSTS_SUCCESS = '[POST] load posts success';

export const addPost = createAction(POST_ADD, props<{ post: Post }>());
export const updatePost = createAction(POST_UPDATE, props<{ post: Post }>());
export const deletePost = createAction(POST_DELETE, props<{ id: number }>());

export const loadPosts_AC = createAction(LOAD_POSTS);
export const loadPostsSuccess_AC = createAction(
  LOAD_POSTS_SUCCESS,
  props<{ posts: Post[] }>
);
