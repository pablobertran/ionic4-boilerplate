import {Action} from "../../../core/models/action.model";

export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_ERROR = '[Auth] Login Error',
  LOGOUT = '[Auth] Logout',
  LOGOUT_SUCCESS = '[Auth] Logout Success',
  LOGOUT_ERROR = '[Auth] Logout Error',
  FORGOT_PASSWORD = '[Auth] Forgot Password',
  FORGOT_PASSWORD_SUCCESS = '[Auth] Forgot Password Success',
  FORGOT_PASSWORD_ERROR = '[Auth] Forgot Password Error',
  SIGNUP = '[Auth] Sign Up',
  SIGNUP_SUCCESS = '[Auth] Sign Up',
  SIGNUP_ERROR = '[Auth] Sign Up',
}

export class LoginAction implements Action {
  readonly type: string = AuthActionTypes.LOGIN;
  constructor(public payload: any) {}
}

export class LoginSuccessAction implements Action {
  readonly type: string = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class LoginErrorAction implements Action {
  readonly type: string = AuthActionTypes.LOGIN_ERROR;
  constructor(public payload: any) {}
}

export class LogoutAction implements Action {
  readonly type: string = AuthActionTypes.LOGOUT;
  constructor(public payload: any) {}
}

export class LogoutSuccessAction implements Action {
  readonly type: string = AuthActionTypes.LOGOUT_SUCCESS;
  constructor(public payload: any){}
}

export class LogoutErrorAction implements Action {
  readonly type: string = AuthActionTypes.LOGOUT_ERROR;
  constructor(public payload: {error: any}){}
}

export class ForgotPasswordAction implements Action {
  readonly type: string = AuthActionTypes.FORGOT_PASSWORD;
  constructor(public payload: any) {}
}

export class ForgotPasswordSuccessAction implements Action {
  readonly type: string = AuthActionTypes.FORGOT_PASSWORD_SUCCESS;
  constructor(public payload: any) {}
}

export class ForgotPasswordErrorAction implements Action {
  readonly type: string = AuthActionTypes.FORGOT_PASSWORD_ERROR;
  constructor(public error: any) {}
}

export class SignUpAction implements Action {
  readonly type: string = AuthActionTypes.SIGNUP;
  constructor(public payload: any) {}
}

export class SignUpSuccessAction implements Action {
  readonly type: string = AuthActionTypes.SIGNUP_SUCCESS;
  constructor(public payload: any) {}
}

export class SignUpErrorAction implements Action {
  readonly type: string = AuthActionTypes.SIGNUP_ERROR;
  constructor(public error: any) {}
}

export type AuthActions =
  | LoginAction
  | LoginSuccessAction
  | LoginErrorAction
  | LogoutAction
  | LogoutSuccessAction
  | LogoutErrorAction
  | ForgotPasswordAction
  | ForgotPasswordSuccessAction
  | ForgotPasswordErrorAction
  | SignUpAction
  | SignUpSuccessAction
  | SignUpErrorAction;
