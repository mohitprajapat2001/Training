import { Component } from '@angular/core';
import { Note } from './Note';

interface Alert {
  type: string;
  message: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning';
  notes: Note[]
  localItem: any;
  constructor() {
    this.localItem = localStorage.getItem("notes");
    if (this.localItem==null){
      this.notes = []
    }
    else{
      this.notes = JSON.parse(this.localItem)
    }
  }
  ngOnInit(): void {
  }
  deleteNote(note:Note) {
    const index = this.notes.indexOf(note);
    this.notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(this.notes));
  }
  addNote(note:Note){
    this.notes.push(note);
    localStorage.setItem("notes", JSON.stringify(this.notes));
    console.log(this.notes.length)
  }
}
