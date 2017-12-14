import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IUser } from './user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private http: Http) { }


  public addUser(user: IUser) {
    return true;
  }
}
