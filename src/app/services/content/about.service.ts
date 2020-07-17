import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoadingService } from '../ui/loading.service';
import { ApiService } from '../api/api.service';

export interface AboutResource {
  introduction: string;
}

@Injectable({ providedIn: 'root' })
export class AboutService {
  public isContentLoaded = false;
  private introduction = new BehaviorSubject<string>('');
  public introduction$ = this.introduction.asObservable();

  constructor(private api: ApiService, private loading: LoadingService) {}

  public async fetchIfNeeded(): Promise<void> {
    if (!this.introduction.value) {
      const res = await this.api.get<AboutResource>('/about.json');
      this.introduction.next(res.introduction);
      this.isContentLoaded = true;
    }
  }
}
