import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() i:number;
  @Input() "todo": Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoToggle: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onBtnClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log("btn trigger")
  }
  onToggle(todo:Todo) {
    this.todoToggle.emit(todo);
    console.log(todo)
    
  }
}
