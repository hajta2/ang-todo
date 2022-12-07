import { Category } from 'src/app/categories/model/category.model';

export class Todo {
  id: number;
  title: string;
  description: string;
  startDate: Date;
  done: boolean;
  category: Category;
  constructor(
    id: number,
    title: string,
    description: string,
    startDate: Date,
    done: boolean,
    category: Category
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.startDate = startDate;
    this.done = done;
    this.category = category;
  }
}
