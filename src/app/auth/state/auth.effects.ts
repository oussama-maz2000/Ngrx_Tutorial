import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/service/auth.service';
import { loginStart_Action, loginSuccess_Action } from './auth.actions';
import { exhaustMap, map } from 'rxjs';
import { User } from 'src/app/model/classes/User.model';

@Injectable()
export class AuthEffect {
  constructor(private action$: Actions, private serviceAuth: AuthService) {}

  loginUser$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loginStart_Action),
      exhaustMap((action) => {
        return this.serviceAuth.loginUser(action.email, action.password).pipe(
          map((data) => {
            const user: User = this.serviceAuth.formatUser(data);
            return loginSuccess_Action({ user: user });
          })
        );
      })
    );
  });
}
