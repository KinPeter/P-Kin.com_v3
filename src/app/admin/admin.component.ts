import { Component } from '@angular/core';

@Component({
  selector: 'pk-admin',
  template: `
    <router-outlet></router-outlet>
    <!--    <div class="pk-default-container">-->
    <!--      <pk-md-editor></pk-md-editor>-->
    <!--    </div>-->
  `,
  styles: [],
})
export class AdminComponent {
  constructor() {}
}
