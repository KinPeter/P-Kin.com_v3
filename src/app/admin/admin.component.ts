import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pk-admin-root',
  template: `
    <div class="admin-container">
      <pk-admin-menu-bar></pk-admin-menu-bar>
      <router-outlet></router-outlet>
      <pk-snackbar></pk-snackbar>
    </div>
  `,
  styles: [``],
})
export class AdminComponent {
  constructor(private router: Router) {
    const redirectUrl = this.router.url === '/admin' ? '/admin/about' : router.url;
    this.router.navigate([redirectUrl]);
  }
}
