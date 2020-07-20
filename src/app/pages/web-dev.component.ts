import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WebDevService } from '~/app/services/content/web-dev.service';
import { PortfolioItem } from '~/app/types/content/PortfolioItem';
import { UUID } from '~/app/types/UUID';
import { LoadedItem } from '~/app/types/content/LoadedItem';

@Component({
  selector: 'pk-web-dev',
  template: `
    <div class="cards">
      <pk-portfolio-card
        *ngFor="let item of items; let i = index"
        [item]="item"
        [ngStyle]="getCardStyle(i)"
        (openItem)="onOpenItem($event)"
      ></pk-portfolio-card>
    </div>
    <pk-portfolio-modal *ngIf="isModalOpen" [item]="loadedItem" (closeModal)="onCloseModal()"></pk-portfolio-modal>
  `,
  styles: [
    `
      .cards {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 2rem 0;
      }

      pk-portfolio-card {
        opacity: 0;
        animation: blurUpAndFade 0.3s ease forwards;
      }
    `,
  ],
})
export class WebDevComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  filters: string[] = [];
  items: PortfolioItem[] = [];
  loadedItem: LoadedItem = { name: '', badges: [], description: '' };
  isModalOpen = false;

  dummyItem: PortfolioItem = {
    id: 'aa1',
    name: 'Project name',
    badges: ['something', 'another one', 'and more', 'a thing', 'just', 'one more'],
    image: 'https://stuff.p-kin.com/portfolio-images/pkincom.jpg',
    description: {
      en: '',
      hu: '',
      kr: '',
    },
  };

  constructor(public webDevService: WebDevService) {
    // this.webDevService.fetchIfNeeded()
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.webDevService.filters$.subscribe(value => {
        this.filters = value;
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
    if (this.items.length === 0) {
      for (let i = 0; i < 8; i++) {
        this.items.push(this.dummyItem);
      }
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

  onOpenItem(id: UUID): void {
    console.log('open item: ', id);
    this.isModalOpen = true;
    // this.webDevService.loadItem(id);
    this.loadedItem = {
      name: 'Project name',
      badges: ['something', 'another one', 'and more', 'a thing', 'just', 'one more'],
      description:
        "## Some markdown\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda, cupiditate distinctio eaque eius et eum ex excepturi, fugiat incidunt labore laudantium libero officiis pariatur placeat quae quasi quod sunt, temporibus voluptate. Debitis enim eos incidunt laboriosam maiores quo ullam voluptatem! Aliquam dicta, distinctio impedit iste libero molestias nam neque nisi nobis quia sequi similique, sint velit veniam voluptatibus, voluptatum.\n\nThis is the **description** of this item\nLet's see a list again:\n- one\n- two\n- three\n\n## Some markdown\nThis is the **description** of this item\nLet's see a list again:\n- one\n- two\n- three\n\n## Some markdown\nThis is the **description** of this item\nLet's see a list again:\n- one\n- two\n- three",
    };
  }

  getCardStyle(i: number): Record<string, string | number> {
    return {
      animationDelay: `${i * 0.1}s`,
    };
  }

  onCloseModal(): void {
    this.isModalOpen = false;
  }
}
