export default interface PostResponse {
  id: number,
  title: string,
  body: string,
  comment_ids: number[],
  created_at: string
}