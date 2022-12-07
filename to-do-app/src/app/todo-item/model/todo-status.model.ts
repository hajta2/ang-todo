export class TodoStatus {
  public id: number;
  public isDone: boolean;
  constructor(id: number, isDone: boolean) {
    this.id = id;
    this.isDone = isDone;
  }
}
