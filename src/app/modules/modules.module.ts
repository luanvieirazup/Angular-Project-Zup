import { HomeComponent } from './home/home.component';
import { AttendedComponent } from './attended/attended.component';
import { TrashComponent } from './trash/trash.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        HomeComponent,
        AttendedComponent,
        TrashComponent,
    ],
    imports: [

    ],
    exports: [
        HomeComponent,
        AttendedComponent,
        TrashComponent,
    ]
  })
  export class ModulesModule { }
