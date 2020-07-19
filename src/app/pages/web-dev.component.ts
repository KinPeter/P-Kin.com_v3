import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WebDevService } from '~/app/services/content/web-dev.service';
import { PortfolioItem } from '~/app/types/content/PortfolioItem';

@Component({
  selector: 'pk-web-dev',
  template: ``,
  styles: [``],
})
export class WebDevComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  filters: string[] = [];
  items: PortfolioItem[] = [];

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
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
