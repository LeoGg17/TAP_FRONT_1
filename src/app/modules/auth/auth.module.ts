import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import {RouterModule, Routes} from "@angular/router";
import {MaterialModule} from "../../../material/material.module";
import {GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule} from "angularx-social-login";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MaterialFileInputModule} from "ngx-material-file-input";

const routes: Routes = [
  {
    path: 'inicio_sesion',
    component: IniciosesionComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }

];

@NgModule({
  declarations: [
    IniciosesionComponent,
    LoginComponent,
    SignupComponent,


  ],
  exports:[RouterModule],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
    MaterialFileInputModule

  // ],providers: [
  //   {
  //     provide: 'SocialAuthServiceConfig',
  //     useValue: {
  //       autoLogin: false,
  //       providers: [
  //         {
  //           id: GoogleLoginProvider.PROVIDER_ID,
  //           provider: new GoogleLoginProvider(
  //             '1011592573922-clhlkvnc4o7p2sedec68brull2t3qmb1.apps.googleusercontent.com'
  //           )
  //         }
  //       ]
  //     } as SocialAuthServiceConfig,
  //   }
  ]
})
export class AuthModule { }
