import { client } from './index';
import Post from '../../model/post';

interface PostResponse {
  id: number,
  title: string,
  body: string,
  comments_id: number[],
  created_at: string
}

export default {
  getAll: async () => {
    const res = await client.get('/posts');
    
    return (res.data as Array<PostResponse>).map(postData => {
      return new Post(
        postData.id,
        postData.title,
        postData.body,
        [], // TODO: あとで
        new Date(Date.parse(postData.created_at))
      );
    });
  },
  getById: async (id: number) => {
    const res = await client.get(`/posts/${id}`);
    const postData = res.data as PostResponse;

    return new Post(
      postData.id,
      postData.title,
      postData.body,
      [], // TODO: あとで
      new Date(Date.parse(postData.created_at))
    );
  }
}