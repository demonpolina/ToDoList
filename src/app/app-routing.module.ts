import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SettingsComponent } from './profile/settings/settings.component';
import { AuthLayoutComponent } from 'src/app/layouts/auth-layout/auth-layout.component';
import { SystemLayoutComponent } from 'src/app/layouts/system-layout/system-layout.component';

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent, children: [
      {path:'', redirectTo:'/signin', pathMatch:'full'},
      {path:'signin', component: SigninComponent},
      {path:'signup', component: SignupComponent}
      
    ]
  },
  {
    path: 'mainpage', component: SystemLayoutComponent, children: [
      {path:'mainpage', component: MainpageComponent},
      {path:'profile', component: ProfileComponent, children: [
       {path:'settings', component: SettingsComponent}
      ]}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})

export class AppRoutingModule { }