import { createAction, props } from '@ngrx/store';
import { User } from '../model/interface/User';

export const initAction = createAction('init_action');
export const firstAction = createAction(
  'first_action',
  props<{ username: string; age: number; isAdmin: boolean }>()
);

export const incrementCount = createAction('[count] increment count');
export const dicrementCount = createAction('[count] dicrement count');
