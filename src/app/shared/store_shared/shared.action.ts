import { createAction, props } from '@ngrx/store';

const SET_LOADING_ACTION = '[SHARED STATE] set loading spinner';
const SET_ERROR_MESSAGE = '[SHARED STATE] set error message';

export const loadingAction = createAction(
  SET_LOADING_ACTION,
  props<{ status: boolean }>()
);

export const errMessageAction = createAction(
  SET_ERROR_MESSAGE,
  props<{ errMsg: string }>()
);
