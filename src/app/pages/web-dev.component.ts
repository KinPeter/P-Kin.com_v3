import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WebDevService } from '~/app/services/content/web-dev.service';
import { PortfolioItem } from '~/app/types/content/PortfolioItem';
import { UUID } from '~/app/types/UUID';

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
    // this.webDevService.loadItem(id);
  }

  getCardStyle(i: number): Record<string, string | number> {
    return {
      animationDelay: `${i * 0.1}s`,
    };
  }
}
