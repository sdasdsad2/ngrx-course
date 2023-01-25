import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Store } from "@ngrx/store";

import { AuthService } from "../auth.service";
import { tap } from "rxjs/operators";
import { noop } from "rxjs";
import { Router } from "@angular/router";
import { AuthState } from "../reducers";
import { actLogin } from "../auth.actions";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private store: Store<AuthState>
  ) {
    this.form = fb.group({
      email: ["test@angular-university.io", [Validators.required]],
      password: ["test", [Validators.required]],
    });
  }

  ngOnInit() {}

  login() {
    const val = this.form.value;
    this.auth
      .login(val.email, val.password)
      .pipe(
        /** tap opetaror to handle side efects */
        tap((user) => {
          //save user data in ngrz storage
          this.store.dispatch(actLogin({ user }));
          // redirect to home url
          this.router.navigateByUrl("/courses");
        })
      )
      .subscribe(
        /** success */
        //just adding a noop (no operation) action operator
        noop,
        /** error */
        //is an error occurs an alert should be showed
        () => console.log("Upps!, someting goes wrong with the server...")
      );
  }
}
