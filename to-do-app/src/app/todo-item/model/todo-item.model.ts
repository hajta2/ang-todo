import { ToDoPriority } from './todo-priority.model';
import { TodoStatus } from './todo-status.model';

export class TodoItem {
  public id: number;
  public title: string;
  public description: string;
  public created: Date;
  public status: TodoStatus;
  public priority: ToDoPriority;
  constructor(
    id: number,
    title: string,
    status: TodoStatus,
    description: string,
    created: Date,
    priority: ToDoPriority
  ) {
    this.id = id;
    this.title = title;
    this.status = status;
    this.description = description;
    this.created = created;
    this.priority = priority;
  }
}
