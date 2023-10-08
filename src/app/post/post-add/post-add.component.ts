import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app_State/app.state';
import { addPost } from '../shared/post.action';
import { Post } from 'src/app/model/classes/Post.model';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css'],
})
export class PostAddComponent implements OnInit {
  postForm: FormGroup;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.postForm = new FormGroup({
      userId: new FormControl(null, [Validators.required]),
      title: new FormControl(null, [Validators.required]),
      body: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      img: new FormControl(null, [Validators.required]),
    });
  }

  onAddPost() {
    //console.log(this.postForm.value);
    let post: Post = {
      userId: this.postForm.value.userId,
      body: this.postForm.value.body,
      title: this.postForm.value.title,
      description: this.postForm.value.description,
      img: this.postForm.value.img,
    };
    this.store.dispatch(addPost({ post }));
  }
}
