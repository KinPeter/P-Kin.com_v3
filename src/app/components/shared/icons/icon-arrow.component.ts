import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pk-icon-arrow',
  template: `
    <svg [style]="styles" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"
      />
    </svg>
  `,
  styles: [``],
})
export class IconArrowComponent implements OnInit {
  @Input() size: number | undefined;
  @Input() direction: 'up' | 'down' | 'left' | 'right' = 'up';

  public styles: string | undefined;

  constructor() {}

  ngOnInit(): void {
    this.styles = 'width: ' + this.size + 'px; height: ' + this.size + 'px;' + this.getRotation();
  }

  private getRotation(): string {
    let deg: number;
    switch (this.direction) {
      case 'up':
        deg = 0;
        break;
      case 'right':
        deg = 90;
        break;
      case 'down':
        deg = 180;
        break;
      case 'left':
        deg = 270;
        break;
      default:
        deg = 0;
        break;
    }
    return `transform: rotate(${deg}deg);`;
  }
}
