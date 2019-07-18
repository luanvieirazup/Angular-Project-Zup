import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { UserListComponent } from './user-list/user-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
    UserListComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    TranslateModule.forChild()
  ],
  exports: [
    HeaderComponent,
    SideBarComponent,
    UserListComponent
  ]
})
export class CommonComponentsModule { }
