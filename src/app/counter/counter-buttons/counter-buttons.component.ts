import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  customInc_AC,
  decrement_AC,
  increment_AC,
  reset_AC,
} from '../shared/state/counter.action';
import { AppState } from 'src/app/app_State/app.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css'],
})
export class CounterButtonsComponent {
  public customCounter: number;

  constructor(private store: Store<AppState>) {}

  incrementEvent() {
    this.store.dispatch(increment_AC());
  }

  dicrementEvent() {
    this.store.dispatch(decrement_AC());
  }

  resetEvent() {
    this.store.dispatch(reset_AC());
  }

  addInc() {
    this.store.dispatch(customInc_AC({ counter: +this.customCounter }));
  }
}
