import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from 'src/app/Note';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit {

  @Input() "note":Note
  @Input() "i":number
  @Output() noteDelete : EventEmitter<Note> = new EventEmitter()
  constructor() {}

  ngOnInit(): void {
  }
  deleteNote(note:Note) {
    // console.log(note)
    this.noteDelete.emit(note)
  }
}
