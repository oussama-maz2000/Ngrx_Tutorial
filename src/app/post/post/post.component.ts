import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../shared/post.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app_State/app.state';
import { getPosts } from '../shared/post.select';
import { deletePost } from '../shared/post.action';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  posts: Observable<Post[]>;

  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.posts = this.store.select(getPosts);
    console.log(this.posts);
  }

  onDeletePost(id: number) {
    if (confirm('are you sure about that ')) {
      this.store.dispatch(deletePost({ id }));
    }
  }
}
