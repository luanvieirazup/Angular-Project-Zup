import { AttendedComponent } from './attended.component';
import { AttendedRoutingModule } from './attended.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CommonComponentsModule } from 'src/app/common/common.module';

@NgModule({
  declarations: [
    AttendedComponent
  ],
  imports: [
    CommonModule,
    CommonComponentsModule,
    AttendedRoutingModule,
    TranslateModule.forChild()
  ]
})
export class AttendedModule { }
