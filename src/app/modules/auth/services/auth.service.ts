import {Injectable} from "@angular/core";
import {AuthRequest} from "../requests/auth.request";
import {Platform} from "@ionic/angular";
import {selectIsUserAuthenticated} from "../store/selectors/auth.selectors";
import * as authState from "../store/reducers/auth.reducers";
import {AuthState} from "../store/state/auth.state";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";

@Injectable()
export class AuthService {

  private state: Observable<AuthState>;

  constructor(private authRequest: AuthRequest,
              private platform: Platform,
              private store: Store) {
    this.state = this.store.pipe( select(authState.reducer));
  }

  login(email: string, password: string) {
    return this.authRequest.login(email, password);
  }

  logout() {
    return this.authRequest.logout();
  }

  isAuthenticated(): boolean {
    return selectIsUserAuthenticated(this.state);
  }
}
