import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLinks } from '~/app/types/RouterLinks';
import { routerLinks } from '~/app/constants/routerLinks';

@Component({
  selector: 'pk-side-drawer',
  template: `
    <div class="side-drawer" [class.side-drawer_open]="open">
      <div
        class="side-drawer__toggle-header"
        [class.side-drawer__toggle-header_scrolled]="scrolled"
      >
        <div class="hamburger-button" (click)="onToggle()">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="side-drawer__overlay" (click)="onClose()"></div>
      <div class="drawer">
        <div class="drawer__close" (click)="onClose()">
          <div></div>
        </div>
        <a
          [routerLink]="links.ABOUT"
          class="drawer__button"
          [class.button-horizontal-animated]="!isActive(links.ABOUT)"
          (click)="onClose()"
        >
          {{ 'menu.about' | translate }}
          <span *ngIf="isActive(links.ABOUT)" class="drawer-button__active"></span>
        </a>
        <a
          [routerLink]="links.EXPERIENCE"
          class="drawer__button"
          [class.button-horizontal-animated]="!isActive(links.EXPERIENCE)"
          (click)="onClose()"
        >
          {{ 'menu.experience' | translate }}
          <span *ngIf="isActive(links.EXPERIENCE)" class="drawer-button__active"></span>
        </a>
        <a
          [routerLink]="links.PROJECTS"
          class="drawer__button"
          [class.button-horizontal-animated]="!isActive(links.PROJECTS)"
          (click)="onClose()"
        >
          {{ 'menu.projects' | translate }}
          <span *ngIf="isActive(links.PROJECTS)" class="drawer-button__active"></span>
        </a>
        <a
          [routerLink]="links.PENS"
          class="drawer__button"
          [class.button-horizontal-animated]="!isActive(links.PENS)"
          (click)="onClose()"
        >
          {{ 'menu.pens' | translate }}
          <span *ngIf="isActive(links.PENS)" class="drawer-button__active"></span>
        </a>
        <div class="drawer__theme-and-language">
          <pk-theme-switch></pk-theme-switch>
          <pk-language-switch></pk-language-switch>
        </div>
        <div class="drawer__footer">
          <pk-contacts></pk-contacts>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .side-drawer {
        display: block;
        justify-content: space-between;
        align-items: center;
        padding: 0 84px;
        color: var(--text-color);
        transition: all 0.3s ease;
      }

      @media (min-width: 912px) {
        .side-drawer {
          display: none;
        }
      }

      .side-drawer__overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.7);
        display: none;
        z-index: 4;
      }

      .side-drawer_open .side-drawer__overlay {
        display: block;
      }

      .drawer {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 260px;
        background: var(--background-color-secondary);
        border-right: 1px solid var(--color-accent);
        transition: all 0.3s ease;
        transform: translateX(-100%);
        z-index: 5;
      }

      .side-drawer_open .drawer {
        transform: translateX(0);
      }

      .side-drawer__toggle-header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 52px;
        background: var(--background-color);
        display: flex;
        align-items: center;
      }

      .side-drawer__toggle-header_scrolled {
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
      }

      .hamburger-button {
        padding: 1rem 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .hamburger-button div {
        width: 30px;
        border-bottom: 1px solid var(--text-color-light);
        margin: 4px 0;
      }

      .drawer__close {
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 0.6rem;
      }

      .drawer__close div {
        height: 22px;
        width: 22px;
        border-left: 1px solid var(--text-color-light);
        border-bottom: 1px solid var(--text-color-light);
        transform: rotate(45deg);
      }

      .drawer__button {
        display: block;
        font-weight: 300;
        font-family: var(--font-sans-serif), sans-serif;
        text-transform: uppercase;
        text-decoration: none;
        color: inherit;
        margin: 1rem 0.5rem;
        padding: 0.2rem 0.8rem;
        position: relative;
      }

      .drawer-button__active {
        position: absolute;
        bottom: 4px;
        left: 0.8rem;
        width: calc(100% - 1.6rem);
        border-bottom: 1px solid var(--color-accent);
      }

      .drawer__footer,
      .drawer__theme-and-language {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
      }

      .drawer__footer {
        width: 100%;
        position: absolute;
        bottom: 2rem;
      }

      pk-theme-switch {
        margin-right: 1rem;
      }
    `,
  ],
})
export class SideDrawerComponent {
  public scrolled: boolean = window.scrollY !== 0;
  public open = false;
  public links: RouterLinks = routerLinks;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrolled = window.scrollY !== 0;
  }

  constructor(private router: Router) {}

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  onToggle(): void {
    this.open = !this.open;
  }

  onClose(): void {
    this.open = false;
  }
}
