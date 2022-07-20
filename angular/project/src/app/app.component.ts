import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  constructor(private http:HttpClient) {}
  todos : any[] = [];
  gettodos() {
    this.http
    .get('https://jsonplaceholder.typicode.com/todos/')
    .subscribe((http : any) => {
      this.todos = http;
    })
  }

}
