import { TrashComponent } from './trash.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrashtingModule } from './trash.routing';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [TrashComponent],
  imports: [
    CommonModule,
    TrashtingModule,
    TranslateModule.forChild()
  ]
})
export class TrashModule { }
