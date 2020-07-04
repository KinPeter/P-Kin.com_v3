import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pk-app-bar',
  template: `
    <div class="app-bar" [class.app-bar_scrolled]="scrolled">
      <div class="app-bar__left">
        <a routerLink="/about" class="app-bar-button" [class.button-horizontal-animated]="!isActive('/about')">
          {{ 'menu.about' | translate }}
          <span *ngIf="isActive('/about')" class="app-bar-button__active"></span>
        </a>
        <a routerLink="/web-dev" class="app-bar-button" [class.button-horizontal-animated]="!isActive('/web-dev')">
          {{ 'menu.webDev' | translate }}
          <span *ngIf="isActive('/web-dev')" class="app-bar-button__active"></span>
        </a>
        <a routerLink="/pens" class="app-bar-button" [class.button-horizontal-animated]="!isActive('/pens')">
          {{ 'menu.pens' | translate }}
          <span *ngIf="isActive('/pens')" class="app-bar-button__active"></span>
        </a>
        <a
          routerLink="/game-and-3d"
          class="app-bar-button"
          [class.button-horizontal-animated]="!isActive('/game-and-3d')"
        >
          {{ 'menu.gameAnd3d' | translate }}
          <span *ngIf="isActive('/game-and-3d')" class="app-bar-button__active"></span>
        </a>
      </div>
      <div class="app-bar__right">
        <pk-theme-switch></pk-theme-switch>
        <pk-language-switch></pk-language-switch>
      </div>
    </div>
  `,
  styles: [
    `
      .app-bar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 84px;
        display: none;
        justify-content: space-between;
        align-items: center;
        padding: 0 84px;
        background: var(--background-color);
        color: var(--text-color-light);
        transition: all 0.3s ease;
      }
      @media (min-width: 912px) {
        .app-bar {
          display: flex;
        }
      }
      .app-bar:hover {
        background: var(--background-color-secondary);
        color: var(--text-color);
      }
      .app-bar_scrolled {
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
      }
      .app-bar__left,
      .app-bar__right {
        display: flex;
        align-items: center;
      }
      .app-bar-button {
        display: inline-block;
        font-weight: 300;
        font-family: var(--font-sans-serif), sans-serif;
        text-transform: uppercase;
        text-decoration: none;
        color: inherit;
        padding: 0.2rem 0.8rem;
        margin-right: 0.5rem;
        position: relative;
      }
      .app-bar-button:not(.button-horizontal-animated) {
        cursor: text;
      }
      .app-bar-button__active {
        position: absolute;
        bottom: 4px;
        left: 0.8rem;
        width: calc(100% - 1.6rem);
        border-bottom: 1px solid var(--color-accent);
      }
    `,
  ],
})
export class AppBarComponent implements OnInit {
  public scrolled: boolean = window.scrollY !== 0;
  constructor(private router: Router) {}

  ngOnInit(): void {
    // this.route.
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrolled = window.scrollY !== 0;
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
