import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import {
  addPost_AC,
  dummy_AC,
  loadPostsSuccess_AC,
  loadPosts_AC,
  loadingPosts_AC,
  updatePostSuccess_AC,
  updatePost_AC,
} from './post.action';
import { filter, map, mergeMap, of, switchMap, withLatestFrom } from 'rxjs';
import { PostService } from 'src/app/service/post.service';
import { Post } from 'src/app/model/classes/Post.model';
import { ROUTER_NAVIGATION, RouterNavigatedAction } from '@ngrx/router-store';
import { Update } from '@ngrx/entity';
import { getPosts } from './post.select';

@Injectable()
export class PostEffect {
  constructor(
    private actions$: Actions,
    private postService: PostService,
    private store: Store
  ) {}

  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPosts_AC),
      withLatestFrom(this.store.select(getPosts)),
      mergeMap(([action, posts]) => {
        if (!posts.length || posts.length === 1) {
          return this.postService.getPosts().pipe(
            map((posts: Post[]) => {
              return loadPostsSuccess_AC({ posts });
            })
          );
        }
        return of(dummy_AC);
      })
    );
  });

  updatePost$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(updatePost_AC),
        switchMap((action) => {
          let updatedPost: Update<Post> = {
            id: action.post.id,
            changes: { ...action.post },
          };
          return of(updatePostSuccess_AC({ post: updatedPost }));
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
        return router.payload.routerState['params']['id'];
      }),
      withLatestFrom(this.store.select(getPosts)),
      switchMap(([id, posts]) => {
        console.log([id, posts]);
        if (!posts.length) {
          return this.postService.getSinglePost(id).pipe(
            map((post) => {
              let postData = [{ ...post, id }];
              return loadPostsSuccess_AC({ posts: postData });
            })
          );
        }
        return of(dummy_AC);
      })
    );
  });
}
