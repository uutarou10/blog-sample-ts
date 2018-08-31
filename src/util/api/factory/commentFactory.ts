import CommentResponse from "../types/commentResponse";
import Comment from "../../../model/comment";

export default (data: CommentResponse) => {
  return new Comment(
    data.id,
    data.post_id,
    data.body,
    data.name,
    new Date(Date.parse(data.created_at))
  );
}