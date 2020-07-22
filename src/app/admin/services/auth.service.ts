import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  public get isLoggedIn(): boolean {
    return false;
  }

  constructor() {}
}
