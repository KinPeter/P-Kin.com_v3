import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '~/app/services/api/api.service';
import { TranslateService } from '@ngx-translate/core';
import { Lang } from '~/app/types/i18n/Lang';
import { PortfolioItem } from '~/app/types/content/PortfolioItem';
import { LoadedItem } from '~/app/types/content/LoadedItem';
import { portfolio } from '~/app/ts-content/portfolio';
import { filters } from '~/app/ts-content/portfolio-filters';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private readonly items: PortfolioItem[] = portfolio;

  private currentFilter = new BehaviorSubject<string>('');
  private filteredItems = new BehaviorSubject<PortfolioItem[]>([...this.items]);
  private loadedItem = new BehaviorSubject<LoadedItem | undefined>(undefined);

  public currentFilter$ = this.currentFilter.asObservable();
  public filteredItems$ = this.filteredItems.asObservable();
  public loadedItem$ = this.loadedItem.asObservable();

  constructor(private api: ApiService, private translate: TranslateService) {}

  public applyFilter(filter: string): void {
    this.filteredItems.next([]);
    if (this.items) {
      const items =
        filter === 'All'
          ? [...this.items]
          : this.items.filter(item => item.badges.includes(filter));
      this.filteredItems.next(items);
      this.currentFilter.next(filter);
    }
  }

  public async loadItem(id: string): Promise<void> {
    const currentLang: Lang = this.translate.currentLang as Lang;
    const item = this.items.find(i => i.id === id);
    if (!item) throw new Error('Item not found: ' + id);
    const description = await this.api.getMd(`projects/${id}_${currentLang}.md`);
    this.loadedItem.next({
      name: item.name,
      badges: item.badges,
      description: description ?? 'Oops...',
    });
  }

  public resetState(): void {
    this.currentFilter.next(filters[0]);
    this.filteredItems.next([...this.items]);
    this.loadedItem.next(undefined);
  }
}
