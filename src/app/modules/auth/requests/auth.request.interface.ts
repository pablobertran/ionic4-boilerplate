import {Observable} from "rxjs";

export interface AuthRequestInterface {
  login(email: string, password: string): Observable<any>;
  logout(): Observable<any>;
  passwordRequest(email: string): Observable<any>;
}
