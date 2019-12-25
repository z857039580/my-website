import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

const userCookieName = 'currentUser';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser:any = this.getUserCookie() ? this.getUserCookie():undefined;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor( private cookieService: CookieService) { }

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


