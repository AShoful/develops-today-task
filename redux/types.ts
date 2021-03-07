import { ADD_POST, GET_POST, GET_POSTS } from './constants';

// Store
export interface IPost {
  id?: number;
  title: string;
  body: string;
}

type id = number;

// Actions
interface IAddPost {
  type: typeof ADD_POST;
  payload: IPost;
}

interface IGetPost {
  type: typeof GET_POST;
  payload: id;
}

interface IGetPosts {
  type: typeof GET_POSTS;
  payload: IPost[];
}

export type ActionTypes = IAddPost | IGetPost | IGetPosts;
