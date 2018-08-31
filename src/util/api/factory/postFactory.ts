import PostResponse from "../types/postResponse";
import Post from "../../../model/post";

export default (data: PostResponse) => {
  return new Post(
    data.id,
    data.title,
    data.body,
    data.comment_ids,
    new Date(Date.parse(data.created_at))
  );
};