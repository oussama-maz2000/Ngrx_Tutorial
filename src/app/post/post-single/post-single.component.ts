import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/model/classes/Post.model';
import { getPostById } from '../shared/post.select';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.css'],
})
export class PostSingleComponent implements OnInit {
  constructor(private store: Store) {}

  post: Observable<Post>;
  ngOnInit(): void {
    this.post = this.store.select(getPostById);
    this.post.subscribe(console.log);
  }
}
