import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppRoutingModule } from '~/app/app-routing.module';
import { AppComponent } from '~/app/app.component';
import { HttpLoaderFactory } from '~/app/lib/translate/http-loader.factory';
import { HomeComponent } from '~/app/pages/home.component';
import { MarkedPipe } from '~/app/pipes/marked.pipe';

@NgModule({
  declarations: [AppComponent, HomeComponent, MarkedPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // ngx-translate docs: https://github.com/ngx-translate/core
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useFactory: HttpLoaderFactory, deps: [HttpClient] },
      defaultLanguage: 'en',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
