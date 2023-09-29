import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  Observable,
  catchError,
  interval,
  map,
  mergeAll,
  mergeMap,
  of,
  scan,
  switchMap,
  take,
  tap,
} from 'rxjs';
import { User_Model } from 'src/app/model/interface/User_Model';
import { RxjsService } from 'src/app/shared/services/rxjs_service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  form: FormGroup;
  private obs = new Observable<any>();

  constructor(private rxjsService: RxjsService, private http: HttpClient) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(),
      username: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
      website: new FormControl(),
      address: new FormControl(),
      company: new FormControl(),
    });

    this.obs = of(1, 2, 0.1, 4, 5).pipe(
      mergeMap((val) => {
        return this.http.get<any>(
          `https://jsonplacehold.typicode.com/posts?userId=${val}`
        );
      }),
      catchError((err, caught) => {
        throw 'error in source ' + err;
      })
    );
    this.obs.subscribe(
      (subObs) => {
        console.log(subObs);
      },
      (err) => {
        console.log(err);
      }
    );

    /* this.obs = of(1, 2, 3, 4).pipe(
      scan((acc, val) => {
        return acc + val;
      }, 0)
    );
    this.obs.subscribe(console.log); */
  }

  ngSubmit() {
    const user: User_Model = {
      id: 1,
      name: 'John Doe',
      username: 'johndoe',
      phone: '555-555-5555',
      email: 'john@example.com',
      website: 'johndoe.com',
      address: {
        street: '123 Main St',
        suite: 'Apt 4B',
        city: 'New York',
        zipcode: '10001',
        geo: {
          lat: '2.33333',
          lng: '2.333333',
        },
      },
      company: {
        name: 'Company Inc',
        catchPhrase: 'Your success is our business',
        bs: 'Best services',
      },
    };
    this.rxjsService.addUser(user);
  }
}
