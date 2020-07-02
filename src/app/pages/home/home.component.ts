import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'pk-home',
  template: `
    <p>{{ 'hello' | translate }}</p>
    <button (click)="translate.use('en')">EN</button>
    <button (click)="translate.use('hu')">HU</button>
    <div [innerHTML]="mdText | marked" class="markdown-text"></div>
  `,
  styles: [
    `
      p {
        color: var(--text-color);
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}

  mdText = `
## This is markdown
* A list
* With elements
* **This is bold**

Let's see a linked gif image

![Startpage feature](https://stuff.p-kin.com/screentogif/startpage-links-full.gif)
  `;
}
