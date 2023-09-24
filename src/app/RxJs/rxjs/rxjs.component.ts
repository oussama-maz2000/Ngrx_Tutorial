import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, from, interval, of } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent implements OnInit {
  private subscription: Subscription = new Subscription();
  private subscription2: any;

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

    from([1, 2, 3, 4, 5])
      .pipe(
        map((item: number) => item * 2),
        filter((item) => item > 4)
      )
      .subscribe(
        (value) => console.log('value ', value),
        (error) => console.error(error),
        () => console.log('complete ')
      );
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
    this.subscription2.unsubscribe();
  }
}
