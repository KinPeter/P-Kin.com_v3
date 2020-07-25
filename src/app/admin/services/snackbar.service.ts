import { Injectable } from '@angular/core';

@Injectable()
export class SnackbarService {
  public showSnackbar = false;
  public message = 'This is a snackbar message';
  public type: 'normal' | 'warning' | 'error' = 'normal';

  constructor() {}

  hide(): void {
    this.showSnackbar = false;
    this.message = '';
  }

  showMessage(message: string): void {
    this.type = 'normal';
    this.message = message;
    this.showSnackbar = true;
    setTimeout(() => {
      this.showSnackbar = false;
    }, 3000);
  }

  showWarning(message: string): void {
    this.type = 'warning';
    this.message = message;
    this.showSnackbar = true;
  }

  showError(message: string): void {
    this.type = 'error';
    this.message = message;
    this.showSnackbar = true;
  }
}
