import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class VehiclesService {

  constructor(private http: Http) { }

  get(): Observable<any> {
    return this.http.get('api/person').map((response: Response) => {
      return response.json();
    });
  }
}
