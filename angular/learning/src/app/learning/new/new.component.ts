import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Note } from 'src/app/Note';

interface Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})

export class NewComponent implements OnInit {
  title = "";
  desc = "";
  @Output() noteAdd: EventEmitter<Note> = new EventEmitter();
  ngOnInit(): void {
  }
  onAdd(){
    // console.log(this.title)
    // console.log(this.desc)
    const note = {
      "title":this.title,
      "desc": this.desc,
      "active": true
    }
    this.noteAdd.emit(note)
  }
}
