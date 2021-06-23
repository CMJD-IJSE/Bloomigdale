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

    if (result.status === 'ok'){
      alert('success');
    }else{
      alert(result.error);
    }
  }

  // tslint:disable-next-line:typedef
  public async login(u: UserDTO){
    const userEmail = u.userEmail;
    const userPassword = u.userPassword;
    const result = await fetch(this.loginUrl + 'login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userEmail,
        userPassword
      })
    }).then((res) => res.json());

    if (result.status === 'ok'){
      console.log('Got the token: ', result.data);

    }else{
      alert(result.error);
    }
  }
}
