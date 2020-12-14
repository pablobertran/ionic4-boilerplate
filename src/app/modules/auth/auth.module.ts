import {NgModule} from "@angular/core";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthGuard} from "./guards/auth.guard";
import {AuthService} from "./services/auth.service";
import {AuthRequest} from "./requests/auth.request";
import {StoreModule} from "@ngrx/store";

import * as authStore from './store/reducers/auth.reducers';
import {AuthInterceptor} from "./guards/auth.interceptor";

@NgModule({
  imports: [
    HttpClientModule,
    StoreModule.forRoot({auth: authStore.reducer})
  ],
  providers: [
    AuthGuard,
    AuthService,
    AuthRequest,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ]
})
export class AuthModule {}
