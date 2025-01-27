import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLinks } from '~/app/types/RouterLinks';
import { routerLinks } from '~/app/constants/routerLinks';

@Component({
  selector: 'pk-app-bar',
  template: `
    <div class="app-bar" [class.app-bar_scrolled]="scrolled">
      <div class="app-bar__left">
        <a
          [routerLink]="links.ABOUT"
          class="app-bar-button"
          [class.button-horizontal-animated]="!isActive(links.ABOUT)"
        >
          {{ 'menu.about' | translate }}
          <span *ngIf="isActive(links.ABOUT)" class="app-bar-button__active"></span>
        </a>
        <a
          [routerLink]="links.EXPERIENCE"
          class="app-bar-button"
          [class.button-horizontal-animated]="!isActive(links.EXPERIENCE)"
        >
          {{ 'menu.experience' | translate }}
          <span *ngIf="isActive(links.EXPERIENCE)" class="app-bar-button__active"></span>
        </a>
        <a
          [routerLink]="links.PROJECTS"
          class="app-bar-button"
          [class.button-horizontal-animated]="!isActive(links.PROJECTS)"
        >
          {{ 'menu.projects' | translate }}
          <span *ngIf="isActive(links.PROJECTS)" class="app-bar-button__active"></span>
        </a>
        <a
          [routerLink]="links.PENS"
          class="app-bar-button"
          [class.button-horizontal-animated]="!isActive(links.PENS)"
        >
          {{ 'menu.pens' | translate }}
          <span *ngIf="isActive(links.PENS)" class="app-bar-button__active"></span>
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
        z-index: 9;
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

      pk-theme-switch {
        margin-right: 1rem;
      }
    `,
  ],
})
export class AppBarComponent {
  public scrolled: boolean = window.scrollY !== 0;
  public links: RouterLinks = routerLinks;

  constructor(private router: Router) {}

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrolled = window.scrollY !== 0;
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
