import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environement } from 'src/env/env';
import { AuthResponse } from '../model/interface/Auth_Response.model';
import { Observable } from 'rxjs';
import { User } from '../model/classes/User.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

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
      default:
        return ' unknow error occured';
    }
  }
}
