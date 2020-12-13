import {Injectable} from "@angular/core";
import {AuthRequestInterface} from "./auth.request.interface";
import {HttpClient} from "@angular/common/http";
import {ConfigurationProvider} from "../../../providers/configuration.provider";

@Injectable()
export class AuthRequest implements AuthRequestInterface{
  baseURL: string = '';
  constructor(private http: HttpClient,
              private configProvider: ConfigurationProvider) {
    const baseUrl = this.configProvider.getApiUrl();
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
