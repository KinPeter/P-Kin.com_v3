import { Component } from '@angular/core';
import { PenItem } from '~/app/types/content/PenItem';
import { pens } from '~/app/ts-content/pens';

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
export class PensComponent {
  public pens: PenItem[] = pens;

  constructor() {}
}
