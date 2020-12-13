import {Action} from "../../../core/models/action.model";

export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_ERROR = '[Auth] Login Error',
  LOGOUT = '[Auth] Logout',
  LOGOUT_SUCCESS = '[Auth] Logout Success',
  LOGOUT_ERROR = '[Auth] Logout Error',
  FORGOT_PASSWORD = '[Auth] Forgot Password',
  SIGNUP = '[Auth] Sign Up',
  SIGNUP_SUCCESS = '[Auth] Sign Up',
  SIGNUP_ERROR = '[Auth] Sign Up',
}

export class Login implements Action {
  readonly type: string = AuthActionTypes.LOGIN;
  constructor(public payload: any) {}
}

export class LoginSuccess implements Action {
  readonly type: string = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class LoginError implements Action {
  readonly type: string = AuthActionTypes.LOGIN_ERROR;
  constructor(public payload: any) {}
}

export class Logout implements Action {
  readonly type: string = AuthActionTypes.LOGOUT;
  constructor(public payload: any) {}
}

export class LogoutSuccess implements Action {
  readonly type: string = AuthActionTypes.LOGOUT_SUCCESS;
  constructor(){}
}

export class LogoutError implements Action {
  readonly type: string = AuthActionTypes.LOGOUT_ERROR;
  constructor(public payload: {error: any}){}
}

export class ForgotPassword implements Action {
  readonly type: string = AuthActionTypes.FORGOT_PASSWORD;
  constructor(public payload: any) {}
}

export class SignUp implements Action {
  readonly type: string = AuthActionTypes.SIGNUP;
  constructor(public payload: any) {}
}

export type AuthActions =
  | Login
  | LoginSuccess
  | LoginError
  | Logout
  | LogoutSuccess
  | LogoutError
  | ForgotPassword
  | SignUp;
