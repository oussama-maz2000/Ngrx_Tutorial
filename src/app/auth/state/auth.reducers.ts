import { createReducer, on } from '@ngrx/store';
import { initialAuthState } from './auth.state';
import {
  logOut_Action,
  loginSuccess_Action,
  signSuccess_Action,
} from './auth.actions';

const _authReducer = createReducer(
  initialAuthState,
  on(loginSuccess_Action, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  }),
  on(signSuccess_Action, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  }),
  on(logOut_Action, (state, action) => {
    return {
      ...state,
      user: null,
    };
  })
);

export function authReducer(state, action) {
  return _authReducer(state, action);
}
