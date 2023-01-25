import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
} from "@ngrx/store";
import { AuthActions } from "../action-types";

import { User } from "../model/user.model";

export const authFeatureKey = "auth";

export interface AuthState {
  user: User;
}

// export const reducers: ActionReducerMap<AppState> = {};

// create a declaration of the initial state

export const initialAuthState: AuthState = {
  user: undefined,
};

/** create the auth reducer to modify the auth state based on the login action
 * create reducer has 2 params
 * first parameter @initial_state
 * second parameter @On
 *
 */

export const authReducer = createReducer(
  initialAuthState,
  /**On API NgRx method
   * @AuthActions_login action that triggers the reducer
   * @NewState returned value for Auth state based on the login action
   * On shoud return a new state using the same JS object format
   */
  on(AuthActions.actLogin, (state, action) => {
    return {
      user: action.user,
    };
  }),

  // logout
  on(AuthActions.actLogout, (state, action) => {
    return {
      user: undefined,
    };
  })
);
