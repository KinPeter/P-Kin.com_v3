import { Component, Input } from '@angular/core';
import { Skill } from '~/app/types/content/Skill';

@Component({
  selector: 'pk-tech-stack',
  template: `
    <div class="tech-stack">
      <div class="skill" *ngFor="let skill of skills">
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

  getSkillBarStickStyle(i: number): Record<string, string | number> {
    return {
      opacity: 1 - i * 0.08,
      animationDelay: `${0.3 + i / 10}s`,
    };
  }
}
