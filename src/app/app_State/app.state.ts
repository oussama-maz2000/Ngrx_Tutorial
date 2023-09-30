import { counterReducer } from '../counter/shared/state/counter.reducer';
import { CounterState } from '../counter/shared/state/counter.state';
import { PostState } from '../post/shared/post.model';
import { postReducer } from '../post/shared/post.reducer';
import { rootReducer } from '../state/01-reducers';

export interface AppState {
  counter: CounterState;
  posts: PostState;
}

export const appReducer = {
  counter: counterReducer,
  posts: postReducer,
  firstReducer: rootReducer,
};
