import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Observable,
  Subject,
  Subscription,
  map,
  merge,
  scan,
  shareReplay,
  tap,
} from 'rxjs';
import { User_Model } from 'src/app/model/interface/User_Model';

@Injectable({
  providedIn: 'root',
})
export class RxjsService {
  private readonly url: string = 'https://jsonplaceholder.typicode.com/users';
  private userInserted = new Subject();
  public userInsertedObs$ = this.userInserted.asObservable();
  constructor(private http: HttpClient) {}

  public getUser(): Observable<User_Model[]> {
    return this.http.get<User_Model[]>(this.url).pipe(
      map((users) => {
        return users.map((user) => ({
          ...user,
          id: user.id * 2,
        }));
      })
    );
  }

  public userWithAdd() {
    return merge(this.getUser(), this.userInsertedObs$).pipe(
      scan((acc: User_Model[], value: User_Model) => {
        return [...acc, value];
      })
    );
  }
  public addUser(user: User_Model) {
    this.userInserted.next(user);
    this.userInsertedObs$.subscribe((val) => console.log(val));
  }
}
