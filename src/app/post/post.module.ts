import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { PostAddComponent } from './post-add/post-add.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostComponent } from './post/post.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { postReducer } from './shared/post.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostEffect } from './shared/post.effect';

const routes: Routes = [
  {
    path: '',
    component: PostComponent,
    children: [
      { path: 'add', component: PostAddComponent },
      { path: 'edit/:id', component: PostEditComponent },
    ],
  },
];

@NgModule({
  declarations: [PostEditComponent, PostAddComponent, PostComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('posts', postReducer),
    EffectsModule.forFeature(PostEffect),
    RouterModule.forChild(routes),
  ],
})
export class PostModule {}
