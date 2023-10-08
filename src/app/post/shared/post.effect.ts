import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import {
  loadPostsSuccess_AC,
  loadPosts_AC,
  updatePostSuccess_AC,
  updatePost_AC,
} from './post.action';
import { map, mergeMap, of, switchMap } from 'rxjs';
import { PostService } from 'src/app/service/post.service';
import { Post } from 'src/app/model/classes/Post.model';

@Injectable()
export class PostEffect {
  constructor(private actions$: Actions, private postService: PostService) {}

  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPosts_AC),
      mergeMap((action) => {
        return this.postService.getPosts().pipe(
          map((posts: Post[]) => {
            return loadPostsSuccess_AC({ posts });
          })
        );
      })
    );
  });

  updatePost$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(updatePost_AC),
        switchMap((action) => {
          console.table(['action ', action]);
          return of(updatePostSuccess_AC({ post: null }));
        })
      );
    },
    { dispatch: false }
  );
}
