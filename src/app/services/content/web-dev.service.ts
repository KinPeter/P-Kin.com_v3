import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '~/app/services/api/api.service';
import { TranslateService } from '@ngx-translate/core';
import { Lang } from '~/app/types/i18n/Lang';
import { WebDevResource } from '../../types/content/WebDevResource';
import { PortfolioItem } from '~/app/types/content/PortfolioItem';

@Injectable({ providedIn: 'root' })
export class WebDevService {
  public isContentLoaded = false;
  private content: WebDevResource | undefined;

  private filters = new BehaviorSubject<string[]>([]);
  private items = new BehaviorSubject<PortfolioItem[]>([]);

  public filters$ = this.filters.asObservable();

  constructor(private api: ApiService, private translate: TranslateService) {
    this.translate.onLangChange.subscribe(() => this.updateState());
  }

  public async fetchIfNeeded(): Promise<void> {
    if (!this.isContentLoaded) {
      this.content = await this.api.get<WebDevResource>('/webdev.json');
      this.isContentLoaded = true;
      this.updateState();
    }
  }

  public loadItem(index: number): void {
    const currentLang: Lang = this.translate.currentLang as Lang;
    console.log(index, currentLang);
    // TODO
  }

  private updateState(): void {
    if (this.content) {
      this.filters.next(this.content.filters);
      this.items.next(this.content.portfolio);
    }
  }
}
