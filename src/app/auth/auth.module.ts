import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffect } from './state/auth.effects';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './state/auth.reducers';
import { SignComponent } from './sign/sign.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: LoginComponent },
      { path: 'sign', component: SignComponent },
    ],
  },
];

@NgModule({
  declarations: [LoginComponent, SignComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EffectsModule.forFeature(AuthEffect),

    RouterModule.forChild(routes),
  ],
})
export class AuthModule {}
