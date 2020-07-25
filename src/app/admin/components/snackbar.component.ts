import { Component } from '@angular/core';
import { SnackbarService } from '~/app/admin/services/snackbar.service';

@Component({
  selector: 'pk-snackbar',
  template: `
    <div
      *ngIf="snackbarService.showSnackbar"
      class="snackbar"
      [class.snackbar_warning]="snackbarService.type === 'warning'"
      [class.snackbar_error]="snackbarService.type === 'error'"
    >
      <span>{{ snackbarService.message }}</span>
      <button
        *ngIf="['warning', 'error'].includes(snackbarService.type)"
        class="pk-small-icon-button"
        (click)="onClose()"
      >
        <pk-icon-close [size]="24"></pk-icon-close>
      </button>
    </div>
  `,
  styles: [
    `
      .snackbar {
        position: fixed;
        opacity: 0;
        top: -10rem;
        left: 50vw;
        transform: translateX(-50%);
        z-index: 10;
        background: var(--background-color-secondary);
        color: var(--color-accent);
        border: 2px solid var(--color-accent);
        padding: 1.5rem 2rem;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 500px;
        animation: snackbar 0.3s ease forwards;
      }

      .snackbar button {
        margin-left: 2rem;
      }

      .snackbar_warning {
        border-color: var(--color-warn);
        color: var(--color-warn);
      }

      .snackbar_error {
        border-color: var(--color-danger);
        color: var(--color-danger);
      }

      @keyframes snackbar {
        0% {
          opacity: 0;
          top: -10rem;
          filter: blur(5px);
        }
        100% {
          opacity: 1;
          top: 2rem;
          filter: blur(0);
        }
      }
    `,
  ],
})
export class SnackbarComponent {
  constructor(public snackbarService: SnackbarService) {}

  onClose(): void {
    this.snackbarService.hide();
  }
}
