import { Component, OnInit } from '@angular/core';
import { LoadingService } from '~/app/services/ui/loading.service';

@Component({
  selector: 'pk-about',
  template: `
    <div class="pk-default-container">
      <p>{{ 'hello' | translate }}</p>
      <button (click)="startLoading()">start loading</button>
      <div [innerHTML]="mdText | marked" class="markdown-text"></div>
      <a routerLink="/admin">admin</a>
      <div class="accent"></div>
      <div [innerHTML]="mdText | marked" class="markdown-text"></div>
    </div>
  `,
  styles: [
    `
      p {
        color: var(--text-color-light);
      }
      .markdown-text {
        background: var(--background-color-secondary);
      }
      .accent {
        width: 300px;
        height: 30px;
        border-bottom: 2px solid var(--color-accent);
      }
    `,
  ],
})
export class AboutComponent implements OnInit {
  constructor(private loading: LoadingService) {}

  ngOnInit(): void {}

  mdText = `
## This is markdown
* A list
* With elements
* **This is bold**

Let's see a linked gif image

![Startpage feature](https://stuff.p-kin.com/screentogif/startpage-links-full.gif)
  `;

  public startLoading(): void {
    this.loading.start();
    setTimeout(() => {
      this.loading.stop();
    }, 3000);
  }
}
