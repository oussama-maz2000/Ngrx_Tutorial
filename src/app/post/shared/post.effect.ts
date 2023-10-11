import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import {
  addPost_AC,
  loadPostsSuccess_AC,
  loadPosts_AC,
  loadingPosts_AC,
  updatePostSuccess_AC,
  updatePost_AC,
} from './post.action';
import { filter, map, mergeMap, of, switchMap } from 'rxjs';
import { PostService } from 'src/app/service/post.service';
import { Post } from 'src/app/model/classes/Post.model';
import { ROUTER_NAVIGATION, RouterNavigatedAction } from '@ngrx/router-store';

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

  addPost$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(addPost_AC),
        mergeMap((action) => {
          return this.postService.addPost(action.post).pipe(
            map((data) => {
              console.log(data);
            })
          );
        })
      );
    },
    { dispatch: false }
  );

  getSinglePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((router: RouterNavigatedAction) => {
        console.log(
          'router in filter ',
          router.payload.routerState.url.startsWith('/post/details')
        );

        return router.payload.routerState.url.startsWith('/post/details');
      }),
      map((router: RouterNavigatedAction) => {
        console.log(
          'router in map function ',
          router.payload.routerState['params']['id']
        );

        return router.payload.routerState['params']['id'];
      }),
      switchMap((id) => {
        console.log('log id in switchmap ', id);

        return this.postService.getSinglePost(id).pipe(
          map((post) => {
            let postData = [{ ...post, id }];

            return loadPostsSuccess_AC({ posts: postData });
          })
        );
      })
    );
  });
}
