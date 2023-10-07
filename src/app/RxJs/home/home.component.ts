import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, forkJoin, merge, of, scan, tap } from 'rxjs';
import { AppState } from 'src/app/app_State/app.state';
import { isAuthenticated } from 'src/app/auth/state/auth.selectos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private obs1: Observable<number> = of(1, 2, 3);
  private obs2: Observable<number> = of(4, 5, 6);
  private obs: Observable<number[]> = new Observable<number[]>();
  isAuthenticated: Observable<boolean>;

  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    console.log('home componenet');

    // this.obs = merge(this.obs1, this.obs2).pipe(tap((val) => console.log(val)));
    /* this.obs = of(1, 2, 3).pipe(
      scan((acc, val) => acc.concat(val), [0] as number[])
    ); */
    this.obs = of(1, 2, 3).pipe(scan((acc, val) => [...acc, val], [0]));
    this.obs.subscribe((val) => console.log(val));
    /*  const  obs1: Observable<number> = of(1, 2, 3);
  const obs2: Observable<number> = of(4, 5, 6);
    this.obs = forkJoin(obs1, obs2).pipe(scan((acc, val) => acc + val, 0));
    this.obs.subscribe((val) => console.log(val)); */
    this.isAuthenticated = this.store.select(isAuthenticated);
    this.isAuthenticated.subscribe((data) => console.log(data));
  }
}
