import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '~/app/services/api/api.service';
import { TranslateService } from '@ngx-translate/core';
import { Lang } from '~/app/types/i18n/Lang';
import { WebDevResource } from '../../types/content/WebDevResource';
import { PortfolioItem } from '~/app/types/content/PortfolioItem';
import { LoadedItem } from '~/app/types/content/LoadedItem';

@Injectable({ providedIn: 'root' })
export class WebDevService {
  public isContentLoaded = false;
  private content: WebDevResource | undefined;

  private filters = new BehaviorSubject<string[]>([]);
  private filteredItems = new BehaviorSubject<PortfolioItem[]>([]);
  private loadedItem = new BehaviorSubject<LoadedItem | undefined>(undefined);

  public filters$ = this.filters.asObservable();
  public filteredItems$ = this.filteredItems.asObservable();
  public loadedItem$ = this.loadedItem.asObservable();

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

  public applyFilter(filter: string): void {
    if (this.content) {
      const items =
        filter === 'All' ? this.content.portfolio : this.content.portfolio.filter(item => item.badges.includes(filter));
      this.filteredItems.next(items);
    }
  }

  public loadItem(index: number): void {
    const currentLang: Lang = this.translate.currentLang as Lang;
    if (this.content) {
      const item = this.content.portfolio[index];
      this.loadedItem.next({
        name: item.name,
        badges: item.badges,
        description: item.description[currentLang],
      });
    }
  }

  private updateState(): void {
    if (this.content) {
      this.filters.next(this.content.filters);
      this.filteredItems.next(this.content.portfolio);
    }
  }
}
