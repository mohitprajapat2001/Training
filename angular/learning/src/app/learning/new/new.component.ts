import { Component, OnInit } from '@angular/core';
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
  username = ""
  show="yes"
  color=""
  constructor() {
   }

  ngOnInit(): void {
  }

  getName() {
    alert(this.username)
    this.username;
  }
  getformval(value: any){
    console.log(value.username)
  }
}
