export class Todo {
  id: number;
  title: string;
  description: string;
  startDate: Date;
  done: boolean;
  constructor(
    id: number,
    title: string,
    description: string,
    startDate: Date,
    done: boolean
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.startDate = startDate;
    this.done = done;
  }
}
