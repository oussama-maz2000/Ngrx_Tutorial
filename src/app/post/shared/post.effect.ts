import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { loadPosts_AC } from './post.action';
import { map, mergeMap } from 'rxjs';
import { PostService } from 'src/app/service/post.service';

@Injectable()
export class PostEffect {
  constructor(private actions$: Actions, private postService: PostService) {}

  loadPosts$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loadPosts_AC),
        mergeMap((action) => {
          return this.postService.getPosts().pipe(
            map((data) => {
              console.log(data);
            })
          );
        })
      );
    },
    { dispatch: false }
  );
}
