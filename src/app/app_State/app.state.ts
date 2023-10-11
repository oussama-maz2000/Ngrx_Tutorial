import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { authReducer } from '../auth/state/auth.reducers';
import { AuthState } from '../auth/state/auth.state';
import { counterReducer } from '../counter/shared/state/counter.reducer';
import { CounterState } from '../counter/shared/state/counter.state';
import { PostState } from '../post/shared/post.model';
import { postReducer } from '../post/shared/post.reducer';
import { SharedReducer } from '../shared/store_shared/shared.reducer';
import { SharedState } from '../shared/store_shared/shared.state';
import { rootReducer } from '../state/01-reducers';

export interface AppState {
  shared: SharedState;
  auth: AuthState;
  router: RouterReducerState;
}

export const appReducer = {
  shared: SharedReducer,
  auth: authReducer,
  router: routerReducer,
};
