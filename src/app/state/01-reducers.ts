import { ActionReducer, createReducer, MetaReducer, on } from '@ngrx/store';
import {
  dicrementCount,
  firstAction,
  incrementCount,
  initAction,
  inc_dic_Actions
} from './02-actions';
import { User } from '../model/interface/User';
import { State } from '../model/interface/State';

const state: State = {
  app: 'first app',
  count: 0,
  user: {
    userName: 'test',
    isAdmin: false,
  },
};

function log(reducer: ActionReducer<User>): ActionReducer<User> {
  return (state, action) => {
    const currentState = reducer(state, action);

    /*  console.log('previous state : ' + state);
    console.log('action : ', action);
    console.log('current State : ', currentState); */
    return currentState;
  };
}

export const rootReducer = createReducer<State>(
  state,

  on(initAction, (state) => {
    return {
      ...state,
      isAdmin: false,
    };
  }),
  on(firstAction, (state, props) => ({
    ...state,
    user: {
      userName: props.username,
      age: props.age,
      isAdmin: props.isAdmin,
    },
  })),
  on(inc_dic_Actions.incrementCount, (state) => ({
    ...state,
    count: state.count + 1,
  })),
  on(inc_dic_Actions.dicrementCount, (state) => ({
    ...state,
    count: state.count - 1,
  }))
);

export const metaReducer: MetaReducer[] = [log];
