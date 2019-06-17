import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent
  ],
  imports: [

  ],
  exports: [
    HeaderComponent,
    SideBarComponent
  ]
})
export class CommonModule { }
