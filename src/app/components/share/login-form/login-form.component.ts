import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  loginForm = new FormGroup({
    userEmail: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    userPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20)
    ])
  });

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  login() {

  }
}
