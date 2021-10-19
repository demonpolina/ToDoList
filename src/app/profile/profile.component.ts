import { Component, OnInit } from '@angular/core';
import { TodoCardComponent } from './todo-card/todo-card.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  title = 'ProfileComponent'

  constructor() { }

  

  ngOnInit(): void {
  }
 
}

