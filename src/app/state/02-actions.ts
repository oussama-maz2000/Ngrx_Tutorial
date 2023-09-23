import { createAction, props ,emptyProps, createActionGroup} from '@ngrx/store';
import { User } from '../model/interface/User';

export const initAction = createAction('init_action');
export const firstAction = createAction(
  'first_action',
  props<{ username: string; age: number; isAdmin: boolean }>()
);

export const incrementCount = createAction('[count] increment count');
export const dicrementCount = createAction('[count] dicrement count');


export const inc_dic_Actions=createActionGroup(
  {
    source:"COUNT",
    events:{
      "increment count":emptyProps(),
      "dicrement count":emptyProps()
    }
  }
)
