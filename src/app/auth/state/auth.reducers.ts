import { createReducer, on } from '@ngrx/store';
import { initialAuthState } from './auth.state';
import { loginSuccess_Action } from './auth.actions';

const _authReducer = createReducer(
  initialAuthState,
  on(loginSuccess_Action, (state, action) => {
    console.log('action from auth reducer', action);
    return {
      ...state,
      user: action.user,
    };
  })
);

export function authReducer(state, action) {
  return _authReducer(state, action);
}
