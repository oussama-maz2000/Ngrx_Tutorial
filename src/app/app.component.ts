import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
/* import {
  initAction,
  firstAction,
  incrementCount,
  dicrementCount,
} from './state/02-actions'; */

import * as Actions from './state/02-actions';
import { inc_dic_Actions } from './state/02-actions';
import { User } from './model/interface/User';
import { Observable } from 'rxjs';
import { getUser, getCount } from './state/03-selectors';
import { State } from './model/interface/State';
import { getErrMsg, getLoading } from './shared/store_shared/shared.select';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  user: Observable<any> = {} as Observable<any>;
  count: Observable<any> = {} as Observable<any>;
  showLoading: Observable<boolean>;
  errMsg: Observable<string>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.user = this.store.pipe(select(getUser));

    this.count = this.store.pipe(
      select((state: any) => state.firstReducer.count)
    );
    /*  this.count.subscribe((data) => {
      console.log(data);
    }); */
    this.user.subscribe((data) => {
      console.log(data);
    });

    this.showLoading = this.store.select(getLoading);
    this.errMsg = this.store.select(getErrMsg);
  }

  changeState() {
    this.store.dispatch(
      Actions.firstAction({ username: 'john', age: 22, isAdmin: true })
    );
  }

  dicrementFunc() {
    this.store.dispatch(inc_dic_Actions.dicrementCount());
  }
  incrementFunc() {
    this.store.dispatch(inc_dic_Actions.incrementCount());
  }
}
