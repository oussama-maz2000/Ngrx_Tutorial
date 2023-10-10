import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../model/classes/Post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  addPost(post: Post) {
    return this.http.post(
      'https://lgaliproject-default-rtdb.firebaseio.com/',
      post
    );
  }
}
