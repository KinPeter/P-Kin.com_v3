import { Component, OnDestroy, OnInit } from '@angular/core';
import { AboutService } from '~/app/services/content/about.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pk-about',
  template: `
    <div *ngIf="aboutService.isContentLoaded" class="pk-default-container about-wrapper">
      <div
        class="about-introduction markdown-text"
        linksTargetBlank
        [innerHTML]="introduction | marked"
      ></div>
      <div class="about-skills">
        <h2>{{ 'p.about.tech-stack' | translate }}</h2>
        <pk-tech-stack [skills]="skills"></pk-tech-stack>
        <h3>{{ 'p.about.other-tech' | translate }}</h3>
        <pk-tech-cloud [techCloud]="techCloud"></pk-tech-cloud>
      </div>
    </div>
  `,
  styles: [
    `
      .about-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      .about-introduction,
      .about-skills {
        padding: 0.3rem 0.6rem;
        border-left: 2px solid var(--color-accent-light);
      }

      .about-introduction {
        width: 100%;
        opacity: 0;
        animation: blurUpAndFade 0.5s ease forwards;
      }

      .about-skills {
        width: 100%;
        margin-top: 2rem;
        opacity: 0;
        animation: blurUpAndFade 0.5s 0.2s ease forwards;
      }

      @media (min-width: 500px) {
        .about-introduction,
        .about-skills {
          padding: 1rem 1.5rem;
        }
      }

      @media (min-width: 1100px) {
        .about-wrapper {
          flex-direction: row;
        }

        .about-introduction {
          width: 70%;
        }

        .about-skills {
          width: 30%;
          margin-top: 0;
        }
      }
    `,
  ],
})
export class AboutComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  introduction = '';
  skills: Record<string, number> = {};
  techCloud: string[] = [];

  constructor(public aboutService: AboutService) {
    this.aboutService.fetchIfNeeded();
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.aboutService.introduction$.subscribe(value => {
        this.introduction = value;
      }),
      this.aboutService.skills$.subscribe(value => {
        this.skills = value;
      }),
      this.aboutService.techCloud$.subscribe(value => {
        this.techCloud = value;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
