import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { LoadingService } from '~/app/services/ui/loading.service';
import { ErrorService } from '~/app/services/ui/error.service';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly contentRoot = '/assets/content/';
  private readonly cache: Map<string, string> = new Map();

  constructor(
    private http: HttpClient,
    private loading: LoadingService,
    private errorService: ErrorService,
    private translate: TranslateService
  ) {}

  public async getMd(path: string): Promise<string | undefined> {
    this.loading.start();
    try {
      if (this.cache.has(path)) {
        return this.cache.get(path);
      }
      const content = await firstValueFrom(
        this.http.get(this.contentRoot + path, { responseType: 'text' })
      );
      this.cache.set(path, content);
      return content;
    } catch (e) {
      this.errorService.reportError(this.translate.instant('error.cannot-get'));
      throw new Error(`Unable to get from ${this.contentRoot + path}`);
    } finally {
      this.loading.stop();
    }
  }
}
