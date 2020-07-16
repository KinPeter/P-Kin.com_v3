import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { apiBaseUrl } from '~/../keys';
import { LoadingService } from '~/app/services/ui/loading.service';

export interface AboutResource {
  introduction: string;
}

@Injectable({ providedIn: 'root' })
export class AboutService {
  public isContentLoaded = false;
  private introduction = new BehaviorSubject<string>('');

  constructor(private http: HttpClient, private loading: LoadingService) {}

  public getIntroduction(): Observable<string> {
    return this.introduction.asObservable();
  }

  public async fetchIfNeeded(): Promise<void> {
    if (!this.introduction.value) {
      this.loading.start();
      try {
        const res = await this.http.get<AboutResource>(apiBaseUrl + '/about.json').toPromise();
        this.introduction.next(res.introduction);
        this.isContentLoaded = true;
      } catch (e) {
        // TODO
      } finally {
        this.loading.stop();
      }
    }
  }
}
