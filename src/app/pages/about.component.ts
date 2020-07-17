import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingService } from '~/app/services/ui/loading.service';
import { AboutService } from '~/app/services/content/about.service';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'pk-about',
  template: `
    <div class="pk-default-container">
      <p>{{ 'hello' | translate }}</p>
      <button (click)="startLoading()">start loading</button>
      <div *ngIf="aboutService.isContentLoaded" [innerHTML]="introduction | marked"></div>
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
export class AboutComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  introduction = '';

  constructor(private loading: LoadingService, public aboutService: AboutService) {
    this.aboutService.fetchIfNeeded();
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.aboutService.introduction$.pipe(delay(0)).subscribe(value => {
        this.introduction = value;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

  public startLoading(): void {
    this.loading.start();
    setTimeout(() => {
      this.loading.stop();
    }, 3000);
  }
}
