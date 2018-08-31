import Post from "./post";

export default class Comment {
  constructor(
    readonly id: number,
    readonly post: Post,
    readonly body: string,
    readonly name: string,
    readonly createdAt: Date
  ) {}
}