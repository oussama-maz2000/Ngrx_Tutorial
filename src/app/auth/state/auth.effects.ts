import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/service/auth.service';
import { loginStart_Action, loginSuccess_Action } from './auth.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { User } from 'src/app/model/classes/User.model';
import { Store } from '@ngrx/store';
import {
  errMessageAction,
  loadingAction,
} from 'src/app/shared/store_shared/shared.action';

@Injectable()
export class AuthEffect {
  constructor(
    private action$: Actions,
    private serviceAuth: AuthService,
    private store: Store
  ) {}

  loginUser$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loginStart_Action),
      exhaustMap((action) => {
        return this.serviceAuth.loginUser(action.email, action.password).pipe(
          map((data) => {
            this.store.dispatch(loadingAction({ status: false }));
            this.store.dispatch(errMessageAction({ errMsg: '' }));
            const user: User = this.serviceAuth.formatUser(data);
            return loginSuccess_Action({ user: user });
          }),
          catchError((respErr) => {
            this.store.dispatch(loadingAction({ status: false }));

            const errMsg = this.serviceAuth.formatErrorMessage(
              respErr.error.error.message
            );
            console.log(errMsg);
            return of(errMessageAction({ errMsg: errMsg }));
          })
        );
      })
    );
  });
}
