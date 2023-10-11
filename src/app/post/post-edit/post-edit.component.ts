import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app_State/app.state';
import { getPostById } from '../shared/post.select';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { updatePost, updatePost_AC } from '../shared/post.action';
import { Post } from 'src/app/model/classes/Post.model';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent implements OnInit {
  post: Post;
  postForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createFormPostUpdate();
    this.store.select(getPostById).subscribe((post) => {
      console.log(post);

      if (post) {
        this.post = post;
        this.postForm.patchValue({
          title: post.title,
          body: post.body,
          description: post.description,
          img: post.img,
        });
      }
    });
  }

  createFormPostUpdate() {
    this.postForm = new FormGroup({
      userId: new FormControl(null, [Validators.required]),
      title: new FormControl(null, [Validators.required]),
      body: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      img: new FormControl(null, [Validators.required]),
    });
  }

  submitFormPost() {
    let post: Post = {
      userId: this.postForm.value.userId,
      body: this.postForm.value.body,
      id: this.post.id,
      title: this.postForm.value.title,
      description: this.postForm.value.description,
      img: this.postForm.value.img,
    };

    this.store.dispatch(updatePost_AC({ post }));
    this.router.navigate(['post']);
  }
}
