import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { PortfolioItem } from '~/app/types/content/PortfolioItem';
import { LoadedItem } from '~/app/types/content/LoadedItem';
import { LoadingService } from '~/app/services/ui/loading.service';

@Component({
  selector: 'pk-portfolio-wrapper',
  template: `
    <pk-filters-desktop
      [filters]="filters"
      [currentFilter]="currentFilter"
      (applyFilter)="onApplyFilter($event)"
    ></pk-filters-desktop>
    <pk-filters-mobile
      [filters]="filters"
      [currentFilter]="currentFilter"
      (applyFilter)="onApplyFilter($event)"
    ></pk-filters-mobile>
    <div class="portfolio">
      <div class="portfolio__cards">
        <pk-not-found *ngIf="!items.length"></pk-not-found>
        <pk-portfolio-card
          *ngFor="let item of items; let i = index"
          [item]="item"
          [ngStyle]="getCardStyle(i)"
          (openItem)="onOpenItem($event)"
        ></pk-portfolio-card>
      </div>
    </div>
    <pk-portfolio-modal
      *ngIf="!(isLoading | async) && isModalOpen"
      [item]="loadedItem"
      (closeModal)="onCloseModal()"
    ></pk-portfolio-modal>
  `,
  styles: [
    `
      .portfolio {
        padding-left: 0;
      }

      pk-filters-desktop {
        display: none;
        position: fixed;
        opacity: 0;
        animation: blurUpAndFade 0.3s 0.5s ease forwards;
      }

      pk-filters-mobile {
        display: block;
      }

      pk-not-found {
        opacity: 0;
        animation: blurUpAndFade 0.3s 0.5s ease forwards;
      }

      .portfolio__cards {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 2rem 0;
      }

      pk-portfolio-card {
        opacity: 0;
        animation: blurUpAndFade 0.3s ease forwards;
      }

      @media (min-width: 912px) {
        .portfolio {
          padding-left: 170px;
        }

        pk-filters-desktop {
          display: block;
        }

        pk-filters-mobile {
          display: none;
        }
      }
    `,
  ],
})
export class PortfolioWrapperComponent {
  @Input() filters: string[] = [];
  @Input() currentFilter = '';
  @Input() items: PortfolioItem[] = [];
  @Input() loadedItem: LoadedItem = { name: '', badges: [], description: '' };

  @Output() openItem: EventEmitter<string> = new EventEmitter<string>();
  @Output() applyFilter: EventEmitter<string> = new EventEmitter<string>();

  public isModalOpen = false;
  public isLoading!: Observable<boolean>;

  constructor(private loadingService: LoadingService) {
    this.isLoading = loadingService.getStatus();
  }

  getCardStyle(i: number): Record<string, string | number> {
    return {
      animationDelay: `${i * 0.1}s`,
    };
  }

  onOpenItem(id: string): void {
    this.isModalOpen = true;
    this.openItem.emit(id);
  }

  onCloseModal(): void {
    this.loadedItem = { name: '', badges: [], description: '' };
    this.isModalOpen = false;
  }

  onApplyFilter(filter: string): void {
    this.applyFilter.emit(filter);
    window.scrollTo({ top: 0 });
  }
}
