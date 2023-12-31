import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/model/classes/Post.model';

const POST_ADD = '[POST PAGE] add post ';
const POST_UPDATE = '[POST PAGE] update post';
const POST_DELETE = '[POST PAGE] delete post ';

const LOAD_POSTS = '[POST] loading posts';
const LOAD_POSTS_SUCCESS = '[POST] load posts success';

const UPDATE_POST = '[POST] update post action';
const UPDATE_POST_SUCCESS = '[POST] update post action success';

const ADD_POST = '[POST] add post';
const ADD_POST_SUCCESS = '[POST] add post success';

const LOADING_POST = '[POST] loading posts';

const DUMMY = '[POST] dummy action';

export const addPost = createAction(POST_ADD, props<{ post: Post }>());
export const updatePost = createAction(POST_UPDATE, props<{ post: Post }>());
export const deletePost = createAction(POST_DELETE, props<{ id: number }>());

export const loadPosts_AC = createAction(LOAD_POSTS);
export const loadPostsSuccess_AC = createAction(
  LOAD_POSTS_SUCCESS,
  props<{ posts: any[] }>()
);

export const updatePost_AC = createAction(UPDATE_POST, props<{ post: Post }>());
export const updatePostSuccess_AC = createAction(
  UPDATE_POST_SUCCESS,
  props<{ post: Update<Post> }>()
);

export const addPost_AC = createAction(ADD_POST, props<{ post: Post }>());
export const addPostSuccess_AC = createAction(
  ADD_POST_SUCCESS,
  props<{ post: Post }>()
);

export const loadingPosts_AC = createAction(LOADING_POST);

export const dummy_AC = createAction(DUMMY);
