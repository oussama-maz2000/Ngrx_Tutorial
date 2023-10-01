import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css'],
})
export class PostAddComponent implements OnInit {
  postForm: FormGroup;

  ngOnInit(): void {
    this.postForm = new FormGroup({
      id: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      img: new FormControl(null, Validators.required),
    });
  }

  onAddPost() {
    console.log(this.postForm.value);
  }
}
