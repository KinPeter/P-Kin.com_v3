import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppRoutingModule } from '~/app/app-routing.module';
import { AppComponent } from '~/app/app.component';
import { HttpLoaderFactory } from '~/app/lib/translate/http-loader.factory';
import { AboutComponent } from '~/app/pages/about.component';
import { MarkedPipe } from '~/app/pipes/marked.pipe';
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
  ],
  providers: [LoadingService, ApiService, AboutService],
  bootstrap: [AppComponent],
})
export class AppModule {}
