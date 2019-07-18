import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CommonComponentsModule } from 'src/app/common/common.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CommonComponentsModule,
    HomeRoutingModule,
    TranslateModule.forChild()
  ]
})
export class HomeModule { }
