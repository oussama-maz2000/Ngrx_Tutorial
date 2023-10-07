import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/model/classes/User.model';

const LOGIN_START = '[AUTH] login start';
const LOGIN_SUCCESS = '[AUTH] login success';
const LOGIN_FAIL = '[AUTH] login fail';

const SIGN_START = '[AUTH] sign start';
const SIGN_SUCCESS = '[AUTH] sign success';

export const loginStart_Action = createAction(
  LOGIN_START,
  props<{ email: string; password: string }>()
);

export const loginSuccess_Action = createAction(
  LOGIN_SUCCESS,
  props<{ user: User }>()
);

export const signStart_Action = createAction(
  SIGN_START,
  props<{ email: string; password: string }>()
);
export const signSuccess_Action = createAction(
  SIGN_SUCCESS,
  props<{ user: User }>()
);
