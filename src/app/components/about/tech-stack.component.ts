import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pk-tech-stack',
  template: `
    <p>Tech stack component</p>
  `,
  styles: [``],
})
export class TechStackComponent implements OnInit {
  @Input() skills: Record<string, number> = {};

  constructor() {}

  ngOnInit(): void {}
}
