import { createAction, props } from '@ngrx/store';

export const increment_AC = createAction('increment counter');
export const decrement_AC = createAction('decrement counter');
export const reset_AC = createAction('reset counter');
export const customInc_AC = createAction(
  'custom increment counter',
  props<{ counter: number }>()
);
