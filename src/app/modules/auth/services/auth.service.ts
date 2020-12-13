import {Injectable} from "@angular/core";
import {AuthRequest} from "../requests/auth.request";
import {Platform} from "@ionic/angular";
import {selectIsUserAuthenticated} from "../store/selectors/auth.selectors";
import {State as AuthState} from "../store/reducers/auth.reducers";

@Injectable()
export class AuthService {

  constructor(private authRequest: AuthRequest,
              private platform: Platform,
              private state: AuthState) {
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
