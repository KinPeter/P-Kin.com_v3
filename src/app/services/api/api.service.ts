import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { LoadingService } from '~/app/services/ui/loading.service';
import { ErrorService } from '~/app/services/ui/error.service';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(
    private http: HttpClient,
    private loading: LoadingService,
    private errorService: ErrorService,
    private translate: TranslateService
  ) {}

  public async get<T>(path: string): Promise<T | undefined> {
    this.loading.start();
    try {
      return await this.http.get<T>('https://p-kin-com.firebaseio.com/v3' + path).toPromise();
    } catch (e) {
      this.errorService.reportError(this.translate.instant('error.cannot-get'));
      throw new Error(`Unable to get from ${path}`);
    } finally {
      this.loading.stop();
    }
  }

  public async getMd(path: string): Promise<string | undefined> {
    this.loading.start();
    try {
      return firstValueFrom(this.http.get('/assets/content/' + path, { responseType: 'text' }));
    } catch (e) {
      this.errorService.reportError(this.translate.instant('error.cannot-get'));
      throw new Error(`Unable to get from ${path}`);
    } finally {
      this.loading.stop();
    }
  }
}
