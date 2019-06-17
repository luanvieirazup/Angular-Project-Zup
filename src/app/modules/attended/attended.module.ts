import { AttendedComponent } from './attended.component';
import { AttendedRoutingModule } from './attended.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AttendedComponent
  ],
  imports: [
    CommonModule,
    AttendedRoutingModule
  ]
})
export class AttendedModule { }
