import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent
  ],
  imports: [
    RouterModule,

  ],
  exports: [
    HeaderComponent,
    SideBarComponent
  ]
})
export class CommonModule { }
