import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../model/interface/User';
import { State } from '../model/interface/State';

const returnUser = createFeatureSelector<State>('firstReducer');

export const getUser = createSelector(returnUser, (state: State) => state.user);

const selectFreatureCount = createFeatureSelector<State>('count');

const selectCount = (state: any) =>
  state.hasOwnProperty('count') ? state.count : '';

/* export const getCount = createSelector(
  selectFreatureCount,
  (state: State) => state.count
); */

export const getCount = createSelector(selectCount, (state: any) => {
  return state.hasOwnProperty('count') ? state.count : '';
});
