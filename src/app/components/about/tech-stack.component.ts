import { Component, Input, OnChanges } from '@angular/core';

interface Skill {
  tech: string;
  value: boolean[];
}

@Component({
  selector: 'pk-tech-stack',
  template: `
    <div class="tech-stack">
      <div class="skill" *ngFor="let skill of skillsArray">
        <div class="skill-tech">
          {{ skill.tech }}
        </div>
        <div class="skill-bar">
          <div
            *ngFor="let stick of skill.value; let i = index"
            class="skill-bar__stick"
            [ngStyle]="getSkillBarStickStyle(i)"
          ></div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .tech-stack {
        margin-bottom: 2rem;
      }

      .skill {
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;
      }

      .skill-tech {
        flex-basis: 50%;
        text-align: right;
        padding-right: 1rem;
      }

      .skill-bar {
        flex-basis: 50%;
        display: flex;
      }

      @media (min-width: 600px) {
        .skill-tech {
          flex-basis: 30%;
        }

        .skill-bar {
          flex-basis: 70%;
        }
      }

      @media (min-width: 1000px) {
        .skill-tech {
          flex-basis: 20%;
        }

        .skill-bar {
          flex-basis: 80%;
        }
      }

      @media (min-width: 1100px) {
        .skill-tech {
          flex-basis: 50%;
        }

        .skill-bar {
          flex-basis: 50%;
        }
      }

      @media (min-width: 1200px) {
        .skill-tech {
          flex-basis: 40%;
        }

        .skill-bar {
          flex-basis: 60%;
        }
      }

      .skill-bar__stick {
        height: 0.8rem;
        width: 4px;
        margin-right: 6px;
        background: var(--color-accent);
        transform: scaleX(0);
        animation: stretchIn 0.1s ease forwards;
      }
    `,
  ],
})
export class TechStackComponent implements OnChanges {
  @Input() skills: Record<string, number> = {};
  skillsArray: Skill[] = [];

  constructor() {}

  ngOnChanges(): void {
    this.skillsArray = Object.entries(this.skills).map(entry => {
      return {
        tech: entry[0].replace('-sharp', '#'),
        value: new Array(entry[1]).fill(true),
      };
    });
  }

  getSkillBarStickStyle(i: number): Record<string, string | number> {
    return {
      opacity: 1 - i * 0.08,
      animationDelay: `${0.3 + i / 10}s`,
    };
  }
}
