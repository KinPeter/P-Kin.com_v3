import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '~/app/services/ui/loading.service';
import { apiBaseUrl } from '../../../../keys';
import { ErrorService } from '~/app/services/ui/error.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(
    private http: HttpClient,
    private loading: LoadingService,
    private errorService: ErrorService,
    private translate: TranslateService
  ) {}

  public async get<T>(path: string): Promise<T> {
    this.loading.start();
    try {
      return await this.http.get<T>(apiBaseUrl + path).toPromise();
    } catch (e) {
      this.errorService.reportError(this.translate.instant('error.cannot-get'));
      throw new Error(`Unable to get from ${path}`);
    } finally {
      this.loading.stop();
    }
  }
}
