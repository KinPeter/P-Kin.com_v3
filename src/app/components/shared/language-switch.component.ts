import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'pk-language-switch',
  template: `
    <div class="language-switch">
      <div (click)="translate.use('en')">{{ 'languages.en' | translate }}</div>
      <div (click)="translate.use('hu')">{{ 'languages.hu' | translate }}</div>
      <div (click)="translate.use('kr')">{{ 'languages.kr' | translate }}</div>
    </div>
  `,
  styles: [
    `
      .language-switch {
        display: flex;
        padding: 0 1rem;
      }
      .language-switch div {
        font-family: var(--font-sans-serif), sans-serif;
        font-weight: 300;
        cursor: pointer;
        padding: 2px 5px;
      }
      .language-switch div:not(:first-child) {
        border-left: 1px solid var(--text-color-light);
      }
    `,
  ],
})
export class LanguageSwitchComponent {
  constructor(public translate: TranslateService) {}
}
