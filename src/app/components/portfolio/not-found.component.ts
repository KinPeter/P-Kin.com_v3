import { Component } from '@angular/core';

@Component({
  selector: 'pk-not-found',
  template: `
    <div class="not-found">
      <pk-icon-sad-face [size]="100"></pk-icon-sad-face>
      {{ 'c.filters.not-found' | translate }}
    </div>
  `,
  styles: [
    `
      .not-found {
        width: 320px;
        height: 320px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--text-color-light);
        font-size: 1.3rem;
        text-align: center;
      }
    `,
  ],
})
export class NotFoundComponent {
  constructor() {}
}
