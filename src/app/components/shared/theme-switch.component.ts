import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'pk-theme-switch',
  template: `
    <div class="theme-switch button-vertical-animated" (click)="onThemeSwitch()">
      <pk-icon-themes></pk-icon-themes>
    </div>
  `,
  styles: [
    `
      .theme-switch {
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      pk-icon-themes {
        height: 24px;
      }
    `,
  ],
})
export class ThemeSwitchComponent {
  constructor(private renderer: Renderer2) {}

  onLight(): void {
    this.renderer.removeClass(document.body, 'dark');
  }

  onDark(): void {
    this.renderer.addClass(document.body, 'dark');
  }

  onThemeSwitch(): void {
    document.body.classList.contains('dark') ? this.onLight() : this.onDark();
  }
}
