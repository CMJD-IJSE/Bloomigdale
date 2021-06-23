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

  public async saveUser(u: UserDTO): Promise<Observable<any>> {
    return this.http.post(this.loginUrl + 'saveUser', JSON.stringify({
      userEmail: u.userEmail,
      userPassword: u.userPassword
    }), {headers: {type: 'application/json'}});
  }
}
