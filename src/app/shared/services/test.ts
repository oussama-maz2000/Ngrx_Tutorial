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

/*  this.subscription.add(
      interval(1000).subscribe(
        (value) => console.log('value ', value),
        (error) => console.error(error),
        () => console.log('complete ')
      )
    ); */
