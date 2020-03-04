import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './tools/list/list.component';
import { MetroComponent } from "./metro/metro.component";


const routes: Routes = [
  {path:'list',component:ListComponent},
  {path:'metro',component:MetroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
