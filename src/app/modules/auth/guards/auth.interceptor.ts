import {Injectable} from "@angular/core";
import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {selectAuthToken} from "../store/selectors/auth.selectors";
import { AuthState} from "../store/state/auth.state";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private state: AuthState,
              private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token: string = selectAuthToken(this.state);

    let request = req;

    if(token) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${token}`,
        }
      });
    }

    return next.handle(request)
      .pipe(
        catchError( error => {

          if(error.status === 401) {
            this.router.navigateByUrl('/auth/login');
          }

          return throwError(error);
        })
      );
  }
}
