import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'pk-language-switch',
  template: `
    <div class="language-switch">
      <button
        class="language-switch__button"
        [class.button-vertical-animated]="isEnabled('en')"
        (click)="translate.use('en')"
      >
        {{ 'languages.en' | translate }}
        <span *ngIf="!isEnabled('en')" class="language-switch__active"></span>
      </button>
      <button
        class="language-switch__button"
        role="button"
        [class.button-vertical-animated]="isEnabled('hu')"
        (click)="translate.use('hu')"
      >
        {{ 'languages.hu' | translate }}
        <span *ngIf="!isEnabled('hu')" class="language-switch__active"></span>
      </button>
    </div>
  `,
  styles: [
    `
      .language-switch {
        display: flex;
      }

      .language-switch__button {
        font-family: var(--font-sans-serif), sans-serif;
        font-weight: 300;
        font-size: 1rem;
        padding: 4px 5px;
        position: relative;
      }

      .language-switch__button:not(:first-child) {
        border-left: 1px solid var(--text-color-light);
      }

      .language-switch__active {
        position: absolute;
        bottom: 3px;
        left: 6px;
        width: calc(100% - 12px);
        border-bottom: 1px solid var(--color-accent);
      }
    `,
  ],
})
export class LanguageSwitchComponent {
  constructor(public translate: TranslateService) {}

  isEnabled(lang: string): boolean {
    return this.translate.currentLang !== lang;
  }
}
