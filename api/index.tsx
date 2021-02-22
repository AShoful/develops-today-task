import axios from '../axios';

type DataType = {
  title: string,
  body: string
}

export function getPosts<T>(): Promise<T>{
  return axios.get('')
}

export function getPost<T>(id: string): Promise<T>{
  return axios.get(`${id}?_embed=comments`)
}

export function addPost<T>(data: DataType): Promise<T>{
  return axios.post('', data)
}



// const api = {
//   getPosts: (): Promise<T> =>  axios.get(''),
//   getPost: (id: string): Promise<T> => axios.get(`${id}?_embed=comments`),
//   addPost: (data: DataType): Promise<T> => axios.post('', data),  
// };

// export default api
