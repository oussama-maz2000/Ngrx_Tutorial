import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterStateUrl } from './custom-serializer';
import { RouterReducerState } from '@ngrx/router-store';

const getRouterState =
  createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

export const getcurrentRouter = createSelector(getRouterState, (router) => {
  return router.state;
});
