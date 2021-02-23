import { ADD_POST, GET_POSTS } from '../constants';
import { IPost, ActionTypes } from '../types';

type stateTasks = IPost[];

const posts = (state = [], action: ActionTypes): stateTasks => {
  switch (action.type) {
    case ADD_POST :
      return [
        ...state, action.payload
    ];
    case GET_POSTS :
      return action.payload;
    
  default:
    return state;
  };
};

export default posts;
