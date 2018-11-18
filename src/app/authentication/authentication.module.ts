import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './register/registration.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    AuthenticationRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class AuthenticationModule { }
