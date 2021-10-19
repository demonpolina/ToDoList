import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
    <h1>TODO(oom)</h1>
    <nav>
      <a routerLink="">MainPage</a>
      <a routerLink="/signin">SignIN</a>
      <a routerLink="/signup">SignUP</a>
      <a routerLink="/profile">Profile</a>
    </nav>
    <router-outlet></router-outlet>
    </div>`
})
export class AppComponent {
  title = 'toDoList';
}
