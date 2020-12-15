import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {Actions, Effect, ofType} from '@ngrx/effects';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import {catchError, map, switchMap} from 'rxjs/operators';
import {
  AuthActionTypes,
  ForgotPasswordAction,
  ForgotPasswordErrorAction,
  ForgotPasswordSuccessAction,
  LoginAction,
  LoginErrorAction,
  LoginSuccessAction,
  LogoutAction,
  LogoutErrorAction,
  LogoutSuccessAction
} from "../actions/auth.actions";


@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions,
              private authService: AuthService,
              private router: Router) {
  }

  @Effect()
  Login: Observable<any> = this.actions$
    .pipe(
      ofType(AuthActionTypes.LOGIN),
      map((action: LoginAction) => action.payload),
      switchMap(payload => {
        return this.authService.login(payload.email, payload.password)
          .pipe(
            map(
              (user: any) => {
                return new LoginSuccessAction(user);
              }
            ),
            catchError(
              error => {
                return of(new LoginErrorAction(error));
              }
            )
          );
      })
    )

  @Effect()
  Logout: Observable<any> = this.actions$
    .pipe(
      ofType(AuthActionTypes.LOGOUT),
      map((action: LogoutAction) => action.payload),
      switchMap(payload => {
        return this.authService.logout()
          .pipe(
            map(
              (response: any) => {
                return new LogoutSuccessAction(response);
              }
            ),
            catchError(error => {
              return of(new LogoutErrorAction({error}));
            })
          )
      })
    )

  @Effect()
  RequestPassword: Observable<any> = this.actions$
    .pipe(
      ofType(AuthActionTypes.FORGOT_PASSWORD),
      map((action: ForgotPasswordAction) => action.payload),
      switchMap(payload => {
        return this.authService.requestPassword(payload)
          .pipe(
            map(
              (response: boolean) => {
                return new ForgotPasswordSuccessAction(response);
              }
            ),
            catchError(error => {
              return of(new ForgotPasswordErrorAction({error}));
            })
          )
      })
    )
}
