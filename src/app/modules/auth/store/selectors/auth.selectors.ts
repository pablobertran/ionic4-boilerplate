import {State as AuthState} from "../reducers/auth.reducers";
import {createSelector} from "@ngrx/store";
import {User} from "../../models/user.model";

export const selectIsUserAuthenticated = (state: AuthState) => state.isAuthenticated;
export const selectUserProfile = (state: AuthState) => state.user;
export const selectAuthToken = createSelector(
  selectUserProfile,
  (state: User) => state.token
)
