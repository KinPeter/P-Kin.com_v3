import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WebDevService } from '~/app/services/content/web-dev.service';
import { PortfolioItem } from '~/app/types/content/PortfolioItem';

@Component({
  selector: 'pk-web-dev',
  template: `
    <div class="cards">
      <pk-portfolio-card *ngFor="let item of items" [item]="item"></pk-portfolio-card>
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
    for (let i = 0; i < 14; i++) {
      this.items.push(this.dummyItem);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
