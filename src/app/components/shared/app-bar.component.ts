import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'pk-app-bar',
  template: `
    <div class="app-bar" [class.app-bar_scrolled]="scrolled">
      <div class="app-bar__left">
        <div class="button">{{ 'menu.about' | translate }}</div>
        <div class="button">{{ 'menu.webDev' | translate }}</div>
        <div class="button">{{ 'menu.pens' | translate }}</div>
        <div class="button">{{ 'menu.gameAnd3d' | translate }}</div>
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
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 84px;
        background: var(--background-color);
        color: var(--text-color-light);
        transition: all 0.3s ease;
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
      .button {
        display: inline-block;
        font-weight: 300;
        font-family: var(--font-sans-serif), sans-serif;
        text-transform: uppercase;
        padding: 1rem;
      }
    `,
  ],
})
export class AppBarComponent implements OnInit {
  public scrolled: boolean = window.scrollY !== 0;
  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrolled = window.scrollY !== 0;
  }
}
