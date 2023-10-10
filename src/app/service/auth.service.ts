import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environement } from 'src/env/env';
import { AuthResponse } from '../model/interface/Auth_Response.model';
import { Observable } from 'rxjs';
import { User } from '../model/classes/User.model';
import { Store } from '@ngrx/store';
import { logOut_Action } from '../auth/state/auth.actions';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  timeOutInterval: any;
  constructor(
    private http: HttpClient,
    private store: Store,
    private router: Router
  ) {}

  loginUser(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environement.FIREBASE_API_KEY}`,
      {
        email,
        password,
        returnSecureToken: true,
      }
    );
  }

  signUser(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environement.FIREBASE_API_KEY}`,
      {
        email,
        password,
        returnSecureToken: true,
      }
    );
  }

  formatUser(data: AuthResponse): User {
    const expirationDate = new Date(
      new Date().getTime() + +data.expiresIn * 1000
    );
    const user = new User(
      data.email,
      data.idToken,
      data.localId,
      expirationDate
    );
    return user;
  }

  formatErrorMessage(error: string) {
    switch (error) {
      case 'INVALID_EMAIL':
        return 'Invalid Email';
      case 'INVALID_LOGIN_CREDENTIALS':
        return 'Invalid Login Credentials';
      case 'MISSING_PASSWORD':
        return 'Missing Password';
      case 'EMAIL_NOT_FOUND':
        return 'Email Not Found ';
      case 'INVALID_PASSWORD':
        return 'Invalid Password';
      case 'EMAIL_EXISTS':
        return 'Email Exists';
      case 'OPERATION_NOT_ALLOWED':
        return 'Operation Not Allowed';
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        return 'Too Many Attempts Try Later';
      default:
        return ' unknow error occured';
    }
  }

  setUserInLocalStorage(user: User) {
    localStorage.setItem('userData', JSON.stringify(user));
    this.runTimeOutInterval(user);
  }

  runTimeOutInterval(user: User) {
    let currentTime = new Date().getTime();
    let expirationDate = user.expirationDate.getTime();
    let timeInterval = expirationDate - currentTime;
    console.log(timeInterval);

    this.timeOutInterval = setTimeout(() => {
      this.store.dispatch(logOut_Action());
    }, timeInterval);
  }

  getUserFromLocalStorage(): User {
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      let userData = JSON.parse(userDataString);
      let expirationDate = new Date(userData._expirationDate);
      let user: User = new User(
        userData._email,
        userData._token,
        userData._localId,
        expirationDate
      );
      this.runTimeOutInterval(user);
      return user;
    }
    return null;
  }

  async logOutService() {
    localStorage.removeItem('userData');
    if (this.timeOutInterval) {
      clearTimeout(this.timeOutInterval);
      this.timeOutInterval = null;
    }
    this.router.navigate(['auth'], { replaceUrl: true });
  }
}
