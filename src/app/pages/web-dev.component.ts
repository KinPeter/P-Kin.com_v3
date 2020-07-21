import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WebDevService } from '~/app/services/content/web-dev.service';
import { PortfolioItem } from '~/app/types/content/PortfolioItem';
import { UUID } from '~/app/types/UUID';
import { LoadedItem } from '~/app/types/content/LoadedItem';

@Component({
  selector: 'pk-web-dev',
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
    <div class="web-dev">
      <div class="web-dev__cards">
        <pk-portfolio-card
          *ngFor="let item of items; let i = index"
          [item]="item"
          [ngStyle]="getCardStyle(i)"
          (openItem)="onOpenItem($event)"
        ></pk-portfolio-card>
      </div>
    </div>
    <pk-portfolio-modal *ngIf="isModalOpen" [item]="loadedItem" (closeModal)="onCloseModal()"></pk-portfolio-modal>
  `,
  styles: [
    `
      .web-dev {
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

      .web-dev__cards {
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
        .web-dev {
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
export class WebDevComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  filters: string[] = [
    'All',
    'Angular',
    'Vue',
    'React',
    'Svelte',
    'TypeScript',
    'Material',
    'Full Stack',
    'Firebase',
    'NestJS',
    'Node.js',
  ];
  currentFilter = '';
  items: PortfolioItem[] = [];
  loadedItem: LoadedItem = { name: '', badges: [], description: '' };
  isModalOpen = false;

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
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

  getCardStyle(i: number): Record<string, string | number> {
    return {
      animationDelay: `${i * 0.1}s`,
    };
  }

  onOpenItem(id: UUID): void {
    console.log('open item: ', id);
    this.isModalOpen = true;
    this.webDevService.loadItem(id);
  }

  onCloseModal(): void {
    this.isModalOpen = false;
  }

  onApplyFilter(filter: string): void {
    this.webDevService.applyFilter(filter);
    window.scrollTo({ top: 0 });
  }
}
