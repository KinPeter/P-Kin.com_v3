import { Component, OnInit } from '@angular/core';
import { LoadingService } from '~/app/services/ui/loading.service';
import { AboutService } from '~/app/services/content/about.service';

@Component({
  selector: 'pk-about',
  template: `
    <div class="pk-default-container">
      <p>{{ 'hello' | translate }}</p>
      <button (click)="startLoading()">start loading</button>
      <!--      <div *ngIf="aboutService.isContentLoaded" [innerHTML]="aboutService.getIntroduction() | async | marked"></div>-->
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
  constructor(private loading: LoadingService, public aboutService: AboutService) {}

  ngOnInit(): void {
    this.aboutService.fetchIfNeeded();
  }

  public startLoading(): void {
    this.loading.start();
    setTimeout(() => {
      this.loading.stop();
    }, 3000);
  }
}
