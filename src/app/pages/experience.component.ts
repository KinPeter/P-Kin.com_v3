import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExperienceService } from '~/app/services/content/experience.service';

@Component({
  selector: 'pk-experience',
  template: `
    <div class="pk-default-container">
      <div
        class="experience markdown-text"
        linksTargetBlank
        [innerHTML]="experience | markedWithIcons | async"
      ></div>
    </div>
  `,
  styles: [
    // language=SCSS
    `
      .experience {
        padding: 0.3rem 0.6rem;
        border-left: 2px solid var(--color-accent-light);
        width: 100%;
        opacity: 0;
        animation: blurUpAndFade 0.5s ease forwards;

        @media (min-width: 500px) {
          padding: 1rem 1.5rem;
        }
      }
    `,
  ],
})
export class ExperienceComponent {
  private subscriptions: Subscription = new Subscription();

  public experience = '';

  constructor(private experienceService: ExperienceService) {
    this.experienceService.fetchIfNeeded();
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.experienceService.experience$.subscribe(value => {
        this.experience = value;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
