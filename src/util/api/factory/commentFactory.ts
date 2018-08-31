import Comment from "../../../model/comment";
import CommentResponse from "../types/commentResponse";

export default (data: CommentResponse) => {
  return new Comment(
    data.id,
    data.post_id,
    data.body,
    data.name,
    new Date(Date.parse(data.created_at))
  );
}