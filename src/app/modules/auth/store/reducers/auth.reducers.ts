import {AuthActionTypes} from "../actions/auth.actions";
import {AuthState} from "../state/auth.state";
import {Action} from "../../../core/models/action.model";

export const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  errorMessage: null
};

// TODO -> Review action strong typing
export function reducer(state = initialState, action: Action): AuthState {
  switch(action.type) {
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          ...action.payload
        },
        errorMessage: null
      }
    }
    default: {
      return state;
    }
  }
}
