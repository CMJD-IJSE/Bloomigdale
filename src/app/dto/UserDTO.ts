export default class UserDTO {
private _userEmail: string;
private _userPassword: string;

  constructor(userEmail: string, userPassword: string) {
    this._userEmail = userEmail;
    this._userPassword = userPassword;
  }

  get userEmail(): string {
    return this._userEmail;
  }

  set userEmail(value: string) {
    this._userEmail = value;
  }

  get userPassword(): string {
    return this._userPassword;
  }

  set userPassword(value: string) {
    this._userPassword = value;
  }
}
