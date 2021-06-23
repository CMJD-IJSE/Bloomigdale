import {Injectable, Type} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import UserDTO from '../dto/UserDTO';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loginUrl = environment.loginUrl;

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  public async saveUser(u: UserDTO) {
    const userEmail = u.userEmail;
    const userPassword = u.userPassword;
    const result = await fetch(this.loginUrl + 'saveUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userEmail,
        userPassword
      })
    }).then((res) => res.json());
    console.log(result);
    /*return this.http.post(this.loginUrl + 'saveUser', JSON.stringify({
      userEmail: u.userEmail,
      userPassword: u.userPassword
    }), {headers: {type: 'application/json'}});*/
  }
}
