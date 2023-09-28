import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsComponent } from './RxJs/rxjs/rxjs.component';
import { HomeComponent } from './RxJs/home/home.component';
import { UserEditComponent } from './RxJs/user-edit/user-edit.component';

const routes: Routes = [
  { path: '', component: RxjsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user-edit', component: UserEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
