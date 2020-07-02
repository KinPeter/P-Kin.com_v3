import { Component, HostBinding } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'pk-root',
  template: `
    <button (click)="onDark()">dark</button>
    <button (click)="onLight()">light</button>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  private theme = 'theme-dark';

  @HostBinding('class') get themeClass() {
    return this.theme;
  }

  constructor(public translate: TranslateService) {
    // init the translate service here
    translate.use('en');

    // logic to add when the language changes
    translate.onLangChange.subscribe(() => {
      console.log('Language changed!');
    });
  }

  onLight() {
    this.theme = 'theme-light';
  }

  onDark() {
    this.theme = 'theme-dark';
  }
}
