import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pk-filters-desktop',
  template: `
    <div class="filters-desktop">
      <button
        *ngFor="let filter of filters"
        class="filters-desktop__button button-horizontal-animated"
        (click)="onClickFilter(filter)"
      >
        {{ filter === 'All' ? ('c.filters.all' | translate) : filter }}
        <pk-icon-caret-right [size]="20" *ngIf="isActive(filter)"></pk-icon-caret-right>
      </button>
    </div>
  `,
  styles: [
    `
      .filters-desktop {
        margin-top: 2rem;
        padding: 0.5rem 2rem 0.5rem 1rem;
        position: fixed;
        width: 170px;
        color: var(--text-color-light);
        transition: all 0.3s ease;
        display: flex;
        flex-direction: column;
      }

      .filters-desktop:hover {
        background: var(--background-color-secondary);
        color: var(--text-color);
      }

      .filters-desktop__button {
        padding: 0.45rem 0.8rem;
        font-weight: 300;
        font-size: 1rem;
        text-align: left;
        position: relative;
      }

      pk-icon-caret-right {
        position: absolute;
        top: 6px;
        color: var(--color-accent);
        margin-left: 0.5rem;
      }
    `,
  ],
})
export class FiltersDesktopComponent {
  @Input() filters: string[] = [];
  @Input() currentFilter = '';

  @Output() applyFilter: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  isActive(filter: string): boolean {
    return filter === this.currentFilter;
  }

  onClickFilter(filter: string): void {
    this.applyFilter.emit(filter);
  }
}
