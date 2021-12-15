import { Component, Input } from '@angular/core';
import { Skill } from '~/app/types/content/Skill';

@Component({
  selector: 'pk-tech-stack',
  template: `
    <div class="tech-stack">
      <div class="skill" *ngFor="let skill of skills; let i = index" [ngStyle]="getSkillStyle(i)">
        <pk-svg [src]="skill.icon" [size]="20"></pk-svg>
        <span>{{ skill.name.toUpperCase() }}</span>
      </div>
    </div>
  `,
  styles: [
    // language=SCSS
    `
      .tech-stack {
        margin-bottom: 2rem;
      }

      .skill {
        display: flex;
        align-items: center;
        margin: 0 0 0.5rem 1rem;
        opacity: 0;
        animation: blurRightAndFade 0.3s 0.5s ease forwards;

        span {
          margin-left: 1rem;
        }
      }
    `,
  ],
})
export class TechStackComponent {
  @Input() skills: Skill[] = [];

  constructor() {}

  getSkillStyle(i: number): Record<string, string | number> {
    return {
      animationDelay: `${0.3 + i / 10}s`,
    };
  }
}
