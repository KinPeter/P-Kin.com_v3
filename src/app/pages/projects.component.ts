import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PortfolioService } from '~/app/services/content/portfolio.service';
import { PortfolioItem } from '~/app/types/content/PortfolioItem';
import { LoadedItem } from '~/app/types/content/LoadedItem';
import { filters } from '~/app/ts-content/portfolio-filters';

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

  public filters: string[] = filters;
  public currentFilter = '';
  public items: PortfolioItem[] = [];
  public loadedItem: LoadedItem = { name: '', badges: [], description: '' };

  constructor(public portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.portfolioService.currentFilter$.subscribe(value => {
        this.currentFilter = value;
      }),
      this.portfolioService.filteredItems$.subscribe(value => {
        this.items = value;
      }),
      this.portfolioService.loadedItem$.subscribe(value => {
        if (value) {
          this.loadedItem = value;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.portfolioService.resetState();
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

  onOpenItem(id: string): void {
    this.portfolioService.loadItem(id);
  }

  onApplyFilter(filter: string): void {
    this.portfolioService.applyFilter(filter);
  }
}
