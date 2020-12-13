import * as AuthState from "../../auth/store/reducers/auth.reducers";

export interface AppState {
  authState: AuthState.State,
}
