import { Component } from '@angular/core';

@Component({
  selector: 'pk-footer',
  template: `
    <footer (mouseover)="hovered = true" (mouseleave)="hovered = false">
      <div class="footer-left">
        <small>
          With
          <pk-icon-heart [size]="14"></pk-icon-heart>
          from Budapest, © {{ currentYear }}, Peter Kin
        </small>
      </div>
      <div class="footer-right">
        <pk-contacts [hovered]="hovered"></pk-contacts>
      </div>
    </footer>
  `,
  styles: [
    `
      footer {
        position: fixed;
        bottom: 0;
        left: 0;
        display: none;
        width: 100vw;
        height: 52px;
        justify-content: space-between;
        align-items: center;
        padding: 0 90px;
        background: var(--background-color);
        color: var(--text-color-light);
        transition: all 0.3s ease;
      }
      @media (min-width: 912px) {
        footer {
          display: flex;
        }
      }
      footer:hover {
        background: var(--background-color-secondary);
        color: var(--text-color);
      }
      footer:hover pk-contacts {
        color: var(--text-color) !important;
      }
    `,
  ],
})
export class FooterComponent {
  public currentYear = new Date().getFullYear();
  public hovered = false;

  constructor() {}
}
