import { Component, Input, OnInit } from '@angular/core';

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
      }
      .tech-cloud__tech {
        text-transform: uppercase;
        font-weight: 300;
      }
    `,
  ],
})
export class TechCloudComponent implements OnInit {
  @Input() techCloud: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
