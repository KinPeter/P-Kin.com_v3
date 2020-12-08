import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '~/app/admin/services/auth.service';
import { AdminApiService } from '../services/admin-api.service';

@Component({
  selector: 'pk-admin-menu-bar',
  template: `
    <div *ngIf="!isLoginPage()" class="admin-menu-bar">
      <div class="admin-menu-bar__left">
        <h3>Admin:</h3>
        <a routerLink="/admin/about" [class.admin-link_active]="isActive('/admin/about')">
          About page
        </a>
        |
        <a
          routerLink="/admin/webdev-filters"
          [class.admin-link_active]="isActive('/admin/webdev-filters')"
        >
          WebDev filters
        </a>
        |
        <a
          routerLink="/admin/webdev-portfolio"
          [class.admin-link_active]="isActive('/admin/webdev-portfolio')"
        >
          WebDev portfolio
        </a>
        |
        <a routerLink="/admin/pens" [class.admin-link_active]="isActive('/admin/pens')">Pens</a>
        |
        <a
          routerLink="/admin/game-dev-filters"
          [class.admin-link_active]="isActive('/admin/game-dev-filters')"
        >
          GameDev filters
        </a>
        |
        <a
          routerLink="/admin/game-dev-portfolio"
          [class.admin-link_active]="isActive('/admin/game-dev-portfolio')"
        >
          GameDev portfolio
        </a>
      </div>
      <div class="admin-menu-bar__right">
        <a [href]="api.backupURL" target="_blank">
          Backup data
        </a>
        <a routerLink="/admin/login" (click)="onLogout()">
          Log out
        </a>
      </div>
    </div>
  `,
  styles: [
    `
      .admin-menu-bar {
        display: flex;
        justify-content: space-between;
        height: 50px;
      }

      .admin-menu-bar__left {
        display: flex;
        align-items: baseline;
      }

      .admin-menu-bar h3 {
        margin: 0;
      }

      .admin-menu-bar a {
        text-decoration: none;
        color: var(--text-color-light);
        margin: 0 1rem;
      }

      .admin-menu-bar a:hover {
        color: var(--text-color);
      }

      .admin-link_active {
        border-bottom: 1px solid var(--color-accent);
      }
    `,
  ],
})
export class AdminMenuBarComponent {
  constructor(private router: Router, private auth: AuthService, public api: AdminApiService) {}

  public isLoginPage(): boolean {
    return this.router.url === '/admin/login';
  }

  public isActive(route: string): boolean {
    return this.router.url === route;
  }

  public onLogout(): void {
    this.auth.logout();
  }
}
