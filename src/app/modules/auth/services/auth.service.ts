import {Injectable} from "@angular/core";
import {AuthRequest} from "../requests/auth.request";
import {Platform} from "@ionic/angular";
import {selectIsUserAuthenticated} from "../store/selectors/auth.selectors";
import * as authState from "../store/reducers/auth.reducers";
import {AuthState} from "../store/state/auth.state";
import {select, Store} from "@ngrx/store";
import {Observable, of} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {HttpResponseModel} from "../../common/models/http-response.model";

@Injectable()
export class AuthService {

  private state: Observable<AuthState>;

  constructor(private authRequest: AuthRequest,
              private platform: Platform,
              private store: Store) {
    this.state = this.store.pipe( select(authState.reducer));
  }

  login(email: string, password: string): Observable<any> {
    return this.authRequest.login(email, password).pipe(
      map( (response: HttpResponseModel) => {
        return {
          user: response.data.user,
        }
      })
    );
  }

  logout(): Observable<boolean> {
    return this.authRequest.logout().pipe(
      map( (response: HttpResponseModel) => {
        return true;
      }),
      catchError( (error: any) => {
        return of(false);
      })
    );
  }

  requestPassword(email: string): Observable<string | boolean> {
    return this.authRequest.passwordRequest(email).pipe(
      map( (response: HttpResponseModel) => {
        return response.data.changePasswordLink;
      }),
      catchError( (error: any) => {
        return of(false);
      })
    );
  }

  isAuthenticated(): boolean {
    return selectIsUserAuthenticated(this.state);
  }
}
