import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {selectAuthState, selectIsUserAuthenticated} from "../store/selectors/auth.selectors";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AuthState} from "../store/state/auth.state";
import * as fromStore from '../store/reducers/auth.reducers';

@Injectable()
export class AuthGuard implements CanActivate {
  private authState: Observable<AuthState> = null;
  constructor(private authService: AuthService,
              private store: Store) {
    this.authState = this.store.pipe( select(fromStore.reducer));
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
    return selectIsUserAuthenticated(this.authState);
  }
}
