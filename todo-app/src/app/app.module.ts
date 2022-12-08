import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './services/todo.service';
import { AppRoutingModule } from './app-routing.module';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [AppComponent, TodoComponent, TodoListComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
