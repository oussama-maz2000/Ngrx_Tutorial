import { createReducer, on } from '@ngrx/store';
import { initialState } from 'src/app/counter/shared/state/counter.state';
import { errMessageAction, loadingAction } from './shared.action';
import { initialSharedState } from './shared.state';

const _sharedReducer = createReducer(
  initialSharedState,
  on(loadingAction, (state, action) => {
    return {
      ...state,
      showLoading: action.status,
    };
  }),
  on(errMessageAction, (state, action) => {
    return {
      ...state,
      errMsg: action.errMsg,
    };
  })
);

export function SharedReducer(state, action) {
  return _sharedReducer(state, action);
}
