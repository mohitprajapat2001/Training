import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';


export class AppModule { }
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Input() "todo": Todo;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  username: any = '';

  constructor() { }

  ngOnInit(): void {
  }
  onAdd(){
    let title = this.username;
    var todo={
      title:title,
      active:true
    }
    console.log(todo)
    this.todoAdd.emit(todo)
  }

}

