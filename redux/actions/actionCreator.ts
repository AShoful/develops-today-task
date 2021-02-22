import { ADD_POST, GET_POSTS, GET_POST } from '../constants';
import { ActionTypes, IPost } from '../types';

export const addPost = (post: IPost): ActionTypes => ({
  type: ADD_POST,
  payload: post
  });

export const getPost = (id: string): ActionTypes => ({
  type: GET_POST,
  payload: id
});

export const getPosts = (data: IPost[]): ActionTypes => ({
  type: GET_POSTS,
  payload: data
});

