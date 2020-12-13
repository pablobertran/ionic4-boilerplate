import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '/', redirectTo: 'login'},
  {path: 'login', loadChildren: () => import('./login'), pathMatch: 'full'},
  {path: 'signup', loadChildren: () => import('./sign-up'), pathMatch: 'full'},
  {path: 'password-forgotten', loadChildren: () => import('./forgot-password'), pathMatch: 'full'},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AuthenticationRoutingModule {}
