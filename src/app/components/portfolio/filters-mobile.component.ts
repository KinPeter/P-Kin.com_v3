import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pk-filters-mobile',
  template: `
    <div class="filters-mobile-toggle" (click)="onOpenFilters()">
      <pk-icon-filter></pk-icon-filter>
    </div>
    <div class="filters-mobile" *ngIf="isOpen">
      <h1 class="filters-mobile__title">{{ 'c.filters.filter-results' | translate }}</h1>
      <div *ngFor="let filter of filters" class="filters-mobile__button" (click)="onClickFilter(filter)">
        {{ filter === 'All' ? ('c.filters.all' | translate) : filter }}
        <pk-icon-caret-right [size]="20" *ngIf="isActive(filter)"></pk-icon-caret-right>
      </div>
    </div>
  `,
  styles: [
    `
      pk-icon-filter {
        height: 24px;
      }

      .filters-mobile-toggle {
        position: fixed;
        top: 0;
        right: 0;
        width: 70px;
        height: 52px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        cursor: pointer;
      }

      .filters-mobile {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: var(--background-color-secondary);
        display: flex;
        flex-direction: column;
        overflow: auto;
        padding: 1rem 1.5rem;
        z-index: 2;
        opacity: 0;
        animation: blurUpAndFade 0.2s ease forwards;
      }

      .filters-mobile__button {
        font-size: 1.2rem;
        padding: 0.2rem 0;
      }

      pk-icon-caret-right {
        color: var(--color-accent);
        position: relative;
        top: 3px;
      }
    `,
  ],
})
export class FiltersMobileComponent {
  @Input() filters: string[] = [];
  @Input() currentFilter = '';

  @Output() applyFilter: EventEmitter<string> = new EventEmitter<string>();

  isOpen = false;

  constructor() {}

  isActive(filter: string): boolean {
    return filter === this.currentFilter;
  }

  onClickFilter(filter: string): void {
    this.isOpen = false;
    this.applyFilter.emit(filter);
  }

  onOpenFilters(): void {
    this.isOpen = true;
  }
}
