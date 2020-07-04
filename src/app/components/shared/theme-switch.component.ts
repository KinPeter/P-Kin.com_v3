import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'pk-theme-switch',
  template: `
    <div class="theme-switch" (click)="onThemeSwitch()">
      <pk-icon-themes></pk-icon-themes>
    </div>
  `,
  styles: [
    `
      .theme-switch {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
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
    console.log('onThemeSwitch');
    document.body.classList.contains('dark') ? this.onLight() : this.onDark();
  }
}
