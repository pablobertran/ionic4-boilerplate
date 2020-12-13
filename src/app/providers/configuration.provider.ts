import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";

@Injectable()
export class ConfigurationProvider {
  constructor() {
  }

  setEnvironment(env: string) {

  }

  getCurrentEnvironment() {
    return environment;
  }

  getApiUrl() {
    return environment.API.url;
  }
}
