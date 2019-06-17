import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', component: meucomponente },
  {path: 'everyone', loadChildren: './modules/home/home.module#HomeModule'},
  {path: 'attended', loadChildren: './modules/attended/attended.module#AttendedModule'},
  {path: 'trash', loadChildren: './modules/trash/trash.module#TrashModule'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }