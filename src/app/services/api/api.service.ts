import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '~/app/services/ui/loading.service';
import { apiBaseUrl } from '../../../../keys';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient, private loading: LoadingService) {}

  public async get<T>(path: string): Promise<T> {
    this.loading.start();
    try {
      return await this.http.get<T>(apiBaseUrl + path).toPromise();
    } catch (e) {
      throw new Error(`Unable to get from ${path}`);
    } finally {
      this.loading.stop();
    }
  }
}
