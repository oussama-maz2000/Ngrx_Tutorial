import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../shared/post.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app_State/app.state';
import { addPost } from '../shared/post.action';

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
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      img: new FormControl(null, Validators.required),
    });
  }

  onAddPost() {
    //console.log(this.postForm.value);
    let post: Post = {
      title: this.postForm.value.title,
      description: this.postForm.value.description,
      img: this.postForm.value.img,
    };
    this.store.dispatch(addPost({ post }));
  }
}
