import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { config } from '../../../../config';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MenuService {
  private _url = config.URL_API;
  constructor(private http: Http) { }

  public getMenu(): Observable<any> {
    return this.http.get(this._url + `/menu`).map((response: Response) => JSON.parse(response.json()));
  }

}
