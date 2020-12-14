import {createFeatureSelector, createSelector} from "@ngrx/store";
import {User} from "../../models/user.model";
import {AuthState} from "../state/auth.state";

export const selectAuthState = createFeatureSelector<AuthState>('auth');
export const selectIsUserAuthenticated = createSelector(
  selectAuthState,
  (state: AuthState) => state.isAuthenticated
);
export const selectUserProfile = createSelector(
  selectAuthState,
  (state: AuthState) => state.user
);
export const selectAuthToken = createSelector(
  selectUserProfile,
  (state: User) => state.token
);
