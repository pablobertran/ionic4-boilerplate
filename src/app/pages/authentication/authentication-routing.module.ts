import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthenticationComponent} from "./authentication.component";
import {LoginPageComponent} from "./login/login-page.component";
import {SignUpPageComponent} from "./sign-up/sign-up-page.component";
import {ForgotPasswordPageComponent} from "./forgot-password/forgot-password-page.component";

const routes: Routes = [
  {
    path: '', component: AuthenticationComponent, children: [
      {path: '', redirectTo: 'login'},
      {path: 'login', component: LoginPageComponent, pathMatch: 'full'},
      {path: 'signup', component: SignUpPageComponent, pathMatch: 'full'},
      {path: 'password-forgotten', component: ForgotPasswordPageComponent, pathMatch: 'full'},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AuthenticationRoutingModule {
}
