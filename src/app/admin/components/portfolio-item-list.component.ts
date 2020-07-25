import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PortfolioItem } from '~/app/types/content/PortfolioItem';
import { UUID } from '~/app/types/UUID';

@Component({
  selector: 'pk-portfolio-item-list',
  template: `
    <div class="item-list">
      <button class="pk-button" (click)="onAddNew()">+ Add new item</button>
      <div
        *ngFor="let item of items; let i = index"
        class="item"
        [class.item_selected]="selectedItem === item.id"
      >
        <h3 (click)="onSelect(item.id)">{{ item.name }}</h3>
        <div class="item__actions">
          <button
            class="pk-small-icon-button"
            [disabled]="!canMoveUp(i)"
            (click)="onMoveUp(item.id)"
          >
            <pk-icon-arrow [size]="24" direction="up"></pk-icon-arrow>
          </button>
          <button
            class="pk-small-icon-button"
            [disabled]="!canMoveDown(i)"
            (click)="onMoveDown(item.id)"
          >
            <pk-icon-arrow [size]="24" direction="down"></pk-icon-arrow>
          </button>
          <div class="pk-small-icon-button" (click)="onDelete(item.id)">
            <pk-icon-trash></pk-icon-trash>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .item-list {
        height: calc(100vh - 84px - 52px - 50px - 48px - 3.5rem);
        overflow: auto;
        width: 250px;
        padding-right: 1rem;
        border-right: 2px solid var(--color-accent-light);
      }

      .item-list::-webkit-scrollbar {
        display: none;
      }

      .item-list > button {
        margin-bottom: 1rem;
      }

      .item {
        width: 100%;
        padding: 0.3rem 0.3rem 0.3rem 0.5rem;
        background: var(--background-color-secondary);
        margin-bottom: 0.5rem;
      }

      .item_selected {
        border: 1px solid var(--color-accent);
      }

      .item_selected h3 {
        color: var(--text-color);
      }

      .item h3 {
        margin: 0;
        cursor: pointer;
      }

      .item h3:hover {
        color: var(--text-color);
      }

      .item__actions {
        display: flex;
        justify-content: flex-end;
      }
    `,
  ],
})
export class PortfolioItemListComponent implements OnInit {
  @Input() items: PortfolioItem[] = [];
  @Input() selectedItem: UUID = '';

  @Output() addNewItem: EventEmitter<void> = new EventEmitter<void>();
  @Output() selectItem: EventEmitter<UUID> = new EventEmitter<UUID>();
  @Output() moveItemUp: EventEmitter<UUID> = new EventEmitter<UUID>();
  @Output() moveItemDown: EventEmitter<UUID> = new EventEmitter<UUID>();
  @Output() deleteItem: EventEmitter<UUID> = new EventEmitter<UUID>();

  constructor() {}

  ngOnInit(): void {}

  onAddNew(): void {
    this.addNewItem.emit();
  }

  onSelect(id: UUID): void {
    this.selectItem.emit(id);
  }

  canMoveUp(index: number): boolean {
    return index !== 0;
  }

  canMoveDown(index: number): boolean {
    return index !== this.items.length - 1;
  }

  onMoveUp(id: UUID): void {
    this.moveItemUp.emit(id);
  }

  onDelete(id: UUID): void {
    this.deleteItem.emit(id);
  }

  onMoveDown(id: UUID): void {
    this.moveItemDown.emit(id);
  }
}
