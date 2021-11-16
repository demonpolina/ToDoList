import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SettingsComponent } from './settings/settings.component';
import { TodoCardComponent } from './todo-card/todo-card.component';

@NgModule({
    declarations: [
        ProfileComponent,
        SettingsComponent,
        TodoCardComponent
    ],
    imports: [
      BrowserModule,
      ProfileRoutingModule
    ],
    providers: [],
    bootstrap: [ProfileComponent]
  })
  export class ProfileModule { }
  