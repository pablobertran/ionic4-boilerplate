import {User} from "../../models/user.model";
import {AuthActions, AuthActionTypes} from "../actions/auth.actions";

export interface State {
  isAuthenticated: boolean;
  user: User | null;
  errorMessage: string | null;
}

export const initialState: State = {
  isAuthenticated: false,
  user: null,
  errorMessage: null
};

export function reducer(state = initialState, action: AuthActions) {
  switch(action.type) {
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          token: action.payload.token,
          email: action.payload.email,
        },
        errorMessage: null
      }
    }
    default: {
      return state;
    }
  }
}
