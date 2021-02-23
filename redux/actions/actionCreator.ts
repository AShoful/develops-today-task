import { GET_POSTS } from '../constants';
import { ActionTypes, IPost } from '../types';
import { getPosts, addPost } from '../../api'

export const fetchPosts =  () => async (dispatch) => {
  const response = await getPosts()
  dispatch(setPosts(response.data));
}

export const fetchAddPost = async (data) => {
    const post = await addPost(data);
    try {
      console.log('Ok!');
    } catch (error) {
      console.log('OOPs!!!!');
    }
  };


const setPosts = (data: IPost[]): ActionTypes => ({
  type: GET_POSTS,
  payload: data
});

