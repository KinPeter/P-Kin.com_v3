import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { AuthData } from '~/app/admin/types/AuthData';
import { LoginResponse } from '~/app/admin/types/LoginResponse';
import { LoadingService } from '~/app/services/ui/loading.service';
import { apiKey } from '../../../../keys';

const loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;

@Injectable()
export class AuthService {
  private timer: number | undefined;
  private authData: BehaviorSubject<AuthData | null> = new BehaviorSubject<AuthData | null>(null);

  constructor(private http: HttpClient, private loading: LoadingService) {}

  public get isLoggedIn(): boolean {
    return !!this.authData.value?.idToken && this.authData.value?.expires > new Date().getTime();
  }

  public get idToken(): string | undefined {
    return this.authData.value?.idToken;
  }

  public async login(email: string, password: string): Promise<void> {
    this.loading.start();
    try {
      const res: LoginResponse = await this.http
        .post<LoginResponse>(loginUrl, {
          email,
          password,
          returnSecureToken: true,
        })
        .toPromise();
      this.handleLogin(res);
    } catch (e) {
      console.error('Could not log in: ', e);
    } finally {
      this.loading.stop();
    }
  }

  public autoLogin(): void {
    const rawData: string | null = sessionStorage.getItem('pk-adminauth');
    if (rawData) {
      const data = JSON.parse(rawData) as AuthData;
      if (data.expires > new Date().getTime()) {
        this.authData.next({
          idToken: data.idToken,
          expires: data.expires,
        });
        this.timer = setTimeout(() => {
          this.logout();
        }, data.expires - new Date().getTime());
        console.log('Login expires at ' + new Date(data.expires));
      }
    }
  }

  private handleLogin(res: LoginResponse): void {
    console.log(res);
    this.authData.next({
      idToken: res.idToken,
      expires: new Date().getTime() + +res.expiresIn * 1000,
    });
    sessionStorage.setItem('pk-adminauth', JSON.stringify(this.authData.value));
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.logout();
    }, +res.expiresIn * 1000);
    if (this.authData.value) {
      console.log('Login expires at ' + new Date(this.authData.value.expires));
    }
  }

  public logout(): void {
    this.authData.next(null);
    sessionStorage.removeItem('pk-adminauth');
    clearTimeout(this.timer);
  }
}
