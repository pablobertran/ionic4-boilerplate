import {Injectable} from "@angular/core";
import {AuthRequestInterface} from "./auth.request.interface";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {HttpResponseModel} from "../../common/models/http-response.model";
import {Observable} from "rxjs";

@Injectable()
export class AuthRequest implements AuthRequestInterface{
  baseURL: string = '';
  constructor(private http: HttpClient) {
    const baseUrl = environment.API.url;
    this.baseURL = `${baseUrl}/auth/`;
  }

  public login(email: string, password: string): Observable<HttpResponseModel> {
    return this.http.post<HttpResponseModel>(`${this.baseURL}/login`, {
      email,
      password
    });
  }

  public logout(): Observable<HttpResponseModel> {
    return this.http.get<HttpResponseModel>(`${this.baseURL}/logout`);
  }

  public passwordRequest(email: string): Observable<HttpResponseModel> {
    return this.http.post<HttpResponseModel>(`${this.baseURL}/password-request`, {
      email
    });
  }
}
