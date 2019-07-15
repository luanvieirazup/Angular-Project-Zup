import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent
  ],
  imports: [
    RouterModule,
    TranslateModule.forChild()
  ],
  exports: [
    HeaderComponent,
    SideBarComponent
  ]
})
export class CommonModule { }
