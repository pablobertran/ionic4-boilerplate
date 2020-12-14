import {NgModule} from "@angular/core";
import {AuthenticationComponent} from "./authentication.component";
import {AuthenticationRoutingModule} from "./authentication-routing.module";
import {LoginPageComponent} from "./login/login-page.component";
import {ForgotPasswordPageComponent} from "./forgot-password/forgot-password-page.component";
import {SignUpPageComponent} from "./sign-up/sign-up-page.component";

@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginPageComponent,
    ForgotPasswordPageComponent,
    SignUpPageComponent
  ],
  imports: [
    AuthenticationRoutingModule,
  ]
})
export class AuthenticationModule {}
