import { createAction, props } from '@ngrx/store';
import { Post } from './post.model';

const ADD_POST = '[POST PAGE] add post ';
const ADD_UPDATE = '[POST PAGE] update post';

export const addPost = createAction(ADD_POST, props<{ post: Post }>());
export const updatePost = createAction(ADD_UPDATE, props<{ post: Post }>());
