import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { v4 as newUUID } from 'uuid';
import { Lang } from '~/app/types/i18n/Lang';
import { PortfolioItem } from '~/app/types/content/PortfolioItem';
import { AdminWebdevService } from '~/app/admin/services/admin-webdev.service';
import { UUID } from '~/app/types/UUID';

@Component({
  selector: 'pk-admin-webdev-portfolio',
  template: `
    <div class="webdev-portfolio">
      <header>
        <h1>WebDev portfolio</h1>
        <button class="pk-button pk-button_accent" (click)="onSaveAll()">Save All</button>
      </header>
      <div class="portfolio-editor-wrapper">
        <pk-portfolio-item-list
          [items]="content"
          [selectedItem]="loadedItem ? loadedItem.id : ''"
          (addNewItem)="onAddItem()"
          (selectItem)="onSelectItem($event)"
          (deleteItem)="onDeleteItem($event)"
          (moveItemUp)="onMoveItemUp($event)"
          (moveItemDown)="onMoveItemDown($event)"
        ></pk-portfolio-item-list>
        <div *ngIf="loadedItem" class="editor">
          <section class="editor__name-and-image">
            <label for="name-input">Project name:</label>
            <input class="pk-input" type="text" name="name-input" [(ngModel)]="loadedItem.name" />
            <label for="image-input">Thumbnail image URL:</label>
            <input class="pk-input" type="url" name="image-input" [(ngModel)]="loadedItem.image" />
          </section>

          <hr />

          <section class="editor__badges">
            <input
              *ngFor="let badge of loadedItem.badges; let i = index; trackBy: trackByFn"
              type="text"
              class="pk-input"
              [(ngModel)]="loadedItem.badges[i]"
              (change)="onBadgeChange(i)"
            />
            <button class="pk-button" (click)="onAddBadge()">+ Add badge</button>
          </section>

          <hr />

          <section class="editor__md-editor">
            <button
              *ngFor="let lang of languages"
              class="editor__lang-button pk-button"
              [class.pk-button_active]="lang === currentLangToEdit"
              [class.pk-button_accent]="lang === currentLangToEdit"
              (click)="setLangToEdit(lang)"
            >
              {{ lang }}
            </button>
            <pk-md-editor
              [value]="loadedItem.description[this.currentLangToEdit]"
              (updateMd)="onMdUpdate($event, currentLangToEdit)"
            ></pk-md-editor>
          </section>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .webdev-portfolio {
        padding-bottom: 2rem;
      }

      header {
        display: flex;
        justify-content: space-between;
      }

      .portfolio-editor-wrapper {
        display: flex;
      }

      .editor {
        width: 100%;
        height: calc(100vh - 84px - 52px - 50px - 48px - 3.5rem);
        padding-left: 1rem;
        overflow: auto;
      }

      .editor__name-and-image {
        margin-top: 0.2rem;
      }

      .editor__name-and-image label {
        margin-right: 0.5rem;
        font-weight: bold;
      }

      .editor__name-and-image input {
        margin-right: 2rem;
      }

      .editor__name-and-image input:nth-of-type(1) {
        width: 250px;
      }

      .editor__name-and-image input:nth-of-type(2) {
        width: 400px;
      }

      .editor__badges {
        display: flex;
        flex-wrap: wrap;
      }

      .editor__badges input {
        width: 100px;
        margin: 0 0.5rem 0.5rem 0;
      }

      .editor__lang-button {
        margin-bottom: 1rem;
      }
    `,
  ],
})
export class WebdevPortfolioAdminComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  public content: PortfolioItem[] = [];
  public loadedItem: PortfolioItem | undefined;
  public languages: Lang[] = [];
  public currentLangToEdit: Lang = 'en';

  constructor(private adminWebdevService: AdminWebdevService) {
    this.adminWebdevService.fetch();
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.adminWebdevService.content$.subscribe(content => {
        this.content = content.portfolio;
        this.languages = Object.keys(this.content[0].description) as Lang[];
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

  onMdUpdate(value: string, lang: string): void {
    if (this.loadedItem) {
      this.loadedItem.description[lang as Lang] = value;
    }
  }

  setLangToEdit(lang: Lang): void {
    this.currentLangToEdit = lang;
  }

  onSaveAll(): void {
    if (!this.content) return;
    console.log('DATA to save', this.content);
    this.adminWebdevService.savePortfolio(this.content);
  }

  onSelectItem(id: UUID): void {
    const item = this.content.find(i => i.id === id);
    if (!item) return;
    this.loadedItem = item;
  }

  onAddItem(): void {
    const newItem = {
      name: 'new item',
      id: newUUID(),
      badges: ['badge 1'],
      image: 'https://link.to.image.jpg',
      description: { en: 'English', hu: 'Magyar', kr: '한국어' },
    };
    this.content.unshift(newItem);
    this.onSelectItem(newItem.id);
  }

  onAddBadge(): void {
    if (this.loadedItem) {
      this.loadedItem.badges.push('new badge');
    }
  }

  onBadgeChange(index: number): void {
    if (this.loadedItem && this.loadedItem.badges[index] === '') {
      this.loadedItem.badges.splice(index, 1);
    }
  }

  onDeleteItem(id: UUID): void {
    this.content = this.content.filter(i => i.id !== id);
  }

  onMoveItemUp(id: UUID): void {
    const { item, index } = this.findItemAndIndex(id);
    this.content = this.content.filter(i => i.id !== id);
    this.content.splice(index - 1, 0, item);
  }

  onMoveItemDown(id: UUID): void {
    const { item, index } = this.findItemAndIndex(id);
    this.content = this.content.filter(i => i.id !== id);
    this.content.splice(index + 1, 0, item);
  }

  trackByFn(index: number): number {
    return index;
  }

  private findItemAndIndex(id: UUID): { item: PortfolioItem; index: number } {
    const item = this.content.find(i => i.id === id);
    const index = this.content.findIndex(i => i.id === id);
    if (!item || index < 0) throw new Error('Item not found');
    return { item, index };
  }
}
