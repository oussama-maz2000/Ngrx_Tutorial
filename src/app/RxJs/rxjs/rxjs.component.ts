import { Component, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subject,
  Subscription,
  combineLatest,
  forkJoin,
  from,
  interval,
  of,
} from 'rxjs';
import { filter, map, take, withLatestFrom } from 'rxjs/operators';
import { Address } from 'src/app/model/interface/Address';
import { Company } from 'src/app/model/interface/Company';
import { User } from 'src/app/model/interface/User';
import { User_Model } from 'src/app/model/interface/User_Model';
import { RxjsService } from 'src/app/shared/services/rxjs_service';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent implements OnInit {
  private _userFilter = '';
  private userObs: Observable<any> = of([]);
  public userFilter$: Observable<User_Model[]> = of([]);
  public users: User_Model[] = [];
  public filterSubject: Subject<string> = new BehaviorSubject<string>('');
  constructor(private rxjsService: RxjsService) {}

  ngOnInit(): void {
    this.userObs = this.rxjsService.userWithAdd;
    this.userObs.subscribe((user) => {
      this.users = user;
    });
    this.userFilter = '';
    this.userFilter$ = this.createFilterUsers(this.filterSubject, this.userObs);
  }

  public set userFilter(filter: string) {
    this._userFilter = filter;

    /*  if (this.userFilter) {
      this.userFilter$ = this.userObs.pipe(
        map((users: User_Model[]) => this.filterUserFun(filter, users))
      );
    } else {
      this.userFilter$ = this.userObs;
    } */
  }

  public get userFilter(): string {
    return this._userFilter;
  }

  private filterUserFun(critaria: string, users: User_Model[]): User_Model[] {
    critaria = critaria.toUpperCase();
    const users_filtred = users.filter(
      (user: User_Model) => user.name.toUpperCase().indexOf(critaria) !== -1
    );
    return users_filtred;
  }

  public changeFilterValue(value: string) {
    this.filterSubject.next(value);
  }

  public createFilterUsers(
    critaria: Observable<string>,
    users: Observable<User_Model[]>
  ): Observable<User_Model[]> {
    return combineLatest(
      users,
      critaria,
      (users: User_Model[], filter: string) => {
        if (filter === '') this.userObs;
        return users.filter(
          (user: User_Model) =>
            user.name.toUpperCase().indexOf(filter.toUpperCase()) !== -1
        );
      }
    );
  }
}
