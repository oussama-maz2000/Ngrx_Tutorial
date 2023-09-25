import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { User_Model } from 'src/app/model/interface/User_Model';

@Injectable({
  providedIn: 'root',
})
export class RxjsService {
  private readonly url: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  public getUser(): Observable<any> {
    return this.http.get<User_Model[]>(this.url).pipe(
      map((users) => {
        return users.map((user) => ({
          ...user,
          id: user.id * 2,
        }));
      }),
      tap((user) => console.log(user))
    );
  }

  public testUser(): void {
    let typ = this.http.get(this.url);
    console.log(typeof typ);
  }
}
