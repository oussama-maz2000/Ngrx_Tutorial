import { Post } from 'src/app/model/classes/Post.model';
import { PostState, postAdapter } from './post.model';

export const postInitialState: PostState = postAdapter.getInitialState();
