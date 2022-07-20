import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getLocaleDateFormat } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  get(arg0: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) {}
  
  getData(){
    let url = 'https://jsonplaceholder.typicode.com/todos/'
    return this.http.get(url);
  }
}
