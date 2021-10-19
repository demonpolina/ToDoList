import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { TodoCardComponent } from './profile/todo-card/todo-card.component';


@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    SigninComponent,
    SignupComponent,
    ProfileComponent,
    TodoCardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
