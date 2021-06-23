import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import UserDTO from '../../../dto/UserDTO';
import {UserService} from '../../../service/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm = new FormGroup({
    userEmail: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    userPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20)
    ])
  });

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  saveUser() {
    const user = new UserDTO(
      this.loginForm.get('userEmail')?.value,
      this.loginForm.get('userPassword')?.value
    );

    // @ts-ignore
    this.userService.saveUser(user);
  }

  // tslint:disable-next-line:typedef
  login() {

  }
}
