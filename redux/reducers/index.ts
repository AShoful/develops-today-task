import { ADD_POST, ADD_POSTS } from '../constants';
import { IPost, ActionTypes } from '../types';

type statePosts = IPost[];

const posts = (state = [], action: ActionTypes): statePosts => {
  switch (action.type) {
    case ADD_POST:
      return [...state, action.payload];
    case ADD_POSTS:
      return [...action.payload];

    default:
      return state;
  }
};

export default posts;
