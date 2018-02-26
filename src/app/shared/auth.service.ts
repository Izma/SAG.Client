import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

  constructor() { }


  /**
   * Obtiene el token Bearer de un session storage
   */
  public getToken() {
    return sessionStorage.getItem('token');
  }

  /**
   * Autentica si el token existe
   */
  public isAuthenticated(): boolean {
    const token = this.getToken();
    return tokenNotExpired(null, token);
  }
}
