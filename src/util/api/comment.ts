import { client } from '.';
import commentFactory from './factory/commentFactory';
import CommentResponse from './types/commentResponse';

export default {
  getAll: async () => {
    const res = await client.get('/comments');

    return (res.data as CommentResponse[]).map(commentData => {
      return commentFactory(commentData);
    });
  },
  getById: async (id: number) => {
    const res = await client.get(`/comments/${id}`);
    const commentData = res.data as CommentResponse;

    return commentFactory(commentData);
  }
}