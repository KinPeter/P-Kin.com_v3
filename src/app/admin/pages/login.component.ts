import { Component, OnInit } from '@angular/core';
import { AuthService } from '~/app/admin/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pk-admin-login',
  template: `
    <h1>LOGIN</h1>
    <input type="text" [(ngModel)]="email" />
    <input type="password" [(ngModel)]="password" />
    <button (click)="onLogin()">login</button>
  `,
  styles: [``],
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  async onLogin(): Promise<void> {
    await this.auth.login(this.email, this.password);
    await this.router.navigate(['/admin/about']);
  }
}
