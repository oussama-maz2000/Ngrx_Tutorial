export interface PostState {
  posts: Post[];
}

export interface Post {
  id: number;
  title: string;
  description: string;
  img?: string;
}
