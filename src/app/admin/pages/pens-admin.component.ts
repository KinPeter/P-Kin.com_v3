import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminPensService } from '~/app/admin/services/admin-pens.service';
import { PenItem } from '~/app/types/content/PenItem';

@Component({
  selector: 'pk-admin-pens',
  template: `
    <div class="pens-admin">
      <header>
        <h1>Pens</h1>
        <section>
          <button class="pk-button" (click)="onAddNewPen()">+ Add new Pen</button>
          <button class="pk-button pk-button_accent" (click)="onSaveAll()">Save All</button>
        </section>
      </header>
      <main>
        <div *ngFor="let pen of content; let i = index" class="pen-item">
          <div class="pen-item__top-row">
            <div>
              <label for="name-input">Pen name:</label>
              <input class="pk-input" type="text" name="name-input" [(ngModel)]="pen.name" />
            </div>
            <div class="item__actions">
              <button class="pk-small-icon-button" [disabled]="!canMoveUp(i)" (click)="onMoveUp(i)">
                <pk-icon-arrow [size]="24" direction="up"></pk-icon-arrow>
              </button>
              <button
                class="pk-small-icon-button"
                [disabled]="!canMoveDown(i)"
                (click)="onMoveDown(i)"
              >
                <pk-icon-arrow [size]="24" direction="down"></pk-icon-arrow>
              </button>
              <div class="pk-small-icon-button" (click)="onDelete(i)">
                <pk-icon-trash></pk-icon-trash>
              </div>
            </div>
          </div>
          <div class="pen-item__second-row">
            <label for="description-input">Description:</label>
            <input
              class="pk-input"
              type="text"
              name="description-input"
              [(ngModel)]="pen.description"
            />
            <label for="cp-title-input">Codepen title:</label>
            <input
              class="pk-input"
              type="text"
              name="cp-title-input"
              [(ngModel)]="pen.codepenTitle"
            />
            <label for="cp-id-input">Codepen ID:</label>
            <input class="pk-input" type="text" name="cp-id-input" [(ngModel)]="pen.codepenId" />
          </div>
        </div>
      </main>
    </div>
  `,
  styles: [
    `
      .pens-admin {
        padding-bottom: 2rem;
      }

      header {
        display: flex;
        justify-content: space-between;
      }

      header section button:first-child {
        margin-right: 0.5rem;
      }

      .pen-item {
        padding: 1rem;
        margin: 0 2rem;
        border-bottom: 1px solid var(--text-color-light);
      }

      .pen-item__top-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
      }

      .pens-admin label {
        display: inline-block;
        width: 125px;
        margin-right: 0.5rem;
        font-weight: bold;
      }

      .pens-admin input {
        width: 250px;
        margin-right: 2rem;
      }

      .pens-admin input[name='description-input'] {
        width: 550px;
      }

      .pens-admin input[name='cp-id-input'] {
        width: 120px;
      }

      .item__actions {
        display: flex;
      }
    `,
  ],
})
export class PensAdminComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  public content: PenItem[] = [];

  constructor(private adminPensService: AdminPensService) {
    this.adminPensService.fetch();
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.adminPensService.content$.subscribe(value => {
        this.content = value;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

  onSaveAll(): void {
    if (!this.content) return;
    this.adminPensService.save(this.content);
  }

  onAddNewPen(): void {
    this.content.unshift({
      name: 'New Pen',
      description: 'Some description',
      codepenTitle: 'pen-title',
      codepenId: '001',
    });
  }

  canMoveUp(index: number): boolean {
    return index !== 0;
  }

  canMoveDown(index: number): boolean {
    return index !== this.content.length - 1;
  }

  onMoveUp(index: number): void {
    const item = this.content.splice(index, 1);
    this.content.splice(index - 1, 0, item[0]);
  }

  onMoveDown(index: number): void {
    const item = this.content.splice(index, 1);
    this.content.splice(index + 1, 0, item[0]);
  }

  onDelete(index: number): void {
    this.content.splice(index, 1);
  }
}
