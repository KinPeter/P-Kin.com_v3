import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { AuthData } from '~/app/admin/types/AuthData';
import { LoginResponse } from '~/app/admin/types/LoginResponse';
import { LoadingService } from '~/app/services/ui/loading.service';
import { SnackbarService } from '~/app/admin/services/snackbar.service';
import { apiKey, loginBaseUrl } from '../../../../keys';

const loginUrl = `${loginBaseUrl}${apiKey}`;
const now = (): number => {
  return new Date().getTime();
};

@Injectable()
export class AuthService {
  private logoutTimer: number | undefined;
  private warningTimer: number | undefined;
  private authData: BehaviorSubject<AuthData | null> = new BehaviorSubject<AuthData | null>(null);

  constructor(
    private http: HttpClient,
    private loading: LoadingService,
    private snackbar: SnackbarService
  ) {}

  public get isLoggedIn(): boolean {
    return !!this.authData.value?.idToken && this.authData.value?.expires > now();
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
      this.snackbar.showError(`Could not log in! (${e.error.error.message.toLowerCase()})`);
    } finally {
      this.loading.stop();
    }
  }

  public tryAutoLogin(): void {
    const rawData: string | null = sessionStorage.getItem('pk-adminauth');
    if (rawData) {
      const data = JSON.parse(rawData) as AuthData;
      if (data.expires > now()) {
        this.authData.next({
          idToken: data.idToken,
          expires: data.expires,
        });
        this.setLogoutTimer(data.expires - now());
        this.setWarningTimer(data.expires - now());
      } else {
        this.logout();
      }
    }
  }

  private handleLogin(res: LoginResponse): void {
    this.authData.next({
      idToken: res.idToken,
      expires: now() + +res.expiresIn * 1000,
    });
    sessionStorage.setItem('pk-adminauth', JSON.stringify(this.authData.value));
    this.setLogoutTimer(+res.expiresIn * 1000);
    this.setWarningTimer(+res.expiresIn * 1000);
  }

  private setLogoutTimer(expiresIn: number): void {
    clearTimeout(this.logoutTimer);
    this.logoutTimer = setTimeout(() => {
      this.logout();
    }, expiresIn);
  }

  private setWarningTimer(expiresIn: number): void {
    const warningIn = expiresIn - 5 * 60 * 1000;
    if (warningIn > now()) {
      this.snackbar.showWarning('Your session will expire in less than 5 minutes!');
    } else {
      clearTimeout(this.warningTimer);
      this.warningTimer = setTimeout(() => {
        this.snackbar.showWarning('Your session will expire in 5 minutes!');
      }, warningIn);
    }
  }

  public logout(): void {
    this.authData.next(null);
    sessionStorage.removeItem('pk-adminauth');
    clearTimeout(this.logoutTimer);
  }
}
