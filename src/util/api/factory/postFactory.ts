import Post from "../../../model/post";
import PostResponse from "../types/postResponse";

export default (data: PostResponse) => {
  return new Post(
    data.id,
    data.title,
    data.body,
    data.comment_ids,
    new Date(Date.parse(data.created_at))
  );
};