import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CreateBookComponent} from "./create-book/create-book.component";
import {ReadedComponent} from "./readed/readed.component";

const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path:"create",component:CreateBookComponent
  },
  {
    path:"readed",component:ReadedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
