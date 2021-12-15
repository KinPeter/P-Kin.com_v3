import { Component } from '@angular/core';

@Component({
  selector: 'pk-experience',
  template: `
    <div>
      TBA
      <pk-svg src="assets/svg/angular.svg" [size]="16"></pk-svg>
    </div>
  `,
  styles: [
    `
      div {
        display: flex;
        align-items: center;
      }
    `,
  ],
})
export class ExperienceComponent {
  constructor() {}
}
