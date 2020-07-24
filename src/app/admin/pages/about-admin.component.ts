import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pk-admin-about',
  template: `
    <h1>ABOUT ADMIN</h1>
    <pk-md-editor></pk-md-editor>
  `,
  styles: [``],
})
export class AboutAdminComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
