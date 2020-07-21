import { Component, OnDestroy, OnInit } from '@angular/core';
import { ErrorService } from '~/app/services/ui/error.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pk-error-page',
  template: `
    <div class="error-page">
      <pk-icon-sad-face [size]="100"></pk-icon-sad-face>
      {{ message }}
    </div>
  `,
  styles: [
    `
      .error-page {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--text-color-light);
        font-size: 1.3rem;
        text-align: center;
        padding: 5rem 1rem;
        animation: blurUpAndFade 0.3s ease forwards;
      }

      pk-icon-sad-face {
        margin-bottom: 1rem;
      }
    `,
  ],
})
export class ErrorComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  message = '';

  constructor(private errorService: ErrorService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.errorService.message$.subscribe(value => {
        this.message = value;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
