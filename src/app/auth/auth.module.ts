import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffect } from './state/auth.effects';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './state/auth.reducers';

const routes: Routes = [
  {
    path: '',
    children: [{ path: '', component: LoginComponent }],
  },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EffectsModule.forFeature(AuthEffect),
    StoreModule.forFeature('auth', authReducer),
    RouterModule.forChild(routes),
  ],
})
export class AuthModule {}
