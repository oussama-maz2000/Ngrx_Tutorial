import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Post } from 'src/app/model/classes/Post.model';

export interface PostState extends EntityState<Post> {}

export const postAdapter = createEntityAdapter<Post>();
