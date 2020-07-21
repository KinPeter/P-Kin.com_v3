import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PortfolioItem } from '~/app/types/content/PortfolioItem';
import { LoadedItem } from '~/app/types/content/LoadedItem';
import { UUID } from '~/app/types/UUID';
import { GameAnd3dService } from '~/app/services/content/game-and-3d.service';

@Component({
  selector: 'pk-game-and-3d',
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
export class GameAnd3dComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  filters: string[] = [];
  currentFilter = '';
  items: PortfolioItem[] = [];
  loadedItem: LoadedItem = { name: '', badges: [], description: '' };

  constructor(public gameAnd3dService: GameAnd3dService) {
    this.gameAnd3dService.fetchIfNeeded();
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.gameAnd3dService.filters$.subscribe(value => {
        this.filters = value;
      }),
      this.gameAnd3dService.currentFilter$.subscribe(value => {
        this.currentFilter = value;
      }),
      this.gameAnd3dService.filteredItems$.subscribe(value => {
        this.items = value;
      }),
      this.gameAnd3dService.loadedItem$.subscribe(value => {
        if (value) {
          this.loadedItem = value;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.gameAnd3dService.resetState();
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

  onOpenItem(id: UUID): void {
    this.gameAnd3dService.loadItem(id);
  }

  onApplyFilter(filter: string): void {
    this.gameAnd3dService.applyFilter(filter);
  }
}
