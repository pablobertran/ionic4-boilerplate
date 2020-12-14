import {Injectable} from "@angular/core";
import {AuthRequestInterface} from "./auth.request.interface";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable()
export class AuthRequest implements AuthRequestInterface{
  baseURL: string = '';
  constructor(private http: HttpClient) {
    const baseUrl = environment.API.url;
    this.baseURL = `${baseUrl}/auth/`;
  }

  public login(email: string, password: string) {
    return this.http.get(`${this.baseURL}/login`);
  }

  public logout() {
    return this.http.get(`${this.baseURL}/logout`);
  }

  public passwordRequest(email: string) {
    return this.http.get(`${this.baseURL}/password-request`);
  }
}
