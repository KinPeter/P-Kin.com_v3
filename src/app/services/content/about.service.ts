import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { apiBaseUrl } from '../../../../keys';
import { LoadingService } from '../ui/loading.service';
import { ApiService } from '../api/api.service';

export interface AboutResource {
  introduction: string;
}

@Injectable({ providedIn: 'root' })
export class AboutService {
  public isContentLoaded = false;
  private introduction = new BehaviorSubject<string>('');

  constructor(private api: ApiService, private loading: LoadingService) {}

  public getIntroduction(): Observable<string> {
    return this.introduction.asObservable();
  }

  public async fetchIfNeeded(): Promise<void> {
    if (!this.introduction.value) {
      const res = await this.api.get<AboutResource>(apiBaseUrl + '/about.json');
      this.introduction.next(res.introduction);
      this.isContentLoaded = true;
    }
  }
}
