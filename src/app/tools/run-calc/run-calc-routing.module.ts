import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RunCalcComponent } from './run-calc.component';

const routes: Routes = [
  { path: '', component: RunCalcComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RunCalcRoutingModule { }
