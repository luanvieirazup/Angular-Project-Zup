import { TrashComponent } from './trash.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrashtingModule } from './trash.routing';

@NgModule({
  declarations: [TrashComponent],
  imports: [
    CommonModule,
    TrashtingModule
  ]
})
export class TrashModule { }
