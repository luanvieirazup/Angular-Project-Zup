import { CommonModule } from './common/common.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TranslateModule, TranslateService} from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { translations } from './common/i18n/pt-BR';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private readonly translateService: TranslateService) {
    this.translateService.setDefaultLang('pt_BR');
    this.translateService.use('pt_BR');
    this.translateService.setTranslation(this.translateService.currentLang, translations, true);
  }
}
