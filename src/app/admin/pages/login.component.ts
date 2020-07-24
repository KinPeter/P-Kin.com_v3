import { Component, OnInit } from '@angular/core';
import { AuthService } from '~/app/admin/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pk-admin-login',
  template: `
    <div class="login">
      <h1>ADMIN LOGIN</h1>
      <form (ngSubmit)="onLogin()" #form="ngForm">
        <input class="pk-input" type="email" name="email" placeholder="Email" [(ngModel)]="email" />
        <input class="pk-input" type="password" name="password" placeholder="Password" [(ngModel)]="password" />
        <button class="pk-button pk-button_accent" type="submit">login</button>
      </form>
    </div>
  `,
  styles: [
    `
      .login {
        width: 350px;
        margin: 0 auto;
      }

      .login input {
        display: block;
        width: 100%;
        margin-bottom: 1rem;
      }

      .login button {
        margin-top: 1rem;
        float: right;
      }
    `,
  ],
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
