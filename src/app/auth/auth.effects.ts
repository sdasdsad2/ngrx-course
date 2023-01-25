import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { dispatch } from "rxjs/internal/observable/pairs";
import { tap } from "rxjs/operators";
import { AuthActions } from "./action-types";

@Injectable()
/**
 * createEffect
 * @Note1 provides a way to avoid a manual subscription to the actions observable
 * @Note2 should return a side effect observable
 * @Note3 provides a error handling logic when something goes wrong with the action subscription , if this happens then exetute the task again
 */
export class AuthEffects {
  login$ = createEffect(
    () =>
      this.actions$.pipe(
        //NgRx operator that filter data by type
        ofType(AuthActions.actLogin),
        tap((action) =>
          localStorage.setItem("user", JSON.stringify(action.user))
        )
      ),
    //dispatch in false means that this effect does not trigger a new action after execute it.
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        //NgRx operator that filter data by type
        ofType(AuthActions.actLogout),
        tap(() => {
          localStorage.removeItem("user");
          this.router.navigateByUrl("/login");
        })
      ),
    { dispatch: false }
  );
  constructor(private actions$: Actions, private router: Router) {}
}
