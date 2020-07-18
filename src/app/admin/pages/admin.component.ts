import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pk-admin',
  template: `
    <div class="pk-default-container">
      <pk-md-editor></pk-md-editor>
    </div>
  `,
  styles: [],
})
export class AdminComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
