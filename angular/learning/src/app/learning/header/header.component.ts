import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  hover = "true";
  constructor() { }

  ngOnInit(): void {
  }

  classAddElement() {
    let elem = document.getElementsByClassName("active");
    const arrElem = Array.prototype.slice.call(elem, 0)
    // console.log(arrElem);
    arrElem[0].classList.toggle('disabled');
  }
  classRemoveElement() {
    let elem = document.getElementsByClassName("active");
    const arrElem = Array.prototype.slice.call(elem, 0)
    // console.log(arrElem);
    arrElem[0].classList.toggle('disabled');
  }
  
}
