import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppRoutingModule } from '~/app/app-routing.module';
import { AppComponent } from '~/app/app.component';
import { HttpLoaderFactory } from '~/app/lib/translate/http-loader.factory';
import { AboutComponent } from '~/app/pages/about.component';
import { AppBarComponent } from '~/app/components/shared/app-bar.component';
import { IconsModule } from '~/app/components/shared/icons/icons.module';
import { ThemeSwitchComponent } from '~/app/components/shared/theme-switch.component';
import { LanguageSwitchComponent } from '~/app/components/shared/language-switch.component';
import { WebDevComponent } from '~/app/pages/web-dev.component';
import { PensComponent } from '~/app/pages/pens.component';
import { GameAnd3dComponent } from '~/app/pages/game-and-3d.component';
import { SideDrawerComponent } from '~/app/components/shared/side-drawer.component';
import { FooterComponent } from '~/app/components/shared/footer.component';
import { ContactsComponent } from '~/app/components/shared/contacts.component';
import { LoadingComponent } from '~/app/components/shared/loading.component';
import { LoadingService } from '~/app/services/ui/loading.service';
import { AboutService } from '~/app/services/content/about.service';
import { ApiService } from '~/app/services/api/api.service';
import { SharedModule } from '~/app/shared.module';
import { TechStackComponent } from '~/app/components/about/tech-stack.component';
import { TechCloudComponent } from '~/app/components/about/tech-cloud.component';
import { WebDevService } from '~/app/services/content/web-dev.service';
import { PortfolioCardComponent } from '~/app/components/portfolio/portfolio-card.component';
import { PortfolioModalComponent } from '~/app/components/portfolio/portfolio-modal.component';
import { PortfolioWrapperComponent } from '~/app/components/portfolio/portfolio-wrapper.component';
import { FiltersDesktopComponent } from '~/app/components/portfolio/filters-desktop.component';
import { FiltersMobileComponent } from '~/app/components/portfolio/filters-mobile.component';
import { GameAnd3dService } from '~/app/services/content/game-and-3d.service';
import { EmbeddedPenComponent } from '~/app/components/pens/embedded-pen.component';
import { PensService } from '~/app/services/content/pens.service';
import { NotFoundComponent } from '~/app/components/portfolio/not-found.component';
import { ErrorComponent } from '~/app/pages/error.component';
import { ErrorService } from '~/app/services/ui/error.service';
import { AdminModule } from '~/app/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    SideDrawerComponent,
    FooterComponent,
    ContactsComponent,
    LoadingComponent,
    AboutComponent,
    WebDevComponent,
    PensComponent,
    GameAnd3dComponent,
    ThemeSwitchComponent,
    LanguageSwitchComponent,
    TechStackComponent,
    TechCloudComponent,
    PortfolioCardComponent,
    PortfolioModalComponent,
    PortfolioWrapperComponent,
    FiltersDesktopComponent,
    FiltersMobileComponent,
    EmbeddedPenComponent,
    NotFoundComponent,
    ErrorComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // ngx-translate docs: https://github.com/ngx-translate/core
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useFactory: HttpLoaderFactory, deps: [HttpClient] },
      defaultLanguage: 'en',
    }),
    IconsModule,

    // TODO: REMOVE from here!
    AdminModule,
  ],
  providers: [
    LoadingService,
    ErrorService,
    ApiService,
    AboutService,
    WebDevService,
    GameAnd3dService,
    PensService,
    Title,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
