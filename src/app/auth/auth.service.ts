import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _userIsAuthenfiticated = false;
  private _userId = 'abc';
  constructor() {}
  get userId() {
    return this._userId;
  }
  get userIsAuthenfiticated() {
    return this._userIsAuthenfiticated;
  }
  logIn() {
    this._userIsAuthenfiticated = true;
  }
  logOut() {
    this._userIsAuthenfiticated = false;
  }
}
