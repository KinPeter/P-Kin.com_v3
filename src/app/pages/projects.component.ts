import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WebDevService } from '~/app/services/content/web-dev.service';
import { PortfolioItem } from '~/app/types/content/PortfolioItem';
import { UUID } from '~/app/types/UUID';
import { LoadedItem } from '~/app/types/content/LoadedItem';

@Component({
  selector: 'pk-projects',
  template: `
    <pk-portfolio-wrapper
      [items]="items"
      [filters]="filters"
      [currentFilter]="currentFilter"
      [loadedItem]="loadedItem"
      (applyFilter)="onApplyFilter($event)"
      (openItem)="onOpenItem($event)"
    ></pk-portfolio-wrapper>
  `,
  styles: [``],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  filters: string[] = [];
  currentFilter = '';
  items: PortfolioItem[] = [];
  loadedItem: LoadedItem = { name: '', badges: [], description: '' };

  constructor(public webDevService: WebDevService) {
    this.webDevService.fetchIfNeeded();
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.webDevService.filters$.subscribe(value => {
        this.filters = value;
      }),
      this.webDevService.currentFilter$.subscribe(value => {
        this.currentFilter = value;
      }),
      this.webDevService.filteredItems$.subscribe(value => {
        this.items = value;
      }),
      this.webDevService.loadedItem$.subscribe(value => {
        if (value) {
          this.loadedItem = value;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.webDevService.resetState();
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

  onOpenItem(id: UUID): void {
    this.webDevService.loadItem(id);
  }

  onApplyFilter(filter: string): void {
    this.webDevService.applyFilter(filter);
  }
}
