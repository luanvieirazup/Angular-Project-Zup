import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { AttendedComponent } from './modules/attended/attended.component';
import { TrashComponent } from './modules/trash/trash.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AttendedComponent,
    TrashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
