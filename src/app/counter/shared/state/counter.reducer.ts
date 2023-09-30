import { createReducer, on } from '@ngrx/store';
import { initialState } from './counter.state';
import {
  increment_AC,
  decrement_AC,
  reset_AC,
  customInc_AC,
} from './counter.action';

const _counterReducer = createReducer(
  initialState,
  on(increment_AC, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement_AC, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset_AC, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customInc_AC, (state, props) => {
    console.log(props);

    return {
      ...state,
      counter: state.counter + props.counter,
    };
  })
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
