import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';
import { state } from '@angular/animations';

const getAuthState = createFeatureSelector<AuthState>('auth');
export const isAuthenticated = createSelector(getAuthState, (state) => {
  return state.user ? true : false;
});
