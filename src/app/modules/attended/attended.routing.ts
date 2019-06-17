import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendedComponent } from './attended.component';

const routes: Routes = [
    { path: '', component: AttendedComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendedRoutingModule { }