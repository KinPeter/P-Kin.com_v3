import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pk-admin-root',
  template: `
    <div class="admin-container">
      <pk-admin-menu-bar></pk-admin-menu-bar>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [``],
})
export class AdminComponent {
  constructor(private router: Router) {
    this.router.navigate(['/admin/about']);
  }
}
