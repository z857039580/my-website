import {Injectable} from '@angular/core';
import {HttpService} from '../../core/index'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpService: HttpService ) {
  }

  login(user) {
    return this.httpService.post('login', user);
  }

  register(user) {
    return this.httpService.post('register', user);
  }

}
