import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoadingService } from '~/app/services/ui/loading.service';

@Component({
  selector: 'pk-root',
  template: `
    <router-outlet></router-outlet>
    <pk-footer></pk-footer>
    <pk-app-bar></pk-app-bar>
    <pk-side-drawer></pk-side-drawer>
    <pk-loading *ngIf="loading.getStatus() | async"></pk-loading>
  `,
  styles: [],
})
export class AppComponent {
  constructor(public translate: TranslateService, public loading: LoadingService) {
    // init the translate service here
    translate.use('en');

    // logic to add when the language changes
    translate.onLangChange.subscribe((event: { lang: string; translations: Record<string, unknown> }) => {
      console.log('Language changed to:', event.lang);
      if (event.lang === 'kr') {
        document.body.style.setProperty('--font-sans-serif', 'Noto Sans KR');
        // document.body.style.setProperty('--font-serif', 'Noto Serif KR');
      } else {
        document.body.style.setProperty('--font-sans-serif', 'Montserrat');
        // document.body.style.setProperty('--font-serif', 'Martel');
      }
    });
  }
}
