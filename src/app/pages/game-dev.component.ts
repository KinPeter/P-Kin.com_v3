import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PortfolioItem } from '~/app/types/content/PortfolioItem';
import { LoadedItem } from '~/app/types/content/LoadedItem';
import { UUID } from '~/app/types/UUID';
import { GameDevService } from '~/app/services/content/game-dev.service';

@Component({
  selector: 'pk-game-dev',
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
export class GameDevComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  filters: string[] = [];
  currentFilter = '';
  items: PortfolioItem[] = [];
  loadedItem: LoadedItem = { name: '', badges: [], description: '' };

  constructor(public gameDevService: GameDevService) {
    this.gameDevService.fetchIfNeeded();
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.gameDevService.filters$.subscribe(value => {
        this.filters = value;
      }),
      this.gameDevService.currentFilter$.subscribe(value => {
        this.currentFilter = value;
      }),
      this.gameDevService.filteredItems$.subscribe(value => {
        this.items = value;
      }),
      this.gameDevService.loadedItem$.subscribe(value => {
        if (value) {
          this.loadedItem = value;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.gameDevService.resetState();
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

  onOpenItem(id: UUID): void {
    this.gameDevService.loadItem(id);
  }

  onApplyFilter(filter: string): void {
    this.gameDevService.applyFilter(filter);
  }
}
