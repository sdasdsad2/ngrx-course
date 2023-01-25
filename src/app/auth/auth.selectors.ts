import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./reducers";

/**
 * createFeatureSelector
 * used to created save type selectors
 * it just receive a single string parameter to get acces to an specific part of the App's state
 * is also casted with the spefici data type returned
 */

export const selectAuthState = createFeatureSelector<AuthState>("auth");

/**
* createSelector
* Is a Ngrx's api to create a selector with multiple map opetarions.
* It receive 2-9 parameters but 2 are required at least to work with.

@State represents a mapping function to take the specific portion of the app state , in that case is "auth" using a feature selector
@auth is the portion of data from the state fetched with the first parameter and let us the chance to manipulate the data on it
*/
export const isLoggedIn = createSelector(
  selectAuthState,
  (auth) => !!auth.user
);
