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
            [className]="'skill-bar__stick skill-bar__stick_' + i"
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
        z-index: -1;
      }
      .skill-bar__stick_0 {
        opacity: 1;
        transform: scaleX(0);
        animation: stretchIn 0.1s 0.3s ease forwards;
      }
      .skill-bar__stick_1 {
        opacity: 0.92;
        transform: scaleX(0);
        animation: stretchIn 0.1s 0.4s ease forwards;
      }
      .skill-bar__stick_2 {
        opacity: 0.84;
        transform: scaleX(0);
        animation: stretchIn 0.1s 0.5s ease forwards;
      }
      .skill-bar__stick_3 {
        opacity: 0.76;
        transform: scaleX(0);
        animation: stretchIn 0.1s 0.6s ease forwards;
      }
      .skill-bar__stick_4 {
        opacity: 0.68;
        transform: scaleX(0);
        animation: stretchIn 0.1s 0.7s ease forwards;
      }
      .skill-bar__stick_5 {
        opacity: 0.6;
        transform: scaleX(0);
        animation: stretchIn 0.1s 0.8s ease forwards;
      }
      .skill-bar__stick_6 {
        opacity: 0.52;
        transform: scaleX(0);
        animation: stretchIn 0.1s 0.9s ease forwards;
      }
      .skill-bar__stick_7 {
        opacity: 0.44;
        transform: scaleX(0);
        animation: stretchIn 0.1s 1s ease forwards;
      }
      .skill-bar__stick_8 {
        opacity: 0.36;
        transform: scaleX(0);
        animation: stretchIn 0.1s 1.1s ease forwards;
      }
      .skill-bar__stick_9 {
        opacity: 0.28;
        transform: scaleX(0);
        animation: stretchIn 0.1s 1.2s ease forwards;
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
}
