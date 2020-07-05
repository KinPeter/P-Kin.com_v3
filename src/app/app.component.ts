import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'pk-root',
  template: `
    <pk-app-bar></pk-app-bar>
    <pk-side-drawer></pk-side-drawer>
    <router-outlet></router-outlet>
    <pk-footer></pk-footer>
    <pk-loading *ngIf="false"></pk-loading>
  `,
  styles: [],
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    // init the translate service here
    translate.use('en');

    // logic to add when the language changes
    translate.onLangChange.subscribe((event: { lang: string; translations: Record<string, unknown> }) => {
      console.log('Language changed to:', event.lang);
      if (event.lang === 'kr') {
        document.body.style.setProperty('--font-serif', 'Noto Serif KR');
        document.body.style.setProperty('--font-sans-serif', 'Noto Sans KR');
      } else {
        document.body.style.setProperty('--font-serif', 'Martel');
        document.body.style.setProperty('--font-sans-serif', 'Montserrat');
      }
    });
  }
}
