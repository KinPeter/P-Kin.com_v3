import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '~/app/services/ui/loading.service';
import { SnackbarService } from '~/app/admin/services/snackbar.service';
import { apiBaseUrl } from '../../../../keys';

@Injectable()
export class AdminApiService {
  constructor(
    private http: HttpClient,
    private loading: LoadingService,
    private snackbar: SnackbarService
  ) {}

  public async get<T>(path: string): Promise<T> {
    this.loading.start();
    try {
      return await this.http.get<T>(apiBaseUrl + path).toPromise();
    } catch (e) {
      this.snackbar.showError(`Could not get from ${path}`);
      throw new Error(`${e} \n Unable to get from ${path}`);
    } finally {
      this.loading.stop();
    }
  }

  public async post<Q, R>(
    path: string,
    payload: Q,
    options: Record<string, unknown> = {}
  ): Promise<R> {
    this.loading.start();
    try {
      const res = await this.http.post<R>(apiBaseUrl + path, payload, options).toPromise();
      this.snackbar.showMessage('Save successful!');
      return res;
    } catch (e) {
      this.snackbar.showError(`Could not save data for ${path.split('.')[0]}`);
      throw new Error(`${e} \n Unable to POST to ${path.split('.')[0]}`);
    } finally {
      this.loading.stop();
    }
  }

  public async put<Q, R>(
    path: string,
    payload: Q,
    options: Record<string, unknown> = {}
  ): Promise<R> {
    this.loading.start();
    try {
      const res = await this.http.put<R>(apiBaseUrl + path, payload, options).toPromise();
      this.snackbar.showMessage('Save successful!');
      return res;
    } catch (e) {
      this.snackbar.showError(`Could not save data for ${path.split('.')[0]}`);
      throw new Error(`${e} \n Unable to PUT to ${path.split('.')[0]}`);
    } finally {
      this.loading.stop();
    }
  }

  get backupURL(): string {
    const now = new Date();
    const date = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
    const filename = `backup-${date}.json`;
    return `${apiBaseUrl}.json?download=${filename}`;
  }
}
