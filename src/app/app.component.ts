import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'pk-root',
  template: '<router-outlet></router-outlet>',
  styles: [],
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    // init the translate service here
    translate.use('en');

    // logic to add when the language changes
    translate.onLangChange.subscribe(() => {
      console.log('Language changed!');
    });
  }
}
