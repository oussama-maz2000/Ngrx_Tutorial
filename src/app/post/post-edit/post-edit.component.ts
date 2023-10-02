import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app_State/app.state';
import { getPostById } from '../shared/post.select';
import { Post } from '../shared/post.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { updatePost } from '../shared/post.action';

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
    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id');
      this.store.select(getPostById, { id }).subscribe((data) => {
        this.post = data;
        this.createFormPostUpdate();
      });
    });
  }

  createFormPostUpdate() {
    this.postForm = new FormGroup({
      title: new FormControl(this.post.title, [Validators.required]),
      description: new FormControl(this.post.description, [
        Validators.required,
      ]),
      img: new FormControl(this.post.img, [Validators.required]),
    });
  }

  submitFormPost() {
    let post: Post = {
      id: this.post.id,
      title: this.postForm.value.title,
      description: this.postForm.value.description,
      img: this.postForm.value.img,
    };

    this.store.dispatch(updatePost({ post }));
    this.router.navigate(['post']);
  }
}
