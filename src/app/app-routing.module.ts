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
import { AuthGuard } from './service/auth.guard';
import { PostSingleComponent } from './post/post-single/post-single.component';
import { ProductComponent } from './product/product.component';
import { ProductResolver } from './service/product.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'counter',
    loadChildren: () =>
      import('./counter/counter.module').then((module) => module.CounterModule),
  },
  { path: 'rxjs', component: RxjsComponent },
  { path: 'user-edit', component: UserEditComponent },
  {
    path: 'post',
    loadChildren: () =>
      import('./post/post.module').then((module) => module.PostModule),
    canActivate: [AuthGuard],
  },

  {
    path: 'post/details/:id',
    component: PostSingleComponent,
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((module) => module.AuthModule),
  },
  {
    path: 'product',
    component: ProductComponent,
    resolve: { products: ProductResolver },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
