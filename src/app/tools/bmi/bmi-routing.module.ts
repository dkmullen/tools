import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BmiComponent } from './bmi.component';

const routes: Routes = [
  { path: '', component: BmiComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BmiRoutingModule { }