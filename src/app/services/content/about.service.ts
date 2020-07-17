import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoadingService } from '~/app/services/ui/loading.service';
import { ApiService } from '~/app/services/api/api.service';
import { TranslateService } from '@ngx-translate/core';
import { Lang } from '~/app/types/i18n/Lang';
import { AboutResource } from '~/app/types/content/AboutResource';

@Injectable({ providedIn: 'root' })
export class AboutService {
  public isContentLoaded = false;
  private content: AboutResource | undefined;

  private introduction = new BehaviorSubject<string>('');
  private skills = new BehaviorSubject<Record<string, number>>({});
  private techCloud = new BehaviorSubject<string[]>([]);

  public introduction$ = this.introduction.asObservable();
  public skills$ = this.skills.asObservable();
  public techCloud$ = this.techCloud.asObservable();

  constructor(private api: ApiService, private loading: LoadingService, private translate: TranslateService) {
    this.translate.onLangChange.subscribe(() => this.updateState());
  }

  public async fetchIfNeeded(): Promise<void> {
    if (!this.introduction.value) {
      this.content = await this.api.get<AboutResource>('/about.json');
      this.isContentLoaded = true;
      this.updateState();
    }
  }

  private updateState(): void {
    const currentLang: Lang = this.translate.currentLang as Lang;
    if (this.content) {
      this.introduction.next(this.content.introduction[currentLang]);
      this.skills.next(this.content.skills);
      this.techCloud.next(this.content.techCloud);
    }
  }
}
