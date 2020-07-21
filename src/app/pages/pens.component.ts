import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PensService } from '~/app/services/content/pens.service';
import { PenItem } from '~/app/types/content/PenItem';

@Component({
  selector: 'pk-pens',
  template: `
    <div class="pens">
      <pk-embedded-pen *ngFor="let pen of pens" [pen]="pen"></pk-embedded-pen>
    </div>
  `,
  styles: [
    `
      .pens {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 2rem 0;
      }

      pk-embedded-pen {
        opacity: 0;
        animation: blurUpAndFade 0.3s ease forwards;
      }
    `,
  ],
})
export class PensComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  pens: PenItem[] = [];

  constructor(private pensService: PensService) {
    this.pensService.fetchIfNeeded();
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.pensService.items$.subscribe(value => {
        this.pens = value;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
