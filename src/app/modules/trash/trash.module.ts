import { TrashComponent } from './trash.component';
import { NgModule } from '@angular/core';
import { TrashRoutingModule } from './trash.routing';
import { TranslateModule } from '@ngx-translate/core';
import { CommonComponentsModule } from 'src/app/common/common.module';

@NgModule({
  imports: [
    CommonComponentsModule,
    TrashRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [TrashComponent]
})
export class TrashModule { }
