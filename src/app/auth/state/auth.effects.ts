import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/service/auth.service';
import {
  autoLogin_Action,
  logOut_Action,
  loginStart_Action,
  loginSuccess_Action,
  signStart_Action,
  signSuccess_Action,
} from './auth.actions';
import { catchError, exhaustMap, map, mergeMap, of, tap } from 'rxjs';
import { User } from 'src/app/model/classes/User.model';
import { Store } from '@ngrx/store';
import {
  errMessageAction,
  loadingAction,
} from 'src/app/shared/store_shared/shared.action';
import { Router, Routes } from '@angular/router';

@Injectable()
export class AuthEffect {
  constructor(
    private action$: Actions,
    private serviceAuth: AuthService,
    private store: Store,
    private router: Router
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
            this.serviceAuth.setUserInLocalStorage(user);
            return loginSuccess_Action({ user: user, redirect: true });
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

  loginRedirect$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(loginSuccess_Action),
        tap((action) => {
          if (action.redirect) {
            this.router.navigate(['/']);
          }
        })
      );
    },
    { dispatch: false }
  );

  signUser$ = createEffect(() => {
    return this.action$.pipe(
      ofType(signStart_Action),
      exhaustMap((action) => {
        return this.serviceAuth.signUser(action.email, action.password).pipe(
          map((data) => {
            this.store.dispatch(loadingAction({ status: false }));
            this.store.dispatch(errMessageAction({ errMsg: '' }));
            let user = this.serviceAuth.formatUser(data);
            this.serviceAuth.setUserInLocalStorage(user);
            return signSuccess_Action({ user: user, redirect: true });
          }),
          catchError((respErr) => {
            this.store.dispatch(loadingAction({ status: false }));
            const errMsg = this.serviceAuth.formatErrorMessage(
              respErr.error.error.message
            );
            return of(errMessageAction({ errMsg: errMsg }));
          })
        );
      })
    );
  });

  signRedirect$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(signSuccess_Action),
        tap((data) => {
          if (data.redirect) {
            this.router.navigate(['/']);
          }
        })
      );
    },
    { dispatch: false }
  );

  autoLogin$ = createEffect(() => {
    return this.action$.pipe(
      ofType(autoLogin_Action),
      mergeMap((action) => {
        let user = this.serviceAuth.getUserFromLocalStorage();
        return of(loginSuccess_Action({ user: user, redirect: false }));
      })
    );
  });

  logOut$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(logOut_Action),
        map((data) => {
          this.serviceAuth.logOutService();
          this.router.createUrlTree(['auth']);
        })
      );
    },
    { dispatch: false }
  );
}
