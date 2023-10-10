import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logOut_Action } from 'src/app/auth/state/auth.actions';
import { isAuthenticated } from 'src/app/auth/state/auth.selectos';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated: Observable<boolean>;

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.isAuthenticated = this.store.select(isAuthenticated);
  }

  logOut(event: Event) {
    event.preventDefault();
    this.store.dispatch(logOut_Action());
  }
}
