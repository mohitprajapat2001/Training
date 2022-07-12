import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.css']
})
export class AddTodosComponent implements OnInit {

  @Input() "todo": Todo;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  // @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
  }
  onSubmit(x){
    var tile = x.target.elements[0].value;
    var description = x.target.elements[1].value;
    console.log("TITLE:"+tile,"desc:"+description);
    var todo = {
      sno:0,
      title:tile,
      desc:description,
      active:true
    }
    this.todoAdd.emit(todo);
    // this.todoAdd.emit(todo);
    console.log(todo)
    }
}
