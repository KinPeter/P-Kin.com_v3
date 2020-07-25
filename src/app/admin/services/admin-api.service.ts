import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '~/app/services/ui/loading.service';
import { apiBaseUrl } from '../../../../keys';

@Injectable()
export class AdminApiService {
  constructor(private http: HttpClient, private loading: LoadingService) {}

  public async get<T>(path: string): Promise<T> {
    this.loading.start();
    try {
      return await this.http.get<T>(apiBaseUrl + path).toPromise();
    } catch (e) {
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
      return await this.http.post<R>(apiBaseUrl + path, payload, options).toPromise();
    } catch (e) {
      throw new Error(`${e} \n Unable to POST to ${path}`);
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
      return await this.http.put<R>(apiBaseUrl + path, payload, options).toPromise();
    } catch (e) {
      throw new Error(`${e} \n Unable to PUT to ${path}`);
    } finally {
      this.loading.stop();
    }
  }
}
