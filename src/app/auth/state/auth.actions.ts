import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/model/classes/User.model';

const LOGIN_START = '[AUTH] login start';
const LOGIN_SUCCESS = '[AUTH] login success';
const LOGIN_FAIL = '[AUTH] login fail';

export const loginStart_Action = createAction(
  LOGIN_START,
  props<{ email: string; password: string }>()
);

export const loginSuccess_Action = createAction(
  LOGIN_SUCCESS,
  props<{ user: User }>()
);
