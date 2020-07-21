import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '~/app/services/api/api.service';
import { TranslateService } from '@ngx-translate/core';
import { Lang } from '~/app/types/i18n/Lang';
import { PortfolioResource } from '../../types/content/PortfolioResource';
import { PortfolioItem } from '~/app/types/content/PortfolioItem';
import { LoadedItem } from '~/app/types/content/LoadedItem';
import { UUID } from '~/app/types/UUID';

@Injectable({ providedIn: 'root' })
export class WebDevService {
  public isContentLoaded = false;
  private content: PortfolioResource | undefined;

  private filters = new BehaviorSubject<string[]>([]);
  private currentFilter = new BehaviorSubject<string>('');
  private filteredItems = new BehaviorSubject<PortfolioItem[]>([]);
  private loadedItem = new BehaviorSubject<LoadedItem | undefined>(undefined);

  public filters$ = this.filters.asObservable();
  public currentFilter$ = this.currentFilter.asObservable();
  public filteredItems$ = this.filteredItems.asObservable();
  public loadedItem$ = this.loadedItem.asObservable();

  constructor(private api: ApiService, private translate: TranslateService) {
    this.translate.onLangChange.subscribe(() => this.updateState());
  }

  public async fetchIfNeeded(): Promise<void> {
    if (!this.isContentLoaded) {
      this.content = await this.api.get<PortfolioResource>('/webdev.json');
      this.isContentLoaded = true;
      this.updateState();
    }
  }

  public applyFilter(filter: string): void {
    this.filteredItems.next([]);
    if (this.content) {
      const items =
        filter === 'All' ? this.content.portfolio : this.content.portfolio.filter(item => item.badges.includes(filter));
      this.filteredItems.next(items);
      this.currentFilter.next(filter);
    }
  }

  public loadItem(id: UUID): void {
    const currentLang: Lang = this.translate.currentLang as Lang;
    if (this.content) {
      const item = this.content.portfolio.find(i => i.id === id);
      if (!item) throw new Error('Item not found: ' + id);
      this.loadedItem.next({
        name: item.name,
        badges: item.badges,
        description: item.description[currentLang],
      });
    }
  }

  public resetState(): void {
    if (this.content) {
      this.currentFilter.next(this.content.filters[0]);
      this.filteredItems.next(this.content.portfolio);
      this.loadedItem.next(undefined);
    }
  }

  private updateState(): void {
    if (this.content) {
      this.filters.next(this.content.filters);
      this.currentFilter.next(this.content.filters[0]);
      this.filteredItems.next(this.content.portfolio);
    }
  }
}
