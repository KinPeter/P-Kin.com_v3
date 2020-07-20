import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pk-icon-caret-right',
  template: `
    <svg [style]="styles" viewBox="0 0 24 24">
      <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
    </svg>
  `,
  styles: [``],
})
export class IconCaretRightComponent implements OnInit {
  @Input() size: number | undefined;

  public styles: string | undefined;

  constructor() {}

  ngOnInit(): void {
    this.styles = 'width: ' + this.size + 'px; height: ' + this.size + 'px;';
  }
}
