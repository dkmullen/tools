import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RunCalcRoutingModule } from './run-calc-routing.module';
import { RunCalcComponent } from './run-calc.component';

@NgModule({
  declarations: [RunCalcComponent],
  imports: [
    CommonModule,
    RunCalcRoutingModule,
    ReactiveFormsModule
  ]
})
export class RunCalcModule { }
