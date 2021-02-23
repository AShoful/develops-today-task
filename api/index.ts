import axios from '../axios';
import {IPost} from '../redux/types'


export function getPosts() {
  return axios.get('')
};

export function addPost<T>(data: IPost): Promise<T>{
  return axios.post('', data)
};
