import { Component, Input } from '@angular/core';

@Component({
  selector: 'pk-tech-cloud',
  template: `
    <div class="tech-cloud">
      <span class="tech-cloud__tech" *ngFor="let tech of techCloud; let i = index">
        {{ tech }}{{ i !== techCloud.length - 1 ? ', ' : '' }}
      </span>
    </div>
  `,
  styles: [
    `
      .tech-cloud {
        text-align: justify;
        opacity: 0;
        animation: blurRightAndFade 0.3s 0.8s ease forwards;
      }

      .tech-cloud__tech {
        text-transform: uppercase;
        font-weight: 300;
      }
    `,
  ],
})
export class TechCloudComponent {
  @Input() techCloud: string[] = [];

  constructor() {}
}
