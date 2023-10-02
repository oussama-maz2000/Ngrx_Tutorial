import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsComponent } from './RxJs/rxjs/rxjs.component';
//import { HomeComponent } from './RxJs/home/home.component';
import { UserEditComponent } from './RxJs/user-edit/user-edit.component';
import { HomeComponent } from './counter/home/home.component';
import { CounterComponent } from './counter/counter/counter.component';
import { PostComponent } from './post/post/post.component';
import { PostAddComponent } from './post/post-add/post-add.component';
import { PostEditComponent } from './post/post-edit/post-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'rxjs', component: RxjsComponent },
  { path: 'user-edit', component: UserEditComponent },
  {
    path: 'post',
    component: PostComponent,
    children: [
      { path: 'add', component: PostAddComponent },
      { path: 'edit/:id', component: PostEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
