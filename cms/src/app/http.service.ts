import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {CONFIG} from './config'

function createHttpOptions(paramsObj?: object) {
  let params = new HttpParams({fromObject: {...paramsObj}});
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': ''
  });
  return {headers, params};
}


@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(public http: HttpClient) {
  }

  public get(url: string, params?: Object) {
    let options = createHttpOptions(params)
    return this.http.get(CONFIG.baseUrl + url, options)
  }

  public post(url: string, data?: Object) {
    let options = createHttpOptions()
    return this.http.post(CONFIG.baseUrl + url, data, options)
  }

  public put(url: string, data?: Object) {
    console.log('put:start');
    let options = createHttpOptions()
    return this.http.put(CONFIG.baseUrl + url, data, options)
  }

  public delete(url: string, params?: Object) {
    let options = createHttpOptions(params)
    return this.http.delete(CONFIG.baseUrl + url, options)
  }

}
