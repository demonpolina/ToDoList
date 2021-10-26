import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { TodoCardComponent } from './profile/todo-card/todo-card.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { SystemLayoutComponent } from './layouts/system-layout/system-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    SigninComponent,
    SignupComponent,
    ProfileComponent,
    TodoCardComponent,
    AuthLayoutComponent,
    SystemLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
