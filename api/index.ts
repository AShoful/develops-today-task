import axios from '../axios';
import { IPost } from '../redux/types';


export function getPosts() {
  return axios.get('');
};

export function getPost(id) {
  return axios.get(`/${id}`);
};

export function addPost<T>(data: IPost): Promise<T>{
  return axios.post('', data);
};
