import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pk-filters-desktop',
  template: `
    <div class="filters-desktop">
      <span
        *ngFor="let filter of filters"
        class="filters-desktop__button button-horizontal-animated"
        (click)="onClickFilter(filter)"
      >
        {{ filter }}
        <pk-icon-caret-right [size]="20" *ngIf="isActive(filter)"></pk-icon-caret-right>
      </span>
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
        padding: 0.25rem 0.8rem;
        font-weight: 300;
        position: relative;
      }

      pk-icon-caret-right {
        position: absolute;
        top: 4px;
        color: var(--color-accent);
        margin-left: 0.5rem;
      }
    `,
  ],
})
export class FiltersDesktopComponent {
  @Input() filters: string[] = [];
  @Input() currentFilter = 'All';

  @Output() applyFilter: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    console.log(this.filters);
  }

  isActive(filter: string): boolean {
    return filter === this.currentFilter;
  }

  onClickFilter(filter: string): void {
    this.currentFilter = filter;
    this.applyFilter.emit(filter);
  }
}
