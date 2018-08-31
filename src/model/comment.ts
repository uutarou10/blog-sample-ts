
export default class Comment {
  constructor(
    readonly id: number,
    readonly postId: number,
    readonly body: string,
    readonly name: string,
    readonly createdAt: Date
  ) {}
}