import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SettingsComponent } from './profile/settings/settings.component';

const routes: Routes = [
  {path:'signin', component: SigninComponent},
  {path:'signup', component: SignupComponent},
  {path:'profile', component: ProfileComponent},
  {path:'', component: MainpageComponent},
  {path: 'profile/settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
