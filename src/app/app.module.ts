import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarkedPipe } from './pipes/marked.pipe';
import { LinksTargetBlankDirective } from './directives/links-target-blank.directive';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '~/app/lib/translate/http-loader.factory';
import { IconsModule } from '~/app/components/shared/icons/icons.module';
import { ThemeSwitchComponent } from '~/app/components/shared/theme-switch.component';
import { TechStackComponent } from '~/app/components/about/tech-stack.component';
import { TechCloudComponent } from '~/app/components/about/tech-cloud.component';
import { ProjectsComponent } from '~/app/pages/projects.component';
import { ExperienceComponent } from '~/app/pages/experience.component';
import { SideDrawerComponent } from '~/app/components/shared/side-drawer.component';
import { NotFoundComponent } from '~/app/components/portfolio/not-found.component';
import { FiltersMobileComponent } from '~/app/components/portfolio/filters-mobile.component';
import { FooterComponent } from '~/app/components/shared/footer.component';
import { PortfolioWrapperComponent } from '~/app/components/portfolio/portfolio-wrapper.component';
import { PensComponent } from '~/app/pages/pens.component';
import { ErrorComponent } from '~/app/pages/error.component';
import { AppBarComponent } from '~/app/components/shared/app-bar.component';
import { LanguageSwitchComponent } from '~/app/components/shared/language-switch.component';
import { FiltersDesktopComponent } from '~/app/components/portfolio/filters-desktop.component';
import { ContactsComponent } from '~/app/components/shared/contacts.component';
import { LoadingComponent } from '~/app/components/shared/loading.component';
import { PortfolioModalComponent } from '~/app/components/portfolio/portfolio-modal.component';
import { PortfolioCardComponent } from '~/app/components/portfolio/portfolio-card.component';
import { EmbeddedPenComponent } from '~/app/components/pens/embedded-pen.component';
import { AboutComponent } from '~/app/pages/about.component';
import { MarkedWithIconsPipe } from '~/app/pipes/marked-with-icons.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MarkedPipe,
    MarkedWithIconsPipe,
    LinksTargetBlankDirective,
    AppBarComponent,
    SideDrawerComponent,
    FooterComponent,
    ContactsComponent,
    LoadingComponent,
    AboutComponent,
    ProjectsComponent,
    PensComponent,
    ExperienceComponent,
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
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // ngx-translate docs: https://github.com/ngx-translate/core
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useFactory: HttpLoaderFactory, deps: [HttpClient] },
      defaultLanguage: 'en',
    }),
    IconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
