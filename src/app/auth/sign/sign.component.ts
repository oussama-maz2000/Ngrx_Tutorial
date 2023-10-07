import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User } from 'src/app/model/classes/User.model';
import { loadingAction } from 'src/app/shared/store_shared/shared.action';
import { signStart_Action } from '../state/auth.actions';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css'],
})
export class SignComponent implements OnInit {
  signForm: FormGroup;

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.signForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  onSubmitFormSign() {
    let email = this.signForm.get('email').value;
    let password = this.signForm.get('password').value;
    this.store.dispatch(loadingAction({ status: true }));
    this.store.dispatch(signStart_Action({ email, password }));
  }
}
