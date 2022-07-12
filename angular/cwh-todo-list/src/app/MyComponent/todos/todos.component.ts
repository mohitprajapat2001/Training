import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  constructor() {
    this.todos = [
      {
        sno: 1,
        title: "Mohit",
        desc: "Prajapat",
        active: true
      },
      {
        sno: 2,
        title: "Yash",
        desc: "Shiva",
        active: true
      },
      {
        sno: 3,
        title: "Lata",
        desc: "Bhileshi",
        active: true
      },
      {
        sno: 3,
        title: "Parth",
        desc: "bairwa",
        active: true
      },
      {
        sno: 3,
        title: "Shakti",
        desc: "Singh",
        active: true
      }
    ]
  }

  ngOnInit(): void {
  }
  deleteTodo(todo: Todo) {
    console.log(todo)
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
  AddTodo(todo: Todo) {
    console.log(todo)
    this.todos.push(todo);
  }
  // addTodo(todo: Todo){
  //   console.log(todo);
  //   this.todos.push(todo);
  // }
}
