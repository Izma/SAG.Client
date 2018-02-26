import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { config } from '../../../config';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { IToken } from 'app/security/login/shared/token';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }


  public login(credentials: any): Observable<any> {
    return this.http.post(`${config.URL_API}/token`, credentials)
      .map((response: any) => {
        console.log(response);
        return response;
      });
  }
}
