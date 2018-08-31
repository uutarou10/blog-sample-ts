import Comment from "./comment";

export default class Post {
  constructor(
    readonly id: number,
    readonly title: string,
    readonly body: string,
    readonly comments: Comment[],
    readonly createdAt: Date
  ) {}
}