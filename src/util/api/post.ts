import postFactory from './factory/postFactory';
import { client } from './index';
import PostResponse from './types/postResponse';

export default {
  getAll: async () => {
    const res = await client.get('/posts');
    
    return (res.data as PostResponse[]).map(postData => {
      return postFactory(postData)
    });
  },
  getById: async (id: number) => {
    const res = await client.get(`/posts/${id}`);
    const postData = res.data as PostResponse;

    return postFactory(postData);
  }
}