import { ADD_POST, ADD_POSTS } from './constants';

// Store
export interface IPost {
  id?: number;
  title: string;
  body: string;
}

export interface IState {
  posts: IPost[];
}

type id = number;

// Actions
interface IAddPost {
  type: typeof ADD_POST;
  payload: IPost;
}

interface IGetPosts {
  type: typeof ADD_POSTS;
  payload: IPost[];
}

export type ActionTypes = IAddPost | IGetPosts;
