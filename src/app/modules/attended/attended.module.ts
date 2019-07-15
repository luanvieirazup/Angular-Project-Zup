import { AttendedComponent } from './attended.component';
import { AttendedRoutingModule } from './attended.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AttendedComponent
  ],
  imports: [
    CommonModule,
    AttendedRoutingModule,
    TranslateModule.forChild()
  ]
})
export class AttendedModule { }
