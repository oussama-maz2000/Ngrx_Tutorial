import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Observable,
  Subject,
  Subscription,
  map,
  merge,
  scan,
  share,
  shareReplay,
  tap,
} from 'rxjs';
import { User_Model } from 'src/app/model/interface/User_Model';
import { LockChanges } from '@ngrx/store-devtools/src/actions';

@Injectable({
  providedIn: 'root',
})
export class RxjsService {
  private readonly url: string = 'https://jsonplaceholder.typicode.com/users';
  private userInserted = new Subject();
  public userInsertedObs$ = this.userInserted.asObservable();
  private data$: Observable<User_Model[]>;
  constructor(private http: HttpClient) {}

  public getUser(): Observable<User_Model[]> {
    this.data$ = this.http.get<User_Model[]>(this.url);
    return this.data$;
  }

  public userWithAdd = merge(this.getUser(), this.userInsertedObs$).pipe(
    scan((acc: User_Model[], value: User_Model) => {
      console.log(acc);

      return [...acc, value];
    }),
    shareReplay(1)
  );

  public addUser(user: User_Model) {
    /* this.userInserted.next(user);
    this.userInsertedObs$.subscribe((val) => console.log(val)); */
    console.log(user);
  }
}
