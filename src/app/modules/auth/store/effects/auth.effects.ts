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
  Login,
  LoginError,
  LoginSuccess,
  Logout,
  LogoutError,
  LogoutSuccess
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
      map((action: Login) => action.payload),
      switchMap(payload => {
        return this.authService.login(payload.email, payload.password)
          .pipe(
            map(
              (user: any) => {
                return new LoginSuccess({token: user.token, email: payload.email});
              }
            ),
            catchError(
              error => {
                return of(new LoginError(error));
              }
            )
          );
      })
    )

  @Effect()
  Logout: Observable<any> = this.actions$
    .pipe(
      ofType(AuthActionTypes.LOGOUT),
      map((action: Logout) => action.payload),
      switchMap(payload => {
        return this.authService.logout()
          .pipe(
            map(
              (response: any) => {
                return new LogoutSuccess();
              }
            ),
            catchError(error => {
              return of(new LogoutError({error}));
            })
          )
      })
    )
}
