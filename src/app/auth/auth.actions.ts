import { createAction, props } from "@ngrx/store";
import { User } from "./model/user.model";

export const actLogin = createAction(
  /** "[first parameter second parameter]"
   *  @first : source of the action
   *  @second : event/command that the action correspond
   */
  "[Login Component] User Login",
  // props function does not has parameters but needs to be casted using the same type of the payload associated to the action
  props<{ user: User }>()
);

export const actLogout = createAction("[Top Menu] Logout");
