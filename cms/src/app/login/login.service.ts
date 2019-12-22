import {Injectable} from '@angular/core';
import {CONFIG} from '../config'
import {HttpService} from '../http.service'
import { CookieService } from 'ngx-cookie-service';

const userCookieName = 'currentUser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpService: HttpService,
              private cookieService: CookieService) {
  }

  currentUser:any = this.getUserCookie() ? this.getUserCookie():undefined;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(user) {
    return this.httpService.post('login', user);
  }

  register(user) {
    return this.httpService.post('register', user);
  }

  setUserCookie(user:object){
    this.currentUser = user

    /* cookie 4小时失效 */
    let millisecond = new Date().getTime();
    let expiresTime = new Date(millisecond + 3600000 * 4);

    this.cookieService.set(userCookieName,JSON.stringify(user), expiresTime)
  }

  getUserCookie(){
    let cookieExists:boolean = this.cookieService.check(userCookieName);
    if(cookieExists){
      let cookieStr = this.cookieService.get(userCookieName)
      return JSON.parse(cookieStr)
    }else{
      return false
    }
  }

  removeUserCookie(){
    this.cookieService.delete(userCookieName)
  }

}
