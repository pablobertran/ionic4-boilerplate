import {NgModule} from "@angular/core";
import {AuthenticationComponent} from "./authentication.component";
import {ForgotPasswordPageModule} from "./forgot-password/forgot-password-page.module";
import {LoginPageModule} from "./login/login-page.module";
import {SignUpPageModule} from "./sign-up/sign-up-page.module";
import {AuthenticationRoutingModule} from "./authentication-routing.module";

@NgModule({
  declarations: [
    AuthenticationComponent,
  ],
  imports: [
    AuthenticationRoutingModule,
    ForgotPasswordPageModule,
    LoginPageModule,
    SignUpPageModule,
  ]
})
export class AuthenticationModule {}
