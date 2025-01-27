import { TranslateService } from '@ngx-translate/core';
import { LoadingService } from '~/app/services/ui/loading.service';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { RoutePath } from '~/app/types/enums/RoutePath';

@Component({
  selector: 'pk-root',
  template: `
    <pk-app-bar></pk-app-bar>
    <router-outlet></router-outlet>
    <pk-footer></pk-footer>
    <pk-side-drawer></pk-side-drawer>
    <pk-loading *ngIf="loading.getStatus() | async"></pk-loading>
  `,
  styles: [],
})
export class AppComponent {
  constructor(
    public translate: TranslateService,
    public loading: LoadingService,
    private title: Title,
    private router: Router
  ) {
    // init the translate service here
    translate.use('en');

    // logic to add when the language changes
    translate.onLangChange.subscribe(
      async (/*event: { lang: string; translations: Record<string, unknown> }*/) => {
        await this.setTitleFor(this.router.url);
      }
    );

    this.router.events.subscribe(async event => {
      if (event instanceof NavigationEnd) {
        await this.setTitleFor((event as NavigationEnd).urlAfterRedirects);
      }
    });
  }

  private async setTitleFor(url: string): Promise<void> {
    let newTitle: string;
    switch (url) {
      case `/${RoutePath.ABOUT}`:
        newTitle = await this.getTitleFor('menu.about');
        break;
      case `/${RoutePath.PROJECTS}`:
        newTitle = await this.getTitleFor('menu.projects');
        break;
      case `/${RoutePath.PENS}`:
        newTitle = await this.getTitleFor('menu.pens');
        break;
      case '/game-dev':
        newTitle = await this.getTitleFor('menu.gameDev');
        break;
      case `/${RoutePath.ERROR}`:
        newTitle = 'Ooops! | P-kin.com';
        break;
      default:
        newTitle = 'P-Kin.com';
        break;
    }
    this.title.setTitle(newTitle);
  }

  private async getTitleFor(translateKey: string): Promise<string> {
    const route = await firstValueFrom(this.translate.get(translateKey));
    return route + ' | P-Kin.com';
  }
}
