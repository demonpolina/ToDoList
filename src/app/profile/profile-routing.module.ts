import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { SettingsComponent } from './settings/settings.component';
import { Routes } from '@angular/router';

const profileRoutes: Routes = [
   {path: 'profile', component: TodoCardComponent},
    {path: 'settings', component: SettingsComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProfileRoutingModule { }
