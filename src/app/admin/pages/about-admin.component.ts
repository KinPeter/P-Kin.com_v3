import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '~/app/admin/services/auth.service';

@Component({
  selector: 'pk-admin-about',
  template: `
    <h1>ABOUT ADMIN</h1>
    <button (click)="onLogout()">logout</button>
  `,
  styles: [``],
})
export class AboutAdminComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onLogout(): void {
    this.auth.logout();
    this.router.navigate(['/admin/login']);
  }
}
