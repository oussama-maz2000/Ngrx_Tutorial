import { Component, OnInit } from '@angular/core';
import {
  Observable,
  Subscription,
  combineLatest,
  forkJoin,
  from,
  interval,
  of,
} from 'rxjs';
import { filter, map, take, withLatestFrom } from 'rxjs/operators';
import { User } from 'src/app/model/interface/User';
import { User_Model } from 'src/app/model/interface/User_Model';
import { RxjsService } from 'src/app/shared/services/rxjs_service';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent implements OnInit {
  private subscription: Subscription = new Subscription();
  private subscription2: any;

  private userObs: Observable<User_Model[]> = of([]);
  public users: User_Model[] = [];

  private obs1 = of(1, 2, 3);
  private obs2 = of(11, 12, 13);
  private obs3 = of(21, 22, 23);

  constructor(private rxjsService: RxjsService) {}
  ngOnInit(): void {
    /*  const observe = {
      next: (item: unknown) => console.log('recieved ', item),
      error: (err: unknown) => console.log('oups we received an error'),
      complete: () => console.log('complete from observe'),
    };

    const stream = new Observable((obs) => {
      obs.next('item 1');
      obs.next('item 2');
      obs.next('item 3');
      obs.next('item 4');
      obs.complete();
      obs.next('item 5');
    });

    stream.subscribe(observe); */

    /* from([1, 2, 3, 4, 5])
      .pipe(
        map((item: number) => item * 2),
        filter((item) => item > 4)
      )
      .subscribe(
        (value) => console.log('value ', value),
        (error) => console.error(error),
        () => console.log('complete ')
      ); */
    /*  console.log('combine latest log');

    combineLatest([this.obs1, this.obs2, this.obs3]).subscribe((val) =>
      console.log(val)
    );

    console.log('fork join log');
    forkJoin([this.obs1, this.obs2, this.obs3]).subscribe((val) =>
      console.log(val)
    );

    console.log('with latest from log');
    this.obs1
      .pipe(withLatestFrom(this.obs2, this.obs3))
      .subscribe((val) => console.log(val)); */

    this.userObs = this.rxjsService.getUser();
    this.userObs.subscribe((user) => {
      this.users = user;
    });
  }

  public start(): void {
    /*  this.subscription.add(
      interval(1000).subscribe(
        (value) => console.log('value ', value),
        (error) => console.error(error),
        () => console.log('complete ')
      )
    ); */
    this.subscription2 = interval(1000).subscribe(
      (value) => console.log('value ', value),
      (error) => console.error(error),
      () => console.log('complete ')
    );
  }

  public stop(): void {
    // this.subscription2.unsubscribe();
    this.subscription2.complete();
  }
}
