import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ArrowComponent} from './arrow/arrow.component';
import {AppComponent} from './app.component';

const routes: Routes = [
    {
      path:'',component:ArrowComponent
    },
    {
      path:'arrow',component:ArrowComponent
    }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  