export default class Post {
  constructor(
    readonly id: number,
    readonly title: string,
    readonly body: string,
    readonly commentIds: number[],
    readonly createdAt: Date
  ) {}
}