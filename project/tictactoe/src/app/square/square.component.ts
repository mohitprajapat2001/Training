import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  random: number;
  tictak: number;
  constructor() {
    setInterval(() =>
      this.random = Math.random()
    , 500)
  }
  ngOnInit(): void { }
  getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    this.tictak = Math.floor(Math.random() * (max - min + 1)) + min; 
  }
}
