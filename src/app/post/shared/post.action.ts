import { createAction, props } from '@ngrx/store';
import { Post } from './post.model';

const POST_ADD = '[POST PAGE] add post ';
const POST_UPDATE = '[POST PAGE] update post';
const POST_DELETE = '[POST PAGE] delete post ';

export const addPost = createAction(POST_ADD, props<{ post: Post }>());
export const updatePost = createAction(POST_UPDATE, props<{ post: Post }>());
export const deletePost = createAction(POST_DELETE, props<{ id: number }>());
